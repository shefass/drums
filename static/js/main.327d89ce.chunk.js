(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/metalscrape.d8026bac.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoCsh.93ab2582.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoFminor.d61e54da.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoLid.97dc50c7.wav"},function(e,t,n){e.exports=n.p+"static/media/pianoNot.dabc3535.mp3"},function(e,t,n){e.exports=n.p+"static/media/TeddyFrost.6b79a5b9.wav"},function(e,t,n){e.exports=n.p+"static/media/tombola.e32b8520.wav"},function(e,t,n){e.exports=n.p+"static/media/bongo.36bb8e3a.wav"},function(e,t,n){e.exports=n.p+"static/media/blip.beb4ba7a.wav"},function(e,t,n){e.exports=n(28)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),r=n(8),s=n.n(r),d=(n(24),n(1)),c=n(2),u=n(5),l=n(3),p=n(4),m=n(6),h=(n(26),n(9)),v=n.n(h),b=n(10),f=n.n(b),y=n(11),k=n.n(y),E=n(12),w=n.n(E),O=n(13),C=n.n(O),j=n(14),g=n.n(j),P=n(15),x=n.n(P),L=n(16),B=n.n(L),S=n(17),T=n.n(S),K=[{id:"q",keyCode:81,name:"Metal",sound:v.a},{id:"w",keyCode:87,name:"Piano C",sound:f.a},{id:"e",keyCode:69,name:"Piano F Minor",sound:k.a},{id:"a",keyCode:65,name:"Piano Lid Closing",sound:w.a},{id:"s",keyCode:83,name:"Piano N",sound:C.a},{id:"d",keyCode:68,name:"Teddy Frost",sound:g.a},{id:"z",keyCode:90,name:"Tombola",sound:x.a},{id:"x",keyCode:88,name:"Bongo",sound:B.a},{id:"c",keyCode:67,name:"Blip",sound:T.a}],N=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(""===this.props.id)return"Saund name";var t=K.filter(function(t){return t.id===e.props.id});return o.a.createElement("p",null,t[0].name)}}]),t}(i.Component),F=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=K.filter(function(t){return t.id===e.props.id});return o.a.createElement("audio",{src:t[0].sound,autoPlay:!0})}}]),t}(i.Component),W=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onEnter=function(e){n.setState({hasCapture:!0})},n.onLeave=function(e){n.setState({hasCapture:!1})},n.state={hasCapture:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={backgroundColor:this.state.hasCapture?"pink":"yellow",color:this.props.letter===this.props.id&&"blueviolet",height:this.props.letter===this.props.id&&"70%",width:this.props.letter===this.props.id&&"70%"};return o.a.createElement("div",{className:"drum-pad",style:{}},o.a.createElement("div",{className:"drum-item",id:this.props.letter,onPointerEnter:this.onEnter,onPointerLeave:this.onLeave,style:e},this.props.letter===this.props.id&&o.a.createElement(F,{id:this.props.id}),this.props.letter))}}]),t}(i.Component),I=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).click=function(e){a=setTimeout(n.timeOut,1e3),n.setState({id:e.srcElement.id})},n.timeOut=function(){n.setState({id:""}),clearTimeout(a)},n.state={id:""},n.handleKeyPress=n.handleKeyPress.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.handleKeyPress),K.map(function(t){return document.getElementById(t.id).addEventListener("mousedown",e.click)})}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",this.handleKeyPress),K.map(function(t){return document.getElementById(t.id).removeEventListener("click",e.click)})}},{key:"handleKeyPress",value:function(e){var t=K.filter(function(t){return e.keyCode===t.keyCode});a=setTimeout(this.timeOut,1e3),t.length>0&&this.setState({id:t[0].id})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Wrapper"},o.a.createElement("div",{id:"drum-machine"},o.a.createElement("div",{id:"keyboard"},K.map(function(t){return o.a.createElement(W,{letter:t.id,key:t.id,id:e.state.id,name:t.name,sound:t.sound})})),o.a.createElement("div",{id:"control"},o.a.createElement("div",{id:"display"},o.a.createElement(N,{id:this.state.id})),o.a.createElement("div",{id:"text"},o.a.createElement("p",null,"Push keyboard!!"),o.a.createElement("p",null,"Or use your mouse."),o.a.createElement("p",null,"Here goes switches for control.")))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,2,1]]]);
//# sourceMappingURL=main.327d89ce.chunk.js.map