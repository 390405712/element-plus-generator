import type { Ref } from 'vue'

/**
 * @description: Form 方法
 * @param resetFields 重置该表单项，将其值重置为初始值，并移除校验结果
 * @param clearValidate 清理某个字段的表单验证信息。
 * @param validate 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
 * @param validateField 验证具体的某个字段。
 * @param scrollToField 滚动到指定的字段
 * @param submit 表单走验证后回调传入的方法
 * @param reset 表单重置并回调submit
 */
export declare type RefFormGeneratorObj = {
  resetFields: () => void
  clearValidate: () => void
  validate: (val?: string[]) => Promise<boolean>
  validateField: (val?: string) => Promise<boolean>
  scrollToField: () => void
  submit: () => void
  reset: () => void
  $refs: Record<string, Ref<Record<string, any>>>
}


export declare type RefFormGenerator = () => RefFormGeneratorObj


/**
 * @description: 校验对象
 * @param required 是否必填
 * @param message 自定义验证提示
 * @param trigger 触发时机
 * @param validator 校验方法
 */
export declare type rule = {
  [key: string]: any
  required?: boolean
  message?: string
  trigger?: 'change' | 'blur'
  validator?: RegExp | ((rule: rule, value: string | boolean) => Promise<void>),
};

/**
 * @description: 表单生成配置
 * @param model 表单数据对象
 * @param formOption 表单生成配置
 * @param rules 校验对象
 * @param noFooter 表单底部按钮
 * @param type search:搜索表单 dialog:dialog表单
 * @param column 判断展开收起的长度（包括搜索按钮那个容器）
 * @param slot 插槽（默认插槽是确定、取消按钮那块区域）
 */
export declare interface formAttrs {
  [key: string]: any
  model: Record<string, any>
  formOption: formOption[]
  rules?: rule[]
  noFooter?: boolean
  type?: 'search' | 'dialog'
  column?: number
  slot?: Record<string, ((arg0: any) => JSX.Element | string | void) | string>
}

/**
 * @description: 表单生成配置
 * @param type 表单控件类型
 * @param show 是否显示
 * @param formItem form下formItem属性
 * @param control 控件属性
 */
export declare interface formOption {
  type: 'input' | 'input-number' | 'select' | 'tree-select' | 'cascader' | 'radio' | 'radio-button' | 'checkbox' | 'checkbox-button' | 'datetime' | 'time' | 'switch' | 'upload' | 'txt' | 'slot'
  show?: boolean
  formItem: {
    [key: string]: any
    prop: string,
    label?: string,
    rules?: rule | rule[]
    style?: any
  }
  control?: {
    [key: string]: any
    option?: option[]
    slot?: Record<string, ((arg0: any) => JSX.Element | string | void) | string>
  }
}

/**
 * @description: 表格生成配置
 * @param data 表格数据
 * @param tableOption 表格生成配置
 * @param loading 是否加载动画
 */
export declare interface tableAttrs {
  [key: string]: any
  data: Record<string, any>[]
  tableOption: tableOption[]
  loading?: boolean
}

/**
 * @description: 表格生成配置
 * @param prop 表格列key
 * @param label 表格列名称
 * @param type 列的类型
 */
export declare interface tableOption {
  [key: string]: any
  type?: 'selection' | 'index' | 'expand'
  prop?: string
  label?: string
  slot?: Record<string, ((arg0: any) => JSX.Element | string | void) | string>
  children?: tableOption[]
}

/**
 * @description: option对象
 * @param label 名称
 * @param value 值
 * @param slot 插槽
 */
export declare type option = {
  [key: string]: any
  label?: string
  value: string,
  slot: Record<string, ((arg0: any) => JSX.Element | string | void) | string>
} | {
  [key: string]: any
  label: string
  value: string,
  slot?: Record<string, ((arg0: any) => JSX.Element | string | void) | string>
}