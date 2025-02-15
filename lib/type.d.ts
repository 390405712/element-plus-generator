import type { Ref, Component, ExtractPropTypes } from 'vue'
import type { InputProps, InputAutoSize } from 'element-plus/lib/components/input/src/input'
import type { InputNumberProps } from 'element-plus/lib/components/input-number/src/input-number'
import { cascaderProps as CascaderProps } from 'element-plus/lib/components/cascader/src/cascader'
import type { CascaderOption } from 'element-plus/es/components/cascader-panel'
import type { TreeComponentProps } from 'element-plus/lib/components/tree/src/tree.type'
import type { RadioProps } from 'element-plus/lib/components/radio/src/radio'
import type { RadioGroupProps } from 'element-plus/lib/components/radio/src/radio-group'
import type { CheckboxProps } from 'element-plus/lib/components/checkbox/src/checkbox.d'
import type { CheckboxGroupProps } from 'element-plus/lib/components/checkbox/src/checkbox-group'
import type { SwitchProps } from 'element-plus/lib/components/switch/src/switch'
import type { UploadProps } from 'element-plus/lib/components/upload/src/upload'
import type { FormProps } from 'element-plus/lib/components/form/src/form'
import type { FormContext } from 'element-plus/lib/components/form/src/types'
import type { ISelectProps as SelectProps } from 'element-plus/es/components/select-v2/src/token'
import type { FormItemProps } from 'element-plus/lib/components/form/src/form-item'
import type { FormItemRule } from 'element-plus/es/components/form/src/types'
import type { TableProps } from 'element-plus/lib/components/table/index'
import _default from 'element-plus/lib/components/table/src/table-column/defaults'
import { FormItemProp } from 'element-plus/lib/components/form/src/form-item.d.ts'
import type {
  FormEvents,
  InputEvents,
  InputSlots,
  InputNumberEvents,
  SelectEvents,
  SelectSlots,
  TreeEvents,
  CascaderEvents,
  CascaderSlots,
  RadioEvents,
  RadioSlots,
  CheckboxEvents,
  CheckboxSlots,
  DatePickerProps,
  DatePickerEvents,
  DatePickerSlots,
  TimePickerProps,
  TimePickerEvents,
  SwitchEvents,
  UploadSlots,
  Expose,
  TableEvents,
  TableExposes
} from './element-plus'
import type { ValidateFieldsError } from 'async-validator';

/**
 * @description: Form 方法
 * @param resetFields 重置该表单项，将其值重置为初始值，并移除校验结果
 * @param clearValidate 清理某个字段的表单验证信息。
 * @param validate 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
 * @param validateField 验证具体的某个字段。
 * @param scrollToField 滚动到指定的字段
 * @param submit 表单走验证后回调传入的方法
 * @param reset 表单重置并回调submit
 * @param cancel dialog表单返回
 * @param $refs 表单中所有控件expose内容的入口
 */
