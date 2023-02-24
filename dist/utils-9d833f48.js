const c = (o, r, n, s) => {
  if (!Array.isArray(o))
    return [];
  const e = [];
  let i = [];
  return s && (i = Object.keys(s)), o.forEach((t) => {
    let u = {
      label: typeof t == "string" ? t : t[r],
      value: typeof t == "string" ? t : t[n]
    };
    s && i.forEach((l) => {
      u[l] = t[l];
    }), e.push(u);
  }), e;
}, f = (o, r) => o.filter((n) => n.formItem.prop === r)[0] || {
  type: "input",
  formItem: {
    prop: "",
    label: ""
  }
}, m = (o, r, n) => {
  var i;
  const s = {
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
  }, e = f(o.formOption, o.field);
  if (Array.isArray(r) && r.length === 0)
    return Promise.reject(`请${s[e.type] || "完善"}${e.formItem.label}`);
  if (!r)
    return Promise.reject(`请${s[e.type] || "完善"}${e.formItem.label}`);
  if (!((i = e == null ? void 0 : e.formItem) != null && i.rules))
    return Promise.resolve();
  if (typeof e.formItem.rules.validator == "function")
    e.formItem.rules.validator(o, r).then(() => n()).catch((t) => {
      var u;
      return n(new Error(t !== "err" ? t : ((u = e == null ? void 0 : e.formItem.rules) == null ? void 0 : u.message) ?? ""));
    });
  else
    return e.formItem.rules.validator.test(r) ? Promise.resolve() : Promise.reject(e.formItem.rules.message);
}, a = (o, r = []) => {
  let n = {};
  return o.forEach((s) => {
    var i, t;
    const e = typeof s == "string" ? s : s.formItem.prop;
    r.includes(e) || (n[e] = [{ required: !0, validator: m, trigger: ((t = (i = s.formItem) == null ? void 0 : i.rules) == null ? void 0 : t.trigger) ?? "blur", formOption: o }]);
  }), n;
}, g = {
  checkIphoneNum: (o, r) => r ? /(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(r) ? Promise.resolve() : Promise.reject("手机格式有误") : Promise.reject("请输入手机号")
}, p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonValidator: g,
  getLabel: f,
  getOption: c,
  getRules: a
}, Symbol.toStringTag, { value: "Module" }));
export {
  g as C,
  f as a,
  a as b,
  c as g,
  p as u
};
//# sourceMappingURL=utils-9d833f48.js.map
