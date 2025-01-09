(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div:not(.el-switch){width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.TableGenerator .content-wrapper{white-space:nowrap;display:inline-block}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as U, ref as A, watch as i, nextTick as O, createVNode as r, Fragment as I, mergeProps as v, openBlock as F, createElementBlock as Y, createElementVNode as M, createApp as ue, createTextVNode as G, withDirectives as S, resolveDirective as D, isVNode as de } from "vue";
import { ElLoading as ce, ElTable as te, ElTableColumn as T, ElEmpty as se, ElForm as ne, ElFormItem as ee, ElButton as $, ElUpload as ve, ElSwitch as he, ElTimePicker as be, ElDatePicker as ye, ElCheckboxGroup as le, ElCheckboxButton as ge, ElCheckbox as _e, ElRadioGroup as ae, ElRadioButton as Ee, ElRadio as we, ElCascader as xe, ElTreeSelect as ke, ElSelectV2 as Ie, ElSelect as Ve, ElOption as pe, ElInputNumber as $e, ElInput as Ge, ElSteps as Ae, ElStep as Ce } from "element-plus";
const ll = /* @__PURE__ */ U({
  name: "TableGenerator",
  setup(n, {
    expose: b,
    attrs: h,
    slots: a,
    emit: y
  }) {
    const l = A(), u = h;
    let s;
    const _ = (/* @__PURE__ */ new Date()).getTime(), g = A("auto");
    return i(() => u.loading, (E) => {
      E ? O(() => {
        s = ce.service({
          target: `.el-table-${_}`,
          text: "加载中"
        });
      }) : s == null || s.close();
    }, {
      immediate: !0
    }), u.operationWidth ? g.value = u.operationWidth : i(() => u.data, () => {
      O(() => {
        if (!isNaN(g.value) && Array.isArray(u.data) && g.value > 32 && u.data.length === 0)
          return;
        const E = [];
        document.querySelectorAll(`.el-table-${_} .content-wrapper`).forEach((k) => {
          E.push(k.offsetWidth);
        }), g.value = Math.max(...E) + 32;
      });
    }, {
      immediate: !0
    }), b(() => l.value), () => {
      function E(V) {
        return V.map((t) => ["selection", "index", "expand"].includes(t.type) ? r(T, v({
          type: t.type
        }, t), {
          ...t == null ? void 0 : t.slots
        }) : r(T, v({
          "show-overflow-tooltip": !0,
          align: "left"
        }, t), {
          default: (w) => {
            var p;
            return t.children && Array.isArray(t.children) && t.children.length > 0 ? E(t.children) : a[t.prop] ? r(I, null, [(p = a[t.prop]) == null ? void 0 : p.call(a, {
              $index: w.$index,
              row: w.row
            })]) : t.formatter ? r(I, null, [t.formatter({
              $index: w.$index,
              row: w.row
            }) ?? "-"]) : r(I, null, [w.row[t.prop] ?? "-"]);
          },
          ...t == null ? void 0 : t.slots
        }));
      }
      function k() {
        return r(te, v({
          ref: l
        }, u, {
          class: `TableGenerator el-table-${_}`
        }), {
          default: () => [E(u.tableOption), a != null && a.operation ? r(T, {
            fixed: "right",
            label: "操作",
            width: g.value
          }, {
            default: (V) => {
              var t;
              return r("div", {
                class: "content-wrapper"
              }, [(t = a.operation) == null ? void 0 : t.call(a, {
                $index: V.$index,
                row: V.row
              })]);
            }
          }) : ""],
          empty: () => a != null && a.empty ? a == null ? void 0 : a.empty() : r(se, {
            description: "暂无数据"
          }, null),
          append: () => a != null && a.append ? a == null ? void 0 : a.append() : ""
        });
      }
      return r(I, null, [k()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var N = (n, b) => {
  let h = n.__vccOpts || n;
  for (let [a, y] of b)
    h[a] = y;
  return h;
}, Se = {
  name: "ArrowUp"
}, De = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Te = /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Ue = [
  Te
];
function Fe(n, b, h, a, y, l) {
  return F(), Y("svg", De, Ue);
}
var Ye = /* @__PURE__ */ N(Se, [["render", Fe], ["__file", "arrow-up.vue"]]), Me = {
  name: "Refresh"
}, Ne = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Be = /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), je = [
  Be
];
function Pe(n, b, h, a, y, l) {
  return F(), Y("svg", Ne, je);
}
var Re = /* @__PURE__ */ N(Me, [["render", Pe], ["__file", "refresh.vue"]]), ze = {
  name: "Search"
}, He = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, me = /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), qe = [
  me
];
function Le(n, b, h, a, y, l) {
  return F(), Y("svg", He, qe);
}
var We = /* @__PURE__ */ N(ze, [["render", Le], ["__file", "search.vue"]]);
const re = ue();
re.directive("my-directive", {
  mounted(n, b) {
    let h = null;
    n.addEventListener("click", (a) => {
      clearTimeout(h), n.style["pointer-events"] = "none", h = setTimeout(() => {
        n.style["pointer-events"] = "initial";
      }, 1e3);
    });
  }
});
const Ke = re.directive("my-directive"), al = /* @__PURE__ */ U({
  name: "FormGenerator",
  directives: {
    debounce: Ke
  },
  setup(n, {
    expose: b,
    attrs: h,
    slots: a,
    emit: y
  }) {
    const l = h, u = A(), s = {}, _ = A(!1), g = isNaN(l.column) ? 4 : l.column >= 4 ? l.column : 4, E = {
      submit: () => {
        u.value.validate((t) => {
          t && y("submit");
        });
      },
      cancel: (t) => {
        var w, p;
        l.onCancel ? y("cancel") : (p = (w = k(t.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : w.click) == null || p.call(w);
      },
      reset: () => {
        u.value.resetFields(), y("submit", "init");
      }
    };
    function k(t) {
      return t.parentElement.classList.value.split(" ").includes("el-dialog") ? t.parentElement : k(t.parentElement);
    }
    function V(t) {
      _.value = t, l.formOption.forEach((w, p) => {
        p > g - 2 && (w.show = t);
      });
    }
    return l.formOption.length >= g - 2 && (l == null ? void 0 : l.type) === "search" && V(!1), b(() => ({
      ...u.value,
      ...E,
      $refs: s
    })), () => {
      function t() {
        return r(ne, v({
          class: `FormGenerator ${(l == null ? void 0 : l.type) === "search" ? "FormGeneratorSearch" : ""} ${(l == null ? void 0 : l.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (l == null ? void 0 : l.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": l.labelWidth || "auto"
        }, l, {
          ref: u
        }), {
          default: () => [l.formOption.map((e) => {
            var C;
            return r(ee, v(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [w(e)],
              ...(C = e.formItem) == null ? void 0 : C.slots
            });
          }), l.disabled === !0 || l.noFooter || !l.onSubmit ? "" : r(ee, {
            class: `btnItem ${_.value ? "searchItem" : ""}`
          }, {
            default: () => a != null && a.default && typeof (a == null ? void 0 : a.default()[0].type) == "string" ? r(I, null, [a.default()[0].children]) : (l == null ? void 0 : l.type) === "search" ? p() : r(I, null, [(l == null ? void 0 : l.type) === "dialog" ? r($, {
              onClick: E.cancel
            }, {
              default: () => [G("取消")]
            }) : "", S(r($, {
              type: "primary",
              onClick: E.submit,
              loading: l.loading
            }, {
              default: () => [G("确定")]
            }), [[D("debounce")]])]),
            label: () => ""
          })]
        });
      }
      function w(e) {
        var C, B, j, P, R, z, H, m, q, L, W, K, J, Q, X, Z, f;
        switch (s[e.formItem.prop] = A(), e.type) {
          case "input":
            return r(Ge, v({
              ref: s[e.formItem.prop],
              clearable: !0,
              maxlength: ((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) === "textarea" ? 500 : 90
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "input-number":
            return r($e, v({
              ref: s[e.formItem.prop],
              min: 0,
              "controls-position": "right"
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), null);
          case "select":
            return r(Ve, v({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.option.map((c) => r(pe, v(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              },
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            });
          case "select-v2":
            return r(Ie, v({
              ref: s[e.formItem.prop],
              clearable: !0,
              options: (P = e == null ? void 0 : e.control) == null ? void 0 : P.option
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              ...(R = e == null ? void 0 : e.control) == null ? void 0 : R.slots
            });
          case "tree-select":
            return r(ke, v({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slots
            });
          case "cascader":
            return r(xe, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              ...(H = e == null ? void 0 : e.control) == null ? void 0 : H.slots
            });
          case "radio":
            return r(ae, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(we, v(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(ae, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.radioGroup.map((c) => r(Ee, v(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(le, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(_e, v(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(le, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, x;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (x = e == null ? void 0 : e.control) == null ? void 0 : x.checkboxGroup.map((c) => r(ge, v(c, {
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
            const o = {
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              date: "YYYY-MM-DD"
            }[((m = e == null ? void 0 : e.control) == null ? void 0 : m.type) || "date"];
            return r(ye, v({
              ref: s[e.formItem.prop],
              clearable: !0,
              format: o,
              "value-format": o
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), {
              ...(q = e == null ? void 0 : e.control) == null ? void 0 : q.slots
            });
          case "time-picker":
            return r(be, v({
              ref: s[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(he, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: l.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => l.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(ve, v({
              ref: s[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": l.model[e.formItem.prop],
              "onUpdate:file-list": (d) => l.model[e.formItem.prop] = d
            }), {
              default: () => l.disabled ? "" : r($, {
                type: "primary"
              }, {
                default: () => [G("上传文件")]
              }),
              ...(L = e == null ? void 0 : e.control) == null ? void 0 : L.slots
            });
          case "slot":
            return (K = (W = e == null ? void 0 : e.control) == null ? void 0 : W.slots) != null && K.default && typeof ((Q = (J = e == null ? void 0 : e.control) == null ? void 0 : J.slots) == null ? void 0 : Q.default) == "function" ? r(I, null, [(Z = (X = e.control.slots).default) == null ? void 0 : Z.call(X, {
              form: l.model,
              data: l.model[e.formItem.prop]
            })]) : a[e.formItem.prop] ? (f = a[e.formItem.prop]) == null ? void 0 : f.call(a, {
              form: l.model,
              data: l.model[e.formItem.prop]
            }) : l.model[e.formItem.prop];
        }
      }
      function p() {
        return r(I, null, [S(r($, {
          type: "primary",
          onClick: E.submit,
          icon: We
        }, {
          default: () => [G("搜索")]
        }), [[D("debounce")]]), S(r($, {
          onClick: E.reset,
          icon: Re
        }, {
          default: () => [G("重置")]
        }), [[D("debounce")]]), l.type === "search" && l.formOption.length > g - 1 ? r(I, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${_.value ? "up" : "down"}`,
          onClick: () => {
            V(!_.value);
          },
          icon: Ye
        }, {
          default: () => [_.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return t();
    };
  }
});
function Je(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !de(n);
}
const rl = /* @__PURE__ */ U({
  name: "StepsGenerator",
  setup(n, {
    expose: b,
    attrs: h,
    slots: a,
    emit: y
  }) {
    const l = h, u = A(0);
    function s() {
      l != null && l.onPrev && typeof (l == null ? void 0 : l.onPrev) == "function" ? l.onPrev(u.value, (g) => {
        g ? u.value = g : u.value === 0 || u.value--;
      }) : u.value === 0 || u.value--;
    }
    function _() {
      l != null && l.onNext && typeof (l == null ? void 0 : l.onNext) == "function" ? l.onNext(u.value, (g) => {
        g ? u.value = g : u.value === l.stepsOption.length - 1 || u.value++;
      }) : u.value === l.stepsOption.length - 1 || u.value++;
    }
    return b({
      prev: s,
      next: _
    }), () => {
      function g() {
        let E;
        return r("div", {
          class: "StepsGenerator"
        }, [r(Ae, v({
          "align-center": !0
        }, l, {
          active: u.value
        }), Je(E = l.stepsOption.map((k) => r(Ce, k, {
          ...k == null ? void 0 : k.slots
        }))) ? E : {
          default: () => [E]
        }), r("div", {
          class: "container"
        }, [Object.keys(a).map((k, V) => r("div", {
          style: {
            display: u.value === V ? "block" : "none"
          }
        }, [a[k]()]))]), r("div", {
          class: "btn-group"
        }, [a.default ? a.default(u.value) : r(I, null, [u.value > 0 ? r($, {
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
          default: () => [G(" "), u.value === l.stepsOption.length - 1 ? "提交" : "下一步"]
        })])])]);
      }
      return g();
    };
  }
}), Qe = (n, b) => n.find((h) => h.prop === b), Xe = (n, b, h) => {
  var y;
  const a = n.find((l) => l.formItem.prop === b);
  a && ((y = a == null ? void 0 : a.control) != null && y.option) && (a.control.option = h);
}, Ze = (n, b) => n.find((h) => h.formItem.prop === b), fe = (n, b, h, a) => {
  if (!Array.isArray(n))
    return [];
  const y = [];
  let l = [];
  return a && (l = Object.keys(a)), n.forEach((u) => {
    let s = {
      label: typeof u == "string" ? u : u[b],
      value: typeof u == "string" ? u : u[h]
    };
    a && l.forEach((_) => {
      s[_] = u[_];
    }), y.push(s);
  }), y;
}, oe = (n, b = []) => {
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
  return n.forEach((a) => {
    var l, u, s;
    const y = { required: !0, message: `请${h[a.type] ?? "完善"}${a.formItem.label ?? ""}`, trigger: "change" };
    if (!b.includes(a.formItem.prop) && (((l = a.formItem) == null ? void 0 : l.rules) instanceof Object ? a.formItem.rules = [y, a.formItem.rules] : Array.isArray((u = a.formItem) == null ? void 0 : u.rules) ? a.formItem.rules.unshift(y) : a.formItem.rules = [y], ((s = a.formItem) == null ? void 0 : s.rules) instanceof Array))
      for (let _ = 0; _ < a.formItem.rules.length; _++) {
        let g = a.formItem.rules[_];
        g.message || (g.message = "格式有误");
      }
  }), n;
}, ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: Ze,
  getOption: fe,
  getTableOption: Qe,
  setOption: Xe,
  setRequired: oe
}, Symbol.toStringTag, { value: "Module" }));
export {
  al as FormGenerator,
  ul as GeneratorUtils,
  rl as StepsGenerator,
  ll as TableGenerator
};
//# sourceMappingURL=index.js.map
