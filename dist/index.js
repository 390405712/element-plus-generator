(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as D, ref as A, watch as H, nextTick as K, createVNode as r, Fragment as I, mergeProps as n, openBlock as F, createElementBlock as T, createElementVNode as U, createTextVNode as G, isVNode as o } from "vue";
import { ElLoading as i, ElTable as J, ElTableColumn as m, ElEmpty as O, ElForm as ee, ElFormItem as Q, ElButton as $, ElUpload as ae, ElSwitch as le, ElTimePicker as re, ElDatePicker as ue, ElCheckboxGroup as X, ElCheckboxButton as de, ElCheckbox as ce, ElRadioGroup as Z, ElRadioButton as te, ElRadio as ne, ElCascader as se, ElTreeSelect as he, ElSelect as ve, ElOption as be, ElInputNumber as ye, ElInput as ge, ElSteps as _e, ElStep as we } from "element-plus";
const Le = /* @__PURE__ */ D({
  name: "TableGenerator",
  setup(s, {
    expose: v,
    attrs: h,
    slots: l,
    emit: y
  }) {
    const a = A(), u = h;
    let t, g = (/* @__PURE__ */ new Date()).getTime(), b = A(!1), E = A(0);
    return H(() => u.loading, (_) => {
      _ ? K(() => {
        t = i.service({
          target: `.el-table-${g}`
        });
      }) : t == null || t.close();
    }, {
      immediate: !0
    }), u.operationWidth ? (E.value = u.operationWidth, b.value = !0) : H(() => u.data, (_) => {
      if (!(l != null && l.operation) || Array.isArray(_) && _.length === 0)
        return b.value = !0;
      b.value = !1, K(() => {
        let w = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((V) => {
          V.offsetWidth > w && (w = V.offsetWidth);
        }), E.value = w > 0 ? w + 32 : "auto", b.value = !0;
      });
    }, {
      immediate: !0
    }), v(() => a.value), () => {
      function _(k) {
        return k.map((e) => ["selection", "index", "expand"].includes(e.type) ? r(m, n({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slots
        }) : r(m, n({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (p) => {
            var f;
            return e.children && Array.isArray(e.children) && e.children.length > 0 ? _(e.children) : l[e.prop] ? r(I, null, [(f = l[e.prop]) == null ? void 0 : f.call(l, {
              $index: p.$index,
              row: p.row
            })]) : e.formatter ? r(I, null, [e.formatter({
              $index: p.$index,
              row: p.row
            }) ?? "-"]) : r(I, null, [p.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slots
        }));
      }
      function w() {
        return r(J, n({
          ref: a,
          stripe: !0
        }, u, {
          class: `TableGenerator el-table-${g}`
        }), {
          default: () => [_(u.tableOption), l != null && l.operation ? r(m, {
            fixed: "right",
            label: "操作",
            width: E.value
          }, {
            default: (k) => {
              var e;
              return r("div", {
                class: "content-wrapper"
              }, [(e = l.operation) == null ? void 0 : e.call(l, {
                $index: k.$index,
                row: k.row
              })]);
            }
          }) : ""],
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(O, {
            description: "暂无数据"
          }, null),
          append: () => l != null && l.append ? l == null ? void 0 : l.append() : ""
        });
      }
      function V() {
        return r(J, n(h, {
          class: `TableGenerator el-table-${g}`
        }), {
          default: () => [r(m, {
            fixed: "right"
          }, {
            default: (k) => {
              var e;
              return r("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = l.operation) == null ? void 0 : e.call(l, {
                $index: k.$index,
                row: k.row
              })]);
            }
          })]
        });
      }
      return r(I, null, [b.value ? w() : V()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var Y = (s, v) => {
  let h = s.__vccOpts || s;
  for (let [l, y] of v)
    h[l] = y;
  return h;
}, pe = {
  name: "ArrowUp"
}, xe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ee = /* @__PURE__ */ U(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), ke = [
  Ee
];
function fe(s, v, h, l, y, a) {
  return F(), T("svg", xe, ke);
}
var Ie = /* @__PURE__ */ Y(pe, [["render", fe], ["__file", "arrow-up.vue"]]), Ve = {
  name: "Refresh"
}, $e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ge = /* @__PURE__ */ U(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), Ae = [
  Ge
];
function Ce(s, v, h, l, y, a) {
  return F(), T("svg", $e, Ae);
}
var Se = /* @__PURE__ */ Y(Ve, [["render", Ce], ["__file", "refresh.vue"]]), me = {
  name: "Search"
}, De = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fe = /* @__PURE__ */ U(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Te = [
  Fe
];
function Ue(s, v, h, l, y, a) {
  return F(), T("svg", De, Te);
}
var Ye = /* @__PURE__ */ Y(me, [["render", Ue], ["__file", "search.vue"]]);
const He = /* @__PURE__ */ D({
  name: "FormGenerator",
  setup(s, {
    expose: v,
    attrs: h,
    slots: l,
    emit: y
  }) {
    const a = h, u = A(), t = {}, g = A(!1), b = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, E = {
      submit: () => {
        u.value.validate((w) => {
          w && y("submit");
        });
      },
      reset: () => {
        u.value.resetFields(), y("submit", "init");
      }
    };
    function _(w) {
      g.value = w, a.formOption.forEach((V, k) => {
        k > b - 2 && (V.show = w);
      });
    }
    return a.formOption.length >= b - 2 && (a == null ? void 0 : a.type) === "search" && _(!1), v(() => ({
      ...u.value,
      ...E,
      $refs: t
    })), () => {
      function w() {
        return r(ee, n({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: u
        }), {
          default: () => [a.formOption.map((e) => {
            var p;
            return r(Q, n(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [V(e)],
              ...(p = e.formItem) == null ? void 0 : p.slots
            });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(Q, {
            class: `btnItem ${g.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default && typeof (l == null ? void 0 : l.default()[0].type) == "string" ? r(I, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? k() : r(I, null, [(a == null ? void 0 : a.type) === "dialog" ? r($, {
              onClick: (e) => {
                var f, S;
                function p(C) {
                  return C.parentElement.classList.value.split(" ").includes("el-dialog") ? C.parentElement : p(C.parentElement);
                }
                (S = (f = p(e.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : f.click) == null || S.call(f);
              }
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
      function V(e) {
        var p, f, S, C, M, B, N, j, P, R, z, q, W;
        switch (t[e.formItem.prop] = A(), e.type) {
          case "input":
            return r(ge, n({
              ref: t[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(p = e == null ? void 0 : e.control) == null ? void 0 : p.slots
            });
          case "input-number":
            return r(ye, n({
              ref: t[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "select":
            return r(ve, n({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.option.map((c) => r(be, n(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "tree-select":
            return r(he, n({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(f = e == null ? void 0 : e.control) == null ? void 0 : f.slots
            });
          case "cascader":
            return r(se, n({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(S = e == null ? void 0 : e.control) == null ? void 0 : S.slots
            });
          case "radio":
            return r(Z, n({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(ne, n(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(Z, n({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(te, n(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(X, n({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(ce, n(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(X, n({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(de, n(c, {
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
            const L = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) || "date"];
            return r(ue, n({
              ref: t[e.formItem.prop],
              clearable: !0,
              format: L,
              "value-format": L
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(M = e == null ? void 0 : e.control) == null ? void 0 : M.slots
            });
          case "time-picker":
            return r(re, n({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(le, n({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(ae, n({
              ref: t[e.formItem.prop]
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
            return (j = (N = e == null ? void 0 : e.control) == null ? void 0 : N.slots) != null && j.default && typeof ((R = (P = e == null ? void 0 : e.control) == null ? void 0 : P.slots) == null ? void 0 : R.default) == "function" ? r(I, null, [(q = (z = e.control.slots).default) == null ? void 0 : q.call(z, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (W = l[e.formItem.prop]) == null ? void 0 : W.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function k() {
        return r(I, null, [r($, {
          type: "primary",
          onClick: E.submit,
          icon: Ye
        }, {
          default: () => [G("搜索")]
        }), r($, {
          onClick: E.reset,
          icon: Se
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > b - 1 ? r(I, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${g.value ? "up" : "down"}`,
          onClick: () => {
            _(!g.value);
          },
          icon: Ie
        }, {
          default: () => [g.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return w();
    };
  }
});
function Me(s) {
  return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !o(s);
}
const Ke = /* @__PURE__ */ D({
  name: "StepsGenerator",
  setup(s, {
    expose: v,
    attrs: h,
    slots: l,
    emit: y
  }) {
    const a = h, u = A(0);
    function t() {
      a != null && a.onPrev && typeof (a == null ? void 0 : a.onPrev) == "function" ? a.onPrev(u.value, (b) => {
        b ? u.value = b : u.value === 0 || u.value--;
      }) : u.value === 0 || u.value--;
    }
    function g() {
      a != null && a.onNext && typeof (a == null ? void 0 : a.onNext) == "function" ? a.onNext(u.value, (b) => {
        b ? u.value = b : u.value === a.stepsOption.length - 1 || u.value++;
      }) : u.value === a.stepsOption.length - 1 || u.value++;
    }
    return v({
      prev: t,
      next: g
    }), () => {
      function b() {
        let E;
        return r("div", {
          class: "StepsGenerator"
        }, [r(_e, n({
          "align-center": !0
        }, a, {
          active: u.value
        }), Me(E = a.stepsOption.map((_) => r(we, _, {
          ..._ == null ? void 0 : _.slots
        }))) ? E : {
          default: () => [E]
        }), r("div", {
          class: "container"
        }, [Object.keys(l).map((_, w) => r("div", {
          style: {
            display: u.value === w ? "block" : "none"
          }
        }, [l[_]()]))]), r("div", {
          class: "btn-group"
        }, [l.default ? l.default(u.value) : r(I, null, [u.value > 0 ? r($, {
          type: "primary",
          plain: !0,
          onClick: t
        }, {
          default: () => [G("上一步")]
        }) : "", r($, {
          type: "primary",
          plain: !0,
          onClick: g
        }, {
          default: () => [G(" "), u.value === a.stepsOption.length - 1 ? "提交" : "下一步"]
        })])])]);
      }
      return b();
    };
  }
}), Be = (s, v) => s.find((h) => h.prop === v), Ne = (s, v, h) => {
  var y;
  const l = s.find((a) => a.formItem.prop === v);
  l && ((y = l == null ? void 0 : l.control) != null && y.option) && (l.control.option = h);
}, je = (s, v) => s.find((h) => h.formItem.prop === v), Pe = (s, v, h, l) => {
  if (!Array.isArray(s))
    return [];
  const y = [];
  let a = [];
  return l && (a = Object.keys(l)), s.forEach((u) => {
    let t = {
      label: typeof u == "string" ? u : u[v],
      value: typeof u == "string" ? u : u[h]
    };
    l && a.forEach((g) => {
      t[g] = u[g];
    }), y.push(t);
  }), y;
}, Re = (s, v = []) => {
  const h = {
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
  return s.forEach((l) => {
    var a, u, t;
    const y = { required: !0, message: `请${h[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!v.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [y, l.formItem.rules] : Array.isArray((u = l.formItem) == null ? void 0 : u.rules) ? l.formItem.rules.unshift(y) : l.formItem.rules = [y], ((t = l.formItem) == null ? void 0 : t.rules) instanceof Array))
      for (let g = 0; g < l.formItem.rules.length; g++) {
        let b = l.formItem.rules[g];
        b.message || (b.message = "格式有误");
      }
  }), s;
}, Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: je,
  getOption: Pe,
  getTableOption: Be,
  setOption: Ne,
  setRequired: Re
}, Symbol.toStringTag, { value: "Module" }));
export {
  He as FormGenerator,
  Je as GeneratorUtils,
  Ke as StepsGenerator,
  Le as TableGenerator
};
//# sourceMappingURL=index.js.map
