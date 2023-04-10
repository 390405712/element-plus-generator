import type { FormItemRule } from 'element-plus'
import type { FormOption } from './type.d'

type option = {
  label: string
  value: string,
}
/**
 * @description: 生成表单控件使用的option
 * @param arr 原始list
 * @param label 赋值label的key名
 * @param value 赋值value的key名
 * @param custom 自定义需要合并的对象
 */
export const getOption = (arr: Record<string, string>[] | string[], label: string, value: string, custom?: {}): option[] => {
  if (!Array.isArray(arr)) return []
  const options: option[] = []
  let customKeys: string[] = []
  if (custom) customKeys = Object.keys(custom)
  arr.forEach((item) => {
    let params: option & Record<string, string> = {
      label: typeof item === 'string' ? item : item[label],
      value: typeof item === 'string' ? item : item[value]
    }
    if (custom) {
      customKeys.forEach((key) => {
        params[key] = (item as Record<string, string>)[key]
      })
    }
    options.push(params)
  })
  return options
}

/**
 * @description: 生成校验配置
 * @param formOption 表单配置 formOption[]
 * @param omit 不需要验证的key  string[]
 * @return formOption
 */
export const setRequired = (formOption: Pick<FormOption, 'type' | 'formItem'>[], omit: string[] = []): Pick<FormOption, 'type' | 'formItem'>[] => {
  const type = {
    'input': '输入',
    'input-number': '输入',
    'select': '选择',
    'tree-select': '选择',
    'cascader': '选择',
    'radio': '选择',
    'radio-button': '选择',
    'checkbox': '选择',
    'checkbox-button': '选择',
    'date-picker': '选择',
    'date-time-picker': '选择',
    'time-picker': '选择',
    'switch': '选择',
    'upload': '上传',
    'slot': '完善',
  }
  formOption.forEach((i) => {
    const requiredObj: FormItemRule = { required: true, message: `请${(type[i.type] ?? '完善')}${i.formItem.label ?? ''}`, trigger: 'change' }
    if (!omit.includes(i.formItem.prop)) {
      if (i.formItem?.rules instanceof Object) {
        i.formItem.rules = [requiredObj, i.formItem.rules as FormItemRule]
      } else if (Array.isArray(i.formItem?.rules)) {
        (i.formItem.rules as FormItemRule[]).unshift(requiredObj)
      } else {
        i.formItem.rules = [requiredObj]
      }
      if (i.formItem?.rules instanceof Array) {
        for (let index = 0; index < i.formItem.rules.length; index++) {
          let item = i.formItem.rules[index]
          if (!item.message) item.message = '格式有误'
        }
      }
    }
  })
  return formOption
}