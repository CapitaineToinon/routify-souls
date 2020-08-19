
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, g as _createClass, S as SvelteComponentDev, L as create_slot, v as validate_slots, m as element, q as attr_dev, r as add_location, e as insert_dev, M as update_slot, B as transition_in, C as transition_out, f as detach_dev, t as text, Y as set_data_dev, p as space, F as toggle_class, x as append_dev, l as _slicedToArray, H as group_outros, I as check_outros } from './main-f883e670.js';

var file = "src/components/alert.svelte";

var get_header_slot_changes = function get_header_slot_changes(dirty) {
  return {};
};

var get_header_slot_context = function get_header_slot_context(ctx) {
  return {};
}; // (19:2) {#if !headless}


function create_if_block(ctx) {
  var div;
  var current;
  var header_slot_template =
  /*$$slots*/
  ctx[7].header;
  var header_slot = create_slot(header_slot_template, ctx,
  /*$$scope*/
  ctx[6], get_header_slot_context);
  var header_slot_or_fallback = header_slot || fallback_block(ctx);
  var block = {
    c: function create() {
      div = element("div");
      if (header_slot_or_fallback) header_slot_or_fallback.c();
      attr_dev(div, "class", "title font-bold rounded-t px-4 py-2 svelte-n1p0gc");
      add_location(div, file, 19, 4, 343);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (header_slot_or_fallback) {
        header_slot_or_fallback.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (header_slot) {
        if (header_slot.p && dirty &
        /*$$scope*/
        64) {
          update_slot(header_slot, header_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, get_header_slot_changes, get_header_slot_context);
        }
      } else {
        if (header_slot_or_fallback && header_slot_or_fallback.p && dirty &
        /*type*/
        1) {
          header_slot_or_fallback.p(ctx, dirty);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(header_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(header_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (header_slot_or_fallback) header_slot_or_fallback.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(19:2) {#if !headless}",
    ctx: ctx
  });
  return block;
} // (21:26) {type}


function fallback_block(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text(
      /*type*/
      ctx[0]);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*type*/
      1) set_data_dev(t,
      /*type*/
      ctx[0]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: fallback_block.name,
    type: "fallback",
    source: "(21:26) {type}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1;
  var t;
  var div0;
  var p;
  var div0_class_value;
  var current;
  var if_block = !
  /*headless*/
  ctx[1] && create_if_block(ctx);
  var default_slot_template =
  /*$$slots*/
  ctx[7]["default"];
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
  var block = {
    c: function create() {
      div1 = element("div");
      if (if_block) if_block.c();
      t = space();
      div0 = element("div");
      p = element("p");
      if (default_slot) default_slot.c();
      add_location(p, file, 26, 4, 553);
      attr_dev(div0, "class", div0_class_value = "content border px-4 py-3 " + (!
      /*headless*/
      ctx[1] ? "border-t-0 rounded-b" : "rounded") + " svelte-n1p0gc");
      add_location(div0, file, 23, 2, 454);
      attr_dev(div1, "role", "alert");
      attr_dev(div1, "class", "overflow-hidden w-full svelte-n1p0gc");
      toggle_class(div1, "info",
      /*info*/
      ctx[4]);
      toggle_class(div1, "danger",
      /*danger*/
      ctx[2]);
      toggle_class(div1, "warning",
      /*warning*/
      ctx[3]);
      toggle_class(div1, "success",
      /*success*/
      ctx[5]);
      add_location(div1, file, 10, 0, 206);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      if (if_block) if_block.m(div1, null);
      append_dev(div1, t);
      append_dev(div1, div0);
      append_dev(div0, p);

      if (default_slot) {
        default_slot.m(p, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*headless*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*headless*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        64) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*headless*/
      2 && div0_class_value !== (div0_class_value = "content border px-4 py-3 " + (!
      /*headless*/
      ctx[1] ? "border-t-0 rounded-b" : "rounded") + " svelte-n1p0gc")) {
        attr_dev(div0, "class", div0_class_value);
      }

      if (dirty &
      /*info*/
      16) {
        toggle_class(div1, "info",
        /*info*/
        ctx[4]);
      }

      if (dirty &
      /*danger*/
      4) {
        toggle_class(div1, "danger",
        /*danger*/
        ctx[2]);
      }

      if (dirty &
      /*warning*/
      8) {
        toggle_class(div1, "warning",
        /*warning*/
        ctx[3]);
      }

      if (dirty &
      /*success*/
      32) {
        toggle_class(div1, "success",
        /*success*/
        ctx[5]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if (if_block) if_block.d();
      if (default_slot) default_slot.d(detaching);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$type = $$props.type,
      type = _$$props$type === void 0 ? "info" : _$$props$type;
  var _$$props$headless = $$props.headless,
      headless = _$$props$headless === void 0 ? false : _$$props$headless;
  var writable_props = ["type", "headless"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Alert> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Alert", $$slots, ['header', 'default']);

  $$self.$$set = function ($$props) {
    if ("type" in $$props) $$invalidate(0, type = $$props.type);
    if ("headless" in $$props) $$invalidate(1, headless = $$props.headless);
    if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      type: type,
      headless: headless,
      danger: danger,
      warning: warning,
      info: info,
      success: success
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("type" in $$props) $$invalidate(0, type = $$props.type);
    if ("headless" in $$props) $$invalidate(1, headless = $$props.headless);
    if ("danger" in $$props) $$invalidate(2, danger = $$props.danger);
    if ("warning" in $$props) $$invalidate(3, warning = $$props.warning);
    if ("info" in $$props) $$invalidate(4, info = $$props.info);
    if ("success" in $$props) $$invalidate(5, success = $$props.success);
  };

  var danger;
  var warning;
  var info;
  var success;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*type*/
    1) {
       $$invalidate(2, danger = type === "danger");
    }

    if ($$self.$$.dirty &
    /*type*/
    1) {
       $$invalidate(3, warning = type === "warning");
    }

    if ($$self.$$.dirty &
    /*type*/
    1) {
       $$invalidate(4, info = type === "info");
    }

    if ($$self.$$.dirty &
    /*type*/
    1) {
       $$invalidate(5, success = type === "success");
    }
  };

  return [type, headless, danger, warning, info, success, $$scope, $$slots];
}

var Alert = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Alert, _SvelteComponentDev);

  var _super = _createSuper(Alert);

  function Alert(options) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      type: 0,
      headless: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Alert",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Alert, [{
    key: "type",
    get: function get() {
      throw new Error("<Alert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Alert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "headless",
    get: function get() {
      throw new Error("<Alert>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Alert>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Alert;
}(SvelteComponentDev);

export { Alert as A };
//# sourceMappingURL=alert-234bc3cd.js.map
