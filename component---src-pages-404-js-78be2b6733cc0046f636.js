(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(172),u=n(168),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(u.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=l;var s="1097489062"},155:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(154),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var l=n(158),s=n.n(l);n.d(e,"PageRenderer",function(){return s.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(t){return r.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(t,e,n){"use strict";var a={ALL:"All"},r={LIGHT:"light",DARK:"dark"};n.d(e,"c",function(){return"Home"}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"b",function(){return"en"})},158:function(t,e,n){var a;t.exports=(a=n(161))&&a.default||a},159:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(173),r=n.n(a),o=n(174),i=n.n(o);i.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var c=new r.a(i.a);var u=c.rhythm;c.scale},160:function(t,e,n){"use strict";n.d(e,"e",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"g",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"c",function(){return s});var a=function(t){return document.querySelectorAll(t)},r=function(t){return document.querySelector(t)},o=function(t,e){return t.classList.add(e)},i=function(){return r("body")},c=function(t){return o(i(),t)},u=function(t){return function(t,e){return t.classList.remove(e)}(i(),t)},l=function(t){return function(t,e){return t.classList.contains(e)}(i(),t)},s=function(){return document.documentElement.offsetHeight}},161:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(53),u=n(2),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},162:function(t,e,n){},163:function(t,e,n){},164:function(t,e,n){},165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},168:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var a=n(169),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(183),l=n.n(u),s=n(155);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(s.StaticQuery,{query:f,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var f="1025518380"},169:function(t){t.exports={data:{site:{siteMetadata:{title:"Bee starter",description:"Blog posted about ...",author:"[Your Name]"}}}}},172:function(t,e,n){"use strict";var a=n(0),r=n.n(a),o=n(155),i=(n(162),function(){return r.a.createElement("a",{href:"https://github.com/JaeYeopHan/felog",className:"github","aria-label":"GitHub"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),c=(n(163),function(t){var e=t.title,n=t.location,a=t.rootPath,c=n.pathname===a;return r.a.createElement("div",{className:"top"},!c&&r.a.createElement(o.Link,{to:"/",className:"link"},e),r.a.createElement(i,null))}),u=(n(164),function(t){var e=t.title,n=t.location,a=t.rootPath;return n.pathname===a&&r.a.createElement("h1",{className:"home-header"},r.a.createElement(o.Link,{to:"/",className:"link"},e))}),l=n(182),s=n.n(l),d=n(160),f=n(157);n(165);var m=function(){var t=Object(a.useState)(!1),e=t[0],n=t[1],o=function(t){var e=function(t){return t?f.d.DARK:f.d.LIGHT}(t);n(t),function(t){switch(t){case f.d.LIGHT:d.b(f.d.LIGHT),d.g(f.d.DARK);break;case f.d.DARK:d.b(f.d.DARK),d.g(f.d.LIGHT)}}(e)};return Object(a.useEffect)(function(){var t=d.f(f.d.DARK);o(t)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(s.a,{onChange:o,checked:e,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},h=(n(166),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Jbee"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),p=n(159);n(167);n.d(e,"a",function(){return g});var g=function(t){var e=t.location,n=t.title,a=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{title:n,location:e,rootPath:"/"}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(24),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75)}},r.a.createElement(m,null),r.a.createElement(u,{title:n,location:e,rootPath:"/"}),a,r.a.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-78be2b6733cc0046f636.js.map