!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var n,s=t.document,h=(s.documentElement,t.setTimeout),o=t.clearTimeout,a=i._N2,u=(t.requestAnimationFrame,Object.assign),r=function(t,i,n){t.dataset[i]=n},c=function(t,i){t.classList.add(i)},l=function(t,i){t.classList.remove(i)},d=function(t,i,n,s){s=s||{},t.addEventListener(i,n,s)};navigator.userAgent.indexOf("+http://www.google.com/bot.html")>-1||i.requestIdleCallback,i.cancelIdleCallback;n=function(){s.body},"complete"===s.readyState||"interactive"===s.readyState?n():Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==s.addEventListener?Document.prototype.addEventListener.call(s,"DOMContentLoaded",n):s.addEventListener("DOMContentLoaded",n),a.d("SmartSliderWidgetThumbnailDefaultVertical","SmartSliderWidget",(function(){"use strict";function t(t,i){this.parameters=u({minimumThumbnailCount:1.5},i),a.SmartSliderWidget.prototype.constructor.call(this,t,"thumbnail",".nextend-thumbnail-default")}t.prototype=Object.create(a.SmartSliderWidget.prototype),t.prototype.constructor=t,t.prototype.onStart=function(){this.bar=this.widget.querySelector(".nextend-thumbnail-inner"),d(this.bar,"scroll",this.onScroll.bind(this));var t=this.widget.querySelector(".nextend-thumbnail-previous"),i=this.widget.querySelector(".nextend-thumbnail-next");t&&d(t,"click",this.previousPane.bind(this)),i&&d(i,"click",this.nextPane.bind(this)),this.slider.stages.done("BeforeShow",this.onBeforeShow.bind(this)),this.slider.stages.done("WidgetsReady",this.onWidgetsReady.bind(this))},t.prototype.onBeforeShow=function(){var t=this.bar.querySelector(".nextend-thumbnail-scroller");this.dots=t.querySelectorAll(".n2-thumbnail-dot");for(var i,n,s=this.slider.realSlides,h=0;h<s.length;h++){var o=t.querySelector('[data-slide-public-id="'+(i=s[h].element,n="slidePublicId",i.dataset[n]+'"]'));"mouseenter"===this.parameters.action?new a.UniversalEnter(o,this.onDotHover.bind(this,s[h])):new a.UniversalClick(o,this.onDotClick.bind(this,s[h])),s[h].thumbnailDot=o}requestAnimationFrame(this.onScroll.bind(this)),d(this.slider.sliderElement,"SliderResize",this.onScroll.bind(this)),d(this.slider.sliderElement,"SlideWillChange",this.onSlideSwitch.bind(this))},t.prototype.onWidgetsReady=function(){this.onSlideSwitch({detail:{targetSlide:this.slider.currentRealSlide}})},t.prototype.onScroll=function(){var t=this.bar.scrollTop,i=this.bar.clientHeight,n=this.bar.scrollHeight;r(this.widget,"hasPrevious",0===t?0:1),r(this.widget,"hasNext",t+i<n?1:0)};var n=!1;return t.prototype.onDotClick=function(t){a._shouldPreventClick||(n||(this.slider.directionalChangeToReal(t.index),n=!0),h(function(){n=!1}.bind(this),400))},t.prototype.onDotHover=function(t){this.slider.directionalChangeToReal(t.index)},t.prototype.onSlideSwitch=function(e){var t=e.detail.targetSlide.slides[0];this.activateDots(t);var n=i.getComputedStyle(t.thumbnailDot),s=t.thumbnailDot.offsetTop-parseInt(n.getPropertyValue("margin-top")),h=t.thumbnailDot.getBoundingClientRect().height+parseInt(n.getPropertyValue("margin-top"))+parseInt(n.getPropertyValue("margin-bottom")),o=this.bar.scrollTop,a=i.getComputedStyle(this.bar),u=parseInt(a.paddingTop),r=this.bar.clientHeight,c=this.bar.scrollHeight;(s<o||s+h>o+r)&&(this.bar.scrollTop=Math.min(c-r,-u+s))},t.prototype.activateDots=function(t){var i,n;i=this.dots,n="n2-active",i.forEach((function(t){l(t,n)}));for(var s=t.slides,h=0;s.length>h;h++)c(s[h].thumbnailDot,"n2-active")},t.prototype.previousPane=function(){this.bar.scrollTop-=.75*this.bar.clientHeight},t.prototype.nextPane=function(){this.bar.scrollTop+=.75*this.bar.clientHeight},t.prototype.getSize=function(){return this.getWidth()},t}))}(window);