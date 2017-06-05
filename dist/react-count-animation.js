!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define("react-count-animation",["react"],e):"object"==typeof exports?exports["react-count-animation"]=e(require("react")):t["react-count-animation"]=e(t.React)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t,e,n){var r=parseFloat(t).toFixed(e);if(n&&e>=1){var o=r.split(".")[0].split("").reverse().join(""),i=r.split(".")[1];o=o.replace(/(\d{3})(?=[^$])/g,"$1,"),o=o.split("").reverse().join(""),r=o+"."+i}return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),l=r(u),p=n(6),c=r(p),f=n(4),h=r(f),y=n(5),m=r(y),d=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"renderComponent",value:function(){var t={start:this.props.start,count:this.props.count,duration:this.props.duration,decimals:this.props.decimals,useGroup:this.props.useGroup,animation:this.props.animation};switch(this.props.animation){case"up":return l.default.createElement(c.default,t);case"roll":return l.default.createElement(h.default,t);case"slide":return l.default.createElement(m.default,t);default:return null}}},{key:"render",value:function(){return this.renderComponent()}}]),e}(u.Component);d.displayName="AnimationCount",d.propTypes={start:u.PropTypes.number,count:u.PropTypes.number,duration:u.PropTypes.number,decimals:u.PropTypes.number,useGroup:u.PropTypes.bool,animation:u.PropTypes.string},e.default=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(0),p=r(l),c=n(1),f=r(c),h=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={valueStart:(0,f.default)(n.props.start,n.props.decimals,n.props.useGroup),height:"auto",animationStyle:n.setAnimationStyle(0,!1),arrayLi:[],updateState:!1},n}return a(e,t),u(e,[{key:"componentWillMount",value:function(){this.getAllCount()}},{key:"componentDidMount",value:function(){var t=this.elementLi.offsetHeight;this.setInit(t),this.startAnimation()}},{key:"componentWillReceiveProps",value:function(){this.setState({updateState:!0}),this.getAllCount()}},{key:"componentDidUpdate",value:function(){this.state.updateState&&(this.setInit(this.state.height),this.startAnimation())}},{key:"getAllCount",value:function(){for(var t=0,e=void 0,n=[],r=this.props.count-this.props.start,o=this.props.start,i=this.props.duration,a=i/19,s=0;s<19;s+=1)t+=a,e=t<this.props.duration?this.countUp(t,o,r,i):(0,f.default)(this.props.count,this.props.decimals,this.props.useGroup),n.unshift(e);this.setState({arrayLi:n})}},{key:"setInit",value:function(t){this.setState({height:t,animationStyle:this.setAnimationStyle(19*t,!0)})}},{key:"setAnimationStyle",value:function(t,e){return{transitionDuration:e?"0s":this.props.duration/1e3+"s",WebkitTransitionDuration:e?"0s":this.props.duration/1e3+"s",MozAnimationDirection:e?"0s":this.props.duration/1e3+"s",OTransitionDuration:e?"0s":this.props.duration/1e3+"s",transform:"translate3d(0, -"+t+"px, 0)",WebkitTransform:"translate3d(0, -"+t+"px, 0)",MozTransform:"translate3d(0, -"+t+"px, 0)",OTransform:"translate3d(0, -"+t+"px, 0)"}}},{key:"startAnimation",value:function(){var t=this;setTimeout(function(){t.setState({animationStyle:t.setAnimationStyle(0,!1)})},200)}},{key:"restartAnimation",value:function(){this.setState({animationStyle:this.setAnimationStyle(19*this.state.height,!0)}),this.startAnimation()}},{key:"countUp",value:function(t,e,n,r){var o=t/r-1,i=n*(Math.pow(o,5)+1)+e;return this.formatNumber(i)}},{key:"formatNumber",value:function(t){var e=parseFloat(t).toFixed(this.props.decimals);if(this.props.useGroup&&this.props.decimals>=1){var n=e.split(".")[0].split("").reverse().join(""),r=e.split(".")[1];n=n.replace(/(\d{3})(?=[^$])/g,"$1,"),n=n.split("").reverse().join(""),e=n+"."+r}return e}},{key:"render",value:function(){var t=this;return p.default.createElement("div",{className:"count-roll-main",style:{height:this.state.height}},p.default.createElement("ul",{className:"count-roll-ul",style:s({},this.state.animationStyle)},this.state.arrayLi.map(function(t){return p.default.createElement("li",null,t)}),p.default.createElement("li",{className:"count-roll-li",ref:function(e){t.elementLi=e}},this.state.valueStart)))}}]),e}(l.Component);h.displayName="CountRoll",h.propTypes={start:l.PropTypes.number,count:l.PropTypes.number,duration:l.PropTypes.number,decimals:l.PropTypes.number,useGroup:l.PropTypes.bool},e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(0),p=r(l),c=n(1),f=r(c),h=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={arryLi:(0,f.default)(n.props.count,n.props.decimals,n.props.useGroup).split(""),ulStyle:{width:"auto",height:"auto"},listPosition:[],start:!1,listStyle:[],listClass:[],updateState:!1},n}return a(e,t),u(e,[{key:"componentWillMount",value:function(){var t=[],e={};this.state.arryLi.forEach(function(){e={left:"100%"},t.push(e)}),this.setState({listStyle:t})}},{key:"componentDidMount",value:function(){this.setInit(this.arrayLi),this.startAnimation()}},{key:"componentWillReceiveProps",value:function(){this.clearTimer(),this.setState({updateState:!0});var t=[],e={};this.state.arryLi.forEach(function(){e={left:"100%"},t.push(e)}),this.setState({listStyle:t})}},{key:"componentDidUpdate",value:function(){this.state.updateState&&(this.setInit(this.arrayLi),this.startAnimation())}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"setInit",value:function(t){var e=0,n=[],r=[];t.forEach(function(t,o){r.push(!1),0===o?(n.push(t.offsetWidth/2),e+=3*t.offsetWidth/2):(n.push(e),e+=t.offsetWidth)}),this.setState({ulStyle:{width:e+"px",height:t[0].offsetHeight+"px"},listPosition:n,listClass:r})}},{key:"setLiStyle",value:function(t,e){var n=this.state.listStyle,r=this.state.listClass;n[t]={transitionDuration:e/1e3+"s",WebkitTransitionDuration:e/1e3+"s",MozAnimationDirection:e/1e3+"s",OTransitionDuration:e/1e3+"s",left:this.state.listPosition[t]+"px"},t>1&&t<=this.state.arryLi.length&&(r[t-2]=!0),this.setState({listStyle:n,listClass:r})}},{key:"startAnimation",value:function(){var t=this,e=this.props.duration/this.state.arryLi.length,n=0;this.timer||(this.timer=setInterval(function(){n===t.state.arryLi.length?(t.setLiStyle(n,e),t.clearTimer()):(t.setLiStyle(n,e),n+=1)},e))}},{key:"clearTimer",value:function(){clearInterval(this.timer),this.timer=null}},{key:"render",value:function(){var t=this;return this.arrayLi=[],p.default.createElement("div",{className:"count-slide-main"},p.default.createElement("ul",{className:"count-slide-ul",style:s({},this.state.ulStyle)},this.state.arryLi.map(function(e,n){return p.default.createElement("li",{className:"count-slide-li "+(t.state.listClass[n]?"count-slide-li-tremble":""),style:s({},t.state.listStyle[n]),ref:function(e){t.arrayLi.push(e)}},e)})))}}]),e}(l.Component);h.displayName="CountSlide",h.propTypes={start:l.PropTypes.number,count:l.PropTypes.number,duration:l.PropTypes.number,decimals:l.PropTypes.number,useGroup:l.PropTypes.bool},e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),l=r(u),p=n(1),c=r(p),f=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={value:(0,c.default)(n.props.start,n.props.decimals,n.props.useGroup),startTime:(new Date).getTime()},n}return a(e,t),s(e,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"componentWillReceiveProps",value:function(){this.setState({value:this.formatNumber(this.props.start),startTime:(new Date).getTime()}),this.clearTimer(),this.setTimer()}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"setTimer",value:function(){var t=this;this.timer||(this.timer=setInterval(function(){var e=(new Date).getTime()-t.state.startTime,n=t.props.start,r=t.props.count-t.props.start,o=t.props.duration,i=void 0;e<t.props.duration?i=t.countUp(e,n,r,o):(i=(0,c.default)(t.props.count,t.props.decimals,t.props.useGroup),clearInterval(t.timer)),t.setState({value:i})},10))}},{key:"clearTimer",value:function(){clearInterval(this.timer),this.timer=null}},{key:"countUp",value:function(t,e,n,r){var o=parseFloat(n*(1-Math.pow(2,-10*t/r))*1024/1023+e);return o=(0,c.default)(o,this.props.decimals,this.props.useGroup)}},{key:"render",value:function(){return l.default.createElement("div",null,this.state.value)}}]),e}(u.Component);f.displayName="AnimationCount",f.propTypes={start:u.PropTypes.number,count:u.PropTypes.number,duration:u.PropTypes.number,decimals:u.PropTypes.number,useGroup:u.PropTypes.bool},e.default=f},function(t,e,n){t.exports=n(2)}])});