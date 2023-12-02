(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blogs-aspnet-uiajax-aspnet-uiajax-module"],{

/***/ "bWt2":
/*!*************************************************************!*\
  !*** ./src/app/blogs/aspnet-uiajax/aspnet-uiajax.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, AspNetUiAjaxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspNetUiAjaxModule", function() { return AspNetUiAjaxModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _aspnet_uiajax_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aspnet-uiajax.component */ "EfAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _aspnet_uiajax_component__WEBPACK_IMPORTED_MODULE_4__["AspNetUIAjaxComponent"] }
];
class AspNetUiAjaxModule {
}
AspNetUiAjaxModule.ɵfac = function AspNetUiAjaxModule_Factory(t) { return new (t || AspNetUiAjaxModule)(); };
AspNetUiAjaxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AspNetUiAjaxModule });
AspNetUiAjaxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AspNetUiAjaxModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=blogs-aspnet-uiajax-aspnet-uiajax-module.js.map