(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div:not(.el-switch){width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.TableGenerator .content-wrapper{white-space:nowrap;display:inline-block}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as F, ref as A, watch as Z, nextTick as o, createVNode as r, Fragment as p, mergeProps as v, openBlock as U, createElementBlock as Y, createElementVNode as f, createApp as le, createTextVNode as G, withDirectives as S, resolveDirective as D, isVNode as re } from "vue";
import { ElLoading as ue, ElTable as de, ElTableColumn as T, ElEmpty as ce, ElForm as te, ElFormItem as i, ElButton as $, ElUpload as se, ElSwitch as ne, ElTimePicker as he, ElDatePicker as ve, ElCheckboxGroup as O, ElCheckboxButton as be, ElCheckbox as ye, ElRadioGroup as ee, ElRadioButton as ge, ElRadio as _e, ElCascader as Ee, ElTreeSelect as we, ElSelect as xe, ElOption as ke, ElInputNumber as pe, ElInput as Ie, ElSteps as Ve, ElStep as $e } from "element-plus";
const ie = /* @__PURE__ */ F({
  name: "TableGenerator",
  setup(n, {
    expose: b,
    attrs: h,
    slots: l,
    emit: y
  }) {
    const a = A(), u = h;
    let s;
    const _ = (/* @__PURE__ */ new Date()).getTime(), g = A("auto");
    return Z(() => u.loading, (E) => {
      E ? o(() => {
        s = ue.service({
          target: `.el-table-${_}`,
          text: "加载中"
        });
      }) : s == null || s.close();
    }, {
      immediate: !0
    }), u.operationWidth ? g.value = u.operationWidth : Z(() => u.data, () => {
      o(() => {
        if (!isNaN(g.value) && Array.isArray(u.data) && g.value > 32 && u.data.length === 0)
          return;
        const E = [];
        document.querySelectorAll(`.el-table-${_} .content-wrapper`).forEach((k) => {
          E.push(k.offsetWidth);
        }), g.value = Math.max(...E) + 32;
      });
    }, {
      immediate: !0
    }), b(() => a.value), () => {
      function E(I) {
        return I.map((t) => ["selection", "index", "expand"].includes(t.type) ? r(T, v({
          type: t.type
        }, t), {
          ...t == null ? void 0 : t.slots
        }) : r(T, v({
          "show-overflow-tooltip": !0,
          align: "left"
        }, t), {
          default: (w) => {
            var V;
            return t.children && Array.isArray(t.children) && t.children.length > 0 ? E(t.children) : l[t.prop] ? r(p, null, [(V = l[t.prop]) == null ? void 0 : V.call(l, {
              $index: w.$index,
              row: w.row
            })]) : t.formatter ? r(p, null, [t.formatter({
              $index: w.$index,
              row: w.row
            }) ?? "-"]) : r(p, null, [w.row[t.prop] ?? "-"]);
          },
          ...t == null ? void 0 : t.slots
        }));
      }
      function k() {
        return r(de, v({
          ref: a
        }, u, {
          class: `TableGenerator el-table-${_}`
        }), {
          default: () => [E(u.tableOption), l != null && l.operation ? r(T, {
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
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(ce, {
            description: "暂无数据"
          }, null),
          append: () => l != null && l.append ? l == null ? void 0 : l.append() : ""
        });
      }
      return r(p, null, [k()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var m = (n, b) => {
  let h = n.__vccOpts || n;
  for (let [l, y] of b)
    h[l] = y;
  return h;
}, Ge = {
  name: "ArrowUp"
}, Ae = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ce = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Se = [
  Ce
];
function De(n, b, h, l, y, a) {
  return U(), Y("svg", Ae, Se);
}
var Te = /* @__PURE__ */ m(Ge, [["render", De], ["__file", "arrow-up.vue"]]), Fe = {
  name: "Refresh"
}, Ue = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ye = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), fe = [
  Ye
];
function me(n, b, h, l, y, a) {
  return U(), Y("svg", Ue, fe);
}
var Me = /* @__PURE__ */ m(Fe, [["render", me], ["__file", "refresh.vue"]]), Ne = {
  name: "Search"
}, Be = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, je = /* @__PURE__ */ f(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Pe = [
  je
];
function Re(n, b, h, l, y, a) {
  return U(), Y("svg", Be, Pe);
}
var ze = /* @__PURE__ */ m(Ne, [["render", Re], ["__file", "search.vue"]]);
const ae = le();
ae.directive("my-directive", {
  mounted(n, b) {
    let h = null;
    n.addEventListener("click", (l) => {
      clearTimeout(h), n.style["pointer-events"] = "none", h = setTimeout(() => {
        n.style["pointer-events"] = "initial";
      }, 1e3);
    });
  }
});
const He = ae.directive("my-directive"), Oe = /* @__PURE__ */ F({
  name: "FormGenerator",
  directives: {
    debounce: He
  },
  setup(n, {
    expose: b,
    attrs: h,
    slots: l,
    emit: y
  }) {
    const a = h, u = A(), s = {}, _ = A(!1), g = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, E = {
      submit: () => {
        u.value.validate((t) => {
          t && y("submit");
        });
      },
      cancel: (t) => {
        var w, V;
        a.onCancel ? y("cancel") : (V = (w = k(t.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : w.click) == null || V.call(w);
      },
      reset: () => {
        u.value.resetFields(), y("submit", "init");
      }
    };
    function k(t) {
      return t.parentElement.classList.value.split(" ").includes("el-dialog") ? t.parentElement : k(t.parentElement);
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
        return r(te, v({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: u
        }), {
          default: () => [a.formOption.map((e) => {
            var C;
            return r(i, v(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [w(e)],
              ...(C = e.formItem) == null ? void 0 : C.slots
            });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(i, {
            class: `btnItem ${_.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default && typeof (l == null ? void 0 : l.default()[0].type) == "string" ? r(p, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? V() : r(p, null, [(a == null ? void 0 : a.type) === "dialog" ? r($, {
              onClick: E.cancel
            }, {
              default: () => [G("取消")]
            }) : "", S(r($, {
              type: "primary",
              onClick: E.submit,
              loading: a.loading
            }, {
              default: () => [G("确定")]
            }), [[D("debounce")]])]),
            label: () => ""
          })]
        });
      }
      function w(e) {
        var C, M, N, B, j, P, R, z, H, q, L, W, K, J, Q;
        switch (s[e.formItem.prop] = A(), e.type) {
          case "input":
            return r(Ie, v({
              ref: s[e.formItem.prop],
              clearable: !0,
              maxlength: ((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) === "textarea" ? 500 : 90
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(M = e == null ? void 0 : e.control) == null ? void 0 : M.slots
            });
          case "input-number":
            return r(pe, v({
              ref: s[e.formItem.prop],
              min: 0,
              "controls-position": "right"
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "select":
            return r(xe, v({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.option.map((c) => r(ke, v(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              },
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slots
            });
          case "tree-select":
            return r(we, v({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "cascader":
            return r(Ee, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            });
          case "radio":
            return r(ee, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(_e, v(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(ee, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(ge, v(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(O, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(ye, v(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(O, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(be, v(c, {
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
            const X = {
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              date: "YYYY-MM-DD"
            }[((P = e == null ? void 0 : e.control) == null ? void 0 : P.type) || "date"];
            return r(ve, v({
              ref: s[e.formItem.prop],
              clearable: !0,
              format: X,
              "value-format": X
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(R = e == null ? void 0 : e.control) == null ? void 0 : R.slots
            });
          case "time-picker":
            return r(he, v({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(ne, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(se, v({
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
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slots
            });
          case "slot":
            return (q = (H = e == null ? void 0 : e.control) == null ? void 0 : H.slots) != null && q.default && typeof ((W = (L = e == null ? void 0 : e.control) == null ? void 0 : L.slots) == null ? void 0 : W.default) == "function" ? r(p, null, [(J = (K = e.control.slots).default) == null ? void 0 : J.call(K, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (Q = l[e.formItem.prop]) == null ? void 0 : Q.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function V() {
        return r(p, null, [S(r($, {
          type: "primary",
          onClick: E.submit,
          icon: ze
        }, {
          default: () => [G("搜索")]
        }), [[D("debounce")]]), S(r($, {
          onClick: E.reset,
          icon: Me
        }, {
          default: () => [G("重置")]
        }), [[D("debounce")]]), a.type === "search" && a.formOption.length > g - 1 ? r(p, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${_.value ? "up" : "down"}`,
          onClick: () => {
            I(!_.value);
          },
          icon: Te
        }, {
          default: () => [_.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return t();
    };
  }
});
function qe(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !re(n);
}
const ea = /* @__PURE__ */ F({
  name: "StepsGenerator",
  setup(n, {
    expose: b,
    attrs: h,
    slots: l,
    emit: y
  }) {
    const a = h, u = A(0);
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
        }, [r(Ve, v({
          "align-center": !0
        }, a, {
          active: u.value
        }), qe(E = a.stepsOption.map((k) => r($e, k, {
          ...k == null ? void 0 : k.slots
        }))) ? E : {
          default: () => [E]
        }), r("div", {
          class: "container"
        }, [Object.keys(l).map((k, I) => r("div", {
          style: {
            display: u.value === I ? "block" : "none"
          }
        }, [l[k]()]))]), r("div", {
          class: "btn-group"
        }, [l.default ? l.default(u.value) : r(p, null, [u.value > 0 ? r($, {
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
}), Le = (n, b) => n.find((h) => h.prop === b), We = (n, b, h) => {
  var y;
  const l = n.find((a) => a.formItem.prop === b);
  l && ((y = l == null ? void 0 : l.control) != null && y.option) && (l.control.option = h);
}, Ke = (n, b) => n.find((h) => h.formItem.prop === b), Je = (n, b, h, l) => {
  if (!Array.isArray(n))
    return [];
  const y = [];
  let a = [];
  return l && (a = Object.keys(l)), n.forEach((u) => {
    let s = {
      label: typeof u == "string" ? u : u[b],
      value: typeof u == "string" ? u : u[h]
    };
    l && a.forEach((_) => {
      s[_] = u[_];
    }), y.push(s);
  }), y;
}, Qe = (n, b = []) => {
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
  return n.forEach((l) => {
    var a, u, s;
    const y = { required: !0, message: `请${h[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!b.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [y, l.formItem.rules] : Array.isArray((u = l.formItem) == null ? void 0 : u.rules) ? l.formItem.rules.unshift(y) : l.formItem.rules = [y], ((s = l.formItem) == null ? void 0 : s.rules) instanceof Array))
      for (let _ = 0; _ < l.formItem.rules.length; _++) {
        let g = l.formItem.rules[_];
        g.message || (g.message = "格式有误");
      }
  }), n;
}, aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: Ke,
  getOption: Je,
  getTableOption: Le,
  setOption: We,
  setRequired: Qe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Oe as FormGenerator,
  aa as GeneratorUtils,
  ea as StepsGenerator,
  ie as TableGenerator
};
//# sourceMappingURL=index.js.map
