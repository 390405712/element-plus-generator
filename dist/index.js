(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as F, ref as S, watch as H, nextTick as K, createVNode as r, Fragment as V, mergeProps as s, openBlock as U, createElementBlock as Y, createElementVNode as m, createTextVNode as G, isVNode as o } from "vue";
import { ElLoading as i, ElTable as J, ElTableColumn as D, ElEmpty as O, ElForm as ee, ElFormItem as Q, ElButton as f, ElUpload as ae, ElSwitch as le, ElTimePicker as re, ElDatePicker as ue, ElCheckboxGroup as X, ElCheckboxButton as de, ElCheckbox as ce, ElRadioGroup as Z, ElRadioButton as te, ElRadio as se, ElCascader as ne, ElTreeSelect as he, ElSelect as ve, ElOption as be, ElInputNumber as ye, ElInput as ge, ElSteps as _e, ElStep as we } from "element-plus";
const qe = /* @__PURE__ */ F({
  name: "TableGenerator",
  setup(n, {
    expose: x,
    attrs: b,
    slots: l,
    emit: y
  }) {
    const a = S(), d = b;
    let t, h = (/* @__PURE__ */ new Date()).getTime(), v = S(!1), k = S(0);
    return H(() => d.loading, (g) => {
      g ? K(() => {
        t = i.service({
          target: `.el-table-${h}`
        });
      }) : t == null || t.close();
    }, {
      immediate: !0
    }), H(() => d.data, (g) => {
      if (!(l != null && l.operation) || g.length === 0)
        return v.value = !0;
      v.value = !1, K(() => {
        let _ = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((I) => {
          I.offsetWidth > _ && (_ = I.offsetWidth);
        }), k.value = _ > 0 ? _ + 32 : "auto", v.value = !0;
      });
    }, {
      immediate: !0
    }), x(() => a.value), () => {
      function g(p) {
        return p.map((e) => ["selection", "index", "expand"].includes(e.type) ? r(D, s({
          type: e.type
        }, e), {
          ...e == null ? void 0 : e.slots
        }) : r(D, s({
          "show-overflow-tooltip": !0,
          align: "left"
        }, e), {
          default: (w) => {
            var $;
            return e.children && Array.isArray(e.children) && e.children.length > 0 ? g(e.children) : l[e.prop] ? r(V, null, [($ = l[e.prop]) == null ? void 0 : $.call(l, {
              $index: w.$index,
              row: w.row
            })]) : e.formatter ? r(V, null, [e.formatter({
              $index: w.$index,
              row: w.row
            }) ?? "-"]) : r(V, null, [w.row[e.prop] ?? "-"]);
          },
          ...e == null ? void 0 : e.slots
        }));
      }
      function _() {
        return r(J, s({
          ref: a,
          stripe: !0
        }, d, {
          class: `TableGenerator el-table-${h}`
        }), {
          default: () => [g(d.tableOption), l != null && l.operation ? r(D, {
            fixed: "right",
            label: "操作",
            width: k.value
          }, {
            default: (p) => {
              var e;
              return r("div", {
                class: "content-wrapper"
              }, [(e = l.operation) == null ? void 0 : e.call(l, {
                $index: p.$index,
                row: p.row
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
        return r(J, s(b, {
          class: `TableGenerator el-table-${h}`
        }), {
          default: () => [r(D, {
            fixed: "right"
          }, {
            default: (p) => {
              var e;
              return r("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(e = l.operation) == null ? void 0 : e.call(l, {
                $index: p.$index,
                row: p.row
              })]);
            }
          })]
        });
      }
      return r(V, null, [v.value ? _() : I()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var T = (n, x) => {
  let b = n.__vccOpts || n;
  for (let [l, y] of x)
    b[l] = y;
  return b;
}, xe = {
  name: "ArrowUp"
}, Ee = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ke = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), pe = [
  ke
];
function $e(n, x, b, l, y, a) {
  return U(), Y("svg", Ee, pe);
}
var Ve = /* @__PURE__ */ T(xe, [["render", $e], ["__file", "arrow-up.vue"]]), Ie = {
  name: "Refresh"
}, fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ge = /* @__PURE__ */ m(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), Se = [
  Ge
];
function Ce(n, x, b, l, y, a) {
  return U(), Y("svg", fe, Se);
}
var Ae = /* @__PURE__ */ T(Ie, [["render", Ce], ["__file", "refresh.vue"]]), De = {
  name: "Search"
}, Fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ue = /* @__PURE__ */ m(
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
function me(n, x, b, l, y, a) {
  return U(), Y("svg", Fe, Ye);
}
var Te = /* @__PURE__ */ T(De, [["render", me], ["__file", "search.vue"]]);
function je(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !o(n);
}
const Le = /* @__PURE__ */ F({
  name: "FormGenerator",
  setup(n, {
    expose: x,
    attrs: b,
    slots: l,
    emit: y
  }) {
    const a = b, d = S(), t = {}, h = S(!1), v = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, k = {
      submit: () => {
        d.value.validate((_) => {
          _ && y("submit");
        });
      },
      reset: () => {
        d.value.resetFields(), y("submit", "init");
      }
    };
    function g(_) {
      h.value = _, a.formOption.forEach((I, p) => {
        p > v - 2 && (I.show = _);
      });
    }
    return a.formOption.length >= v - 2 && (a == null ? void 0 : a.type) === "search" && g(!1), x(() => ({
      ...d.value,
      ...k,
      $refs: t
    })), () => {
      function _() {
        return r(ee, s({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: d
        }), {
          default: () => [a.formOption.map((e) => {
            let w;
            if (!(e.hasOwnProperty("show") && e.show === !1))
              return r(Q, s(e.formItem, {
                key: e.formItem.prop
              }), je(w = I(e)) ? w : {
                default: () => [w]
              });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(Q, {
            class: `btnItem ${h.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default ? r(V, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? p() : r(V, null, [(a == null ? void 0 : a.type) === "dialog" ? r(f, {
              onClick: (e) => {
                var $, A;
                function w(C) {
                  return C.parentElement.classList.value.split(" ").includes("el-dialog") ? C.parentElement : w(C.parentElement);
                }
                (A = ($ = w(e.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : $.click) == null || A.call($);
              }
            }, {
              default: () => [G("取消")]
            }) : "", r(f, {
              type: "primary",
              onClick: k.submit
            }, {
              default: () => [G("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function I(e) {
        var w, $, A, C, j, M, B, N, P, R, z, q, L;
        switch (t[e.formItem.prop] = S(), e.type) {
          case "input":
            return r(ge, s({
              ref: t[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(w = e == null ? void 0 : e.control) == null ? void 0 : w.slots
            });
          case "input-number":
            return r(ye, s({
              ref: t[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), null);
          case "select":
            return r(ve, s({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, E;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.option) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.option.map((c) => r(be, s(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "tree-select":
            return r(he, s({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...($ = e == null ? void 0 : e.control) == null ? void 0 : $.slots
            });
          case "cascader":
            return r(ne, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slots
            });
          case "radio":
            return r(Z, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, E;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.radioGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.radioGroup.map((c) => r(se, s(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(Z, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, E;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.radioGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.radioGroup.map((c) => r(te, s(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(X, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, E;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.checkboxGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.checkboxGroup.map((c) => r(ce, s(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(X, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => {
                var u, E;
                return [((u = e == null ? void 0 : e.control) == null ? void 0 : u.checkboxGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.checkboxGroup.map((c) => r(de, s(c, {
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
            const W = {
              datetimerange: "YYYY-MM-DD hh:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD hh:mm:ss",
              date: "YYYY-MM-DD"
            }[((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) || "date"];
            return r(ue, s({
              ref: t[e.formItem.prop],
              clearable: !0,
              format: W,
              "value-format": W
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), {
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            });
          case "time-picker":
            return r(re, s({
              ref: t[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), null);
          case "switch":
            return r(le, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (u) => a.model[e.formItem.prop] = u
            }), null);
          case "upload":
            return r(ae, s({
              ref: t[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (u) => a.model[e.formItem.prop] = u
            }), {
              default: () => a.disabled ? "" : r(f, {
                type: "primary"
              }, {
                default: () => [G("上传文件")]
              }),
              ...(M = e == null ? void 0 : e.control) == null ? void 0 : M.slots
            });
          case "slot":
            return (N = (B = e == null ? void 0 : e.control) == null ? void 0 : B.slots) != null && N.default && typeof ((R = (P = e == null ? void 0 : e.control) == null ? void 0 : P.slots) == null ? void 0 : R.default) == "function" ? r(V, null, [(q = (z = e.control.slots).default) == null ? void 0 : q.call(z, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (L = l[e.formItem.prop]) == null ? void 0 : L.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function p() {
        return r(V, null, [r(f, {
          type: "primary",
          onClick: k.submit,
          icon: Te
        }, {
          default: () => [G("搜索")]
        }), r(f, {
          onClick: k.reset,
          icon: Ae
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > v - 1 ? r(V, null, [r(f, {
          text: !0,
          type: "primary",
          class: `expandBtn ${h.value ? "up" : "down"}`,
          onClick: () => {
            g(!h.value);
          },
          icon: Ve
        }, {
          default: () => [h.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return _();
    };
  }
});
function Me(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !o(n);
}
const We = /* @__PURE__ */ F({
  name: "StepsGenerator",
  setup(n, {
    expose: x,
    attrs: b,
    slots: l,
    emit: y
  }) {
    const a = b, d = S(0);
    function t() {
      a != null && a.onPrev && typeof (a == null ? void 0 : a.onPrev) == "function" ? a.onPrev(d.value, (v) => {
        v ? d.value = v : d.value === 0 || d.value--;
      }) : d.value === 0 || d.value--;
    }
    function h() {
      a != null && a.onNext && typeof (a == null ? void 0 : a.onNext) == "function" ? a.onNext(d.value, (v) => {
        v ? d.value = v : d.value === a.stepsOption.length - 1 || d.value++;
      }) : d.value === a.stepsOption.length - 1 || d.value++;
    }
    return x({
      prev: t,
      next: h
    }), () => {
      function v() {
        let k;
        return r("div", {
          class: "StepsGenerator"
        }, [r(_e, s({
          "align-center": !0
        }, a, {
          active: d.value
        }), Me(k = a.stepsOption.map((g) => r(we, g, {
          ...g == null ? void 0 : g.slots
        }))) ? k : {
          default: () => [k]
        }), r("div", {
          class: "container"
        }, [Object.keys(l).map((g, _) => r("div", {
          style: {
            display: d.value === _ ? "block" : "none"
          }
        }, [l[g]()]))]), r("div", {
          class: "btn-group"
        }, [l.default ? l.default()[0].children : r(V, null, [d.value > 0 ? r(f, {
          type: "primary",
          plain: !0,
          onClick: t
        }, {
          default: () => [G("上一步")]
        }) : "", r(f, {
          type: "primary",
          plain: !0,
          onClick: h
        }, {
          default: () => [G(" "), d.value === a.stepsOption.length - 1 ? "提交" : "下一步"]
        })])])]);
      }
      return v();
    };
  }
}), Be = (n, x, b, l) => {
  if (!Array.isArray(n))
    return [];
  const y = [];
  let a = [];
  return l && (a = Object.keys(l)), n.forEach((d) => {
    let t = {
      label: typeof d == "string" ? d : d[x],
      value: typeof d == "string" ? d : d[b]
    };
    l && a.forEach((h) => {
      t[h] = d[h];
    }), y.push(t);
  }), y;
}, Ne = (n, x = []) => {
  const b = {
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
    var a, d, t;
    const y = { required: !0, message: `请${b[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!x.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [y, l.formItem.rules] : Array.isArray((d = l.formItem) == null ? void 0 : d.rules) ? l.formItem.rules.unshift(y) : l.formItem.rules = [y], ((t = l.formItem) == null ? void 0 : t.rules) instanceof Array))
      for (let h = 0; h < l.formItem.rules.length; h++) {
        let v = l.formItem.rules[h];
        v.message || (v.message = "格式有误");
      }
  }), n;
}, He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: Be,
  setRequired: Ne
}, Symbol.toStringTag, { value: "Module" }));
export {
  Le as FormGenerator,
  He as GeneratorUtils,
  We as StepsGenerator,
  qe as TableGenerator
};
//# sourceMappingURL=index.js.map