export declare type RefFormGeneratorObj = {
  validate: (callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>
  scrollToField: (prop: FormItemProp) => void;
  submit: () => void
  reset: () => void
  cancel: (...arg: any) => void
  $refs: Record<string, Ref<Expose | undefined>>
} & Pick<FormContext, 'resetFields' | 'validateField' | 'clearValidate'>

export declare type RefFormGenerator = () => RefFormGeneratorObj

/**
 * @description: 表单生成配置
 * @param model 表单数据对象
 * @param formOption 表单生成配置
 * @param noFooter 表单底部按钮
 * @param type search:搜索表单 dialog:dialog表单
 * @param column 判断展开收起的长度（包括搜索按钮那个容器）
 * @param slot 插槽（默认插槽是确定、取消按钮那块区域）
 * @param loading  确定按钮loading
 */
export type FormAttrs<T = Record<string, any>> = {
  model: T
  formOption: Array<FormOption>
  noFooter?: boolean
  type?: 'search' | 'dialog'
  column?: number
  slot?: Record<string, ((...args: any[]) => JSX.Element | string | void) | string>
  loading?: boolean
} & CanWrite<Partial<Omit<FormProps, 'model' | 'rules'>>> & FormEvents & {
  onSubmit?: (reset: 'init' | undefined) => void
  onCancel?: (...arg: any) => void
}

/**
 * @description: formItem类型
 * @param prop formItem唯一值
 * @param style 行内样式
 * @param class 类名
 */
type FormItem = {
  prop: string
  style?: string
  class?: string
  rules?: FormItemRule | Array<FormItemRule>
  slots?: {
    label?: ((...args: any[]) => JSX.Element | string | void) | string
    error?: ((...args: any[]) => JSX.Element | string | void) | string
  }
} & CanWrite<Partial<Omit<FormItemProps, 'prop' | 'rules'>>>

/**
 * @description: control类型
 * @param style 行内样式
 * @param class 类名
 */
type Control = {
  style?: string
  class?: string
}

/**
 * @description: 表单生成配置
 * @param type 表单控件类型
 * @param show 是否显示
 * @param formItem form下formItem属性
 * @param control 控件属性
 */
export type FormOption = Input | InputNumber | Select | SelectV2 | TreeSelect | Cascader | Radio | RadioButton | Checkbox | CheckboxButton | DatePicker | DateTimePicker | TimePicker | Switch | Upload | Slot

type ControlType = 'input' | 'input-number' | 'select' | 'tree-select' | 'cascader' | 'radio' | 'radio-button' | 'checkbox' | 'checkbox-button' | 'date-picker' | 'date-time-picker' | 'time-picker' | 'switch' | 'upload' | 'slot' | 'select-v2'

export type Input = {
  type: 'input'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<Omit<InputProps, 'autosize'>>> & InputEvents & InputSlots & Partial<{
    maxlength: string | number,
    minlength: string | number,
    autosize: InputAutoSize
    rows: number
    name: string
    max: number | string
    min: number | string
    step: number | string
    autofocus: boolean
  }>
}

export type InputNumber = {
  type: 'input-number'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<InputNumberProps>> & InputNumberEvents
}

export type TreeSelect = {
  type: 'tree-select'
  show?: boolean
  formItem: FormItem
  control?: Control & Partial<SelectProps> & SelectEvents & SelectSlots & Partial<{
    fitInputWidth: boolean
    remoteShowSuffix: boolean
    suffixIcon: (() => JSX.Element | string | void) | string
    suffixTransition: boolean
    tagType: 'success' | 'info' | 'warning' | 'danger'
    maxCollapseTags: number
  }> & Partial<TreeComponentProps> & TreeEvents & {
    cacheData?: Array<{
      label?: string
      value: string | number
    }>
    slots?: {
      default?: ((...args: any[]) => JSX.Element | string | void) | string
    }
  }
}

export type Select = {
  type: 'select'
  show?: boolean
  formItem: FormItem
  control?: Control & Partial<SelectProps> & SelectEvents & SelectSlots & Partial<{
    fitInputWidth: boolean
    remoteShowSuffix: boolean
    suffixIcon: (() => JSX.Element | string | void) | string
    suffixTransition: boolean
    tagType: 'success' | 'info' | 'warning' | 'danger'
    maxCollapseTags: number
    slots?: {
      default?: ((...args: any[]) => JSX.Element | string | void) | string
      header?: ((...args: any[]) => JSX.Element | string | void) | string
      footer?: ((...args: any[]) => JSX.Element | string | void) | string
      prefix?: ((...args: any[]) => JSX.Element | string | void) | string
      empty?: ((...args: any[]) => JSX.Element | string | void) | string
      tag?: ((...args: any[]) => JSX.Element | string | void) | string
      loading?: ((...args: any[]) => JSX.Element | string | void) | string
    }
  }> & {
    option: Array<{
      label?: string
      value: string | number,
      disabled?: boolean,
      slots?: {
        default?: ((...args: any[]) => JSX.Element | string | void) | string
      }
    }> | Ref<Array<{
      label?: string
      value: string | number,
      disabled?: boolean,
      slots?: {
        default?: ((...args: any[]) => JSX.Element | string | void) | string
      }
    }>>
  }
}
export type SelectV2 = {
  type: 'select-v2'
  show?: boolean
  formItem: FormItem
  control?: Control & Partial<SelectProps> & SelectEvents & SelectSlots & Partial<{
    fitInputWidth: boolean
    remoteShowSuffix: boolean
    suffixIcon: (() => JSX.Element | string | void) | string
    suffixTransition: boolean
    tagType: 'success' | 'info' | 'warning' | 'danger'
    maxCollapseTags: number
    props?: {
      value?: string
      label?: string
      disabled?: boolean
    }
    slots?: {
      default?: ((...args: any[]) => JSX.Element | string | void) | string
      header?: ((...args: any[]) => JSX.Element | string | void) | string
      footer?: ((...args: any[]) => JSX.Element | string | void) | string
      prefix?: ((...args: any[]) => JSX.Element | string | void) | string
      empty?: ((...args: any[]) => JSX.Element | string | void) | string
      tag?: ((...args: any[]) => JSX.Element | string | void) | string
      loading?: ((...args: any[]) => JSX.Element | string | void) | string
    }
  }> & {
    options: Array<{
      label?: string
      value: string | number,
      disabled?: boolean,
      slots?: {
        default?: ((...args: any[]) => JSX.Element | string | void) | string
      }
    }> | Ref<Array<{
      label?: string
      value: string | number,
      disabled?: boolean,
      slots?: {
        default?: ((...args: any[]) => JSX.Element | string | void) | string
      }
    }>>
  }
}

export type Radio = {
  type: 'radio'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<RadioGroupProps>> & { radioGroup: Ref<Array<(Partial<Omit<RadioProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & RadioSlots)>> | Array<(Partial<Omit<RadioProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & RadioSlots)> } & RadioEvents
}

export type RadioButton = {
  type: 'radio-button'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<RadioGroupProps>> & { radioGroup: Ref<Array<(Partial<Omit<RadioProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & RadioSlots)>> | Array<(Partial<Omit<RadioProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & RadioSlots)> } & RadioEvents
}

export type Cascader = {
  type: 'cascader'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<Omit<ExtractPropTypes<typeof CascaderProps>, 'options'>>> & { options?: Ref<Array<CascaderOption>> | Array<CascaderOption> } & Partial<CascaderEvents> & CascaderSlots
}

export type Checkbox = {
  type: 'checkbox'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<CheckboxGroupProps>> & { checkboxGroup: Ref<Array<(Partial<Omit<CheckboxProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & CheckboxSlots)>> | Array<(Partial<Omit<CheckboxProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & CheckboxSlots)> } & CheckboxEvents
}

export type CheckboxButton = {
  type: 'checkbox-button'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<CheckboxGroupProps>> & { checkboxGroup: Ref<Array<(Partial<Omit<CheckboxProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & CheckboxSlots)>> | Array<(Partial<Omit<CheckboxProps, 'modelValue' | 'label'>> & { value: string | number; label?: string | number } & CheckboxSlots)> } & CheckboxEvents
}

export type DatePicker = {
  type: 'date-picker'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<DatePickerProps>> & DatePickerEvents & DatePickerSlots
}

export type DateTimePicker = {
  type: 'date-time-picker'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<DatePickerProps>> & DatePickerEvents & DatePickerSlots
}

export type TimePicker = {
  type: 'time-picker'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<TimePickerProps>> & TimePickerEvents
}

export type Switch = {
  type: 'switch'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<Omit<SwitchProps, 'loading'>>> & { loading?: Ref<boolean> | boolean } & SwitchEvents
}

export type Upload = {
  type: 'upload'
  show?: boolean
  formItem: FormItem
  control?: Control & CanWrite<Partial<UploadProps>> & UploadSlots
}

export type Slot = {
  type: 'slot'
  show?: boolean
  formItem: FormItem
  control?: {
    slots?: Record<string, ((...args: any[]) => JSX.Element | string | void) | string>
  }
}

type FormOptionItemObj = {
  'input': Input
  'input-number': InputNumber
  'select': Select
  'select-v2': SelectV2
  'tree-select': TreeSelect
  'cascader': Cascader
  'radio': Radio
  'radio-button': RadioButton
  'checkbox': Checkbox
  'checkbox-button': CheckboxButton
  'date-picker': DatePicker
  'date-time-picker': DateTimePicker
  'time-picker': TimePicker
  'switch': Switch
  'upload': Upload
  'slot': Slot
}

export type FormOptionItem<T extends ControlType = ControlType> = FormOptionItemObj[T]

/**
 * @description: Table 方法
 */
export declare type RefTableGeneratorObj = TableExposes
export declare type RefTableGenerator = () => RefTableGeneratorObj

/**
 * @description: 表格生成配置
 * @param data 表格数据
 * @param tableOption 表格生成配置
 * @param loading 是否加载动画
 */
export type TableAttrs<T = Record<string, any>> = {
  tableOption: Array<TableOption>
  loading?: boolean
  operationWidth?: number
} & Partial<TableProps<T>> & TableEvents

/**
 * @description: 表格生成配置
 * @param prop 表格列key
 * @param label 表格列名称
 * @param type 列的类型
 */
export type TableOption = {
  type?: 'selection' | 'index' | 'expand'
  slots?: Record<string, ((...args: any[]) => JSX.Element | string | void) | string>
  children?: Array<TableOption>
  formatter?: (scope: { $index: number, row: Record<string, any> }) => any
} & Partial<Omit<ExtractPropTypes<typeof _default>, 'type' | 'formatter'>>

export type StepsAttrs = {
  space?: number | string
  direction?: 'vertical' | 'horizontal'
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  alignCenter?: boolean
  simple?: boolean
  stepsOption: Array<StepsOption>
  onPrev?: (activeIndex: number, next: (activeIndex?: number) => void) => void
  onNext?: (activeIndex: number, next: (activeIndex?: number) => void) => void
}

export type StepsOption = {
  key: string
  title?: string
  description?: string
  icon?: Component | string
  status?: '' | 'wait' | 'process' | 'finish' | 'error' | 'success'
  slots?: {
    icon?: ((...args: any[]) => JSX.Element | string | void) | string
    title?: ((...args: any[]) => JSX.Element | string | void) | string
    description?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type CanWrite<T> = {
  -readonly [K in keyof T]: T[K] extends Record<any, any> ? CanWrite<T[K]> : T[K]
}
