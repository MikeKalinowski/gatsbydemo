(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(141),r=n(149),l=n(148),c=o.c.div.withConfig({displayName:"sc-404__Wrapper",componentId:"sc-1j5gszf-0"})(["padding-top:180px;text-align:center;width:100%"]);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"404: Not found"}),i.a.createElement(c,null,i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},142:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a="2560px",i={mobileS:"(min-width: "+"320px"+")",mobileM:"(min-width: "+"375px"+")",mobileL:"(min-width: "+"425px"+")",tablet:"(min-width: "+"768px"+")",laptop:"(min-width: "+"1024px"+")",laptopL:"(min-width: "+"1440px"+")",desktop:"(min-width: "+a+")",desktopL:"(min-width: "+a+")"}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(143),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(146),p=n.n(d);n.d(t,"PageRenderer",function(){return p.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var u=i.a.createContext({}),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},145:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(141),r=n(142),l=o.c.div.withConfig({displayName:"title__StyledTitle",componentId:"sc-14aq7a3-0"})(["font-style:normal;font-weight:600;line-height:46px;font-size:30px;color:",";@media ","{font-size:38px;font-weight:normal;}"],function(e){return e.theme.color.darkGray},r.a.tablet);t.a=function(e){var t=e.className,n=e.titleText;return i.a.createElement(l,{className:t},n)}},146:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},147:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(141).c.button.withConfig({displayName:"greenButton__StyledGreenButton",componentId:"sc-18cj4sg-0"})(["margin-top:20px;width:100%;height:48px;background:",";border:none;border-radius:4px;cursor:pointer;font-style:normal;font-weight:500;line-height:14px;font-size:14px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#FFFFFF;transition:1s cubic-bezier(0.2,0.8,0.2,1);:hover{background:#FFFFFF;border:1px solid #35CC62;transform:translateY(-3px);color:",";}"],function(e){return e.theme.color.accent},function(e){return e.theme.color.accent});t.a=function(e){var t=e.className,n=e.buttonText;return i.a.createElement(o,{className:t},n)}},148:function(e,t,n){"use strict";var a=n(154),i=n(0),o=n.n(i),r=n(4),l=n.n(r),c=n(158),d=n.n(c),p=n(144);function s(e){var t=e.description,n=e.lang,i=e.meta,r=e.keywords,l=e.title;return o.a.createElement(p.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:a})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s;var u="1025518380"},149:function(e,t,n){"use strict";var a=n(150),i=n(0),o=n.n(i),r=n(4),l=n.n(r),c=n(144),d=n(141),p=n(142),s=d.c.div.withConfig({displayName:"header__HeaderWrapper",componentId:"bu4x9d-0"})(["background:white;height:",";width:100%;display:flex;justify-content:space-between;align-items:center;padding:0px 20px;position:fixed;top:0;z-index:999;@media ","{display:none;}"],function(e){return e.theme.layout.navHeightMobile},p.a.tablet),u=Object(d.c)(c.Link).withConfig({displayName:"header__StyledLink2",componentId:"bu4x9d-1"})(["text-decoration:none;font-style:normal;font-weight:500;font-size:28px;letter-spacing:0.1px;color:",";"],function(e){return e.theme.color.darkGray}),m=d.c.div.withConfig({displayName:"header__IconDiv",componentId:"bu4x9d-2"})(["position:relative;"]),h=d.c.svg.withConfig({displayName:"header__Svg",componentId:"bu4x9d-3"})(["cursor:pointer;position:relative;z-index:2;"]),f=d.c.span.withConfig({displayName:"header__GreenSpan",componentId:"bu4x9d-4"})(["color:",""],function(e){return e.theme.color.accent}),g=d.c.input.withConfig({displayName:"header__CheckboxInput",componentId:"bu4x9d-5"})(["  position:absolute;width:24px;height:24px;top:-2px;left:-2px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none;:checked ~ ul{margin-top:-90px;}"]),x=d.c.ul.withConfig({displayName:"header__List",componentId:"bu4x9d-6"})(["position:absolute;width:100vw;margin:-380px 0 0 -24px;padding:100px 0px 0px 0px;background:white;list-style-type:none;-webkit-font-smoothing:antialiased;transition:all 0.5s cubic-bezier(0.8,0.2,0.05,1.0);z-index:-3;"]),w=d.c.li.withConfig({displayName:"header__Li",componentId:"bu4x9d-7"})(["padding:12px 0;text-align:center;border-bottom:1px solid ",";"],function(e){return e.theme.color.darkGray}),C=Object(d.c)(c.Link).withConfig({displayName:"header__StyledLink",componentId:"bu4x9d-8"})(["text-decoration:none;font-style:normal;font-weight:500;font-size:16px;letter-spacing:0.1px;color:inherit;:hover{color:",";};"],function(e){return e.theme.color.accent}),y=function(e){var t=e.data;return o.a.createElement(s,null,o.a.createElement(m,null,o.a.createElement(h,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5 19C21.7761 19 22 18.7761 22 18.5V17.5C22 17.2239 21.7761 17 21.5 17H2.5C2.22386 17 2 17.2239 2 17.5V18.5C2 18.7761 2.22386 19 2.5 19H21.5ZM22 11.5C22 11.2239 21.7761 11 21.5 11H2.5C2.22386 11 2 11.2239 2 11.5V12.5C2 12.7761 2.22386 13 2.5 13H21.5C21.7761 13 22 12.7761 22 12.5V11.5ZM22 5.5C22 5.22386 21.7761 5 21.5 5H2.5C2.22386 5 2 5.22386 2 5.5V6.5C2 6.77614 2.22386 7 2.5 7H21.5C21.7761 7 22 6.77614 22 6.5V5.5Z",fill:"#333333"})),o.a.createElement(g,{type:"checkbox"}),o.a.createElement(x,null,t.allContentfulHeader.edges.map(function(e,t){return o.a.createElement(w,{key:t},o.a.createElement(C,{to:e.node.linkUrl},e.node.linkTitle))}))),o.a.createElement("div",null,o.a.createElement(u,{to:"/"},"Creation",o.a.createElement(f,null,"."))),o.a.createElement(m,null,o.a.createElement(h,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17C11.2092 17 12.7849 16.4282 14.0462 15.4655L20.2415 21.6516C20.4368 21.8465 20.7531 21.8465 20.9483 21.6514L21.6421 20.958C21.8373 20.763 21.8376 20.4468 21.6428 20.2514L15.4626 14.0501C16.4271 12.7882 17 11.211 17 9.5ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5Z",fill:"#333333"}))))},v=d.c.div.withConfig({displayName:"headerBig__HeaderWrapper",componentId:"whkgj-0"})(["background:white;height:",";width:100%;position:fixed;top:0;z-index:999;margin:0 auto;display:none;@media ","{display:block;}"],function(e){return e.theme.layout.navHeightDesktop},p.a.tablet),b=d.c.div.withConfig({displayName:"headerBig__HeaderInsideWrapper",componentId:"whkgj-1"})(["max-width:",";padding:0 40px;position:relative;top:50%;left:50%;transform:translate(-50%,-50%);"],function(e){return e.theme.layout.contentWidthDesktop}),E=d.c.div.withConfig({displayName:"headerBig__Logo",componentId:"whkgj-2"})(["display:inline-block;"]),k=d.c.div.withConfig({displayName:"headerBig__Links",componentId:"whkgj-3"})(["display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)"]),_=d.c.ul.withConfig({displayName:"headerBig__List",componentId:"whkgj-4"})(["list-style-type:none;margin:0;padding:0;overflow:hidden;"]),N=d.c.li.withConfig({displayName:"headerBig__ListItem",componentId:"whkgj-5"})(["float:left"]),I=d.c.div.withConfig({displayName:"headerBig__Icons",componentId:"whkgj-6"})(["display:inline-block;position:absolute;right:40px;top:50%;transform:translate(0%,-50%)"]),T=Object(d.c)(c.Link).withConfig({displayName:"headerBig__StyledLink",componentId:"whkgj-7"})(["text-decoration:none;padding:0px 19px;font-style:normal;font-weight:500;line-height:23px;font-size:14px;letter-spacing:1.4px;text-transform:uppercase;color:inherit;:hover{color:",";};@media ","{padding:0px 10px;}@media ","{padding:0px 19px;}"],function(e){return e.theme.color.accent},p.a.tablet,p.a.laptop),H=d.c.svg.withConfig({displayName:"headerBig__Svg",componentId:"whkgj-8"})(["margin:0px 15px;cursor:pointer;"]),F=function(e){var t=e.data;return o.a.createElement(v,null,o.a.createElement(b,null,o.a.createElement(E,null,o.a.createElement("svg",{width:"30",height:"30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.4762 24.6553C26.9615 24.0233 27.25 23.2323 27.25 22.3739C27.25 20.3029 25.5711 18.6241 23.5 18.6241C22.4013 18.6241 21.413 19.0966 20.7234 19.8463C19.3476 21.4689 17.2941 22.4989 15 22.4989C10.8581 22.4989 7.50034 19.1416 7.5 15C7.50035 22.248 13.1987 27.5708 19.4112 28.0688C19.9823 28.1146 21.032 28.1991 22.5027 27.9902C23.9146 27.2027 25.5412 25.8143 26.4762 24.6553Z",fill:"url(#paint0_linear)"}),o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50018 15C7.50018 22.2487 13.3753 28.125 20.6226 28.125C21.2601 28.125 21.8869 28.0795 22.5 27.9917C20.2935 29.2689 17.7315 30 14.9987 30C8.08243 30 3.68615 25.5264 2.00955 22.5025C1.86848 21.5601 1.85592 20.6331 1.89253 19.9161C2.23581 13.1919 7.75139 7.50001 14.9987 7.5C10.8574 7.50001 7.50019 10.8579 7.50018 15Z",fill:"url(#paint1_linear)"}),o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2098 5.03217C23.4623 1.94478 19.4583 0 15 0C6.71573 0 0 6.71492 0 14.9982C0 17.7311 0.731057 20.2934 2.00831 22.5C1.92046 21.8868 1.875 21.26 1.875 20.6225C1.875 13.3746 7.75126 7.49909 15 7.49909C17.3286 7.4991 19.4093 8.56015 20.7849 10.2251C21.4752 10.9304 22.4359 11.3736 23.5 11.3736C25.5711 11.3736 27.25 9.6949 27.25 7.62408C27.25 6.80019 26.9842 6.03836 26.5338 5.41962C26.5092 5.37893 26.2937 5.11985 26.2098 5.03217Z",fill:"url(#paint2_linear)"}),o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"paint0_linear",x1:"27.25",y1:"15",x2:"7.5",y2:"15",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{stopOpacity:"0.6"}),o.a.createElement("stop",{offset:"1",stopOpacity:"0.1"})),o.a.createElement("linearGradient",{id:"paint1_linear",x1:"26.1978",y1:"21.7984",x2:"9.77471",y2:"5.85375",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{stopOpacity:"0.6"}),o.a.createElement("stop",{offset:"1",stopOpacity:"0.1"})),o.a.createElement("linearGradient",{id:"paint2_linear",x1:"7.39301",y1:"27.9041",x2:"32.0275",y2:"11.7154",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{stopOpacity:"0.5"}),o.a.createElement("stop",{offset:"1",stopOpacity:"0.1"}))))),o.a.createElement(k,null,o.a.createElement(_,null,t.allContentfulHeader.edges.map(function(e,t){return o.a.createElement(N,{key:t},o.a.createElement(T,{to:e.node.linkUrl},e.node.linkTitle))}))),o.a.createElement(I,null,o.a.createElement(H,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 8.42071 7.59254 9.70303 8.54397 10.6133C4.72422 12.0201 2 15.6919 2 20V20.5C2 20.7762 2.22386 21 2.5 21H3.50266C3.77776 21 4.00123 20.7778 4.00145 20.5027C4.00159 20.3317 4.00131 20.1465 4 20C4 15.5817 7.58172 12 12 12C16.4183 12 20 15.5817 20 20C19.9988 20.1352 19.9986 20.3246 19.9987 20.5023C19.999 20.7775 20.2225 21 20.4978 21H21.5C21.7761 21 22 20.7762 22 20.5V20C22 15.6919 19.2758 12.0201 15.456 10.6133C16.4075 9.70303 17 8.42071 17 7ZM12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4Z",fill:"#333333"})),o.a.createElement(H,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17C11.2092 17 12.7849 16.4282 14.0462 15.4655L20.2415 21.6516C20.4368 21.8465 20.7531 21.8465 20.9483 21.6514L21.6421 20.958C21.8373 20.763 21.8376 20.4468 21.6428 20.2514L15.4626 14.0501C16.4271 12.7882 17 11.211 17 9.5ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5Z",fill:"#333333"})),o.a.createElement(H,{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5 19C21.7761 19 22 18.7761 22 18.5V17.5C22 17.2239 21.7761 17 21.5 17H6.5C6.22386 17 6 17.2239 6 17.5V18.5C6 18.7761 6.22386 19 6.5 19H21.5ZM22 11.5C22 11.2239 21.7761 11 21.5 11H2V13H21.5C21.7761 13 22 12.7761 22 12.5V11.5ZM22 5.5C22 5.22386 21.7761 5 21.5 5H10.5C10.2239 5 10 5.22386 10 5.5V6.5C10 6.77614 10.2239 7 10.5 7H21.5C21.7761 7 22 6.77614 22 6.5V5.5Z",fill:"#333333"})))))},M=n(145),j=n(147),R=d.c.div.withConfig({displayName:"footer__FooterWrapper",componentId:"nglzew-0"})(["padding:",";position:relative;max-width:",";left:50%;transform:translate(-50%,0);@media ","{padding:200px 40px 80px 40px;display:flex;justify-content:space-between;}"],function(e){return e.theme.layout.wrapperPaddingMobile},function(e){return e.theme.layout.contentWidthDesktop},p.a.tablet),z=d.c.div.withConfig({displayName:"footer__DotTitle",componentId:"nglzew-1"})(["display:flex;"]),L=d.c.div.withConfig({displayName:"footer__TextWrapper",componentId:"nglzew-2"})(["margin-top:40px;@media ","{margin-top:0px;max-width:268px;}"],p.a.tablet),S=d.c.div.withConfig({displayName:"footer__SmallTitle",componentId:"nglzew-3"})(["font-style:normal;font-weight:500;line-height:23px;font-size:14px;letter-spacing:1.4px;text-transform:uppercase;"]),O=d.c.div.withConfig({displayName:"footer__Text",componentId:"nglzew-4"})(["margin-top:10px;font-family:Open Sans;font-style:normal;font-weight:normal;line-height:26px;font-size:16px;letter-spacing:0.1px;color:",""],function(e){return e.theme.color.lightGray}),Z=Object(d.c)(M.a).withConfig({displayName:"footer__StyledTitle",componentId:"nglzew-5"})(["color:",";"],function(e){return e.theme.color.accent}),G=Object(d.c)(j.a).withConfig({displayName:"footer__StyledGreenButton",componentId:"nglzew-6"})(["margin:40px 0px 40px 0px;@media ","{width:171px;margin-top:0px;}"],p.a.tablet),U=function(e){var t=e.data;return o.a.createElement(R,null,o.a.createElement(z,null,o.a.createElement(M.a,{titleText:"Creation"}),o.a.createElement("span",{className:"dot"},o.a.createElement(Z,{titleText:"."}))),o.a.createElement(L,null,o.a.createElement(S,null,"Address"),o.a.createElement(O,null,t.contentfulHome.footerAddress)),o.a.createElement(L,null,o.a.createElement(S,null,"Help"),o.a.createElement(O,null,t.contentfulHome.footerHelp)),o.a.createElement(G,{buttonText:"CONTACT US"}))},B=(n(152),{color:{accent:"#35CC62",lightGray:"#878787",gray:"#666666",darkGray:"#333333",background:"#FFFFFF",heroText:"#FFFFFF"},layout:{contentWidthDesktop:"1240px",wrapperPaddingMobile:"80px 20px 0 20px",navHeightMobile:"60px",navHeightDesktop:"80px"}}),q=(n(153),d.c.div.withConfig({displayName:"layout__MainWrapper",componentId:"ii2kc2-0"})(["margin:0px auto;padding-top:0px;color:",";font-family:Montserrat;"],function(e){return e.theme.color.darkGray})),V=function(e){var t=e.children;return o.a.createElement(c.StaticQuery,{query:"348653563",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{theme:B},o.a.createElement(q,null,o.a.createElement(y,{data:e}),o.a.createElement(F,{data:e}),t,o.a.createElement(U,{data:e}))))},data:a})};V.propTypes={children:l.a.node.isRequired};t.a=V},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Project X"}},allContentfulHeader:{edges:[{node:{linkTitle:"Home",linkUrl:"/",createdAt:"2019-01-31T10:00:29.633Z"}},{node:{linkTitle:"Pages",linkUrl:"/",createdAt:"2019-01-31T10:00:42.226Z"}},{node:{linkTitle:"Work",linkUrl:"/",createdAt:"2019-01-31T10:07:04.493Z"}},{node:{linkTitle:"Blog",linkUrl:"/blog/",createdAt:"2019-01-31T10:07:12.219Z"}},{node:{linkTitle:"About",linkUrl:"/",createdAt:"2019-01-31T10:07:20.826Z"}}]},contentfulHome:{footerAddress:"5th Floor, AH Building, 756 New Designst Melbourne, Australia",footerHelp:"Duis aute irure dolor in repre henderit in iste natus esse."}}}},151:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(54),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},152:function(e,t,n){},153:function(e,t,n){},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Project X",description:"Demoing Gatsby",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-7ad6eb1767a45b8aea2e.js.map