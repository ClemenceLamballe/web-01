"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = Router;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
// TODO #export-router: remove this IIFE
//(function () {
/**
 * Append an html template to the document, at the given outlet.
 * @param HTMLElement outlet the location on the document to add the template
 * @param HTMLElement template the template to append
 *
function renderTemplate(outlet, template) {
  // TODO #spa: use the DOM API to remove all childNodes of the outlet element
  // TODO #spa: use the DOM API to append the 'template' element as a child of the 'outlet' element
  while (outlet.lastChild) {
    outlet.removeChild(outlet.lastChild);
   }
  outlet.appendChild(template);
 }*/

function renderTemplate(outlet, template) {
  while (outlet.lastChild) {
    outlet.removeChild(outlet.lastChild);
  }
  outlet.appendChild(template);
}
/**
 * Create a new router. This router will load components into the given outlet.
 * @param {HTMLElement} outlet The element to put components into.
 */

// TODO #export-router: export this function
function Router(outlet) {
  var _this2 = this;
  this._components = {};
  this._templates = {};
  this._outlet = outlet;
  window.addEventListener("beforeunload", function (event) {
    return _this2._onLocationChanged();
  });
  window.addEventListener("hashchange", function (event) {
    return _this2._onLocationChanged(event.newURL);
  });
}
// TODO #export-router: remove this assignation
//window.Router = Router;

/**
 * Bind a component ot be displayed when the registered URL is reached.
 * @param hash
 * @param componentEntry
 * @returns {Router}
 */
Router.prototype.register = function (hash, componentEntry) {
  var path = "#".concat(hash);
  if (!componentEntry) {
    throw new TypeError("provided arg should be a Component. Got: ".concat(componentEntry));
  }
  if (typeof hash !== "string") {
    throw new TypeError("provided route url should be a string. Got: ".concat(hash));
  } else {
    this._components[path] = componentEntry;
  }
  if (componentEntry.templateUrl) {
    if (!this._templates[componentEntry.templateUrl]) {
      this._templates[componentEntry.templateUrl] = true;
      var _this = this;
      _fetchTemplate(componentEntry.templateUrl, function (template) {
        componentEntry.template = template;
        if (_getRouteHash(window.location.href) === path) {
          _this._renderComponent(_this._components[path]);
        }
      });
    } else if (_getRouteHash(window.location.href) === path) {
      _this._renderComponent(_this._components[path]);
    }
  } else {
    if (_getRouteHash(window.location.href) === path) {
      this._renderComponent(this._components[path]);
    }
  }
  return this;
};
Router.prototype._renderComponent = function (componentEntry) {
  var component = new componentEntry.component();
  var outlet = this._outlet;
  var element = document.createElement("template");
  element.innerHTML = componentEntry.template || component.template || component.getTemplate && component.getTemplate();
  renderTemplate(outlet, element.content.cloneNode(true));
  if (typeof component.init === "function") {
    component.init();
  }
};
Router.prototype._onLocationChanged = function (loc) {
  if (!loc) {
    return;
  }
  var path = _getRouteHash(loc);
  var componentEntry = this._components[path];
  if (componentEntry) {
    this._renderComponent(componentEntry);
  } else if (loc.startsWith(window.location.origin)) {
    console.warn("navigated to \"".concat(loc, ", but no component was registered at this address\""));
  }
};
function _getRouteHash(url) {
  return new URL(url).hash.split("?")[0] || "#";
}
function _fetchTemplate(templateUrl, cb) {
  var xhr = typeof XMLHttpRequest != "undefined" ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("get", templateUrl, true);
  xhr.onreadystatechange = function () {
    var status;
    var data;
    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
    if (xhr.readyState == 4) {
      // `DONE`
      status = xhr.status;
      if (status == 200) {
        data = xhr.responseText;
        cb(data);
      } else {
        throw new Error(status);
      }
    }
  };
  xhr.send();
}
//})();