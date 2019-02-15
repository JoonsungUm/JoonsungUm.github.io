(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(195),u=n(191),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.pathPrefix,n=t.site.siteMetadata.title;return i.a.createElement(c.a,{pathPrefix:e,location:this.props.location,title:n},i.a.createElement(u.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=l;var s="628857261"},179:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(178),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var l=n(182),s=n.n(l);n.d(e,"PageRenderer",function(){return s.a});var d=n(35);n.d(e,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(t){return r.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},180:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(196),r=n.n(a),o=n(197),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var c=new r.a(i.a);var u=c.rhythm;c.scale},182:function(t,e,n){var a;t.exports=(a=n(185))&&a.default||a},183:function(t,e,n){"use strict";var a,r;n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r}),function(t){t.ALL="All"}(a||(a={})),function(t){t.DARK="dark",t.LIGHT="light"}(r||(r={}))},184:function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"f",function(){return u}),n.d(e,"e",function(){return l});var a=function(t){return document.querySelectorAll(t)},r=function(t){return document.querySelector(t)},o=function(t,e){return t?t.classList.add(e):null},i=function(){return r("body")},c=function(t){return o(i(),t)},u=function(t){return function(t,e){return t.classList.remove(e)}(i(),t)},l=function(t){return function(t,e){return t.classList.contains(e)}(i(),t)}},185:function(t,e,n){"use strict";n.r(e);n(36);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(56),u=n(3),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},186:function(t,e,n){},187:function(t,e,n){},188:function(t,e,n){},189:function(t,e,n){},190:function(t,e,n){},191:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(192),r=n(0),o=n.n(r),i=n(206),c=n.n(i),u=n(179),l=function(t){var e=t.description,n=t.lang,r=void 0===n?"en":n,i=t.meta,l=void 0===i?[]:i,d=t.keywords,f=void 0===d?[]:d,m=t.title;return o.a.createElement(u.StaticQuery,{query:s,render:function(t){var n=e||t.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:r},title:m,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(f.length>0?{name:"keywords",content:f.join(", ")}:[]).concat(l)})},data:a})},s="1025518380"},192:function(t){t.exports={data:{site:{siteMetadata:{title:"Joonsung Um's blog",description:"Blog posted about programming",author:"JoonsungUm"}}}}},195:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(179),i=n(180),c=n(205),u=n.n(c),l=n(184),s=n(183);n(186);var d=function(){var t=Object(a.useState)(!1),e=t[0],n=t[1],o=function(t){var e=function(t){return t?s.b.DARK:s.b.LIGHT}(t);n(t),function(t){switch(t){case s.b.LIGHT:l.b(s.b.LIGHT),l.f(s.b.DARK);break;case s.b.DARK:l.b(s.b.DARK),l.f(s.b.LIGHT)}}(e)};return Object(a.useEffect)(function(){var t=l.e(s.b.DARK);o(t)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(u.a,{onChange:o,checked:e,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},f=(n(187),function(t){var e=t.title,n=t.location,a=t.rootPath,c=n.pathname===a;return r.a.createElement("div",{className:"top",style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24)}},!c&&r.a.createElement(o.Link,{to:"/",className:"link"},e),r.a.createElement(d,null))}),m=(n(188),function(t){var e=t.title,n=t.location,a=t.rootPath;return n.pathname===a?r.a.createElement("h1",{className:"home-header"},r.a.createElement(o.Link,{to:"/",className:"link"},e)):r.a.createElement(r.a.Fragment,null)}),h=(n(189),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JoonsungUm"},"Joonsung Um"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))});n(190);n.d(e,"a",function(){return p});var p=function(t){var e=t.pathPrefix,n=void 0===e?"/":e,a=t.location,o=t.title,c=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:o,location:a,rootPath:n}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement(m,{title:o,location:a,rootPath:n}),c,r.a.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-b1750ac2895f739112b2.js.map