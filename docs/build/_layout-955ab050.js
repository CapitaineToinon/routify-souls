
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, c as _assertThisInitialized, d as dispatch_dev, g as _createClass, S as SvelteComponentDev, s as safe_not_equal, m as element, q as attr_dev, r as add_location, e as insert_dev, l as _slicedToArray, C as transition_out, I as check_outros, B as transition_in, f as detach_dev, j as validate_store, k as component_subscribe, v as validate_slots, u as url, X as isActive, h as validate_each_argument, L as create_slot, t as text, p as space, F as toggle_class, x as append_dev, Y as set_data_dev, H as group_outros, K as binding_callbacks, y as create_component, A as mount_component, D as destroy_component, G as listen_dev, M as update_slot, J as destroy_each } from './main-f883e670.js';
import { I as Icon, a as faList, b as faTimes } from './index.es-57672d74.js';
import { o as onResize, a as onEvent } from './onResize-c5ea2ec7.js';
import { A as Alert } from './alert-234bc3cd.js';

var file = "src/pages/leaderboards/[game]/_layout.svelte";

var get_default_slot_changes = function get_default_slot_changes(dirty) {
  return {
    scoped: dirty &
    /*fullGame*/
    8
  };
};

var get_default_slot_context = function get_default_slot_context(ctx) {
  return {
    scoped: {
      game:
      /*fullGame*/
      ctx[3]
    }
  };
};

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
} // (65:2) {:else}


