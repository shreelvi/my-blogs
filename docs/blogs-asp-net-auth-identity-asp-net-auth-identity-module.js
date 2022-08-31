(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blogs-asp-net-auth-identity-asp-net-auth-identity-module"],{

/***/ "/Q77":
/*!*****************************************************************************!*\
  !*** ./src/app/blogs/asp-net-auth-identity/asp-net-auth-identity.module.ts ***!
  \*****************************************************************************/
/*! exports provided: routes, AspNetAuthIdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspNetAuthIdentityModule", function() { return AspNetAuthIdentityModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _asp_net_auth_identity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asp-net-auth-identity.component */ "pdNa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _asp_net_auth_identity_component__WEBPACK_IMPORTED_MODULE_4__["AspNetAuthIdentityComponent"] }
];
class AspNetAuthIdentityModule {
}
AspNetAuthIdentityModule.ɵfac = function AspNetAuthIdentityModule_Factory(t) { return new (t || AspNetAuthIdentityModule)(); };
AspNetAuthIdentityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AspNetAuthIdentityModule });
AspNetAuthIdentityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AspNetAuthIdentityModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "pdNa":
/*!********************************************************************************!*\
  !*** ./src/app/blogs/asp-net-auth-identity/asp-net-auth-identity.component.ts ***!
  \********************************************************************************/
