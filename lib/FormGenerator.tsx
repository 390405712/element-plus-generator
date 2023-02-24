import { ElIcon, ElButton, ElForm, ElFormItem, ElInput, ElInputNumber, ElSelect, ElOption, ElRadioGroup, ElRadio, ElRadioButton, ElCheckboxGroup, ElCheckbox, ElCheckboxButton, ElDatePicker, ElTimePicker, ElSwitch, ElUpload, ElTreeSelect, ElCascader } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { Search, Refresh, ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { defineComponent, ref } from 'vue'
import type {
  formAttrs, RefFormGeneratorObj, RefFormGenerator, formOption
} from './type.d'

export default defineComponent({
  name: 'FormGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs as formAttrs
    const formRef = ref<FormInstance>()
    const more = ref(false)
    const defaultFormAttr = {
      labelWidth: _attrs.labelWidth || 'auto',
      column: (!isNaN(_attrs.column!) ? (_attrs.column! >= 4 ? _attrs.column : 4) : 4) as number
    }
    const form: Pick<RefFormGeneratorObj, 'submit' | 'reset'> = {
      submit: () => {
        formRef.value!.validate((valid: boolean) => {
          if (valid) emit('submit')
        })
      },
      reset: () => {
        formRef.value!.resetFields()
        emit('submit', 'init')
      }
    }

    function setShow(bool: boolean) {
      more.value = bool
      _attrs.formOption.forEach((i, index) => {
        if (index > defaultFormAttr.column - 2) i.show = bool
      })
    }

    if (_attrs.formOption.length >= (defaultFormAttr.column - 2) && _attrs?.type === 'search') setShow(false)

    expose(() => ({ ...formRef.value, ...form }))

    return () => {
      function renderForm() {
        let formAttr: Omit<formAttrs, 'model' | 'formOption'> = { ..._attrs }
        delete formAttr.model
        delete formAttr.formOption
        _attrs.formOption.forEach((i) => {
          if (i?.formItem?.rules && !i?.formItem?.rules?.hasOwnProperty('trigger')) i.formItem.rules.trigger = 'blur'
        })
        return (
          <ElForm class={`FormGenerator ${_attrs?.type === 'search' ? 'FormGeneratorSearch' : ''} ${_attrs?.type === 'dialog' ? 'FormGeneratorDialog' : ''}`} inline={_attrs?.type === 'search' ? true : false} validate-on-rule-change={false} {...defaultFormAttr} {...formAttr} ref={formRef} >
            {_attrs.formOption.map((formOption) => {
              if (!(formOption.hasOwnProperty('show') && formOption.show === false)) return <ElFormItem {...formOption.formItem}>{renderControl(formOption)}</ElFormItem>
            })}
            {formAttr.disabled === true || formAttr.noFooter || !formAttr.onSubmit
              ? ''
              : <ElFormItem
                // style={_attrs.inline === true ? {width:`calc${100 / defaultFormAttr.column}% - 8px`} : ''}
                class={`btnItem ${more.value ? "searchItem" : ""}`}
                v-slots={{
                  default: () => slots?.default
                    ? <>{slots.default()[0].children}</>
                    : _attrs?.type === 'search'
                      ? renderSearchItem()
                      : <>
                        <ElButton onClick={(e: Event) => {
                          function getDialogEl(el: HTMLElement): HTMLElement {
                            if (el.parentElement!.className !== 'el-dialog') return getDialogEl(el.parentElement as HTMLDivElement)
                            return el.parentElement!
                          }
                          getDialogEl(e.target as HTMLElement).querySelector<HTMLElement>('.el-dialog__headerbtn')!.click()
                        }}>取消</ElButton>
                        <ElButton type="primary" onClick={form.submit}>确定</ElButton>
                      </>,
                  label:()=>''
                }}
              />
            }
            {/*
              {slots?.default
                ? <>{slots.default()[0].children}</>
                : <>
                  <ElButton onClick={form.reset}>重置</ElButton>
                  <ElButton type="primary" onClick={form.submit}>查询</ElButton>
                </>
              } */}
          </ElForm >
        )
      }
      function renderControl(formOption: formOption) {
        switch (formOption.type) {
          case 'input':
            return <ElInput clearable={true} maxlength={30} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'input-number':
            return <ElInputNumber min={0} max={100} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} />
            break;
          case 'select':
            return <ElSelect clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} >
              {formOption?.control?.option!.map((controlOptionItem) => (
                <ElOption {...controlOptionItem} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.value} />
              ))}
            </ElSelect>
            break;
          case 'tree-select':
            return <ElTreeSelect clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }}></ElTreeSelect>
            break;
          case 'cascader':
            return <ElCascader {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} ></ElCascader>
            break;
          case 'radio':
            return (
              <ElRadioGroup {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElRadio {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElRadio>
                ))}
              </ElRadioGroup>
            )
            break;
          case 'radio-button':
            return (
              <ElRadioGroup {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElRadioButton {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElRadioButton>
                ))}
              </ElRadioGroup>
            )
            break;
          case 'checkbox':
            return (
              <ElCheckboxGroup {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElCheckbox  {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElCheckbox>
                ))}
              </ElCheckboxGroup>
            )
            break;
          case 'checkbox-button':
            return (
              <ElCheckboxGroup {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElCheckboxButton  {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElCheckboxButton>
                ))}
              </ElCheckboxGroup>
            )
            break;
          case 'datetime':
            const formatEnum = {
              'datetimerange': 'YYYY-MM-DD hh:mm:ss',
              'daterange': 'YYYY-MM-DD',
              'datetime': 'YYYY-MM-DD hh:mm:ss',
              'date': 'YYYY-MM-DD',
            }
            const formatEnumVal = formatEnum[formOption?.control?.type as keyof typeof formatEnum || 'date']
            return <ElDatePicker clearable={true} format={formatEnumVal} value-format={formatEnumVal} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'time':
            return <ElTimePicker clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'switch':
            return <ElSwitch {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'upload':
            return (
              <ElUpload {...formOption?.control} v-model:file-list={_attrs.model[formOption.formItem.prop]}
                v-slots={{
                  default: () => _attrs.disabled ? '' : <ElButton type="primary">上传文件</ElButton>,
                  ...formOption?.control?.slot
                }} >
              </ElUpload>
            )
            break;
          case 'txt':
            return (
              <>{_attrs.model[formOption.formItem.prop]}</>
            )
            break;
          case 'slot':
            return <>{slots[formOption.formItem.prop]?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.prop] })}</>
            break;
        }
      }
      function renderSearchItem() {
        return (
          <>
            <ElButton type="primary" onClick={form.submit} icon={Search}>搜索</ElButton>
            <ElButton onClick={form.reset} icon={Refresh}>重置</ElButton>
            {_attrs.type === 'search' && _attrs.formOption.length > (defaultFormAttr.column - 1)
              ? <><ElButton text type="primary" onClick={() => { setShow(!more.value) }} icon={more.value ? ArrowUp : ArrowDown}>{more.value ? '收起' : '展开'}</ElButton></>
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