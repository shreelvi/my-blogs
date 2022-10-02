(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Db8":
/*!**************************************************************************!*\
  !*** ./src/app/blogs/super-wifi-article/super-wifi-article.component.ts ***!
  \**************************************************************************/
/*! exports provided: SuperWifiArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperWifiArticleComponent", function() { return SuperWifiArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");


class SuperWifiArticleComponent {
    constructor() {
        this.pageId = "/blog3";
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
SuperWifiArticleComponent.ɵfac = function SuperWifiArticleComponent_Factory(t) { return new (t || SuperWifiArticleComponent)(); };
SuperWifiArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuperWifiArticleComponent, selectors: [["app-super-wifi-article"]], decls: 71, vars: 1, consts: [[1, "ang-matDialog"], ["fxFlex", "", "fxLayout", "column"], [1, "article-content"], [1, "header-center"], [1, "category"], [1, "blog-title"], [1, "author-info"], [1, "namee"], [1, "nameee"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], [1, "date-readtime"], [1, "article-paragraph"], [1, "article-img"], ["src", "assets/blog-3.1.jpg", "alt", "dialog box", "role", "presentation", 2, "width", "100%"], [1, "article-img2"], ["src", "assets/blog-3.2.png", "alt", "dialog box", "role", "presentation", 2, "width", "100%"], [1, "comments"], [3, "identifier"]], template: function SuperWifiArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Information Technology Article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " What is Microsoft's Super Wi-Fi and How Could Super Wi-fi Affect Rural Life ? ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Dec 05 \u00A0 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " In the modern world, life without internet is practically impossible. We live in a world where high-speed internet is now more than necessary. Our daily-life tasks from navigating a local address, socializing with friends and families globally and locally, taking a college or school courses, self-learning, researching for news and streaming online videos, all these tasks are dependent to an internet access. The world is consistently interconnected through the development of new technologies and high-speed communication such as smart phones, and wireless internet access. Yet, majority of people in the world do not have access to the internet. As a result, technology companies are now exploring a way to connect the whole world to the internet, by development of hot air balloons, drones and constellations of mini-satellites. While these ideas are an effective way to get the whole world online, without having to worry of being outside the range of Wi-Fi connection, these are all long-term, expensive plans and will take longer to achieve. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Fortunately, for the time being, the tech giant, Microsoft\u2019s plan of harnessing Television White Channels (TVWC) to deliver high-speed broadband internet connection could make millions of life easier in the rural areas of USA and eventually in developing countries worldwide who are lacking broadband internet connection today. In addition to the high-speed internet access, the convenience of not having to worry about being outside the Wi-Fi zone would be the excitement that we could get from \u201CSuper Wi-Fi\u201D, as this new technology has a potential to cover an area about 100 times more the diameter of a normal Wi-Fi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " First, let me explain what \u201Cwhite spaces\u201D mean and how we can utilize them to produce broadband internet connection. The white spaces are radio waves in the electromagnetic spectrum that are unused. \u201CThe electromagnetic spectrum is the range of all possible frequencies of electromagnetic radiation\u201D (Moshirnia, 2012). This is important because most of the devices that we use today, from smartphones to television to car remotes, all uses frequencies in the spectrum in order to communicate wireless signals (2012). One of the waves in the electromagnetic spectrum is the radio waves, and other constitute of visible lights, microwaves, infrared radiation, X-rays and gamma rays. Radio waves are best used to communicate information. Communication mediums such as television, radios and cell phones all communicate sound, that is transmitted by the station by converting the radio waves to mechanical vibration to create sound waves that can be heard (Lucas, 2015). The lower frequencies in the electromagnetic spectrum provide better results in communicating signals. This means that the lower frequency waves have higher range as it can penetrate through buildings and environment surroundings more easily than that of higher frequency waves. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " The bands of frequency in the spectrum are allocated for specific purpose in order to prevent interference within the spectrum. Similarly, television broadcasting is allocated bands between 54 and 806 MHz, and each broadcaster is assigned license to channels within the spectrum (Moshirnia, 2012). The white channels are the gaps between the TV channels that are allocated to make sure that the channels do not interfere with one another. These allocated but not used channels are referred to as \u201Cwhite channels\u201D. There are plenty of these white spaces, or unused channels simply because not all the channels are actually used in the market. And this is even more prevalent in rural areas as broadcasters choose not to provide service in the communities with less population because they don\u2019t see any profit in the rural area (2012). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " These unused spectrum or white spaces were first provided by US government to public without requiring license to use for the devices specifically such as garage door openers and microwave ovens. Later, this release introduced the wirelessly connecting electronic devices, Wi-Fi. Today, Wi-Fi along with several other devices such as microwaves, security cameras, and cordless phones uses the unlicensed high bands of the spectrum that runs in the frequency of 2.4 GHz and 5 GHz (2012). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Now that we have an idea of what the white channels are, and how it can provide high-speed internet access to large range area than a normal Wi-Fi, I will explain how the Super Wi-Fi work. The main component of this system is the location-aware devices and online databases. The access of Super Wi-Fi will use a geographic internet-databases to get the available networks in the spectrum. \u201CThe database has a list of all protected TV stations and frequencies across the country\u201D (Microsoft). To prevent interference with the existing TV channels, implementation of Super Wi-Fi networks is accessed through radio-enabled devices, which will report the device\u2019s location to the database. In return, the database will provide the list of all available white channels that can be used in its current location. And, if the frequency is unused, the device will use that frequency to communicate (Microsoft). This will mean that Microsoft plan to utilize white space will require devices that would use geographical databases to prevent interference with licensed TV broadcasters within a frequency band. This process operates in a lower frequency channels than that of normal Wi-Fi which enables a much larger range and consistent signal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Who will benefit from this promising new technology? \u201CSome of the most immediate beneficiaries will be people currently living in the areas that cannot be affordably reached with existing technologies\u201D. The modern world is increasingly globalized through the means of high-speed communications. Yet, almost two thirds of the world\u2019s population lack access to an internet connection (Microsoft). Super Wi-Fi has the potential to make the internet easily accessible to these areas as it has potential to transmit signals to very large areas, and make it affordable so that most of the people can use. Internet access in these areas will also mean improvement in the healthcare, education, and business areas, contributing to the development of a nation. Moreover, people in the areas that lack internet can share their resources that are valuable to us which will mean benefit to the world. Super Wi-Fi has a potential to globalize the world in a much easier way than that of regular Wi-Fi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Even in the city areas, the introduction of this technology will mean the greater efficiency of broadband internet access as it can transmit signal to much larger areas with the same power and computing requirements than that of regular Wi-Fi. \u201CThe regular Wi-Fi routers have an indoor range of 30 to 50 meters\u201D. While the super Wi-Fi networks has the capability to broadcast signals at the same power level to a radius of 10 kilometers, or more than 6 miles (Enis, 2017). This would mean more benefits to consumer as the cost of providing internet access will reduce significantly since internet providers can cover much larger range of customers with one base station which would mean that a whole community can be connected through use of just one base. This can also be cost effective in one way that the extra cost that most of us are paying these days to phone service providers for the LTE or 3G networks so that we can access broadband internet access outside our home or campus would be eliminated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Furthermore, the main issues of the already present Wi-Fi networks is that the technologies and business models that work well for delivering access to urban areas might not work well for delivering access to rural areas. The normal Wi-Fi is really weak mostly because it runs in higher frequency and the signals cannot be transmitted against concrete obstruction. And as rural areas has most complex geographical structures, this has resulted to approximately 39 percent of rural Americans that lack access to broadband connections (Ernis, 2017). Thankfully, rural areas are particularly more suited to the use of Super Wi-Fi because there are less wireless and media markets present in less populated area. This means that there are large availability of unused channels in the spectrum that can be utilized for internet access, with less conflict because more unused frequencies are available. The opportunity of getting people online in rural areas would also mean the development of those areas, since there are more than handful of resources that we can get online; such as education resources, online news, and new ideas, are only some of the productive things that are found in the internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Lastly, I will discuss the benefit of introducing super Wi-Fi to the tech companies. Promoting the white-spaces technology not only benefits to the public, but it has an enormous potential to reap rewards for tech companies. \u201CThe remaining 24.3 million people in rural areas without internet are potential customers of cloud applications, search and other digital services\u201D (Kang, 2017). Providing broadband internet access to these people, and in developing countries would also mean that these people will use the online digital services such as music subscription, online news and movies subscription. In addition, these people are also potential online customers of the shopping companies such as Amazon, E-bay etc. This will generate huge income for these companies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " The potential benefits of super Wi-Fi certainly seem to outweigh the benefits of regular Wi-Fi. However, the technology also faces numerous challenges along its way to connect the world. Several groups such as television broadcasters, and others who uses unlicensed white channels for communicating through wireless microphones such as church groups\u2019 theater troupes and sport referees argue that the use of white spaces will interfere with their signals (Moshirnia, 2012). But, Federal Communications Commission has ensured the protection from interferences by maintaining of databases containing the frequencies of all licensed TV band in each geographical location. While this problem seem to have resolved, there are several other challenges that the technology is facing. One of the major challenges is that availability of devices in order to catch the white channel signals. There are only few companies that manufacture devices that is compatible with white-spaces technology, and consequently these devices are expensive, i.e. it costs more than $1000 each (Kang, 2017). The reason for this expensive cost seem to be that manufacturers are still not sure of profitability that they can make in rural areas (2017). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " This emerging technology has many potential, to contribute to globalization and possibly benefiting everyone including public, tech companies and development of a nation. But, this idea has now been in the technology market for a while now, and Microsoft has been planning to introduce this technology for well over a decade. Thus, there might be still some time before we see the market of this technology world-wide. The goal of Microsoft is not to become a telecom provider, but their plan is to invest in the capital costs and work with local internet service providers in rural places to experiment the benefits of the technology (Kang, 2017). While there are other technology companies such as google, who is also working to make this project successful, we can only hope this idea will be available in the market sooner. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "References");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Enis, M. (2017). WhiteSpace project could grow rural broadband access. Library Journal. Retrieved from http://lj.libraryjournal.com/2017/01/industry-news/whitespace-project-could-grow-rural-broadband-access/#_ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Kang, C. To close digital divide, Microsoft to harness unused television channels. The New York Times. Retrieved from https://www.nytimes.com/2017/07/11/technology/to-close-digital-divide-microsoft-to-harness-unused-television-channels.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Lucas, J. (2015). What are radio waves? Live Science. Retrieved from https://www.livescience.com/50399-radio-waves.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Moshirnia, A.V. (2012). Whither white spaces? Infrastructure, 51(2), 3-4. Retrieved from libpublic3.library.isu.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=a9h&AN=75122337&site=ehost-live. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " n.d. Super wi-fi technologies. Microsoft. Retrieved from https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/spectrum-microsoft-super-wifi-overview.pdf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "disqus", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("identifier", ctx.pageId);
    } }, directives: [ngx_disqus__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci13aWZpLWFydGljbGUuY29tcG9uZW50LnNjc3MifQ== */", ".ang-matDialog[_ngcontent-%COMP%] {\n  margin-top: 91px;\n  padding: 5px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-right: 64px;\n  max-width: 680px;\n  width: 100%;\n  min-width: 0px;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-top: 3.88em;\n  color: #757575;\n  margin-bottom: -0.31em;\n  font-style: normal;\n  letter-spacing: 0.077em;\n  line-height: 18px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.author-info[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 100%;\n  display: block;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.namee[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  align-items: center;\n  display: flex;\n  line-height: 20px;\n  font-size: 14px;\n}\n\n.nameee[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-height: 20px;\n  line-height: 14px;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.date-readtime[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #757575;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.article-paragraph[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n}\n\n.article-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 26px;\n  line-height: 44px;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #f2f2f2;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  font-weight: 300;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  font-weight: 300;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  float: left;\n  font-size: 14px;\n}\n\n.inline-code[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 5px;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n@media only screen and (max-width: 768px) {\n  .article-content[_ngcontent-%COMP%] {\n    margin-left: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1tYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVdBO0VBQ0ksdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0YiLCJmaWxlIjoiYW5nLW1hdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5nLW1hdERpYWxvZ3tcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFydGljbGUtY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5oZWFkZXItY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhdGVnb3J5e1xuICAgIG1hcmdpbi10b3A6IDMuODhlbTtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjMxZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3N2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ibG9nLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxufVxuXG4uYXV0aG9yLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG5cbn1cblxuLmluZm8tY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuXG4ubmFtZWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxuLm5hbWVlZXtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZm9sbG93e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzgsIDIzMSk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGF0ZS1yZWFkdGltZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMTcsIDExNywgMTE3KTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFydGljbGUtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29kZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbn1cblxuXG4uY29kZS1ibG9ja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5saW5lLWNvZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuXG59XG5cbi5mb2xsb3ctdHdpdHRlcntcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5hcnRpY2xlLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elvisshrestha/Documents/elvis-tech-blogs/src/main.ts */"zUnb");


/***/ }),

