
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { _ as _inherits, a as _createSuper, b as _classCallCheck, i as init, s as safe_not_equal, c as _assertThisInitialized, d as dispatch_dev, g as _createClass, S as SvelteComponentDev, v as validate_slots, m as element, q as attr_dev, r as add_location, e as insert_dev, l as _slicedToArray, n as noop, f as detach_dev, t as text, p as space, E as svg_element, x as append_dev, Y as set_data_dev, V as handle_promise, R as empty, B as transition_in, C as transition_out, h as validate_each_argument, y as create_component, A as mount_component, D as destroy_component, H as group_outros, I as check_outros, J as destroy_each } from './main-f883e670.js';
import { b as getRun } from './api-29f5fb02.js';
import { A as Alert } from './alert-234bc3cd.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var getYoutubeId = createCommonjsModule(function (module, exports) {
(function (root, factory) {
  {
    module.exports = factory();
  }
}(commonjsGlobal, function (exports) {

  return function (url, opts) {
    if (opts == undefined) {
      opts = {fuzzy: true};
    }

    if (/youtu\.?be/.test(url)) {

      // Look first for known patterns
      var i;
      var patterns = [
        /youtu\.be\/([^#\&\?]{11})/,  // youtu.be/<id>
        /\?v=([^#\&\?]{11})/,         // ?v=<id>
        /\&v=([^#\&\?]{11})/,         // &v=<id>
        /embed\/([^#\&\?]{11})/,      // embed/<id>
        /\/v\/([^#\&\?]{11})/         // /v/<id>
      ];

      // If any pattern matches, return the ID
      for (i = 0; i < patterns.length; ++i) {
        if (patterns[i].test(url)) {
          return patterns[i].exec(url)[1];
        }
      }

      if (opts.fuzzy) {
        // If that fails, break it apart by certain characters and look 
        // for the 11 character key
        var tokens = url.split(/[\/\&\?=#\.\s]/g);
        for (i = 0; i < tokens.length; ++i) {
          if (/^[^#\&\?]{11}$/.test(tokens[i])) {
            return tokens[i];
          }
        }
      }
    }

    return null;
  };

}));
});

var file = "src/components/video.svelte"; // (30:2) {:else}

function create_else_block(ctx) {
  var t0;
  var a;
  var t1;
  var t2;
  var div;
  var strong;
  var t4;
  var span0;
  var t6;
  var span1;
  var svg;
  var title;
  var t7;
  var path;
  var block = {
    c: function create() {
      t0 = text("Watch at\n    ");
      a = element("a");
      t1 = text(
      /*uri*/
      ctx[1]);
      t2 = space();
      div = element("div");
      strong = element("strong");
      strong.textContent = "Holy smokes!";
      t4 = space();
      span0 = element("span");
      span0.textContent = "Something seriously bad happened.";
      t6 = space();
      span1 = element("span");
      svg = svg_element("svg");
      title = svg_element("title");
      t7 = text("Close");
      path = svg_element("path");
      attr_dev(a, "href",
      /*uri*/
      ctx[1]);
      add_location(a, file, 31, 4, 853);
      attr_dev(strong, "class", "font-bold");
      add_location(strong, file, 38, 6, 1013);
      attr_dev(span0, "class", "block sm:inline");
      add_location(span0, file, 39, 6, 1067);
      add_location(title, file, 47, 10, 1385);
      attr_dev(path, "d", "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2\n            1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1\n            1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758\n            3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z");
      add_location(path, file, 48, 10, 1416);
      attr_dev(svg, "class", "fill-current h-6 w-6 text-red-500");
      attr_dev(svg, "role", "button");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 20 20");
      add_location(svg, file, 41, 8, 1209);
      attr_dev(span1, "class", "absolute top-0 bottom-0 right-0 px-4 py-3");
      add_location(span1, file, 40, 6, 1144);
      attr_dev(div, "class", "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded\n      relative");
      attr_dev(div, "role", "alert");
      add_location(div, file, 33, 4, 884);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, a, anchor);
      append_dev(a, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, strong);
      append_dev(div, t4);
      append_dev(div, span0);
      append_dev(div, t6);
      append_dev(div, span1);
      append_dev(span1, svg);
      append_dev(svg, title);
      append_dev(title, t7);
      append_dev(svg, path);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*uri*/
      2) set_data_dev(t1,
      /*uri*/
      ctx[1]);

      if (dirty &
      /*uri*/
      2) {
        attr_dev(a, "href",
        /*uri*/
        ctx[1]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(a);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(30:2) {:else}",
    ctx: ctx
  });
  return block;
} // (22:21) 


function create_if_block_1(ctx) {
  var iframe;
  var iframe_src_value;
  var block = {
    c: function create() {
      iframe = element("iframe");
      attr_dev(iframe, "title", "Twitch video");
      if (iframe.src !== (iframe_src_value = "https://player.twitch.tv/?video=".concat(
      /*twitchID*/
      ctx[3], "&autoplay=").concat(
      /*autoplay*/
      ctx[0], "&parent=").concat(
      /*parent*/
      ctx[4]))) attr_dev(iframe, "src", iframe_src_value);
      attr_dev(iframe, "frameborder", "0");
      attr_dev(iframe, "scrolling", "no");
      iframe.allowFullscreen = "true";
      add_location(iframe, file, 22, 4, 606);
    },
    m: function mount(target, anchor) {
      insert_dev(target, iframe, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*twitchID, autoplay, parent*/
      25 && iframe.src !== (iframe_src_value = "https://player.twitch.tv/?video=".concat(
      /*twitchID*/
      ctx[3], "&autoplay=").concat(
      /*autoplay*/
      ctx[0], "&parent=").concat(
      /*parent*/
      ctx[4]))) {
        attr_dev(iframe, "src", iframe_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(iframe);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(22:21) ",
    ctx: ctx
  });
  return block;
} // (14:2) {#if youtubeID}


function create_if_block(ctx) {
  var iframe;
  var iframe_src_value;
  var block = {
    c: function create() {
      iframe = element("iframe");
      attr_dev(iframe, "title", "YouTube video");
      if (iframe.src !== (iframe_src_value = "https://www.youtube.com/embed/".concat(
      /*youtubeID*/
      ctx[2]))) attr_dev(iframe, "src", iframe_src_value);
      attr_dev(iframe, "frameborder", "0");
      attr_dev(iframe, "scrolling", "no");
      iframe.allowFullscreen = "true";
      add_location(iframe, file, 14, 4, 398);
    },
    m: function mount(target, anchor) {
      insert_dev(target, iframe, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*youtubeID*/
      4 && iframe.src !== (iframe_src_value = "https://www.youtube.com/embed/".concat(
      /*youtubeID*/
      ctx[2]))) {
        attr_dev(iframe, "src", iframe_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(iframe);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(14:2) {#if youtubeID}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;

  function select_block_type(ctx, dirty) {
    if (
    /*youtubeID*/
    ctx[2]) return create_if_block;
    if (
    /*twitchID*/
    ctx[3]) return create_if_block_1;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  var block = {
    c: function create() {
      div = element("div");
      if_block.c();
      attr_dev(div, "class", "speedsouls-video inverted");
      add_location(div, file, 12, 0, 336);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if_block.m(div, null);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if_block.d();
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

var TWITCH_REGEX = /(?:http(?:s)?:\/\/(?:www.)?)?twitch.tv\/(?:(?:.+?)\/v|videos)\/([0-9]+)/;

function instance($$self, $$props, $$invalidate) {
  var _$$props$autoplay = $$props.autoplay,
      autoplay = _$$props$autoplay === void 0 ? false : _$$props$autoplay;
  var uri = $$props.uri;
  var writable_props = ["autoplay", "uri"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Video> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Video", $$slots, []);

  $$self.$$set = function ($$props) {
    if ("autoplay" in $$props) $$invalidate(0, autoplay = $$props.autoplay);
    if ("uri" in $$props) $$invalidate(1, uri = $$props.uri);
  };

  $$self.$capture_state = function () {
    return {
      TWITCH_REGEX: TWITCH_REGEX,
      getIdFromUrl: getYoutubeId,
      autoplay: autoplay,
      uri: uri,
      youtubeID: youtubeID,
      twitchID: twitchID,
      parent: parent
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("autoplay" in $$props) $$invalidate(0, autoplay = $$props.autoplay);
    if ("uri" in $$props) $$invalidate(1, uri = $$props.uri);
    if ("youtubeID" in $$props) $$invalidate(2, youtubeID = $$props.youtubeID);
    if ("twitchID" in $$props) $$invalidate(3, twitchID = $$props.twitchID);
    if ("parent" in $$props) $$invalidate(4, parent = $$props.parent);
  };

  var youtubeID;
  var twitchID;
  var parent;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*uri*/
    2) {
       $$invalidate(2, youtubeID = getYoutubeId(uri));
    }

    if ($$self.$$.dirty &
    /*uri*/
    2) {
      var _TWITCH_REGEX$exec;

       $$invalidate(3, twitchID = ((_TWITCH_REGEX$exec = TWITCH_REGEX.exec(uri)) === null || _TWITCH_REGEX$exec === void 0 ? void 0 : _TWITCH_REGEX$exec[1]) || null);
    }
  };

   $$invalidate(4, parent = window.location.hostname);

  return [autoplay, uri, youtubeID, twitchID, parent];
}

var Video = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Video, _SvelteComponentDev);

  var _super = _createSuper(Video);

  function Video(options) {
    var _this;

    _classCallCheck(this, Video);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      autoplay: 0,
      uri: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Video",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*uri*/
    ctx[1] === undefined && !("uri" in props)) {
      console.warn("<Video> was created without expected prop 'uri'");
    }

    return _this;
  }

  _createClass(Video, [{
    key: "autoplay",
    get: function get() {
      throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "uri",
    get: function get() {
      throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Video;
}(SvelteComponentDev);

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i].uri;
  return child_ctx;
} // (19:0) {:catch error}


function create_catch_block(ctx) {
  var alert;
  var current;
  alert = new Alert({
    props: {
      $$slots: {
        "default": [create_default_slot_1]
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
      /*$$scope, promise*/
      129) {
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
    id: create_catch_block.name,
    type: "catch",
    source: "(19:0) {:catch error}",
    ctx: ctx
  });
  return block;
} // (20:2) <Alert>


function create_default_slot_1(ctx) {
  var t_value =
  /*error*/
  ctx[6] + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*promise*/
      1 && t_value !== (t_value =
      /*error*/
      ctx[6] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(20:2) <Alert>",
    ctx: ctx
  });
  return block;
} // (12:0) {:then run}


function create_then_block(ctx) {
  var _ctx$2$videos;

  var each_1_anchor;
  var current;
  var each_value =
  /*run*/
  ((_ctx$2$videos = ctx[2].videos) === null || _ctx$2$videos === void 0 ? void 0 : _ctx$2$videos.links) || [];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var each_1_else = null;

  if (!each_value.length) {
    each_1_else = create_else_block$1(ctx);
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();

      if (each_1_else) {
        each_1_else.c();
      }
    },
    m: function mount(target, anchor) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);

      if (each_1_else) {
        each_1_else.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*promise*/
      1) {
        var _ctx$2$videos2;

        each_value =
        /*run*/
        ((_ctx$2$videos2 = ctx[2].videos) === null || _ctx$2$videos2 === void 0 ? void 0 : _ctx$2$videos2.links) || [];
        validate_each_argument(each_value);

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            transition_in(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            transition_in(each_blocks[_i3], 1);

            each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        check_outros();

        if (!each_value.length && each_1_else) {
          each_1_else.p(ctx, dirty);
        } else if (!each_value.length) {
          each_1_else = create_else_block$1(ctx);
          each_1_else.c();
          transition_in(each_1_else, 1);
          each_1_else.m(each_1_anchor.parentNode, each_1_anchor);
        } else if (each_1_else) {
          group_outros();
          transition_out(each_1_else, 1, 1, function () {
            each_1_else = null;
          });
          check_outros();
        }
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
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(each_1_anchor);
      if (each_1_else) each_1_else.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_then_block.name,
    type: "then",
    source: "(12:0) {:then run}",
    ctx: ctx
  });
  return block;
} // (16:2) {:else}


function create_else_block$1(ctx) {
  var alert;
  var current;
  alert = new Alert({
    props: {
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
      128) {
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
    id: create_else_block$1.name,
    type: "else",
    source: "(16:2) {:else}",
    ctx: ctx
  });
  return block;
} // (17:4) <Alert>


function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("There are no videos.");
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
    source: "(17:4) <Alert>",
    ctx: ctx
  });
  return block;
} // (14:2) {#each run.videos?.links || [] as { uri }}


function create_each_block(ctx) {
  var video;
  var current;
  video = new Video({
    props: {
      uri:
      /*uri*/
      ctx[3]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(video.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(video, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var video_changes = {};
      if (dirty &
      /*promise*/
      1) video_changes.uri =
      /*uri*/
      ctx[3];
      video.$set(video_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(video.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(video.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(video, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(14:2) {#each run.videos?.links || [] as { uri }}",
    ctx: ctx
  });
  return block;
} // (10:16)    Loading... {:then run}


function create_pending_block(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Loading...");
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
    id: create_pending_block.name,
    type: "pending",
    source: "(10:16)    Loading... {:then run}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var await_block_anchor;
  var promise_1;
  var current;
  var info = {
    ctx: ctx,
    current: null,
    token: null,
    pending: create_pending_block,
    then: create_then_block,
    "catch": create_catch_block,
    value: 2,
    error: 6,
    blocks: [,,,]
  };
  handle_promise(promise_1 =
  /*promise*/
  ctx[0], info);
  var block = {
    c: function create() {
      await_block_anchor = empty();
      info.block.c();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);

      info.mount = function () {
        return await_block_anchor.parentNode;
      };

      info.anchor = await_block_anchor;
      current = true;
    },
    p: function update(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;
      info.ctx = ctx;

      if (dirty &
      /*promise*/
      1 && promise_1 !== (promise_1 =
      /*promise*/
      ctx[0]) && handle_promise(promise_1, info)) ; else {
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
      if (detaching) detach_dev(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
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
  var id = $$props.id;
  var writable_props = ["id"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bidu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bidu5D", $$slots, []);

  $$self.$$set = function ($$props) {
    if ("id" in $$props) $$invalidate(1, id = $$props.id);
  };

  $$self.$capture_state = function () {
    return {
      getRun: getRun,
      Video: Video,
      Alert: Alert,
      id: id,
      promise: promise
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("id" in $$props) $$invalidate(1, id = $$props.id);
    if ("promise" in $$props) $$invalidate(0, promise = $$props.promise);
  };

  var promise;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*id*/
    2) {
       $$invalidate(0, promise = getRun(id));
    }
  };

  return [promise, id];
}

var U5Bidu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bidu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bidu5D);

  function U5Bidu5D(options) {
    var _this;

    _classCallCheck(this, U5Bidu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      id: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bidu5D",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*id*/
    ctx[1] === undefined && !("id" in props)) {
      console.warn("<U5Bidu5D> was created without expected prop 'id'");
    }

    return _this;
  }

  _createClass(U5Bidu5D, [{
    key: "id",
    get: function get() {
      throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bidu5D;
}(SvelteComponentDev);

export default U5Bidu5D;
//# sourceMappingURL=[id]-04cdb922.js.map
