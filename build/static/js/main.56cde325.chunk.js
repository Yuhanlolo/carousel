(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(2),r=n(4),s=n(3),c=n(5),o=n(0),l=n.n(o),u=n(7),m=n.n(u),d=(n(15),n(17),["https://www.jssor.com/demos/img/gallery/980x380/001.jpg","https://www.jssor.com/demos/img/gallery/980x380/002.jpg","https://www.jssor.com/demos/img/gallery/980x380/003.jpg","https://www.jssor.com/demos/img/gallery/980x380/004.jpg"]),h=6e3,p=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("img",{id:"image-slide",alt:"alt",className:this.props.direction,src:this.props.imageURL})}}]),t}(l.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("span",{className:"arrow left",onClick:this.props.onClick})}}]),t}(l.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("span",{className:"arrow right",onClick:this.props.onClick})}}]),t}(l.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("span",{className:this.props.isActive?"indicator active":"indicator",onClick:this.props.onClick})}}]),t}(l.a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).startTimer=function(){n.timer=setInterval(function(){return n.nextSlide()},h)},n.stopTimer=function(){clearInterval(n.timer)},n.state={activeIndex:0,direction:null},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderImageSlide",value:function(e,t){var n=null;return"next"===t?n="animate-right":"prev"===t&&(n="animate-left"),l.a.createElement(p,{direction:n,imageURL:d[e]})}},{key:"goToSlide",value:function(e){this.state.activeIndex<e?this.setState({direction:"next"}):this.setState({direction:"prev"}),this.setState({activeIndex:e}),this.resetImageClass()}},{key:"nextSlide",value:function(){var e=d.length;this.state.activeIndex<e-1?this.setState({activeIndex:this.state.activeIndex+1,direction:"next"}):this.setState({activeIndex:0,direction:"next"}),this.resetImageClass()}},{key:"prevSlide",value:function(){var e=d.length;this.state.activeIndex>0?this.setState({activeIndex:this.state.activeIndex-1,direction:"prev"}):this.setState({activeIndex:e-1,direction:"prev"}),this.resetImageClass()}},{key:"resetImageClass",value:function(){var e=document.getElementById("image-slide"),t=null;"next"===this.state.direction?t="animate-right":"prev"===this.state.direction&&(t="animate-left"),e.classList.remove(t),e.offsetWidth,e.classList.add(t)}},{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",{className:"title"},"Image Carousel"),l.a.createElement("div",{className:"container",onMouseOver:this.stopTimer,onMouseOut:this.startTimer},this.renderImageSlide(this.state.activeIndex,this.state.direction),l.a.createElement(v,{onClick:function(t){return e.prevSlide()}}),l.a.createElement(f,{onClick:function(t){return e.nextSlide()}}),l.a.createElement("div",{className:"indicators"},d.map(function(t,n){return l.a.createElement(g,{key:n,isActive:n===e.state.activeIndex,onClick:function(t){return e.goToSlide(n)}})}))))}}]),t}(l.a.Component);m.a.render(l.a.createElement(j,null),document.getElementById("carousel-container"))}},[[8,2,1]]]);
//# sourceMappingURL=main.56cde325.chunk.js.map