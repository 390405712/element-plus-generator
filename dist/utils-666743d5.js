const n = (t, a, l, e) => {
  if (!Array.isArray(t))
    return [];
  const o = [];
  let s = [];
  return e && (s = Object.keys(e)), t.forEach((r) => {
    let u = {
      label: typeof r == "string" ? r : r[a],
      value: typeof r == "string" ? r : r[l]
    };
    e && s.forEach((f) => {
      u[f] = r[f];
    }), o.push(u);
  }), o;
}, m = (t, a) => t.filter((l) => l.formItem.prop === a)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, c = (t, a = []) => {
  const l = {
    input: "输入",
    "input-number": "输入",
    select: "选择",
    "tree-select": "选择",
    cascader: "选择",
    radio: "选择",
    "radio-button": "选择",
    checkbox: "选择",
    "checkbox-button": "选择",
    datetime: "选择",
    time: "选择",
    switch: "选择",
    upload: "上传"
  };
  return t.forEach((e) => {
    const o = { required: !0, message: `请${l[e.type] || "完善"}${e.formItem.label || ""}`, trigger: "change" };
    if (!a.includes(e.formItem.prop)) {
      e.formItem.rules ? Array.isArray(e.formItem.rules) ? e.formItem.rules.unshift(o) : Array.isArray(e.formItem.rules) || (e.formItem.rules = [o, e.formItem.rules]) : e.formItem.rules = [o];
      for (let s = 0; s < e.formItem.rules.length; s++) {
        let r = e.formItem.rules[s];
        r.validator && typeof r.validator != "function" && (r.pattern = r.validator, r.message = r.message || "格式有误", delete r.validator);
      }
    }
  }), t;
}, p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getLabel: m,
  getOption: n,
  setRequired: c
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as a,
  n as g,
  c as s,
  p as u
};
//# sourceMappingURL=utils-666743d5.js.map
