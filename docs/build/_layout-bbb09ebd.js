
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { w as writable, o as onDestroy, _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, j as validate_store, u as url, k as component_subscribe, l as _slicedToArray, v as validate_slots, m as element, t as text, p as space, q as attr_dev, r as add_location, e as insert_dev, x as append_dev, n as noop, f as detach_dev, y as create_component, z as null_to_empty, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, E as svg_element, F as toggle_class, G as listen_dev, H as group_outros, I as check_outros, J as destroy_each, K as binding_callbacks, L as create_slot, M as update_slot } from './main-f883e670.js';
import { f as faCog, I as Icon } from './index.es-57672d74.js';
import { o as onResize, a as onEvent } from './onResize-c5ea2ec7.js';

var CLASS = 'overflow-hidden';
var requests = writable(0);
requests.subscribe(function (count) {
  if (count < 0) requests.set(0);
  if (count <= 0) document.body.classList.remove(CLASS);else document.body.classList.add(CLASS);
});
function useBodyLocker() {
  var locked = writable(false);
  var unsubscribe = locked.subscribe(function (value) {
    console.log({
      value: value
    });
    value ? sub() : unsub();
  });

  function sub() {
    requests.update(function (r) {
      return r += 1;
    });
  }

  function unsub() {
    requests.update(function (r) {
      return r -= 1;
    });
  }

  function lock() {
    locked.set(true);
  }

  function unlock() {
    locked.set(false);
  }

  onDestroy(function () {
    unsubscribe();
    unsub();
  });
  return [lock, unlock];
}

var faDiscord = {
  prefix: 'fab',
  iconName: 'discord',
  icon: [448, 512, [], "f392", "M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"]
};
var faGithub = {
  prefix: 'fab',
  iconName: 'github',
  icon: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
};
var faPatreon = {
  prefix: 'fab',
  iconName: 'patreon',
  icon: [512, 512, [], "f3d9", "M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"]
};
var faTwitter = {
  prefix: 'fab',
  iconName: 'twitter',
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
};

var file = "src/components/navbar.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[18] = list[i].title;
  child_ctx[19] = list[i].href;
  child_ctx[20] = list[i].icon;
  child_ctx[21] = list[i].hover;
  child_ctx[23] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[18] = list[i].title;
  child_ctx[19] = list[i].href;
  return child_ctx;
} // (115:6) {#each menu as { title, href }}


function create_each_block_1(ctx) {
  var li;
  var a;
  var t0_value =
  /*title*/
  ctx[18] + "";
  var t0;
  var t1;
  var a_href_value;
  var t2;
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = text(".");
      t2 = space();
      attr_dev(a, "href", a_href_value =
      /*href*/
      ctx[19]);
      attr_dev(a, "class", "svelte-1547yp");
      add_location(a, file, 116, 10, 3303);
      attr_dev(li, "class", "menu-item svelte-1547yp");
      add_location(li, file, 115, 8, 3270);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(a, t1);
      append_dev(li, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(115:6) {#each menu as { title, href }}",
    ctx: ctx
  });
  return block;
} // (122:6) {#each socials as { title, href, icon, hover }


