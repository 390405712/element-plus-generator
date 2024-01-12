import { ElTable, ElTableColumn, ElEmpty, ElLoading } from 'element-plus'
import { ref, watch, defineComponent, nextTick } from 'vue';
import type { TableAttrs, TableOption, RefTableGeneratorObj } from './type.d'

export default defineComponent({
  name: 'TableGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const RefTableGenerator = ref<RefTableGeneratorObj>()
    const _attrs = attrs as TableAttrs
    let loading: any
    const el = new Date().getTime()
    const width = ref<number | 'auto'>('auto')
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

    if (_attrs.operationWidth) {
      width.value = _attrs.operationWidth
    } else {
      watch(() => _attrs.data, () => {
        nextTick(() => {
          const arr: number[] = []
          document.querySelectorAll<HTMLDivElement>(`.el-table-${el} .content-wrapper`).forEach((i) => {
            arr.push(i.offsetWidth)
          })
          width.value = Math.max(...arr) + 32
        })
      }, {
        immediate: true,
      })
    }
    expose(() => (RefTableGenerator.value))

    return () => {
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
      return (
        <>{renderTable()}</>
      )
    }
  }
})