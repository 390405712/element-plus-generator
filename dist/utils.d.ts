import type { FormOption } from './type.d';
type option = {
    label: string;
    value: string;
};
/**
 * @description: 生成表单控件使用的option
 * @param arr 原始list
 * @param label 赋值label的key名
 * @param value 赋值value的key名
 * @param custom 自定义需要合并的对象
 */
export declare const getOption: (arr: Record<string, string>[] | string[], label: string, value: string, custom?: {}) => option[];
/**
 * @description: 生成校验配置
 * @param formOption 表单配置 formOption[]
 * @param omit 不需要验证的key  string[]
 * @return formOption
 */
export declare const setRequired: (formOption: Pick<FormOption, 'type' | 'formItem'>[], omit?: string[]) => Pick<FormOption, 'type' | 'formItem'>[];
export {};
