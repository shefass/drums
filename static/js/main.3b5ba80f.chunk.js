(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/metalscrape.d8026bac.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoCsh.93ab2582.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoFminor.d61e54da.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoLid.97dc50c7.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoNot.dabc3535.mp3"},function(e,t,n){e.exports=n.p+"static/media/TeddyFrost.6b79a5b9.wav"},function(e,t,n){e.exports=n.p+"static/media/tombola.e32b8520.wav"},function(e,t,n){e.exports=n.p+"static/media/bongo.36bb8e3a.wav"},function(e,t,n){e.exports=n.p+"static/media/blip.beb4ba7a.wav"},function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),r=n(7),d=n.n(r),s=(n(23),n(1)),c=n(2),u=n(4),l=n(3),m=n(5),p=(n(25),n(8)),h=n.n(p),v=n(9),f=n.n(v),y=n(10),b=n.n(y),k=n(11),E=n.n(k),w=n(12),C=n.n(w),g=n(13),x=n.n(g),L=n(14),O=n.n(L),P=n(15),j=n.n(P),M=n(16),S=n.n(M),B=[{id:"q",keyCode:81,name:"Metal",sound:h.a},{id:"w",keyCode:87,name:"Piano C",sound:f.a},{id:"e",keyCode:69,name:"Piano F Minor",sound:b.a},{id:"a",keyCode:65,name:"Piano Lid Closing",sound:E.a},{id:"s",keyCode:83,name:"Piano N",sound:C.a},{id:"d",keyCode:68,name:"Teddy Frost",sound:x.a},{id:"z",keyCode:90,name:"Tombola",sound:O.a},{id:"x",keyCode:88,name:"Bongo",sound:j.a},{id:"c",keyCode:67,name:"Blip",sound:S.a}],K=function(e){var t=e.id;if(""===t)return"Saund name";var n=B.filter(function(e){return e.id===t});return o.a.createElement("p",null,n[0].name)},U=function(e){var t=e.id,n=B.filter(function(e){return e.id===t});return o.a.createElement("audio",{src:n[0].sound,autoPlay:!0})},N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={hasCapture:!1},n.onEnter=function(e){n.setState({hasCapture:!0})},n.onLeave=function(e){n.setState({hasCapture:!1})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.letter,n=e.id,a={backgroundColor:this.state.hasCapture?"pink":"yellow",color:t===n&&"blueviolet",height:t===n&&"70%",width:t===n&&"70%"};return o.a.createElement("div",{className:"drum-pad"},o.a.createElement("div",{className:"drum-item",id:t,onPointerEnter:this.onEnter,onPointerLeave:this.onLeave,style:a},t===n&&o.a.createElement(U,{id:n}),t))}}]),t}(i.Component),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:""},n.click=function(e){clearTimeout(a),n.setState({id:e.srcElement.id})},n.clickEnd=function(){a=setTimeout(function(){return n.setState({id:""})},1e3)},n.handleKeyPress=function(e){var t=B.filter(function(t){return e.keyCode===t.keyCode});t.length>0&&n.setState({id:t[0].id})},n.handleKeyUp=function(){n.setState({id:""})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.handleKeyPress),document.addEventListener("keyup",this.handleKeyUp),this.unsubscribeMouseDown=B.map(function(t){return document.getElementById(t.id).addEventListener("mousedown",e.click)}),this.unsubscribeMouseUp=B.map(function(t){return document.getElementById(t.id).addEventListener("mouseup",e.clickEnd)})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress),document.removeEventListener("keyup",this.handleKeyUp),this.unsubscribeMouseDown(),this.unsubscribeMouseUp()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Wrapper"},o.a.createElement("div",{id:"drum-machine"},o.a.createElement("div",{id:"keyboard"},B.map(function(t){return o.a.createElement(N,{letter:t.id,key:t.id,id:e.state.id,name:t.name,sound:t.sound})})),o.a.createElement("div",{id:"control"},o.a.createElement("div",{id:"display"},o.a.createElement(K,{id:this.state.id})),o.a.createElement("div",{id:"text"},o.a.createElement("p",null,"Push keyboard!!"),o.a.createElement("p",null,"Or use your mouse."),o.a.createElement("p",null,"Here goes switches for control.")))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.3b5ba80f.chunk.js.map