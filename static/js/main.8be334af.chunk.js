(this["webpackJsonpcovid19-front"]=this["webpackJsonpcovid19-front"]||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),l=a.n(n),o=a(25),r=a.n(o),c=(a(35),a(6)),i=a(7),m=a(8),u=a(9),s=a(11),v=a.n(s),E=a(26),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.value,l=t.name;n.setState(Object(E.a)({},l,a))},n.handleSubmit=function(){n.props.onCalender(n.state.day,n.state.month)},n.state={day:(new Date).getDate(),month:(new Date).getMonth()},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Day",l.a.createElement("select",{className:"form-control",id:"title",name:"day",onChange:this.handleChange},l.a.createElement("option",null,"...select"),l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"11"},"11"),l.a.createElement("option",{value:"12"},"12"),l.a.createElement("option",{value:"13"},"13"),l.a.createElement("option",{value:"14"},"14"),l.a.createElement("option",{value:"15"},"15"),l.a.createElement("option",{value:"16"},"16"),l.a.createElement("option",{value:"17"},"17"),l.a.createElement("option",{value:"18"},"18"),l.a.createElement("option",{value:"19"},"19"),l.a.createElement("option",{value:"20"},"20"),l.a.createElement("option",{value:"21"},"21"),l.a.createElement("option",{value:"22"},"22"),l.a.createElement("option",{value:"23"},"23"),l.a.createElement("option",{value:"24"},"24"),l.a.createElement("option",{value:"25"},"25"),l.a.createElement("option",{value:"26"},"26"),l.a.createElement("option",{value:"27"},"27"),l.a.createElement("option",{value:"28"},"28"),l.a.createElement("option",{value:"29"},"29"),l.a.createElement("option",{value:"30"},"30"),l.a.createElement("option",{value:"31"},"31")),"Month                   ",l.a.createElement("select",{className:"form-control",id:"title",name:"month",onChange:this.handleChange},l.a.createElement("option",null,"...select"),l.a.createElement("option",{value:"0"},"Jan"),l.a.createElement("option",{value:"1"},"Feb"),l.a.createElement("option",{value:"2"},"Mar"),l.a.createElement("option",{value:"3"},"Apr"),l.a.createElement("option",{value:"4"},"May"),l.a.createElement("option",{value:"5"},"Jun"),l.a.createElement("option",{value:"6"},"Jul"),l.a.createElement("option",{value:"7"},"Aug"),l.a.createElement("option",{value:"8"},"Sep"),l.a.createElement("option",{value:"9"},"Oct"),l.a.createElement("option",{value:"10"},"Nov"),l.a.createElement("option",{value:"11"},"Dec")),l.a.createElement("option1",null),l.a.createElement("button",{onClick:this.handleSubmit},"Search"))}}]),a}(l.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onLoad=function(){v.a.get("https://kdmotor.herokuapp.com/api/v1/").then((function(e){n.setState({receivedData:e.data})})).catch((function(e){console.log(e)}))},n.handleCalender=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getDate(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getMonth();n.setState({day:e,month:t})},n.state={receivedData:"",day:(new Date).getDate(),month:(new Date).getMonth()},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.inTerval=setInterval((function(){return e.onLoad()}),6e4),this.onLoad(),this.inInterval2=setInterval((function(){return e.tick2()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.inTerval),clearInterval(this.inInterval2)}},{key:"tick2",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){var e=this,t=[];return Object.keys(this.state.receivedData).map((function(a,n){new Date(e.state.receivedData[a].date).getDate()==e.state.day&new Date(e.state.receivedData[a].date).getMonth()==e.state.month&&t.push(l.a.createElement("tr",{key:n},l.a.createElement("td",null,e.state.receivedData[a].vehicle_no),l.a.createElement("td",null,e.state.receivedData[a].vehicle_type),l.a.createElement("td",null,e.state.receivedData[a].driver_no),l.a.createElement("td",null,e.state.receivedData[a].no_kd_passenger),l.a.createElement("td",null,e.state.receivedData[a].no_male),l.a.createElement("td",null,e.state.receivedData[a].no_female),l.a.createElement("td",null,e.state.receivedData[a].temp),l.a.createElement("td",null,e.state.receivedData[a].border_name),l.a.createElement("td",null,e.state.receivedData[a].time),l.a.createElement("td",null,e.state.receivedData[a].gps),l.a.createElement("td",null,e.state.receivedData[a].euid),l.a.createElement("td",null,e.state.receivedData[a].etime)))})),l.a.createElement("div",null,l.a.createElement("div",{className:"row col-md-12",style:{background:"#00d2d2"}},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(d,{onCalender:this.handleCalender})),l.a.createElement("div",null,l.a.createElement("h1",null,"Kaduna State Vehicles Tracking System",l.a.createElement("br",null),new Date(this.state.time).getHours(),":",new Date(this.state.time).getMinutes(),":",new Date(this.state.time).getSeconds(),l.a.createElement("br",null),this.state.day,"/",this.state.month,"/2020"))),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Vehicle Number"),l.a.createElement("th",null,"Vehicle Type"),l.a.createElement("th",null,"Drivers Phone"),l.a.createElement("th",null,"Passengers Alighting in Kaduna"),l.a.createElement("th",null,"Number of Male Passengers"),l.a.createElement("th",null,"Number of Female Passengers"),l.a.createElement("th",null,"Passengers With Temp. > 38")," ",l.a.createElement("th",null,"Entry Point"),l.a.createElement("th",null,"Entry Time"),l.a.createElement("th",null,"GPS"),l.a.createElement("th",null,"Exist Point"),l.a.createElement("th",null,"Exit Time"))),l.a.createElement("tbody",null,t)))}}]),a}(l.a.Component),p=(a(53),a(4));var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",exact:!0,component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(12);r.a.render(l.a.createElement(D.a,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.8be334af.chunk.js.map