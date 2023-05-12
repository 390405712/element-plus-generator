import type { TreeNodeData, TreeKey, TreeData } from 'element-plus/lib/components/tree/src/tree.type'
import type { CascaderNode, CascaderValue, CascaderNodeValue, CascaderNodePathValue } from 'element-plus/lib/components/cascader-panel'
import type { EpPropFinalized, EpPropMergeType } from 'element-plus/lib/utils/vue/props/types.d.ts'
import type { IDatePickerType } from 'element-plus/lib/components/date-picker/src/date-picker.type'
import type { GetDisabledHours, GetDisabledMinutes, GetDisabledSeconds } from 'element-plus/lib/components/time-picker/src/props/shared'
import type { SingleOrRange, ModelValueType } from 'element-plus/lib/components/time-picker'
import type { CheckboxValueType } from 'element-plus/lib/components/checkbox/src/checkbox'
import type { CheckboxGroupValueType } from 'element-plus/es/components/checkbox/src/checkbox-group.d'
import type { FormItemProp } from 'element-plus/lib/components/form/src/form-item.d.ts'
import type { UploadFile, UploadStatus, UploadRawFile } from 'element-plus/lib/components/upload/src/upload.d.ts'
import type { Options } from '@popperjs/core'
import type { ExtractPropTypes, PropType, Component, ComputedOptions, MethodOptions, ShallowRef, ComputedRef, StyleValue, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps,DefineComponent } from 'vue'

export type DatePickerProps = ExtractPropTypes<{
  type: EpPropFinalized<(new (...args: any[]) => IDatePickerType & {}) | (() => IDatePickerType) | ((new (...args: any[]) => IDatePickerType & {}) | (() => IDatePickerType))[], unknown, unknown, "date", boolean>;
  disabledDate: {
    readonly type: PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  cellClassName: {
    readonly type: PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
  arrowControl: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  label: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
  tabindex: EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
  validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  unlinkPanels: BooleanConstructor;
  disabledHours: {
    readonly type: PropType<GetDisabledHours>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledMinutes: {
    readonly type: PropType<GetDisabledMinutes>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledSeconds: {
    readonly type: PropType<GetDisabledSeconds>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  id: {
    readonly type: PropType<EpPropMergeType<(new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>) | ((new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  name: EpPropFinalized<(new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>) | ((new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>))[], unknown, unknown, "", boolean>;
  popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  format: StringConstructor;
  valueFormat: StringConstructor;
  clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  clearIcon: EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>))[], unknown, unknown, DefineComponent<{}, {}, {}, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
  editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>))[], unknown, unknown, "", boolean>;
  size: {
    readonly type: PropType<EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  readonly: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  disabled: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
  modelValue: EpPropFinalized<(new (...args: any[]) => ModelValueType & {}) | (() => ModelValueType) | ((new (...args: any[]) => ModelValueType & {}) | (() => ModelValueType))[], unknown, unknown, "", boolean>;
  rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
  startPlaceholder: StringConstructor;
  endPlaceholder: StringConstructor;
  defaultValue: {
    readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  defaultTime: {
    readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  isRange: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>

export type TimePickerProps = ExtractPropTypes<{
  isRange: {
    type: BooleanConstructor;
    default: boolean;
  };
  disabledDate: {
    readonly type: PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  cellClassName: {
    readonly type: PropType<Function>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  shortcuts: EpPropFinalized<ArrayConstructor, unknown, unknown, () => never[], boolean>;
  arrowControl: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  label: EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
  tabindex: EpPropFinalized<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown, 0, boolean>;
  validateEvent: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  unlinkPanels: BooleanConstructor;
  disabledHours: {
    readonly type: PropType<GetDisabledHours>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledMinutes: {
    readonly type: PropType<GetDisabledMinutes>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  disabledSeconds: {
    readonly type: PropType<GetDisabledSeconds>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  id: {
    readonly type: PropType<EpPropMergeType<(new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>) | ((new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  name: EpPropFinalized<(new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>) | ((new (...args: any[]) => SingleOrRange<string> & {}) | (() => SingleOrRange<string>))[], unknown, unknown, "", boolean>;
  popperClass: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  format: StringConstructor;
  valueFormat: StringConstructor;
  type: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  clearable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  clearIcon: EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>))[], unknown, unknown, DefineComponent<{}, {}, {}, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>, boolean>;
  editable: EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
  prefixIcon: EpPropFinalized<(new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>) | ((new (...args: any[]) => (string | Component<any, any, any, ComputedOptions, MethodOptions>) & {}) | (() => string | Component<any, any, any, ComputedOptions, MethodOptions>))[], unknown, unknown, "", boolean>;
  size: {
    readonly type: PropType<EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  readonly: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  disabled: EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
  placeholder: EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
  popperOptions: EpPropFinalized<(new (...args: any[]) => Partial<Options>) | (() => Partial<Options>) | ((new (...args: any[]) => Partial<Options>) | (() => Partial<Options>))[], unknown, unknown, () => {}, boolean>;
  modelValue: EpPropFinalized<(new (...args: any[]) => ModelValueType & {}) | (() => ModelValueType) | ((new (...args: any[]) => ModelValueType & {}) | (() => ModelValueType))[], unknown, unknown, "", boolean>;
  rangeSeparator: EpPropFinalized<StringConstructor, unknown, unknown, "-", boolean>;
  startPlaceholder: StringConstructor;
  endPlaceholder: StringConstructor;
  defaultValue: {
    readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
    readonly required: false;
    readonly validator: ((val: unknown) => boolean) | undefined;
    __epPropKey: true;
  };
  defaultTime: {
    readonly type: PropType<EpPropMergeType<(new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>) | ((new (...args: any[]) => Date | [Date, Date]) | (() => SingleOrRange<Date>))[], unknown, unknown>>;
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
  onChange?: ((val: CheckboxValueType[]) => any) | undefined;
  "onUpdate:modelValue"?: ((val: CheckboxGroupValueType) => any) | undefined;
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
  onValidate?: ((prop: FormItemProp, isValid: boolean, message: string) => any) | undefined;
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
  input: ShallowRef<HTMLInputElement | undefined>;
  ref: ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
  resizeTextarea: () => void;
  select: () => void;
  textarea: ShallowRef<HTMLTextAreaElement | undefined>;
  textareaStyle: ComputedRef<StyleValue>;
}

export type InputNumberExposes = {
  blur: () => void;
  focus: () => void;
}

export type CascaderExposes = {
  getCheckedNodes: (leafOnly: boolean) => CascaderNode[] | undefined;
  cascaderPanelRef: ComputedRef<any>;
  togglePopperVisible: (visible?: boolean) => void;
  contentRef: ComputedRef<any>;
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
  abort: (file: UploadFile) => void;
  submit: () => void;
  clearFiles: (states?: UploadStatus[]) => void;
  handleStart: (rawFile: UploadRawFile) => void;
  handleRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
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