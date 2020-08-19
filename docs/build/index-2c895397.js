
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, c as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, t as text, e as insert_dev, n as noop, f as detach_dev, v as validate_slots } from './main-f883e670.js';

function create_fragment(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("lmao");
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pages> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Pages", $$slots, []);
  return [];
}

var Pages = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Pages, _SvelteComponentDev);

  var _super = _createSuper(Pages);

  function Pages(options) {
    var _this;

    _classCallCheck(this, Pages);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Pages",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Pages;
}(SvelteComponentDev);

export default Pages;
//# sourceMappingURL=index-2c895397.js.map