/***/ "04s0":
/*!******************************************************************!*\
  !*** ./src/app/blogs/ang-mat-dialog/ang-mat-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: AngMatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngMatDialogComponent", function() { return AngMatDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");




class AngMatDialogComponent {
    constructor(title) {
        this.title = title;
        this.pageId = "/blog1";
        this.snippet = `
  import { Component, Inject } from '@angular/core';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { Hero } from '../test-product-component/test-product.component';

  @Component({
    selector: 'app-test-dialog',
    templateUrl: './test-dialog.component.html',
    styleUrls: ['./test-dialog.component.scss']
  })
  export class TestDialogComponent {

    // vars to store radio button selection
    legendStatusSelection = null;
    popularitySelection = null;

    constructor(
      public dialogRef: MatDialogRef<TestDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: HeroActionDialogData
    ) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }
 `;
        this.snippet1 = `
  export interface Hero {
      id: string;
      name: string;
      Rating: string;
      Legend: boolean;
      Popularity: string;
  }

  export interface HeroActionDialogData{
    legend: boolean;
    popularity: string;
  }
 `;
        this.snippet2 = `
 <div mat-dialog-content>

    <div fxLayout fxLayoutGap = "1%">
        <mat-radio-group [(ngModel)]="legendStatusSelection">

            <mat-radio-button class="radio-button" [value] = "false" *ngIf="data.legend">
                Set Hero Legend Status to False
            </mat-radio-button>

            <mat-radio-button class="radio-button" [value] = "true" *ngIf="!data.legend">
                Set Hero Legend Status to True
            </mat-radio-button>

        </mat-radio-group>

        <mat-radio-group [(ngModel)]="popularitySelection">

        <mat-radio-button class="radio-button" [value] = "false" *ngIf="data.popularity == 'high'">
            Set Hero Popularity to Low
        </mat-radio-button>

        <mat-radio-button class="radio-button" [value] = "true" *ngIf="data.popularity == 'low'">
            Set Hero Popularity to High
        </mat-radio-button>

        </mat-radio-group>
    </div>

</div>

<div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Close</button>
    <button mat-button [mat-dialog-close]="" cdkFocusInitial>Ok</button>

</div>
`;
        this.snippet3 = `
  import { FormsModule } from '@angular/forms';

`;
        this.snippet4 = `
openActionDialog(tableRow: Hero){
  console.log("Hello");
  
  const dialogRef = this.dialog.open(TestDialogComponent, {
    width: '250px',
    data:{
      legend: tableRow.legend,
      popularity: tableRow.popularity
    },
    position: {
      left: '70%',
      bottom: '35%'
    }
  });

  dialogRef.afterClosed().subscribe(async result => {

    if (result != null){
      await this.editHeroLegendPopularityStatus(result, tableRow);
    }
    console.log(result);
  });
}

async editHeroLegendPopularityStatus(result: any, heroRow: Hero){
  let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
    panelClass: 'spinner-container',
    disableClose: true
  });

  try{
    if (result.legend != null) {
      heroRow.legend = result.legend;
    }

    if (result.popularity != null) {
      let popularity = result.popularity? 'high' : 'low';
      heroRow.popularity = popularity;
    }

    dialogRef.close();
    console.log("Flag updated");

    this.changeDetectorRefs.detectChanges();
    
  } catch (error) {
    dialogRef.close();
    console.log("Error occured!");

  }
}
`;
        this.snippet5 = `
  [mat-dialog-close]="{ legend: legendStatusSelection, popularity: popularitySelection }" 
cdkFocusInitial

`;
        this.snippet6 = `
  <mat-radio-button class="radio-button" [value] = "false" *ngIf="data.popularity == 'high'">
  <mat-radio-button class="radio-button" [value] = "true" *ngIf="!data.legend">
`;
        this.snippet7 = `
dialogRef.afterClosed().subscribe(async result => {

  if (result != null){
    await this.editHeroLegendPopularityStatus(result, tableRow);
  }
  console.log(result);
});
`;
        this.title.setTitle('Blogs | Angular Material Dialog Box to edit table data');
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
AngMatDialogComponent.ɵfac = function AngMatDialogComponent_Factory(t) { return new (t || AngMatDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AngMatDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngMatDialogComponent, selectors: [["app-ang-mat-dialog"]], decls: 148, vars: 9, consts: [[1, "ang-matDialog"], ["fxFlex", "", "fxLayout", "column"], [1, "article-content"], [1, "header-center"], [1, "category"], [1, "blog-title"], [1, "author-info"], [1, "namee"], [1, "nameee"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], [1, "date-readtime"], [1, "article-paragraph"], [1, "article-header"], ["routerLink", "/test-table", "routerLinkActive", "active", 1, "home"], [1, "article-img"], ["src", "assets/3.png", "alt", "dialog box", "role", "presentation", 2, "width", "100%", "height", "80%"], ["src", "assets/2.png", "alt", "dialog box", "role", "presentation", 2, "width", "100%", "height", "80%"], ["src", "assets/1.png", "alt", "dialog box", "width", "100%", "height", "80%", "role", "presentation"], [1, "code"], [1, "code-block"], [1, "inline-code"], ["href", "https://material.angular.io/components/dialog/overview"], [1, "comments"], [3, "identifier"]], template: function AngMatDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Angular tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Building a dialog box to edit table row data with Angular Material Components ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sep 20 \u00A0 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Angular 10 Material Dialog to Edit table row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " tutorial shows you how we can use the Angular Material Dialog component to build a reusable UI for an Edit operations on a table data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " It provides an introduction to concepts required to transfer data between components and MatDialog box. You will learn about MatDialogRef, MAT_DIALOG_DATA and MatDialogConfig. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " What you'll build ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " View the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DEMO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " and test the feature you are going to build. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " We have a data table with a list of heroes. As we can see in the picture below, we have action column for each row with a button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " When the button is clicked, it will display us the dialog box for action to take for our Heroes. It has radio button for user selection which will allow us to modify hero properties. If the Hero Legend status is true then dialog box will have option to set the status as false, and vice-versa. And same for popularity property of hero. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " After a radio selection is made and clicking OK. The dialog box will close and our table will update with new data. We can either modify both Legend and Popularity of Hero or just one of them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Let's get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " For this tutorial, we will make things simpler and make use of mock data and service to perform back-end tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " The model for data table is given below. We have Hero interface for displaying list of heroes in the table. And the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "HeroActionDialogData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " is to transfer data between the table and dialog box to edit Heroes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Our main task is to be able to add an action button to our heroes table. The action button should allow us to set each hero's legend status as true/false and popularity as high/low. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " In our dialog box template, we will display options as radio button for users to edit a table data. We will get the information from table and make use of MAT SELECT. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " After getting the model ready, we will generdate a new component for our dialog box. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "ng g c hero-action-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " The CLI creates a new folder, src/app/hero-action-dialog/, and generates the three files of the component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Let's start by modifying the hero-action-dialog.component.ts file first. Our file will look like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " In the constructor we are using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "@Inject(MAT_DIALOG_DATA) public data: Hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, ". It allows us to get data from the table to modify when we click the action button in mat-table. We get data as HeroActionDialogData. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " As mentioned, we will add Material Dialog component. It comes with features like mat-dialog-title, mat-dialog-content, mat-dialog options which makes easier to create the template. You can find the official tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " We are using radio button in our dialog box to get the selection from user. To bind the selected value we have to use [ngModel]. So we need to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " in app.module.ts. In reviewing the template file for our dialog box, we can see that we are binding radio selection to pass value as true or false. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " The HTML template for the dialog box will look like below: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Now that our component for action dialog box is ready. It is time to update the component that we want to edit the product data from Mat-table. We need to add the method in our ProductComponent which we will call when the action button is clicked. This method will edit legend and popularity of a hero. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " As we can see, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "editHeroLegendPopularityStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " method will take the table row when action button is clicked from Heroes list. It will open the TestDialogComponent which is our dialog box component with applied styles and position. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " It passes the data as HeroActionDialogData which will be recieved in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "TestDialogComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " constructor. Then based on this data, we will display options in our action dialog box. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " The next step will be to get users selection from the dialog box when Ok button is clicked. We will get user selections from the TestDialogComponent template. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Here, we are passing legendStatusSelection (which we are passing radio button value as true if user selects true and vice versa) and popularitySelection (true for high and false for low) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " When OK is pressed, below method will run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "pre", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " This method will check if user has made any selection. If user has selected legend to set as true then it will update the hero legend property in the mat-table. After the table is updated we are using ChangeDetectorRef Module from Angular to reset the table. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " As mentioned before, we are not using any back-end for this tutorial and so the mock-data is modified temporarily. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "disqus", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet1, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    \n                       ", ctx.snippet, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.snippet3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    \n                       ", ctx.snippet2, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                        ", ctx.snippet4, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.snippet5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                        ", ctx.snippet6, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                        ", ctx.snippet7, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("identifier", ctx.pageId);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], ngx_disqus__WEBPACK_IMPORTED_MODULE_3__["ɵa"]], styles: [".ang-matDialog[_ngcontent-%COMP%] {\n  margin-top: 91px;\n  padding: 5px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-right: 64px;\n  max-width: 680px;\n  width: 100%;\n  min-width: 0px;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-top: 3.88em;\n  color: #757575;\n  margin-bottom: -0.31em;\n  font-style: normal;\n  letter-spacing: 0.077em;\n  line-height: 18px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.author-info[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 100%;\n  display: block;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.namee[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  align-items: center;\n  display: flex;\n  line-height: 20px;\n  font-size: 14px;\n}\n\n.nameee[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-height: 20px;\n  line-height: 14px;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.date-readtime[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #757575;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.article-paragraph[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n}\n\n.article-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 26px;\n  line-height: 44px;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #f2f2f2;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  font-weight: 300;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  font-weight: 300;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  float: left;\n  font-size: 14px;\n}\n\n.inline-code[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 5px;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n@media only screen and (max-width: 768px) {\n  .article-content[_ngcontent-%COMP%] {\n    margin-left: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1tYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVdBO0VBQ0ksdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0YiLCJmaWxlIjoiYW5nLW1hdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5nLW1hdERpYWxvZ3tcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFydGljbGUtY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5oZWFkZXItY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhdGVnb3J5e1xuICAgIG1hcmdpbi10b3A6IDMuODhlbTtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjMxZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3N2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ibG9nLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxufVxuXG4uYXV0aG9yLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG5cbn1cblxuLmluZm8tY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuXG4ubmFtZWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxuLm5hbWVlZXtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZm9sbG93e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzgsIDIzMSk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGF0ZS1yZWFkdGltZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMTcsIDExNywgMTE3KTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFydGljbGUtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29kZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbn1cblxuXG4uY29kZS1ibG9ja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5saW5lLWNvZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuXG59XG5cbi5mb2xsb3ctdHdpdHRlcntcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5hcnRpY2xlLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "1AYt":
/*!******************************************************!*\
  !*** ./src/app/test-dialog/test-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: TestDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDialogComponent", function() { return TestDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function TestDialogComponent_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Set Hero Legend Status to False ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
} }
function TestDialogComponent_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Set Hero Legend Status to True ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
} }
function TestDialogComponent_mat_radio_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Set Hero Popularity to Low ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
} }
function TestDialogComponent_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Set Hero Popularity to High ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
} }
const _c0 = function (a0, a1) { return { legend: a0, popularity: a1 }; };
class TestDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.legendStatusSelection = null;
        this.popularitySelection = null;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
TestDialogComponent.ɵfac = function TestDialogComponent_Factory(t) { return new (t || TestDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
TestDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestDialogComponent, selectors: [["app-test-dialog"]], decls: 13, vars: 10, consts: [["mat-dialog-content", ""], ["fxLayout", "", "fxLayoutGap", "1%", 1, "legend-action-content"], [3, "ngModel", "ngModelChange"], ["class", "radio-button", 3, "value", 4, "ngIf"], [1, "popularity-radio", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], [1, "radio-button", 3, "value"]], template: function TestDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TestDialogComponent_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.legendStatusSelection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TestDialogComponent_mat_radio_button_3_Template, 2, 1, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TestDialogComponent_mat_radio_button_4_Template, 2, 1, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TestDialogComponent_Template_mat_radio_group_ngModelChange_5_listener($event) { return ctx.popularitySelection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TestDialogComponent_mat_radio_button_6_Template, 2, 1, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TestDialogComponent_mat_radio_button_7_Template, 2, 1, "mat-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestDialogComponent_Template_button_click_9_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.legendStatusSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.legend);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.legend);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.popularitySelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.popularity == "high");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.popularity == "low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c0, ctx.legendStatusSelection, ctx.popularitySelection));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"]], styles: [".radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .mat-radio-label {\n  white-space: initial !important;\n}\n\n.mat-dialog[_ngcontent-%COMP%] {\n  margin-bottom: 250px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSiIsImZpbGUiOiJ0ZXN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpby1idXR0b257XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWxhYmVse1xuICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZGlhbG9ne1xuICAgIG1hcmdpbi1ib3R0b206IDI1MHB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "2FX1":
/*!******************************************************************!*\
  !*** ./src/app/test-product-component/test-product.component.ts ***!
  \******************************************************************/
