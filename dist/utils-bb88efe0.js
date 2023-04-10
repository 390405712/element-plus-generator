const c = (o, u, f, e) => {
  if (!Array.isArray(o))
    return [];
  const t = [];
  let l = [];
  return e && (l = Object.keys(e)), o.forEach((r) => {
    let a = {
      label: typeof r == "string" ? r : r[u],
      value: typeof r == "string" ? r : r[f]
    };
    e && l.forEach((s) => {
      a[s] = r[s];
    }), t.push(a);
  }), t;
}, m = (o, u = []) => {
  const f = {
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
  return o.forEach((e) => {
    var l, r, a;
    const t = { required: !0, message: `请${f[e.type] ?? "完善"}${e.formItem.label ?? ""}`, trigger: "change" };
    if (!u.includes(e.formItem.prop) && (((l = e.formItem) == null ? void 0 : l.rules) instanceof Object ? e.formItem.rules = [t, e.formItem.rules] : Array.isArray((r = e.formItem) == null ? void 0 : r.rules) ? e.formItem.rules.unshift(t) : e.formItem.rules = [t], ((a = e.formItem) == null ? void 0 : a.rules) instanceof Array))
      for (let s = 0; s < e.formItem.rules.length; s++) {
        let n = e.formItem.rules[s];
        n.message || (n.message = "格式有误");
      }
  }), o;
}, i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: c,
  setRequired: m
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as g,
  m as s,
  i as u
};
//# sourceMappingURL=utils-bb88efe0.js.map
