(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div:not(.el-switch){width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.TableGenerator .content-wrapper{white-space:nowrap;display:inline-block}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as f, ref as A, watch as J, nextTick as Q, createVNode as r, Fragment as k, mergeProps as h, openBlock as D, createElementBlock as F, createElementVNode as U, createTextVNode as G, isVNode as i } from "vue";
import { ElLoading as O, ElTable as ee, ElTableColumn as S, ElEmpty as ae, ElForm as le, ElFormItem as X, ElButton as $, ElUpload as re, ElSwitch as ue, ElTimePicker as de, ElDatePicker as ce, ElCheckboxGroup as Z, ElCheckboxButton as te, ElCheckbox as se, ElRadioGroup as o, ElRadioButton as ne, ElRadio as he, ElCascader as ve, ElTreeSelect as ye, ElSelect as be, ElOption as ge, ElInputNumber as _e, ElInput as xe, ElSteps as Ee, ElStep as we } from "element-plus";
const Ke = /* @__PURE__ */ f({
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
    return J(() => u.loading, (x) => {
      x ? Q(() => {
        s = O.service({
          target: `.el-table-${_}`,
          text: "加载中"
        });
      }) : s == null || s.close();
    }, {
      immediate: !0
    }), u.operationWidth ? g.value = u.operationWidth : J(() => u.data, () => {
      Q(() => {
        if (!isNaN(g.value) && Array.isArray(u.data) && g.value > 32 && u.data.length === 0)
          return;
        const x = [];
        document.querySelectorAll(`.el-table-${_} .content-wrapper`).forEach((p) => {
          x.push(p.offsetWidth);
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
            return t.children && Array.isArray(t.children) && t.children.length > 0 ? x(t.children) : l[t.prop] ? r(k, null, [(V = l[t.prop]) == null ? void 0 : V.call(l, {
              $index: E.$index,
              row: E.row
            })]) : t.formatter ? r(k, null, [t.formatter({
              $index: E.$index,
              row: E.row
            }) ?? "-"]) : r(k, null, [E.row[t.prop] ?? "-"]);
          },
          ...t == null ? void 0 : t.slots
        }));
      }
      function p() {
        return r(ee, h({
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
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(ae, {
            description: "暂无数据"
          }, null),
          append: () => l != null && l.append ? l == null ? void 0 : l.append() : ""
        });
      }
      return r(k, null, [p()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var Y = (n, y) => {
  let v = n.__vccOpts || n;
  for (let [l, b] of y)
    v[l] = b;
  return v;
}, pe = {
  name: "ArrowUp"
}, ke = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ie = /* @__PURE__ */ U(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Ve = [
  Ie
];
function $e(n, y, v, l, b, a) {
  return D(), F("svg", ke, Ve);
}
var Ge = /* @__PURE__ */ Y(pe, [["render", $e], ["__file", "arrow-up.vue"]]), Ae = {
  name: "Refresh"
}, Ce = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Se = /* @__PURE__ */ U(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), fe = [
  Se
];
function De(n, y, v, l, b, a) {
  return D(), F("svg", Ce, fe);
}
var Fe = /* @__PURE__ */ Y(Ae, [["render", De], ["__file", "refresh.vue"]]), Ue = {
  name: "Search"
}, Ye = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Te = /* @__PURE__ */ U(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Me = [
  Te
];
function me(n, y, v, l, b, a) {
  return D(), F("svg", Ye, Me);
}
var Ne = /* @__PURE__ */ Y(Ue, [["render", me], ["__file", "search.vue"]]);
const Je = /* @__PURE__ */ f({
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
        a.onCancel ? b("cancel") : (V = (E = p(t.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : E.click) == null || V.call(E);
      },
      reset: () => {
        u.value.resetFields(), b("submit", "init");
      }
    };
    function p(t) {
      return t.parentElement.classList.value.split(" ").includes("el-dialog") ? t.parentElement : p(t.parentElement);
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
        return r(le, h({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: u
        }), {
          default: () => [a.formOption.map((e) => {
            var C;
            return r(X, h(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [E(e)],
              ...(C = e.formItem) == null ? void 0 : C.slots
            });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(X, {
            class: `btnItem ${_.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default && typeof (l == null ? void 0 : l.default()[0].type) == "string" ? r(k, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? V() : r(k, null, [(a == null ? void 0 : a.type) === "dialog" ? r($, {
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
        var C, T, M, m, N, B, j, P, R, z, q, L, W, H;
        switch (s[e.formItem.prop] = A(), e.type) {
          case "input":
            return r(xe, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              maxlength: ((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) === "textarea" ? 100 : 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(T = e == null ? void 0 : e.control) == null ? void 0 : T.slots
            });
          case "input-number":
            return r(_e, h({
              ref: s[e.formItem.prop],
              min: 0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "select":
            return r(be, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.option.map((c) => r(ge, h(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "tree-select":
            return r(ye, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(M = e == null ? void 0 : e.control) == null ? void 0 : M.slots
            });
          case "cascader":
            return r(ve, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(m = e == null ? void 0 : e.control) == null ? void 0 : m.slots
            });
          case "radio":
            return r(o, h({
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
          case "radio-button":
            return r(o, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.radioGroup.map((c) => r(ne, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(Z, h({
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
          case "checkbox-button":
            return r(Z, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, w;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (w = e == null ? void 0 : e.control) == null ? void 0 : w.checkboxGroup.map((c) => r(te, h(c, {
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
            const K = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((N = e == null ? void 0 : e.control) == null ? void 0 : N.type) || "date"];
            return r(ce, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              format: K,
              "value-format": K
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "time-picker":
            return r(de, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(ue, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(re, h({
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
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            });
          case "slot":
            return (R = (P = e == null ? void 0 : e.control) == null ? void 0 : P.slots) != null && R.default && typeof ((q = (z = e == null ? void 0 : e.control) == null ? void 0 : z.slots) == null ? void 0 : q.default) == "function" ? r(k, null, [(W = (L = e.control.slots).default) == null ? void 0 : W.call(L, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (H = l[e.formItem.prop]) == null ? void 0 : H.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function V() {
        return r(k, null, [r($, {
          type: "primary",
          onClick: x.submit,
          icon: Ne
        }, {
          default: () => [G("搜索")]
        }), r($, {
          onClick: x.reset,
          icon: Fe
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > g - 1 ? r(k, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${_.value ? "up" : "down"}`,
          onClick: () => {
            I(!_.value);
          },
          icon: Ge
        }, {
          default: () => [_.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return t();
    };
  }
});
function Be(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !i(n);
}
const Qe = /* @__PURE__ */ f({
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
        }, [r(Ee, h({
          "align-center": !0
        }, a, {
          active: u.value
        }), Be(x = a.stepsOption.map((p) => r(we, p, {
          ...p == null ? void 0 : p.slots
        }))) ? x : {
          default: () => [x]
        }), r("div", {
          class: "container"
        }, [Object.keys(l).map((p, I) => r("div", {
          style: {
            display: u.value === I ? "block" : "none"
          }
        }, [l[p]()]))]), r("div", {
          class: "btn-group"
        }, [l.default ? l.default(u.value) : r(k, null, [u.value > 0 ? r($, {
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
}), je = (n, y) => n.find((v) => v.prop === y), Pe = (n, y, v) => {
  var b;
  const l = n.find((a) => a.formItem.prop === y);
  l && ((b = l == null ? void 0 : l.control) != null && b.option) && (l.control.option = v);
}, Re = (n, y) => n.find((v) => v.formItem.prop === y), ze = (n, y, v, l) => {
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
}, Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: Re,
  getOption: ze,
  getTableOption: je,
  setOption: Pe,
  setRequired: qe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Je as FormGenerator,
  Xe as GeneratorUtils,
  Qe as StepsGenerator,
  Ke as TableGenerator
};
//# sourceMappingURL=index.js.map