/*! exports provided: TestProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestProductComponent", function() { return TestProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _progress_spinner_dialog_progress_spinner_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-spinner-dialog/progress-spinner-dialog.component */ "hrXU");
/* harmony import */ var _test_dialog_test_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test-dialog/test-dialog.component */ "1AYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function TestProductComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r14.id, " ");
} }
function TestProductComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r15.name, " ");
} }
function TestProductComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Rating ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r16.rating, " ");
} }
function TestProductComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Legend ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r17.legend, " ");
} }
function TestProductComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Popularity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r18.popularity, " ");
} }
function TestProductComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TestProductComponent_td_19_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.openActionDialog(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TestProductComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 16);
} }
function TestProductComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 17);
} }
const _c0 = function () { return [5, 10, 20]; };
class TestProductComponent {
    constructor(dialog, changeDetectorRefs) {
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['id', 'name', 'rating', 'legend', 'popularity', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](HERO_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    openActionDialog(tableRow) {
        console.log("Hello");
        const dialogRef = this.dialog.open(_test_dialog_test_dialog_component__WEBPACK_IMPORTED_MODULE_4__["TestDialogComponent"], {
            width: '250px',
            data: {
                legend: tableRow.legend,
                popularity: tableRow.popularity
            },
            position: {
                left: '70%',
                bottom: '35%'
            }
        });
        dialogRef.afterClosed().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result != null) {
                yield this.editHeroLegendPopularityStatus(result, tableRow);
            }
            console.log(result);
        }));
    }
    editHeroLegendPopularityStatus(result, heroRow) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dialogRef = this.dialog.open(_progress_spinner_dialog_progress_spinner_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProgressSpinnerDialogComponent"], {
                panelClass: 'spinner-container',
                disableClose: true
            });
            try {
                if (result.legend != null) {
                    heroRow.legend = result.legend;
                }
                if (result.popularity != null) {
                    let popularity = result.popularity ? 'high' : 'low';
                    heroRow.popularity = popularity;
                }
                dialogRef.close();
                console.log("Flag updated");
                this.changeDetectorRefs.detectChanges();
            }
            catch (error) {
                dialogRef.close();
                console.log("Error occured!");
            }
        });
    }
}
TestProductComponent.ɵfac = function TestProductComponent_Factory(t) { return new (t || TestProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"])); };
TestProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TestProductComponent, selectors: [["app-test-product-component"]], viewQuery: function TestProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "rating"], ["matColumnDef", "legend"], ["matColumnDef", "popularity"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of heroes", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TestProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TestProductComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TestProductComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TestProductComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TestProductComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TestProductComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TestProductComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TestProductComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TestProductComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TestProductComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TestProductComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TestProductComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, TestProductComponent_td_19_Template, 3, 0, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TestProductComponent_tr_20_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TestProductComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InRlc3QtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIH1cbiAgIl19 */"] });
const HERO_DATA = [
    { id: 1, name: 'Dr Nice', rating: 88, legend: false, popularity: "high" },
    { id: 2, name: 'Narco', rating: 92, legend: true, popularity: "high" },
    { id: 3, name: 'Bombasto', rating: 65, legend: false, popularity: "low" },
    { id: 4, name: 'Celeritas', rating: 77, legend: false, popularity: "low" },
    { id: 5, name: 'Magneta', rating: 89, legend: false, popularity: "high" },
    { id: 6, name: 'Rubberman', rating: 90, legend: false, popularity: "high" },
    { id: 7, name: 'Dynama', rating: 60, legend: true, popularity: "low" },
    { id: 8, name: 'Dr IQ', rating: 65, legend: false, popularity: "low" },
    { id: 9, name: 'Magma', rating: 71, legend: true, popularity: "high" },
    { id: 10, name: 'Mr Tomcat', rating: 74, legend: true, popularity: "high" },
    { id: 11, name: 'Tornado', rating: 77, legend: true, popularity: "high" },
];


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 14, vars: 0, consts: [["role", "banner", 1, "toolbar", 2, "height", "120px"], ["routerLink", "/home", "routerLinkActive", "active", 1, "home"], [1, "welcome"], [1, "spacer"], ["aria-label", "Me on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/elvis_shrestha", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Me on Github", "target", "_blank", "rel", "noopener", "href", "https://github.com/shreelvi", "title", "Github"], ["id", "github-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "fill", "#fff"], ["data-name", "layer2", "d", "M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z", "fill", "#fff"], ["data-name", "layer1", "d", "M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z", "fill", "#fff"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome Readers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #github-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #github-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  margin-left: 8%;\n  width: 100%;\n}\n\n.home[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  padding-left: 80px;\n  line-height: 32px;\n  font-size: 18px;\n  font-weight: 400;\n  width: 50px;\n}\n\n.home[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n@media only screen and (max-width: 768px) {\n  .home[_ngcontent-%COMP%] {\n    margin-right: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTs7RUFFRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0Usa0JBQUE7RUFDSjtBQUNGIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAudG9vbGJhciBpbWcge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cblxuICAudG9vbGJhciAjZ2l0aHViLWxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgfVxuXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIsXG4gIC50b29sYmFyICNnaXRodWItbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgLndlbGNvbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhvbWV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAuaG9tZTpob3ZlcntcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5ob21le1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xuICAgIH1cbiAgfVxuXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bg0x":
/*!****************************************************************!*\
  !*** ./src/app/blogs/ang-directive/ang-directive.component.ts ***!
  \****************************************************************/
/*! exports provided: AngDirectiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngDirectiveComponent", function() { return AngDirectiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");



class AngDirectiveComponent {
    constructor(title) {
        this.title = title;
        this.pageId = "/angular-directive-blog";
        this.snippet1 = `
  <input type="text" name="UserName" autofocus>
  `;
        this.snippet2 = `
  import { Directive, OnInit } from '@angular/core';
  import { MatInput } from '@angular/material/input';

  @Directive({
    selector: '[matInputFocus]'
  })
  export class AutoFocusDirective implements OnInit {

    constructor(
      private matInput: MatInput
    ) { }

    ngOnInit() {
      this.matInput.focus();
    }

  }
`;
        this.snippet3 = `
  <input aria-label="Login ID" matInput matInputFocus formControlName="username" placeholder="Login ID">
`;
        this.snippet4 = `
  import { AutoFocusDirective } from "./directives/auto-focus.directive"

  @NgModule({
    imports: [
      ....,
      AutoFocusDirective
    ]
  })
`;
        this.title.setTitle('Blogs | Angular Attribute Directives Article');
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
AngDirectiveComponent.ɵfac = function AngDirectiveComponent_Factory(t) { return new (t || AngDirectiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AngDirectiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngDirectiveComponent, selectors: [["app-ang-directive"]], decls: 149, vars: 5, consts: [[1, "ang-matDialog"], ["fxFlex", "", "fxLayout", "column"], [1, "article-content"], [1, "header-center"], [1, "category"], [1, "blog-title"], [1, "author-info"], [1, "namee"], [1, "nameee"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], [1, "date-readtime"], [1, "article-paragraph"], [1, "article-img"], ["src", "assets/blog-2.jpg", "alt", "dialog box", "width", "700", "height", "300", "role", "presentation"], [1, "inline-code"], ["href", "https://angular.io/guide/built-in-directives", "target", "_blank"], [1, "code"], [1, "code-block"], [1, "article-header"], [1, "comments"], [3, "identifier"]], template: function AngDirectiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Angular tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Angular Attribute Directive with Auto-focus example ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sep 23 \u00A0 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular Attribute Directive with Auto-focus example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " article walks you through directives in Angular 9 with a sample example of how to create attribute directive to auto-focus on a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "MAT INPUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Directives in Angular are classes that adds an additional behavior to elements in Angular applications. The directive class is decorated with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "@Directive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " decorator Directive changes the apperance or behavior of DOM elements and Angular components with attribute directives. More Info on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Directives are useful in our web applications in many cases, we can use it to manage forms, lists, styles and the UI apperance of web pages. In this article, We will also see how we can make use of attribute directive class to add auto-focus in Login Page. This directive can be used throghout our application to add auto-focus function anywhere as needed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " There are different types of directives in Angular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " is the most common directive type which is a directive with template. There are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "built-in attribute directives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "that Angular provides which modifies the behavior of other HTML elements, attributes, properties, and components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Some of the common built-in attribute directives are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "NgClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " which adds and removes CSS classes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "NgStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " which adds and removes a set of HTML styles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "NgModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " that adds two-way data binding to an HTML form element. There is also ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Structural Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ". We will not go through them in detail here but you can find more info at link provided above. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " In this article, we will focus on Attribute Directive and creating one. As explained before, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Attribute Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " in Angular are responsible for changing the apperanace or behavior of DOM elements and Angular components. Here, we will create a directive to add Auto-focus in the login form. In other words, we will create a directive to change the behavior of our HTML form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Next, let us discuss about creating a Custom Attribute Directive in our Angular Application. The main use case is to implement auto-focus to our login page so user should not move mouse curser to the input box. Let's look for the code to accomplish this. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " We could add auto-focus to an input field simply by using the \"autofocus\" attribute from HTML form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "pre", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " This works fine with HTML pages but with Angular applications, this does not work when you move from one page to other. When user is logged out and it redirects to login page, this does not work. This issue is caused because Autofocus feature of html5 only runs when the first time page loads as in SPA all scripts are loaded at first. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Let's build the attribute directive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " We will use Angular CLI to create a directive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "ng generate directive auto-focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " The CLI creates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "src/app/auto-focus.directive.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ". It also updates our AppModule. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Let's update our directive file which should look like below snippet: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "pre", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Here, we are using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "@Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Decorator to define our directive. It specifies the directive's CSS attribute selector, [matInputFocus]. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " We add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "MatInput");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "@angular/material/input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " in the directive's constructor which provides a reference to the host DOM element, MATINPUT where we want to add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "AutoFocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ". The logic in the constructor sets the focus on the selected MAT INPUT HTML element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " We will then use this as an HTML element attribute like below wherever we require auto focus feature in our application by just adding the selector ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "matInputFocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " in Mat-Input elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " First, lets Import the Directive component in the app module or in the Module where we want to use it. In this example, we are using it in the Login component, so we will import this directive in our module like: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "pre", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Finally, update the login form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "pre", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Angular creates an instance of the Directive class we created and provides a reference to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " element into the directive's constructor which sets the focus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " In the same way, you can create custom attribute directives to change the apperance or behavior of your page. We can handle user events to use directives, pass custom values from user input into attribute directives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " For example: we can create highlight directive to highlight an HTML element on mouse-hover, mouse-click. We can get color that we want to highlight from user and pass it to the directive to apply the selection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "disqus", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet1, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet2, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet4, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet3, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("identifier", ctx.pageId);
    } }, directives: [ngx_disqus__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: [".comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1kaXJlY3RpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJhbmctZGlyZWN0aXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cbiJdfQ== */", ".ang-matDialog[_ngcontent-%COMP%] {\n  margin-top: 91px;\n  padding: 5px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-right: 64px;\n  max-width: 680px;\n  width: 100%;\n  min-width: 0px;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-top: 3.88em;\n  color: #757575;\n  margin-bottom: -0.31em;\n  font-style: normal;\n  letter-spacing: 0.077em;\n  line-height: 18px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.author-info[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 100%;\n  display: block;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.namee[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  align-items: center;\n  display: flex;\n  line-height: 20px;\n  font-size: 14px;\n}\n\n.nameee[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-height: 20px;\n  line-height: 14px;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.date-readtime[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #757575;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.article-paragraph[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n}\n\n.article-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 26px;\n  line-height: 44px;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #f2f2f2;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  font-weight: 300;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  font-weight: 300;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  float: left;\n  font-size: 14px;\n}\n\n.inline-code[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 5px;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n@media only screen and (max-width: 768px) {\n  .article-content[_ngcontent-%COMP%] {\n    margin-left: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1tYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVdBO0VBQ0ksdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0YiLCJmaWxlIjoiYW5nLW1hdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5nLW1hdERpYWxvZ3tcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFydGljbGUtY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5oZWFkZXItY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhdGVnb3J5e1xuICAgIG1hcmdpbi10b3A6IDMuODhlbTtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjMxZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3N2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ibG9nLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxufVxuXG4uYXV0aG9yLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG5cbn1cblxuLmluZm8tY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuXG4ubmFtZWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxuLm5hbWVlZXtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZm9sbG93e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzgsIDIzMSk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGF0ZS1yZWFkdGltZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMTcsIDExNywgMTE3KTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFydGljbGUtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29kZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbn1cblxuXG4uY29kZS1ibG9ja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5saW5lLWNvZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuXG59XG5cbi5mb2xsb3ctdHdpdHRlcntcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5hcnRpY2xlLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class HomePageComponent {
    constructor(title) {
        this.title = title;
        this.title.setTitle('Home | Elvis Software Development Blogs');
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
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 58, vars: 0, consts: [[1, "intro-container"], [1, "title"], [1, "sub-title"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], ["fxFlex", "", "fxLayout", "row", 1, "main-article-container"], [1, "article-img"], ["routerLink", "/blog4", "routerLinkActive", "active"], ["src", "assets/Auth.png", "alt", "blog", "width", "600", "height", "300", "role", "presentation", 1, "main-img"], [1, "article-info"], ["routerLink", "/asp-net-auth", "routerLinkActive", "active"], [1, "info-title", 2, "color", "black"], [1, "blog-desc"], [1, "list-container"], [1, "example-card"], ["mat-card-image", "", "src", "assets/blog-4.png", "alt", "Jest testing"], [1, "card-content"], [1, "list-title"], ["routerLink", "/blog1", "routerLinkActive", "active"], ["mat-card-image", "", "src", "assets/blog-1.jpg", "alt", "Photo of a Shiba Inu"], ["routerLink", "/angular-directive-blog", "routerLinkActive", "active"], ["mat-card-image", "", "src", "assets/blog-2.jpg", "alt", "Photo of a Shiba Inu"], ["routerLink", "/blog3", "routerLinkActive", "active"], ["mat-card-image", "", "src", "assets/blog-3.jpg", "alt", "Photo of a Shiba Inu"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Elvis Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sharing Software Development Tutorial and Articles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Implementing JWT Token based Authentication using ASP.NET Core Identity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This guide will show you how we can implement JWT based authentication which is very popular among modern applications and SPAs in ASP.NET Core using Identity. We will use Identity to manager users (register and sign-in users), and create JWT based token that our client and several other applications can use to access the server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Unit Testing Angular Services and Components Using JEST Framework (Part1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JEST testing tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " will offer techniques and tips on how to write unit tests for the service class in Angular using Jest framework. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Building a dialog box to edit table row data with Angular Material Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Angular 10 Material Dialog to Edit table row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " tutorial shows you how we can use the Angular Material Dialog component to build a reusable UI for CRUD operations on a table data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Angular Attribute Directive with Auto-focus example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " This article explains briefly about directives in Angular 9 with a sample example of using attribute directive to auto-focus on a input form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " TV White Space Spectrum -- Super WiFi detailed look and its benefits to rural areas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " This article gives you a detailed explanation on upcoming and promising internet technology by Microsoft, Super Wi-fi (TV white spectrum). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: [".intro-container[_ngcontent-%COMP%] {\n  margin-left: 0%;\n  margin-top: 40px;\n  padding-bottom: 60px;\n  width: 100%;\n  background-color: #1976d2;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #F5FFFF;\n  padding-top: 90px;\n  margin-left: 20%;\n  font-weight: 700;\n  letter-spacing: 0;\n  font-size: 44px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  color: #F5FFFF;\n  margin-left: 20%;\n  margin-top: 20px;\n  font-weight: 400;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.main-article-container[_ngcontent-%COMP%] {\n  margin-left: 14%;\n  display: flex;\n}\n\n.article-img[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.article-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 20px;\n  width: 400px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 28px;\n}\n\n.blog-desc[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 18px;\n  color: gray;\n  line-height: 26px;\n  text-overflow: ellipsis;\n}\n\n.article-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  text-decoration: none;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  margin-left: 12.5%;\n  margin-top: 40px;\n  display: flex;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-bottom: 44px;\n  margin-left: 20px;\n  height: 440px;\n  text-overflow: ellipsis;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  padding: 5px 0px 0px 284px;\n}\n\n.list-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  text-decoration: none;\n}\n\n.list-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 768px) {\n  .main-article-container[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-left: 2%;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .list-container[_ngcontent-%COMP%] {\n    margin-left: 2.5%;\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .follow-twitter[_ngcontent-%COMP%] {\n    padding: 5px 0px 0px 110px;\n  }\n\n  .main-img[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVFO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUdBO0VBQ0k7SUFDSSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSxlQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VBQU47O0VBR0U7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VBQU47O0VBR0U7SUFDSSwwQkFBQTtFQUFOOztFQUdFO0lBQ0ksVUFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogMCU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xufVxuXG4udGl0bGV7XG4gICAgY29sb3I6ICNGNUZGRkY7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogNDRweDtcbn1cblxuLnN1Yi10aXRsZXtcbiAgICBjb2xvcjogI0Y1RkZGRiA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb2xsb3d7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5OWVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA5OWVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDk5ZW07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtb3JpZ2luOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtY2xpcDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDEzOCwgMjMxKTtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYWluLWFydGljbGUtY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxNCU7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmFydGljbGUtaW1ne1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hcnRpY2xlLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uYmxvZy1kZXNje1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uYXJ0aWNsZS1pbmZvIGEge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxpc3QtY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuZm9sbG93LXR3aXR0ZXJ7XG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMjg0cHg7XG59XG5cbi5saXN0LWNvbnRhaW5lciBhIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5saXN0LXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZC1jb250ZW50e1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XG4gICAgLm1haW4tYXJ0aWNsZS1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5saXN0LWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZvbGxvdy10d2l0dGVye1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAxMTBweDtcbiAgICB9XG5cbiAgICAubWFpbi1pbWcge1xuICAgICAgICB3aWR0aDogOTglO1xuICAgIH1cbn1cbiAgXG5cblxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'elvis-tech-blogs';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _blogs_ang_mat_dialog_ang_mat_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs/ang-mat-dialog/ang-mat-dialog.component */ "04s0");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _test_dialog_test_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-dialog/test-dialog.component */ "1AYt");
/* harmony import */ var _test_product_component_test_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-product-component/test-product.component */ "2FX1");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _progress_spinner_dialog_progress_spinner_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress-spinner-dialog/progress-spinner-dialog.component */ "hrXU");
/* harmony import */ var _blogs_ang_directive_ang_directive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blogs/ang-directive/ang-directive.component */ "Bg0x");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auto-focus.directive */ "mN2a");
/* harmony import */ var _blogs_super_wifi_article_super_wifi_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blogs/super-wifi-article/super-wifi-article.component */ "+Db8");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");
/* harmony import */ var _blogs_ang_test_jest_ang_test_jest_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blogs/ang-test-jest/ang-test-jest.component */ "ohh2");
/* harmony import */ var _blogs_asp_net_auth_identity_asp_net_auth_identity_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blogs/asp-net-auth-identity/asp-net-auth-identity.component */ "pdNa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_material_module__WEBPACK_IMPORTED_MODULE_9__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_disqus__WEBPACK_IMPORTED_MODULE_16__["DisqusModule"].forRoot('elvis-tech-blogs')
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        _blogs_ang_mat_dialog_ang_mat_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AngMatDialogComponent"],
        _test_dialog_test_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TestDialogComponent"],
        _test_product_component_test_product_component__WEBPACK_IMPORTED_MODULE_8__["TestProductComponent"],
        _progress_spinner_dialog_progress_spinner_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProgressSpinnerDialogComponent"],
        _blogs_ang_directive_ang_directive_component__WEBPACK_IMPORTED_MODULE_12__["AngDirectiveComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _auto_focus_directive__WEBPACK_IMPORTED_MODULE_14__["AutoFocusDirective"],
        _blogs_super_wifi_article_super_wifi_article_component__WEBPACK_IMPORTED_MODULE_15__["SuperWifiArticleComponent"],
        _blogs_ang_test_jest_ang_test_jest_component__WEBPACK_IMPORTED_MODULE_17__["AngTestJestComponent"],
        _blogs_asp_net_auth_identity_asp_net_auth_identity_component__WEBPACK_IMPORTED_MODULE_18__["AspNetAuthIdentityComponent"]], imports: [_angular_material_module__WEBPACK_IMPORTED_MODULE_9__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_disqus__WEBPACK_IMPORTED_MODULE_16__["DisqusModule"]] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer"], [1, "footer-row"], ["href", "http://elvishrestha.com"], ["routerLink", "/blog1", "routerLinkActive", "active"], ["href", "https://www.github.com/shreelvi"], ["href", "https://resnology-core-sql.azurewebsites.net/home"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About the Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latest Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Try my Resume Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".footer-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #BFDBFF;\n  text-decoration: none;\n  padding-left: 44px;\n  font-size: 14px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 40px;\n  color: #BFDBFF;\n  font-size: 14px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  height: 60px;\n  padding-top: 10px;\n}\n\n.footer-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n@media only screen and (max-width: 768px) {\n  .footer-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    color: #BFDBFF;\n    text-decoration: none;\n    padding-left: 44px;\n    font-size: 14px;\n    height: 28px;\n  }\n\n  .footer-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: white;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    height: 144px;\n    padding-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUFDTjs7RUFHRTtJQUNJLFlBQUE7RUFBTjs7RUFHRTtJQUNJLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VBQU47QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXJvdyBhe1xuICAgIGNvbG9yOiAjQkZEQkZGO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29weXJpZ2h0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBjb2xvcjogI0JGREJGRjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7IFxuICAgIGhlaWdodDogNjBweDsgXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5mb290ZXItcm93IGE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcbiAgICAuZm9vdGVyLXJvdyBhe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBjb2xvcjogI0JGREJGRjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuZm9vdGVyLXJvdyBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyOyBcbiAgICAgICAgaGVpZ2h0OiAxNDRweDsgXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"] });


/***/ }),

