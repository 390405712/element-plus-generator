import type { FormRules } from 'element-plus';
import type { option, formOption, rule } from './type.d';
/**
 * @description: 生成表单控件使用的option
 * @param arr 原始list
 * @param label 赋值label的key名
 * @param value 赋值value的key名
 * @param custom 自定义需要合并的对象
 */
export declare const getOption: (arr: Record<string, string>[] | string[], label: string, value: string, custom?: {}) => option[];
/**
 * @description: 获取表单配置中指定的对象
 * @param formOption 表单配置
 * @param key 指定的key
 */
export declare const getLabel: (formOption: formOption[], key: string) => formOption;
/**
 * @description: 生成校验配置
 * @param formOption 表单配置
 * @param omit 不需要验证的key
 */
export declare const getRules: (formOption: formOption[], omit?: string[]) => FormRules;
export declare const CommonValidator: {
    checkIphoneNum: (rule: rule, value: string | boolean) => Promise<void>;
};
