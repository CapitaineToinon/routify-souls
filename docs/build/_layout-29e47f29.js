
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, c as _assertThisInitialized, d as dispatch_dev, S as SvelteComponentDev, V as handle_promise, s as safe_not_equal, m as element, q as attr_dev, r as add_location, e as insert_dev, l as _slicedToArray, B as transition_in, C as transition_out, f as detach_dev, v as validate_slots, L as create_slot, n as noop, M as update_slot } from './main-f883e670.js';
import { g as getGames } from './api-29f5fb02.js';

var file = "src/pages/leaderboards/_layout.svelte";

var get_default_slot_changes = function get_default_slot_changes(dirty) {
  return {};
};

var get_default_slot_context = function get_default_slot_context(ctx) {
  return {
    scoped: {
      games:
      /*games*/
      ctx[2]
    }
  };
}; // (1:0) <script>   import { getGames }


function create_catch_block(ctx) {
  var block = {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_catch_block.name,
    type: "catch",
    source: "(1:0) <script>   import { getGames }",
    ctx: ctx
  });
  return block;
} // (8:2) {:then games}


function create_then_block(ctx) {
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[1]["default"];
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], get_default_slot_context);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, get_default_slot_changes, get_default_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_then_block.name,
    type: "then",
    source: "(8:2) {:then games}",
    ctx: ctx
  });
  return block;
} // (6:21)      <div class="progress h-2 flex flex-row"></div>   {:then games}


function create_pending_block(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", "progress h-2 flex flex-row");
      add_location(div, file, 6, 4, 129);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_pending_block.name,
    type: "pending",
    source: "(6:21)      <div class=\\\"progress h-2 flex flex-row\\\"></div>   {:then games}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var promise;
  var current;
  var info = {
    ctx: ctx,
    current: null,
    token: null,
    pending: create_pending_block,
    then: create_then_block,
    "catch": create_catch_block,
    value: 2,
    blocks: [,,,]
  };
  handle_promise(promise = getGames(), info);
  var block = {
    c: function create() {
      div = element("div");
      info.block.c();
      attr_dev(div, "class", "min-h-screen-navbar container");
      add_location(div, file, 4, 0, 59);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      info.block.m(div, info.anchor = null);

      info.mount = function () {
        return div;
      };

      info.anchor = null;
      current = true;
    },
    p: function update(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;
      {
        var child_ctx = ctx.slice();
        child_ctx[2] = info.resolved;
        info.block.p(child_ctx, dirty);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(info.block);
      current = true;
    },
    o: function outro(local) {
      for (var i = 0; i < 3; i += 1) {
        var _block = info.blocks[i];
        transition_out(_block);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      info.block.d();
      info.token = null;
      info = null;
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
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", $$slots, ['default']);

  $$self.$$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      getGames: getGames
    };
  };

  return [$$scope, $$slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Layout;
}(SvelteComponentDev);

export default Layout;
//# sourceMappingURL=_layout-29e47f29.js.map
