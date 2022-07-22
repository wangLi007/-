
// ==UserScript==
// @name         demo-userscript
// @namespace    demo-userscript
// @version      0.0.0
// @include      *
// @run-at       document-end
// ==/UserScript==
(function () {
  'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ".global-module_container__-tGDM {\n  font-size: 16px;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n  min-width: 15em;\n  max-width: 100%;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  padding: 1em;\n  text-align: center;\n}\n\n.global-module_logo__RzTo1 {\n  width: 48px;\n  height: 48px;\n}\n\n.global-module_check__1s-U5 {\n  color: green;\n  vertical-align: middle;\n  margin-right: 0.5em;\n}\n\n.global-module_supports__XdEcd {\n  text-align: left;\n  width: auto;\n  line-height: 2;\n}\n\n.global-module_button__EeOr9 {\n  padding: 0.2em 2em;\n  border-radius: 2px;\n  text-align: center;\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.global-module_hide__63gRn {\n  display: none;\n}\n";
  var style = {"container":"global-module_container__-tGDM","logo":"global-module_logo__RzTo1","check":"global-module_check__1s-U5","supports":"global-module_supports__XdEcd","button":"global-module_button__EeOr9","hide":"global-module_hide__63gRn"};
  styleInject(css_248z$1);

  var img = "data:image/svg+xml,%3csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e %3ctitle%3eTampermonkey%3c/title%3e %3cpath d='M5.955.002C3-.071.275 2.386.043 5.335c-.069 3.32-.011 6.646-.03 9.969.06 1.87-.276 3.873.715 5.573 1.083 2.076 3.456 3.288 5.77 3.105 4.003-.011 8.008.022 12.011-.017 2.953-.156 5.478-2.815 5.482-5.772-.007-4.235.023-8.473-.015-12.708C23.82 2.533 21.16.007 18.205.003c-4.083-.005-8.167 0-12.25-.002zm.447 12.683c2.333-.046 4.506 1.805 4.83 4.116.412 2.287-1.056 4.716-3.274 5.411-2.187.783-4.825-.268-5.874-2.341-1.137-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.948-.99zm11.245 0c2.333-.046 4.505 1.805 4.829 4.116.413 2.287-1.056 4.716-3.273 5.411-2.188.783-4.825-.268-5.875-2.341-1.136-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.949-.99z' /%3e%3c/svg%3e";

  var check = "<symbol id=\"icon-check\" viewBox=\"1 1 15.6 11.9\"><path d=\"M16.3 4l-8.6 8.6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5C1.1 7.5 1 7.2 1 7c0-.3.1-.5.3-.7l1.4-1.4c.2-.2.4-.3.7-.3.3 0 .5.1.7.3l3 3 6.6-6.6c0-.2.3-.3.5-.3.3 0 .5.1.7.3l1.4 1.4c.2.2.3.4.3.7 0 .2-.1.4-.3.6\"/></symbol>";

  var css_248z = ".sprite-module_icon__ljZO0 {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n  overflow: hidden;\n  display: inline-block;\n}\n";
  var iconStyle = {"icon":"sprite-module_icon__ljZO0"};
  styleInject(css_248z);

  const icons = {
    check
  };
  const iconIds = Object.fromEntries(Object.entries(icons).map(_ref => {
    var _value$match;

    let [name, value] = _ref;
    return [name, (_value$match = value.match(/<symbol id="([^"]+)"/)) === null || _value$match === void 0 ? void 0 : _value$match[1]];
  }));
  const xmlns = 'http://www.w3.org/2000/svg';
  const xlink = 'http://www.w3.org/1999/xlink';
  const svgSpriteElement = document.createElementNS(xmlns, 'svg');
  svgSpriteElement.setAttribute('aria-hidden', 'true');
  svgSpriteElement.setAttribute('style', 'position: absolute; width: 0; height: 0; overflow: hidden;');
  svgSpriteElement.setAttribute('version', '1.1');
  svgSpriteElement.setAttribute('xmlns', xmlns);
  svgSpriteElement.setAttribute('xmlns:xlink', xlink);
  svgSpriteElement.innerHTML = ['<defs>', ...Object.values(icons), '</defs>'].join('');
  document.body.appendChild(svgSpriteElement);
  const renderIcon = function (iconId) {
    const svgElement = document.createElementNS(xmlns, 'svg');
    const useElement = document.createElementNS(xmlns, 'use');

    for (var _len = arguments.length, classList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      classList[_key - 1] = arguments[_key];
    }

    svgElement.classList.add(iconStyle.icon, ...classList);
    useElement.setAttributeNS(xlink, 'href', `#${iconIds[iconId]}`);
    svgElement.appendChild(useElement);
    return svgElement;
  };

  var title$1 = "开始开发你的脚本吧～";
  var zhJSON = {
  	title: title$1,
  	"support-es": "支持 ESNext",
  	"support-css": "支持 CSS Modules（如果需要 scss，安装 node-sass 即可使用）",
  	"support-static": "支持静态资源（图片和SVG）",
  	"support-svg-sprite": "支持 SVG 雪碧图",
  	"support-locale": "支持国际化",
  	"support-plugin": "内部由 rollup 支撑，可以通过插件做扩展",
  	"got-it": "了解了"
  };

  var title = "Start create awesome userscript";
  var enJSON = {
  	title: title,
  	"support-es": "Support ESNext",
  	"support-css": "Support CSS Modules (Install node-sass package to enable scss)",
  	"support-static": "Support static resources(image, svg)",
  	"support-svg-sprite": "Support SVG Sprite",
  	"support-locale": "Support locale languages",
  	"support-plugin": "Build with Rollup, you can add external plugins",
  	"got-it": "Got It"
  };

  var _navigator$languages;
  let localeMessage = {};

  const setLocale = lang => {
    localeMessage = lang === 'zh-CN' ? zhJSON : enJSON;
  };

  setLocale(navigator.language ?? ((_navigator$languages = navigator.languages) === null || _navigator$languages === void 0 ? void 0 : _navigator$languages[0]));
  function t (key) {
    return localeMessage[key] ?? '';
  }

  const container = document.createElement('div');
  container.classList.add(style.container);
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', img);
  imgEl.classList.add(style.logo);
  container.appendChild(imgEl);
  const mainEl = document.createElement('main');
  mainEl.innerHTML = `<h1>${t('title').toUpperCase()}</h1>` + `<ul class=${style.supports}>
  ${['support-es', 'support-css', 'support-static', 'support-svg-sprite', 'support-locale', 'support-plugin'].map(key => `<li>${renderIcon('check', style.check).outerHTML}${t(key)}</li>`).join('\n')}
  </ul>
  `;
  container.appendChild(mainEl);
  const getItButton = document.createElement('div');
  getItButton.textContent = t('got-it');
  getItButton.classList.add(style.button);
  container.appendChild(getItButton);
  getItButton.addEventListener('click', () => {
    container.classList.add(style.hide);
  });
  document.body.appendChild(container);

})();