function create_each_block(ctx) {
  var li;
  var a;
  var icon;
  var a_href_value;
  var a_aria_label_value;
  var a_class_value;
  var t;
  var current;
  icon = new Icon({
    props: {
      data:
      /*icon*/
      ctx[20],
      scale: "2"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      create_component(icon.$$.fragment);
      t = space();
      attr_dev(a, "href", a_href_value =
      /*href*/
      ctx[19]);
      attr_dev(a, "aria-label", a_aria_label_value =
      /*title*/
      ctx[18]);
      attr_dev(a, "class", a_class_value = "" + (null_to_empty(
      /*hover*/
      ctx[21]) + " svelte-1547yp"));
      add_location(a, file, 123, 10, 3492);
      attr_dev(li, "class", "menu-item icon svelte-1547yp");
      add_location(li, file, 122, 8, 3454);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      mount_component(icon, a, null);
      append_dev(li, t);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(122:6) {#each socials as { title, href, icon, hover }",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var nav;
  var a;
  var img;
  var img_src_value;
  var a_href_value;
  var t0;
  var div0;
  var button;
  var svg;
  var title;
  var t1;
  var path;
  var t2;
  var div1;
  var ul0;
  var t3;
  var ul1;
  var current;
  var mounted;
  var dispose;
  var each_value_1 =
  /*menu*/
  ctx[6];
  validate_each_argument(each_value_1);
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var each_value =
  /*socials*/
  ctx[7];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var _i = 0; _i < each_value.length; _i += 1) {
    each_blocks[_i] = create_each_block(get_each_context(ctx, each_value, _i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      nav = element("nav");
      a = element("a");
      img = element("img");
      t0 = space();
      div0 = element("div");
      button = element("button");
      svg = svg_element("svg");
      title = svg_element("title");
      t1 = text("Menu");
      path = svg_element("path");
      t2 = space();
      div1 = element("div");
      ul0 = element("ul");

      for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
        each_blocks_1[_i2].c();
      }

      t3 = space();
      ul1 = element("ul");

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      attr_dev(img, "class", "h-10 sm:h-10 py-2");
      if (img.src !== (img_src_value = "/images/logo-" + (
      /*isWhiteLogo*/
      ctx[4] ? "white" : "black") + ".png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "speedsouls logo");
      add_location(img, file, 90, 4, 2500);
      attr_dev(a, "href", a_href_value =
      /*$url*/
      ctx[3]("/"));
      attr_dev(a, "class", "h-full flex flex-col justify-center svelte-1547yp");
      add_location(a, file, 89, 2, 2429);
      add_location(title, file, 107, 8, 2985);
      attr_dev(path, "d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z");
      add_location(path, file, 108, 8, 3013);
      attr_dev(svg, "class", "fill-current h-3 w-3");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file, 102, 6, 2856);
      attr_dev(button, "class", "flex items-center px-3 py-2 border rounded svelte-1547yp");
      add_location(button, file, 97, 4, 2708);
      attr_dev(div0, "class", "burger flex flex-col justify-center lg:hidden");
      add_location(div0, file, 96, 2, 2644);
      attr_dev(ul0, "class", "links flex flex-col lg:flex-row list-none");
      add_location(ul0, file, 113, 4, 3169);
      attr_dev(ul1, "class", "socials svelte-1547yp");
      add_location(ul1, file, 120, 4, 3368);
      attr_dev(div1, "class", "menu svelte-1547yp");
      attr_dev(div1, "v-click-outside", "onClickOutside");
      add_location(div1, file, 112, 2, 3113);
      attr_dev(nav, "class", "absolute top-0 left-0 right-0 z-10 font-sans text-center flex h-12\n  justify-between px-3 bg-nord6 dark:bg-nord1 svelte-1547yp");
      toggle_class(nav, "transparant",
      /*transparant*/
      ctx[0]);
      toggle_class(nav, "active", !
      /*hidden*/
      ctx[1]);
      toggle_class(nav, "dark",
      /*dark*/
      ctx[5]);
      add_location(nav, file, 82, 0, 2237);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, nav, anchor);
      append_dev(nav, a);
      append_dev(a, img);
      append_dev(nav, t0);
      append_dev(nav, div0);
      append_dev(div0, button);
      append_dev(button, svg);
      append_dev(svg, title);
      append_dev(title, t1);
      append_dev(svg, path);
      /*button_binding*/

      ctx[8](button);
      append_dev(nav, t2);
      append_dev(nav, div1);
      append_dev(div1, ul0);

      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
        each_blocks_1[_i4].m(ul0, null);
      }

      append_dev(div1, t3);
      append_dev(div1, ul1);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].m(ul1, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[9], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*isWhiteLogo*/
      16 && img.src !== (img_src_value = "/images/logo-" + (
      /*isWhiteLogo*/
      ctx[4] ? "white" : "black") + ".png")) {
        attr_dev(img, "src", img_src_value);
      }

      if (!current || dirty &
      /*$url*/
      8 && a_href_value !== (a_href_value =
      /*$url*/
      ctx[3]("/"))) {
        attr_dev(a, "href", a_href_value);
      }

      if (dirty &
      /*menu*/
      64) {
        each_value_1 =
        /*menu*/
        ctx[6];
        validate_each_argument(each_value_1);

        var _i6;

        for (_i6 = 0; _i6 < each_value_1.length; _i6 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i6);

          if (each_blocks_1[_i6]) {
            each_blocks_1[_i6].p(child_ctx, dirty);
          } else {
            each_blocks_1[_i6] = create_each_block_1(child_ctx);

            each_blocks_1[_i6].c();

            each_blocks_1[_i6].m(ul0, null);
          }
        }

        for (; _i6 < each_blocks_1.length; _i6 += 1) {
          each_blocks_1[_i6].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty &
      /*socials*/
      128) {
        each_value =
        /*socials*/
        ctx[7];
        validate_each_argument(each_value);

        var _i7;

        for (_i7 = 0; _i7 < each_value.length; _i7 += 1) {
          var _child_ctx = get_each_context(ctx, each_value, _i7);

          if (each_blocks[_i7]) {
            each_blocks[_i7].p(_child_ctx, dirty);

            transition_in(each_blocks[_i7], 1);
          } else {
            each_blocks[_i7] = create_each_block(_child_ctx);

            each_blocks[_i7].c();

            transition_in(each_blocks[_i7], 1);

            each_blocks[_i7].m(ul1, null);
          }
        }

        group_outros();

        for (_i7 = each_value.length; _i7 < each_blocks.length; _i7 += 1) {
          out(_i7);
        }

        check_outros();
      }

      if (dirty &
      /*transparant*/
      1) {
        toggle_class(nav, "transparant",
        /*transparant*/
        ctx[0]);
      }

      if (dirty &
      /*hidden*/
      2) {
        toggle_class(nav, "active", !
        /*hidden*/
        ctx[1]);
      }

      if (dirty &
      /*dark*/
      32) {
        toggle_class(nav, "dark",
        /*dark*/
        ctx[5]);
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i8 = 0; _i8 < each_value.length; _i8 += 1) {
        transition_in(each_blocks[_i8]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        transition_out(each_blocks[_i9]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(nav);
      /*button_binding*/

      ctx[8](null);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
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
    return $$invalidate(3, $url = $$value);
  });
  var _env$env = {
    "env": {
      "VUE_APP_WIKI": "https://wiki.speedsouls.com",
      "VUE_APP_DISCORD": "http://discord.speedsouls.com",
      "VUE_APP_DISCORD_SERVER_ID": "81303778900316160",
      "VUE_APP_PATREON": "https://www.patreon.com/speedsouls",
      "VUE_APP_TWITTER": "https://twitter.com/soulsruns",
      "VUE_APP_GITHUB": "https://github.com/CapitaineToinon/SpeedSouls",
      "VUE_APP_FORUMS": "https://forums.speedsouls.com",
      "VUE_APP_SPEEDRUNCOM": "https://www.speedrun.com"
    }
  }.env,
      VUE_APP_WIKI = _env$env.VUE_APP_WIKI,
      VUE_APP_FORUMS = _env$env.VUE_APP_FORUMS,
      VUE_APP_DISCORD = _env$env.VUE_APP_DISCORD,
      VUE_APP_PATREON = _env$env.VUE_APP_PATREON,
      VUE_APP_TWITTER = _env$env.VUE_APP_TWITTER,
      VUE_APP_GITHUB = _env$env.VUE_APP_GITHUB;

  var _useBodyLocker = useBodyLocker(),
      _useBodyLocker2 = _slicedToArray(_useBodyLocker, 2),
      lock = _useBodyLocker2[0],
      unlock = _useBodyLocker2[1];

  var _$$props$transparant = $$props.transparant,
      transparant = _$$props$transparant === void 0 ? false : _$$props$transparant;
  var hidden = true;
  var dark = false;
  var burger;
  var menu = [{
    title: "Home",
    href: $url("/")
  }, {
    title: "Leaderboards",
    href: $url("/leaderboards")
  }, {
    title: "Wiki",
    href: VUE_APP_WIKI
  }, {
    title: "Forums",
    href: VUE_APP_FORUMS
  }, {
    title: "Submit a run",
    href: $url("/submit")
  }];
  var socials = [{
    title: "discord",
    href: VUE_APP_DISCORD,
    icon: faDiscord,
    hover: "hover:text-discord"
  }, {
    title: "patreon",
    href: VUE_APP_PATREON,
    icon: faPatreon,
    hover: "hover:text-patreon"
  }, {
    title: "twitter",
    href: VUE_APP_TWITTER,
    icon: faTwitter,
    hover: "hover:text-twitter"
  }, {
    title: "github",
    href: VUE_APP_GITHUB,
    icon: faGithub,
    hover: "hover:text-nord10"
  }, {
    title: "settings",
    href: $url("/settings"),
    icon: faCog,
    hover: "hover:text-nord10"
  }];
  onResize(function () {
    return $$invalidate(1, hidden = true);
  });
  onEvent("click", function (_ref3) {
    var target = _ref3.target;
    if (target === burger || burger.contains(target)) return;
    $$invalidate(1, hidden = true);
  });
  var writable_props = ["transparant"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Navbar> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Navbar", $$slots, []);

  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      burger = $$value;
      $$invalidate(2, burger);
    });
  }

  var click_handler = function click_handler() {
    return $$invalidate(1, hidden = !hidden);
  };

  $$self.$$set = function ($$props) {
    if ("transparant" in $$props) $$invalidate(0, transparant = $$props.transparant);
  };

  $$self.$capture_state = function () {
    return {
      VUE_APP_WIKI: VUE_APP_WIKI,
      VUE_APP_FORUMS: VUE_APP_FORUMS,
      VUE_APP_DISCORD: VUE_APP_DISCORD,
      VUE_APP_PATREON: VUE_APP_PATREON,
      VUE_APP_TWITTER: VUE_APP_TWITTER,
      VUE_APP_GITHUB: VUE_APP_GITHUB,
      Icon: Icon,
      onEvent: onEvent,
      onResize: onResize,
      useBodyLocker: useBodyLocker,
      url: url,
      faCog: faCog,
      faDiscord: faDiscord,
      faPatreon: faPatreon,
      faTwitter: faTwitter,
      faGithub: faGithub,
      lock: lock,
      unlock: unlock,
      transparant: transparant,
      hidden: hidden,
      dark: dark,
      burger: burger,
      menu: menu,
      socials: socials,
      $url: $url,
      isWhiteLogo: isWhiteLogo
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("transparant" in $$props) $$invalidate(0, transparant = $$props.transparant);
    if ("hidden" in $$props) $$invalidate(1, hidden = $$props.hidden);
    if ("dark" in $$props) $$invalidate(5, dark = $$props.dark);
    if ("burger" in $$props) $$invalidate(2, burger = $$props.burger);
    if ("isWhiteLogo" in $$props) $$invalidate(4, isWhiteLogo = $$props.isWhiteLogo);
  };

  var isWhiteLogo;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*transparant*/
    1) {
       $$invalidate(4, isWhiteLogo = dark || transparant);
    }

    if ($$self.$$.dirty &
    /*hidden*/
    2) {
       hidden ? unlock() : lock();
    }
  };

  return [transparant, hidden, burger, $url, isWhiteLogo, dark, menu, socials, button_binding, click_handler];
}

var Navbar = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Navbar, _SvelteComponentDev);

  var _super = _createSuper(Navbar);

  function Navbar(options) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      transparant: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Navbar",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Navbar, [{
    key: "transparant",
    get: function get() {
      throw new Error("<Navbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Navbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Navbar;
}(SvelteComponentDev);

var file$1 = "src/components/footer.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[5] = list[i].title;
  child_ctx[6] = list[i].href;
  child_ctx[7] = list[i].hover;
  child_ctx[8] = list[i].icon;
  return child_ctx;
} // (52:6) {#each socials as { title, href, hover, icon }}


