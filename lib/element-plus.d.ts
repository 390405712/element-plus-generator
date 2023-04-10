import type { TreeNodeData, TreeKey, TreeData } from 'element-plus/lib/components/tree/src/tree.type'
import type { CascaderNode, CascaderValue, CascaderNodeValue, CascaderNodePathValue } from 'element-plus/lib/components/cascader-panel';

export type DatePickerProps = import("vue").ExtractPropTypes<{
  type: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => import("element-plus/lib/components/date-picker/src/date-picker.type").IDatePickerType & {}) | (() => import("element-plus/lib/components/date-picker/src/date-picker.type").IDatePickerType) | ((new (...args: any[]) => import("element-plus/lib/components/date-picker/src/date-picker.type").IDatePickerType & {}) | (() => import("element-plus/lib/components/date-picker/src/date-picker.type").IDatePickerType))[], unknown, unknown, "date", boolean>;
  disabledDate: {
    readonly type: import("vue").PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  cellClassName: {
    readonly type: import("vue").PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  shortcuts: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
  arrowControl: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  label: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
  tabindex: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
  validateEvent: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  unlinkPanels: BooleanConstructor;
  disabledHours: {
    readonly type: import("vue").PropType<import("element-plus/lib/components/time-picker/src/props/shared").GetDisabledHours>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledMinutes: {
    readonly type: import("vue").PropType<import("element-plus/lib/components/time-picker/src/props/shared").GetDisabledMinutes>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledSeconds: {
    readonly type: import("vue").PropType<import("element-plus/lib/components/time-picker/src/props/shared").GetDisabledSeconds>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  id: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<(new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>) | ((new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  name: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>) | ((new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>))[], unknown, unknown, "", boolean>;
  popperClass: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  format: StringConstructor;
  valueFormat: StringConstructor;
  clearable: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  clearIcon: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
  editable: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  prefixIcon: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
  size: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  readonly: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  disabled: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  placeholder: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  popperOptions: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
  modelValue: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => import("element-plus/lib/components/time-picker").ModelValueType & {}) | (() => import("element-plus/lib/components/time-picker").ModelValueType) | ((new (...args: any[]) => import("element-plus/lib/components/time-picker").ModelValueType & {}) | (() => import("element-plus/lib/components/time-picker").ModelValueType))[], unknown, unknown, "", boolean>;
  rangeSeparator: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
  startPlaceholder: StringConstructor;
  endPlaceholder: StringConstructor;
  defaultValue: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  defaultTime: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  isRange: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>

export type TimePickerProps = import("vue").ExtractPropTypes<{
  isRange: {
    type: BooleanConstructor;
    default: boolean;
  };
  disabledDate: {
    readonly type: import("vue").PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  cellClassName: {
    readonly type: import("vue").PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  shortcuts: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
  arrowControl: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  label: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
  tabindex: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
  validateEvent: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  unlinkPanels: BooleanConstructor;
  disabledHours: {
    readonly type: import("vue").PropType<import("element-plus/lib/components/time-picker/src/props/shared").GetDisabledHours>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledMinutes: {
    readonly type: import("vue").PropType<import("element-plus/lib/components/time-picker/src/props/shared").GetDisabledMinutes>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledSeconds: {
    readonly type: import("vue").PropType<import("element-plus/lib/components/time-picker/src/props/shared").GetDisabledSeconds>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  id: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<(new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>) | ((new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  name: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>) | ((new (...args: any[]) => import("element-plus/lib/components/time-picker").SingleOrRange<string> & {}) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<string>))[], unknown, unknown, "", boolean>;
  popperClass: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  format: StringConstructor;
  valueFormat: StringConstructor;
  type: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  clearable: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  clearIcon: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>, boolean>;
  editable: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  prefixIcon: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown, "", boolean>;
  size: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  readonly: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  disabled: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  placeholder: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  popperOptions: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
  modelValue: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<(new (...args: any[]) => import("element-plus/lib/components/time-picker").ModelValueType & {}) | (() => import("element-plus/lib/components/time-picker").ModelValueType) | ((new (...args: any[]) => import("element-plus/lib/components/time-picker").ModelValueType & {}) | (() => import("element-plus/lib/components/time-picker").ModelValueType))[], unknown, unknown, "", boolean>;
  rangeSeparator: import("element-plus/lib/utils/vue/props/types.d.ts").EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
  startPlaceholder: StringConstructor;
  endPlaceholder: StringConstructor;
  defaultValue: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  defaultTime: {
    readonly type: import("vue").PropType<import("element-plus/lib/utils/vue/props/types.d.ts").EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => import("element-plus/lib/components/time-picker").SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
}>

export type InputEvents = {
  "onUpdate:modelValue"?: ((value: string) => any) | undefined;
  onChange?: ((value: string) => any) | undefined;
  onInput?: ((value: string) => any) | undefined;
  onFocus?: ((evt: FocusEvent) => any) | undefined;
  onBlur?: ((evt: FocusEvent) => any) | undefined;
  onClear?: (() => any) | undefined;
}

export type InputNumberEvents = {
  onChange?: (currentValue: number | undefined, oldValue: number | undefined) => void;
  onFocus?: ((evt: FocusEvent) => any) | undefined;
  onBlur?: ((evt: FocusEvent) => any) | undefined;
}

export type SelectEvents = {
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  onChange?: ((...args: any[]) => any) | undefined;
  onFocus?: ((...args: any[]) => any) | undefined;
  onBlur?: ((...args: any[]) => any) | undefined;
  onClear?: ((...args: any[]) => any) | undefined;
  onVisibleChange?: ((...args: any[]) => any) | undefined;
  onRemoveTag?: ((...args: any[]) => any) | undefined;
}

export type TreeEvents = {
  onCurrentChange?: ((...args: any[]) => any) | undefined;
  onNodeExpand?: ((...args: any[]) => any) | undefined;
  onCheck?: ((...args: any[]) => any) | undefined;
  onCheckChange?: ((...args: any[]) => any) | undefined;
  onNodeClick?: ((...args: any[]) => any) | undefined;
  onNodeContextmenu?: ((...args: any[]) => any) | undefined;
  onNodeCollapse?: ((...args: any[]) => any) | undefined;
  onNodeDragStart?: ((...args: any[]) => any) | undefined;
  onNodeDragEnd?: ((...args: any[]) => any) | undefined;
  onNodeDrop?: ((...args: any[]) => any) | undefined;
  onNodeDragLeave?: ((...args: any[]) => any) | undefined;
  onNodeDragEnter?: ((...args: any[]) => any) | undefined;
  onNodeDragOver?: ((...args: any[]) => any) | undefined;
}

export type CascaderEvents = {
  "onUpdate:modelValue"?: ((val: CascaderValue) => any) | undefined;
  onChange?: ((val: CascaderValue) => any) | undefined;
  onFocus?: ((evt: FocusEvent) => any) | undefined;
  onBlur?: ((evt: FocusEvent) => any) | undefined;
  onVisibleChange?: ((val: boolean) => any) | undefined;
  onExpandChange?: ((val: CascaderValue) => any) | undefined;
  onRemoveTag?: ((val: CascaderNodeValue | CascaderNodePathValue) => any) | undefined;
}

export type RadioEvents = {
  onChange?: ((val: string | number | boolean) => any) | undefined;
  "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
}

export type CheckboxEvents = {
  onChange?: ((val: import("element-plus/lib/components/checkbox/src/checkbox").CheckboxValueType[]) => any) | undefined;
  "onUpdate:modelValue"?: ((val: import("element-plus/es/components/checkbox/src/checkbox-group.d").CheckboxGroupValueType) => any) | undefined;
}

export type DatePickerEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  onFocus?: ((...args: any[]) => any) | undefined;
  onBlur?: ((...args: any[]) => any) | undefined;
  onClear?: ((...args: any[]) => any) | undefined;
  onVisibleChange?: ((...args: any[]) => any) | undefined;
  onCalendarChange?: ((...args: any[]) => any) | undefined;
  onPanelChange?: ((...args: any[]) => any) | undefined;
}

export type TimePickerEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  onFocus?: ((...args: any[]) => any) | undefined;
  onBlur?: ((...args: any[]) => any) | undefined;
  onClear?: ((...args: any[]) => any) | undefined;
  onVisibleChange?: ((...args: any[]) => any) | undefined;
}
export type SwitchEvents = {
  onChange?: ((val: string | number | boolean) => any) | undefined;
  "onUpdate:modelValue"?: ((val: string | number | boolean) => any) | undefined;
  onInput?: ((val: string | number | boolean) => any) | undefined;
}

export type FormEvents = {
  onValidate?: ((prop: import("element-plus/lib/components/form/src/form-item.d.ts").FormItemProp, isValid: boolean, message: string) => any) | undefined;
}

export type TableEvents = {
  onSelect?: ((...args: any[]) => any) | undefined;
  onExpandChange?: ((...args: any[]) => any) | undefined;
  onCurrentChange?: ((...args: any[]) => any) | undefined;
  onSelectAll?: ((...args: any[]) => any) | undefined;
  onSelectionChange?: ((...args: any[]) => any) | undefined;
  onCellMouseEnter?: ((...args: any[]) => any) | undefined;
  onCellMouseLeave?: ((...args: any[]) => any) | undefined;
  onCellContextmenu?: ((...args: any[]) => any) | undefined;
  onCellClick?: ((...args: any[]) => any) | undefined;
  onCellDblclick?: ((...args: any[]) => any) | undefined;
  onRowClick?: ((...args: any[]) => any) | undefined;
  onRowContextmenu?: ((...args: any[]) => any) | undefined;
  onRowDblclick?: ((...args: any[]) => any) | undefined;
  onHeaderClick?: ((...args: any[]) => any) | undefined;
  onHeaderContextmenu?: ((...args: any[]) => any) | undefined;
  onSortChange?: ((...args: any[]) => any) | undefined;
  onFilterChange?: ((...args: any[]) => any) | undefined;
  onHeaderDragend?: ((...args: any[]) => any) | undefined;
}

export type InputSlots = {
  slots?: {
    prefix?: ((...args: any[]) => JSX.Element | string | void) | string
    suffix?: ((...args: any[]) => JSX.Element | string | void) | string
    prepend?: ((...args: any[]) => JSX.Element | string | void) | string
    append?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type SelectSlots = {
  slots?: {
    prefix?: ((...args: any[]) => JSX.Element | string | void) | string
    empty?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type CascaderSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    empty?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type RadioSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type CheckboxSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type DatePickerSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    rangeSeparator?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type UploadSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    trigger?: ((...args: any[]) => JSX.Element | string | void) | string
    tip?: ((...args: any[]) => JSX.Element | string | void) | string
    file?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

export type InputExposes = {
  blur: () => void;
  clear: () => void;
  focus: () => void;
  input: import("vue").ShallowRef<HTMLInputElement | undefined>;
  ref: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
  resizeTextarea: () => void;
  select: () => void;
  textarea: import("vue").ShallowRef<HTMLTextAreaElement | undefined>;
  textareaStyle: import("vue").ComputedRef<import("vue").StyleValue>;
}

export type InputNumberExposes = {
  blur: () => void;
  focus: () => void;
}

export type CascaderExposes = {
  getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
  cascaderPanelRef: import("vue").ComputedRef<any>;
  togglePopperVisible: (visible?: boolean) => void;
  contentRef: import("vue").ComputedRef<any>;
}

export type DatePickerExposes = {
  focus: () => void;
  handleOpen: () => void;
  handleClose: () => void;
}

export type TimePickerExposes = {
  focus: () => void;
  blur: () => void;
  handleOpen: () => void;
  handleClose: () => void;
}

export type SelectExposes = {
  focus: () => void;
  blur: () => void;
}

export type SwitchExposes = {
  blur: () => void;
}

export type TreeExposes = {
  filter: (value: any) => void;
  getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => TreeNodeData[];
  getCheckedKeys: (leafOnly?: boolean | undefined) => TreeKey[];
  getCurrentNode: () => TreeNodeData;
  getCurrentKey: () => any;
  setCheckedNodes: (nodes: Node[], leafOnly?: boolean | undefined) => void;
  setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean | undefined) => void;
  setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
  getHalfCheckedNodes: () => TreeNodeData[];
  getHalfCheckedKeys: () => TreeKey[];
  setCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
  setCurrentKey: (key?: TreeKey | undefined, shouldAutoExpandParent?: boolean) => void;
  getNode: (data: TreeKey | TreeNodeData) => Node;
  remove: (data: TreeNodeData | Node) => void;
  append: (data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node) => void;
  insertBefore: (data: TreeNodeData, refNode: TreeKey | TreeNodeData | Node) => void;
  insertAfter: (data: TreeNodeData, refNode: TreeKey | TreeNodeData | Node) => void;
  updateKeyChildren: (key: TreeKey, data: TreeData) => void;
}

export type UploadExposes = {
  abort: (file: import("element-plus/lib/components/upload/src/upload.d.ts").UploadFile) => void;
  submit: () => void;
  clearFiles: (states?: import("element-plus/lib/components/upload/src/upload.d.ts").UploadStatus[]) => void;
  handleStart: (rawFile: import("element-plus/lib/components/upload/src/upload.d.ts").UploadRawFile) => void;
  handleRemove: (file: import("element-plus/lib/components/upload/src/upload.d.ts").UploadFile | import("element-plus/lib/components/upload/src/upload.d.ts").UploadRawFile, rawFile?: import("element-plus/lib/components/upload/src/upload.d.ts").UploadRawFile | undefined) => void;
}
export type TableExposes = {
  clearSelection: () => void;
  getSelectionRows: () => any;
  toggleRowSelection: (row: any, selected: boolean) => void;
  toggleAllSelection: () => void;
  toggleRowExpansion: (row: any, expanded?: boolean | undefined) => void;
  setCurrentRow: (row: any) => void;
  clearSort: () => void;
  clearFilter: (columnKeys: string[]) => void;
  doLayout: () => void;
  sort: (prop: string, order: string) => void;
  scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => void;
  setScrollLeft: (left?: number | undefined) => void;
  setScrollTop: (top?: number | undefined) => void;
}

export type Expose = Partial<InputExposes & InputNumberExposes & CascaderExposes & DatePickerExposes & TimePickerExposes & SelectExposes & SwitchExposes & TreeExposes & UploadExposes>
