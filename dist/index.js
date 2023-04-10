(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as f, ref as Y, watch as K, nextTick as Q, createVNode as l, Fragment as n, mergeProps as c, openBlock as T, createElementBlock as S, createElementVNode as M, createTextVNode as G, isVNode as i } from "vue";
import { ElLoading as o, ElTable as X, ElTableColumn as A, ElEmpty as O, ElForm as ee, ElFormItem as Z, ElButton as U, ElUpload as ae, ElSwitch as le, ElTimePicker as ue, ElDatePicker as re, ElCheckboxGroup as p, ElCheckboxButton as de, ElCheckbox as ce, ElRadioGroup as m, ElRadioButton as he, ElRadio as te, ElCascader as ve, ElTreeSelect as se, ElSelect as _e, ElOption as be, ElInputNumber as we, ElInput as ye } from "element-plus";
import { u as qe } from "./utils-bb88efe0.js";
const Le = /* @__PURE__ */ f({
  name: "TableGenerator",
  setup(_, {
    expose: V,
    attrs: w,
    slots: u,
    emit: $
  }) {
    const a = Y(), g = w;
    let h, E = (/* @__PURE__ */ new Date()).getTime(), k = Y(!1), D = Y(0);
    return K(() => g.loading, (x) => {
      x ? Q(() => {
        h = o.service({
          target: `.el-table-${E}`
        });
      }) : h == null || h.close();
    }, {
      immediate: !0
    }), K(() => g.data, (x) => {
      if (!(u != null && u.operation) || x.length === 0)
        return k.value = !0;
      k.value = !1, Q(() => {
        let s = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((C) => {
          C.offsetWidth > s && (s = C.offsetWidth);
        }), D.value = s > 0 ? s + 32 : "auto", k.value = !0;
      });
    }, {
      immediate: !0
    }), V(() => a.value), () => {
      function x(b) {
        return b.map((e) => ["selection", "index", "expand"].includes(e.type) ? l(A, c({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slots
        }) : l(A, c({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (t) => {
            var y;
            return e.children && Array.isArray(e.children) && e.children.length > 0 ? x(e.children) : u[e.prop] ? l(n, null, [(y = u[e.prop]) == null ? void 0 : y.call(u, {
              $index: t.$index,
              row: t.row
            })]) : e.formatter ? l(n, null, [e.formatter({
              $index: t.$index,
              row: t.row
            }) ?? "-"]) : l(n, null, [t.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slots
        }));
      }
      function s() {
        return l(X, c({
          ref: a,
          stripe: !0
        }, g, {
          class: `TableGenerator el-table-${E}`
        }), {
          default: () => [x(g.tableOption), u != null && u.operation ? l(A, {
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
          empty: () => u != null && u.empty ? u == null ? void 0 : u.empty() : l(O, {
            description: "暂无数据"
          }, null),
          append: () => u != null && u.append ? u == null ? void 0 : u.append() : ""
        });
      }
      function C() {
        return l(X, c(w, {
          class: `TableGenerator el-table-${E}`
        }), {
          default: () => [l(A, {
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
      return l(n, null, [k.value ? s() : C()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var B = (_, V) => {
  let w = _.__vccOpts || _;
  for (let [u, $] of V)
    w[u] = $;
  return w;
}, ge = {
  name: "ArrowUp"
}, Ee = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xe = /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), ne = [
  xe
];
function Ve(_, V, w, u, $, a) {
  return T(), S("svg", Ee, ne);
}
var $e = /* @__PURE__ */ B(ge, [["render", Ve], ["__file", "arrow-up.vue"]]), ke = {
  name: "Refresh"
}, Ce = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, De = /* @__PURE__ */ M(
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
function Ue(_, V, w, u, $, a) {
  return T(), S("svg", Ce, Fe);
}
var Ye = /* @__PURE__ */ B(ke, [["render", Ue], ["__file", "refresh.vue"]]), Ie = {
  name: "Search"
}, Ge = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ae = /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Te = [
  Ae
];
function Se(_, V, w, u, $, a) {
  return T(), S("svg", Ge, Te);
}
var Me = /* @__PURE__ */ B(Ie, [["render", Se], ["__file", "search.vue"]]);
function Be(_) {
  return typeof _ == "function" || Object.prototype.toString.call(_) === "[object Object]" && !i(_);
}
const Pe = /* @__PURE__ */ f({
  name: "FormGenerator",
  setup(_, {
    expose: V,
    attrs: w,
    slots: u,
    emit: $
  }) {
    const a = w, g = Y(), h = {}, E = Y(!1), k = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, D = {
      submit: () => {
        g.value.validate((s) => {
          s && $("submit");
        });
      },
      reset: () => {
        g.value.resetFields(), $("submit", "init");
      }
    };
    function x(s) {
      E.value = s, a.formOption.forEach((C, b) => {
        b > k - 2 && (C.show = s);
      });
    }
    return a.formOption.length >= k - 2 && (a == null ? void 0 : a.type) === "search" && x(!1), V(() => ({
      ...g.value,
      ...D,
      $refs: h
    })), () => {
      function s() {
        return l(ee, c({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: g
        }), {
          default: () => [a.formOption.map((e) => {
            let t;
            if (!(e.hasOwnProperty("show") && e.show === !1))
              return l(Z, c(e.formItem, {
                key: e.formItem.prop
              }), Be(t = C(e)) ? t : {
                default: () => [t]
              });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : l(Z, {
            class: `btnItem ${E.value ? "searchItem" : ""}`
          }, {
            default: () => u != null && u.default ? l(n, null, [u.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? b() : l(n, null, [(a == null ? void 0 : a.type) === "dialog" ? l(U, {
              onClick: (e) => {
                var y, I;
                function t(F) {
                  return F.parentElement.classList.value.split(" ").includes("el-dialog") ? F.parentElement : t(F.parentElement);
                }
                (I = (y = t(e.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : y.click) == null || I.call(y);
              }
            }, {
              default: () => [G("取消")]
            }) : "", l(U, {
              type: "primary",
              onClick: D.submit
            }, {
              default: () => [G("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function C(e) {
        var t, y, I, F, N, R, z, L, P, j, W, q, H;
        switch (h[e.formItem.prop] = Y(), e.type) {
          case "input":
            return l(ye, c({
              ref: h[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(t = e == null ? void 0 : e.control) == null ? void 0 : t.slots
            });
          case "input-number":
            return l(we, c({
              ref: h[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "select":
            return l(_e, c({
              ref: h[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r, v;
                return [((r = e == null ? void 0 : e.control) == null ? void 0 : r.option) instanceof Array ? (v = e == null ? void 0 : e.control) == null ? void 0 : v.option.map((d) => l(be, c(d, {
                  key: d.value
                }), {
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "tree-select":
            return l(se, c({
              ref: h[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(y = e == null ? void 0 : e.control) == null ? void 0 : y.slots
            });
          case "cascader":
            return l(ve, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(I = e == null ? void 0 : e.control) == null ? void 0 : I.slots
            });
          case "radio":
            return l(m, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r, v;
                return [((r = e == null ? void 0 : e.control) == null ? void 0 : r.option) instanceof Array ? (v = e == null ? void 0 : e.control) == null ? void 0 : v.option.map((d) => l(te, c(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "radio-button":
            return l(m, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r, v;
                return [((r = e == null ? void 0 : e.control) == null ? void 0 : r.option) instanceof Array ? (v = e == null ? void 0 : e.control) == null ? void 0 : v.option.map((d) => l(he, c(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "checkbox":
            return l(p, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r, v;
                return [((r = e == null ? void 0 : e.control) == null ? void 0 : r.option) instanceof Array ? (v = e == null ? void 0 : e.control) == null ? void 0 : v.option.map((d) => l(ce, c(d, {
                  label: d.value,
                  key: d.label
                }), {
                  default: () => [d.label],
                  ...d == null ? void 0 : d.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return l(p, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => {
                var r, v;
                return [((r = e == null ? void 0 : e.control) == null ? void 0 : r.option) instanceof Array ? (v = e == null ? void 0 : e.control) == null ? void 0 : v.option.map((d) => l(de, c(d, {
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
            const J = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((F = e == null ? void 0 : e.control) == null ? void 0 : F.type) || "date"];
            return l(re, c({
              ref: h[e.formItem.prop],
              clearable: !0,
              format: J,
              "value-format": J
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), {
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slots
            });
          case "time-picker":
            return l(ue, c({
              ref: h[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "switch":
            return l(le, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (r) => a.model[e.formItem.prop] = r
            }), null);
          case "upload":
            return l(ae, c({
              ref: h[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (r) => a.model[e.formItem.prop] = r
            }), {
              default: () => a.disabled ? "" : l(U, {
                type: "primary"
              }, {
                default: () => [G("上传文件")]
              }),
              ...(R = e == null ? void 0 : e.control) == null ? void 0 : R.slots
            });
          case "slot":
            return (L = (z = e == null ? void 0 : e.control) == null ? void 0 : z.slots) != null && L.default && typeof ((j = (P = e == null ? void 0 : e.control) == null ? void 0 : P.slots) == null ? void 0 : j.default) == "function" ? l(n, null, [(q = (W = e.control.slots).default) == null ? void 0 : q.call(W, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : u[e.formItem.prop] ? (H = u[e.formItem.prop]) == null ? void 0 : H.call(u, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function b() {
        return l(n, null, [l(U, {
          type: "primary",
          onClick: D.submit,
          icon: Me
        }, {
          default: () => [G("搜索")]
        }), l(U, {
          onClick: D.reset,
          icon: Ye
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > k - 1 ? l(n, null, [l(U, {
          text: !0,
          type: "primary",
          class: `expandBtn ${E.value ? "up" : "down"}`,
          onClick: () => {
            x(!E.value);
          },
          icon: $e
        }, {
          default: () => [E.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return s();
    };
  }
});
export {
  Pe as FormGenerator,
  qe as GeneratorUtils,
  Le as TableGenerator
};
//# sourceMappingURL=index.js.map
