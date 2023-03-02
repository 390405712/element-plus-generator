(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as H, ref as G, onMounted as I, watch as j, createVNode as l, Fragment as g, mergeProps as t, openBlock as M, createElementBlock as S, createElementVNode as B, createTextVNode as F, isVNode as J } from "vue";
import { ElLoading as K, ElTable as L, ElTableColumn as T, ElEmpty as Q, ElForm as X, ElFormItem as W, ElButton as Y, ElUpload as Z, ElSwitch as f, ElTimePicker as i, ElDatePicker as o, ElCheckboxGroup as p, ElCheckboxButton as O, ElCheckbox as ee, ElRadioGroup as q, ElRadioButton as ae, ElRadio as le, ElCascader as ue, ElTreeSelect as re, ElSelect as de, ElOption as ce, ElInputNumber as te, ElInput as he } from "element-plus";
import { u as Pe } from "./utils-9d833f48.js";
const Be = /* @__PURE__ */ H({
  name: "TableGenerator",
  setup(_, {
    expose: D,
    attrs: w,
    slots: u,
    emit: x
  }) {
    const a = w;
    let y, s = new Date().getTime(), V = G(!1), $ = G(0);
    return I(() => {
      j(() => a.loading, (E) => {
        E ? y = K.service({
          target: `.el-table-${s}`
        }) : y == null || y.close();
      }, {
        immediate: !0
      }), j(() => a.data, (E) => {
        if (!(u != null && u.operation) || E.length === 0)
          return V.value = !0;
        V.value = !1, setTimeout(() => {
          let v = 0;
          document.querySelectorAll(".content-wrapper-width").forEach((k) => {
            k.offsetWidth > v && (v = k.offsetWidth);
          }), $.value = v > 0 ? v + 32 : "auto", console.log($.value), V.value = !0;
        });
      }, {
        immediate: !0
      });
    }), () => {
      function E(b) {
        return b.map((e) => ["selection", "index", "expand"].includes(e.type) ? l(T, t({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slot
        }) : l(T, t({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (c) => {
            var h;
            return e.children && e.children.length > 0 ? E(e.children) : u[e.prop] ? l(g, null, [(h = u[e.prop]) == null ? void 0 : h.call(u, {
              $index: c.$index,
              row: c.row
            })]) : e.formatter ? l(g, null, [e.formatter({
              $index: c.$index,
              row: c.row
            }) ?? "-"]) : l(g, null, [c.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slot
        }));
      }
      function v() {
        return l(L, t({
          stripe: !0
        }, a, {
          class: `TableGenerator el-table-${s}`
        }), {
          default: () => [E(a.tableOption), u != null && u.operation ? l(T, {
            fixed: "right",
            label: "操作",
            width: $.value
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
      function k() {
        return l(L, t(w, {
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
      return l(g, null, [V.value ? v() : k()]);
    };
  }
});
/*! Element Plus Icons Vue v2.0.10 */
var N = (_, D) => {
  let w = _.__vccOpts || _;
  for (let [u, x] of D)
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
function ne(_, D, w, u, x, a) {
  return M(), S("svg", _e, we);
}
var ge = /* @__PURE__ */ N(ve, [["render", ne], ["__file", "arrow-up.vue"]]), ye = {
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
function Ve(_, D, w, u, x, a) {
  return M(), S("svg", se, xe);
}
var $e = /* @__PURE__ */ N(ye, [["render", Ve], ["__file", "refresh.vue"]]), ke = {
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
function Ye(_, D, w, u, x, a) {
  return M(), S("svg", Ce, Ue);
}
var Fe = /* @__PURE__ */ N(ke, [["render", Ye], ["__file", "search.vue"]]);
function Te(_) {
  return typeof _ == "function" || Object.prototype.toString.call(_) === "[object Object]" && !J(_);
}
const Ne = /* @__PURE__ */ H({
  name: "FormGenerator",
  setup(_, {
    expose: D,
    attrs: w,
    slots: u,
    emit: x
  }) {
    const a = w, y = G(), s = G(!1), V = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, $ = {
      submit: () => {
        y.value.validate((v) => {
          v && x("submit");
        });
      },
      reset: () => {
        y.value.resetFields(), x("submit", "init");
      }
    };
    function E(v) {
      s.value = v, a.formOption.forEach((k, b) => {
        b > V - 2 && (k.show = v);
      });
    }
    return a.formOption.length >= V - 2 && (a == null ? void 0 : a.type) === "search" && E(!1), D(() => ({
      ...y.value,
      ...$
    })), () => {
      function v() {
        let e = {
          ...a
        };
        return delete e.model, delete e.formOption, a.formOption.forEach((c) => {
          var h, n, C;
          (h = c == null ? void 0 : c.formItem) != null && h.rules && !((C = (n = c == null ? void 0 : c.formItem) == null ? void 0 : n.rules) != null && C.hasOwnProperty("trigger")) && (c.formItem.rules.trigger = "blur");
        }), l(X, t({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, e, {
          ref: y
        }), {
          default: () => [a.formOption.map((c) => {
            let h;
            if (!(c.hasOwnProperty("show") && c.show === !1))
              return l(W, c.formItem, Te(h = k(c)) ? h : {
                default: () => [h]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : l(W, {
            class: `btnItem ${s.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? l(g, null, [u.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? b() : l(g, null, [(a == null ? void 0 : a.type) === "dialog" ? l(Y, {
              onClick: (c) => {
                var n, C;
                function h(U) {
                  return U.parentElement.className !== "el-dialog" ? h(U.parentElement) : U.parentElement;
                }
                (C = (n = h(c.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : n.click) == null || C.call(n);
              }
            }, {
              default: () => [F("取消")]
            }) : "", l(Y, {
              type: "primary",
              onClick: $.submit
            }, {
              default: () => [F("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function k(e) {
        var c, h, n, C, U, A, z, P, R;
        switch (e.type) {
          case "input":
            return l(he, t({
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot
            });
          case "input-number":
            return l(te, t({
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "select":
            return l(de, t({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ce, t(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return l(re, t({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(h = e == null ? void 0 : e.control) == null ? void 0 : h.slot
            });
          case "cascader":
            return l(ue, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(n = e == null ? void 0 : e.control) == null ? void 0 : n.slot
            });
          case "radio":
            return l(q, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(le, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "radio-button":
            return l(q, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ae, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox":
            return l(p, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(ee, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "checkbox-button":
            return l(p, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(O, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "datetime":
            const m = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) || "date"];
            return l(o, t({
              clearable: !0,
              format: m,
              "value-format": m
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slot
            });
          case "time":
            return l(i, t({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slot
            });
          case "switch":
            return l(f, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slot
            });
          case "upload":
            return l(Z, t(e == null ? void 0 : e.control, {
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
            return l(g, null, [a.model[e.formItem.prop]]);
          case "slot":
            return l(g, null, [(R = u[e.formItem.prop]) == null ? void 0 : R.call(u, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]);
        }
      }
      function b() {
        return l(g, null, [l(Y, {
          type: "primary",
          onClick: $.submit,
          icon: Fe
        }, {
          default: () => [F("搜索")]
        }), l(Y, {
          onClick: $.reset,
          icon: $e
        }, {
          default: () => [F("重置")]
        }), a.type === "search" && a.formOption.length > V - 1 ? l(g, null, [l(Y, {
          text: !0,
          type: "primary",
          class: `expandBtn ${s.value ? "up" : "down"}`,
          onClick: () => {
            E(!s.value);
          },
          icon: ge
        }, {
          default: () => [s.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return v();
    };
  }
});
export {
  Ne as FormGenerator,
  Pe as GeneratorUtils,
  Be as TableGenerator
};
//# sourceMappingURL=index.js.map