/***/ "hrXU":
/*!******************************************************************************!*\
  !*** ./src/app/progress-spinner-dialog/progress-spinner-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProgressSpinnerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDialogComponent", function() { return ProgressSpinnerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


class ProgressSpinnerDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgressSpinnerDialogComponent.ɵfac = function ProgressSpinnerDialogComponent_Factory(t) { return new (t || ProgressSpinnerDialogComponent)(); };
ProgressSpinnerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressSpinnerDialogComponent, selectors: [["app-progress-spinner-dialog"]], decls: 1, vars: 0, template: function ProgressSpinnerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]], styles: [".spinner-container mat-dialog-container {\n  box-shadow: none;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2dyZXNzLXNwaW5uZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6InByb2dyZXNzLXNwaW5uZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5zcGlubmVyLWNvbnRhaW5lcntcbiAgICBtYXQtZGlhbG9nLWNvbnRhaW5lcntcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "mN2a":
/*!*****************************************!*\
  !*** ./src/app/auto-focus.directive.ts ***!
  \*****************************************/
/*! exports provided: AutoFocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function() { return AutoFocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "qFsG");


class AutoFocusDirective {
    constructor(matInput) {
        this.matInput = matInput;
    }
    ngOnInit() {
        this.matInput.focus();
    }
}
AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) { return new (t || AutoFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInput"])); };
AutoFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoFocusDirective, selectors: [["", "matInputFocus", ""]] });


/***/ }),

