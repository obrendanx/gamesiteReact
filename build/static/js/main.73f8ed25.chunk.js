(this.webpackJsonpgamesite=this.webpackJsonpgamesite||[]).push([[0],{151:function(e,t){},186:function(e,t){},188:function(e,t){},202:function(e,t){},204:function(e,t){},232:function(e,t){},234:function(e,t){},235:function(e,t){},240:function(e,t){},242:function(e,t){},261:function(e,t){},273:function(e,t){},276:function(e,t){},293:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(51),i=a.n(c),r=a(21),l=a.p+"static/media/logo.409fbaeb.jpg",o=a(16),j=a(40),u=Object(j.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),m=u.actions,d=(m.login,m.logout),h=function(e){return e.user.user},b=u.reducer,O=a(0);var x=function(){var e=Object(o.c)(h);return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar",children:Object(O.jsxs)("ul",{className:"navbar-ul",children:[Object(O.jsxs)("div",{className:"nav-left",children:[Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("li",{children:Object(O.jsx)("img",{src:l,alt:"Logo"})})}),Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("li",{children:" Home "})}),Object(O.jsx)(r.b,{to:"/fourms",children:Object(O.jsx)("li",{children:" Fourms "})}),Object(O.jsx)(r.b,{to:"/anime",children:Object(O.jsx)("li",{children:" Anime "})})]}),Object(O.jsxs)("div",{className:"nav-right",children:[Object(O.jsx)(r.b,{to:e?"profile":"/register",class:"user-name",children:Object(O.jsx)("li",{children:e?e.name:"Register"})}),Object(O.jsx)(r.b,{to:"/login",children:Object(O.jsx)("li",{children:e?"Logout":"Login"})})]})]})})})})},f=a(9),p=a.n(f),g=a(20),v=a(17);var _=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(0),i=Object(v.a)(c,2),r=i[0],l=i[1],o=[],j=[],u=[],m=[],d=function(){var e=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/anime").then((function(e){return e.json()}));case 2:t=e.sent,console.log(t.data),n(t.data.slice(0,5));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){d();var e=setTimeout((function(){l(r<4?r+1:0)}),1e4);return function(){clearTimeout(e)}}),[r]),a.map((function(e){return j.push(e.images.webp.large_image_url),o.push(e.title_japanese),u.push(e.url),m.push(e.synopsis.slice(0,525))})),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"banner",style:{backgroundImage:"linear-gradient(rgba(204,204,204,.2), rgba(204,204,204,.3)), url(".concat(j[r],")")},children:[Object(O.jsx)("span",{className:"buttonLeft banner_button",onClick:function(){l(0==r?4:r-1)},children:"<"}),Object(O.jsx)("span",{className:"buttonRight banner_button",onClick:function(){l(4==r?0:r+1)},children:">"}),Object(O.jsxs)("div",{className:"banner_info",children:[Object(O.jsx)("h2",{className:"banner_title",children:Object(O.jsx)("a",{href:u,children:o[r]})}),Object(O.jsxs)("p",{className:"banner_text",children:[m[r]," ...",Object(O.jsx)("a",{href:u[r],children:" Learn More"})]})]})]})})};var N=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"text_box",children:[Object(O.jsx)("img",{src:e.imgName,alt:"gaming"}),Object(O.jsxs)("div",{className:"text_area",id:"text_area",children:[Object(O.jsx)("div",{class:"hov_indicator"}),Object(O.jsx)("header",{children:Object(O.jsx)("h2",{children:e.imgTitle})}),Object(O.jsxs)("p",{children:[e.imgText," ",Object(O.jsx)("a",{href:e.imgLink,children:"here"})]})]})]})})};var w=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"text_box_md",children:[Object(O.jsx)("img",{src:e.imgName,alt:"gaming"}),Object(O.jsxs)("div",{className:"text_area",children:[Object(O.jsx)("div",{class:"hov_indicator"}),Object(O.jsx)("header",{children:Object(O.jsx)("h2",{children:e.imgTitle})}),Object(O.jsxs)("p",{children:[e.imgText," ",Object(O.jsx)("a",{href:e.imgLink,children:"here"})]})]})]})})};var k=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"text_box_small",children:[Object(O.jsx)("img",{src:e.anime.images.jpg.image_url,alt:"gaming"}),Object(O.jsx)("div",{className:"text_area "+e.colorscheme,children:Object(O.jsxs)("header",{children:[Object(O.jsx)("h2",{children:Object(O.jsx)("a",{href:e.anime.url,target:"_blank",children:e.anime.title_japanese})}),Object(O.jsxs)("h2",{children:["Status: ",e.anime.status]})]})})]})})};var S=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),a=t[0],n=t[1],c=[],i=[],r=[],l=[],o=function(){var e=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/anime").then((function(e){return e.json()}));case 2:t=e.sent,n(t.data.slice(0,8));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[]),console.log(a),a.map((function(e){return c.push(e.title),i.push(e.image_url),r.push(e.start_date),l.push(e.url)})),console.log(a),Object(O.jsx)("div",{className:"anime_sm_card",children:a.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(k,{anime:e},e.mal_id)})}))})};var y=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"text_box_small",children:[Object(O.jsx)("img",{src:e.manga.images.jpg.image_url,alt:"gaming"}),Object(O.jsx)("div",{className:"text_area "+e.colorscheme,children:Object(O.jsxs)("header",{children:[Object(O.jsx)("h2",{children:Object(O.jsx)("a",{href:e.manga.url,target:"_blank",children:e.manga.title_japanese})}),Object(O.jsxs)("h2",{children:["Status: ",e.manga.status]})]})})]})})};var T=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),a=t[0],n=t[1],c=[],i=[],r=[],l=[],o=function(){var e=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/manga").then((function(e){return e.json()}));case 2:t=e.sent,n(t.data.slice(0,16));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[]),console.log(a),a.map((function(e){return c.push(e.title),i.push(e.image_url),r.push(e.start_date),l.push(e.url)})),Object(O.jsx)("div",{className:"anime_sm_card",children:a.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(y,{manga:e},e.mal_id)})}))})},L=a.p+"static/media/togs2.7e290976.jpg",C=a.p+"static/media/goh.83472cc2.jpg",P=a.p+"static/media/sololevel.c0d9893a.jpg",q=a.p+"static/media/unordinary.5ba532d8.png",F=a.p+"static/media/noblesse.b0033fcb.webp",I=["https://towerofgod.fandom.com/wiki/Tower_of_God_Wiki","https://godofhighschool.fandom.com/wiki/The_God_Of_High_School_Wiki","https://solo-leveling.fandom.com/wiki/Solo_Leveling_Wiki","https://unordinary.fandom.com/wiki/UnOrdinary_Wikia","https://noblesse.fandom.com/wiki/The_Noblesse"],E=["Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'","A 17-year-old martial artist from Seoul, South Korea who practices Full-Contact Karate","In a world where hunters \u2014 humans who possess magical abilities \u2014 must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival.","Unordinary is the story of a man with a powerful ability born in a world of cripples. The man only used his power for others, helping the weak, saving lives and spreading wealth.","Noblesse (Kor. \ub178\ube14\ub808\uc2a4) is the title given to the strongest member of the Noble race. The Noblesse is one of the two pillars of Noble society, equivalent in standing to the Lord."],A=["Tower of God Season 2","God of Highschool","Solo Leveling","Unordinary","Noblesse"];var M=function(){return Object(O.jsxs)("div",{className:"home_wrap",children:[Object(O.jsx)(_,{}),Object(O.jsxs)("div",{className:"info_wrap",children:[Object(O.jsx)("h2",{className:"section_header",children:"TOP: UPCOMING ANIME"}),Object(O.jsxs)("div",{className:"intro_content",children:[Object(O.jsx)("div",{className:"large_textcard",children:Object(O.jsx)(N,{imgName:L,imgText:E[0],imgTitle:A[0],imgLink:I[0]})}),Object(O.jsxs)("div",{className:"med_textcard",children:[Object(O.jsx)(w,{imgName:C,imgText:E[1],imgTitle:A[1],imgLink:I[1],margbot:"margbot"}),Object(O.jsx)(w,{imgName:P,imgText:E[2],imgTitle:A[2],imgLink:I[2],margbot:"margbot"})]})]}),Object(O.jsxs)("div",{className:"main_content",children:[Object(O.jsx)("h2",{className:"section_header",children:"TOP: UPCOMING ANIME"}),Object(O.jsx)(S,{}),Object(O.jsx)("h2",{className:"section_header",children:"Top Stories"}),Object(O.jsxs)("div",{className:"info_section",children:[Object(O.jsx)("div",{className:"large_textcard",children:Object(O.jsx)(N,{imgName:q,imgText:E[3],imgTitle:A[3],imgLink:I[3]})}),Object(O.jsx)("div",{className:"large_textcard",children:Object(O.jsx)(N,{imgName:F,imgText:E[4],imgTitle:A[4],imgLink:I[4]})})]}),Object(O.jsx)("h2",{className:"section_header",children:"TOP 15 MANGA"}),Object(O.jsx)(T,{})]})]})]})};var U=function(){return Object(O.jsx)("div",{className:"about_main",children:Object(O.jsxs)("div",{className:"abt-padd",children:[Object(O.jsx)("h1",{className:"abt_main_head",children:"- Our Mission -"}),Object(O.jsx)("h2",{className:"abtSubHead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),Object(O.jsx)("h1",{className:"abt_main_head",children:"About"}),Object(O.jsxs)("p",{className:"abtMainPara",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis tincidunt pretium. Cras quis commodo ligula, eu facilisis massa. Praesent sodales euismod ipsum, et dapibus dolor finibus id. Integer aliquet lectus eu ante aliquam pharetra. Pellentesque mollis risus justo, dictum pharetra massa gravida et. Cras non felis odio. Fusce fermentum interdum magna, a vulputate magna aliquet eu. Morbi mollis pharetra felis vel sollicitudin. Integer congue lorem nisl, bibendum consequat mauris vestibulum quis. Curabitur a augue elementum, cursus felis quis, tempus ipsum. Donec id egestas lectus, accumsan ultrices nunc. Proin finibus nisi elementum purus auctor ultricies. Fusce ac dapibus odio. Sed rutrum et sem ac convallis. Quisque tristique bibendum augue et gravida. Etiam vitae cursus orci, vitae laoreet lectus.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Proin erat massa, vestibulum sed tortor et, dapibus pretium nisl. Mauris rutrum purus eget tellus facilisis fermentum. Sed interdum pretium sapien at interdum. Nam et aliquet turpis, a tempus lorem. Nam ac blandit lorem. Donec in laoreet nibh. Cras luctus bibendum justo, ut consectetur libero euismod non. Cras ut elit semper neque ultrices consectetur at eu tortor. Cras malesuada eget nibh faucibus dapibus. Mauris sit amet egestas odio, nec tempor mi. Nulla aliquam ullamcorper mattis."]}),Object(O.jsxs)("div",{className:"teamMembers",children:[Object(O.jsx)("h1",{className:"abt_main_head",children:"Leadership"}),Object(O.jsx)("div",{className:"members",children:Object(O.jsx)("div",{className:"member_group_one"})})]})]})})};var D=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("footer",{className:"main_footer",children:[Object(O.jsx)("div",{className:"welcome_links",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"What we Do"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Portfolio"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Contact"})})]})}),Object(O.jsx)("div",{className:"social_links",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{class:"fab fa-facebook fa-2x"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{class:"fab fa-twitter fa-2x"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{class:"fab fa-instagram fa-2x"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{class:"fab fa-github fa-2x"})})})]})}),Object(O.jsxs)("div",{className:"personal_info",children:[Object(O.jsx)("h4",{children:"99 Road Lane Townsville NE34 1JU"}),Object(O.jsx)("h4",{children:"07263634786"}),Object(O.jsx)("h4",{children:Object(O.jsx)("a",{href:"#",children:"myemail@gmail.com"})}),Object(O.jsx)("hr",{}),Object(O.jsx)("h3",{children:"Copyright \xa9 2015 SomeCompany Ltd"})]})]})})},G=function(){var e=Object(o.c)(h),t=Object(o.b)();return Object(O.jsxs)("div",{className:"logout_box",children:[Object(O.jsxs)("h1",{children:["Welcome ",Object(O.jsx)("span",{className:"user_name",children:e.name})]}),Object(O.jsx)("button",{className:"logout_btn",onClick:function(e){return function(e){e.preventDefault(),t(d())}(e)},children:" Logout "})]})},H=a(147),W=a(148),B=a(23),J=a(153),K=a(152),R=a(149),Q=a.n(R),z=function(e){Object(J.a)(a,e);var t=Object(K.a)(a);function a(){var e;return Object(H.a)(this,a),(e=t.call(this)).state={fullName:"",username:"",email:"",password:""},e.changeFullName=e.changeFullName.bind(Object(B.a)(e)),e.changeEmail=e.changeEmail.bind(Object(B.a)(e)),e.changeUsername=e.changeUsername.bind(Object(B.a)(e)),e.changePassword=e.changePassword.bind(Object(B.a)(e)),e.onSubmit=e.onSubmit.bind(Object(B.a)(e)),e}return Object(W.a)(a,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={fullName:this.state.fullName,username:this.state.username,email:this.state.email,password:this.state.password};Q.a.post("http://localhost:5000/app/signup",t).then((function(e){return console.log(e.data)})),window.location="./Login"}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"login_form",children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsx)("div",{className:"form-div",children:Object(O.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(O.jsx)("input",{type:"text",placeholder:"Full Name",onChange:this.changeFullName,value:this.state.fullName}),Object(O.jsx)("input",{type:"text",placeholder:"Username",onChange:this.changeUsername,value:this.state.username}),Object(O.jsx)("input",{type:"text",placeholder:"Email",onChange:this.changeEmail,value:this.state.email}),Object(O.jsx)("input",{type:"password",placeholder:"Password",onChange:this.changePassword,value:this.state.password}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]})})]})})}}]),a}(s.Component);function V(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"000000"}),Object(O.jsx)("h1",{children:Object(O.jsx)("a",{href:"#",children:"Followers"})})]})}function X(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"000000"}),Object(O.jsx)("h1",{children:Object(O.jsx)("a",{href:"#",children:"Following"})})]})}function Y(e){return Object(O.jsx)("div",{className:"following_tab",children:Object(O.jsx)("h1",{children:Object(O.jsx)("a",{href:"#",children:e.username})})})}var Z=a(150),$=a.n(Z);var ee=function(){var e=Object(o.c)(h),t=e.name;return Object(s.useEffect)((function(){var e=localStorage.getItem("token");e&&($.a.decode(e)?console.log("welcome"):localStorage.removeItem("token"))}),[]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"profile_page",children:[Object(O.jsx)("h1",{className:"profile_title",children:t}),Object(O.jsx)("h2",{className:"profilePic",children:t[0]}),Object(O.jsxs)("div",{className:"profile_info",children:[Object(O.jsxs)("h2",{className:"profile_h2",children:[e.first,e.last]}),Object(O.jsxs)("h3",{className:"profile_h3",children:[e.location_street,", ",e.location_code,", ",e.location_country]})]}),Object(O.jsxs)("div",{className:"follow_count",children:[Object(O.jsx)("div",{className:"following",children:Object(O.jsx)(X,{})}),Object(O.jsx)("div",{className:"followers",children:Object(O.jsx)(V,{})})]}),Object(O.jsx)(Y,{username:t}),Object(O.jsx)(Y,{username:t}),Object(O.jsx)(Y,{username:t})]})})},te=a(151),ae=a.n(te),se=a(5);a(293);var ne=function(e){var t=e.topAnime;return Object(O.jsx)("div",{className:"anime_side",children:Object(O.jsx)("aside",{children:Object(O.jsxs)("nav",{className:"anime_side_nav",children:[Object(O.jsx)("h3",{className:"anime_side_head",children:"Top Anime:"}),Object(O.jsx)("ul",{children:t.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"anime_top_link",children:e.title},e.mal_id)})}))})]})})})};var ce=function(e){var t=e.anime;return Object(O.jsx)("div",{children:Object(O.jsx)("article",{className:"anime_card",children:Object(O.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[Object(O.jsx)("figure",{className:"anime_img",children:Object(O.jsx)("img",{src:t.images.jpg.image_url,alt:"Anime Image"})}),Object(O.jsx)("h2",{className:"anime_title",children:t.title_japanese})]})})})};var ie=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("main",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("form",{onSubmit:e.HandleSearch,className:"anime_search",children:Object(O.jsx)("input",{type:"search",placeholder:"Search",required:!0,value:e.search,onChange:function(t){return e.SetSearch(t.target.value)}})})}),Object(O.jsx)("div",{className:"anime_container",children:e.animeList.map((function(e){return Object(O.jsx)("div",{className:"anime_group",children:Object(O.jsx)(ce,{anime:e},e.mal_id)})}))})]})})};var re=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)([]),i=Object(v.a)(c,2),r=i[0],l=i[1],o=Object(s.useState)([]),j=Object(v.a)(o,2),u=j[0],m=j[1],d=function(){var e=Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/top/anime").then((function(e){return e.json()}));case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(g.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v4/anime?q=".concat(t)).then((function(e){return e.json()}));case 2:a=e.sent,n(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){d()}),[]),console.log(r),console.log(a),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{className:"anime_search_title",children:["Search ",Object(O.jsx)("strong",{children:"Anime"})]}),Object(O.jsxs)("div",{className:"anime_main_container",children:[Object(O.jsx)("div",{className:"con_side",children:Object(O.jsx)(ne,{topAnime:r})}),Object(O.jsx)("div",{className:"con_main",children:Object(O.jsx)(ie,{HandleSearch:function(e){e.preventDefault(),h(u)},search:u,SetSearch:m,animeList:a})})]})]})};var le=function(){return Object(O.jsx)("div",{className:"progress",children:"Page Is In Development"})},oe=function(){var e=Object(o.c)(h);return Object(O.jsxs)("div",{children:[Object(O.jsx)(r.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsxs)(se.c,{children:[Object(O.jsx)(se.a,{path:"/",exact:!0,component:M}),Object(O.jsx)(se.a,{path:"/about",component:U}),Object(O.jsx)(se.a,{path:"/fourms",component:le}),Object(O.jsx)(se.a,{path:"/anime",component:re}),Object(O.jsx)(se.a,{path:"/register",component:z}),Object(O.jsx)(se.a,{path:"/profile",component:ee}),e?Object(O.jsx)(G,{}):Object(O.jsx)(ae.a,{})]})]})}),Object(O.jsx)(D,{})]})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,295)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},ue=Object(j.a)({reducer:{user:b}});i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(o.a,{store:ue,children:Object(O.jsx)(oe,{})})}),document.getElementById("root")),je()}},[[294,1,2]]]);
//# sourceMappingURL=main.73f8ed25.chunk.js.map