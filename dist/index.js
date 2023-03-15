(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as J, ref as I, watch as L, nextTick as P, createVNode as l, Fragment as E, mergeProps as h, openBlock as G, createElementBlock as S, createElementVNode as M, createTextVNode as F, isVNode as K } from "vue";
import { ElLoading as Q, ElTable as j, ElTableColumn as T, ElEmpty as X, ElForm as Z, ElFormItem as W, ElButton as U, ElUpload as f, ElSwitch as i, ElTimePicker as o, ElDatePicker as O, ElCheckboxGroup as q, ElCheckboxButton as ee, ElCheckbox as ae, ElRadioGroup as H, ElRadioButton as le, ElRadio as ue, ElCascader as re, ElTreeSelect as de, ElSelect as ce, ElOption as he, ElInputNumber as te, ElInput as ve } from "element-plus";
import { u as Ne } from "./utils-666743d5.js";
const Me = /* @__PURE__ */ J({
  name: "TableGenerator",
  setup(_, {
    expose: k,
    attrs: s,
    slots: u,
    emit: $
  }) {
    const a = s;
    let x, t = new Date().getTime(), g = I(!1), p = I(0);
    return L(() => a.loading, (b) => {
      b ? P(() => {
        x = Q.service({
          target: `.el-table-${t}`
        });
      }) : x == null || x.close();
    }, {
      immediate: !0
    }), L(() => a.data, (b) => {
      if (!(u != null && u.operation) || b.length === 0)
        return g.value = !0;
      g.value = !1, P(() => {
        let n = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((w) => {
          w.offsetWidth > n && (n = w.offsetWidth);
        }), p.value = n > 0 ? n + 32 : "auto", g.value = !0;
      });
    }, {
      immediate: !0
    }), () => {
      function b(y) {
        return y.map((c) => ["selection", "index", "expand"].includes(c.type) ? l(T, h({
          type: c.type
        }, c), {
          ...c == null ? void 0 : c.slot
        }) : l(T, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, c), {
          default: (e) => {
            var v;
            return c.children && Array.isArray(c.children) && c.children.length > 0 ? b(c.children) : u[c.prop] ? l(E, null, [(v = u[c.prop]) == null ? void 0 : v.call(u, {
              $index: e.$index,
              row: e.row
            })]) : c.formatter ? l(E, null, [c.formatter({
              $index: e.$index,
              row: e.row
            }) ?? "-"]) : l(E, null, [e.row[c.prop] ?? "-"]);
          },
          ...c == null ? void 0 : c.slot
        }));
      }
      function n() {
        return l(j, h({
          stripe: !0
        }, a, {
          class: `TableGenerator el-table-${t}`
        }), {
          default: () => [b(a.tableOption), u != null && u.operation ? l(T, {
            fixed: "right",
            label: "操作",
            width: p.value
          }, {
            default: (y) => {
              var c;
              return l("div", {
                class: "content-wrapper"
              }, [(c = u.operation) == null ? void 0 : c.call(u, {
                $index: y.$index,
                row: y.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : l(X, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function w() {
        return l(j, h(s, {
          class: `TableGenerator el-table-${t}`
        }), {
          default: () => [l(T, {
            fixed: "right"
          }, {
            default: (y) => {
              var c;
              return l("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(c = u.operation) == null ? void 0 : c.call(u, {
                $index: y.$index,
                row: y.row
              })]);
            }
          })]
        });
      }
      return l(E, null, [g.value ? n() : w()]);
    };
  }
});
/*! Element Plus Icons Vue v2.0.10 */
var B = (_, k) => {
  let s = _.__vccOpts || _;
  for (let [u, $] of k)
    s[u] = $;
  return s;
}, _e = {
  name: "ArrowUp"
}, be = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, we = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), ye = [
  we
];
function se(_, k, s, u, $, a) {
  return G(), S("svg", be, ye);
}
var ge = /* @__PURE__ */ B(_e, [["render", se], ["__file", "arrow-up.vue"]]), Ee = {
  name: "Refresh"
}, xe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ne = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), Ve = [
  ne
];
function $e(_, k, s, u, $, a) {
  return G(), S("svg", xe, Ve);
}
var ke = /* @__PURE__ */ B(Ee, [["render", $e], ["__file", "refresh.vue"]]), Ce = {
  name: "Search"
}, pe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, De = /* @__PURE__ */ M("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), Ue = [
  De
];
function Ye(_, k, s, u, $, a) {
  return G(), S("svg", pe, Ue);
}
var Fe = /* @__PURE__ */ B(Ce, [["render", Ye], ["__file", "search.vue"]]);
function Ie(_) {
  return typeof _ == "function" || Object.prototype.toString.call(_) === "[object Object]" && !K(_);
}
const Be = /* @__PURE__ */ J({
  name: "FormGenerator",
  setup(_, {
    expose: k,
    attrs: s,
    slots: u,
    emit: $
  }) {
    const a = s, x = I(), t = {}, g = I(!1), p = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, b = {
      submit: () => {
        x.value.validate((w) => {
          w && $("submit");
        });
      },
      reset: () => {
        x.value.resetFields(), $("submit", "init");
      }
    };
    function n(w) {
      g.value = w, a.formOption.forEach((y, c) => {
        c > p - 2 && (y.show = w);
      });
    }
    return a.formOption.length >= p - 2 && (a == null ? void 0 : a.type) === "search" && n(!1), k(() => ({
      ...x.value,
      ...b,
      $refs: t
    })), () => {
      function w() {
        let e = {
          ...a
        };
        return delete e.model, delete e.formOption, l(Z, h({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, e, {
          ref: x
        }), {
          default: () => [a.formOption.map((v) => {
            let V;
            if (!(v.hasOwnProperty("show") && v.show === !1))
              return l(W, h(v.formItem, {
                key: v.formItem.prop
              }), Ie(V = y(v)) ? V : {
                default: () => [V]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : l(W, {
            class: `btnItem ${g.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? l(E, null, [u.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? c() : l(E, null, [(a == null ? void 0 : a.type) === "dialog" ? l(U, {
              onClick: (v) => {
                var C, Y;
                function V(D) {
                  return D.parentElement.classList.value.split(" ").includes("el-dialog") ? D.parentElement : V(D.parentElement);
                }
                (Y = (C = V(v.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : C.click) == null || Y.call(C);
              }
            }, {
              default: () => [F("取消")]
            }) : "", l(U, {
              type: "primary",
              onClick: b.submit
            }, {
              default: () => [F("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function y(e) {
        var v, V, C, Y, D, m, A, N, z;
        switch (t[e.formItem.prop] = I(), e.type) {
          case "input":
            return l(ve, h({
              ref: t[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(v = e == null ? void 0 : e.control) == null ? void 0 : v.slot
            });
          case "input-number":
            return l(te, h({
              ref: t[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "select":
            return l(ce, h({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(he, h(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return l(de, h({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(V = e == null ? void 0 : e.control) == null ? void 0 : V.slot
            });
          case "cascader":
            return l(re, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(C = e == null ? void 0 : e.control) == null ? void 0 : C.slot
            });
          case "radio":
            return l(H, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ue, h(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "radio-button":
            return l(H, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
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
          case "checkbox":
            return l(q, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
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
          case "checkbox-button":
            return l(q, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
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
          case "datetime":
            const R = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((Y = e == null ? void 0 : e.control) == null ? void 0 : Y.type) || "date"];
            return l(O, h({
              ref: t[e.formItem.prop],
              clearable: !0,
              format: R,
              "value-format": R
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(D = e == null ? void 0 : e.control) == null ? void 0 : D.slot
            });
          case "time":
            return l(o, h({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(m = e == null ? void 0 : e.control) == null ? void 0 : m.slot
            });
          case "switch":
            return l(i, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slot
            });
          case "upload":
            return l(f, h({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => a.disabled ? "" : l(U, {
                type: "primary"
              }, {
                default: () => [F("上传文件")]
              }),
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slot
            });
          case "txt":
            return l(E, null, [a.model[e.formItem.prop]]);
          case "slot":
            return l(E, null, [(z = u[e.formItem.prop]) == null ? void 0 : z.call(u, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]);
        }
      }
      function c() {
        return l(E, null, [l(U, {
          type: "primary",
          onClick: b.submit,
          icon: Fe
        }, {
          default: () => [F("搜索")]
        }), l(U, {
          onClick: b.reset,
          icon: ke
        }, {
          default: () => [F("重置")]
        }), a.type === "search" && a.formOption.length > p - 1 ? l(E, null, [l(U, {
          text: !0,
          type: "primary",
          class: `expandBtn ${g.value ? "up" : "down"}`,
          onClick: () => {
            n(!g.value);
          },
          icon: ge
        }, {
          default: () => [g.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return w();
    };
  }
});
export {
  Be as FormGenerator,
  Ne as GeneratorUtils,
  Me as TableGenerator
};
//# sourceMappingURL=index.js.map
