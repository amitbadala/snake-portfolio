(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},112:function(e,t,a){e.exports=a.p+"static/media/path4.e37326c7.png"},342:function(e,t,a){},343:function(e,t,a){e.exports=a.p+"static/media/preloader_loading.274211a7.gif"},344:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(42),o=a.n(r),c=(a(100),a(101),a(102),a(15)),s=a(16),i=a(18),m=a(17),u=a(19),d=a(345),p=a(346),h=a(347),f=a(357),E=a(348),b=a(349),g=a(350),v=a(351),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeColor=function(){document.documentElement.scrollTop>99||document.body.scrollTop>99?a.setState({color:"bg-info"}):(document.documentElement.scrollTop<100||document.body.scrollTop<100)&&a.setState({color:"navbar-transparent"})},a.toggleCollapse=function(){document.documentElement.classList.toggle("nav-open"),a.setState({collapseOpen:!a.state.collapseOpen})},a.onCollapseExiting=function(){a.setState({collapseOut:"collapsing-out"})},a.onCollapseExited=function(){a.setState({collapseOut:""})},a.scrollToDownload=function(){document.getElementById("download-section").scrollIntoView({behavior:"smooth"})},a.state={collapseOpen:!1,color:"navbar-transparent"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.changeColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.changeColor)}},{key:"render",value:function(){return l.a.createElement(d.a,{className:"fixed-top "+this.state.color,"color-on-scroll":"100",expand:"lg"},l.a.createElement(p.a,null,l.a.createElement("div",{className:"navbar-translate"},l.a.createElement(h.a,{"data-placement":"bottom",to:"/",rel:"noopener noreferrer",title:"Amit Portfolio"},l.a.createElement("h3",{className:"pageTitle"},"Hi I'm Amit \ud83d\ude80"))),l.a.createElement(f.a,{className:"justify-content-end "+this.state.collapseOut,navbar:!0,isOpen:this.state.collapseOpen,onExiting:this.onCollapseExiting,onExited:this.onCollapseExited},l.a.createElement("div",{className:"navbar-collapse-header"},l.a.createElement(E.a,null,l.a.createElement(b.a,{className:"collapse-close text-right",xs:"6"},l.a.createElement("button",{"aria-expanded":this.state.collapseOpen,className:"navbar-toggler",onClick:this.toggleCollapse},l.a.createElement("i",{className:"tim-icons icon-simple-remove"}))))),l.a.createElement(g.a,{navbar:!0},l.a.createElement(v.a,null,l.a.createElement("a",{className:"nav-link d-none d-lg-block",color:"default",target:"_blank",href:"https://drive.google.com/open?id=1h0Azd5TEccOvFmP-KCKVTAKQzewtizfe",rel:"noopener noreferrer"},l.a.createElement("i",{className:"tim-icons icon-cloud-download-93"})," Resume"))))))}}]),t}(l.a.Component),y=a(20),w=a(31),N=a(352),C=a(353),O=a(354),S=a(355),j=a(356),x=function(){var e=4*Math.floor(1+95*Math.random()/4);return[4*Math.floor(1+95*Math.random()/4),e]},I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={mounted:!1,modalShow:!0,gameover:!1,speed:250,direction:"RIGHT",fruit:x(),snakeMoveTimer:"",playerscore:0,snakeDots:[[0,0],[4,0],[8,0]],aboutFruit:x(),portfolioFruit:x(),contactFruit:x(),currentPage:"about",gameAreaBorderClass:"text-primary"},a.startPlay=function(){a.setState({modalShow:!1}),a.setState({snakeMoveTimer:setInterval(a.snakeMovement,a.state.speed)})},a.changeDirection=function(e){switch((e=e||window.event).keyCode){case 37:"RIGHT"!==a.state.direction&&a.setState({direction:"LEFT"});break;case 38:"DOWN"!==a.state.direction&&a.setState({direction:"UP"});break;case 39:"LEFT"!==a.state.direction&&a.setState({direction:"RIGHT"});break;case 40:"UP"!==a.state.direction&&a.setState({direction:"DOWN"})}},a.checkIfSnakeHitWall=function(){var e=Object(w.a)(a.state.snakeDots),t=e[e.length-1];if(t[0]>=100){var n=e.map(function(e){var t=[];return t[0]=0,t[1]=e[1],t});a.setState({snakeDots:n})}else if(t[1]>=100){var l=e.map(function(e){var t=[];return t[1]=0,t[0]=e[0],t});a.setState({snakeDots:l})}else if(t[0]<0){var r=e.map(function(e){var t=[];return t[0]=100+e[0],t[1]=e[1],t});a.setState({snakeDots:r})}else if(t[1]<0){var o=e.map(function(e){var t=[];return t[1]=100+e[1],t[0]=e[0],t});a.setState({snakeDots:o})}},a.checkIfSnakeHitSelf=function(){var e=Object(w.a)(a.state.snakeDots),t=e[e.length-1];e.pop(),e.forEach(function(e){t[0]===e[0]&&t[1]===e[1]&&(console.log(t,e,"self"),a.endGame())})},a.snakeMovement=function(){var e=Object(w.a)(a.state.snakeDots),t=e[e.length-1];switch(a.state.direction){case"LEFT":t=[t[0]-4,t[1]];break;case"UP":t=[t[0],t[1]-4];break;case"RIGHT":t=[t[0]+4,t[1]];break;case"DOWN":t=[t[0],t[1]+4]}e.push(t),e.shift(),a.setState({snakeDots:e}),a.isfruitEaten()},a.endGame=function(){a.setState({gameover:!0}),clearInterval(a.state.snakeMoveTimer),a.setState({speed:500,direction:"RIGHT",fruit:x(),about:x(),portfolio:x(),contact:x(),snakeDots:[[0,0],[4,0],[8,0]]})},a.playAgain=function(){window.location.reload()},a.isfruitEaten=function(){var e=a.state.snakeDots[a.state.snakeDots.length-1],t=a.state.aboutFruit,n=a.state.portfolioFruit,l=a.state.contactFruit;e[0]===t[0]&&e[1]===t[1]?"about"!==a.currentPage&&(a.setState({currentPage:"about",gameAreaBorderClass:"text-primary"}),a.setState({aboutFruit:x()}),a.updateSnake()):e[0]===n[0]&&e[1]===n[1]?"portfolio"!==a.currentPage&&(a.setState({currentPage:"portfolio",gameAreaBorderClass:"text-success"}),a.setState({portfolioFruit:x()}),a.updateSnake()):e[0]===l[0]&&e[1]===l[1]&&"contact"!==a.currentPage&&(a.setState({currentPage:"contact",gameAreaBorderClass:"text-warning"}),a.setState({contactFruit:x()}),a.updateSnake())},a.updateSnake=function(){var e=Object(w.a)(a.state.snakeDots);e.unshift([]),a.setState({snakeDots:e})},a.updateScore=function(){a.setState({playerscore:10*(a.state.snakeDots.length-3)})},a.increaseSpeed=function(){a.state.speed>10&&a.setState({speed:a.state.speed-10,snakeMoveTimer:setInterval(a.snakeMovement,a.state.speed)})},a.updateNavContent=function(e){a.setState({currentPage:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.startPlay(),document.onkeydown=this.changeDirection}},{key:"componentDidUpdate",value:function(){this.checkIfSnakeHitWall()}},{key:"render",value:function(){var e=this;return this.state.mounted?l.a.createElement("div",{className:"section section-basic",style:{flexGrow:1}},l.a.createElement("img",{alt:"...",className:"path",src:a(112)}),l.a.createElement(p.a,{style:{alignSelf:"center"}},l.a.createElement(E.a,null,l.a.createElement(b.a,{md:"4"},l.a.createElement("div",{className:"navMenu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:"text-primary",onClick:function(){return e.updateNavContent("about")}},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#portfolio",className:"text-success",onClick:function(){return e.updateNavContent("portfolio")}},"Portfolio")),l.a.createElement("li",null," ",l.a.createElement("a",{href:"#contact",className:"text-warning",onClick:function(){return e.updateNavContent("contact")}},"Contact")))),l.a.createElement("div",{className:"game-area"},l.a.createElement("div",{className:"test ".concat(this.state.gameAreaBorderClass)},l.a.createElement("div",{className:"bar top"}),l.a.createElement("div",{className:"bar right delay"}),l.a.createElement("div",{className:"bar bottom delay"}),l.a.createElement("div",{className:"bar left"}),l.a.createElement(D,{snakeDots:this.state.snakeDots}),l.a.createElement(F,{fruitLocation:this.state.aboutFruit,pageClass:"bg-primary"}),l.a.createElement(F,{fruitLocation:this.state.portfolioFruit,pageClass:"bg-success"}),l.a.createElement(F,{fruitLocation:this.state.contactFruit,pageClass:"bg-warning"}))),l.a.createElement("div",{className:"text-center d-sm-block d-md-none"},l.a.createElement(N.a,{color:"neutral",type:"button",className:"btn-sm",onClick:function(){return e.setState({direction:"LEFT"})}},l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement(N.a,{color:"neutral",type:"button",className:"btn-sm",onClick:function(){return e.setState({direction:"UP"})}},l.a.createElement("i",{className:"fas fa-arrow-up"})),l.a.createElement(N.a,{color:"neutral",type:"button",className:"btn-sm",onClick:function(){return e.setState({direction:"DOWN"})}},l.a.createElement("i",{className:"fas fa-arrow-down"})),l.a.createElement(N.a,{color:"neutral",type:"button",className:"btn-sm",onClick:function(){return e.setState({direction:"RIGHT"})}},l.a.createElement("i",{className:"fas fa-arrow-right"})))),l.a.createElement(M,{currentPage:this.state.currentPage})))):"Loading...."}}]),t}(l.a.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.snakeDots.map(function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return l.a.createElement("div",{className:"snake-dot",key:t,style:a})}))}}]),t}(n.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={left:"".concat(this.props.fruitLocation[0],"%"),top:"".concat(this.props.fruitLocation[1],"%")};return l.a.createElement("div",{className:"snake-fruit ".concat(this.props.pageClass),style:e})}}]),t}(n.Component);function M(e){switch(e.currentPage){case"about":return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{md:"5",className:"content-title"},l.a.createElement("h1",{className:"profile-title text-left text-primary"},"About"),l.a.createElement("p",{className:"profile-description text-left"},"I like javascript and everything on web, when my dev-senses kick in I build presumably awesome stuff. I've always been drawn to the overlap between design and development."," "),l.a.createElement("br",null),l.a.createElement("p",null,"My skills are broad: from ux to design, front end to back end development.I enjoy each aspect, and love building sites & mobile apps from start to finish."),l.a.createElement("br",null),l.a.createElement("p",null,"I stay close to community and try to keep pace with which the web is evolving. I have working experience in React, Nodejs, Rails, Angular, .Net, SQL Server")),l.a.createElement(b.a,{md:"3"},l.a.createElement(P,null)));case"portfolio":return l.a.createElement(A,null);case"contact":return l.a.createElement(T,null);default:return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{md:"5",className:"content-title"},l.a.createElement("h1",{className:"profile-title text-left text-primary"},"About"),l.a.createElement("p",{className:"profile-description text-left"},"I like javascript and everything on web, when my dev-senses kick in I build presumably awesome stuff. I've always been drawn to the overlap between design and development."," "),l.a.createElement("br",null),l.a.createElement("p",null,"My skills are broad: from ux to design, front end to back end development.I enjoy each aspect, and love building sites & mobile apps from start to finish."),l.a.createElement("br",null),l.a.createElement("p",null,"I stay close to community and try to keep pace with which the web is evolving. I also like to blog about what I learn or things which I find interesting. I have working experience in Angular, javascript, .Net, SQL Server")),l.a.createElement(b.a,{md:"3"},l.a.createElement(P,null)))}}var P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(C.a,{dark:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h3",{className:"title mb-2 lowerCase skills text-primary"},"What I do")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("span",{className:"title"},"Front-end "),"Javascript, Angular, React, Redux, Jquery, Ionic Framework, Typescript, HTML, CSS"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("span",{className:"title"},"Back-end "),"NodeJS, Express, C#, .Net, MsSQL, MongoDB, Mongoose"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("span",{className:"title"},"Others ")," Photoshop, IIS, Netlify, Heroku")))))}}]),t}(l.a.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).initialState={name:"",phone:"",email:"",companyName:"",message:"",thankyou:""},a.sendmail=function(e){var t=a.state,n=t.name,l=t.email,r=t.phone,o=t.companyName,c=t.message;e.preventDefault(),window.emailjs.send("gmail","template_mZ6Chr60",{message_html:"".concat(n," from ").concat(o," was interested in your profile, his message ").concat(c,". You can contact him \n        on his email: ").concat(l," or phone : ").concat(r)}).then(function(){a.setState(a.initialState),a.setState({thankyou:"Thank you for showing interest !"})}).catch(function(e){return console.error("Failed to send feedback. Error: ",e)})},a.state=a.initialState,a.handleCompanyChange=a.handleCompanyChange.bind(Object(y.a)(Object(y.a)(a))),a.handleEmailChange=a.handleEmailChange.bind(Object(y.a)(Object(y.a)(a))),a.handleMessageChange=a.handleMessageChange.bind(Object(y.a)(Object(y.a)(a))),a.handlePhoneChange=a.handlePhoneChange.bind(Object(y.a)(Object(y.a)(a))),a.handleNameChange=a.handleNameChange.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleCompanyChange",value:function(e){this.setState({companyName:e.target.value})}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"handleMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"content-title",md:"5"},l.a.createElement("h1",{className:"profile-title text-left text-warning"},"Contact"),l.a.createElement("p",null,this.state.thankyou),l.a.createElement(O.a,{id:"contact-form",onSubmit:this.sendmail},l.a.createElement(E.a,null,l.a.createElement(b.a,{md:"6"},l.a.createElement(S.a,null,l.a.createElement("label",null,"Your Name"),l.a.createElement(j.a,{value:this.state.name,onChange:this.handleNameChange,type:"text",name:"from_name"}))),l.a.createElement(b.a,{md:"6"},l.a.createElement(S.a,null,l.a.createElement("label",null,"Email address"),l.a.createElement(j.a,{value:this.state.email,type:"email",onChange:this.handleEmailChange,name:"from_email"})))),l.a.createElement(E.a,null,l.a.createElement(b.a,{md:"6"},l.a.createElement(S.a,null,l.a.createElement("label",null,"Phone"),l.a.createElement(j.a,{type:"text",value:this.state.phone,onChange:this.handlePhoneChange,name:"phoneNo"}))),l.a.createElement(b.a,{md:"6"},l.a.createElement(S.a,null,l.a.createElement("label",null,"Company"),l.a.createElement(j.a,{type:"text",value:this.state.companyName,name:"companyName",onChange:this.handleCompanyChange})))),l.a.createElement(E.a,null,l.a.createElement(b.a,{md:"12"},l.a.createElement(S.a,null,l.a.createElement("label",null,"Message"),l.a.createElement(j.a,{type:"text",value:this.state.message_html,name:"message_html",onChange:this.handleMessageChange})))),l.a.createElement(N.a,{className:"btn btn-warning",color:"primary","data-placement":"right",type:"submit",value:"Submit"},"Send"))),l.a.createElement(b.a,{md:"3"},l.a.createElement(C.a,{dark:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h3",{className:"title mb-2 lowerCase skills text-warning"},"Let's get in touch.")))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",null,l.a.createElement("i",{className:"far fa-envelope"})," : amitbadala07@gmail.com"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-mobile-alt"})," : (+91)- 9870758470"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("div",{className:"btn-wrapper profile"},l.a.createElement(N.a,{className:"btn-icon btn-neutral btn-round btn-simple",color:"default",href:"https://www.linkedin.com/in/amitbadala/",id:"tooltip230450801",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement(N.a,{className:"btn-icon btn-neutral btn-round btn-simple",color:"default",href:"https://github.com/amitbadala",id:"tooltip318450378",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"})))))))))}}]),t}(l.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"content-title portfolio",md:"8"},l.a.createElement("h1",{className:"profile-title text-left text-success"},"Portfolio"),l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(b.a,{lg:"12"},l.a.createElement(E.a,{className:"row-grid"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"Idyll - Open Source Contribution to markup language IDYLL using react & node , checkout my"," ",l.a.createElement("a",{href:"https://github.com/idyll-lang/idyll/pulls?q=is%3Apr+is%3Aclosed+author%3Aamitbadala",target:"_blank",rel:"noopener noreferrer"},"contribution"))),l.a.createElement("li",null,l.a.createElement("p",null,"Onego - Hybrid Mobile application for reseller agents developed using Ionic Framework,Angular |"," ",l.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.robinhood.pos",target:"_blank",rel:"noopener noreferrer"},"Android")," ")),l.a.createElement("li",null,l.a.createElement("p",null,"Oneinsure - Hybrid Mobile application for users to manage their insurance policies developed using Ionic Framework,Angular |"," ",l.a.createElement("a",{href:"https://apps.apple.com/in/app/oneinsure-your-insurance-app/id1211262262",target:"_blank",rel:"noopener noreferrer"},"Android")," ",",",l.a.createElement("a",{href:"https://apps.apple.com/in/app/oneinsure-your-insurance-app/id1211262262",target:"_blank",rel:"noopener noreferrer"},"iOs"))),l.a.createElement("li",null,l.a.createElement("p",null,"Investment Ecommerce - Developed three verticals of investment ecommerce")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("p",null,"CMS Blog Engine - Created custom themes and an interface to dynamically switch between them")),l.a.createElement("li",null,l.a.createElement("p",null,"Motilal Oswal CRM - worked on one of India's largest trading platform provider")),l.a.createElement("li",null,l.a.createElement("p",null,"Car Rental Project - Car rental web applicatoin "))),l.a.createElement("h5",null,"For more details download my resume,"," ",l.a.createElement("a",{href:"https://drive.google.com/file/d/1h0Azd5TEccOvFmP-KCKVTAKQzewtizfe/view",target:"_blank",rel:"noopener noreferrer"},"here")))))))}}]),t}(l.a.Component),L=I,_=a(93),R=a.n(_),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"wave-footer"},l.a.createElement(p.a,{style:{position:"relative",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},l.a.createElement("div",{style:{alignItems:"center",display:"flex",flexGrow:1}},l.a.createElement("div",{className:"flex-row",style:{marginRight:"10%"}},l.a.createElement("h4",null,"Reach me"),l.a.createElement("p",null,l.a.createElement("i",{className:"far fa-envelope"})," : amitbadala07@gmail.com"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-mobile-alt"})," : (+91)- 9870758470")),l.a.createElement("div",{className:"flex-row"},l.a.createElement("h4",null,"Follow me"),l.a.createElement("div",{className:"btn-wrapper profile"},l.a.createElement(N.a,{className:"btn-icon btn-neutral btn-round btn-simple",color:"default",href:"https://www.linkedin.com/in/amitbadala/",id:"tooltip230450801",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement(N.a,{className:"btn-icon btn-neutral btn-round btn-simple",color:"default",href:"https://github.com/amitbadala",id:"tooltip318450378",target:"_blank"},l.a.createElement("i",{className:"fab fa-github"}))))),l.a.createElement("img",{src:R.a,className:"signature"})))}}]),t}(l.a.Component),z=a(94),B=a.n(z),G=(a(342),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={mounted:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),console.log("%cCheckout my resume here => https://drive.google.com/file/d/1h0Azd5TEccOvFmP-KCKVTAKQzewtizfe/view ","font-size:15px"),document.body.classList.toggle("index-page")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("index-page")}},{key:"render",value:function(){return this.state.mounted?l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{style:{position:"absolute"},params:{particles:{number:{value:20},size:{value:1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),l.a.createElement(k,null),l.a.createElement("div",{className:"wrapper"},l.a.createElement(L,null),l.a.createElement(H,null))):l.a.createElement("div",{className:"preloader-bg"},l.a.createElement("img",{src:a(343)}))}}]),t}(l.a.Component));o.a.render(l.a.createElement(G,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a.p+"static/media/signature.e93541cd.svg"},95:function(e,t,a){e.exports=a(344)}},[[95,1,2]]]);
//# sourceMappingURL=main.1f331337.chunk.js.map