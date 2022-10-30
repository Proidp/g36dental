var GRVE_EXT=GRVE_EXT||{};!function(e){"use strict";GRVE_EXT.documentReady={init:function(){GRVE_EXT.sectionSettings.init(),GRVE_EXT.basicElements.init()}},GRVE_EXT.documentResize={init:function(){GRVE_EXT.basicElements.iconBox.resize(),GRVE_EXT.sectionSettings.expandColumnBg()}},GRVE_EXT.afterPageTransition={init:function(){GRVE_EXT.basicElements.counter(),GRVE_EXT.basicElements.pieChartInit()}},GRVE_EXT.documentLoad={init:function(){GRVE_EXT.basicElements.iconBox.init()}},GRVE_EXT.sectionSettings={init:function(){this.expandColumnBg(),this.changeBgColorOnScroll(),this.opacityScroll(),this.columnHover()},expandColumnBg:function(){e(".grve-expand-bg").each(function(){var t=e(this),a=t.children(),i="left";if(t.hasClass("grve-expand-bg-right")&&(i="right"),GRVE_EXT.sectionSettings.expandSettings(t,a,i),t.hasClass("grve-clipping-animation")){var n=t.find(".grve-clipping-content").children();GRVE_EXT.sectionSettings.expandSettings(t,n,i)}})},expandSettings:function(t,r,o){function s(){"left"==o?(r[0].style.cssText+="padding-left: "+g+"px !important",r[0].style.cssText+="margin-left: -"+g+"px !important",r[0].style.cssText+="width:"+p+"px !important"):(r[0].style.cssText+="padding-right: "+l+"px !important",r[0].style.cssText+="margin-right: -"+l+"px !important",r[0].style.cssText+="width:"+v+"px !important")}function c(){r[0].style.cssText+="padding-left: "+g+"px !important",r[0].style.cssText+="margin-left: -"+g+"px !important",r[0].style.cssText+="padding-right: "+l+"px !important",r[0].style.cssText+="margin-right: -"+l+"px !important",r[0].style.cssText+="width:"+u+"px !important"}function d(){r.css({"margin-left":"","margin-right":"","padding-left":"","padding-right":"",width:""})}d();var g=r.offset().left,l=e(window).width()-(g+r.width()),p=r.outerWidth()+g,v=r.outerWidth()+l,u=e(window).width();u>i&&u<a?t.hasClass("grve-tablet-landscape-expand-bg-reset")?d():t.hasClass("grve-tablet-landscape-expand-bg-both-sides")?c():s():u>n&&u<i?t.hasClass("grve-tablet-portrait-expand-bg-reset")?d():t.hasClass("grve-tablet-portrait-expand-bg-both-sides")?c():s():u<n?t.hasClass("grve-mobile-expand-bg-reset")?d():t.hasClass("grve-mobile-expand-bg-both-sides")?c():s():s(),t.css("visibility","visible")},changeBgColorOnScroll:function(){if("undefined"==typeof bgScrollex&&!e().bgScrollex)return console.log("bgScrollex not Defined."),!0;e(".grve-section.grve-with-bg-animated-color, .grve-inner-section.grve-with-bg-animated-color, .grve-column.grve-with-bg-animated-color .grve-column-wrapper, .grve-column-inner.grve-with-bg-animated-color .grve-column-wrapper-inner").bgScrollex()},opacityScroll:function(){if("undefined"==typeof bgOpacity&&!e().bgOpacity)return console.log("bgOpacity not Defined."),!0;d.bgOpacity()},columnHover:function(){r.on("touchstart mouseenter",".grve-hover-animation-wrapper",function(t){var a=e(this).parents(".grve-hover-animation");a.addClass("grve-hover-effect");var i=function(t){var a=[];return t.siblings().each(function(){a.push(e(this).css("z-index"))}),a.push(t.css("z-index")),Math.max.apply(Math,a)+1}(a);a.css("z-index",i),a.hasClass("grve-emphasized")&&a.siblings().addClass("grve-understate")}),r.on("mouseleave touchmove click",".grve-hover-animation-wrapper",function(t){var a=e(this).parents(".grve-hover-animation");a.removeClass("grve-hover-effect"),a.css("z-index",""),a.hasClass("grve-emphasized")&&a.siblings().removeClass("grve-understate")})}},GRVE_EXT.basicElements={init:function(){this.autoHeadings(),this.setPieChart(),this.progressBars(),this.advancedPromo(),this.messageBox(),this.htmlVideoPlayWhenAppear(),this.accordionToggle(),this.tabs(),this.productSocials(),this.countdown()},autoHeadings:function(){e(".grve-portfolio.grve-auto-headings .grve-isotope-item-inner").autoHeading({compressor:20,items:[{item:".grve-title",min:18,max:50}]})},setPieChart:function(){p.each(function(){var t=e(this),a=t.data("pie-size"),i="130px";"small"==a&&(i="100px"),"large"==a&&(i="160px"),t.css({width:i,height:i,"line-height":i})})},pieChartInit:function(){if("undefined"==typeof easyPieChart&&!e().easyPieChart)return console.log("Easy Pie Chart not Defined."),!0;p.each(function(){var t=e(this),a=""!==t.parent().data("delay")?parseInt(t.parent().data("delay")):0,i=""!==t.data("pie-active-color")?t.data("pie-active-color"):"rgba(0,0,0,1)",n=""!==t.data("pie-color")?t.data("pie-color"):"rgba(0,0,0,0.1)",r=""!==t.data("pie-line-cap")?t.data("pie-line-cap"):"round",o=""!==t.data("pie-line-size")?t.data("pie-line-size"):"6",s=t.data("pie-size"),c="130";"small"==s&&(c="100"),"large"==s&&(c="160"),t.appear(function(){setTimeout(function(){t.easyPieChart({barColor:i,trackColor:n,scaleColor:!1,lineCap:r,lineWidth:o,animate:1500,size:c})},a)})})},progressBars:function(){g.each(function(){e(this).appear(function(){var t=e(this).attr("data-value");e(this).find(".grve-bar-line").animate({width:t+"%"},1600)})})},counter:function(){if("undefined"==typeof CountUp&&!e().CountUp)return console.log("CountUp not Defined."),!0;l.each(function(t){var a=e(this),i=a.find("span"),n=""!==i.attr("data-thousands-separator")?i.attr("data-thousands-separator"):",",r=""!==a.attr("data-delay")?parseInt(a.attr("data-delay")):200,o={useEasing:!0,useGrouping:!0,separator:"yes"!==i.attr("data-thousands-separator-vis")?n:"",decimal:""!==i.attr("data-decimal-separator")?i.attr("data-decimal-separator"):".",prefix:""!==i.attr("data-prefix")?i.attr("data-prefix"):"",suffix:""!==i.attr("data-suffix")?i.attr("data-suffix"):""};i.attr("id","grve-counter-"+t);var s=new CountUp(i.attr("id"),i.attr("data-start-val"),i.attr("data-end-val"),i.attr("data-decimal-points"),2.5,o);a.appear(function(){setTimeout(function(){s.start()},r)})})},advancedPromo:function(){e(".grve-expandable-info").each(function(){var t=e(this),a=t.parents(".grve-section"),i=t.find(".grve-expandable-info-content"),n=parseInt(a.css("padding-top")),r=parseInt(a.css("padding-bottom"));a.addClass("grve-pointer-cursor"),a.on("click",function(){var t="none"!=s.data("sticky")?c.outerHeight():0,a=e(".grve-fields-bar").length?e(".grve-fields-bar").outerHeight():0,n=e(this).offset().top-(t+a);i.is(":visible")?i.slideUp(600,function(){i.removeClass("show")}):e("html,body").animate({scrollTop:n},600,function(){i.slideDown(function(){i.addClass("show")})})}),a.on("mouseenter",function(){e(this).css({"padding-top":n+40,"padding-bottom":r+40})}),a.on("mouseleave",function(){e(this).css({"padding-top":n,"padding-bottom":r})})})},iconBox:{boxArr:[],sizeArr:[],init:function(){var t=this;t.boxArr=e.makeArray(e(".grve-box-icon.grve-advanced-hover")),t.resize(),e.each(t.boxArr,function(a,i){var n=e(i),r=n.find("p"),o=n.parent();o.on("mouseenter.grve_icon_box",function(){r.length&&t.toggle(!0,n,r,0)}),o.on("mouseleave.grve_icon_box",function(){r.length&&t.toggle(!1,n,r,t.sizeArr[a])})})},resize:function(){var t=this;t.sizeArr=[],e.each(t.boxArr,function(a,i){var n=e(i).find("p"),r=n.length?n.outerHeight():0;e(i).css({transform:"translate(0px, "+r+"px)",visibility:"visible"}),n.css({transform:"translate(0px, 100%)"}),t.sizeArr.push(r)})},toggle:function(e,t,a,i){var n=gsap.timeline(),r=e?1:0;n.to(t,{duration:.3,y:i,ease:"power1.out"}),n.to(a,{duration:.5,y:i,opacity:r,ease:"power1.out"},"-=0.2")}},messageBox:function(){e(".grve-message").find(".grve-close-btn").on("click",function(){e(this).parent().slideUp(250)})},htmlVideoPlayWhenAppear:function(){e(".grve-embed-video").each(function(){var t=e(this);t[0].pause(),t.appear(function(){t[0].autoplay&&t[0].play()},{accX:0,accY:-150})})},accordionToggle:function(){e(".grve-accordion-wrapper.grve-action-toggle").on("click",".grve-title-wrapper",function(){e(this).toggleClass("active").next().slideToggle(350),setTimeout(function(){o.trigger("resize")},350)}),e(".grve-accordion-wrapper.grve-action-accordion").on("click",".grve-title-wrapper",function(){var t=e(this);t.toggleClass("active").next().slideToggle(350).parent().siblings().find(".grve-title-wrapper").removeClass("active").next().slideUp(350),setTimeout(function(){o.trigger("resize"),t.parents().hasClass("grve-accordion-go-top")&&GRVE.helpers.linkGoToTop(t.parent())},350)})},tabs:function(){e(".grve-tab-title").on("click",function(){var t=e(this),a=t.data("rel");t.parents(".grve-tab").find(".grve-tab-title").removeClass("active"),t.addClass("active"),t.hasClass("grve-responsive-tab-link")&&t.parents(".grve-tab").find(".grve-tabs-title").hasClass("grve-tabs-collapse")?t.parents(".grve-tab").find(a).toggleClass("active"):(t.parents(".grve-tab").find(".grve-tab-content").removeClass("active"),t.parents(".grve-tab").find(a).addClass("active")),setTimeout(function(){o.trigger("resize")},350),t.parents(".grve-tab").find(a).find(".flickity").length&&e(".flickity").flickity("resize"),t.parents().hasClass("grve-tabs-go-top")&&GRVE.helpers.linkGoToTop(t.parent())})},productSocials:function(){var t=e(".grve-product-social"),a=t.find("li");t.length&&t.appear(function(){a.each(function(t,a){var i=e(this);setTimeout(function(){i.addClass("grve-animated")},150*t)})},{accX:0,accY:-50})},countdown:function(){if("undefined"==typeof countdown&&!e().countdown)return console.log("Countdown not Defined."),!0;e(".grve-countdown").each(function(){var t=e(this),a=t.data("countdown"),i=t.data("numbers-size"),n=t.data("text-size"),r=t.data("bg-color"),o=t.data("numbers-color"),s=t.data("text-color"),c=t.data("increase-heading"),d="grve-number grve-"+i+" grve-text-"+o,g="",l="",p=t.data("countdown-format").split("|");void 0!==c&&(d+=" grve-increase-heading grve-heading-"+c),e.each(p,function(e,t){switch(t){case"w":l=impeka_grve_main_data.string_weeks;break;case"D":case"d":case"n":l=impeka_grve_main_data.string_days;break;case"H":l=impeka_grve_main_data.string_hours;break;case"M":l=impeka_grve_main_data.string_minutes;break;case"S":l=impeka_grve_main_data.string_seconds;break;default:l=""}g+=void 0!==r?'<div class="grve-countdown-item grve-bg-'+r+'">':'<div class="grve-countdown-item">',g+='<div class="'+d+'"><span>%'+t+"</span></div>",g+='<span class="grve-'+n+" grve-text-"+s+'">'+l+"</span>",g+="</div>"}),t.countdown(a,function(a){t=e(this).html(a.strftime(g))})})}};var t,a=1200,i=1023,n=767,r=(e(".grve-body").hasClass("admin-bar"),e(document)),o=e(window),s=(e("body"),e("#grve-theme-content"),e("#grve-header")),c=e("#grve-main-header"),d=(c.data("header-skin"),e(".grve-vertical-menu"),e("#grve-main-responsive-header"),e("#grve-top-bar"),e("#grve-feature-section"),e("#grve-feature-slider"),e(".grve-page-title"),e(".grve-bg-video"),e(".grve-sticky-element"),e(".grve-parallax-effect"),e(".grve-navigation-bar.grve-layout-2"),e(".grve-animated-item"),e(".grve-bg-scroll-effect")),g=(GRVE.helpers.getScrollBarWidth(),c.hasClass("grve-layout-top-bottom")&&e(".grve-bottom-header-area"),c.data("sticky"),void 0!==e("#grve-frames").data("frame-size")&&e("#grve-frames").data("frame-size"),e(".grve-progress-bar")),l=(e(".grve-back-top"),e(".grve-counter")),p=e(".grve-chart-number");e(function(){GRVE_EXT.documentReady.init()}),o.on("load",function(){GRVE_EXT.documentLoad.init()}),o.on("resize",function(){window.clearTimeout(t),t=window.setTimeout(function(){GRVE_EXT.documentResize.init()},300)}),o.on("grve_after_page_transition",function(){GRVE_EXT.afterPageTransition.init()})}(jQuery);