parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
!function(){var e=document.documentElement;(e.classList.remove("no-js"),e.classList.add("js"),document.body.classList.contains("has-animations"))&&((window.sr=ScrollReveal()).reveal(".feature, .pricing-table-inner",{duration:600,distance:"20px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:100}),e.classList.add("anime-ready"),anime.timeline({targets:".hero-figure-box-05"}).add({duration:400,easing:"easeInOutExpo",scaleX:[.05,.05],scaleY:[0,1],perspective:"500px",delay:anime.random(0,400)}).add({duration:400,easing:"easeInOutExpo",scaleX:1}).add({duration:800,rotateY:"-15deg",rotateX:"8deg",rotateZ:"-1deg"}),anime.timeline({targets:".hero-figure-box-06, .hero-figure-box-07"}).add({duration:400,easing:"easeInOutExpo",scaleX:[.05,.05],scaleY:[0,1],perspective:"500px",delay:anime.random(0,400)}).add({duration:400,easing:"easeInOutExpo",scaleX:1}).add({duration:800,rotateZ:"20deg"}),anime({targets:".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",duration:anime.random(600,800),delay:anime.random(600,800),rotate:[anime.random(-360,360),function(e){return e.getAttribute("data-rotation")}],scale:[.7,1],opacity:[0,1],easing:"easeInOutExpo"}))}();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.7a1d35a5.js.map