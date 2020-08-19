
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, c as _assertThisInitialized, d as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, s as safe_not_equal, m as element, p as space, t as text, q as attr_dev, r as add_location, e as insert_dev, x as append_dev, f as detach_dev, l as _slicedToArray, n as noop, J as destroy_each, j as validate_store, k as component_subscribe, v as validate_slots, u as url } from './main-f883e670.js';

var file = "src/pages/leaderboards/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (13:4) {#each games as game}


function create_each_block(ctx) {
  var a;
  var div3;
  var div2;
  var img;
  var img_src_value;
  var t0;
  var div1;
  var div0;
  var t1_value =
  /*game*/
  ctx[3].names.international + "";
  var t1;
  var t2;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      div3 = element("div");
      div2 = element("div");
      img = element("img");
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      t1 = text(t1_value);
      t2 = space();
      attr_dev(img, "class", "absolute h-full w-full object-cover opacity-75");
      if (img.src !== (img_src_value =
      /*game*/
      ctx[3].assets.background.uri)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Sunset in the mountains");
      add_location(img, file, 16, 12, 501);
      attr_dev(div0, "class", "text-gray-100 font-bold");
      add_location(div0, file, 25, 14, 836);
      attr_dev(div1, "class", "absolute h-full w-full flex items-center justify-center\n              text-center p-2");
      add_location(div1, file, 21, 12, 695);
      attr_dev(div2, "class", "bg-black pb-3/5 relative");
      add_location(div2, file, 15, 10, 450);
      attr_dev(div3, "class", "border-gray-100 rounded overflow-hidden shadow-md");
      add_location(div3, file, 14, 8, 376);
      attr_dev(a, "href", a_href_value =
      /*$url*/
      ctx[0]("/leaderboards/:game", {
        game:
        /*game*/
        ctx[3].abbreviation
      }));
      attr_dev(a, "class", "svelte-uc38bk");
      add_location(a, file, 13, 6, 298);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, div3);
      append_dev(div3, div2);
      append_dev(div2, img);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, div0);
      append_dev(div0, t1);
      append_dev(a, t2);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*$url*/
      1 && a_href_value !== (a_href_value =
      /*$url*/
      ctx[0]("/leaderboards/:game", {
        game:
        /*game*/
        ctx[3].abbreviation
      }))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(13:4) {#each games as game}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1;
  var div0;
  var each_value =
  /*games*/
  ctx[1];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      attr_dev(div0, "class", "games grid grid-cols-1 mb-4 sm:grid-cols-2 md:grid-cols-3\n    lg:grid-cols-4 gap-4 svelte-uc38bk");
      add_location(div0, file, 8, 2, 162);
      attr_dev(div1, "class", "flex flex-col justify-center w-full");
      add_location(div1, file, 7, 0, 110);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(div0, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*$url, games*/
      3) {
        each_value =
        /*games*/
        ctx[1];
        validate_each_argument(each_value);

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(div0, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
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
  var $url;
  validate_store(url, "url");
  component_subscribe($$self, url, function ($$value) {
    return $$invalidate(0, $url = $$value);
  });
  var scoped = $$props.scoped;
  var _scoped = scoped,
      games = _scoped.games;
  var writable_props = ["scoped"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Leaderboards> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Leaderboards", $$slots, []);

  $$self.$$set = function ($$props) {
    if ("scoped" in $$props) $$invalidate(2, scoped = $$props.scoped);
  };

  $$self.$capture_state = function () {
    return {
      url: url,
      scoped: scoped,
      games: games,
      $url: $url
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("scoped" in $$props) $$invalidate(2, scoped = $$props.scoped);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [$url, games, scoped];
}

var Leaderboards = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Leaderboards, _SvelteComponentDev);

  var _super = _createSuper(Leaderboards);

  function Leaderboards(options) {
    var _this;

    _classCallCheck(this, Leaderboards);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      scoped: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Leaderboards",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*scoped*/
    ctx[2] === undefined && !("scoped" in props)) {
      console.warn("<Leaderboards> was created without expected prop 'scoped'");
    }

    return _this;
  }

  _createClass(Leaderboards, [{
    key: "scoped",
    get: function get() {
      throw new Error("<Leaderboards>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Leaderboards>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Leaderboards;
}(SvelteComponentDev);

export default Leaderboards;
//# sourceMappingURL=index-87f7a773.js.map