/*! exports provided: AspNetAuthIdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspNetAuthIdentityComponent", function() { return AspNetAuthIdentityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class AspNetAuthIdentityComponent {
    constructor(title) {
        this.title = title;
        this.pageId = "/blog-auth";
        this.title.setTitle('Blogs | Authentication and Authorization on ASP.NET Core Web API with Angular SPA using Identity (JWT Token)');
        this.loadScripts();
    }
    ngOnInit() {
    }
    loadScripts() {
        const dynamicScripts = [
            'https://platform.twitter.com/widgets.js'
        ];
        for (let i = 0; i < dynamicScripts.length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = true;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
}
AspNetAuthIdentityComponent.ɵfac = function AspNetAuthIdentityComponent_Factory(t) { return new (t || AspNetAuthIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AspNetAuthIdentityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AspNetAuthIdentityComponent, selectors: [["app-asp-net-auth-identity"]], decls: 77, vars: 0, consts: [[1, "ang-matDialog"], ["fxFlex", "", "fxLayout", "column"], [1, "article-content"], [1, "header-center"], [1, "category"], [1, "blog-title"], [1, "author-info"], [1, "namee"], [1, "nameee"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], [1, "date-readtime"], [1, "article-paragraph"], ["href", "#"], [1, "article-header"], ["href", "https://docs.microsoft.com/en-us/aspnet/identity/overview/getting-started/introduction-to-aspnet-identity"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Identity.EntityFrameworkCore/"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Identity/"], ["href", "http://www.nuget.org/packages/Microsoft.IdentityModel.Tokens/"], ["href", "http://www.nuget.org/packages/System.IdentityModel.Tokens.JWT/"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer/"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.OpenIdConnect/"]], template: function AspNetAuthIdentityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ASP.NET tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Authentication and Authorization on ASP.NET Core Web API with Angular SPA using Identity (JWT Token) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Elvis Shrestha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Aug 20 \u00A0 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Securing our application to allow access to users with proper credentials is an important part of an application development. To do this our app needs to authenticate users successfully. Authentication is a process that involves user providing credentials and the app comparing to those stored in a database. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " If the credentials matches, users are authenticated and can access the resources they have Authorization. This process of determining if user is allowed to perform certain action is Authorization. ASP.NET Core provides built in identity providers library to secure ASP.NET Core apps including with SPAs -- Angular, React and other tools like third-party identity services to login using social identities such as Facebook, Twitter and LinkendIn. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " This tutorial will show you how to configure sign-in with ASP.NET Identity in an existing ASP.NET Core Web API SPA with Angular on the front-end. We will implement a JWT token based login and use Identity libraries(NuGet) and some of its features to handle authentication and authorization in our application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "source code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " for this tutorial can be accessed on Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Identity on ASP.NET Core ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " ASP.NET Core Identity is an API that supports user interface (UI) login functionality. Its going to be responsible for allowing new users to register and login to our application with proper credentials. Identity manages users, passwords (string hash password), profile data, roles, claims, tokens, email confirmation, social logins and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " We are going to use only some part of it, issue special JWT tokens to our clients so that they can use to authenticate against our application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " For more information on ASP.NET Identity, see this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Setting up Identity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " First we need to install all the packages for ASP.NET Identity and generating JWT Bearer token so that we can implement the Authentication using OpenID/OAuth 2.0 token and Asp.Net core Identity. Following packages are required in our application: Also we need to configure our application to use 'Microsoft.EntityFrameworkCore.Sql' package to connect to our SQL database with EF Core. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Microsoft.AspNetCore.Identity.EntityFrameworkCore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " This package has the Entity Framework core implementation of ASP.NET Identity core and it will persist the ASP.NET Identity data and schema to SQL Server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Microsoft.AspNetCore.Identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " This ASP.NET Core Identity package is the membership system for building ASP.NET Core web apps. It allows you to add login features to your application and manager the app users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Microsoft.IdentityModel.Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " This package includes types that provide support for SecurityTokens, Cryptographic operations such as Signing, Verifying Signatures, Encryption. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "System.IdentityModel.Tokens.JWT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " This includes types that provide support for creating, serializing and validating JSON Web Tokens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Microsoft.AspNetCore.Authentication.JwtBearer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " This package is a ASP.NET Core middleware that enables an application to receive an OpenID Connect bearer token. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Microsoft.AspNetCore.Authentication.OpenIdConnect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " ASP.NET Core middleware that provide support to the OpenID Connect authentication workflow in ASP.NET Core applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3AtbmV0LWF1dGgtaWRlbnRpdHkuY29tcG9uZW50LnNjc3MifQ== */", ".ang-matDialog[_ngcontent-%COMP%] {\n  margin-top: 91px;\n  padding: 5px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-right: 64px;\n  max-width: 680px;\n  width: 100%;\n  min-width: 0px;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-top: 3.88em;\n  color: #757575;\n  margin-bottom: -0.31em;\n  font-style: normal;\n  letter-spacing: 0.077em;\n  line-height: 18px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.author-info[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 100%;\n  display: block;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.namee[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  align-items: center;\n  display: flex;\n  line-height: 20px;\n  font-size: 14px;\n}\n\n.nameee[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-height: 20px;\n  line-height: 14px;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.date-readtime[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #757575;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.article-paragraph[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n}\n\n.article-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 26px;\n  line-height: 44px;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #f2f2f2;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  font-weight: 300;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  font-weight: 300;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  float: left;\n  font-size: 14px;\n}\n\n.inline-code[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 5px;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n@media only screen and (max-width: 768px) {\n  .article-content[_ngcontent-%COMP%] {\n    margin-left: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1tYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVdBO0VBQ0ksdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0YiLCJmaWxlIjoiYW5nLW1hdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5nLW1hdERpYWxvZ3tcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFydGljbGUtY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5oZWFkZXItY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhdGVnb3J5e1xuICAgIG1hcmdpbi10b3A6IDMuODhlbTtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjMxZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3N2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ibG9nLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxufVxuXG4uYXV0aG9yLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG5cbn1cblxuLmluZm8tY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuXG4ubmFtZWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxuLm5hbWVlZXtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZm9sbG93e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzgsIDIzMSk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGF0ZS1yZWFkdGltZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMTcsIDExNywgMTE3KTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFydGljbGUtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29kZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbn1cblxuXG4uY29kZS1ibG9ja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5saW5lLWNvZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuXG59XG5cbi5mb2xsb3ctdHdpdHRlcntcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5hcnRpY2xlLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=blogs-asp-net-auth-identity-asp-net-auth-identity-module.js.map