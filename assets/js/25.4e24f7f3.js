(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{190:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("A curated list of plugins and modules for objection. Only plugins that follow "),n("router-link",{attrs:{to:"/guide/contributing.html#plugin-development-best-practices"}},[t._v("the best practices")]),t._v(" are accepted on this list. Other modules like plugins for other frameworks and things that cannot be implemented following the best practices are an exception to this rule. If you are a developer of or otherwise know of a good plugin/module for objection, please create a pull request or an issue to get it added to this list.")],1),t._v(" "),t._m(1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/snlamm/objection-dynamic-finder",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-dynamic-finder"),n("OutboundLink")],1),t._v(" - dynamic finders for your models")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Vincit/objection-db-errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-db-errors"),n("OutboundLink")],1),t._v(" - better database errors for your queries")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/seegno/objection-guid",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-guid"),n("OutboundLink")],1),t._v(" - automatic guid for your models")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/scoutforpets/objection-password",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-password"),n("OutboundLink")],1),t._v(" - automatic password hashing for your models")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/griffinpp/objection-soft-delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-soft-delete"),n("OutboundLink")],1),t._v(" - Soft delete functionality with minimal configuration")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/seegno/objection-unique",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-unique"),n("OutboundLink")],1),t._v(" - Unique validation for your models")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/oscaroox/objection-visibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-visibility"),n("OutboundLink")],1),t._v(" - whitelist/blacklist your model properties")])]),t._v(" "),t._m(2),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/tandg-digital/objection-filter",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-filter"),n("OutboundLink")],1),t._v(" - API filtering on data and related models")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vincit/objection-graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("objection-graphql"),n("OutboundLink")],1),t._v(" - Automatically generates rich graphql schema for objection models")])]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("When possible, objection.js plugins should be implemented as "),n("a",{attrs:{href:"http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("class mixins"),n("OutboundLink")],1),t._v(". A mixin is simply a function that takes a class as an argument and returns a subclass. Plugins should not modify "),n("router-link",{attrs:{to:"/api/model/"}},[t._v("objection.Model")]),t._v(", "),n("router-link",{attrs:{to:"/api/query-builder/"}},[t._v("objection.QueryBuilder")]),t._v(" or any other global variables directly. See the "),n("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("example plugin"),n("OutboundLink")],1),t._v(" for more info. There is also "),n("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/plugin-with-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("another example"),n("OutboundLink")],1),t._v(" that should be followed if your plugin takes options or configuration parameters.")],1),t._v(" "),n("p",[t._v("Mixin is just a function that takes a class and returns an extended subclass.")]),t._v(" "),t._m(4),n("p",[t._v("Mixins can be then applied like this:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),n("p",[t._v("Multiple mixins:")]),t._v(" "),t._m(8),n("p",[t._v("There are a couple of helpers in objection main module for applying multiple mixins.")]),t._v(" "),t._m(9),t._m(10),n("p",[t._v("Mixins can also be used as decorators:")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3rd-party-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-party-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" 3rd party plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"other-3rd-party-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-3rd-party-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Other 3rd party modules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"plugin-development-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-development-best-practices","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugin development best practices")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Model")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The returned class should have no name. That way")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the superclass's name gets inherited.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("extends")]),t._v(" Model "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your modifications.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This "),s("strong",[this._v("doesn't")]),this._v(" work since mixins never modify the input:")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This does absolutely nothing.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SomeMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SomeOtherMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mixin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Model "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'objection'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  SomeMixin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  SomeOtherMixin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EvenMoreMixins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  LolSoManyMixins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImAMixinWithOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" compose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Model "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'objection'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mixins "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  SomeMixin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  SomeOtherMixin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EvenMoreMixins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  LolSoManyMixins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImAMixinWithOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mixins")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("@SomeMixin\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MixinWithOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=a.exports}}]);