(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-product-component-test-product-module"],{

/***/ "Vs/m":
/*!***************************************************************!*\
  !*** ./src/app/test-product-component/test-product.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, TestProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestProductModule", function() { return TestProductModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-product.component */ "2FX1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _test_product_component__WEBPACK_IMPORTED_MODULE_2__["TestProductComponent"] }
];
class TestProductModule {
}
TestProductModule.ɵfac = function TestProductModule_Factory(t) { return new (t || TestProductModule)(); };
TestProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TestProductModule });
TestProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TestProductModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=test-product-component-test-product-module.js.map