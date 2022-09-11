!function(){"use strict";var e,t={774:function(e,t,r){var i=r(755),n=r.n(i);r(272);function s(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t,this.init()}var t,r,i;return t=e,(r=[{key:"init",value:function(){this.findElems(),this.stateObject={min:this.min,max:this.max,valueFrom:this.from||0,valueTo:this.to||0,step:this.step||1,scalePercentGap:this.gap||1,scaleMarks:this.marks,isTip:this.tip,isProgress:this.progress,isRange:this.range,isVertical:this.vertical},this.addSlider(this.stateObject),this.updateForm(),this.addListeners()}},{key:"addListeners",value:function(){var e,t,r,i,n=this;if(this.form){var s=[];this.form.querySelectorAll(".slider__input").forEach((function(e){e&&s.push(e)})),s.forEach((function(e){return e.addEventListener("change",n.handleItemChange.bind(n))}))}null===(e=this.content)||void 0===e||e.addEventListener("mousedown",this.handleCotentClick.bind(this)),null===(t=this.content)||void 0===t||t.addEventListener("click",this.handleCotentClick.bind(this)),this.thumb&&(null===(r=this.thumb)||void 0===r||r.addEventListener("keydown",this.handleThumbKeyPress.bind(this)),null===(i=this.thumb)||void 0===i||i.addEventListener("touchmove",this.handleThumbTouchMove.bind(this),{passive:!0}))}},{key:"handleItemChange",value:function(e){var t=e.target;if(t instanceof HTMLInputElement){var r=t.dataset.role,i=this.mapElems.get("".concat(r));if(void 0===i)return;var n,s=this.slider.getValue(i);void 0!==(n="boolean"==typeof s?t.checked:"number"==typeof s?Number(t.value):void 0)&&(this.slider.setValue("".concat(i),n),"valueFrom"!==i&&"valueTo"!==i&&(this.content&&(this.content.innerHTML=""),this.addSlider(this.slider.getState())),this.updateForm())}}},{key:"addSlider",value:function(e){this.content&&(this.slider=n()(this.content).sliderPlugin(e))}},{key:"findElems",value:function(){var e,t;if(this.mapElems=new Map,this.content=this.root.querySelector(".slider__content"),this.form=this.root.querySelector(".slider__form"),this.form){var r=this.form.querySelector(".slider__input[data-role = min]");this.min=Number(r.value),this.mapElems.set("min","min");var i=this.form.querySelector(".slider__input[data-role = max]");this.max=Number(i.value),this.mapElems.set("max","max");var n=this.form.querySelector(".slider__input[data-role = step]");this.step=Number(n.value),this.mapElems.set("step","step");var s=this.form.querySelector(".slider__input[data-role = from]");this.from=Number(s.value),s.step="".concat(this.step),this.mapElems.set("from","valueFrom");var o=this.form.querySelector(".slider__input[data-role = to]");this.to=Number(o.value),o.step="".concat(this.step),this.mapElems.set("to","valueTo");var a=this.form.querySelector(".slider__input[data-role = gap]");a.value&&(this.gap=Number(a.value)),this.mapElems.set("gap","scalePercentGap");var l=this.form.querySelector(".slider__input[data-role = range]");this.range=l.checked,this.range&&(o.disabled=!1),this.range||(o.disabled=!0),this.mapElems.set("range","isRange");var u=this.form.querySelector(".slider__input[data-role = marks]");this.marks=u.checked,this.marks&&(a.disabled=!1),this.marks||(a.disabled=!0),this.mapElems.set("marks","scaleMarks");var h=this.form.querySelector(".slider__input[data-role = tip]");this.tip=h.checked,this.mapElems.set("tip","isTip");var c=this.form.querySelector(".slider__input[data-role = progress]");this.progress=c.checked,this.mapElems.set("progress","isProgress");var d=this.form.querySelector(".slider__input[data-role = vertical]");this.vertical=d.checked,this.mapElems.set("vertical","isVertical"),(null===(e=this.content)||void 0===e?void 0:e.querySelector(".plugin-slider__thumb"))&&(this.thumb=null===(t=this.content)||void 0===t?void 0:t.querySelector(".plugin-slider__thumb"))}}},{key:"updateForm",value:function(){var e=this;this.mapElems.forEach((function(t,r){var i,n=null===(i=e.form)||void 0===i?void 0:i.querySelector(".slider__input[data-role = ".concat(r,"]"));n instanceof HTMLInputElement&&(n&&"number"==typeof e.slider.getValue(t)&&(n.value="".concat(e.slider.getValue("".concat(t)))),n&&"boolean"==typeof e.slider.getValue(t)&&(e.slider.getValue("".concat(t))?n.checked=!0:n.checked=!1),e.findElems())}))}},{key:"handleCotentClick",value:function(){var e,t,r=this,i=function(){return r.updateForm()};null===(e=this.content)||void 0===e||e.addEventListener("mousemove",i),null===(t=this.content)||void 0===t||t.addEventListener("mouseup",(function e(){var t,n;null===(t=r.content)||void 0===t||t.removeEventListener("mousemove",i),null===(n=r.content)||void 0===n||n.removeEventListener("mouseup",e)}))}},{key:"handleThumbKeyPress",value:function(e){var t=e.key;"ArrowLeft"!==t&&"ArrowUp"!==t&&"ArrowRight"!==t&&"ArrowDown"!==t||this.updateForm()}},{key:"handleThumbTouchMove",value:function(){this.updateForm()}}])&&s(t.prototype,r),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();document.querySelectorAll(".slider").forEach((function(e){return new o(e)}))}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e].call(s.exports,s,s.exports,i),s.exports}i.m=t,e=[],i.O=function(t,r,n,s){if(!r){var o=1/0;for(h=0;h<e.length;h++){r=e[h][0],n=e[h][1],s=e[h][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[l])}))?r.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(h--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[r,n,s]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={577:0,309:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],a=r[1],l=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var h=l(i)}for(t&&t(r);u<o.length;u++)s=o[u],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(h)},r=self.webpackChunkmeta_slider=self.webpackChunkmeta_slider||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=i.O(void 0,[755,272],(function(){return i(774)}));n=i.O(n)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby9kZW1vLjVmMmU1M2E0YmI4MWJiMzFmMWFlLmpzIiwibWFwcGluZ3MiOiI2QkFBSUEsRSw4TkNhRUMsRUFBQUEsV0FnREosV0FBWUMsSSw0RkFBYSxTQUN2QkMsS0FBS0QsS0FBT0EsRUFDWkMsS0FBS0MsTUFDTixDLDJDQUVPLFdBQ05ELEtBQUtFLFlBQ0xGLEtBQUtHLFlBQWMsQ0FDakJDLElBQUtKLEtBQUtJLElBQ1ZDLElBQUtMLEtBQUtLLElBQ1ZDLFVBQVdOLEtBQUtPLE1BQVEsRUFDeEJDLFFBQVNSLEtBQUtTLElBQU0sRUFDcEJDLEtBQU1WLEtBQUtVLE1BQVEsRUFDbkJDLGdCQUFpQlgsS0FBS1ksS0FBTyxFQUM3QkMsV0FBWWIsS0FBS2MsTUFDakJDLE1BQU9mLEtBQUtnQixJQUNaQyxXQUFZakIsS0FBS2tCLFNBQ2pCQyxRQUFTbkIsS0FBS29CLE1BQ2RDLFdBQVlyQixLQUFLc0IsVUFHbkJ0QixLQUFLdUIsVUFBVXZCLEtBQUtHLGFBQ3BCSCxLQUFLd0IsYUFFTHhCLEtBQUt5QixjQUNOLEcsMEJBRU8sV0FBWSxJLFFBQUEsT0FDbEIsR0FBSXpCLEtBQUswQixLQUFNLENBQ2IsSUFBTUMsRUFBMkIsR0FDakMzQixLQUFLMEIsS0FBS0UsaUJBQWlCLGtCQUFrQkMsU0FBUSxTQUFDQyxHQUNoREEsR0FDRkgsRUFBTUksS0FBS0QsRUFFZCxJQUVESCxFQUFNRSxTQUFRLFNBQUNDLEdBQUQsT0FBT0EsRUFBRUUsaUJBQWlCLFNBQVUsRUFBS0MsaUJBQWlCQyxLQUFLLEdBQS9ELEdBQ2YsQ0FFVyxRQUFaLEVBQUFsQyxLQUFLbUMsZUFBT0MsSUFBQUEsR0FBQUEsRUFBRUosaUJBQWlCLFlBQWFoQyxLQUFLcUMsa0JBQWtCSCxLQUFLbEMsT0FDNUQsUUFBWixFQUFBQSxLQUFLbUMsZUFBT0csSUFBQUEsR0FBQUEsRUFBRU4saUJBQWlCLFFBQVNoQyxLQUFLcUMsa0JBQWtCSCxLQUFLbEMsT0FDaEVBLEtBQUt1QyxRQUNHLFFBQVYsRUFBQXZDLEtBQUt1QyxhQUFLQyxJQUFBQSxHQUFBQSxFQUFFUixpQkFBaUIsVUFBV2hDLEtBQUt5QyxvQkFBb0JQLEtBQUtsQyxPQUM1RCxRQUFWLEVBQUFBLEtBQUt1QyxhQUFLRyxJQUFBQSxHQUFBQSxFQUFFVixpQkFDVixZQUNBaEMsS0FBSzJDLHFCQUFxQlQsS0FBS2xDLE1BQy9CLENBQUU0QyxTQUFTLElBR2hCLEcsOEJBRU8sU0FBaUJkLEdBQ3ZCLElBQVFlLEVBQVdmLEVBQVhlLE9BQ1IsR0FBSUEsYUFBa0JDLGlCQUFrQixDQUN0QyxJQUFRQyxFQUFTRixFQUFPRyxRQUFoQkQsS0FDRkUsRUFBUWpELEtBQUtrRCxTQUFTQyxJQUFkLFVBQXFCSixJQUNuQyxRQUFjSyxJQUFWSCxFQUFxQixPQUN6QixJQUNJSSxFQURFQyxFQUFhdEQsS0FBS3VELE9BQU9DLFNBQVNQLFFBU3RCRyxLQU5oQkMsRUFEd0Isa0JBQWZDLEVBQ0dULEVBQU9ZLFFBQ1ksaUJBQWZILEVBQ0pJLE9BQU9iLEVBQU9jLFlBRWRQLEtBR1pwRCxLQUFLdUQsT0FBT0ssU0FBWixVQUF3QlgsR0FBU0ksR0FDbkIsY0FBVkosR0FBbUMsWUFBVkEsSUFDdkJqRCxLQUFLbUMsVUFBU25DLEtBQUttQyxRQUFRMEIsVUFBWSxJQUMzQzdELEtBQUt1QixVQUFVdkIsS0FBS3VELE9BQU9PLGFBRTdCOUQsS0FBS3dCLGFBRVIsQ0FDRixHLHVCQUVPLFNBQVV1QyxHQUNYL0QsS0FBS21DLFVBQ1ZuQyxLQUFLdUQsT0FBU1MsSUFBRWhFLEtBQUttQyxTQUFTOEIsYUFBYUYsR0FDNUMsRyx1QkFFTyxXLFFBS04sR0FKQS9ELEtBQUtrRCxTQUFXLElBQUlnQixJQUVwQmxFLEtBQUttQyxRQUFVbkMsS0FBS0QsS0FBS29FLGNBQWMsb0JBQ3ZDbkUsS0FBSzBCLEtBQU8xQixLQUFLRCxLQUFLb0UsY0FBYyxpQkFDL0JuRSxLQUFLMEIsS0FBVixDQUNBLElBQU10QixFQUNKSixLQUFLMEIsS0FBS3lDLGNBQWMsbUNBQzFCbkUsS0FBS0ksSUFBTXNELE9BQU90RCxFQUFJdUQsT0FDdEIzRCxLQUFLa0QsU0FBU2tCLElBQUksTUFBTyxPQUV6QixJQUFNL0QsRUFDSkwsS0FBSzBCLEtBQUt5QyxjQUFjLG1DQUMxQm5FLEtBQUtLLElBQU1xRCxPQUFPckQsRUFBSXNELE9BQ3RCM0QsS0FBS2tELFNBQVNrQixJQUFJLE1BQU8sT0FFekIsSUFBTTFELEVBQ0pWLEtBQUswQixLQUFLeUMsY0FBYyxvQ0FDMUJuRSxLQUFLVSxLQUFPZ0QsT0FBT2hELEVBQUtpRCxPQUN4QjNELEtBQUtrRCxTQUFTa0IsSUFBSSxPQUFRLFFBRTFCLElBQU03RCxFQUNKUCxLQUFLMEIsS0FBS3lDLGNBQWMsb0NBQzFCbkUsS0FBS08sS0FBT21ELE9BQU9uRCxFQUFLb0QsT0FDeEJwRCxFQUFLRyxLQUFMLFVBQWVWLEtBQUtVLE1BQ3BCVixLQUFLa0QsU0FBU2tCLElBQUksT0FBUSxhQUUxQixJQUFNM0QsRUFDSlQsS0FBSzBCLEtBQUt5QyxjQUFjLGtDQUMxQm5FLEtBQUtTLEdBQUtpRCxPQUFPakQsRUFBR2tELE9BQ3BCbEQsRUFBR0MsS0FBSCxVQUFhVixLQUFLVSxNQUNsQlYsS0FBS2tELFNBQVNrQixJQUFJLEtBQU0sV0FFeEIsSUFBTXhELEVBQ0paLEtBQUswQixLQUFLeUMsY0FBYyxtQ0FDdEJ2RCxFQUFJK0MsUUFBTzNELEtBQUtZLElBQU04QyxPQUFPOUMsRUFBSStDLFFBQ3JDM0QsS0FBS2tELFNBQVNrQixJQUFJLE1BQU8sbUJBRXpCLElBQU1oRCxFQUNKcEIsS0FBSzBCLEtBQUt5QyxjQUFjLHFDQUMxQm5FLEtBQUtvQixNQUFRQSxFQUFNcUMsUUFDZnpELEtBQUtvQixRQUFPWCxFQUFHNEQsVUFBVyxHQUN6QnJFLEtBQUtvQixRQUFPWCxFQUFHNEQsVUFBVyxHQUMvQnJFLEtBQUtrRCxTQUFTa0IsSUFBSSxRQUFTLFdBRTNCLElBQU10RCxFQUNKZCxLQUFLMEIsS0FBS3lDLGNBQWMscUNBQzFCbkUsS0FBS2MsTUFBUUEsRUFBTTJDLFFBQ2Z6RCxLQUFLYyxRQUFPRixFQUFJeUQsVUFBVyxHQUMxQnJFLEtBQUtjLFFBQU9GLEVBQUl5RCxVQUFXLEdBQ2hDckUsS0FBS2tELFNBQVNrQixJQUFJLFFBQVMsY0FFM0IsSUFBTXBELEVBQ0poQixLQUFLMEIsS0FBS3lDLGNBQWMsbUNBQzFCbkUsS0FBS2dCLElBQU1BLEVBQUl5QyxRQUNmekQsS0FBS2tELFNBQVNrQixJQUFJLE1BQU8sU0FFekIsSUFBTWxELEVBQ0psQixLQUFLMEIsS0FBS3lDLGNBQWMsd0NBQzFCbkUsS0FBS2tCLFNBQVdBLEVBQVN1QyxRQUN6QnpELEtBQUtrRCxTQUFTa0IsSUFBSSxXQUFZLGNBRTlCLElBQU05QyxFQUNKdEIsS0FBSzBCLEtBQUt5QyxjQUFjLHdDQUMxQm5FLEtBQUtzQixTQUFXQSxFQUFTbUMsUUFDekJ6RCxLQUFLa0QsU0FBU2tCLElBQUksV0FBWSxlQUVkLFFBQVosRUFBQXBFLEtBQUttQyxlQUFPQyxJQUFBQSxPQUFBLEVBQUFBLEVBQUUrQixjQUFjLDRCQUM5Qm5FLEtBQUt1QyxNQUFvQixRQUFaLEVBQUF2QyxLQUFLbUMsZUFBT0csSUFBQUEsT0FBQSxFQUFBQSxFQUFFNkIsY0FBYyx5QkEvRHJCLENBaUV2QixHLHdCQUVPLFdBQVUsV0FDaEJuRSxLQUFLa0QsU0FBU3JCLFNBQVEsU0FBQ3lDLEVBQWVYLEcsTUFDOUJZLEVBQW1CLFFBQVQsSUFBSzdDLFlBQUlVLElBQUFBLE9BQUEsRUFBQUEsRUFBRStCLGNBQUYscUNBQThDUixFQUE5QyxNQUNyQlksYUFBbUJ6QixtQkFDakJ5QixHQUFnRCxpQkFBOUIsRUFBS2hCLE9BQU9DLFNBQVNjLEtBQ3pDQyxFQUFRWixNQUFSLFVBQW1CLEVBQUtKLE9BQU9DLFNBQVosVUFBd0JjLE1BR3pDQyxHQUFnRCxrQkFBOUIsRUFBS2hCLE9BQU9DLFNBQVNjLEtBQ3JDLEVBQUtmLE9BQU9DLFNBQVosVUFBd0JjLElBQzFCQyxFQUFRZCxTQUFVLEVBRWxCYyxFQUFRZCxTQUFVLEdBSXRCLEVBQUt2RCxZQUVSLEdBQ0YsRywrQkFFTyxXQUFpQixJLElBQUEsT0FDakJzRSxFQUFTLGtCQUFNLEVBQUtoRCxZQUFYLEVBTUgsUUFBWixFQUFBeEIsS0FBS21DLGVBQU9DLElBQUFBLEdBQUFBLEVBQUVKLGlCQUFpQixZQUFhd0MsR0FDaEMsUUFBWixFQUFBeEUsS0FBS21DLGVBQU9HLElBQUFBLEdBQUFBLEVBQUVOLGlCQUFpQixXQU5mLFNBQVZ5QyxJLFFBQ1EsUUFBWixJQUFLdEMsZUFBT0MsSUFBQUEsR0FBQUEsRUFBRXNDLG9CQUFvQixZQUFhRixHQUNuQyxRQUFaLElBQUtyQyxlQUFPRyxJQUFBQSxHQUFBQSxFQUFFb0Msb0JBQW9CLFVBQVdELEVBQzlDLEdBSUYsRyxpQ0FFTyxTQUFvQjNDLEdBQzFCLElBQVF3QyxFQUFReEMsRUFBUndDLElBQ0ksY0FBUkEsR0FBK0IsWUFBUkEsR0FBNkIsZUFBUkEsR0FBZ0MsY0FBUkEsR0FDdEV0RSxLQUFLd0IsWUFFUixHLGtDQUVPLFdBQ054QixLQUFLd0IsWUFDTixNLGdGQW5QRzFCLEdBc1BONkUsU0FBUy9DLGlCQUFpQixXQUFXQyxTQUFRLFNBQUNDLEdBQUQsT0FBTyxJQUFJaEMsRUFBV2dDLEVBQXRCLEcsR0NsUXpDOEMsRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCMUIsSUFBakIyQixFQUNILE9BQU9BLEVBQWFDLFFBR3JCLElBQUlDLEVBQVNMLEVBQXlCRSxHQUFZLENBR2pERSxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkosR0FBVUssS0FBS0YsRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0gsR0FHcEVJLEVBQU9ELE9BQ2YsQ0FHQUgsRUFBb0JPLEVBQUlGLEVGekJwQnJGLEVBQVcsR0FDZmdGLEVBQW9CUSxFQUFJLFNBQVNDLEVBQVFDLEVBQVVDLEVBQUlDLEdBQ3RELElBQUdGLEVBQUgsQ0FNQSxJQUFJRyxFQUFlQyxJQUNuQixJQUFTQyxFQUFJLEVBQUdBLEVBQUkvRixFQUFTZ0csT0FBUUQsSUFBSyxDQUNyQ0wsRUFBVzFGLEVBQVMrRixHQUFHLEdBQ3ZCSixFQUFLM0YsRUFBUytGLEdBQUcsR0FDakJILEVBQVc1RixFQUFTK0YsR0FBRyxHQUUzQixJQUpBLElBR0lFLEdBQVksRUFDUEMsRUFBSSxFQUFHQSxFQUFJUixFQUFTTSxPQUFRRSxNQUNwQixFQUFYTixHQUFzQkMsR0FBZ0JELElBQWFPLE9BQU9DLEtBQUtwQixFQUFvQlEsR0FBR2EsT0FBTSxTQUFTNUIsR0FBTyxPQUFPTyxFQUFvQlEsRUFBRWYsR0FBS2lCLEVBQVNRLEdBQUssSUFDaEtSLEVBQVNZLE9BQU9KLElBQUssSUFFckJELEdBQVksRUFDVEwsRUFBV0MsSUFBY0EsRUFBZUQsSUFHN0MsR0FBR0ssRUFBVyxDQUNiakcsRUFBU3NHLE9BQU9QLElBQUssR0FDckIsSUFBSVEsRUFBSVosU0FDRXBDLElBQU5nRCxJQUFpQmQsRUFBU2MsRUFDL0IsQ0FDRCxDQUNBLE9BQU9kLENBckJQLENBSkNHLEVBQVdBLEdBQVksRUFDdkIsSUFBSSxJQUFJRyxFQUFJL0YsRUFBU2dHLE9BQVFELEVBQUksR0FBSy9GLEVBQVMrRixFQUFJLEdBQUcsR0FBS0gsRUFBVUcsSUFBSy9GLEVBQVMrRixHQUFLL0YsRUFBUytGLEVBQUksR0FDckcvRixFQUFTK0YsR0FBSyxDQUFDTCxFQUFVQyxFQUFJQyxFQXdCL0IsRUc1QkFaLEVBQW9Cd0IsRUFBSSxTQUFTcEIsR0FDaEMsSUFBSXFCLEVBQVNyQixHQUFVQSxFQUFPc0IsV0FDN0IsV0FBYSxPQUFPdEIsRUFBZ0IsT0FBRyxFQUN2QyxXQUFhLE9BQU9BLENBQVEsRUFFN0IsT0FEQUosRUFBb0IyQixFQUFFRixFQUFRLENBQUVHLEVBQUdILElBQzVCQSxDQUNSLEVDTkF6QixFQUFvQjJCLEVBQUksU0FBU3hCLEVBQVMwQixHQUN6QyxJQUFJLElBQUlwQyxLQUFPb0MsRUFDWDdCLEVBQW9COEIsRUFBRUQsRUFBWXBDLEtBQVNPLEVBQW9COEIsRUFBRTNCLEVBQVNWLElBQzVFMEIsT0FBT1ksZUFBZTVCLEVBQVNWLEVBQUssQ0FBRXVDLFlBQVksRUFBTTFELElBQUt1RCxFQUFXcEMsSUFHM0UsRUNQQU8sRUFBb0I4QixFQUFJLFNBQVNHLEVBQUtDLEdBQVEsT0FBT2YsT0FBT2dCLFVBQVVDLGVBQWU5QixLQUFLMkIsRUFBS0MsRUFBTyxFLFdDS3RHLElBQUlHLEVBQWtCLENBQ3JCLElBQUssRUFDTCxJQUFLLEdBYU5yQyxFQUFvQlEsRUFBRVUsRUFBSSxTQUFTb0IsR0FBVyxPQUFvQyxJQUE3QkQsRUFBZ0JDLEVBQWdCLEVBR3JGLElBQUlDLEVBQXVCLFNBQVNDLEVBQTRCQyxHQUMvRCxJQUtJeEMsRUFBVXFDLEVBTFY1QixFQUFXK0IsRUFBSyxHQUNoQkMsRUFBY0QsRUFBSyxHQUNuQkUsRUFBVUYsRUFBSyxHQUdJMUIsRUFBSSxFQUMzQixHQUFHTCxFQUFTa0MsTUFBSyxTQUFTQyxHQUFNLE9BQStCLElBQXhCUixFQUFnQlEsRUFBVyxJQUFJLENBQ3JFLElBQUk1QyxLQUFZeUMsRUFDWjFDLEVBQW9COEIsRUFBRVksRUFBYXpDLEtBQ3JDRCxFQUFvQk8sRUFBRU4sR0FBWXlDLEVBQVl6QyxJQUdoRCxHQUFHMEMsRUFBUyxJQUFJbEMsRUFBU2tDLEVBQVEzQyxFQUNsQyxDQUVBLElBREd3QyxHQUE0QkEsRUFBMkJDLEdBQ3JEMUIsRUFBSUwsRUFBU00sT0FBUUQsSUFDekJ1QixFQUFVNUIsRUFBU0ssR0FDaEJmLEVBQW9COEIsRUFBRU8sRUFBaUJDLElBQVlELEVBQWdCQyxJQUNyRUQsRUFBZ0JDLEdBQVMsS0FFMUJELEVBQWdCQyxHQUFXLEVBRTVCLE9BQU90QyxFQUFvQlEsRUFBRUMsRUFDOUIsRUFFSXFDLEVBQXFCQyxLQUE4Qix3QkFBSUEsS0FBOEIseUJBQUssR0FDOUZELEVBQW1COUYsUUFBUXVGLEVBQXFCbEYsS0FBSyxLQUFNLElBQzNEeUYsRUFBbUI1RixLQUFPcUYsRUFBcUJsRixLQUFLLEtBQU15RixFQUFtQjVGLEtBQUtHLEtBQUt5RixHLElDaER2RixJQUFJRSxFQUFzQmhELEVBQW9CUSxPQUFFakMsRUFBVyxDQUFDLElBQUksTUFBTSxXQUFhLE9BQU95QixFQUFvQixJQUFNLElBQ3BIZ0QsRUFBc0JoRCxFQUFvQlEsRUFBRXdDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21ldGEtc2xpZGVyLy4vZGVtby1wYWdlL2RlbW8tcGFnZS50cyIsIndlYnBhY2s6Ly9tZXRhLXNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXRhLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tZXRhLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWV0YS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXRhLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZXRhLXNsaWRlci93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBNb2RlbElucHV0U3RhdGUsIE1vZGVsVmFsIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSW50ZXJmYWNlcyc7XG5pbXBvcnQgJy4uL3NyYy9zbGlkZXInO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuaW50ZXJmYWNlIEVsZW1lbnRMaXN0ZW5lciB7XG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogJ2NoYW5nZScsIGxpc3RlbmVyOiAoZXZlbnQ6IElucHV0RXZlbnQpID0+IHZvaWQpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRWxlbWVudFByZXNzIHtcbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiAna2V5ZG93bicgfCAndG91Y2htb3ZlJywgbGlzdGVuZXI6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCwgb3B0aW9ucz86IHsgcGFzc2l2ZTogYm9vbGVhbiB9KTogdm9pZDtcbn1cblxuY2xhc3MgRGVtb1NsaWRlciB7XG4gIHJvb3Q6IEVsZW1lbnQ7XG5cbiAgZm9ybSE6IEVsZW1lbnQgfCBudWxsO1xuXG4gIG1pbiE6IG51bWJlcjtcblxuICBtYXghOiBudW1iZXI7XG5cbiAgc3RlcCE6IG51bWJlciB8IG51bGw7XG5cbiAgZnJvbSE6IG51bWJlciB8IG51bGw7XG5cbiAgdG8hOiBudW1iZXIgfCBudWxsO1xuXG4gIGdhcCE6IG51bWJlciB8IG51bGw7XG5cbiAgcmFuZ2UhOiBib29sZWFuO1xuXG4gIG1hcmtzITogYm9vbGVhbjtcblxuICB0aXAhOiBib29sZWFuO1xuXG4gIHByb2dyZXNzITogYm9vbGVhbjtcblxuICB2ZXJ0aWNhbCE6IGJvb2xlYW47XG5cbiAgY29udGVudCE6IEVsZW1lbnQgfCBudWxsO1xuXG4gIG1hcEVsZW1zITogTWFwPHN0cmluZywgTW9kZWxWYWw+O1xuXG4gIHNsaWRlciE6IGltcG9ydCgnYzovQ29kZS9NZXRhIFNsaWRlci9zcmMvY29tcG9uZW50cy9QcmVzZW50ZXIvUHJlc2VudGVyJykuZGVmYXVsdDtcblxuICB0aHVtYj86IEVsZW1lbnRQcmVzcyB8IG51bGw7XG5cbiAgc3RhdGVPYmplY3QhOiB7XG4gICAgbWluOiBudW1iZXI7XG4gICAgbWF4OiBudW1iZXI7XG4gICAgdmFsdWVGcm9tOiBudW1iZXI7XG4gICAgdmFsdWVUbzogbnVtYmVyO1xuICAgIHN0ZXA6IG51bWJlcjtcbiAgICBzY2FsZVBlcmNlbnRHYXA6IG51bWJlcjtcbiAgICBzY2FsZU1hcmtzOiBib29sZWFuOyBpc1RpcDpcbiAgICBib29sZWFuOyBpc1Byb2dyZXNzOiBib29sZWFuO1xuICAgIGlzUmFuZ2U6IGJvb2xlYW47XG4gICAgaXNWZXJ0aWNhbDogYm9vbGVhbjtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihyb290OiBFbGVtZW50KSB7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmZpbmRFbGVtcygpO1xuICAgIHRoaXMuc3RhdGVPYmplY3QgPSB7XG4gICAgICBtaW46IHRoaXMubWluLFxuICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgIHZhbHVlRnJvbTogdGhpcy5mcm9tIHx8IDAsXG4gICAgICB2YWx1ZVRvOiB0aGlzLnRvIHx8IDAsXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAgfHwgMSxcbiAgICAgIHNjYWxlUGVyY2VudEdhcDogdGhpcy5nYXAgfHwgMSxcbiAgICAgIHNjYWxlTWFya3M6IHRoaXMubWFya3MsXG4gICAgICBpc1RpcDogdGhpcy50aXAsXG4gICAgICBpc1Byb2dyZXNzOiB0aGlzLnByb2dyZXNzLFxuICAgICAgaXNSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIGlzVmVydGljYWw6IHRoaXMudmVydGljYWwsXG4gICAgfTtcblxuICAgIHRoaXMuYWRkU2xpZGVyKHRoaXMuc3RhdGVPYmplY3QpO1xuICAgIHRoaXMudXBkYXRlRm9ybSgpO1xuXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgIGNvbnN0IGVsZW1zOiBFbGVtZW50TGlzdGVuZXJbXSA9IFtdO1xuICAgICAgdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2lucHV0JykuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIGVsZW1zLnB1c2goZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBlbGVtcy5mb3JFYWNoKChlKSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlSXRlbUNoYW5nZS5iaW5kKHRoaXMpKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50Py5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNvdGVudENsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY29udGVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNvdGVudENsaWNrLmJpbmQodGhpcykpO1xuICAgIGlmICh0aGlzLnRodW1iKSB7XG4gICAgICB0aGlzLnRodW1iPy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVUaHVtYktleVByZXNzLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy50aHVtYj8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgIHRoaXMuaGFuZGxlVGh1bWJUb3VjaE1vdmUuYmluZCh0aGlzKSxcbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSXRlbUNoYW5nZShlOiBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgcm9sZSB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBwYXJhbSA9IHRoaXMubWFwRWxlbXMuZ2V0KGAke3JvbGV9YCk7XG4gICAgICBpZiAocGFyYW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgY29uc3QgdmFsdWVQYXJhbSA9IHRoaXMuc2xpZGVyLmdldFZhbHVlKHBhcmFtKTtcbiAgICAgIGxldCB2YWx1ZUZvcm06IG51bWJlciB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlUGFyYW0gPT09ICdib29sZWFuJykge1xuICAgICAgICB2YWx1ZUZvcm0gPSB0YXJnZXQuY2hlY2tlZDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlUGFyYW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhbHVlRm9ybSA9IE51bWJlcih0YXJnZXQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVGb3JtID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlRm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyLnNldFZhbHVlKGAke3BhcmFtfWAsIHZhbHVlRm9ybSk7XG4gICAgICAgIGlmIChwYXJhbSAhPT0gJ3ZhbHVlRnJvbScgJiYgcGFyYW0gIT09ICd2YWx1ZVRvJykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB0aGlzLmFkZFNsaWRlcih0aGlzLnNsaWRlci5nZXRTdGF0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNsaWRlcihvcHRpb25zOiBNb2RlbElucHV0U3RhdGUpIHtcbiAgICBpZiAoIXRoaXMuY29udGVudCkgcmV0dXJuO1xuICAgIHRoaXMuc2xpZGVyID0gJCh0aGlzLmNvbnRlbnQpLnNsaWRlclBsdWdpbihvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEVsZW1zKCkge1xuICAgIHRoaXMubWFwRWxlbXMgPSBuZXcgTWFwKCk7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fY29udGVudCcpO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19mb3JtJyk7XG4gICAgaWYgKCF0aGlzLmZvcm0pIHJldHVybjtcbiAgICBjb25zdCBtaW4gPSA8SFRNTElucHV0RWxlbWVudD5cbiAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19pbnB1dFtkYXRhLXJvbGUgPSBtaW5dJyk7XG4gICAgdGhpcy5taW4gPSBOdW1iZXIobWluLnZhbHVlKTtcbiAgICB0aGlzLm1hcEVsZW1zLnNldCgnbWluJywgJ21pbicpO1xuXG4gICAgY29uc3QgbWF4ID0gPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW5wdXRbZGF0YS1yb2xlID0gbWF4XScpO1xuICAgIHRoaXMubWF4ID0gTnVtYmVyKG1heC52YWx1ZSk7XG4gICAgdGhpcy5tYXBFbGVtcy5zZXQoJ21heCcsICdtYXgnKTtcblxuICAgIGNvbnN0IHN0ZXAgPSA8SFRNTElucHV0RWxlbWVudD5cbiAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19pbnB1dFtkYXRhLXJvbGUgPSBzdGVwXScpO1xuICAgIHRoaXMuc3RlcCA9IE51bWJlcihzdGVwLnZhbHVlKTtcbiAgICB0aGlzLm1hcEVsZW1zLnNldCgnc3RlcCcsICdzdGVwJyk7XG5cbiAgICBjb25zdCBmcm9tID0gPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW5wdXRbZGF0YS1yb2xlID0gZnJvbV0nKTtcbiAgICB0aGlzLmZyb20gPSBOdW1iZXIoZnJvbS52YWx1ZSk7XG4gICAgZnJvbS5zdGVwID0gYCR7dGhpcy5zdGVwfWA7XG4gICAgdGhpcy5tYXBFbGVtcy5zZXQoJ2Zyb20nLCAndmFsdWVGcm9tJyk7XG5cbiAgICBjb25zdCB0byA9IDxIVE1MSW5wdXRFbGVtZW50PlxuICAgICAgdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2lucHV0W2RhdGEtcm9sZSA9IHRvXScpO1xuICAgIHRoaXMudG8gPSBOdW1iZXIodG8udmFsdWUpO1xuICAgIHRvLnN0ZXAgPSBgJHt0aGlzLnN0ZXB9YDtcbiAgICB0aGlzLm1hcEVsZW1zLnNldCgndG8nLCAndmFsdWVUbycpO1xuXG4gICAgY29uc3QgZ2FwID0gPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW5wdXRbZGF0YS1yb2xlID0gZ2FwXScpO1xuICAgIGlmIChnYXAudmFsdWUpIHRoaXMuZ2FwID0gTnVtYmVyKGdhcC52YWx1ZSk7XG4gICAgdGhpcy5tYXBFbGVtcy5zZXQoJ2dhcCcsICdzY2FsZVBlcmNlbnRHYXAnKTtcblxuICAgIGNvbnN0IHJhbmdlID0gPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW5wdXRbZGF0YS1yb2xlID0gcmFuZ2VdJyk7XG4gICAgdGhpcy5yYW5nZSA9IHJhbmdlLmNoZWNrZWQ7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHRvLmRpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLnJhbmdlKSB0by5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5tYXBFbGVtcy5zZXQoJ3JhbmdlJywgJ2lzUmFuZ2UnKTtcblxuICAgIGNvbnN0IG1hcmtzID0gPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW5wdXRbZGF0YS1yb2xlID0gbWFya3NdJyk7XG4gICAgdGhpcy5tYXJrcyA9IG1hcmtzLmNoZWNrZWQ7XG4gICAgaWYgKHRoaXMubWFya3MpIGdhcC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5tYXJrcykgZ2FwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcEVsZW1zLnNldCgnbWFya3MnLCAnc2NhbGVNYXJrcycpO1xuXG4gICAgY29uc3QgdGlwID0gPEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLnNsaWRlcl9faW5wdXRbZGF0YS1yb2xlID0gdGlwXScpO1xuICAgIHRoaXMudGlwID0gdGlwLmNoZWNrZWQ7XG4gICAgdGhpcy5tYXBFbGVtcy5zZXQoJ3RpcCcsICdpc1RpcCcpO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSA8SFRNTElucHV0RWxlbWVudD5cbiAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19pbnB1dFtkYXRhLXJvbGUgPSBwcm9ncmVzc10nKTtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3MuY2hlY2tlZDtcbiAgICB0aGlzLm1hcEVsZW1zLnNldCgncHJvZ3Jlc3MnLCAnaXNQcm9ncmVzcycpO1xuXG4gICAgY29uc3QgdmVydGljYWwgPSA8SFRNTElucHV0RWxlbWVudD5cbiAgICAgIHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19pbnB1dFtkYXRhLXJvbGUgPSB2ZXJ0aWNhbF0nKTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWwuY2hlY2tlZDtcbiAgICB0aGlzLm1hcEVsZW1zLnNldCgndmVydGljYWwnLCAnaXNWZXJ0aWNhbCcpO1xuXG4gICAgaWYgKHRoaXMuY29udGVudD8ucXVlcnlTZWxlY3RvcignLnBsdWdpbi1zbGlkZXJfX3RodW1iJykpIHtcbiAgICAgIHRoaXMudGh1bWIgPSB0aGlzLmNvbnRlbnQ/LnF1ZXJ5U2VsZWN0b3IoJy5wbHVnaW4tc2xpZGVyX190aHVtYicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRm9ybSgpIHtcbiAgICB0aGlzLm1hcEVsZW1zLmZvckVhY2goKGtleTogTW9kZWxWYWwsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZvcm0/LnF1ZXJ5U2VsZWN0b3IoYC5zbGlkZXJfX2lucHV0W2RhdGEtcm9sZSA9ICR7dmFsdWV9XWApO1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiB0aGlzLnNsaWRlci5nZXRWYWx1ZShrZXkpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBgJHt0aGlzLnNsaWRlci5nZXRWYWx1ZShgJHtrZXl9YCl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiB0aGlzLnNsaWRlci5nZXRWYWx1ZShrZXkpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbGlkZXIuZ2V0VmFsdWUoYCR7a2V5fWApKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbmRFbGVtcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb3RlbnRDbGljaygpIHtcbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB0aGlzLnVwZGF0ZUZvcm0oKTtcbiAgICBjb25zdCBtb3VzZVVwID0gKCkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGUpO1xuICAgICAgdGhpcy5jb250ZW50Py5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XG4gICAgfTtcblxuICAgIHRoaXMuY29udGVudD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlKTtcbiAgICB0aGlzLmNvbnRlbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVGh1bWJLZXlQcmVzcyhlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgeyBrZXkgfSA9IGU7XG4gICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQXJyb3dVcCcgfHwga2V5ID09PSAnQXJyb3dSaWdodCcgfHwga2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy51cGRhdGVGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUaHVtYlRvdWNoTW92ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUZvcm0oKTtcbiAgfVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJykuZm9yRWFjaCgoZSkgPT4gbmV3IERlbW9TbGlkZXIoZSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDU3NzogMCxcblx0MzA5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbWV0YV9zbGlkZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbWV0YV9zbGlkZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs3NTUsMjcyXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3NCk7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIl0sIm5hbWVzIjpbImRlZmVycmVkIiwiRGVtb1NsaWRlciIsInJvb3QiLCJ0aGlzIiwiaW5pdCIsImZpbmRFbGVtcyIsInN0YXRlT2JqZWN0IiwibWluIiwibWF4IiwidmFsdWVGcm9tIiwiZnJvbSIsInZhbHVlVG8iLCJ0byIsInN0ZXAiLCJzY2FsZVBlcmNlbnRHYXAiLCJnYXAiLCJzY2FsZU1hcmtzIiwibWFya3MiLCJpc1RpcCIsInRpcCIsImlzUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsImlzUmFuZ2UiLCJyYW5nZSIsImlzVmVydGljYWwiLCJ2ZXJ0aWNhbCIsImFkZFNsaWRlciIsInVwZGF0ZUZvcm0iLCJhZGRMaXN0ZW5lcnMiLCJmb3JtIiwiZWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJwdXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUl0ZW1DaGFuZ2UiLCJiaW5kIiwiY29udGVudCIsIl9hIiwiaGFuZGxlQ290ZW50Q2xpY2siLCJfYiIsInRodW1iIiwiX2MiLCJoYW5kbGVUaHVtYktleVByZXNzIiwiX2QiLCJoYW5kbGVUaHVtYlRvdWNoTW92ZSIsInBhc3NpdmUiLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50Iiwicm9sZSIsImRhdGFzZXQiLCJwYXJhbSIsIm1hcEVsZW1zIiwiZ2V0IiwidW5kZWZpbmVkIiwidmFsdWVGb3JtIiwidmFsdWVQYXJhbSIsInNsaWRlciIsImdldFZhbHVlIiwiY2hlY2tlZCIsIk51bWJlciIsInZhbHVlIiwic2V0VmFsdWUiLCJpbm5lckhUTUwiLCJnZXRTdGF0ZSIsIm9wdGlvbnMiLCIkIiwic2xpZGVyUGx1Z2luIiwiTWFwIiwicXVlcnlTZWxlY3RvciIsInNldCIsImRpc2FibGVkIiwia2V5IiwiZWxlbWVudCIsInVwZGF0ZSIsIm1vdXNlVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiLCJtIiwiTyIsInJlc3VsdCIsImNodW5rSWRzIiwiZm4iLCJwcmlvcml0eSIsIm5vdEZ1bGZpbGxlZCIsIkluZmluaXR5IiwiaSIsImxlbmd0aCIsImZ1bGZpbGxlZCIsImoiLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJzcGxpY2UiLCJyIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiaW5zdGFsbGVkQ2h1bmtzIiwiY2h1bmtJZCIsIndlYnBhY2tKc29ucENhbGxiYWNrIiwicGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24iLCJkYXRhIiwibW9yZU1vZHVsZXMiLCJydW50aW1lIiwic29tZSIsImlkIiwiY2h1bmtMb2FkaW5nR2xvYmFsIiwic2VsZiIsIl9fd2VicGFja19leHBvcnRzX18iXSwic291cmNlUm9vdCI6IiJ9