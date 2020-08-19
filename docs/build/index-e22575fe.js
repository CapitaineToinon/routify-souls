
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, c as _assertThisInitialized, d as dispatch_dev, g as _createClass, S as SvelteComponentDev, Q as globals, s as safe_not_equal, m as element, r as add_location, e as insert_dev, f as detach_dev, R as empty, l as _slicedToArray, n as noop, j as validate_store, k as component_subscribe, v as validate_slots, a1 as goto, X as isActive } from './main-f883e670.js';

var console_1 = globals.console;
var file = "src/pages/leaderboards/[game]/index.svelte"; // (23:0) {#if !hasCategory}

function create_if_block(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      div.textContent = "This game has no categories.";
      add_location(div, file, 23, 2, 492);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(23:0) {#if !hasCategory}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var if_block_anchor;
  var if_block = !
  /*hasCategory*/
  ctx[0] && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*hasCategory*/
      ctx[0]) {
        if (if_block) ; else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
  var $goto;
  validate_store(goto, "goto");
  component_subscribe($$self, goto, function ($$value) {
    return $$invalidate(2, $goto = $$value);
  });
  var scoped = $$props.scoped;
  var _scoped = scoped,
      game = _scoped.game;
  var writable_props = ["scoped"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<U5Bgameu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bgameu5D", $$slots, []);

  $$self.$$set = function ($$props) {
    if ("scoped" in $$props) $$invalidate(1, scoped = $$props.scoped);
  };

  $$self.$capture_state = function () {
    return {
      "goto": goto,
      isActive: isActive,
      scoped: scoped,
      game: game,
      hasCategory: hasCategory,
      $goto: $goto
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("scoped" in $$props) $$invalidate(1, scoped = $$props.scoped);
    if ("hasCategory" in $$props) $$invalidate(0, hasCategory = $$props.hasCategory);
  };

  var hasCategory;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*hasCategory*/
    1) {
       console.log({
        hasCategory: hasCategory
      });
    }

    if ($$self.$$.dirty &
    /*hasCategory, $goto*/
    5) {
       if (hasCategory) {
        var category = game.categories.data[0];
        $goto("/leaderboards/:game/:category", {
          game: game.abbreviation,
          category: category.weblink.split("#")[1].toLowerCase()
        }, true);
      }
    }
  };

   $$invalidate(0, hasCategory = game && game.categories.data.length !== 0);

  return [hasCategory, scoped];
}

var U5Bgameu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bgameu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bgameu5D);

  function U5Bgameu5D(options) {
    var _this;

    _classCallCheck(this, U5Bgameu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      scoped: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bgameu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*scoped*/
    ctx[1] === undefined && !("scoped" in props)) {
      console_1.warn("<U5Bgameu5D> was created without expected prop 'scoped'");
    }

    return _this;
  }

  _createClass(U5Bgameu5D, [{
    key: "scoped",
    get: function get() {
      throw new Error("<U5Bgameu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bgameu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bgameu5D;
}(SvelteComponentDev);

export default U5Bgameu5D;
//# sourceMappingURL=index-e22575fe.js.map
