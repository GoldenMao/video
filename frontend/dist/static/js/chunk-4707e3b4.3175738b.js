(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4707e3b4"],{"04e5":function(t,e,n){"use strict";var i=n("a995"),a=n.n(i);a.a},"15d3":function(t,e,n){"use strict";var i=n("a1ff"),a=n.n(i);a.a},"1dde":function(t,e,n){var i=n("d039"),a=n("b622"),s=n("2d00"),r=a("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2234:function(t,e,n){},"479c":function(t,e,n){},"498a":function(t,e,n){"use strict";var i=n("23e7"),a=n("58a8").trim,s=n("c8d2");i({target:"String",proto:!0,forced:s("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("5899"),s="["+a+"]",r=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},6840:function(t,e,n){"use strict";var i=n("d72b"),a=n.n(i);a.a},7140:function(t,e,n){"use strict";var i=n("d27c"),a=n.n(i);a.a},7156:function(t,e,n){var i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var s,r;return a&&"function"==typeof(s=e.constructor)&&s!==n&&i(r=s.prototype)&&r!==n.prototype&&a(t,r),t}},8418:function(t,e,n){"use strict";var i=n("c04e"),a=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?a.f(t,r,s(0,n)):t[r]=n}},"8d69":function(t,e,n){"use strict";var i=n("479c"),a=n.n(i);a.a},a1ff:function(t,e,n){},a995:function(t,e,n){},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),s=n("94ca"),r=n("6eeb"),o=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,m=n("06cf").f,v=n("9bf2").f,p=n("58a8").trim,b="Number",_=a[b],w=_.prototype,g=c(f(w))==b,x=function(t){var e,n,i,a,s,r,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+l}for(s=l.slice(2),r=s.length,o=0;o<r;o++)if(c=s.charCodeAt(o),c<48||c>a)return NaN;return parseInt(s,i)}return+l};if(s(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var D,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(g?d((function(){w.valueOf.call(n)})):c(n)!=b)?l(new _(x(e)),n,y):x(e)},I=i?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)o(_,D=I[C])&&!o(y,D)&&v(y,D,m(_,D));y.prototype=w,w.constructor=y,r(a,b,y)}},ae40:function(t,e,n){var i=n("83ab"),a=n("d039"),s=n("5135"),r=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(s(o,t))return o[t];e||(e={});var n=[][t],l=!!s(e,"ACCESSORS")&&e.ACCESSORS,u=s(e,0)?e[0]:c,d=s(e,1)?e[1]:void 0;return o[t]=!!n&&!a((function(){if(l&&!i)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,d)}))}},b3d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Swiper",t._l(t.banners,(function(t){return n("swiper-item",{key:t.vid},[n("a",{attrs:{href:"detail?"+t.vid}},[n("img",{attrs:{src:t.postimage,alt:"item.name"}})])])})),1),n("detail-box",[n("h2",{attrs:{slot:"title"},slot:"title"},[t._v("最新电影")]),t._l(t.newestData,(function(t){return n("imgbox-small",{key:t.vid,attrs:{slot:"item_list",showData:t},slot:"item_list"})}))],2),n("detail-box",[n("h2",{attrs:{slot:"title"},slot:"title"},[t._v("精选电影")]),t._l(t.specialData,(function(t){return n("imgbox-middle",{key:t.vid,attrs:{slot:"item_list",showData:t},slot:"item_list"})}))],2),n("detail-box",[n("h2",{attrs:{slot:"title"},slot:"title"},[t._v("国内电影")]),t._l(t.chinaData,(function(t){return n("imgbox-middle",{key:t.vid,attrs:{slot:"item_list",showData:t},slot:"item_list"})}))],2),n("detail-box",[n("h2",{attrs:{slot:"title"},slot:"title"},[t._v("欧美电影")]),t._l(t.westernData,(function(t){return n("imgbox-middle",{key:t.vid,attrs:{slot:"item_list",showData:t},slot:"item_list"})}))],2),n("imgbox-big")],1)},a=[],s=(n("fb6a"),n("1bab"));function r(){return Object(s["a"])({url:"/api/home",method:"get"})}var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave,touchstart:function(e){return t.touchStart(e)},touchmove:function(e){return t.touchMove(e)},touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},c=[],l=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),100)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},mouseOver:function(){this.stopTimer()},mouseLeave:function(){this.startTimer()},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(){var t=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&t>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&t>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),u=l,d=(n("04e5"),n("2877")),f=Object(d["a"])(u,o,c,!1,null,"512e051b",null),h=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},v=[],p={name:"Slide"},b=p,_=(n("c927"),Object(d["a"])(b,m,v,!1,null,"00b74a7c",null)),w=_.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detial-box"},[n("div",[t._t("title")],2),n("div",{staticClass:"item_list"},[t._t("item_list")],2)])},x=[],D={name:"DetailBox"},y=D,I=(n("6840"),Object(d["a"])(y,g,x,!1,null,"2f9ad7fa",null)),C=I.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small"},[n("a",{staticClass:"linkA",style:{backgroundImage:"url("+t.showData.postimage+")"},attrs:{title:t.showData.vname},on:{click:function(e){return t.toDetail(t.showData.vid)}}},[n("span",{staticClass:"tvnumber"},[t._t("tv_series")],2)]),n("div",{staticClass:"detial1"},[n("a",{attrs:{title:t.showData.vname},on:{click:function(e){return t.toDetail(t.showData.vid)}}},[t._v(t._s(t._f("forShort")(t.showData.vname)))]),n("span",[t._v(t._s(t._f("forShort")(t.showData.category)))])]),n("div",{staticClass:"detial2"},[n("span",[t._v(t._s(t._f("forShort")(t.showData.region)))]),n("span",[t._v(t._s(t.showData.year))])])])},E=[],N=(n("498a"),{name:"ImgboxSmall",props:{showData:{type:Object,default:function(){return{}}}},watch:{showData:function(t,e){console.log(t),console.log(e)}},methods:{toDetail:function(t){this.$router.push("/detail/"+t)}},filters:{forShort:function(t){return t.trim().slice(0,4)+".."}}}),T=N,k=(n("8d69"),Object(d["a"])(T,S,E,!1,null,"8fc6cf2a",null)),A=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"middle"},[n("a",{staticClass:"linkA",style:{backgroundImage:"url("+t.showData.postimage+")"},attrs:{title:t.showData.vname},on:{click:function(e){return t.toDetail(t.showData.vid)}}},[n("span",{staticClass:"tvnumber"},[t._t("tv_series")],2)]),n("div",{staticClass:"detial"},[n("div",{staticClass:"detial1"},[n("a",{attrs:{title:t.showData.vname},on:{click:function(e){return t.toDetail(t.showData.vid)}}},[t._v(t._s(t.showData.vname))]),n("span",[t._v(t._s(t.showData.language))])]),n("div",{staticClass:"detial2"},[n("span",[t._v(t._s(t.showData.region))]),n("span",[t._v(t._s(t.showData.year))])])])])},W=[],j={name:"ImgboxMiddle",props:{showData:{type:Object,default:function(){return{}}}},watch:{showData:function(t,e){console.log(t),console.log(e)}},methods:{toDetail:function(t){this.$router.push("/detail/"+t)}}},M=j,R=(n("7140"),Object(d["a"])(M,O,W,!1,null,"3edb3804",null)),$=R.exports,X={name:"Home",components:{Swiper:h,SwiperItem:w,DetailBox:C,ImgboxSmall:A,ImgboxMiddle:$},data:function(){return{banners:[],newestData:[],specialData:[],chinaData:[],westernData:[],swiperDatas:[{vid:1,name:"误杀2019",type:"movie",imgsrc:"https://ae01.alicdn.com/kf/He03b7437fd0e45beb7b722b045f561fa6.png"},{vid:2,name:"1/2魔法",type:"movie",imgsrc:"https://ae01.alicdn.com/kf/Ha992bdabca99421db58b73b7da6d4c42x.jpg"},{vid:3,name:"超级战舰",type:"movie",imgsrc:"http://p6-tt.byteimg.com/large/pgc-image/ea1a36deae79460f8657127ad176ec4b?from=pc"}]}},created:function(){var t=this;r().then((function(e){t.banners=e.homedata.slice(0,5),t.newestData=e.homedata.slice(5,12),t.specialData=e.homedata.slice(12,21),t.chinaData=e.homedata.slice(21,30),t.westernData=e.homedata.slice(21,30)})).catch((function(t){console.log(t)}))},methods:{}},B=X,F=(n("15d3"),Object(d["a"])(B,i,a,!1,null,"2a11a738",null));e["default"]=F.exports},c8d2:function(t,e,n){var i=n("d039"),a=n("5899"),s="​᠎";t.exports=function(t){return i((function(){return!!a[t]()||s[t]()!=s||a[t].name!==t}))}},c927:function(t,e,n){"use strict";var i=n("2234"),a=n.n(i);a.a},d27c:function(t,e,n){},d72b:function(t,e,n){},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fb6a:function(t,e,n){"use strict";var i=n("23e7"),a=n("861d"),s=n("e8b5"),r=n("23cb"),o=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),m=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),p=[].slice,b=Math.max;i({target:"Array",proto:!0,forced:!h||!m},{slice:function(t,e){var n,i,u,d=c(this),f=o(d.length),h=r(t,f),m=r(void 0===e?f:e,f);if(s(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,h,m);for(i=new(void 0===n?Array:n)(b(m-h,0)),u=0;h<m;h++,u++)h in d&&l(i,u,d[h]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-4707e3b4.3175738b.js.map