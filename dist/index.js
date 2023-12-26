(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".FormGenerator.FormGeneratorSearch{display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;flex-direction:row;gap:15px 10px}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item{width:calc(25% - 8px);margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem{margin:0}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__label-wrap{display:none}.FormGenerator.FormGeneratorSearch.el-form--inline .el-form-item.btnItem .el-form-item__content{flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline){padding-bottom:45px}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem{margin:0;height:64px;position:absolute;bottom:0;right:0;width:100%;box-shadow:1px 2px 10px #9ab7ff80;z-index:1;z-index:11;padding:0 16px;box-sizing:border-box}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .btnItem .el-form-item__content{display:flex;justify-content:flex-end;align-items:center;flex-wrap:nowrap}.FormGenerator.FormGeneratorDialog.el-form--default:not(.el-form--inline) .el-form-item__content>div{width:100%}.FormGenerator .searchItem{flex-grow:1;flex-shrink:0}.FormGenerator .searchItem .el-form-item__content{justify-content:flex-end}.FormGenerator .expandBtn i{transition:all .3s}.FormGenerator .expandBtn.down i{transform:rotate(180deg)}.FormGenerator .el-select,.FormGenerator .el-input,.FormGenerator .el-cascader,.FormGenerator .el-date-editor.el-input,.FormGenerator .el-date-editor.el-input__wrapper,.TableGenerator .el-scrollbar__view{width:100%}.StepsGenerator{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;gap:10px}.StepsGenerator .btn-group{width:100%;display:flex;justify-content:center;gap:10px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as S, ref as A, watch as K, nextTick as J, createVNode as r, Fragment as I, mergeProps as s, openBlock as m, createElementBlock as D, createElementVNode as F, createTextVNode as G, isVNode as i } from "vue";
import { ElLoading as O, ElTable as Q, ElTableColumn as C, ElEmpty as ee, ElForm as ae, ElFormItem as X, ElButton as $, ElUpload as le, ElSwitch as re, ElTimePicker as ue, ElDatePicker as de, ElCheckboxGroup as Z, ElCheckboxButton as ce, ElCheckbox as te, ElRadioGroup as o, ElRadioButton as ne, ElRadio as se, ElCascader as he, ElTreeSelect as ve, ElSelect as be, ElOption as ye, ElInputNumber as ge, ElInput as _e, ElSteps as we, ElStep as pe } from "element-plus";
const He = /* @__PURE__ */ S({
  name: "TableGenerator",
  setup(h, {
    expose: b,
    attrs: v,
    slots: l,
    emit: y
  }) {
    const a = A(), u = v;
    let n, _ = (/* @__PURE__ */ new Date()).getTime(), g = A(!1), k = A(0);
    return K(() => u.loading, (w) => {
      w ? J(() => {
        n = O.service({
          target: `.el-table-${_}`
        });
      }) : n == null || n.close();
    }, {
      immediate: !0
    }), u.operationWidth ? (k.value = u.operationWidth, g.value = !0) : K(() => u.data, (w) => {
      if (!(l != null && l.operation) || Array.isArray(w) && w.length === 0)
        return g.value = !0;
      g.value = !1, J(() => {
        let f = 0;
        document.querySelectorAll(".content-wrapper-width").forEach((p) => {
          p.offsetWidth > f && (f = p.offsetWidth);
        }), k.value = f > 0 ? f + 32 : "auto", g.value = !0;
      });
    }, {
      immediate: !0
    }), b(() => a.value), () => {
      function w(x) {
        return x.map((t) => ["selection", "index", "expand"].includes(t.type) ? r(C, s({
          type: t.type
        }, t), {
          ...t == null ? void 0 : t.slots
        }) : r(C, s({
          "show-overflow-tooltip": !0,
          align: "left"
        }, t), {
          default: (e) => {
            var V;
            return t.children && Array.isArray(t.children) && t.children.length > 0 ? w(t.children) : l[t.prop] ? r(I, null, [(V = l[t.prop]) == null ? void 0 : V.call(l, {
              $index: e.$index,
              row: e.row
            })]) : t.formatter ? r(I, null, [t.formatter({
              $index: e.$index,
              row: e.row
            }) ?? "-"]) : r(I, null, [e.row[t.prop] ?? "-"]);
          },
          ...t == null ? void 0 : t.slots
        }));
      }
      function f() {
        return r(Q, s({
          ref: a,
          stripe: !0
        }, u, {
          class: `TableGenerator el-table-${_}`
        }), {
          default: () => [w(u.tableOption), l != null && l.operation ? r(C, {
            fixed: "right",
            label: "操作",
            width: k.value
          }, {
            default: (x) => {
              var t;
              return r("div", {
                class: "content-wrapper"
              }, [(t = l.operation) == null ? void 0 : t.call(l, {
                $index: x.$index,
                row: x.row
              })]);
            }
          }) : ""],
          empty: () => l != null && l.empty ? l == null ? void 0 : l.empty() : r(ee, {
            description: "暂无数据"
          }, null),
          append: () => l != null && l.append ? l == null ? void 0 : l.append() : ""
        });
      }
      function p() {
        return r(Q, s(v, {
          class: `TableGenerator el-table-${_}`
        }), {
          default: () => [r(C, {
            fixed: "right"
          }, {
            default: (x) => {
              var t;
              return r("div", {
                style: "display:inline-block;opacity:0",
                class: "content-wrapper content-wrapper-width"
              }, [(t = l.operation) == null ? void 0 : t.call(l, {
                $index: x.$index,
                row: x.row
              })]);
            }
          })]
        });
      }
      return r(I, null, [g.value ? f() : p()]);
    };
  }
});
/*! Element Plus Icons Vue v2.1.0 */
var T = (h, b) => {
  let v = h.__vccOpts || h;
  for (let [l, y] of b)
    v[l] = y;
  return v;
}, xe = {
  name: "ArrowUp"
}, Ee = {
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
), fe = [
  ke
];
function Ie(h, b, v, l, y, a) {
  return m(), D("svg", Ee, fe);
}
var Ve = /* @__PURE__ */ T(xe, [["render", Ie], ["__file", "arrow-up.vue"]]), $e = {
  name: "Refresh"
}, Ge = {
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
function Se(h, b, v, l, y, a) {
  return m(), D("svg", Ge, Ce);
}
var me = /* @__PURE__ */ T($e, [["render", Se], ["__file", "refresh.vue"]]), De = {
  name: "Search"
}, Fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Te = /* @__PURE__ */ F(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), Ue = [
  Te
];
function Ye(h, b, v, l, y, a) {
  return m(), D("svg", Fe, Ue);
}
var Me = /* @__PURE__ */ T(De, [["render", Ye], ["__file", "search.vue"]]);
const Ke = /* @__PURE__ */ S({
  name: "FormGenerator",
  setup(h, {
    expose: b,
    attrs: v,
    slots: l,
    emit: y
  }) {
    const a = v, u = A(), n = {}, _ = A(!1), g = isNaN(a.column) ? 4 : a.column >= 4 ? a.column : 4, k = {
      submit: () => {
        u.value.validate((p) => {
          p && y("submit");
        });
      },
      cancel: (p) => {
        var x, t;
        a.onCancel ? y("cancel") : (t = (x = w(p.target).querySelector(".el-dialog__headerbtn")) == null ? void 0 : x.click) == null || t.call(x);
      },
      reset: () => {
        u.value.resetFields(), y("submit", "init");
      }
    };
    function w(p) {
      return p.parentElement.classList.value.split(" ").includes("el-dialog") ? p.parentElement : w(p.parentElement);
    }
    function f(p) {
      _.value = p, a.formOption.forEach((x, t) => {
        t > g - 2 && (x.show = p);
      });
    }
    return a.formOption.length >= g - 2 && (a == null ? void 0 : a.type) === "search" && f(!1), b(() => ({
      ...u.value,
      ...k,
      $refs: n
    })), () => {
      function p() {
        return r(ae, s({
          class: `FormGenerator ${(a == null ? void 0 : a.type) === "search" ? "FormGeneratorSearch" : ""} ${(a == null ? void 0 : a.type) === "dialog" ? "FormGeneratorDialog" : ""}`,
          inline: (a == null ? void 0 : a.type) === "search",
          "validate-on-rule-change": !1,
          "label-width": a.labelWidth || "auto"
        }, a, {
          ref: u
        }), {
          default: () => [a.formOption.map((e) => {
            var V;
            return r(X, s(e.formItem, {
              style: e.hasOwnProperty("show") && e.show === !1 ? "display:none" : "",
              key: e.formItem.prop
            }), {
              default: () => [x(e)],
              ...(V = e.formItem) == null ? void 0 : V.slots
            });
          }), a.disabled === !0 || a.noFooter || !a.onSubmit ? "" : r(X, {
            class: `btnItem ${_.value ? "searchItem" : ""}`
          }, {
            default: () => l != null && l.default && typeof (l == null ? void 0 : l.default()[0].type) == "string" ? r(I, null, [l.default()[0].children]) : (a == null ? void 0 : a.type) === "search" ? t() : r(I, null, [(a == null ? void 0 : a.type) === "dialog" ? r($, {
              onClick: k.cancel
            }, {
              default: () => [G("取消")]
            }) : "", r($, {
              type: "primary",
              onClick: k.submit
            }, {
              default: () => [G("确定")]
            })]),
            label: () => ""
          })]
        });
      }
      function x(e) {
        var V, U, Y, M, B, N, j, P, R, z, q, W, L;
        switch (n[e.formItem.prop] = A(), e.type) {
          case "input":
            return r(_e, s({
              ref: n[e.formItem.prop],
              clearable: !0,
              maxlength: 30
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(V = e == null ? void 0 : e.control) == null ? void 0 : V.slots
            });
          case "input-number":
            return r(ge, s({
              ref: n[e.formItem.prop],
              min: 0,
              max: 100
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "select":
            return r(be, s({
              ref: n[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, E;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.option) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.option.map((c) => r(ye, s(c, {
                  key: c.value
                }), {
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "tree-select":
            return r(ve, s({
              ref: n[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(U = e == null ? void 0 : e.control) == null ? void 0 : U.slots
            });
          case "cascader":
            return r(he, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(Y = e == null ? void 0 : e.control) == null ? void 0 : Y.slots
            });
          case "radio":
            return r(o, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, E;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.radioGroup.map((c) => r(se, s(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "radio-button":
            return r(o, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, E;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.radioGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.radioGroup.map((c) => r(ne, s(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox":
            return r(Z, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, E;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.checkboxGroup.map((c) => r(te, s(c, {
                  label: c.value,
                  key: c.label
                }), {
                  default: () => [c.label],
                  ...c == null ? void 0 : c.slots
                })) : ""];
              }
            });
          case "checkbox-button":
            return r(Z, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => {
                var d, E;
                return [((d = e == null ? void 0 : e.control) == null ? void 0 : d.checkboxGroup) instanceof Array ? (E = e == null ? void 0 : e.control) == null ? void 0 : E.checkboxGroup.map((c) => r(ce, s(c, {
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
            return r(de, s({
              ref: n[e.formItem.prop],
              clearable: !0,
              format: H,
              "value-format": H
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), {
              ...(B = e == null ? void 0 : e.control) == null ? void 0 : B.slots
            });
          case "time-picker":
            return r(ue, s({
              ref: n[e.formItem.prop],
              clearable: !0
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "switch":
            return r(re, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              modelValue: a.model[e.formItem.prop],
              "onUpdate:modelValue": (d) => a.model[e.formItem.prop] = d
            }), null);
          case "upload":
            return r(le, s({
              ref: n[e.formItem.prop]
            }, e == null ? void 0 : e.control, {
              "file-list": a.model[e.formItem.prop],
              "onUpdate:file-list": (d) => a.model[e.formItem.prop] = d
            }), {
              default: () => a.disabled ? "" : r($, {
                type: "primary"
              }, {
                default: () => [G("上传文件")]
              }),
              ...(N = e == null ? void 0 : e.control) == null ? void 0 : N.slots
            });
          case "slot":
            return (P = (j = e == null ? void 0 : e.control) == null ? void 0 : j.slots) != null && P.default && typeof ((z = (R = e == null ? void 0 : e.control) == null ? void 0 : R.slots) == null ? void 0 : z.default) == "function" ? r(I, null, [(W = (q = e.control.slots).default) == null ? void 0 : W.call(q, {
              form: a.model,
              data: a.model[e.formItem.prop]
            })]) : l[e.formItem.prop] ? (L = l[e.formItem.prop]) == null ? void 0 : L.call(l, {
              form: a.model,
              data: a.model[e.formItem.prop]
            }) : a.model[e.formItem.prop];
        }
      }
      function t() {
        return r(I, null, [r($, {
          type: "primary",
          onClick: k.submit,
          icon: Me
        }, {
          default: () => [G("搜索")]
        }), r($, {
          onClick: k.reset,
          icon: me
        }, {
          default: () => [G("重置")]
        }), a.type === "search" && a.formOption.length > g - 1 ? r(I, null, [r($, {
          text: !0,
          type: "primary",
          class: `expandBtn ${_.value ? "up" : "down"}`,
          onClick: () => {
            f(!_.value);
          },
          icon: Ve
        }, {
          default: () => [_.value ? "收起" : "展开"]
        })]) : ""]);
      }
      return p();
    };
  }
});
function Be(h) {
  return typeof h == "function" || Object.prototype.toString.call(h) === "[object Object]" && !i(h);
}
const Je = /* @__PURE__ */ S({
  name: "StepsGenerator",
  setup(h, {
    expose: b,
    attrs: v,
    slots: l,
    emit: y
  }) {
    const a = v, u = A(0);
    function n() {
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
      prev: n,
      next: _
    }), () => {
      function g() {
        let k;
        return r("div", {
          class: "StepsGenerator"
        }, [r(we, s({
          "align-center": !0
        }, a, {
          active: u.value
        }), Be(k = a.stepsOption.map((w) => r(pe, w, {
          ...w == null ? void 0 : w.slots
        }))) ? k : {
          default: () => [k]
        }), r("div", {
          class: "container"
        }, [Object.keys(l).map((w, f) => r("div", {
          style: {
            display: u.value === f ? "block" : "none"
          }
        }, [l[w]()]))]), r("div", {
          class: "btn-group"
        }, [l.default ? l.default(u.value) : r(I, null, [u.value > 0 ? r($, {
          type: "primary",
          plain: !0,
          onClick: n
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
}), Ne = (h, b) => h.find((v) => v.prop === b), je = (h, b, v) => {
  var y;
  const l = h.find((a) => a.formItem.prop === b);
  l && ((y = l == null ? void 0 : l.control) != null && y.option) && (l.control.option = v);
}, Pe = (h, b) => h.find((v) => v.formItem.prop === b), Re = (h, b, v, l) => {
  if (!Array.isArray(h))
    return [];
  const y = [];
  let a = [];
  return l && (a = Object.keys(l)), h.forEach((u) => {
    let n = {
      label: typeof u == "string" ? u : u[b],
      value: typeof u == "string" ? u : u[v]
    };
    l && a.forEach((_) => {
      n[_] = u[_];
    }), y.push(n);
  }), y;
}, ze = (h, b = []) => {
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
  return h.forEach((l) => {
    var a, u, n;
    const y = { required: !0, message: `请${v[l.type] ?? "完善"}${l.formItem.label ?? ""}`, trigger: "change" };
    if (!b.includes(l.formItem.prop) && (((a = l.formItem) == null ? void 0 : a.rules) instanceof Object ? l.formItem.rules = [y, l.formItem.rules] : Array.isArray((u = l.formItem) == null ? void 0 : u.rules) ? l.formItem.rules.unshift(y) : l.formItem.rules = [y], ((n = l.formItem) == null ? void 0 : n.rules) instanceof Array))
      for (let _ = 0; _ < l.formItem.rules.length; _++) {
        let g = l.formItem.rules[_];
        g.message || (g.message = "格式有误");
      }
  }), h;
}, Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFormOption: Pe,
  getOption: Re,
  getTableOption: Ne,
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
