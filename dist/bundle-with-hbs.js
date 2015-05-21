webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var mainTemp = __webpack_require__(3);

	document.querySelector('.main').innerHTML = mainTemp({file: 'MAIN'});


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(8);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper;

	  return "<h1>I come from the main bundle "
	    + this.escapeExpression(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"file","hash":{},"data":data}) : helper)))
	    + ".hbs</h1>\n";
	},"useData":true});

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(9)['default'];


/***/ }

});