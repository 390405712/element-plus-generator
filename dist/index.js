(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div:not(.el-switch){width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.TableGenerator .content-wrapper{white-space:nowrap;display:inline-block}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as D, ref as A, watch as Q, nextTick as X, createVNode as r, Fragment as p, mergeProps as h, openBlock as F, createElementBlock as U, createElementVNode as Y, createTextVNode as G, isVNode as O } from "vue";
import { ElLoading as ee, ElTable as ae, ElTableColumn as S, ElEmpty as le, ElForm as re, ElFormItem as Z, ElButton as $, ElUpload as ue, ElSwitch as de, ElTimePicker as ce, ElDatePicker as te, ElCheckboxGroup as o, ElCheckboxButton as se, ElCheckbox as ne, ElRadioGroup as i, ElRadioButton as he, ElRadio as ve, ElCascader as ye, ElTreeSelect as be, ElSelect as ge, ElOption as _e, ElInputNumber as xe, ElInput as Ee, ElSteps as we, ElStep as ke } from "element-plus";
const Je = /* @__PURE__ */ D({
  name: "TableGenerator",
  setup(n, {
    expose: y,
    attrs: v,
    slots: l,
    emit: b
  }) {
    const a = A(), u = v;
    let s;
    const _ = (/* @__PURE__ */ new Date()).getTime(), g = A("auto");
    return Q(() => u.loading, (x) => {
      x ? X(() => {
        s = ee.service({
          target: `.el-table-${_}`,
          text: "加载中"
        });
      }) : s == null || s.close();
    }, {
      immediate: !0
    }), u.operationWidth ? g.value = u.operationWidth : Q(() => u.data, () => {
      X(() => {
        if (!isNaN(g.value) && Array.isArray(u.data) && g.value > 32 && u.data.length === 0)
          return;
        const x = [];
        document.querySelectorAll(`.el-table-${_} .content-wrapper`).forEach((k) => {
          x.push(k.offsetWidth);
        }), g.value = Math.max(...x) + 32;
      });
    }, {
      immediate: !0
    }), y(() => a.value), () => {
      function x(I) {
        return I.map((t) => ["selection", "index", "expand"].includes(t.type) ? r(S, h({
          type: t.type
        }, t), {
          ...t == null ? void 0 : t.slots
        }) : r(S, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, t), {
          default: (E) => {
            var V;
            return t.children && Array.isArray(t.children) && t.children.length > 0 ? x(t.children) : l[t.prop] ? r(p, null, [(V = l[t.prop]) == null ? void 0 : V.call(l, {
              $index: E.$index,
              row: E.row
            })]) : t.formatter ? r(p, null, [t.formatter({
              $index: E.$index,
              row: E.row
            }) ?? "-"]) : r(p, null, [E.row[t.prop] ?? "-"]);
          },
          ...t == null ? void 0 : t.slots
        }));
      }
      function k() {
        return r(ae, h({
          ref: a,
          stripe: !0
        }, u, {
          class: `TableGenerator el-table-${_}`
        }), {
          default: () => [x(u.tableOption), l != null && l.operation ? r(S, {
            fixed: "right",
            label: "操作",
            width: g.value
          }, {
            default: (I) => {
              var t;
              return r("div", {
                class: "content-wrapper"
              }, [(t = l.operation) == null ? void 0 : t.call(l, {
                $index: I.$index,
                row: I.row
              })]);
            }
          }) : ""],
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(le, {
            description: "暂无数据"
          }, null),
          append: () => l != null && l.append ? l == null ? void 0 : l.append() : ""
        });
      }
      return r(p, null, [k()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var T = (n, y) => {
  let v = n.__vccOpts || n;
  for (let [l, b] of y)
    v[l] = b;
  return v;
}, pe = {
  name: "ArrowUp"
}, Ie = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ve = /* @__PURE__ */ Y(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), $e = [
  Ve
];
function Ge(n, y, v, l, b, a) {
  return F(), U("svg", Ie, $e);
}
var Ae = /* @__PURE__ */ T(pe, [["render", Ge], ["__file", "arrow-up.vue"]]), Ce = {
  name: "Refresh"
}, Se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, De = /* @__PURE__ */ Y(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), Fe = [
  De
];
function Ue(n, y, v, l, b, a) {
  return F(), U("svg", Se, Fe);
}
var Ye = /* @__PURE__ */ T(Ce, [["render", Ue], ["__file", "refresh.vue"]]), Te = {
  name: "Search"
}, fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Me = /* @__PURE__ */ Y(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Ne = [
  Me
];
function Be(n, y, v, l, b, a) {
  return F(), U("svg", fe, Ne);
}
var je = /* @__PURE__ */ T(Te, [["render", Be], ["__file", "search.vue"]]);
const Qe = /* @__PURE__ */ D({
  name: "FormGenerator",
  setup(n, {
    expose: y,
    attrs: v,
    slots: l,
    emit: b
  }) {
    const a = v, u = A(), s = {}, _ = A(!1), g = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, x = {
      submit: () => {
        u.value.validate((t) => {
          t && b("submit");
        });
      },
      cancel: (t) => {
        var E, V;
        a.onCancel ? b("cancel") : (V = (E = k(t.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : E.click) == null || V.call(E);
      },
      reset: () => {
        u.value.resetFields(), b("submit", "init");
      }
    };
    function k(t) {
      return t.parentElement.classList.value.split(" ").includes("el-dialog") ? t.parentElement : k(t.parentElement);
    }
    function I(t) {
      _.value = t, a.formOption.forEach((E, V) => {
        V > g - 2 && (E.show = t);
      });
    }
    return a.formOption.length >= g - 2 && (a == null ? void 0 : a.type) === "search" && I(!1), y(() => ({
      ...u.value,
      ...x,
      $refs: s
    })), () => {
      function t() {
        return r(re, h({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: u
        }), {
          default: () => [a.formOption.map((e) => {
            var C;
            return r(Z, h(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [E(e)],
              ...(C = e.formItem) == null ? void 0 : C.slots
            });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(Z, {
            class: `btnItem ${_.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default && typeof (l == null ? void 0 : l.default()[0].type) == "string" ? r(p, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? V() : r(p, null, [(a == null ? void 0 : a.type) === "dialog" ? r($, {
              onClick: x.cancel
            }, {
              default: () => [G("取消")]
            }) : "", r($, {
              type: "primary",
              onClick: x.submit,
              loading: a.loading
            }, {
              default: () => [G("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function E(e) {
        var C, f, M, N, B, j, P, m, R, z, H, q, L, W, K;
        switch (s[e.formItem.prop] = A(), e.type) {
          case "input":
            return r(Ee, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              maxlength: ((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) === "textarea" ? 100 : 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(f = e == null ? void 0 : e.control) == null ? void 0 : f.slots
            });
          case "input-number":
            return r(xe, h({
              ref: s[e.formItem.prop],
              min: 0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "select":
            return r(ge, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.option.map((c) => r(_e, h(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              },
              ...(M = e == null ? void 0 : e.control) == null ? void 0 : M.slots
            });
          case "tree-select":
            return r(be, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slots
            });
          case "cascader":
            return r(ye, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "radio":
            return r(i, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.radioGroup.map((c) => r(ve, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(i, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.radioGroup.map((c) => r(he, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(o, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.checkboxGroup.map((c) => r(ne, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(o, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.checkboxGroup.map((c) => r(se, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "date-picker":
          case "date-time-picker":
            const J = {
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              date: "YYYY-MM-DD"
            }[((j = e == null ? void 0 : e.control) == null ? void 0 : j.type) || "date"];
            return r(te, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              format: J,
              "value-format": J
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(P = e == null ? void 0 : e.control) == null ? void 0 : P.slots
            });
          case "time-picker":
            return r(ce, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(de, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(ue, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => a.disabled ? "" : r($, {
                type: "primary"
              }, {
                default: () => [G("上传文件")]
              }),
              ...(m = e == null ? void 0 : e.control) == null ? void 0 : m.slots
            });
          case "slot":
            return (z = (R = e == null ? void 0 : e.control) == null ? void 0 : R.slots) != null && z.default && typeof ((q = (H = e == null ? void 0 : e.control) == null ? void 0 : H.slots) == null ? void 0 : q.default) == "function" ? r(p, null, [(W = (L = e.control.slots).default) == null ? void 0 : W.call(L, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (K = l[e.formItem.prop]) == null ? void 0 : K.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function V() {
        return r(p, null, [r($, {
          type: "primary",
          onClick: x.submit,
          icon: je
        }, {
          default: () => [G("搜索")]
        }), r($, {
          onClick: x.reset,
          icon: Ye
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > g - 1 ? r(p, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${_.value ? "up" : "down"}`,
          onClick: () => {
            I(!_.value);
          },
          icon: Ae
        }, {
          default: () => [_.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return t();
    };
  }
});
function Pe(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !O(n);
}
const Xe = /* @__PURE__ */ D({
  name: "StepsGenerator",
  setup(n, {
    expose: y,
    attrs: v,
    slots: l,
    emit: b
  }) {
    const a = v, u = A(0);
    function s() {
      a != null && a.onPrev && typeof (a == null ? void 0 : a.onPrev) == "function" ? a.onPrev(u.value, (g) => {
        g ? u.value = g : u.value === 0 || u.value--;
      }) : u.value === 0 || u.value--;
    }
    function _() {
      a != null && a.onNext && typeof (a == null ? void 0 : a.onNext) == "function" ? a.onNext(u.value, (g) => {
        g ? u.value = g : u.value === a.stepsOption.length - 1 || u.value++;
      }) : u.value === a.stepsOption.length - 1 || u.value++;
    }
    return y({
      prev: s,
      next: _
    }), () => {
      function g() {
        let x;
        return r("div", {
          class: "StepsGenerator"
        }, [r(we, h({
          "align-center": !0
        }, a, {
          active: u.value
        }), Pe(x = a.stepsOption.map((k) => r(ke, k, {
          ...k == null ? void 0 : k.slots
        }))) ? x : {
          default: () => [x]
        }), r("div", {
          class: "container"
        }, [Object.keys(l).map((k, I) => r("div", {
          style: {
            display: u.value === I ? "block" : "none"
          }
        }, [l[k]()]))]), r("div", {
          class: "btn-group"
        }, [l.default ? l.default(u.value) : r(p, null, [u.value > 0 ? r($, {
          type: "primary",
          plain: !0,
          onClick: s
        }, {
          default: () => [G("上一步")]
        }) : "", r($, {
          type: "primary",
          plain: !0,
          onClick: _
        }, {
          default: () => [G(" "), u.value === a.stepsOption.length - 1 ? "提交" : "下一步"]
        })])])]);
      }
      return g();
    };
  }
}), me = (n, y) => n.find((v) => v.prop === y), Re = (n, y, v) => {
  var b;
  const l = n.find((a) => a.formItem.prop === y);
  l && ((b = l == null ? void 0 : l.control) != null && b.option) && (l.control.option = v);
}, ze = (n, y) => n.find((v) => v.formItem.prop === y), He = (n, y, v, l) => {
  if (!Array.isArray(n))
    return [];
  const b = [];
  let a = [];
  return l && (a = Object.keys(l)), n.forEach((u) => {
    let s = {
      label: typeof u == "string" ? u : u[y],
      value: typeof u == "string" ? u : u[v]
    };
    l && a.forEach((_) => {
      s[_] = u[_];
    }), b.push(s);
  }), b;
}, qe = (n, y = []) => {
  const v = {
    input: "输入",
    "input-number": "输入",
    select: "选择",
    "tree-select": "选择",
    cascader: "选择",
    radio: "选择",
    "radio-button": "选择",
    checkbox: "选择",
    "checkbox-button": "选择",
    "date-picker": "选择",
    "date-time-picker": "选择",
    "time-picker": "选择",
    switch: "选择",
    upload: "上传",
    slot: "完善"
  };
  return n.forEach((l) => {
    var a, u, s;
    const b = { required: !0, message: `请${v[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!y.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [b, l.formItem.rules] : Array.isArray((u = l.formItem) == null ? void 0 : u.rules) ? l.formItem.rules.unshift(b) : l.formItem.rules = [b], ((s = l.formItem) == null ? void 0 : s.rules) instanceof Array))
      for (let _ = 0; _ < l.formItem.rules.length; _++) {
        let g = l.formItem.rules[_];
        g.message || (g.message = "格式有误");
      }
  }), n;
}, Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: ze,
  getOption: He,
  getTableOption: me,
  setOption: Re,
  setRequired: qe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qe as FormGenerator,
  Ze as GeneratorUtils,
  Xe as StepsGenerator,
  Je as TableGenerator
};
//# sourceMappingURL=index.js.map
