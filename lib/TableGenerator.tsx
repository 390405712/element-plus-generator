import { ElTable, ElTableColumn, ElEmpty, ElLoading } from 'element-plus'
import { ref, watch, defineComponent, nextTick } from 'vue';
import type { TableAttrs, TableOption, RefTableGeneratorObj } from './type.d'

export default defineComponent({
  name: 'TableGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const RefTableGenerator = ref<RefTableGeneratorObj>()
    const _attrs = attrs as TableAttrs
    let loading: any
    let el = new Date().getTime()
    let show = ref(false)
    let width = ref<number | 'auto'>(0)
    watch(() => _attrs.loading, (val) => {
      if (val) {
        nextTick(() => {
          loading = ElLoading.service({
            target: `.el-table-${el}`
          })
        })
      } else {
        loading?.close()
      }
    }, {
      immediate: true,
    })

    watch(() => _attrs.data, (val) => {
      if (!slots?.operation || val.length === 0) return show.value = true
      show.value = false
      nextTick(() => {
        let w = 0
        document.querySelectorAll<HTMLDivElement>('.content-wrapper-width').forEach((i) => {
          if (i.offsetWidth > w) w = i.offsetWidth
        })
        width.value = w > 0 ? w + 32 : 'auto'
        show.value = true
      })
    }, {
      immediate: true,
    })

    expose(() => (RefTableGenerator.value))

    return () => {
      // function renderIndexColumn() {
      //   return <ElTableColumn type="index" fixed="left" align="left" width="60" label="序号"></ElTableColumn>
      // }
      // function renderSelectionColumn() {
      //   return <ElTableColumn type="selection" fixed="left" width="60"></ElTableColumn>
      // }
      function renderColumn(tableOption: TableOption[]) {
        return tableOption.map((item) => {
          if (['selection', 'index', 'expand'].includes(item.type!)) {
            return <ElTableColumn type={item.type} {...item} v-slots={{ ...item?.slots }} />
          }
          return <ElTableColumn
            show-overflow-tooltip={true}
            align="left"
            {...item}
            v-slots={{
              default: (scope: { $index: number, row: Record<string, any> }) =>
                item.children && Array.isArray(item.children) && item.children.length > 0
                  ? renderColumn(item.children)
                  : (
                    slots[item.prop!]
                      // ? <>{slots[item.prop]?.({ $index: scope.$index, row: scope.row,column:scope.column,store:scope.store })}</>
                      ? <>{slots[item.prop!]?.({ $index: scope.$index, row: scope.row })}</>
                      : (
                        item.formatter
                          ? <>{item.formatter({ $index: scope.$index, row: scope.row }) ?? '-'}</>
                          : <>{scope.row[item.prop!] ?? '-'}</>
                      )
                  ),
              ...item?.slots
            }}
          >
          </ElTableColumn>
        })
      }
      function renderTable() {
        return (
          <ElTable
            ref={RefTableGenerator}
            stripe={true}
            {..._attrs}
            class={`TableGenerator el-table-${el}`}
            v-slots={{
              empty: () => slots?.empty
                ? slots?.empty()
                : <ElEmpty description="暂无数据" />,
              append: () => slots?.append
                ? slots?.append()
                : ''
            }}
          >
            {/* {_attrs.onSelectionChange ? renderSelectionColumn() : ''} */}
            {/* {_attrs.showIndex === false ? '' : renderIndexColumn()} */}
            {renderColumn(_attrs.tableOption)}
            {slots?.operation ? <ElTableColumn fixed="right" label="操作"
              width={width.value}
              v-slots={{
                default: (scope: { $index: number, row: Record<string, any> }) => <div class='content-wrapper'>{slots.operation?.({ $index: scope.$index, row: scope.row })}</div>
              }}
            /> : ''}
          </ElTable>
        )
      }
      function renderOriginTable() {
        return (
          <ElTable
            {...attrs}
            class={`TableGenerator el-table-${el}`}
          >
            {/* {_attrs.onSelectionChange ? renderSelectionColumn() : ''} */}
            {/* {_attrs.showIndex === false ? '' : renderIndexColumn()} */}
            <ElTableColumn fixed="right"
              v-slots={{
                default: (scope: { $index: number, row: Record<string, any> }) => <div style="display:inline-block;opacity:0" class='content-wrapper content-wrapper-width'>{slots.operation?.({ $index: scope.$index, row: scope.row })}</div>
              }}
            />
          </ElTable>
        )
      }
      return (
        <>{show.value ? renderTable() : renderOriginTable()}</>
      )
    }
  }
})