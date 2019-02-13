(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,n){"use strict";n.r(t);var a,r=n(235),o=n.n(r),c=n(0),i=n.n(c),u=n(171),l=n(184),s=n(167),f=function(e){var t=e.title,n=e.category,a=e.selectCategory;return i.a.createElement("li",{className:"item",role:"tab","aria-selected":n===t?"true":"false"},i.a.createElement("div",{onClick:function(){return a(t)}},t))},m=n(158),d=(n(278),function(e){var t=e.categories,n=e.category,a=e.selectCategory;return i.a.createElement("ul",{className:"category-container",role:"tablist",id:"category",style:{margin:"0 -"+Object(m.a)(.75)}},i.a.createElement(f,{title:"All",category:n,selectCategory:a}),t.map(function(e,t){return i.a.createElement(f,{key:t,title:e,category:n,selectCategory:a})}))}),h=n(155),g=(n(34),n(74),n(159)),p="#___gatsby",y="observed",v="visible",b="20px",w=.8;function A(e){return e.filter(function(e){return e.isIntersecting}).forEach(function(e){var t=e.target;return g.a(t,v)})}function E(){return g.d("."+y).forEach(function(e){return a.observe(e)})}function k(){if(!a)throw Error("Not found IntersectionObserver instance");return Promise.resolve(a.disconnect())}n(279);var x=function(e){var t=e.node;return i.a.createElement(h.Link,{className:"thumbnail "+y,to:t.fields.slug},i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},L=n(179),N=function(e){var t=e.posts,n=e.countOfInitialPost,a=e.count,r=e.category,o=Object(c.useMemo)(function(){return t.filter(function(e){var t=e.node;return r===L.a.ALL||t.frontmatter.category===r}).slice(0,a*n)},[]);return i.a.createElement(i.a.Fragment,null,o.map(function(e,t){var n=e.node;return i.a.createElement(x,{node:n,key:"item_"+t})}))},C=n(202),I=n.n(C);function D(e){return!e||e==={}}function Q(e,t){if(!D(e)){var n=e.getItem(t);if(n)return JSON.parse(n)}}function H(e,t,n){if(!D(e))return e.setItem(t,JSON.stringify(n))}var S="undefined"!=typeof window?window:{},B=S.localStorage,O=S.sessionStorage,P=I()(H,O),j=I()(Q,O),G=(I()(H,B),I()(Q,B),"__felog_session_storage_key__");n.d(t,"pageQuery",function(){return J});t.default=function(e){var t,n=e.data,r=e.location,f=(t=1,j(G+"/count")||t),m=function(e){return j(G+"/category")||e}(L.a.ALL),h=Object(c.useState)(f)[0],y=Object(c.useRef)(h),v=Object(c.useState)(m),x=v[0],C=v[1],I=n.site.siteMetadata,D=I.configs.countOfInitialPost,Q=n.allMarkdownRemark.edges,H=o()(Q.map(function(e){return e.node.frontmatter.category}));Object(c.useEffect)(function(){return a=new IntersectionObserver(A,{root:g.c(p),rootMargin:b,threshold:w}),E(),function(){k().then(function(){return a=null})}},[]),Object(c.useEffect)(function(){y.current=h,k().then(E),P(G+"/count",h),function(e){P(G+"/category",e)}(x)});return i.a.createElement(u.a,{location:r,title:I.title},i.a.createElement(s.a,{title:L.c,keywords:I.keywords}),i.a.createElement(l.a,null),i.a.createElement(d,{categories:H,category:x,selectCategory:function(e){C(e)}}),i.a.createElement(N,{posts:Q,countOfInitialPost:D,count:h,category:x}))};var J="596428459"},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(154),u=n.n(i);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var l=n(157),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var f=n(32);n.d(t,"parsePath",function(){return f.a});var m=r.a.createContext({}),d=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},158:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(172),r=n.n(a),o=n(173),c=n.n(o);c.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var i=new r.a(c.a);var u=i.rhythm;i.scale},159:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return l});var a=function(e){return document.querySelectorAll(e)},r=function(e){return document.querySelector(e)},o=function(e,t){return e?e.classList.add(t):null},c=function(){return r("body")},i=function(e){return o(c(),e)},u=function(e){return function(e,t){return e.classList.remove(t)}(c(),e)},l=function(e){return function(e,t){return e.classList.contains(t)}(c(),e)}},160:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(53),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(168),r=n(0),o=n.n(r),c=n(183),i=n.n(c),u=n(155),l=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,c=e.meta,l=void 0===c?[]:c,f=e.keywords,m=void 0===f?[]:f,d=e.title;return o.a.createElement(u.StaticQuery,{query:s,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:r},title:d,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:d},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:n}].concat(m.length>0?{name:"keywords",content:m.join(", ")}:[]).concat(l)})},data:a})},s="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Bee starter",description:"Blog posted about ...",author:"[Your Name]"}}}}},171:function(e,t,n){"use strict";var a,r=n(0),o=n.n(r),c=n(155),i=(n(161),function(){return o.a.createElement("a",{href:"https://github.com/JaeYeopHan/felog",className:"github","aria-label":"GitHub"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}),u=(n(162),function(e){var t=e.title,n=e.location,a=e.rootPath,r=n.pathname===a;return o.a.createElement("div",{className:"top"},!r&&o.a.createElement(c.Link,{to:"/",className:"link"},t),o.a.createElement(i,null))}),l=(n(163),function(e){var t=e.title,n=e.location,a=e.rootPath;return n.pathname===a?o.a.createElement("h1",{className:"home-header"},o.a.createElement(c.Link,{to:"/",className:"link"},t)):o.a.createElement(o.a.Fragment,null)}),s=n(182),f=n.n(s),m=n(159);!function(e){e.DARK="dark",e.LIGHT="light"}(a||(a={}));n(164);var d=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],c=function(e){var t=function(e){return e?a.DARK:a.LIGHT}(e);n(e),function(e){switch(e){case a.LIGHT:m.b(a.LIGHT),m.f(a.DARK);break;case a.DARK:m.b(a.DARK),m.f(a.LIGHT)}}(t)};return Object(r.useEffect)(function(){var e=m.e(a.DARK);c(e)},[]),o.a.createElement("div",{className:"switch-container"},o.a.createElement("label",{htmlFor:"normal-switch"},o.a.createElement(f.a,{onChange:c,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:o.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:o.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},h=(n(165),function(){return o.a.createElement("footer",{className:"footer"},"©",o.a.createElement("a",{href:"https://github.com/JaeYeopHan"},"Jbee"),", Built with"," ",o.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))}),g=n(158);n(166);n.d(t,"a",function(){return p});var p=function(e){var t=e.location,n=e.title,a=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{title:n,location:t,rootPath:"/"}),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(g.a)(24),padding:Object(g.a)(1.5)+" "+Object(g.a)(.75)}},o.a.createElement(d,null),o.a.createElement(l,{title:n,location:t,rootPath:"/"}),a,o.a.createElement(h,null)))}},179:function(e,t,n){"use strict";var a={ALL:"All"};n.d(t,"c",function(){return"Home"}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return"en"})},184:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(185);var a=n(187),r=n(0),o=n.n(r),c=n(155),i=n(188),u=n.n(i),l=(n(189),function(){return o.a.createElement(c.StaticQuery,{query:s,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.social,r=t.introduction;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(u.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"Written by"),o.a.createElement(c.Link,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"@",n)),o.a.createElement("div",{className:"author-introduction"},r),o.a.createElement("p",{className:"author-socials"},a.github&&o.a.createElement("a",{href:"https://github.com/"+a.github},"GitHub"),a.medium&&o.a.createElement("a",{href:"https://medium.com/"+a.medium},"Medium"),a.twitter&&o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"Twitter"),a.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+a.facebook},"Facebook"))))))},data:a})}),s="1177532027"},187:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC",width:72,height:72,src:"/static/035ce7483ee8f639767376dfc414c0e6/43715/profile.png",srcSet:"/static/035ce7483ee8f639767376dfc414c0e6/43715/profile.png 1x,\n/static/035ce7483ee8f639767376dfc414c0e6/8c1b8/profile.png 1.5x,\n/static/035ce7483ee8f639767376dfc414c0e6/4c15e/profile.png 2x"}}},site:{siteMetadata:{author:"[Your Name]",introduction:"I explain with words and code. I explain with words and code. I explain with words and code.",social:{twitter:"",github:"",medium:"",facebook:""}}}}}},189:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-86b20aa0905481582702.js.map