(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{497:function(n,c,t){},544:function(n,c,t){"use strict";var o=t(497);t.n(o).a},556:function(n,c,t){"use strict";t.r(c);t(10),t(4),t(19);var o={components:{svgIcon:t(358).a},data:function(){return{iconList:[]}},methods:{choiceIcon:function(n){console.log("choiceIcon -> item",n)}},mounted:function(){var n=t(359);this.iconList=n.keys().map((function(n){var c=n.replace("./","").replace(".svg","");return{name:c,plug:'<svg-icon icon-class="'.concat(c,'" />')}}))}},i=(t(544),t(1)),s=Object(i.a)(o,(function(){var n=this,c=n.$createElement,t=n._self._c||c;return t("ul",{staticClass:"icon-list"},n._l(n.iconList,(function(c,o){return t("li",{key:o},[t("svg-icon",{staticClass:"obit-link",attrs:{"icon-class":c.name},on:{click:function(t){return n.choiceIcon(c)}}}),n._v(" "),t("br"),n._v(" "),t("span",[n._v(n._s(c.plug))])],1)})),0)}),[],!1,null,"2ac63ab4",null);c.default=s.exports}}]);