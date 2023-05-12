import { ElButton, ElSteps, ElStep } from 'element-plus'
import { defineComponent, ref } from 'vue'
import type { StepsAttrs } from './type.d'

export default defineComponent({
  name: 'StepsGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs as StepsAttrs
    const activeIndex = ref(0)

    function prev() {
      if (_attrs?.onPrev && typeof _attrs?.onPrev === 'function') {
        _attrs.onPrev(activeIndex.value, (val: number) => {
          val
            ? activeIndex.value = val
            : activeIndex.value === 0
              ? ''
              : activeIndex.value--
        })
      } else {
        activeIndex.value === 0
          ? ''
          : activeIndex.value--
      }
    }
    function next() {
      if (_attrs?.onNext && typeof _attrs?.onNext === 'function') {
        _attrs.onNext(activeIndex.value, (val: number) => {
          val
            ? activeIndex.value = val
            : activeIndex.value === _attrs.stepsOption.length - 1
              ? ''
              : activeIndex.value++
        })
      } else {
        activeIndex.value === _attrs.stepsOption.length - 1
          ? ''
          : activeIndex.value++
      }
    }

    expose({ prev, next })
    return () => {
      function renderSteps() {
        return <div class='StepsGenerator' >
          <ElSteps align-center {..._attrs} active={activeIndex.value}>
            {_attrs.stepsOption.map((stepsOption) => {
              return <ElStep {...stepsOption} v-slots={{ ...stepsOption?.slots }} />
            })}
          </ElSteps >
          <div class='container'>
            {Object.keys(slots).map((key, index) => {
              return <div style={{ display: activeIndex.value === index ? 'block' : 'none' }}>{slots[key]()}</div>
            })}
          </div>
          <div class='btn-group'>
            {slots.default
              ? slots.default(activeIndex.value)
              : <>
                {activeIndex.value > 0 ? <ElButton type="primary" plain onClick={prev}>上一步</ElButton> : ''}
                <ElButton type="primary" plain onClick={next}> {activeIndex.value === _attrs.stepsOption.length - 1 ? '提交' : '下一步'}</ElButton>
              </>
            }
          </div>
        </div>
      }
      return (
        renderSteps()
      )
    }
  },
})