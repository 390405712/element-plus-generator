import { ElButton, ElForm, ElFormItem, ElInput, ElInputNumber, ElSelect, ElOption, ElRadioGroup, ElRadio, ElRadioButton, ElCheckboxGroup, ElCheckbox, ElCheckboxButton, ElDatePicker, ElTimePicker, ElSwitch, ElUpload, ElTreeSelect, ElCascader } from 'element-plus'
import { Search, Refresh, ArrowUp } from '@element-plus/icons-vue'
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import type { FormAttrs, RefFormGeneratorObj, FormOption } from './type.d'
import type { Expose } from './element-plus'

export default defineComponent({
  name: 'FormGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs as FormAttrs
    const RefFormGenerator = ref<RefFormGeneratorObj>()
    const $refs: Record<string, Ref<Expose | undefined>> = {}
    const more = ref(false)
    const column = (!isNaN(_attrs.column!) ? (_attrs.column! >= 4 ? _attrs.column : 4) : 4) as number
    const form: Pick<RefFormGeneratorObj, 'submit' | 'reset'> = {
      submit: () => {
        RefFormGenerator.value!.validate((isValid) => {
          if (isValid) emit('submit')
        })
      },
      reset: () => {
        RefFormGenerator.value!.resetFields()
        emit('submit', 'init')
      }
    }

    function setShow(bool: boolean) {
      more.value = bool
      _attrs.formOption.forEach((i, index) => {
        if (index > column - 2) i.show = bool
      })
    }

    if (_attrs.formOption.length >= (column - 2) && _attrs?.type === 'search') setShow(false)
    expose(() => ({ ...RefFormGenerator.value, ...form, $refs }))

    return () => {
      function renderForm() {
        return (
          <ElForm class={`FormGenerator ${_attrs?.type === 'search' ? 'FormGeneratorSearch' : ''} ${_attrs?.type === 'dialog' ? 'FormGeneratorDialog' : ''}`} inline={_attrs?.type === 'search' ? true : false} validate-on-rule-change={false} label-width={_attrs.labelWidth || 'auto'} {..._attrs} ref={RefFormGenerator} >
            {_attrs.formOption.map((formOption) => <ElFormItem
              {...formOption.formItem}
              style={formOption.hasOwnProperty('show') && formOption.show === false ? 'display:none' : ''}
              key={formOption.formItem.prop}
              v-slots={{ ...formOption.formItem?.slots }}
            >
              {renderControl(formOption)}
            </ElFormItem>)}
            {_attrs.disabled === true || _attrs.noFooter || !_attrs.onSubmit
              ? ''
              : <ElFormItem
                class={`btnItem ${more.value ? "searchItem" : ""}`}
                v-slots={{
                  default: () => slots?.default && typeof slots?.default()[0].type === 'string'
                    ? <>{slots.default()[0].children}</>
                    : _attrs?.type === 'search'
                      ? renderSearchItem()
                      : <>
                        {
                          _attrs?.type === 'dialog'
                            ? <ElButton onClick={(e: Event) => {
                              function getDialogEl(el: HTMLElement): HTMLElement {
                                if (!el.parentElement!.classList.value.split(' ').includes('el-dialog')) return getDialogEl(el.parentElement as HTMLDivElement)
                                return el.parentElement!
                              }
                              getDialogEl(e.target as HTMLElement).querySelector<HTMLElement>('.el-dialog__headerbtn')!?.click?.()
                            }}>取消</ElButton>
                            : ''
                        }
                        <ElButton type="primary" onClick={form.submit}>确定</ElButton>
                      </>,
                  label: () => ''
                }}
              />
            }
          </ElForm >
        )
      }
      function renderControl(formOption: FormOption) {
        $refs[formOption.formItem.prop] = ref()
        switch (formOption.type) {
          case 'input':
            return <ElInput ref={$refs[formOption.formItem.prop]} clearable={true} maxlength={30} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slots }} />
            break;
          case 'input-number':
            return <ElInputNumber ref={$refs[formOption.formItem.prop]} min={0} max={100} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} />
            break;
          case 'select':
            return <ElSelect ref={$refs[formOption.formItem.prop]} clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} >
              {formOption?.control?.option instanceof Array ? formOption?.control?.option.map((controlOptionItem) => (
                <ElOption {...controlOptionItem} v-slots={{ ...controlOptionItem?.slots }} key={controlOptionItem.value} />
              )) : ''}
            </ElSelect>
            break;
          case 'tree-select':
            return <ElTreeSelect ref={$refs[formOption.formItem.prop]} clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slots }}></ElTreeSelect>
            break;
          case 'cascader':
            return <ElCascader ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slots }}></ElCascader>
            break;
          case 'radio':
            return (
              <ElRadioGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.radioGroup instanceof Array ? formOption?.control?.radioGroup!.map((controlOptionItem) => (
                  <ElRadio {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slots }} key={controlOptionItem.label} >{controlOptionItem.label}</ElRadio>
                )) : ''}
              </ElRadioGroup>
            )
            break;
          case 'radio-button':
            return (
              <ElRadioGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.radioGroup instanceof Array ? formOption?.control?.radioGroup!.map((controlOptionItem) => (
                  <ElRadioButton {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slots }} key={controlOptionItem.label} >{controlOptionItem.label}</ElRadioButton>
                )) : ''}
              </ElRadioGroup>
            )
            break;
          case 'checkbox':
            return (
              <ElCheckboxGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.checkboxGroup instanceof Array ? formOption?.control?.checkboxGroup.map((controlOptionItem) => (
                  <ElCheckbox  {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slots }} key={controlOptionItem.label} >{controlOptionItem.label}</ElCheckbox>
                )) : ''}
              </ElCheckboxGroup>
            )
            break;
          case 'checkbox-button':
            return (
              <ElCheckboxGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.checkboxGroup instanceof Array ? formOption?.control?.checkboxGroup.map((controlOptionItem) => (
                  <ElCheckboxButton  {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slots }} key={controlOptionItem.label} >{controlOptionItem.label}</ElCheckboxButton>
                )) : ''}
              </ElCheckboxGroup>
            )
            break;
          case 'date-picker':
          case 'date-time-picker':
            const formatEnum = {
              'datetimerange': 'YYYY-MM-DD hh:mm:ss',
              'daterange': 'YYYY-MM-DD',
              'datetime': 'YYYY-MM-DD hh:mm:ss',
              'date': 'YYYY-MM-DD',
            }
            const formatEnumVal = formatEnum[formOption?.control?.type as keyof typeof formatEnum || 'date']
            return <ElDatePicker ref={$refs[formOption.formItem.prop]} clearable={true} format={formatEnumVal} value-format={formatEnumVal} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slots }} />
            break;
          case 'time-picker':
            return <ElTimePicker ref={$refs[formOption.formItem.prop]} clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} />
            break;
          case 'switch':
            return <ElSwitch ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} />
            break;
          case 'upload':
            return (
              <ElUpload ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model:file-list={_attrs.model[formOption.formItem.prop]}
                v-slots={{
                  default: () => _attrs.disabled ? '' : <ElButton type="primary">上传文件</ElButton>,
                  ...formOption?.control?.slots
                }} >
              </ElUpload>
            )
            break;
          case 'slot':
            if (formOption?.control?.slots?.default && typeof formOption?.control?.slots?.default === 'function') return <>{formOption.control.slots.default?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.prop] })}</>
            if (slots[formOption.formItem.prop]) return slots[formOption.formItem.prop]?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.prop] })
            return _attrs.model[formOption.formItem.prop]
            break;
        }
      }
      function renderSearchItem() {
        return (
          <>
            <ElButton type="primary" onClick={form.submit} icon={Search}>搜索</ElButton>
            <ElButton onClick={form.reset} icon={Refresh}>重置</ElButton>
            {_attrs.type === 'search' && _attrs.formOption.length > (column - 1)
              ? <><ElButton text type="primary" class={`expandBtn ${more.value ? 'up' : 'down'}`} onClick={() => { setShow(!more.value) }} icon={ArrowUp}>{more.value ? '收起' : '展开'}</ElButton></>
              : ''
            }
          </>
        )
      }
      return (
        renderForm()
      )
    }
  },
})