/***/ "ohh2":
/*!****************************************************************!*\
  !*** ./src/app/blogs/ang-test-jest/ang-test-jest.component.ts ***!
  \****************************************************************/
/*! exports provided: AngTestJestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngTestJestComponent", function() { return AngTestJestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");



class AngTestJestComponent {
    constructor(title) {
        this.title = title;
        this.pageId = "/blog4";
        this.snippet1 = `
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { IGroupsResponse } from '../models/groups-test-demo';
  import { environment } from '../../environments/environment';
  import { catchError, tap } from 'rxjs/operators';
  import { Observable, throwError } from 'rxjs';

  @Injectable({
      providedIn: 'root'
  })
  export class GroupsTestDemoService {

      private url: string = '/api/users';

      baseUrl = environment.apiUrl;

      constructor(private httpClient: HttpClient) { }

      getGroups(): Observable<IGroupsResponse> {
          return this.httpClient.get<IGroupsResponse>(this.baseUrl + 'group')
              .pipe(
                  tap(groups => console.log('groups fetched')),
                  catchError(this.handleError)
                  ) as Observable<IGroupsResponse>;
      }

      private handleError(error: HttpErrorResponse) {
          if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
              console.log(error);
          }

          // Return an observable with a user-facing error message.
          return throwError(
            'Something bad happened; please try again later.');
        }
      
  }
  `;
        this.snippet2 = `
    import { IGroupsResponse } from "../models/groups-test-demo";
    import { GroupsTestDemoService } from "./groups-test-demo.service"

    describe('GroupsDemoService (using mock)', () => {
        let groupsDemoService : GroupsTestDemoService;
        let httpClientMock: any; // create httpClient mock variable of any type

        // mock back-end response
        let mockGroupsResponse: IGroupsResponse = {
            groups: [
                {
                    groupName: "test1",
                    groupDescription: "test desc",
                    apiRoles: "read, write, update"
                },
                {
                    groupName: "test2",
                    groupDescription: "test desc",
                    apiRoles: "read, write"
                }
            ]
        }

        beforeEach(() => {
          // this method calls before executing each test
          // setup mock for httpClient service with 'Get' function using jest.
            httpClientMock = {
                get: jest.fn()
            };

            // create the service to test by injecting the mock http service 
            groupsDemoService = new GroupsTestDemoService(httpClientMock);
        });

        it('should return expected groups', async() => {
          // mock observable to return resolved promise with mock group response
          // the real function uses pipe to stream observables so that function is mocked
            const mockObservable = {
                pipe: () => Promise.resolve(mockGroupsResponse)
            }
            httpClientMock.get.mockImplementation(() => mockObservable) // using Jest mockImplementation to return http response that we mocked

            await expect(groupsDemoService.getGroups()).resolves.toBe(mockGroupsResponse); // call the real method and assert that the method succeeds and return expected result 
        })

        
    })
`;
        this.snippet3 = `
  import { HttpClient } from "@angular/common/http";
  import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
  import { TestBed } from "@angular/core/testing";
  import { GroupsTestDemoService } from "./groups-test-demo.service"
`;
        this.snippet4 = `
  describe('HttpClient testing using Angular testing libraries', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let groupsDemoService: GroupsTestDemoService; 

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });

      // Inject the http service, groups service and test controller for each test
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      groupsDemoService = TestBed.inject(GroupsTestDemoService);
    });
    /// Tests begin ///
  });
`;
        this.snippet5 = `
  it('can test HttpClient.get', async() => {      
    // Make an HTTP GET request
    const response =  groupsDemoService.getGroups();

    // Make assertion that response data  will be mock data after subscribing to the observable
    response.subscribe(data => 
      // When observable resolves, result should match test data
        expect(data).resolves.toBe(mockGroupsResponse));

    // The following expectOne() will match the request's URL.
    // Throws error if no/multiple match is found
    const req = httpTestingController.expectOne('https://localhost:5001/api/group')

    expect(req.request.method).toEqual('GET');

    // Mock the groupsResponse data when the req is called
    req.flush(mockGroupsResponse);
        
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
`;
        this.snippet6 = `
  it('should return an error when the server returns a 404', async() => {
    const mockErrorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not found'
    });
    const mockObservable = {
        pipe: () => Promise.reject(mockErrorResponse)
    }
    httpClientMock.get.mockImplementation(() => mockObservable)

    await expect(groupsDemoService.getGroups()).rejects.toBe(mockErrorResponse);
  })
`;
        this.snippet7 = `
  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    const response =  groupsDemoService.getGroups();
    response.subscribe(data => fail('should have failed with the 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(emsg);
    });

    const req = httpTestingController.expectOne('https://localhost:5001/api/group');

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  })
`;
        this.title.setTitle('Blogs | Testing Angular HTTP Service calls using JEST');
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
AngTestJestComponent.ɵfac = function AngTestJestComponent_Factory(t) { return new (t || AngTestJestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AngTestJestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngTestJestComponent, selectors: [["app-ang-test-jest"]], decls: 127, vars: 9, consts: [[1, "ang-matDialog"], ["fxFlex", "", "fxLayout", "column"], [1, "article-content"], [1, "header-center"], [1, "category"], [1, "blog-title"], [1, "author-info"], [1, "namee"], [1, "nameee"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], [1, "date-readtime"], [1, "article-paragraph"], [1, "article-header"], ["href", "https://angular.io/guide/testing"], ["href", "https://medium.com/@nerdic.coder/how-to-use-jest-unit-tests-with-angular-87509b500158"], [1, "code"], [1, "code-block"], ["href", "https://jestjs.io/docs/asynchronous"], ["href", "https://angular.io/guide/http#testing-http-requests"], [1, "comments"], [3, "identifier"]], template: function AngTestJestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Angular tutorial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Unit Testing Angular Services and Components Using JEST (Part1) ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Dec 10 \u00A0 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Unit testing your angular applications helps you ensure that your app is working as you expect. Unit-testing becomes a very useful tool to integrate automatic testing as the codebase grows large in size and the app is prone to bugs and issues. I like unit testing because I don\u2019t have to run the app manually and test each time I make changes in my code and make sure all the code is working as expected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Introduction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " This testing tutorial will offer techniques and tips on how to write unit tests for the service logic and the component in Angular. We will use a sample application that gets a list of groups from a backend service using HttpClient and displays the group information in the table. It walks you through testing the service functions that calls the API by using mock data to fake the http calls, and testing of the component using Angular\u2019s Testing object model - TestBed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " As Angular app is managed by the @NgModule classes. And we can define dependencies and setup environments for each component on their own module or in the root module. Similarly, services in angular often depend on other services which are injected in their constructor. So, in order to test the angular component/ services we will require a similar setup for creating components with its dependencies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Angular provides the TestBed class to set up testing environments for components/services. We will see more detail on this as we begin testing using the library. Angular also provides utilities and libraries to test for service dependencies and HttpCalls. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Setup Testing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Angular app by default comes with the Jasmine test framework and the Angular CLI downloads and installs everything you need to test an Angular application. Both frameworks make use of Angular testing libraries and modules and there are only a few syntax differences between them. You can find an official tutorial on testing using the Jasmine framework ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ". JEST seems to be liked by developers because it is faster and requires less configuration for testing angular apps. Unlike Jasmine and Karma, it does not require a browser to load the test results and it runs the tests in parallel. We can use Angular CLI to view the results and generate coverage reports. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " This tutorial requires that you have a JEST framework configured as you have to install it manually and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " is one of the guides which can help you with set up. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Testing HTTP Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " For this tutorial, we are going to test the service that is only dependent on HttpClient to call the API. So we will see how we can test the Http services. I will show you two different ways to test it. First, we will see how we can mock the HttpClient get method to return a rxJS promise with a group response. The service we are going to test is given below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " The groups data service makes a HTTP GET call to remote servers by injecting and delegating to the Angular HttpClientservice for XHR calls. We can test this data service with an injected HttpClient mock class with a GET Function as below. Similarly, if the service is dependent on other services we would test it by mocking the dependent services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " The GroupsService getGroups() method return Observables so we must subscribe to an observable to cause it to execute and assert that method succeeds or fails. The test technique above does not use any Angular util. We are simply mocking HttpClient service using Jest and injecting the mock service to create GroupService. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " So when we call the getGroups() function, it will return the mockGroupResponse that we have defined. The HttpClient Get function in this test will chain the pipe function which will return the resolved promise. If we want to test for error case then we can mock the function to return rejected promise using Jest MockImplementation. To view more about testing asynchronous code using JEST, here is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " In the same way, we can use Jest mocking to mock for error response. First, we create the mock error response and implement the httpClient to return rejected promise with the error. The test case for an 404 error scenario can be written as. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Testing HTTP Requests Using Angular library ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Another way to test the Angular service is using the Angular modules/libraries. Other interactions between the data services and the httpclient can be complex and difficult to mock with Jest mock functions. The HttpClientTestingModule can make testing other complex scenarios like POST, PUT or DELETE calls easier to test. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "@angular/common/http/testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " library makes it straightforward to set up mocking to mock the HTTP backend service so our tests can simulatealls to a remote server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Setting up HttpClientTestingModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " To test httpclient we need to import the HttpClientTestingModule, TestBed and the mocking controller and other required library as below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Then we need to setup our test environment for the service we are going to test using TestBed and add the HttpClientTestingModule to the TestBed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Now we have setup our testing environment so that the requests made in our tests hit the testing backend instead of real backend server. We are injecting httpClient service and the mocking controller using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "TestBed.inject()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " so we can reference them in our tests. Next we can write our unit test for getGroups method that expects a GET request and provides a mock response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Testing using Angular library runs in a slightly different pattern of testing. First, we make request call to the real service. Then, we make expectations that certain requests have been made, assert the expected response. And finally, we provide mock responses to return when the service is called by using \"flush\" method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " We can also make custom request expectations like making assertions and checking that the request has certain header. We can also handle more than one requests in a method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " more about Angular Http Testing Module ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " And to test for the scenario when HTTP request fails we can use the testing controller to flush and respond with mock error. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "pre", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "code", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "disqus", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet1, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet2, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet6, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet3, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet4, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet5, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet5, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet7, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("identifier", ctx.pageId);
    } }, directives: [ngx_disqus__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmctdGVzdC1qZXN0LmNvbXBvbmVudC5zY3NzIn0= */", ".ang-matDialog[_ngcontent-%COMP%] {\n  margin-top: 91px;\n  padding: 5px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-right: 64px;\n  max-width: 680px;\n  width: 100%;\n  min-width: 0px;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-top: 3.88em;\n  color: #757575;\n  margin-bottom: -0.31em;\n  font-style: normal;\n  letter-spacing: 0.077em;\n  line-height: 18px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.author-info[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 100%;\n  display: block;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.namee[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  align-items: center;\n  display: flex;\n  line-height: 20px;\n  font-size: 14px;\n}\n\n.nameee[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-height: 20px;\n  line-height: 14px;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.date-readtime[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #757575;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.article-paragraph[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n}\n\n.article-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 26px;\n  line-height: 44px;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #f2f2f2;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  font-weight: 300;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  font-weight: 300;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  float: left;\n  font-size: 14px;\n}\n\n.inline-code[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 5px;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n@media only screen and (max-width: 768px) {\n  .article-content[_ngcontent-%COMP%] {\n    margin-left: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1tYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVdBO0VBQ0ksdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0YiLCJmaWxlIjoiYW5nLW1hdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5nLW1hdERpYWxvZ3tcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFydGljbGUtY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5oZWFkZXItY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhdGVnb3J5e1xuICAgIG1hcmdpbi10b3A6IDMuODhlbTtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjMxZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3N2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ibG9nLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxufVxuXG4uYXV0aG9yLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG5cbn1cblxuLmluZm8tY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuXG4ubmFtZWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxuLm5hbWVlZXtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZm9sbG93e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzgsIDIzMSk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGF0ZS1yZWFkdGltZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMTcsIDExNywgMTE3KTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFydGljbGUtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29kZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbn1cblxuXG4uY29kZS1ibG9ja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5saW5lLWNvZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuXG59XG5cbi5mb2xsb3ctdHdpdHRlcntcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5hcnRpY2xlLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


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
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");



class AspNetAuthIdentityComponent {
    constructor(title) {
        this.title = title;
        this.pageId = "/blog-auth";
        this.snippet1 = `
  services.AddDbContext<AppIdentityDbContext>(x => 
    x.UseSqlite(Configuration.GetConnectionString("IdentityConnection")));`;
        this.snippet2 = `
  namespace Infrastructure.Identity
  {
      public class AppIdentityDbContext : IdentityDbContext<AppUser> // This ensures that EF will create our AppUser table with its properties
      {
          public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
          {
          }

          protected override void OnModelCreating(ModelBuilder builder)
          {
              base.OnModelCreating(builder);
          }
      }
  }
  `;
        this.snippet3 = `
  "ConnectionStrings": {
    "DefaultConnection":  "Data source=skinet.db",
    "IdentityConnection": "Data source=identity.db"
  }
  `;
        this.snippet4 = `
  dotnet ef migrations add IdentityInitial -c AppIdentityDbContext -o Infrastructure/Identity/Migrations
  `;
        this.snippet5 = `
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Joe",
                    Email = "joe@test.com",
                    UserName = "joe123",
                    Address = new Address
                    {
                        FirstName = "Joe",
                        LastName = "Smith",
                        Street = "1234 second st.",
                        City = "New York",
                        State = "NY",
                        ZipCode = "90210"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
  `;
        this.snippet6 = `
  
  `;
        this.snippet7 = `
    public static class IdentityServiceExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services)
        {
            var builder = services.AddIdentityCore<AppUser>();

            builder = new IdentityBuilder(builder.UserType, builder.Services);
            builder.AddEntityFrameworkStores<AppIdentityDbContext>();
            builder.AddSignInManager<SignInManager<AppUser>>();

            services.AddAuthentication();

            return services;
        }
    }
  `;
        this.snippet8 = `
  services.AddIdentityServices();
  `;
        this.snippet9 = `
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using (var scope =  host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService<ILoggerFactory>();
                try
                {
                    var context = services.GetRequiredService<StoreContext>();
                    await context.Database.MigrateAsync();

                    var userManager = services.GetRequiredService<UserManager<AppUser>>();
                    var identityContext = services.GetRequiredService<AppIdentityDbContext>();
                    await identityContext.Database.MigrateAsync();
                    await AppIdentityDbContextSeed.SeedUsersAsync(userManager);
                    
                }
                catch(Exception ex)
                {
                    var logger = loggerFactory.CreateLogger<Program>();
                    logger.LogError(ex, "An error occured during the migration");
                }
            }
            
            host.Run();
        }
  `;
        this.snippet10 = `
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if(user == null)
            {
                return Unauthorized();
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                return Unauthorized();
            }

            return new UserDto
            {
                Email =  user.Email,
                Token = "This will be a JWT token",
                DisplayName = user.DisplayName
            };
        }
    }
  `;
        this.snippet11 = `
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                return BadRequest();
            }

            return new UserDto
            {
                DisplayName = user.DisplayName,
                Token = "This will be a token",
                Email = user.Email
            };
        }
  `;
        this.snippet12 = `
    public class TokenService: ITokenService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _config = config;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"]));
        }

        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.DisplayName)
            };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds,
                Issuer = _config["Token:Issuer"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
  `;
        this.snippet14 = `
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => 
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"])),
                        ValidIssuer = config["Token:Issuer"],
                        ValidateIssuer = true,
                    };
                });
  `;
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
AspNetAuthIdentityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AspNetAuthIdentityComponent, selectors: [["app-asp-net-auth-identity"]], decls: 208, vars: 13, consts: [[1, "ang-matDialog"], ["fxFlex", "", "fxLayout", "column"], [1, "article-content"], [1, "header-center"], [1, "category"], [1, "blog-title"], [1, "author-info"], [1, "namee"], [1, "nameee"], [1, "follow-twitter"], ["href", "https://twitter.com/elvis_shrestha?ref_src=twsrc%5Etfw", "data-show-count", "false", "data-show-screen-name", "false", 1, "twitter-follow-button"], [1, "date-readtime"], [1, "article-paragraph"], ["href", "https://github.com/shreelvi/JWT-Authentication-ASPNetCore", "target", "_blank"], [1, "article-header"], ["href", "https://docs.microsoft.com/en-us/aspnet/identity/overview/getting-started/introduction-to-aspnet-identity"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Identity.EntityFrameworkCore/"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Identity/"], ["href", "http://www.nuget.org/packages/Microsoft.IdentityModel.Tokens/"], ["href", "http://www.nuget.org/packages/System.IdentityModel.Tokens.JWT/"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer/"], ["href", "http://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.OpenIdConnect/"], [1, "code"], [1, "code-block"], ["src", "assets/AspNetUser-table.png", "alt", "User", 1, "userTable_img"], ["src", "assets/Auth2.png", "alt", "User", 1, "userTable_img"], ["src", "assets/Auth3.png", "alt", "User", 1, "userTable_img"], [1, "comments"], [3, "identifier"]], template: function AspNetAuthIdentityComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " In our application, we will use ASP.NET Core Identity to manager the user accounts. It will be reposinsible for allowing us to register a new user and allow the user to login to our app. It also easily allows us to secure the user password with string hash. In addition, we can use the identity for other things such as social logins and more. We are going to use only some part of it, managing users and issue special JWT tokens to our clients so that they can use to authenticate against our application. ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Identity Classes and Identity DbContext ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " The Identity package we installed provides us with a IdentityUser class that we can utilize for our application users. It has lots different fields or properties including password hash, timestamp we can use in our app to capture a detail about users. We will add a class AppUser in our application inside the directory Core/Entities which will derive from the IdentityUser. AppUser class contains additional fields like DisplayName and Address about the Users that we can store. The AppUser and Address will have a one-to-one relationship. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Next, we will add a DbContext for managing Identity related data in our database. The IdentityDbContext will be different from our ApplicationDbContext that we will use for our application related data, and it will derive from the IdentityDbContext class provided by the Identity. Like our application DbContext, this will allows us to query the identity related data and the database will contain different Identity tables. We will add a constructor in IdentityDbContext class and pass a option field that will derive from base class. We need to specify AppIdentiyDbContext in our constructor option property as we have two different DbContext. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Then, we will add this as a service in the Startup.cs class so we can use the IdentityDbContext as a service as needed in our application. And configure it by providing database connection string. So, we will modify our startup class as below and we will also add a connection string for the Identity Db in the appsettings.json file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " App Settings for the SqlLite database. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Also, we have to pass our AppUser class to the IdentityDbContext so that it will create the AppUser table. So, the AppIdentiyDbContext class will look like this. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Setup Identity Database ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Now that we have our DbContext for the Identity setup in our application, we will need to setup the Identity database. To do this, we will add a new migration for Identity which will create the database and seed the database with an Example user to work with. As we can see in the Startup class, we are using the SqlLite database, as it is simpler and good for testing. This can be changed to any database based on preference, to work with Identity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " So, to create a new migration we will run the following command in the dotnet CLI. We need to specify the Identity Context using -c annotation, to use for migration as we have two different DbContext in our application. And we can specify the output directory where we want our migration files to be added. In this case we have specified to have it as seperate folder from our AppdbContext, under Identity/Migrations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " After running this command, we can see the new migration files that are added and examine different Identity tables with their properties in the 2022..._IdentityInitial.cs file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " We will work with a sample user to test our Identity Authentication so now we need to seed our Identity database with the example user. Adding a AppIdentityDbContextSeed under the same directory as AppIdentityDbContext.cs, Identity/Migration, will seed our Identity database with the test user. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " AppIdentityDbContextSeed.cs file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " In the seed file, we are using Identity services such as UserManager to create a new user and seed our db. In order to use this Identity service and other identity services in our application, we need to configure our startup class with the require identity services. So we will modify our startup class. Our identity configuration can get large so its a good practice to make use of extension class for startup. We will use an extension class to include the Identity related configuration such as configuring Identity system with our AppUser, signInManager and using EF for datastore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " The extension class for Identity related services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Then we will pass this class to our startup file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Account Controller with Login and Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Now that we have setup the identity related services, we can create the Identity database based on our initial migration and seed the db with the sample user as in AppIdentityContextSeedFile. To do this, we will need to modify our program class. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " We can see in the above program file, we have modified the main method to use logger using Microsoft.Logging to address issues while seeding the databases. We also have two databases, one for the Application, StoreContext and IdentityDbContext for identity. So we have created seperate migrations and seed the identity related data based on the IdentitySeed file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " With the Identity related configuration and database setup/seeding in place, we can run our application using dotnet cli, to apply the identity related migrations and create the identity database with seed data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " After running the app, we should see the SqlLite Identity database is added on the root directory. This can be accessed using SqlLite Explorer in VsCode. We can see all the identity related tables and the AspNetUser table with the seed user data. The AspNetUser table will look like below. It will contain all the identity properties from IdentityUser class such as PasswordHash, TwoFactorEnabled, EmailConfirmed and other properties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " So far we have completed setting up the application to use Identity and configured the database with initial migration/schema. Great, Now we are ready to add API endpoints for users account register and login. Let us add an AccountController in our application with two POST methods to allow users to register and login to our app. We will leave the token creation for now and come back to it later. So, the AccountController is going to look like below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Our AccountController is dependent on UserManager and SignInManager from Identity so we have passed those as a parameter in our constructor. These dependencies are responsible in our application to find users that are registered in our db using their email, and signInManager is responsible to verify the user password that is provided in login. As we can see in the Login method above, signInManager.CheckPasswordSignInAsync, we are passing password in parameters including false for lockoutOnFailure property. This property can be used to lockout users on multiple attempts with incorrect password. We will not use this Identity feature so just set it to false. We are passing a sample token to our client apps to access our API resources for now, which we will change it to real token. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " We should be able to login to our application with a seed user we created earlier. Testing the Login method using Postman will give us the following success result. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Similarly, using the Identity built in methods, we can create a POST Register method to allow users to register to use our app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " After adding a user using the above Register method, we should be able to login with the user we registered. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Generating a JWT Token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Now we will add a functionality to create a JSON Web token and pass it to client applications. JWT tokens are encoded string which is not human readable and we can decode a JWT token and view information about a user and token. We can use the JWT.IO website to decode a JWT token and it will display a result from the token that can be read. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " According to the website jwt.io, JSON web tokens are an open, industry standard for representing claims securely between two parties. It contains claims about users that the server will add when generating a token. Claims contain basic information such as username, token issued date etc. and a signature generated by a server. These claims can be later verified by the server when a client request access to the server app. The decoded token will contain information in three parts - Header which is Algorithm and Token type, Payload -- Claim about users and data, and a Signature. The signature will be created by the server and it will be used later to verify the token using a symmetric key. The same symmetric key will be used to encode and decode the token. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " To create a jwt token, we will add an ITokenService and TokenService in our application which will handle the token creation. The code for the service will look like below. In the CreateToken method we can see that we have added claims about users and created a signature using our token key from the config. We have also added a token validity time and issuer information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Verifying token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Next, we will modify the startup extension class for Identity, IdentityServiceExtension. This extension will start all the required identity services. Here, we can also add Identity Authentication service. In the code, we have configured it to use JWT Bearer defaults scheme and added a way to validate a token passed by clients. we are using the token key and token issuer to verify the signature and the server. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "code", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " After configuring the Identity authentication service, we need to use the authentication middleware in our application based on the configuration. So, we added app.UseAuthentication() just before Authorization middleware in our Startup class. We will also need to add the Token key and Issuer in our config, appsettings.json file as we are using them to create and verify the token. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " That's it! We have added all the code to implement JWT token based Authentication in our application. We are ready to test the Authentication feature now. After user is logged in successfully, s/he should recieve a JWT token from our server. This token should be successfully verified. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "disqus", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet1, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet3, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet2, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet4, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet5, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet7, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet8, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet9, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet10, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet11, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet12, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                      ", ctx.snippet12, "\n        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("identifier", ctx.pageId);
    } }, directives: [ngx_disqus__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: [".userTable_img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 700px;\n}\n\n@media only screen and (max-width: 768px) {\n  .userTable_img[_ngcontent-%COMP%] {\n    height: 170px;\n    width: 440px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FzcC1uZXQtYXV0aC1pZGVudGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VBQU47QUFDRiIsImZpbGUiOiJhc3AtbmV0LWF1dGgtaWRlbnRpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlclRhYmxlX2ltZ3tcbiAgICBoZWlnaHQ6IDIwMHB4OyBcbiAgICB3aWR0aDogNzAwcHg7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcbiAgICAudXNlclRhYmxlX2ltZ3tcbiAgICAgICAgaGVpZ2h0OiAxNzBweDsgXG4gICAgICAgIHdpZHRoOiA0NDBweDtcbiAgICB9XG5cbn0iXX0= */", ".ang-matDialog[_ngcontent-%COMP%] {\n  margin-top: 91px;\n  padding: 5px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.header-center[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-right: 64px;\n  max-width: 680px;\n  width: 100%;\n  min-width: 0px;\n}\n\n.category[_ngcontent-%COMP%] {\n  margin-top: 3.88em;\n  color: #757575;\n  margin-bottom: -0.31em;\n  font-style: normal;\n  letter-spacing: 0.077em;\n  line-height: 18px;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  line-height: 60px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.author-info[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.info-container[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  width: 100%;\n  display: block;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.namee[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  align-items: center;\n  display: flex;\n  line-height: 20px;\n  font-size: 14px;\n}\n\n.nameee[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  max-height: 20px;\n  line-height: 14px;\n}\n\n.follow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  text-decoration: none;\n  display: inline-block;\n  border-top-style: solid;\n  border-top-width: 1px;\n  border-top-left-radius: 99em;\n  border-top-right-radius: 99em;\n  border-bottom-right-radius: 99em;\n  border-bottom-left-radius: 99em;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #368ae7;\n  padding-top: 0px;\n  padding-right: 8px;\n  padding-left: 8px;\n  padding-bottom: 1px;\n  color: white;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.date-readtime[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #757575;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.article-paragraph[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 20px;\n  line-height: 32px;\n  font-weight: 300;\n}\n\n.article-header[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  font-size: 26px;\n  line-height: 44px;\n  font-weight: 400;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-image: initial;\n  background-position-x: initial;\n  background-position-y: initial;\n  background-size: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: #f2f2f2;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  font-weight: 300;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  font-weight: 300;\n  overflow-x: auto;\n  word-wrap: break-word;\n  word-break: break-word;\n  float: left;\n  font-size: 14px;\n}\n\n.inline-code[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.follow-twitter[_ngcontent-%COMP%] {\n  margin: 5px 0px 0px 5px;\n}\n\n.comments[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n@media only screen and (max-width: 768px) {\n  .article-content[_ngcontent-%COMP%] {\n    margin-left: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuZy1tYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSx5QkFBQTtBQVBKOztBQVdBO0VBQ0ksdUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVlBO0VBQ0k7SUFDSSxpQkFBQTtFQVROO0FBQ0YiLCJmaWxlIjoiYW5nLW1hdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5nLW1hdERpYWxvZ3tcbiAgICBtYXJnaW4tdG9wOiA5MXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmFydGljbGUtY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG5cbi5oZWFkZXItY2VudGVye1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmNhdGVnb3J5e1xuICAgIG1hcmdpbi10b3A6IDMuODhlbTtcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjMxZW07XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3N2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ibG9nLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxufVxuXG4uYXV0aG9yLWluZm97XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG5cbn1cblxuLmluZm8tY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuXG4ubmFtZWV7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxuLm5hbWVlZXtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZm9sbG93e1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTllbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OWVtO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCAxMzgsIDIzMSk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGF0ZS1yZWFkdGltZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOnJnYigxMTcsIDExNywgMTE3KTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFydGljbGUtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcnRpY2xlLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY29kZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBcbn1cblxuXG4uY29kZS1ibG9ja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5saW5lLWNvZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuXG59XG5cbi5mb2xsb3ctdHdpdHRlcntcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDVweDtcbn1cblxuLmNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjIwJTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjhweCkge1xuICAgIC5hcnRpY2xlLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ "fXoL");




































const materialModules = [
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]
];
class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ...materialModules
        ], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]], exports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_27__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'nav-bar', loadChildren: () => __webpack_require__.e(/*! import() | nav-bar-nav-bar-module */ "nav-bar-nav-bar-module").then(__webpack_require__.bind(null, /*! ./nav-bar/nav-bar.module */ "y+tR")).then(m => m.NavBarModule) },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-page-home-page-module */ "home-page-home-page-module").then(__webpack_require__.bind(null, /*! ./home-page/home-page.module */ "64/j")).then(m => m.HomePageModule) },
    { path: 'blog1', loadChildren: () => Promise.all(/*! import() | blogs-ang-mat-dialog-ang-mat-dialog-module */[__webpack_require__.e("default~blogs-ang-directive-ang-directive-module~blogs-ang-mat-dialog-ang-mat-dialog-module~blogs-an~446507ec"), __webpack_require__.e("blogs-ang-mat-dialog-ang-mat-dialog-module")]).then(__webpack_require__.bind(null, /*! ./blogs/ang-mat-dialog/ang-mat-dialog.module */ "Y7QG")).then(m => m.AngMatDialogModule) },
    { path: 'angular-directive-blog', loadChildren: () => Promise.all(/*! import() | blogs-ang-directive-ang-directive-module */[__webpack_require__.e("default~blogs-ang-directive-ang-directive-module~blogs-ang-mat-dialog-ang-mat-dialog-module~blogs-an~446507ec"), __webpack_require__.e("blogs-ang-directive-ang-directive-module")]).then(__webpack_require__.bind(null, /*! ./blogs/ang-directive/ang-directive.module */ "AYAn")).then(m => m.AngDirectiveModule) },
    { path: 'blog3', loadChildren: () => Promise.all(/*! import() | blogs-super-wifi-article-super-wifi-article-module */[__webpack_require__.e("default~blogs-ang-directive-ang-directive-module~blogs-ang-mat-dialog-ang-mat-dialog-module~blogs-an~446507ec"), __webpack_require__.e("blogs-super-wifi-article-super-wifi-article-module")]).then(__webpack_require__.bind(null, /*! ./blogs/super-wifi-article/super-wifi-article.module */ "xXsN")).then(m => m.SuperWifiArticleModule) },
    { path: 'blog4', loadChildren: () => Promise.all(/*! import() | blogs-ang-test-jest-ang-test-jest-module */[__webpack_require__.e("default~blogs-ang-directive-ang-directive-module~blogs-ang-mat-dialog-ang-mat-dialog-module~blogs-an~446507ec"), __webpack_require__.e("blogs-ang-test-jest-ang-test-jest-module")]).then(__webpack_require__.bind(null, /*! ./blogs/ang-test-jest/ang-test-jest.module */ "PKbK")).then(m => m.AngTestJestModule) },
    { path: 'test-table', loadChildren: () => __webpack_require__.e(/*! import() | test-product-component-test-product-module */ "test-product-component-test-product-module").then(__webpack_require__.bind(null, /*! ./test-product-component/test-product.module */ "Vs/m")).then(m => m.TestProductModule) },
    { path: 'asp-net-auth', loadChildren: () => Promise.all(/*! import() | blogs-asp-net-auth-identity-asp-net-auth-identity-module */[__webpack_require__.e("default~blogs-ang-directive-ang-directive-module~blogs-ang-mat-dialog-ang-mat-dialog-module~blogs-an~446507ec"), __webpack_require__.e("blogs-asp-net-auth-identity-asp-net-auth-identity-module")]).then(__webpack_require__.bind(null, /*! ./blogs/asp-net-auth-identity/asp-net-auth-identity.module */ "/Q77")).then(m => m.AspNetAuthIdentityModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map