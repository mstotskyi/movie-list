(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{119:function(e,t,a){},122:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(24),i=a(82),o=a.n(i),s=(a(119),a(83)),l=a(26),u=a(84),h=a.n(u),b=a(34),d=a(10),j=a(23),m=a(85),v=a.n(m),O=Object(l.b)("movie/searchMovie"),f=Object(l.b)("store/resetStore"),y=Object(l.b)("movie/loadMore"),p=Object(l.b)("movie/totalResult"),g=Object(l.b)("page/currentPage"),x=Object(l.b)("query/searchQuery"),_={movie:[],totalResult:0,currentPage:1,pageSize:10,searchQuery:{title:"",year:"",type:""}},S={key:"movies",version:1,storage:v.a},M=Object(l.c)(_.movie,(function(e){e.addCase(O,(function(e,t){var a=t.payload;return[].concat(Object(d.a)(e),Object(d.a)(a))})).addCase(f,(function(){arguments.length>0&&void 0!==arguments[0]||_.movie;var e=(arguments.length>1?arguments[1]:void 0).payload;return Object(d.a)(e)})).addCase(y,(function(e,t){var a=t.payload;return Object(d.a)(a)}))})),F=Object(l.c)(_.totalResult,(function(e){e.addCase(p,(function(e,t){return t.payload}))})),G=Object(l.c)(_.currentPage,(function(e){e.addCase(g,(function(e,t){return t.payload}))})),w=Object(l.c)(_.searchQuery,(function(e){e.addCase(x,(function(e,t){return t.payload}))})),Q=Object(j.b)({movie:M,totalResult:F,currentPage:G,searchQuery:w}),C=Object(b.g)(S,Q),k=Object(l.a)({reducer:C,middleware:function(e){return e({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}}).concat(h.a)}}),I=Object(b.h)(k),N=a(11),R=(a(122),a(6)),T=a(174),P=a(180),q=a(43),E=a.n(q),B=a(171),V=a(175),W=a(176),A=a(177),D=a(95),H=a(2);function Y(e){var t,a,r=e.handleSubmitForm,c=Object(n.b)(),i=Object(D.a)({mode:"onBlur"}),o=i.register,s=i.handleSubmit,l=i.reset,u=i.formState.errors;return Object(H.jsx)("header",{className:E.a.Searchbar,children:Object(H.jsxs)("form",{className:E.a.SearchForm,onSubmit:s((function(e){r(e),c(x(e)),l()})),children:[Object(H.jsx)(W.a,{className:E.a.SearchForm__input,children:Object(H.jsx)(T.a,Object(R.a)(Object(R.a)({fullWidth:!0,defaultValue:""},o("title",{required:"This field is required"})),{},{id:"outlined-basic",label:"Search by title",name:"title",variant:"outlined",type:"text",autoComplete:"off",autoFocus:!0,error:!(null===u||void 0===u||!u.title),helperText:(null===u||void 0===u?void 0:u.title)&&(null===u||void 0===u||null===(t=u.title)||void 0===t?void 0:t.message)||" "}))}),Object(H.jsxs)(W.a,{className:E.a.SearchForm__input,children:[" ",Object(H.jsx)(T.a,Object(R.a)(Object(R.a)({fullWidth:!0,defaultValue:""},o("year",{pattern:{value:/^[1-9][0-9]{3}$/,message:"enter the year in 'yyyy' format"}})),{},{id:"outlined-basic",label:"Search by year",name:"year",variant:"outlined",type:"numeric",autoComplete:"off",title:"Year",error:!(null===u||void 0===u||!u.year),helperText:(null===u||void 0===u?void 0:u.year)&&(null===u||void 0===u||null===(a=u.year)||void 0===a?void 0:a.message)||" "}))]}),Object(H.jsxs)(W.a,{className:E.a.SearchForm__input,children:[Object(H.jsx)(A.a,{id:"demo-select-small",children:"Type"}),Object(H.jsxs)(B.a,Object(R.a)(Object(R.a)({fullWidth:!0,defaultValue:""},o("type")),{},{label:"Type",placeholder:"Type",children:[Object(H.jsx)(V.a,{value:"movie",children:"movie"}),Object(H.jsx)(V.a,{value:"series",children:"series"}),Object(H.jsx)(V.a,{value:"episode",children:"episode"})]}))]}),Object(H.jsx)(P.a,{variant:"contained",type:"submit",className:E.a.SearchForm__button,children:"Search"})]})})}var z=a(90),J=a.n(z),L=a(72),$=a.n(L);function K(e){var t=e.movies;return t.length>0?Object(H.jsx)(H.Fragment,{children:t.map((function(e){return Object(H.jsxs)("li",{className:$.a.MovieGalleryItem,children:[Object(H.jsx)("img",{src:e.Poster,alt:e.Title,"data-source":e.Poster,className:$.a.MovieGalleryItem__image}),Object(H.jsxs)("p",{children:["Title: ",e.Title]}),Object(H.jsxs)("p",{children:["Year: ",e.Year]}),Object(H.jsxs)("p",{children:["imdbID: ",e.imdbID]})]},e.imdbID)}))}):Object(H.jsx)("p",{children:"No such found"})}var U=a(94);function X(){return Object(H.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(H.jsx)(U.a,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperClass:"",visible:!0})})}var Z=function(e){return e.movie},ee=function(e){return e.totalResult},te=function(e){return e.currentPage},ae=function(e){return e.searchQuery};function re(e){var t=e.showSpinner,a=e.status,r=Object(n.c)(Z);return"init"===a?Object(H.jsx)("h1",{children:"Hello! Search something!"}):"pending"===a?Object(H.jsx)(X,{}):"success"===a?r?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("ul",{className:J.a.MovieGallery,children:Object(H.jsx)(K,{movies:r})}),t&&Object(H.jsx)(X,{})]}):Object(H.jsx)("h1",{children:"Sorry, nothing was found for your query!"}):void("error"===a&&alert("ERROR!!"))}var ce=a(173),ne=a(178);function ie(e){var t=e.handleOnClick,a=Object(n.c)(ee),r=Object(n.c)(te),c=Object(n.b)(),i=Math.ceil(a/10);return Object(H.jsx)(ne.a,{spacing:2,children:Object(H.jsx)(ce.a,{count:i,page:Number(r),onChange:function(e,a){return c(g(a)),t(a)},showFirstButton:!0,showLastButton:!0})})}var oe=a(59),se=a(60),le=new(function(){function e(){Object(oe.a)(this,e),this.searchQuery=void 0,this.page=void 0,this.total=void 0,this.response=void 0,this.searchQuery={title:"",year:"",type:""},this.page=1,this.total=0,this.response=!1}return Object(se.a)(e,[{key:"fetchMovies",value:function(){var e=this,t="".concat("https://www.omdbapi.com/","?s=").concat(this.searchQuery.title,"&y=").concat(this.searchQuery.year,"&type=").concat(this.searchQuery.type,"&apikey=").concat("a5f3b75f","&page=").concat(this.page);return fetch(t).then((function(e){return e.json()})).then((function(t){return e.getTotal(t.totalResults),t}))}},{key:"changePage",value:function(e){this.page=e}},{key:"resetPage",value:function(){this.page=1}},{key:"getTotal",value:function(e){this.total=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"queryResponse",get:function(){return this.response},set:function(e){this.response=e}}]),e}());var ue=function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)(!1),o=Object(N.a)(i,2),s=o[0],l=o[1],u=Object(n.c)(Z),h=Object(n.c)(ae);Object(r.useEffect)((function(){0===u.length?c("init"):c("success")}),[u.length]);var b=Object(n.b)();return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(Y,{handleSubmitForm:function(e){c("pending"),b(f([])),le.searchQuery=e,le.resetPage(),le.fetchMovies().then((function(e){b(O(e.Search)),b(p(e.totalResults)),c("success")})).catch((function(e){c("error")}))}}),Object(H.jsx)(re,{status:a,showSpinner:s}),Object(H.jsx)(ie,{handleOnClick:function(e){l(!0),le.searchQuery=h,le.changePage(e),le.fetchMovies().then((function(e){b(y(e.Search)),l(!1),c("success"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){c("error")}))}})]})};o.a.createRoot(document.getElementById("root")).render(Object(H.jsx)(c.a.StrictMode,{children:Object(H.jsx)(s.a,{loading:null,persistor:I,children:Object(H.jsx)(n.a,{store:k,children:Object(H.jsx)(ue,{})})})}))},43:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1GmgG",SearchForm:"Searchbar_SearchForm__2CWGu",SearchForm__button:"Searchbar_SearchForm__button__2bHVx",SearchForm__input:"Searchbar_SearchForm__input__QfOIu"}},72:function(e,t,a){e.exports={MovieGalleryItem:"MovieGalleryItem_MovieGalleryItem__EsNtc",MovieGalleryItem__image:"MovieGalleryItem_MovieGalleryItem__image__2FvGj"}},90:function(e,t,a){e.exports={MovieGallery:"MovieGallery_MovieGallery__2AioG"}}},[[126,1,2]]]);
//# sourceMappingURL=main.8f4de458.chunk.js.map