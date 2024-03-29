import { u as useRoute } from '../server.mjs';
import { ref, resolveComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const product = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/products" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back`);
          } else {
            return [
              createTextVNode("Back")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(product)) {
        _push(`<div><img${ssrRenderAttr("src", unref(product).thumbnail)}${ssrRenderAttr("alt", unref(product).title)}><h1>${ssrInterpolate(unref(product).title)}</h1><p>${ssrInterpolate(unref(product).price)}</p><p>${ssrInterpolate(unref(product).description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-nz8Sy1Gz.mjs.map