function create_each_block$1(ctx) {
  var div;
  var a;
  var icon;
  var t0;
  var p;
  var t1_value =
  /*title*/
  ctx[5] + "";
  var t1;
  var a_href_value;
  var a_class_value;
  var t2;
  var current;
  icon = new Icon({
    props: {
      data:
      /*icon*/
      ctx[8],
      scale: "3"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div = element("div");
      a = element("a");
      create_component(icon.$$.fragment);
      t0 = space();
      p = element("p");
      t1 = text(t1_value);
      t2 = space();
      attr_dev(p, "class", "mt-2");
      add_location(p, file$1, 55, 12, 1615);
      attr_dev(a, "href", a_href_value =
      /*href*/
      ctx[6]);
      attr_dev(a, "class", a_class_value =
      /*hover*/
      ctx[7]);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noopener");
      add_location(a, file$1, 53, 10, 1500);
      add_location(div, file$1, 52, 8, 1484);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a);
      mount_component(icon, a, null);
      append_dev(a, t0);
      append_dev(a, p);
      append_dev(p, t1);
      append_dev(div, t2);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(icon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(52:6) {#each socials as { title, href, hover, icon }}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var footer;
  var div2;
  var div0;
  var t0;
  var div1;
  var t1;
  var a0;
  var t3;
  var a1;
  var t5;
  var current;
  var each_value =
  /*socials*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      footer = element("footer");
      div2 = element("div");
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t0 = space();
      div1 = element("div");
      t1 = text("Site created by the SpeedSouls team. Please visit our\n      ");
      a0 = element("a");
      a0.textContent = "Github";
      t3 = text("\n      to report any issues. This work is licensed under a\n      ");
      a1 = element("a");
      a1.textContent = "CC BY-NC-ND 4.0 Int'l License";
      t5 = text("\n      .");
      attr_dev(div0, "class", "socials text-nord0 dark:text-nord6 py-12 grid grid-cols-4 gap-4\n      text-center");
      add_location(div0, file$1, 47, 4, 1315);
      attr_dev(a0, "href", "VUE_APP_GITHUB");
      add_location(a0, file$1, 66, 6, 1897);
      attr_dev(a1, "href", "https://creativecommons.org/licenses/by-nc-nd/4.0/");
      add_location(a1, file$1, 68, 6, 1997);
      attr_dev(div1, "class", "pt-4 mt-4 text-nord0 dark:text-nord6 text-xs border-t border-nord5\n      dark:border-nord3 text-center");
      add_location(div1, file$1, 61, 4, 1703);
      attr_dev(div2, "class", "container");
      add_location(div2, file$1, 46, 2, 1287);
      attr_dev(footer, "class", "font-sans shadow-md bg-nord6 dark:bg-nord1 py-5 px-6");
      add_location(footer, file$1, 45, 0, 1215);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, footer, anchor);
      append_dev(footer, div2);
      append_dev(div2, div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(div0, null);
      }

      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, t1);
      append_dev(div1, a0);
      append_dev(div1, t3);
      append_dev(div1, a1);
      append_dev(div1, t5);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*socials*/
      1) {
        each_value =
        /*socials*/
        ctx[0];
        validate_each_argument(each_value);

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block$1(child_ctx);

            each_blocks[_i3].c();

            transition_in(each_blocks[_i3], 1);

            each_blocks[_i3].m(div0, null);
          }
        }

        group_outros();

        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(footer);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _env$env = {
    "env": {
      "VUE_APP_WIKI": "https://wiki.speedsouls.com",
      "VUE_APP_DISCORD": "http://discord.speedsouls.com",
      "VUE_APP_DISCORD_SERVER_ID": "81303778900316160",
      "VUE_APP_PATREON": "https://www.patreon.com/speedsouls",
      "VUE_APP_TWITTER": "https://twitter.com/soulsruns",
      "VUE_APP_GITHUB": "https://github.com/CapitaineToinon/SpeedSouls",
      "VUE_APP_FORUMS": "https://forums.speedsouls.com",
      "VUE_APP_SPEEDRUNCOM": "https://www.speedrun.com"
    }
  }.env,
      VUE_APP_DISCORD = _env$env.VUE_APP_DISCORD,
      VUE_APP_PATREON = _env$env.VUE_APP_PATREON,
      VUE_APP_TWITTER = _env$env.VUE_APP_TWITTER,
      VUE_APP_GITHUB = _env$env.VUE_APP_GITHUB;
  var socials = [{
    title: "Discord",
    href: VUE_APP_DISCORD,
    hover: "hover:text-discord",
    icon: faDiscord
  }, {
    title: "Patreon",
    href: VUE_APP_PATREON,
    hover: "hover:text-patreon",
    icon: faPatreon
  }, {
    title: "Twitter",
    href: VUE_APP_TWITTER,
    hover: "hover:text-twitter",
    icon: faTwitter
  }, {
    title: "Github",
    href: VUE_APP_GITHUB,
    hover: "hover:text-nord10",
    icon: faGithub
  }];
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Footer", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Icon: Icon,
      VUE_APP_DISCORD: VUE_APP_DISCORD,
      VUE_APP_PATREON: VUE_APP_PATREON,
      VUE_APP_TWITTER: VUE_APP_TWITTER,
      VUE_APP_GITHUB: VUE_APP_GITHUB,
      faDiscord: faDiscord,
      faPatreon: faPatreon,
      faTwitter: faTwitter,
      faGithub: faGithub,
      socials: socials
    };
  };

  return [socials];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

var file$2 = "src/pages/_layout.svelte";

function create_fragment$2(ctx) {
  var navbar;
  var t0;
  var main;
  var t1;
  var footer;
  var current;
  navbar = new Navbar({
    $$inline: true
  });
  var default_slot_template =
  /*$$slots*/
  ctx[1]["default"];
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(navbar.$$.fragment);
      t0 = space();
      main = element("main");
      if (default_slot) default_slot.c();
      t1 = space();
      create_component(footer.$$.fragment);
      attr_dev(main, "class", "has-fixed-navbar flex-grow z-0 bg-nord4 dark:bg-nord0");
      add_location(main, file$2, 6, 0, 133);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(navbar, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, main, anchor);

      if (default_slot) {
        default_slot.m(main, null);
      }

      insert_dev(target, t1, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(navbar.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(navbar, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(main);
      if (default_slot) default_slot.d(detaching);
      if (detaching) detach_dev(t1);
      destroy_component(footer, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
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
      NavBar: Navbar,
      Footer: Footer
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
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Layout;
}(SvelteComponentDev);

export default Layout;
//# sourceMappingURL=_layout-bbb09ebd.js.map
