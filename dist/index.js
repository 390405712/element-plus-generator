(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as I, ref as G, watch as L, nextTick as j, createVNode as l, Fragment as y, mergeProps as h, openBlock as S, createElementBlock as M, createElementVNode as B, createTextVNode as F, isVNode as J } from "vue";
import { ElLoading as K, ElTable as W, ElTableColumn as T, ElEmpty as Q, ElForm as X, ElFormItem as m, ElButton as Y, ElUpload as Z, ElSwitch as f, ElTimePicker as i, ElDatePicker as o, ElCheckboxGroup as q, ElCheckboxButton as O, ElCheckbox as ee, ElRadioGroup as H, ElRadioButton as ae, ElRadio as le, ElCascader as ue, ElTreeSelect as re, ElSelect as de, ElOption as ce, ElInputNumber as he, ElInput as te } from "element-plus";
import { u as Pe } from "./utils-666743d5.js";
const Be = /* @__PURE__ */ I({
  name: "TableGenerator",
  setup(_, {
    expose: C,
    attrs: w,
    slots: u,
    emit: x
  }) {
    const a = w;
    let g, s = new Date().getTime(), V = G(!1), D = G(0);
    return L(() => a.loading, (E) => {
      E ? j(() => {
        g = K.service({
          target: `.el-table-${s}`
        });
      }) : g == null || g.close();
    }, {
      immediate: !0
    }), L(() => a.data, (E) => {
      if (!(u != null && u.operation) || E.length === 0)
        return V.value = !0;
      V.value = !1, j(() => {
        let v = 0;
        document.querySelectorAll(".content-wrapper-width").forEach(($) => {
          $.offsetWidth > v && (v = $.offsetWidth);
        }), D.value = v > 0 ? v + 32 : "auto", V.value = !0;
      });
    }, {
      immediate: !0
    }), () => {
      function E(b) {
        return b.map((e) => ["selection", "index", "expand"].includes(e.type) ? l(T, h({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slot
        }) : l(T, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (c) => {
            var t;
            return e.children && Array.isArray(e.children) && e.children.length > 0 ? E(e.children) : u[e.prop] ? l(y, null, [(t = u[e.prop]) == null ? void 0 : t.call(u, {
              $index: c.$index,
              row: c.row
            })]) : e.formatter ? l(y, null, [e.formatter({
              $index: c.$index,
              row: c.row
            }) ?? "-"]) : l(y, null, [c.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slot
        }));
      }
      function v() {
        return l(W, h({
          stripe: !0
        }, a, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [E(a.tableOption), u != null && u.operation ? l(T, {
            fixed: "right",
            label: "操作",
            width: D.value
          }, {
            default: (b) => {
              var e;
              return l("div", {
                class: "content-wrapper"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: b.$index,
                row: b.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : l(Q, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function $() {
        return l(W, h(w, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [l(T, {
            fixed: "right"
          }, {
            default: (b) => {
              var e;
              return l("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: b.$index,
                row: b.row
              })]);
            }
          })]
        });
      }
      return l(y, null, [V.value ? v() : $()]);
    };
  }
});
/*! Element Plus Icons Vue v2.0.10 */
var A = (_, C) => {
  let w = _.__vccOpts || _;
  for (let [u, x] of C)
    w[u] = x;
  return w;
}, ve = {
  name: "ArrowUp"
}, _e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, be = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), we = [
  be
];
function ne(_, C, w, u, x, a) {
  return S(), M("svg", _e, we);
}
var ye = /* @__PURE__ */ A(ve, [["render", ne], ["__file", "arrow-up.vue"]]), ge = {
  name: "Refresh"
}, se = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ee = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), xe = [
  Ee
];
function Ve(_, C, w, u, x, a) {
  return S(), M("svg", se, xe);
}
var $e = /* @__PURE__ */ A(ge, [["render", Ve], ["__file", "refresh.vue"]]), ke = {
  name: "Search"
}, Ce = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, De = /* @__PURE__ */ B("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), Ue = [
  De
];
function Ye(_, C, w, u, x, a) {
  return S(), M("svg", Ce, Ue);
}
var Fe = /* @__PURE__ */ A(ke, [["render", Ye], ["__file", "search.vue"]]);
function Te(_) {
  return typeof _ == "function" || Object.prototype.toString.call(_) === "[object Object]" && !J(_);
}
const Ae = /* @__PURE__ */ I({
  name: "FormGenerator",
  setup(_, {
    expose: C,
    attrs: w,
    slots: u,
    emit: x
  }) {
    const a = w, g = G(), s = G(!1), V = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, D = {
      submit: () => {
        g.value.validate((v) => {
          v && x("submit");
        });
      },
      reset: () => {
        g.value.resetFields(), x("submit", "init");
      }
    };
    function E(v) {
      s.value = v, a.formOption.forEach(($, b) => {
        b > V - 2 && ($.show = v);
      });
    }
    return a.formOption.length >= V - 2 && (a == null ? void 0 : a.type) === "search" && E(!1), C(() => ({
      ...g.value,
      ...D
    })), () => {
      function v() {
        let e = {
          ...a
        };
        return delete e.model, delete e.formOption, a.formOption.forEach((c) => {
          var t, n, k;
          (t = c == null ? void 0 : c.formItem) != null && t.rules && !((k = (n = c == null ? void 0 : c.formItem) == null ? void 0 : n.rules) != null && k.hasOwnProperty("trigger")) && (c.formItem.rules.trigger = "blur");
        }), l(X, h({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, e, {
          ref: g
        }), {
          default: () => [a.formOption.map((c) => {
            let t;
            if (!(c.hasOwnProperty("show") && c.show === !1))
              return l(m, h(c.formItem, {
                key: c.formItem.prop
              }), Te(t = $(c)) ? t : {
                default: () => [t]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : l(m, {
            class: `btnItem ${s.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? l(y, null, [u.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? b() : l(y, null, [(a == null ? void 0 : a.type) === "dialog" ? l(Y, {
              onClick: (c) => {
                var n, k;
                function t(U) {
                  return U.parentElement.classList.value.split(" ").includes("el-dialog") ? U.parentElement : t(U.parentElement);
                }
                (k = (n = t(c.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : n.click) == null || k.call(n);
              }
            }, {
              default: () => [F("取消")]
            }) : "", l(Y, {
              type: "primary",
              onClick: D.submit
            }, {
              default: () => [F("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function $(e) {
        var c, t, n, k, U, N, z, P, R;
        switch (e.type) {
          case "input":
            return l(te, h({
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot
            });
          case "input-number":
            return l(he, h({
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "select":
            return l(de, h({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ce, h(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return l(re, h({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(t = e == null ? void 0 : e.control) == null ? void 0 : t.slot
            });
          case "cascader":
            return l(ue, h(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(n = e == null ? void 0 : e.control) == null ? void 0 : n.slot
            });
          case "radio":
            return l(H, h(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(le, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "radio-button":
            return l(H, h(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ae, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox":
            return l(q, h(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ee, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox-button":
            return l(q, h(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(O, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "datetime":
            const p = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((k = e == null ? void 0 : e.control) == null ? void 0 : k.type) || "date"];
            return l(o, h({
              clearable: !0,
              format: p,
              "value-format": p
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slot
            });
          case "time":
            return l(i, h({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slot
            });
          case "switch":
            return l(f, h(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slot
            });
          case "upload":
            return l(Z, h(e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => a.disabled ? "" : l(Y, {
                type: "primary"
              }, {
                default: () => [F("上传文件")]
              }),
              ...(P = e == null ? void 0 : e.control) == null ? void 0 : P.slot
            });
          case "txt":
            return l(y, null, [a.model[e.formItem.prop]]);
          case "slot":
            return l(y, null, [(R = u[e.formItem.prop]) == null ? void 0 : R.call(u, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]);
        }
      }
      function b() {
        return l(y, null, [l(Y, {
          type: "primary",
          onClick: D.submit,
          icon: Fe
        }, {
          default: () => [F("搜索")]
        }), l(Y, {
          onClick: D.reset,
          icon: $e
        }, {
          default: () => [F("重置")]
        }), a.type === "search" && a.formOption.length > V - 1 ? l(y, null, [l(Y, {
          text: !0,
          type: "primary",
          class: `expandBtn ${s.value ? "up" : "down"}`,
          onClick: () => {
            E(!s.value);
          },
          icon: ye
        }, {
          default: () => [s.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return v();
    };
  }
});
export {
  Ae as FormGenerator,
  Pe as GeneratorUtils,
  Be as TableGenerator
};
//# sourceMappingURL=index.js.map
