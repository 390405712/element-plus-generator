(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as Z, ref as F, watch as W, nextTick as H, createVNode as r, Fragment as $, mergeProps as t, openBlock as G, createElementBlock as S, createElementVNode as T, createTextVNode as Y, isVNode as i } from "vue";
import { ElLoading as o, ElTable as K, ElTableColumn as p, ElEmpty as O, ElForm as ee, ElFormItem as J, ElButton as D, ElUpload as ae, ElSwitch as le, ElTimePicker as re, ElDatePicker as ue, ElCheckboxGroup as Q, ElCheckboxButton as de, ElCheckbox as ce, ElRadioGroup as X, ElRadioButton as te, ElRadio as se, ElCascader as he, ElTreeSelect as be, ElSelect as ve, ElOption as ye, ElInputNumber as _e, ElInput as ne } from "element-plus";
const Re = /* @__PURE__ */ Z({
  name: "TableGenerator",
  setup(h, {
    expose: g,
    attrs: _,
    slots: l,
    emit: v
  }) {
    const a = F(), s = _;
    let c, b = (/* @__PURE__ */ new Date()).getTime(), E = F(!1), A = F(0);
    return W(() => s.loading, (V) => {
      V ? H(() => {
        c = o.service({
          target: `.el-table-${b}`
        });
      }) : c == null || c.close();
    }, {
      immediate: !0
    }), W(() => s.data, (V) => {
      if (!(l != null && l.operation) || V.length === 0)
        return E.value = !0;
      E.value = !1, H(() => {
        let w = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((I) => {
          I.offsetWidth > w && (w = I.offsetWidth);
        }), A.value = w > 0 ? w + 32 : "auto", E.value = !0;
      });
    }, {
      immediate: !0
    }), g(() => a.value), () => {
      function V(x) {
        return x.map((e) => ["selection", "index", "expand"].includes(e.type) ? r(p, t({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slots
        }) : r(p, t({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (y) => {
            var k;
            return e.children && Array.isArray(e.children) && e.children.length > 0 ? V(e.children) : l[e.prop] ? r($, null, [(k = l[e.prop]) == null ? void 0 : k.call(l, {
              $index: y.$index,
              row: y.row
            })]) : e.formatter ? r($, null, [e.formatter({
              $index: y.$index,
              row: y.row
            }) ?? "-"]) : r($, null, [y.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slots
        }));
      }
      function w() {
        return r(K, t({
          ref: a,
          stripe: !0
        }, s, {
          class: `TableGenerator el-table-${b}`
        }), {
          default: () => [V(s.tableOption), l != null && l.operation ? r(p, {
            fixed: "right",
            label: "操作",
            width: A.value
          }, {
            default: (x) => {
              var e;
              return r("div", {
                class: "content-wrapper"
              }, [(e = l.operation) == null ? void 0 : e.call(l, {
                $index: x.$index,
                row: x.row
              })]);
            }
          }) : ""],
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(O, {
            description: "暂无数据"
          }, null),
          append: () => l != null && l.append ? l == null ? void 0 : l.append() : ""
        });
      }
      function I() {
        return r(K, t(_, {
          class: `TableGenerator el-table-${b}`
        }), {
          default: () => [r(p, {
            fixed: "right"
          }, {
            default: (x) => {
              var e;
              return r("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = l.operation) == null ? void 0 : e.call(l, {
                $index: x.$index,
                row: x.row
              })]);
            }
          })]
        });
      }
      return r($, null, [E.value ? w() : I()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var M = (h, g) => {
  let _ = h.__vccOpts || h;
  for (let [l, v] of g)
    _[l] = v;
  return _;
}, we = {
  name: "ArrowUp"
}, ge = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ee = /* @__PURE__ */ T(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), xe = [
  Ee
];
function ke(h, g, _, l, v, a) {
  return G(), S("svg", ge, xe);
}
var Ve = /* @__PURE__ */ M(we, [["render", ke], ["__file", "arrow-up.vue"]]), $e = {
  name: "Refresh"
}, Ie = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ae = /* @__PURE__ */ T(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), Ce = [
  Ae
];
function De(h, g, _, l, v, a) {
  return G(), S("svg", Ie, Ce);
}
var Fe = /* @__PURE__ */ M($e, [["render", De], ["__file", "refresh.vue"]]), Ue = {
  name: "Search"
}, Ye = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pe = /* @__PURE__ */ T(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Ge = [
  pe
];
function Se(h, g, _, l, v, a) {
  return G(), S("svg", Ye, Ge);
}
var Te = /* @__PURE__ */ M(Ue, [["render", Se], ["__file", "search.vue"]]);
function Me(h) {
  return typeof h == "function" || Object.prototype.toString.call(h) === "[object Object]" && !i(h);
}
const ze = /* @__PURE__ */ Z({
  name: "FormGenerator",
  setup(h, {
    expose: g,
    attrs: _,
    slots: l,
    emit: v
  }) {
    const a = _, s = F(), c = {}, b = F(!1), E = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, A = {
      submit: () => {
        s.value.validate((w) => {
          w && v("submit");
        });
      },
      reset: () => {
        s.value.resetFields(), v("submit", "init");
      }
    };
    function V(w) {
      b.value = w, a.formOption.forEach((I, x) => {
        x > E - 2 && (I.show = w);
      });
    }
    return a.formOption.length >= E - 2 && (a == null ? void 0 : a.type) === "search" && V(!1), g(() => ({
      ...s.value,
      ...A,
      $refs: c
    })), () => {
      function w() {
        return r(ee, t({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: s
        }), {
          default: () => [a.formOption.map((e) => {
            let y;
            if (!(e.hasOwnProperty("show") && e.show === !1))
              return r(J, t(e.formItem, {
                key: e.formItem.prop
              }), Me(y = I(e)) ? y : {
                default: () => [y]
              });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(J, {
            class: `btnItem ${b.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default ? r($, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? x() : r($, null, [(a == null ? void 0 : a.type) === "dialog" ? r(D, {
              onClick: (e) => {
                var k, U;
                function y(C) {
                  return C.parentElement.classList.value.split(" ").includes("el-dialog") ? C.parentElement : y(C.parentElement);
                }
                (U = (k = y(e.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : k.click) == null || U.call(k);
              }
            }, {
              default: () => [Y("取消")]
            }) : "", r(D, {
              type: "primary",
              onClick: A.submit
            }, {
              default: () => [Y("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function I(e) {
        var y, k, U, C, B, f, j, m, N, R, z, q, P;
        switch (c[e.formItem.prop] = F(), e.type) {
          case "input":
            return r(ne, t({
              ref: c[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(y = e == null ? void 0 : e.control) == null ? void 0 : y.slots
            });
          case "input-number":
            return r(_e, t({
              ref: c[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), null);
          case "select":
            return r(ve, t({
              ref: c[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, n;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.option) instanceof Array ? (n = e == null ? void 0 : e.control) == null ? void 0 : n.option.map((d) => r(ye, t(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "tree-select":
            return r(be, t({
              ref: c[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(k = e == null ? void 0 : e.control) == null ? void 0 : k.slots
            });
          case "cascader":
            return r(he, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slots
            });
          case "radio":
            return r(X, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, n;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.option) instanceof Array ? (n = e == null ? void 0 : e.control) == null ? void 0 : n.option.map((d) => r(se, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(X, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, n;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.option) instanceof Array ? (n = e == null ? void 0 : e.control) == null ? void 0 : n.option.map((d) => r(te, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(Q, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, n;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.option) instanceof Array ? (n = e == null ? void 0 : e.control) == null ? void 0 : n.option.map((d) => r(ce, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(Q, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, n;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.option) instanceof Array ? (n = e == null ? void 0 : e.control) == null ? void 0 : n.option.map((d) => r(de, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "date-picker":
          case "date-time-picker":
            const L = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) || "date"];
            return r(ue, t({
              ref: c[e.formItem.prop],
              clearable: !0,
              format: L,
              "value-format": L
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "time-picker":
            return r(re, t({
              ref: c[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), null);
          case "switch":
            return r(le, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), null);
          case "upload":
            return r(ae, t({
              ref: c[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => a.disabled ? "" : r(D, {
                type: "primary"
              }, {
                default: () => [Y("上传文件")]
              }),
              ...(f = e == null ? void 0 : e.control) == null ? void 0 : f.slots
            });
          case "slot":
            return (m = (j = e == null ? void 0 : e.control) == null ? void 0 : j.slots) != null && m.default && typeof ((R = (N = e == null ? void 0 : e.control) == null ? void 0 : N.slots) == null ? void 0 : R.default) == "function" ? r($, null, [(q = (z = e.control.slots).default) == null ? void 0 : q.call(z, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (P = l[e.formItem.prop]) == null ? void 0 : P.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function x() {
        return r($, null, [r(D, {
          type: "primary",
          onClick: A.submit,
          icon: Te
        }, {
          default: () => [Y("搜索")]
        }), r(D, {
          onClick: A.reset,
          icon: Fe
        }, {
          default: () => [Y("重置")]
        }), a.type === "search" && a.formOption.length > E - 1 ? r($, null, [r(D, {
          text: !0,
          type: "primary",
          class: `expandBtn ${b.value ? "up" : "down"}`,
          onClick: () => {
            V(!b.value);
          },
          icon: Ve
        }, {
          default: () => [b.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return w();
    };
  }
}), Be = (h, g, _, l) => {
  if (!Array.isArray(h))
    return [];
  const v = [];
  let a = [];
  return l && (a = Object.keys(l)), h.forEach((s) => {
    let c = {
      label: typeof s == "string" ? s : s[g],
      value: typeof s == "string" ? s : s[_]
    };
    l && a.forEach((b) => {
      c[b] = s[b];
    }), v.push(c);
  }), v;
}, fe = (h, g = []) => {
  const _ = {
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
  return h.forEach((l) => {
    var a, s, c;
    const v = { required: !0, message: `请${_[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!g.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [v, l.formItem.rules] : Array.isArray((s = l.formItem) == null ? void 0 : s.rules) ? l.formItem.rules.unshift(v) : l.formItem.rules = [v], ((c = l.formItem) == null ? void 0 : c.rules) instanceof Array))
      for (let b = 0; b < l.formItem.rules.length; b++) {
        let E = l.formItem.rules[b];
        E.message || (E.message = "格式有误");
      }
  }), h;
}, qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: Be,
  setRequired: fe
}, Symbol.toStringTag, { value: "Module" }));
export {
  ze as FormGenerator,
  qe as GeneratorUtils,
  Re as TableGenerator
};
//# sourceMappingURL=index.js.map
