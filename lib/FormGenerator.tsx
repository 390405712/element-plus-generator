import { ElIcon, ElButton, ElForm, ElFormItem, ElInput, ElInputNumber, ElSelect, ElOption, ElRadioGroup, ElRadio, ElRadioButton, ElCheckboxGroup, ElCheckbox, ElCheckboxButton, ElDatePicker, ElTimePicker, ElSwitch, ElUpload, ElTreeSelect, ElCascader } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { Search, Refresh, ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import type { formAttrs, RefFormGeneratorObj, RefFormGenerator, formOption } from './type.d'

export default defineComponent({
  name: 'FormGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs as formAttrs
    const formRef = ref<FormInstance>()
    const $refs: Record<string, Ref<any>> = {}
    const more = ref(false)
    const column = (!isNaN(_attrs.column!) ? (_attrs.column! >= 4 ? _attrs.column : 4) : 4) as number
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
        if (index > column - 2) i.show = bool
      })
    }

    if (_attrs.formOption.length >= (column - 2) && _attrs?.type === 'search') setShow(false)

    expose(() => ({ ...formRef.value, ...form, $refs }))

    return () => {
      function renderForm() {
        let formAttr: Omit<formAttrs, 'model' | 'formOption'> = { ..._attrs }
        delete formAttr.model
        delete formAttr.formOption
        return (
          <ElForm class={`FormGenerator ${_attrs?.type === 'search' ? 'FormGeneratorSearch' : ''} ${_attrs?.type === 'dialog' ? 'FormGeneratorDialog' : ''}`} inline={_attrs?.type === 'search' ? true : false} validate-on-rule-change={false} label-width={_attrs.labelWidth || 'auto'} {...formAttr} ref={formRef} >
            {_attrs.formOption.map((formOption) => {
              if (!(formOption.hasOwnProperty('show') && formOption.show === false)) return <ElFormItem {...formOption.formItem} key={formOption.formItem.prop}>{renderControl(formOption)}</ElFormItem>
            })}
            {formAttr.disabled === true || formAttr.noFooter || !formAttr.onSubmit
              ? ''
              : <ElFormItem
                class={`btnItem ${more.value ? "searchItem" : ""}`}
                v-slots={{
                  default: () => slots?.default
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
      function renderControl(formOption: formOption) {
        $refs[formOption.formItem.prop] = ref()
        switch (formOption.type) {
          case 'input':
            return <ElInput ref={$refs[formOption.formItem.prop]} clearable={true} maxlength={30} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'input-number':
            return <ElInputNumber ref={$refs[formOption.formItem.prop]} min={0} max={100} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} />
            break;
          case 'select':
            return <ElSelect ref={$refs[formOption.formItem.prop]} clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} >
              {formOption?.control?.option!.map((controlOptionItem) => (
                <ElOption {...controlOptionItem} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.value} />
              ))}
            </ElSelect>
            break;
          case 'tree-select':
            return <ElTreeSelect ref={$refs[formOption.formItem.prop]} clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }}></ElTreeSelect>
            break;
          case 'cascader':
            return <ElCascader ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }}></ElCascader>
            break;
          case 'radio':
            return (
              <ElRadioGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElRadio {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElRadio>
                ))}
              </ElRadioGroup>
            )
            break;
          case 'radio-button':
            return (
              <ElRadioGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElRadioButton {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElRadioButton>
                ))}
              </ElRadioGroup>
            )
            break;
          case 'checkbox':
            return (
              <ElCheckboxGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
                {formOption?.control?.option!.map((controlOptionItem) => (
                  <ElCheckbox  {...controlOptionItem} label={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slot }} key={controlOptionItem.label} >{controlOptionItem.label}</ElCheckbox>
                ))}
              </ElCheckboxGroup>
            )
            break;
          case 'checkbox-button':
            return (
              <ElCheckboxGroup ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]}>
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
            return <ElDatePicker ref={$refs[formOption.formItem.prop]} clearable={true} format={formatEnumVal} value-format={formatEnumVal} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'time':
            return <ElTimePicker ref={$refs[formOption.formItem.prop]} clearable={true} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'switch':
            return <ElSwitch ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model={_attrs.model[formOption.formItem.prop]} v-slots={{ ...formOption?.control?.slot }} />
            break;
          case 'upload':
            return (
              <ElUpload ref={$refs[formOption.formItem.prop]} {...formOption?.control} v-model:file-list={_attrs.model[formOption.formItem.prop]}
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