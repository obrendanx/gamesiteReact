(this.webpackJsonpgamesite=this.webpackJsonpgamesite||[]).push([[0],{238:function(e,t){},240:function(e,t){},254:function(e,t){},256:function(e,t){},284:function(e,t){},286:function(e,t){},287:function(e,t){},292:function(e,t){},294:function(e,t){},313:function(e,t){},325:function(e,t){},328:function(e,t){},345:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(73),c=a.n(n),r=a(24),o=a.p+"static/media/logo.409fbaeb.jpg",l=a(14),m=a(42),j=Object(m.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),d=j.actions,u=d.login,h=d.logout,b=function(e){return e.user.user},x=j.reducer,p=a(0);var O=function(){var e=Object(l.c)(b);return Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"navbar",children:Object(p.jsxs)("ul",{className:"navbar-ul",children:[Object(p.jsxs)("div",{className:"nav-left",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("li",{children:Object(p.jsx)("img",{src:o,alt:"Logo"})})}),Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("li",{children:" Home "})}),Object(p.jsx)(r.b,{to:"/fourms",children:Object(p.jsx)("li",{children:" Fourms "})}),Object(p.jsx)(r.b,{to:"/anime",children:Object(p.jsx)("li",{children:" Anime "})})]}),Object(p.jsxs)("div",{className:"nav-right",children:[Object(p.jsx)(r.b,{to:e?"profile":"/register",class:"user-name",children:Object(p.jsx)("li",{children:e?e.name:"Register"})}),Object(p.jsx)(r.b,{to:"/login",children:Object(p.jsx)("li",{children:e?"Logout":"Login"})})]})]})})})})},f=a(43),g=a(44),v=a(47),N=a(46),w=(a(210),a(32)),_=a(350),y=a(351),S=a(349),T=a(199),k=[a.p+"static/media/tog.9ce8adae.jpg",a.p+"static/media/aot.bd9de4fd.jpg",a.p+"static/media/goh.53c4bd3a.jpg",a.p+"static/media/sololevel.0b6fc395.jpg"],M=function(e){Object(v.a)(a,e);var t=Object(N.a)(a);function a(e){var s;return Object(f.a)(this,a),(s=t.call(this,e)).state={counter:0},s}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({counter:e.state.counter+1}),console.log(e.state.counter)}),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"changeImage",value:function(e){1===e?this.state.counter===k.length-1?this.setState({counter:0}):this.setState({counter:this.state.counter+1}):0===this.state.counter?this.setState({counter:k.length-1}):this.setState({counter:this.state.counter-1})}},{key:"render",value:function(){var e=this,t=!1,a=!1,s="",i="";0===this.state.counter&&(a=!0),this.state.counter===k.length-1&&(t=!0),this.state.counter>3&&this.setState({counter:0}),0===this.state.counter?(s="Tower of God - Season 2",i="Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'. He has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam is devastated. Somehow, Bam manages to open the door to the Tower..."):1===this.state.counter?(s="Attack on Titan",i="The story of Attack on Titan centers on a civilization inside three circular walls. According to the knowledge propagated locally, it is the last surviving vestige of human civilization. Its inhabitants have been led to believe that over one hundred years ago, humanity was driven to the brink of extinction after the emergence of humanoid giants called Titans..."):2===this.state.counter?(s="The God of Highschool",i="At the dawn of time, humans, demons and gods lived together on Earth. The gods allowed the weak humans to borrow their powers, creating the 'Borrowed Power' system (or 'Charyeok' in Korean) so they could defend themselves from the demons who wanted to rule over them..."):3===this.state.counter&&(s="Solo Leveling",i="In a world where hunters \u2014 humans who possess magical abilities \u2014 must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival...");var n=T.a.create({ban:{height:"250px",width:"100%",animation:"1s linear forwards ${fadeIn}",position:"relative",opacity:"0.8","@media (min-width: 770px)":{height:"700px"}},arrowLeftBtn:{position:"absolute",padding:"10px",top:"250px","@media (max-width: 770px)":{top:"30%"}},arrowRightBtn:{position:"absolute",top:"250px",right:"0",padding:"10px","@media (max-width: 770px)":{top:"30%"}},arrowLeftText:{padding:"15px",fontSize:"4em",color:"#fff","@media (max-width: 770px)":{fontSize:"1.5em"}},arrowRightText:{padding:"15px",fontSize:"4em",color:"#fff","@media (max-width: 770px)":{fontSize:"1.5em"}}}),c=n.ids,o=n.styles;return Object(p.jsx)("div",{children:Object(p.jsx)(w.a,{children:Object(p.jsxs)(_.a,{source:k[this.state.counter],style:o.ban,dataSet:{media:c.ban},children:[Object(p.jsxs)("div",{className:"touchFlex",children:[Object(p.jsx)(y.a,{disabled:a,onPress:function(t){return e.changeImage(2)},underlayColor:"",style:o.arrowLeftBtn,dataSet:{media:c.arrowLeftBtn},children:Object(p.jsx)(S.a,{style:o.arrowLeftText,dataSet:{media:c.arrowLeftText},children:"<"})}),Object(p.jsx)(y.a,{disabled:t,onPress:function(t){return e.changeImage(1)},underlayColor:"",style:o.arrowRightBtn,dataSet:{media:c.arrowRightBtn},children:Object(p.jsx)(S.a,{style:o.arrowRightText,dataSet:{media:c.arrowRightText},children:">"})})]}),Object(p.jsx)("div",{className:"imageInfo",children:Object(p.jsxs)(S.a,{style:{position:"absolute",top:"450px",color:"#fff",width:"50%",minHeight:"30%",marginLeft:"2.5%",marginBottom:"2.5%",padding:"2.5%",background:"rgba(0, 0, 0, 0.6)",borderRadius:"20px"},children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{style:{marginBottom:"5px"},children:s})}),Object(p.jsx)("p",{children:i}),Object(p.jsx)(r.b,{to:"/towerofgod",children:"Learn More"})]})})]})})})}}]),a}(s.Component);a(110);var I=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"text_box",children:[Object(p.jsx)("img",{src:e.imgName,alt:"gaming"}),Object(p.jsxs)("div",{className:"text_area",id:"text_area",children:[Object(p.jsx)("div",{class:"hov_indicator"}),Object(p.jsx)("header",{children:Object(p.jsx)("h2",{children:e.imgTitle})}),Object(p.jsxs)("p",{children:[e.imgText," ",Object(p.jsx)("a",{href:"#",children:"here"})]})]})]})})};var C=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"text_box_small",children:[Object(p.jsx)("img",{src:e.anime.images.jpg.image_url,alt:"gaming"}),Object(p.jsx)("div",{className:"text_area "+e.colorscheme,children:Object(p.jsxs)("header",{children:[Object(p.jsx)("h2",{children:Object(p.jsx)("a",{href:e.anime.url,target:"_blank",children:e.anime.title_japanese})}),Object(p.jsxs)("h2",{children:["Status: ",e.anime.status]})]})})]})})};var P=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"text_box_small",children:[Object(p.jsx)("img",{src:e.manga.images.jpg.image_url,alt:"gaming"}),Object(p.jsx)("div",{className:"text_area "+e.colorscheme,children:Object(p.jsxs)("header",{children:[Object(p.jsx)("h2",{children:Object(p.jsx)("a",{href:e.manga.url,target:"_blank",children:e.manga.title_japanese})}),Object(p.jsxs)("h2",{children:["Status: ",e.manga.status]})]})})]})})};var L=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"text_box_md",children:[Object(p.jsx)("img",{src:e.imgName,alt:"gaming"}),Object(p.jsxs)("div",{className:"text_area",children:[Object(p.jsx)("div",{class:"hov_indicator"}),Object(p.jsx)("header",{children:Object(p.jsx)("h2",{children:e.imgTitle})}),Object(p.jsxs)("p",{children:[e.imgText," ",Object(p.jsx)("a",{href:"#",children:"here"})]})]})]})})},E=a(12),q=a.n(E),B=a(23),A=a(22);var F=function(){var e=Object(s.useState)([]),t=Object(A.a)(e,2),a=t[0],i=t[1],n=[],c=[],r=[],o=[],l=function(){var e=Object(B.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/anime").then((function(e){return e.json()}));case 2:t=e.sent,i(t.data.slice(0,8));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),a.map((function(e){return n.push(e.title),c.push(e.image_url),r.push(e.start_date),o.push(e.url)})),console.log(a),Object(p.jsx)("div",{className:"anime_sm_card",children:a.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(C,{anime:e},e.mal_id)})}))})};var H=function(){var e=Object(s.useState)([]),t=Object(A.a)(e,2),a=t[0],i=t[1],n=[],c=[],r=[],o=[],l=function(){var e=Object(B.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/manga").then((function(e){return e.json()}));case 2:t=e.sent,i(t.data.slice(0,16));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),console.log(a),a.map((function(e){return n.push(e.title),c.push(e.image_url),r.push(e.start_date),o.push(e.url)})),Object(p.jsx)("div",{className:"anime_sm_card",children:a.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(P,{manga:e},e.mal_id)})}))})},R=(a.p,a.p+"static/media/sw.2d7e2b86.jpg"),U=a.p+"static/media/mario.23510a43.webp",D=(a.p,a.p+"static/media/ps5.da522e12.jpg"),G=a.p+"static/media/xboxx.a6811297.jpg",W=(a.p,a.p+"static/media/minecraft.e5e66a77.png"),z=(a.p,a.p+"static/media/codmob.f0ae489b.jpeg"),J=a.p+"static/media/haloinfinite.4e726cc4.jpeg",K=a.p+"static/media/pkmpearl.697b55a6.jpeg",V=a.p+"static/media/fallout76.cdac2efd.jpeg",Q=a.p+"static/media/cyberpunk.5db2ac0c.jpeg",$=a.p+"static/media/spiderman2.b1872db5.png",X=a.p+"static/media/warframenewwar.7abd84a8.jpeg",Y=(a.p,a.p,a.p,a.p,"Some information about the image, and about new updates that are out. Learn more"),Z="Main Title",ee="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt mollis mi, sit amet aliquam sem volutpat in. Donec varius. Learn more",te="Main Title 1",ae="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum et mauris et tempor. Vivamus porttitor leo id lectus pharetra egestas. Learn more",se="Main Title 2";var ie=function(){return Object(p.jsxs)("div",{className:"home_wrap",children:[Object(p.jsx)(M,{}),Object(p.jsxs)("div",{className:"info_wrap",children:[Object(p.jsx)("h2",{className:"section_header",children:"TOP: UPCOMING ANIME"}),Object(p.jsxs)("div",{className:"intro_content",children:[Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:R,imgText:ee,imgTitle:Z})}),Object(p.jsxs)("div",{className:"med_textcard",children:[Object(p.jsx)(L,{imgName:W,imgText:Y,imgTitle:te,margbot:"margbot"}),Object(p.jsx)(L,{imgName:U,imgText:Y,imgTitle:se,margbot:"margbot"})]})]}),Object(p.jsxs)("div",{className:"main_content",children:[Object(p.jsx)("h2",{className:"section_header",children:"TOP: UPCOMING ANIME"}),Object(p.jsx)(F,{}),Object(p.jsx)("h2",{className:"section_header",children:"Top Stories"}),Object(p.jsxs)("div",{className:"info_section",children:[Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:D,imgText:ee,imgTitle:te})}),Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:G,imgText:ae,imgTitle:se})})]}),Object(p.jsxs)("div",{className:"info_section",children:[Object(p.jsxs)("div",{className:"med_textcard",children:[Object(p.jsx)(L,{imgName:z,imgText:ee,imgTitle:te,margbot:"margbot"}),Object(p.jsx)(L,{imgName:K,imgText:ae,imgTitle:se,margbot:"margbot"})]}),Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:J,imgText:ee,imgTitle:Z})})]}),Object(p.jsxs)("div",{className:"info_section",children:[Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:Q,imgText:ee,imgTitle:Z})}),Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:V,imgText:ee,imgTitle:Z})})]}),Object(p.jsxs)("div",{className:"info_section",children:[Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:$,imgText:ee,imgTitle:Z})}),Object(p.jsx)("div",{className:"large_textcard",children:Object(p.jsx)(I,{imgName:X,imgText:ee,imgTitle:Z})})]}),Object(p.jsx)("h2",{className:"section_header",children:"TOP 15 MANGA"}),Object(p.jsx)(H,{})]})]})]})};var ne=function(e){return Object(p.jsxs)("div",{className:"workUserProfile",children:[Object(p.jsx)("h1",{children:"N/A"}),Object(p.jsxs)("div",{className:"userInfo",children:[Object(p.jsx)("h2",{className:"teamMemMainHead",children:e.teamMemName}),Object(p.jsx)("h3",{calss:"teamMemSubHead",children:e.teamMemEmail}),Object(p.jsx)("p",{className:"teamMemInfo",children:e.teamMemInfo})]})]})},ce=a.p+"static/media/defperson.ffcb6ef4.png",re="Cras luctus bibendum justo, ut consectetur libero euismod non. Cras ut elit semper neque ultrices consectetur at eu tortor. Cras malesuada eget nibh faucibus dapibus. Mauris sit amet egestas odio, nec tempor mi. Nulla aliquam ullamcorper mattis.";var oe=function(){return Object(p.jsx)("div",{className:"about_main",children:Object(p.jsxs)("div",{className:"abt-padd",children:[Object(p.jsx)("h1",{className:"abt_main_head",children:"- Our Mission -"}),Object(p.jsx)("h2",{className:"abtSubHead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),Object(p.jsx)("h1",{className:"abt_main_head",children:"About"}),Object(p.jsxs)("p",{className:"abtMainPara",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis tincidunt pretium. Cras quis commodo ligula, eu facilisis massa. Praesent sodales euismod ipsum, et dapibus dolor finibus id. Integer aliquet lectus eu ante aliquam pharetra. Pellentesque mollis risus justo, dictum pharetra massa gravida et. Cras non felis odio. Fusce fermentum interdum magna, a vulputate magna aliquet eu. Morbi mollis pharetra felis vel sollicitudin. Integer congue lorem nisl, bibendum consequat mauris vestibulum quis. Curabitur a augue elementum, cursus felis quis, tempus ipsum. Donec id egestas lectus, accumsan ultrices nunc. Proin finibus nisi elementum purus auctor ultricies. Fusce ac dapibus odio. Sed rutrum et sem ac convallis. Quisque tristique bibendum augue et gravida. Etiam vitae cursus orci, vitae laoreet lectus.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Proin erat massa, vestibulum sed tortor et, dapibus pretium nisl. Mauris rutrum purus eget tellus facilisis fermentum. Sed interdum pretium sapien at interdum. Nam et aliquet turpis, a tempus lorem. Nam ac blandit lorem. Donec in laoreet nibh. Cras luctus bibendum justo, ut consectetur libero euismod non. Cras ut elit semper neque ultrices consectetur at eu tortor. Cras malesuada eget nibh faucibus dapibus. Mauris sit amet egestas odio, nec tempor mi. Nulla aliquam ullamcorper mattis."]}),Object(p.jsxs)("div",{className:"teamMembers",children:[Object(p.jsx)("h1",{className:"abt_main_head",children:"Leadership"}),Object(p.jsx)("div",{className:"members",children:Object(p.jsxs)("div",{className:"member_group_one",children:[Object(p.jsx)(ne,{teamMemImg:ce,teamMemName:"Name Here",teamMemEmail:"teamemail@email.com",teamMemInfo:re,teamMemProjects:"Projects here",className:"aboutuser"}),Object(p.jsx)(ne,{teamMemImg:ce,teamMemName:"Name Here",teamMemEmail:"teamemail@email.com",teamMemInfo:re,teamMemProjects:"Projects here",className:"aboutuser"}),Object(p.jsx)(ne,{teamMemImg:ce,teamMemName:"Name Here",teamMemEmail:"teamemail@email.com",teamMemInfo:re,teamMemProjects:"Projects here",className:"aboutuser"}),Object(p.jsx)(ne,{teamMemImg:ce,teamMemName:"Name Here",teamMemEmail:"teamemail@email.com",teamMemInfo:re,teamMemProjects:"Projects here",className:"aboutuser"})]})})]})]})})};var le=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("footer",{className:"main_footer",children:[Object(p.jsx)("div",{className:"welcome_links",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"What we Do"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Portfolio"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:"Contact"})})]})}),Object(p.jsx)("div",{className:"social_links",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{class:"fab fa-facebook fa-2x"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{class:"fab fa-twitter fa-2x"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{class:"fab fa-instagram fa-2x"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#",children:Object(p.jsx)("i",{class:"fab fa-github fa-2x"})})})]})}),Object(p.jsxs)("div",{className:"personal_info",children:[Object(p.jsx)("h4",{children:"99 Road Lane Townsville NE34 1JU"}),Object(p.jsx)("h4",{children:"07263634786"}),Object(p.jsx)("h4",{children:Object(p.jsx)("a",{href:"#",children:"myemail@gmail.com"})}),Object(p.jsx)("hr",{}),Object(p.jsx)("h3",{children:"Copyright \xa9 2015 SomeCompany Ltd"})]})]})})},me=function(){var e=Object(l.c)(b),t=Object(l.b)();return Object(p.jsxs)("div",{className:"logout_box",children:[Object(p.jsxs)("h1",{children:["Welcome ",Object(p.jsx)("span",{className:"user_name",children:e.name})]}),Object(p.jsx)("button",{className:"logout_btn",onClick:function(e){return function(e){e.preventDefault(),t(h())}(e)},children:" Logout "})]})},je=a(29),de=a(110),ue=a.n(de),he=function(e){Object(v.a)(a,e);var t=Object(N.a)(a);function a(){var e;return Object(f.a)(this,a),(e=t.call(this)).state={fullName:"",username:"",email:"",password:""},e.changeFullName=e.changeFullName.bind(Object(je.a)(e)),e.changeEmail=e.changeEmail.bind(Object(je.a)(e)),e.changeUsername=e.changeUsername.bind(Object(je.a)(e)),e.changePassword=e.changePassword.bind(Object(je.a)(e)),e.onSubmit=e.onSubmit.bind(Object(je.a)(e)),e}return Object(g.a)(a,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={fullName:this.state.fullName,username:this.state.username,email:this.state.email,password:this.state.password};ue.a.post("http://localhost:5000/app/signup",t).then((function(e){return console.log(e.data)})),window.location="./Login"}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"login_form",children:[Object(p.jsx)("h1",{children:"Register"}),Object(p.jsx)("div",{className:"form-div",children:Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{type:"text",placeholder:"Full Name",onChange:this.changeFullName,value:this.state.fullName}),Object(p.jsx)("input",{type:"text",placeholder:"Username",onChange:this.changeUsername,value:this.state.username}),Object(p.jsx)("input",{type:"text",placeholder:"Email",onChange:this.changeEmail,value:this.state.email}),Object(p.jsx)("input",{type:"password",placeholder:"Password",onChange:this.changePassword,value:this.state.password}),Object(p.jsx)("input",{type:"submit",value:"Submit"})]})})]})})}}]),a}(s.Component);function be(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"000000"}),Object(p.jsx)("h1",{children:Object(p.jsx)("a",{href:"#",children:"Followers"})})]})}function xe(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"000000"}),Object(p.jsx)("h1",{children:Object(p.jsx)("a",{href:"#",children:"Following"})})]})}function pe(e){return Object(p.jsx)("div",{className:"following_tab",children:Object(p.jsx)("h1",{children:Object(p.jsx)("a",{href:"#",children:e.username})})})}var Oe=a(198),fe=a.n(Oe);var ge=function(){var e=Object(l.c)(b),t=e.name;return Object(s.useEffect)((function(){var e=localStorage.getItem("token");e&&(fe.a.decode(e)?console.log("welcome"):localStorage.removeItem("token"))}),[]),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"profile_page",children:[Object(p.jsx)("h1",{className:"profile_title",children:t}),Object(p.jsx)("h2",{className:"profilePic",children:t[0]}),Object(p.jsxs)("div",{className:"profile_info",children:[Object(p.jsxs)("h2",{className:"profile_h2",children:[e.first,e.last]}),Object(p.jsxs)("h3",{className:"profile_h3",children:[e.location_street,", ",e.location_code,", ",e.location_country]})]}),Object(p.jsxs)("div",{className:"follow_count",children:[Object(p.jsx)("div",{className:"following",children:Object(p.jsx)(xe,{})}),Object(p.jsx)("div",{className:"followers",children:Object(p.jsx)(be,{})})]}),Object(p.jsx)(pe,{username:t}),Object(p.jsx)(pe,{username:t}),Object(p.jsx)(pe,{username:t})]})})};var ve=function(){var e=Object(s.useState)(""),t=Object(A.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(""),c=Object(A.a)(n,2),r=c[0],o=c[1],m=Object(s.useState)(""),j=Object(A.a)(m,2),d=j[0],h=j[1],b=Object(l.b)();function x(){return(x=Object(B.a)(q.a.mark((function e(t){var s,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:5000/app/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,email:r,password:d})});case 3:return s=e.sent,e.next=6,s.json();case 6:(i=e.sent).user?(localStorage.setItem("token",i.user),console.log("Login successful"),b(u({loggedIn:!0,name:a,email:r}))):alert("Please check your username and password"),console.log(i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"login",children:Object(p.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},className:"login_form",children:[Object(p.jsx)("h1",{children:"Login Here"}),Object(p.jsx)("input",{value:a,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Username"}),Object(p.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)},type:"email",placeholder:"Email"}),Object(p.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},type:"password",placeholder:"Password"}),Object(p.jsx)("input",{type:"submit",value:"Login",className:"submit_btn"})]})})},Ne=function(e){Object(v.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(f.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,person:null,username:null,password:null,email:null,profileImg:null},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(B.a)(q.a.mark((function e(){var t,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.randomuser.me/",e.next=3,fetch("https://api.randomuser.me/");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({person:a.results[0],loading:!1,username:a.results[0].login.username,password:a.results[0].login.password,email:a.results[0].email,profileImg:a.results[0].picture.medium,first:a.results[0].name.first,last:a.results[0].name.last,location_street:a.results[0].location.street.name,location_code:a.results[0].location.postcode,location_country:a.results[0].location.country});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"fetchLogin",children:Object(p.jsx)(ve,{username:this.state.username,password:this.state.password,email:this.state.email,profileImg:this.state.profileImg,firstname:this.state.first,lastname:this.state.last,location_street:this.state.location_street,location_code:this.state.location_code,location_country:this.state.location_country})})})}}]),a}(s.Component),we=Ne,_e=a(6);a(345);var ye=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("artcile",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{children:e.storyTitle})}),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:e.storySynopsis})}),Object(p.jsx)("div",{children:Object(p.jsx)("iframe",{src:e.storyVideoSrc})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("h2",{children:e.storySubTitle})}),Object(p.jsx)("p",{children:Object(p.jsx)("iframe",{src:e.storyInfo})})]})]})})};var Se=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(ye,{storyTitle:"Tower of God",storySynopsis:"Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'. He has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam is devastated. Somehow, Bam manages to open the door to the Tower. Now, he will go any distance to see Rachel again even if it means dying. When he enters the Tower, he meets allies that will help him up the tower.",storyVideoSrc:"https://www.youtube.com/watch?v=5H9U6SugSzk",storySubTitle:"Tower of God: Wiki",storyInfo:"https://towerofgod.fandom.com/wiki/Tower_of_God_Wiki"})})};var Te=function(e){var t=e.topAnime;return Object(p.jsx)("div",{className:"anime_side",children:Object(p.jsx)("aside",{children:Object(p.jsxs)("nav",{className:"anime_side_nav",children:[Object(p.jsx)("h3",{className:"anime_side_head",children:"Top Anime:"}),Object(p.jsx)("ul",{children:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"anime_top_link",children:e.title},e.mal_id)})}))})]})})})};var ke=function(e){var t=e.anime;return Object(p.jsx)("div",{children:Object(p.jsx)("article",{className:"anime_card",children:Object(p.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("figure",{className:"anime_img",children:Object(p.jsx)("img",{src:t.images.jpg.image_url,alt:"Anime Image"})}),Object(p.jsx)("h2",{className:"anime_title",children:t.title_japanese})]})})})};var Me=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("main",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("form",{onSubmit:e.HandleSearch,className:"anime_search",children:Object(p.jsx)("input",{type:"search",placeholder:"Search",required:!0,value:e.search,onChange:function(t){return e.SetSearch(t.target.value)}})})}),Object(p.jsx)("div",{className:"anime_container",children:e.animeList.map((function(e){return Object(p.jsx)("div",{className:"anime_group",children:Object(p.jsx)(ke,{anime:e},e.mal_id)})}))})]})})};var Ie=function(){var e=Object(s.useState)([]),t=Object(A.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)([]),c=Object(A.a)(n,2),r=c[0],o=c[1],l=Object(s.useState)([]),m=Object(A.a)(l,2),j=m[0],d=m[1],u=function(){var e=Object(B.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/anime").then((function(e){return e.json()}));case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(B.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/anime?q=".concat(t)).then((function(e){return e.json()}));case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){u()}),[]),console.log(r),console.log(a),Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{className:"anime_search_title",children:["Search ",Object(p.jsx)("strong",{children:"Anime"})]}),Object(p.jsxs)("div",{className:"anime_main_container",children:[Object(p.jsx)("div",{className:"con_side",children:Object(p.jsx)(Te,{topAnime:r})}),Object(p.jsx)("div",{className:"con_main",children:Object(p.jsx)(Me,{HandleSearch:function(e){e.preventDefault(),h(j)},search:j,SetSearch:d,animeList:a})})]})]})};var Ce=function(){return Object(p.jsx)("div",{className:"progress",children:"Page Is In Development"})},Pe=function(){var e=Object(l.c)(b);return Object(p.jsxs)("div",{children:[Object(p.jsx)(r.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{}),Object(p.jsxs)(_e.c,{children:[Object(p.jsx)(_e.a,{path:"/",exact:!0,component:ie}),Object(p.jsx)(_e.a,{path:"/about",component:oe}),Object(p.jsx)(_e.a,{path:"/fourms",component:Ce}),Object(p.jsx)(_e.a,{path:"/anime",component:Ie}),Object(p.jsx)(_e.a,{path:"/register",component:he}),Object(p.jsx)(_e.a,{path:"/profile",component:ge}),Object(p.jsx)(_e.a,{path:"/towerofgod",component:Se}),e?Object(p.jsx)(me,{}):Object(p.jsx)(we,{})]})]})}),Object(p.jsx)(le,{})]})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,352)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))},Ee=Object(m.a)({reducer:{user:x}});c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(l.a,{store:Ee,children:Object(p.jsx)(Pe,{})})}),document.getElementById("root")),Le()}},[[346,1,2]]]);
//# sourceMappingURL=main.40291df9.chunk.js.map