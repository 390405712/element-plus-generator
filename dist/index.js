(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.TableGenerator .content-wrapper{white-space:nowrap;display:inline-block}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as S, ref as f, watch as K, nextTick as J, createVNode as r, Fragment as k, mergeProps as h, openBlock as m, createElementBlock as D, createElementVNode as F, createTextVNode as G, isVNode as o } from "vue";
import { ElLoading as i, ElTable as O, ElTableColumn as C, ElEmpty as ee, ElForm as ae, ElFormItem as Q, ElButton as $, ElUpload as le, ElSwitch as re, ElTimePicker as ue, ElDatePicker as de, ElCheckboxGroup as X, ElCheckboxButton as ce, ElCheckbox as te, ElRadioGroup as Z, ElRadioButton as se, ElRadio as ne, ElCascader as he, ElTreeSelect as ve, ElSelect as be, ElOption as ye, ElInputNumber as ge, ElInput as _e, ElSteps as Ee, ElStep as we } from "element-plus";
const He = /* @__PURE__ */ S({
  name: "TableGenerator",
  setup(n, {
    expose: b,
    attrs: v,
    slots: l,
    emit: y
  }) {
    const a = f(), u = v;
    let s;
    const _ = (/* @__PURE__ */ new Date()).getTime(), g = f("auto");
    return K(() => u.loading, (E) => {
      E ? J(() => {
        s = i.service({
          target: `.el-table-${_}`
        });
      }) : s == null || s.close();
    }, {
      immediate: !0
    }), u.operationWidth ? g.value = u.operationWidth : K(() => u.data, () => {
      J(() => {
        if (!isNaN(g.value) && Array.isArray(u.data) && g.value > 32 && u.data.length === 0)
          return;
        const E = [];
        document.querySelectorAll(`.el-table-${_} .content-wrapper`).forEach((p) => {
          E.push(p.offsetWidth);
        }), g.value = Math.max(...E) + 32;
      });
    }, {
      immediate: !0
    }), b(() => a.value), () => {
      function E(I) {
        return I.map((t) => ["selection", "index", "expand"].includes(t.type) ? r(C, h({
          type: t.type
        }, t), {
          ...t == null ? void 0 : t.slots
        }) : r(C, h({
          "show-overflow-tooltip": !0,
          align: "left"
        }, t), {
          default: (w) => {
            var V;
            return t.children && Array.isArray(t.children) && t.children.length > 0 ? E(t.children) : l[t.prop] ? r(k, null, [(V = l[t.prop]) == null ? void 0 : V.call(l, {
              $index: w.$index,
              row: w.row
            })]) : t.formatter ? r(k, null, [t.formatter({
              $index: w.$index,
              row: w.row
            }) ?? "-"]) : r(k, null, [w.row[t.prop] ?? "-"]);
          },
          ...t == null ? void 0 : t.slots
        }));
      }
      function p() {
        return r(O, h({
          ref: a,
          stripe: !0
        }, u, {
          class: `TableGenerator el-table-${_}`
        }), {
          default: () => [E(u.tableOption), l != null && l.operation ? r(C, {
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
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(ee, {
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
var U = (n, b) => {
  let v = n.__vccOpts || n;
  for (let [l, y] of b)
    v[l] = y;
  return v;
}, xe = {
  name: "ArrowUp"
}, pe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ke = /* @__PURE__ */ F(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Ie = [
  ke
];
function Ve(n, b, v, l, y, a) {
  return m(), D("svg", pe, Ie);
}
var $e = /* @__PURE__ */ U(xe, [["render", Ve], ["__file", "arrow-up.vue"]]), Ge = {
  name: "Refresh"
}, fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ae = /* @__PURE__ */ F(
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
function Se(n, b, v, l, y, a) {
  return m(), D("svg", fe, Ce);
}
var me = /* @__PURE__ */ U(Ge, [["render", Se], ["__file", "refresh.vue"]]), De = {
  name: "Search"
}, Fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ue = /* @__PURE__ */ F(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Ye = [
  Ue
];
function Te(n, b, v, l, y, a) {
  return m(), D("svg", Fe, Ye);
}
var Me = /* @__PURE__ */ U(De, [["render", Te], ["__file", "search.vue"]]);
const Ke = /* @__PURE__ */ S({
  name: "FormGenerator",
  setup(n, {
    expose: b,
    attrs: v,
    slots: l,
    emit: y
  }) {
    const a = v, u = f(), s = {}, _ = f(!1), g = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, E = {
      submit: () => {
        u.value.validate((t) => {
          t && y("submit");
        });
      },
      cancel: (t) => {
        var w, V;
        a.onCancel ? y("cancel") : (V = (w = p(t.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : w.click) == null || V.call(w);
      },
      reset: () => {
        u.value.resetFields(), y("submit", "init");
      }
    };
    function p(t) {
      return t.parentElement.classList.value.split(" ").includes("el-dialog") ? t.parentElement : p(t.parentElement);
    }
    function I(t) {
      _.value = t, a.formOption.forEach((w, V) => {
        V > g - 2 && (w.show = t);
      });
    }
    return a.formOption.length >= g - 2 && (a == null ? void 0 : a.type) === "search" && I(!1), b(() => ({
      ...u.value,
      ...E,
      $refs: s
    })), () => {
      function t() {
        return r(ae, h({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: u
        }), {
          default: () => [a.formOption.map((e) => {
            var A;
            return r(Q, h(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [w(e)],
              ...(A = e.formItem) == null ? void 0 : A.slots
            });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(Q, {
            class: `btnItem ${_.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default && typeof (l == null ? void 0 : l.default()[0].type) == "string" ? r(k, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? V() : r(k, null, [(a == null ? void 0 : a.type) === "dialog" ? r($, {
              onClick: E.cancel
            }, {
              default: () => [G("取消")]
            }) : "", r($, {
              type: "primary",
              onClick: E.submit
            }, {
              default: () => [G("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function w(e) {
        var A, Y, T, M, N, B, j, P, R, z, q, L, W;
        switch (s[e.formItem.prop] = f(), e.type) {
          case "input":
            return r(_e, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slots
            });
          case "input-number":
            return r(ge, h({
              ref: s[e.formItem.prop],
              min: 0,
              max: 100
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
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.option.map((c) => r(ye, h(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "tree-select":
            return r(ve, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(Y = e == null ? void 0 : e.control) == null ? void 0 : Y.slots
            });
          case "cascader":
            return r(he, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(T = e == null ? void 0 : e.control) == null ? void 0 : T.slots
            });
          case "radio":
            return r(Z, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(ne, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(Z, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(se, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(X, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(te, h(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(X, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(ce, h(c, {
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
            const H = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((M = e == null ? void 0 : e.control) == null ? void 0 : M.type) || "date"];
            return r(de, h({
              ref: s[e.formItem.prop],
              clearable: !0,
              format: H,
              "value-format": H
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slots
            });
          case "time-picker":
            return r(ue, h({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(re, h({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(le, h({
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
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "slot":
            return (P = (j = e == null ? void 0 : e.control) == null ? void 0 : j.slots) != null && P.default && typeof ((z = (R = e == null ? void 0 : e.control) == null ? void 0 : R.slots) == null ? void 0 : z.default) == "function" ? r(k, null, [(L = (q = e.control.slots).default) == null ? void 0 : L.call(q, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (W = l[e.formItem.prop]) == null ? void 0 : W.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function V() {
        return r(k, null, [r($, {
          type: "primary",
          onClick: E.submit,
          icon: Me
        }, {
          default: () => [G("搜索")]
        }), r($, {
          onClick: E.reset,
          icon: me
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > g - 1 ? r(k, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${_.value ? "up" : "down"}`,
          onClick: () => {
            I(!_.value);
          },
          icon: $e
        }, {
          default: () => [_.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return t();
    };
  }
});
function Ne(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !o(n);
}
const Je = /* @__PURE__ */ S({
  name: "StepsGenerator",
  setup(n, {
    expose: b,
    attrs: v,
    slots: l,
    emit: y
  }) {
    const a = v, u = f(0);
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
    return b({
      prev: s,
      next: _
    }), () => {
      function g() {
        let E;
        return r("div", {
          class: "StepsGenerator"
        }, [r(Ee, h({
          "align-center": !0
        }, a, {
          active: u.value
        }), Ne(E = a.stepsOption.map((p) => r(we, p, {
          ...p == null ? void 0 : p.slots
        }))) ? E : {
          default: () => [E]
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
}), Be = (n, b) => n.find((v) => v.prop === b), je = (n, b, v) => {
  var y;
  const l = n.find((a) => a.formItem.prop === b);
  l && ((y = l == null ? void 0 : l.control) != null && y.option) && (l.control.option = v);
}, Pe = (n, b) => n.find((v) => v.formItem.prop === b), Re = (n, b, v, l) => {
  if (!Array.isArray(n))
    return [];
  const y = [];
  let a = [];
  return l && (a = Object.keys(l)), n.forEach((u) => {
    let s = {
      label: typeof u == "string" ? u : u[b],
      value: typeof u == "string" ? u : u[v]
    };
    l && a.forEach((_) => {
      s[_] = u[_];
    }), y.push(s);
  }), y;
}, ze = (n, b = []) => {
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
    const y = { required: !0, message: `请${v[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!b.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [y, l.formItem.rules] : Array.isArray((u = l.formItem) == null ? void 0 : u.rules) ? l.formItem.rules.unshift(y) : l.formItem.rules = [y], ((s = l.formItem) == null ? void 0 : s.rules) instanceof Array))
      for (let _ = 0; _ < l.formItem.rules.length; _++) {
        let g = l.formItem.rules[_];
        g.message || (g.message = "格式有误");
      }
  }), n;
}, Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: Pe,
  getOption: Re,
  getTableOption: Be,
  setOption: je,
  setRequired: ze
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ke as FormGenerator,
  Qe as GeneratorUtils,
  Je as StepsGenerator,
  He as TableGenerator
};
//# sourceMappingURL=index.js.map