function create_else_block(ctx) {
  var alert;
  var current;
  alert = new Alert({
    props: {
      type: "danger",
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(alert.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(alert, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var alert_changes = {};

      if (dirty &
      /*$$scope*/
      2048) {
        alert_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      alert.$set(alert_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(alert.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(alert.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(alert, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(65:2) {:else}",
    ctx: ctx
  });
  return block;
} // (27:2) {#if fullGame}


function create_if_block(ctx) {
  var button_1;
  var icon;
  var t0;
  var aside;
  var div0;
  var span;
  var t2;
  var t3;
  var div1;
  var current;
  var mounted;
  var dispose;
  icon = new Icon({
    props: {
      data:
      /*buttonIcon*/
      ctx[2],
      scale: "2"
    },
    $$inline: true
  });
  var each_value =
  /*fullGame*/
  ctx[3].categories.data;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var default_slot_template =
  /*$$slots*/
  ctx[8]["default"];
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[11], get_default_slot_context);
  var block = {
    c: function create() {
      button_1 = element("button");
      create_component(icon.$$.fragment);
      t0 = space();
      aside = element("aside");
      div0 = element("div");
      span = element("span");
      span.textContent = "Categories";
      t2 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t3 = space();
      div1 = element("div");
      if (default_slot) default_slot.c();
      attr_dev(button_1, "id", "sidebar-button");
      attr_dev(button_1, "class", "svelte-121u609");
      toggle_class(button_1, "open",
      /*openSidebar*/
      ctx[1]);
      add_location(button_1, file, 27, 4, 763);
      attr_dev(span, "class", "label text-xs text-nord0 dark:text-nord6 uppercase mb-1 svelte-121u609");
      add_location(span, file, 37, 8, 1073);
      attr_dev(div0, "class", "categories w-64 flex flex-col svelte-121u609");
      add_location(div0, file, 36, 6, 1021);
      attr_dev(aside, "class", "svelte-121u609");
      toggle_class(aside, "open",
      /*openSidebar*/
      ctx[1]);
      add_location(aside, file, 35, 4, 980);
      attr_dev(div1, "class", "content flex flex-col flex-grow ml-0 md:ml-5 svelte-121u609");
      toggle_class(div1, "open",
      /*openSidebar*/
      ctx[1]);
      add_location(div1, file, 58, 4, 1802);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button_1, anchor);
      mount_component(icon, button_1, null);
      /*button_1_binding*/

      ctx[9](button_1);
      insert_dev(target, t0, anchor);
      insert_dev(target, aside, anchor);
      append_dev(aside, div0);
      append_dev(div0, span);
      append_dev(div0, t2);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(div0, null);
      }

      insert_dev(target, t3, anchor);
      insert_dev(target, div1, anchor);

      if (default_slot) {
        default_slot.m(div1, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen_dev(button_1, "click",
        /*click_handler*/
        ctx[10], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};
      if (dirty &
      /*buttonIcon*/
      4) icon_changes.data =
      /*buttonIcon*/
      ctx[2];
      icon.$set(icon_changes);

      if (dirty &
      /*openSidebar*/
      2) {
        toggle_class(button_1, "open",
        /*openSidebar*/
        ctx[1]);
      }

      if (dirty &
      /*$url, fullGame, $isActive*/
      56) {
        each_value =
        /*fullGame*/
        ctx[3].categories.data;
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

      if (dirty &
      /*openSidebar*/
      2) {
        toggle_class(aside, "open",
        /*openSidebar*/
        ctx[1]);
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope, fullGame*/
        2056) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[11], dirty, get_default_slot_changes, get_default_slot_context);
        }
      }

      if (dirty &
      /*openSidebar*/
      2) {
        toggle_class(div1, "open",
        /*openSidebar*/
        ctx[1]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button_1);
      destroy_component(icon);
      /*button_1_binding*/

      ctx[9](null);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(aside);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(div1);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(27:2) {#if fullGame}",
    ctx: ctx
  });
  return block;
} // (66:4) <Alert type="danger">


function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Game not found");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(66:4) <Alert type=\\\"danger\\\">",
    ctx: ctx
  });
  return block;
} // (41:8) {#each fullGame.categories.data as category}


function create_each_block(ctx) {
  var a;
  var t0_value =
  /*category*/
  ctx[13].name + "";
  var t0;
  var t1;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      attr_dev(a, "class", "btn text-nord0 dark:text-nord6 text-left py-2 pl-8 px-4 m-px\n            rounded svelte-121u609");
      attr_dev(a, "href", a_href_value =
      /*$url*/
      ctx[4]("/leaderboards/:game/:category", {
        game:
        /*fullGame*/
        ctx[3].abbreviation,
        category:
        /*category*/
        ctx[13].weblink.split("#")[1].toLowerCase()
      }));
      toggle_class(a, "active",
      /*$isActive*/
      ctx[5]("/leaderboards/".concat(
      /*fullGame*/
      ctx[3].abbreviation, "/").concat(
      /*category*/
      ctx[13].weblink.split("#")[1].toLowerCase())));
      add_location(a, file, 41, 10, 1244);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t0);
      append_dev(a, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*fullGame*/
      8 && t0_value !== (t0_value =
      /*category*/
      ctx[13].name + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*$url, fullGame*/
      24 && a_href_value !== (a_href_value =
      /*$url*/
      ctx[4]("/leaderboards/:game/:category", {
        game:
        /*fullGame*/
        ctx[3].abbreviation,
        category:
        /*category*/
        ctx[13].weblink.split("#")[1].toLowerCase()
      }))) {
        attr_dev(a, "href", a_href_value);
      }

      if (dirty &
      /*$isActive, fullGame*/
      40) {
        toggle_class(a, "active",
        /*$isActive*/
        ctx[5]("/leaderboards/".concat(
        /*fullGame*/
        ctx[3].abbreviation, "/").concat(
        /*category*/
        ctx[13].weblink.split("#")[1].toLowerCase())));
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
    source: "(41:8) {#each fullGame.categories.data as category}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var current_block_type_index;
  var if_block;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*fullGame*/
    ctx[3]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      div = element("div");
      if_block.c();
      attr_dev(div, "class", "flex flex-row svelte-121u609");
      add_location(div, file, 25, 0, 714);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if_blocks[current_block_type_index].d();
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
  var $isActive;
  validate_store(url, "url");
  component_subscribe($$self, url, function ($$value) {
    return $$invalidate(4, $url = $$value);
  });
  validate_store(isActive, "isActive");
  component_subscribe($$self, isActive, function ($$value) {
    return $$invalidate(5, $isActive = $$value);
  });
  var game = $$props.game;
  var scoped = $$props.scoped;
  var button;
  var openSidebar = false;
  var _scoped = scoped,
      games = _scoped.games;
  onResize(function () {
    return $$invalidate(1, openSidebar = false);
  });
  onEvent("click", function (_ref3) {
    var target = _ref3.target;
    if (target === button || button.contains(target)) return;
    $$invalidate(1, openSidebar = false);
  });
  var writable_props = ["game", "scoped"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", $$slots, ['default']);

  function button_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      button = $$value;
      $$invalidate(0, button);
    });
  }

  var click_handler = function click_handler() {
    return $$invalidate(1, openSidebar = !openSidebar);
  };

  $$self.$$set = function ($$props) {
    if ("game" in $$props) $$invalidate(6, game = $$props.game);
    if ("scoped" in $$props) $$invalidate(7, scoped = $$props.scoped);
    if ("$$scope" in $$props) $$invalidate(11, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      Icon: Icon,
      onEvent: onEvent,
      onResize: onResize,
      Alert: Alert,
      faList: faList,
      faTimes: faTimes,
      url: url,
      isActive: isActive,
      game: game,
      scoped: scoped,
      button: button,
      openSidebar: openSidebar,
      games: games,
      buttonIcon: buttonIcon,
      fullGame: fullGame,
      $url: $url,
      $isActive: $isActive
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("game" in $$props) $$invalidate(6, game = $$props.game);
    if ("scoped" in $$props) $$invalidate(7, scoped = $$props.scoped);
    if ("button" in $$props) $$invalidate(0, button = $$props.button);
    if ("openSidebar" in $$props) $$invalidate(1, openSidebar = $$props.openSidebar);
    if ("buttonIcon" in $$props) $$invalidate(2, buttonIcon = $$props.buttonIcon);
    if ("fullGame" in $$props) $$invalidate(3, fullGame = $$props.fullGame);
  };

  var buttonIcon;
  var fullGame;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*openSidebar*/
    2) {
       $$invalidate(2, buttonIcon = openSidebar ? faTimes : faList);
    }

    if ($$self.$$.dirty &
    /*game*/
    64) {
       $$invalidate(3, fullGame = games.find(function (g) {
        return g.abbreviation === game;
      }));
    }
  };

  return [button, openSidebar, buttonIcon, fullGame, $url, $isActive, game, scoped, $$slots, button_1_binding, click_handler, $$scope];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      game: 6,
      scoped: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*game*/
    ctx[6] === undefined && !("game" in props)) {
      console.warn("<Layout> was created without expected prop 'game'");
    }

    if (
    /*scoped*/
    ctx[7] === undefined && !("scoped" in props)) {
      console.warn("<Layout> was created without expected prop 'scoped'");
    }

    return _this;
  }

  _createClass(Layout, [{
    key: "game",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scoped",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Layout;
}(SvelteComponentDev);

export default Layout;
//# sourceMappingURL=_layout-955ab050.js.map
