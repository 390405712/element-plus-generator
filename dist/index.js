(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as q, ref as F, onMounted as H, watch as P, createVNode as l, Fragment as b, mergeProps as t, openBlock as M, createElementBlock as T, createElementVNode as p, createTextVNode as Y, isVNode as I } from "vue";
import { ElLoading as J, ElTable as R, ElTableColumn as m, ElEmpty as K, ElForm as Q, ElFormItem as L, ElButton as D, ElUpload as X, ElSwitch as Z, ElTimePicker as f, ElDatePicker as o, ElCheckboxGroup as W, ElCheckboxButton as i, ElCheckbox as O, ElRadioGroup as j, ElRadioButton as ee, ElRadio as ae, ElCascader as le, ElTreeSelect as ue, ElSelect as re, ElOption as de, ElInputNumber as ce, ElInput as te } from "element-plus";
import { u as We } from "./utils-9d833f48.js";
const ze = /* @__PURE__ */ q({
  name: "TableGenerator",
  setup(v, {
    expose: $,
    attrs: n,
    slots: u,
    emit: s
  }) {
    const a = n;
    let g, y = new Date().getTime(), E = F(!1), k = F(0);
    return H(() => {
      P(() => a.loading, (x) => {
        x ? g = J.service({
          target: `.el-table-${y}`
        }) : g == null || g.close();
      }, {
        immediate: !0
      }), P(() => a.data, (x) => {
        if (!(u != null && u.operation) || x.length === 0)
          return E.value = !0;
        E.value = !1, setTimeout(() => {
          let _ = 0;
          document.querySelectorAll(".content-wrapper-width").forEach((C) => {
            C.offsetWidth > _ && (_ = C.offsetWidth);
          }), k.value = _ > 0 ? _ + 32 : "auto", console.log(k.value), E.value = !0;
        });
      }, {
        immediate: !0
      });
    }), () => {
      function x(w) {
        return w.map((e) => ["selection", "index", "expand"].includes(e.type) ? l(m, t({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slot
        }) : l(m, t({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (c) => {
            var h;
            return e.children && e.children.length > 0 ? x(e.children) : u[e.prop] ? l(b, null, [(h = u[e.prop]) == null ? void 0 : h.call(u, {
              $index: c.$index,
              row: c.row
            })]) : e.formatter ? l(b, null, [e.formatter({
              $index: c.$index,
              row: c.row
            }) ?? "-"]) : l(b, null, [c.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slot
        }));
      }
      function _() {
        return l(R, t({
          stripe: !0
        }, a, {
          class: `TableGenerator el-table-${y}`
        }), {
          default: () => [x(a.tableOption), u != null && u.operation ? l(m, {
            fixed: "right",
            label: "操作",
            width: k.value
          }, {
            default: (w) => {
              var e;
              return l("div", {
                class: "content-wrapper"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: w.$index,
                row: w.row
              })]);
            }
          }) : ""],
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : l(K, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function C() {
        return l(R, t(n, {
          class: `TableGenerator el-table-${y}`
        }), {
          default: () => [l(m, {
            fixed: "right"
          }, {
            default: (w) => {
              var e;
              return l("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = u.operation) == null ? void 0 : e.call(u, {
                $index: w.$index,
                row: w.row
              })]);
            }
          })]
        });
      }
      return l(b, null, [E.value ? _() : C()]);
    };
  }
});
/*! Element Plus Icons Vue v2.0.10 */
var G = (v, $) => {
  let n = v.__vccOpts || v;
  for (let [u, s] of $)
    n[u] = s;
  return n;
}, he = {
  name: "ArrowDown"
}, _e = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ve = /* @__PURE__ */ p("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), ne = [
  ve
];
function we(v, $, n, u, s, a) {
  return M(), T("svg", _e, ne);
}
var be = /* @__PURE__ */ G(he, [["render", we], ["__file", "arrow-down.vue"]]), se = {
  name: "ArrowUp"
}, ge = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ye = /* @__PURE__ */ p("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), Ee = [
  ye
];
function xe(v, $, n, u, s, a) {
  return M(), T("svg", ge, Ee);
}
var Ve = /* @__PURE__ */ G(se, [["render", xe], ["__file", "arrow-up.vue"]]), $e = {
  name: "Refresh"
}, ke = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ce = /* @__PURE__ */ p("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), De = [
  Ce
];
function Ue(v, $, n, u, s, a) {
  return M(), T("svg", ke, De);
}
var Ye = /* @__PURE__ */ G($e, [["render", Ue], ["__file", "refresh.vue"]]), me = {
  name: "Search"
}, Fe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Me = /* @__PURE__ */ p("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), Te = [
  Me
];
function pe(v, $, n, u, s, a) {
  return M(), T("svg", Fe, Te);
}
var Ge = /* @__PURE__ */ G(me, [["render", pe], ["__file", "search.vue"]]);
function Se(v) {
  return typeof v == "function" || Object.prototype.toString.call(v) === "[object Object]" && !I(v);
}
const Pe = /* @__PURE__ */ q({
  name: "FormGenerator",
  setup(v, {
    expose: $,
    attrs: n,
    slots: u,
    emit: s
  }) {
    const a = n, g = F(), y = F(!1), E = {
      labelWidth: a.labelWidth || "auto",
      column: isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4
    }, k = {
      submit: () => {
        g.value.validate((_) => {
          _ && s("submit");
        });
      },
      reset: () => {
        g.value.resetFields(), s("submit", "init");
      }
    };
    function x(_) {
      y.value = _, a.formOption.forEach((C, w) => {
        w > E.column - 2 && (C.show = _);
      });
    }
    return a.formOption.length >= E.column - 2 && (a == null ? void 0 : a.type) === "search" && x(!1), $(() => ({
      ...g.value,
      ...k
    })), () => {
      function _() {
        let e = {
          ...a
        };
        return delete e.model, delete e.formOption, a.formOption.forEach((c) => {
          var h, V, U;
          (h = c == null ? void 0 : c.formItem) != null && h.rules && !((U = (V = c == null ? void 0 : c.formItem) == null ? void 0 : V.rules) != null && U.hasOwnProperty("trigger")) && (c.formItem.rules.trigger = "blur");
        }), l(Q, t({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1
        }, E, e, {
          ref: g
        }), {
          default: () => [a.formOption.map((c) => {
            let h;
            if (!(c.hasOwnProperty("show") && c.show === !1))
              return l(L, c.formItem, Se(h = C(c)) ? h : {
                default: () => [h]
              });
          }), e.disabled === !0 || e.noFooter || !e.onSubmit ? "" : l(L, {
            class: `btnItem ${y.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? l(b, null, [u.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? w() : l(b, null, [l(D, {
              onClick: (c) => {
                function h(V) {
                  return V.parentElement.className !== "el-dialog" ? h(V.parentElement) : V.parentElement;
                }
                h(c.target).querySelector(".el-dialog__headerbtn").click();
              }
            }, {
              default: () => [Y("取消")]
            }), l(D, {
              type: "primary",
              onClick: k.submit
            }, {
              default: () => [Y("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function C(e) {
        var c, h, V, U, S, B, A, N;
        switch (e.type) {
          case "input":
            return l(te, t({
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(c = e == null ? void 0 : e.control) == null ? void 0 : c.slot
            });
          case "input-number":
            return l(ce, t({
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "select":
            return l(re, t({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(de, t(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "tree-select":
            return l(ue, t({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(h = e == null ? void 0 : e.control) == null ? void 0 : h.slot
            });
          case "cascader":
            return l(le, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "radio":
            return l(j, t(e == null ? void 0 : e.control, {
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
          case "radio-button":
            return l(j, t(e == null ? void 0 : e.control, {
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
          case "checkbox":
            return l(W, t(e == null ? void 0 : e.control, {
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
          case "checkbox-button":
            return l(W, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r;
                return [(r = e == null ? void 0 : e.control) == null ? void 0 : r.option.map((d) => l(i, t(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slot
                }))];
              }
            });
          case "datetime":
            const z = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((V = e == null ? void 0 : e.control) == null ? void 0 : V.type) || "date"];
            return l(o, t({
              clearable: !0,
              format: z,
              "value-format": z
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slot
            });
          case "time":
            return l(f, t({
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(S = e == null ? void 0 : e.control) == null ? void 0 : S.slot
            });
          case "switch":
            return l(Z, t(e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slot
            });
          case "upload":
            return l(X, t(e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => a.disabled ? "" : l(D, {
                type: "primary"
              }, {
                default: () => [Y("上传文件")]
              }),
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slot
            });
          case "txt":
            return l(b, null, [a.model[e.formItem.prop]]);
          case "slot":
            return l(b, null, [(N = u[e.formItem.prop]) == null ? void 0 : N.call(u, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]);
        }
      }
      function w() {
        return l(b, null, [l(D, {
          type: "primary",
          onClick: k.submit,
          icon: Ge
        }, {
          default: () => [Y("搜索")]
        }), l(D, {
          onClick: k.reset,
          icon: Ye
        }, {
          default: () => [Y("重置")]
        }), a.type === "search" && a.formOption.length > E.column - 1 ? l(b, null, [l(D, {
          text: !0,
          type: "primary",
          onClick: () => {
            x(!y.value);
          },
          icon: y.value ? Ve : be
        }, {
          default: () => [y.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return _();
    };
  }
});
export {
  Pe as FormGenerator,
  We as GeneratorUtils,
  ze as TableGenerator
};
//# sourceMappingURL=index.js.map
