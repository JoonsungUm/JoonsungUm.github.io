(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(217),function(){return r.a.createElement("hr",{className:"custom-hr"})}),o=n(171),s=n(167),c=function(e){var t=e.title;return r.a.createElement("h1",null,t)},u=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},l=(n(227),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",href:"https://www.buymeacoffee.com/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),d=n(183),f=n(155),m=(n(228),function(e){var t=e.pageContext,n=t.previous,a=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,n&&r.a.createElement(f.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,a&&r.a.createElement(f.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))}),p=n(7),h=n.n(p),g=n(52),b=n.n(g),y=n(229),v=n.n(y),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(b()(b()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(b()(b()(n))),n}h()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){var e=this.props,t=e.post,n=e.shortName,a=e.siteUrl+e.slug;return r.a.createElement(v.a,{shortname:n,identifier:t.frontmatter.title,title:t.frontmatter.title,url:a,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},t}(a.Component),E=(n(54),n(231),n(74),function(e){var t=e.repo,n=Object(a.useRef)(null);return Object(a.useEffect)(function(){var e=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,branch:"source",async:"true","issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach(function(t){e.setAttribute(t,a[t])}),n.current.appendChild(e)},[n]),r.a.createElement("div",{className:"utterences",ref:n})});n(233);n.d(t,"pageQuery",function(){return S});var S="426211145";t.default=function(e){var t=e.data,n=e.pageContext,a=e.location,f=t.pathPrefix,p=t.markdownRemark,h=t.site.siteMetadata,g=h.title,b=h.comment,y=h.siteUrl,v=(h.author,h.sponsor),S=b.disqusShortName,A=b.utterances;return r.a.createElement(o.a,{pathPrefix:f,location:a,title:g},r.a.createElement(s.a,{title:p.frontmatter.title,description:p.excerpt}),r.a.createElement(c,{title:p.frontmatter.title}),r.a.createElement(u,{html:p.html}),!!v.buyMeACoffeeId&&r.a.createElement(l,{sponsorId:v.buyMeACoffeeId}),r.a.createElement(i,null),r.a.createElement(d.a,null),r.a.createElement(m,{pageContext:n}),!!S&&r.a.createElement(w,{post:p,shortName:S,siteUrl:y,slug:n.slug}),!!A&&r.a.createElement(E,{repo:A}))}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(154),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(158),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(172),r=n.n(a),i=n(173),o=n.n(i);o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",textDecoration:"none",color:"#0687f0"},"a.gatsby-resp-image-link":{boxShadow:"none",textDecoration:"none"},"a:hover":{textDecoration:"none"},h1:{fontWeight:800,lineHeight:1.2,fontFamily:"Catamaran"},h2:{fontWeight:700,lineHeight:1.2,marginTop:"56px",marginBottom:"20px",fontFamily:"Catamaran"},ul:{marginBottom:"6px"},li:{marginBottom:"2px"}}};var s=new r.a(o.a);var c=s.rhythm;s.scale},158:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},159:function(e,t,n){"use strict";var a,r;n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),function(e){e.ALL="All"}(a||(a={})),function(e){e.DARK="dark",e.LIGHT="light"}(r||(r={}))},160:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"e",function(){return u});var a=function(e){return document.querySelectorAll(e)},r=function(e){return document.querySelector(e)},i=function(e,t){return e?e.classList.add(t):null},o=function(){return r("body")},s=function(e){return i(o(),e)},c=function(e){return function(e,t){return e.classList.remove(t)}(o(),e)},u=function(e){return function(e,t){return e.classList.contains(t)}(o(),e)}},161:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(53),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(168),r=n(0),i=n.n(r),o=n(182),s=n.n(o),c=n(155),u=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,o=e.meta,u=void 0===o?[]:o,d=e.keywords,f=void 0===d?[]:d,m=e.title;return i.a.createElement(c.StaticQuery,{query:l,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:r},title:m,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:m},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:m},{name:"twitter:description",content:n}].concat(f.length>0?{name:"keywords",content:f.join(", ")}:[]).concat(u)})},data:a})},l="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Joonsung Um's blog",description:"Blog posted about programming",author:"JoonsungUm"}}}}},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(155),o=n(156),s=n(181),c=n.n(s),u=n(160),l=n(159);n(162);var d=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],i=function(e){var t=function(e){return e?l.b.DARK:l.b.LIGHT}(e);n(e),function(e){switch(e){case l.b.LIGHT:u.b(l.b.LIGHT),u.f(l.b.DARK);break;case l.b.DARK:u.b(l.b.DARK),u.f(l.b.LIGHT)}}(t)};return Object(a.useEffect)(function(){var e=u.e(l.b.DARK);i(e)},[]),r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{htmlFor:"normal-switch"},r.a.createElement(c.a,{onChange:i,checked:t,id:"normal-switch",height:24,width:48,checkedIcon:r.a.createElement("div",{className:"icon checkedIcon"},"D"),uncheckedIcon:r.a.createElement("div",{className:"icon uncheckedIcon"},"L"),offColor:"#d9dfe2",offHandleColor:"#fff",onColor:"#999",onHandleColor:"#282c35"})))},f=(n(163),function(e){var t=e.title,n=e.location,a=e.rootPath,s=n.pathname===a;return r.a.createElement("div",{className:"top",style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24)}},!s&&r.a.createElement(i.Link,{to:"/",className:"link"},t),r.a.createElement(d,null))}),m=(n(164),function(e){var t=e.title,n=e.location,a=e.rootPath;return n.pathname===a?r.a.createElement("h1",{className:"home-header"},r.a.createElement(i.Link,{to:"/",className:"link"},t)):r.a.createElement(r.a.Fragment,null)}),p=(n(165),function(){return r.a.createElement("footer",{className:"footer"},"©",r.a.createElement("a",{href:"https://github.com/JoonsungUm"},"Joonsung Um"),", Built with"," ",r.a.createElement("a",{href:"https://github.com/JaeYeopHan/gatsby-starter-bee"},"Gatsby-starter-bee"))});n(166);n.d(t,"a",function(){return h});var h=function(e){var t=e.pathPrefix,n=void 0===t?"/":t,a=e.location,i=e.title,s=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:i,location:a,rootPath:n}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},r.a.createElement(m,{title:i,location:a,rootPath:n}),s,r.a.createElement(p,null)))}},183:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(184);var a=n(186),r=n(0),i=n.n(r),o=n(155),s=n(187),c=n.n(s),u=(n(188),function(){return i.a.createElement(o.StaticQuery,{query:l,render:function(e){var t=e.site.siteMetadata,n=t.author,a=t.social,r=t.introduction;return i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(c.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:n,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("span",{className:"author-name-prefix"},"Written by"),i.a.createElement(o.Link,{to:"/about",className:"author-name-content"},i.a.createElement("span",null,"@",n)),i.a.createElement("div",{className:"author-introduction"},r),i.a.createElement("p",{className:"author-socials"},a.github&&i.a.createElement("a",{href:"https://github.com/"+a.github},"GitHub"),a.medium&&i.a.createElement("a",{href:"https://medium.com/"+a.medium},"Medium"),a.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+a.twitter},"Twitter"),a.facebook&&i.a.createElement("a",{href:"https://www.facebook.com/"+a.facebook},"Facebook"))))))},data:a})}),l="1177532027"},184:function(e,t,n){"use strict";n(185)("fixed",function(e){return function(){return e(this,"tt","","")}})},185:function(e,t,n){var a=n(11),r=n(16),i=n(17),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},186:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAADRUlEQVQ4y2P4DwP/wADIePP+45qdh6snLEis7I0r7y7tmr1ww+5Hz19B1PwFq4EABgj19+9fIPn+05fGKUsUneOZNT0YlJwYVF0YVF2BDCZ1N3GbiKymyQ+evgQr/ofQDNF54fpdw8AsoFI2HW9uQ39+k0AB0yB+kyA+40AeowB2PR8GZWdZ++gtB07C9TNAdJ6/flfSNpJB3Y3PJJDLwA+omVXHi0HRkUHFmVXXm8fIHyjIZxLAou3JoeuzbvdRiJUgm999/KznnwHSaRwAVARUyqjhrumVUj9pcWrdBAXnOCYND6BxYKkAoKGiFiGXbz2AOru6fz7QtRA7eQz9mbU8df0yHr94DQmhj5+/xpZ2MWp6AHWC7DcOZFBx8c9uAGl++fa9jH0Um643xGyQnKJj5+xVQLnvP3/++QPy1PW7j4Ce59D35Tb0A6oBImAQHDt/jWHJpr0Mam68YFPhmjtmrQTq+f3nDyTybj98KmgWzKHng7BAyQnk3sKOmSA3GwdCNPMCJZSdJy3eANEMCdUrtx8APQW3Geh+Bg1316QKhrCCVgY1V7jNvMYBwBDObpwC1APUCtQPZCzfegAYhJAwh8eFhmcKQ3BeM7KzgRLAeFZwin326i08CQRkNwBTC5oaVfdEhvT6iQzKCGcDncSh58sgaxdf3v363ccv3763z1wB9BeLthePoT9MjT+TpodVZCHDlKWbgJ7kNYaayqThLmoVXtQxc8+xc91zVwODfcOeY+2zVqp5JDNrukPCjA8cLhkNkxjA0RDICQoMkGPqJi16+fYDJOn+/v3n1+/fEPbXbz9mrdwGDHOgSl5QgLmt330UlEgiitqBXgKmDaf4Mlg++QdEkGwG9DaQCfE8yDZVV6AXTIJzfv3+A9J8+dZ9MatwBjm79lkrgFy4bcgAklpW7zgEtINRw2PL/hOIjLEYmFSUnDfuOYZf8/0nz4FxVtk3D5JyGeD5a/qKLX0L1v4BmwWS+/8PqAGI/iHlfqDNtRMXYhQGYBWHzlzum792/4mLbz58+odkLTBvnLx0Y/KSjZv2HQfbiaoZrv/Tl6/bD52esXLr9OVbgLE4demm6cs3z1ixZd2uIy9ev4O4Fq4FAHqJtYQ/JS6YAAAAAElFTkSuQmCC",width:72,height:72,src:"/static/035ce7483ee8f639767376dfc414c0e6/43715/profile.png",srcSet:"/static/035ce7483ee8f639767376dfc414c0e6/43715/profile.png 1x,\n/static/035ce7483ee8f639767376dfc414c0e6/8c1b8/profile.png 1.5x,\n/static/035ce7483ee8f639767376dfc414c0e6/4c15e/profile.png 2x"}}},site:{siteMetadata:{author:"JoonsungUm",introduction:"엄준성입니다.",social:{twitter:"",github:"JoonsungUm",medium:"",facebook:""}}}}}},187:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.default=void 0;var r,i=a(n(7)),o=a(n(52)),s=a(n(179)),c=a(n(180)),u=a(n(0)),l=a(n(4)),d=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1";return"<picture>"+a+r+"<img "+s+c+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=u.default.forwardRef(function(e,t){var n=e.style,a=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return u.default.createElement("img",(0,c.default)({},i,{onLoad:a,onError:r,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var y=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!1,i=t.fadeIn,s=m(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var c=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:a,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:c,seenBefore:s},n.imageRef=u.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,m=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.Tag,w=e.itemProp,E="boolean"==typeof y?"lightgray":y,S=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),A=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":n,style:S,className:m};if(p){var k=p;return u.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},u.default.createElement(v,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&u.default.createElement(b,(0,c.default)({src:k.base64},L)),k.tracedSVG&&u.default.createElement(b,(0,c.default)({src:k.tracedSVG},L)),E&&u.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,k.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),u.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),u.default.createElement(b,{alt:n,title:t,src:k.src,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:n,title:t},k))}}))}if(h){var C=h,x=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},i);return"inherit"===i.display&&delete x.display,u.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&u.default.createElement(b,(0,c.default)({src:C.base64},L)),C.tracedSVG&&u.default.createElement(b,(0,c.default)({src:C.tracedSVG},L)),E&&u.default.createElement(v,{title:t,style:{backgroundColor:E,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&u.default.createElement("picture",null,C.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),u.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),u.default.createElement(b,{alt:n,title:t,width:C.width,height:C.height,src:C.src,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:n,title:t,width:C.width,height:C.height},C))}}))}return null},t}(u.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),w=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var E=y;t.default=E},188:function(e,t,n){},217:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){"use strict";e.exports=n(230)},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),o=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function l(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return c.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){l(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){l(this,t)},this.addDisqusScript())}}]),t}();d.displayName="DisqusThread",d.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},231:function(e,t,n){var a=n(25),r=n(34);n(232)("keys",function(){return function(e){return r(a(e))}})},232:function(e,t,n){var a=n(11),r=n(18),i=n(16);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],o={};o[e]=t(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},233:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-c577c095d77a1f485f4d.js.map