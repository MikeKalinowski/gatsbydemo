(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(143),o=n(152),l=n(150);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(141),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(144),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(142).b.div.withConfig({displayName:"title__StyledTitle",componentId:"sc-135430u-0"})(["font-style:normal;font-weight:600;line-height:46px;font-size:30px;color:#333333;"]);t.a=function(e){var t=e.className,n=e.titleText;return r.a.createElement(i,{className:t},n)}},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(142).b.button.withConfig({displayName:"greenButton__StyledGreenButton",componentId:"sc-1tij2lt-0"})(["margin-top:20px;width:100%;height:48px;background:#35CC62;border:none;border-radius:4px;cursor:pointer;font-style:normal;font-weight:500;line-height:14px;font-size:14px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#FFFFFF;transition:1s cubic-bezier(0.2,0.8,0.2,1);:hover{background:#FFFFFF;border:1px solid #35CC62;transform:translateY(-3px);color:#35CC62;}"]);t.a=function(e){var t=e.className,n=e.buttonText;return r.a.createElement(i,{className:t},n)}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Project X"}}}}},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(153),s=n.n(c),p=n(143);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(p.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var u="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Project X",description:"Demoing Gatsby",author:"@gatsbyjs"}}}}},152:function(e,t,n){"use strict";var a=n(147),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(143),s=n(142),p=s.b.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background:white;height:80px;width:375px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;padding:0px 20px;position:fixed;top:0;z-index:999;"]),d=Object(s.b)(c.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-1"})(["text-decoration:none;font-style:normal;font-weight:500;font-size:28px;letter-spacing:0.1px;color:inherit;"]),u=s.b.div.withConfig({displayName:"header__IconDiv",componentId:"sc-31ozxh-2"})(["cursor:pointer;position:relative;"]),m=s.b.svg.withConfig({displayName:"header__Svg",componentId:"sc-31ozxh-3"})(["cursor:pointer;position:relative;z-index:2;"]),h=s.b.span.withConfig({displayName:"header__GreenSpan",componentId:"sc-31ozxh-4"})(["color:#35CC62"]),f=s.b.input.withConfig({displayName:"header__CheckboxInput",componentId:"sc-31ozxh-5"})(["  position:absolute;width:24px;height:24px;top:-2px;left:-2px;cursor:pointer;opacity:0;z-index:3;-webkit-touch-callout:none;:checked ~ ul{margin-top:-90px;}"]),g=s.b.ul.withConfig({displayName:"header__List",componentId:"sc-31ozxh-6"})(["position:absolute;width:120px;margin:-380px 0 0 -24px;padding:100px 50px 40px 26px;background:#ddd;list-style-type:none;-webkit-font-smoothing:antialiased;z-order:-1000;transition:all 0.5s cubic-bezier(0.8,0.2,0.05,1.0);"]),y=s.b.li.withConfig({displayName:"header__Li",componentId:"sc-31ozxh-7"})(["padding:8px 0;"]),x=s.b.a.withConfig({displayName:"header__StyledA",componentId:"sc-31ozxh-8"})(["text-decoration:none;font-style:normal;font-weight:500;font-size:16px;letter-spacing:0.1px;color:inherit;"]),w=function(){return i.a.createElement(p,null,i.a.createElement(u,null,i.a.createElement(m,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5 19C21.7761 19 22 18.7761 22 18.5V17.5C22 17.2239 21.7761 17 21.5 17H2.5C2.22386 17 2 17.2239 2 17.5V18.5C2 18.7761 2.22386 19 2.5 19H21.5ZM22 11.5C22 11.2239 21.7761 11 21.5 11H2.5C2.22386 11 2 11.2239 2 11.5V12.5C2 12.7761 2.22386 13 2.5 13H21.5C21.7761 13 22 12.7761 22 12.5V11.5ZM22 5.5C22 5.22386 21.7761 5 21.5 5H2.5C2.22386 5 2 5.22386 2 5.5V6.5C2 6.77614 2.22386 7 2.5 7H21.5C21.7761 7 22 6.77614 22 6.5V5.5Z",fill:"#333333"})),i.a.createElement(f,{type:"checkbox"}),i.a.createElement(g,null,i.a.createElement(y,null,i.a.createElement(x,{href:"/"},"Home")),i.a.createElement(y,null,i.a.createElement(x,{href:"/"},"Pages")),i.a.createElement(y,null,i.a.createElement(x,{href:"/"},"Work")),i.a.createElement(y,null,i.a.createElement(x,{href:"/"},"Blog")),i.a.createElement(y,null,i.a.createElement(x,{href:"/"},"About")))),i.a.createElement("div",{className:"logoName"},i.a.createElement(d,{to:"/"},"Creation",i.a.createElement(h,null,"."))),i.a.createElement(u,null,i.a.createElement(m,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17C11.2092 17 12.7849 16.4282 14.0462 15.4655L20.2415 21.6516C20.4368 21.8465 20.7531 21.8465 20.9483 21.6514L21.6421 20.958C21.8373 20.763 21.8376 20.4468 21.6428 20.2514L15.4626 14.0501C16.4271 12.7882 17 11.211 17 9.5ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5Z",fill:"#333333"}))))};w.propTypes={type:l.a.string},w.defaultProps={type:""};var b=w,C=n(145),E=n(146),v=s.b.div.withConfig({displayName:"footer__FooterWrapper",componentId:"r54yyk-0"})(["margin:80px 21px 0 21px;"]),_=s.b.div.withConfig({displayName:"footer__DotTitle",componentId:"r54yyk-1"})(["display:flex;"]),k=s.b.div.withConfig({displayName:"footer__SmallTitle",componentId:"r54yyk-2"})(["margin-top:40px;font-style:normal;font-weight:500;line-height:23px;font-size:14px;letter-spacing:1.4px;text-transform:uppercase;"]),N=s.b.div.withConfig({displayName:"footer__Text",componentId:"r54yyk-3"})(["margin-top:10px;font-family:Open Sans;font-style:normal;font-weight:normal;line-height:26px;font-size:16px;letter-spacing:0.1px;color:#878787"]),z=Object(s.b)(C.a).withConfig({displayName:"footer__StyledTitle",componentId:"r54yyk-4"})(["color:#29CE5D;"]),I=Object(s.b)(E.a).withConfig({displayName:"footer__StyledGreenButton",componentId:"r54yyk-5"})(["margin:40px 0px 40px 0px;"]),T=function(){return i.a.createElement(v,null,i.a.createElement(_,null,i.a.createElement(C.a,{titleText:"Creation"}),i.a.createElement("span",{className:"dot"},i.a.createElement(z,{titleText:"."}))),i.a.createElement(k,null,"Address"),i.a.createElement(N,null,"5th Floor, AH Building, 756 New Designst Melbourne, Australia"),i.a.createElement(k,null,"Help"),i.a.createElement(N,null,"Duis aute irure dolor in repre henderit in  iste natus esse."),i.a.createElement(I,{buttonText:"CONTACT US"}))},S=(n(149),s.b.div.withConfig({displayName:"layout__MainWrapper",componentId:"ii2kc2-0"})(["margin:0px auto;max-width:375px;padding-top:0px;color:#333333;font-family:Montserrat;"])),F=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null,i.a.createElement(b,null),t,i.a.createElement(T,null)))},data:a})};F.propTypes={children:l.a.node.isRequired};t.a=F}}]);
//# sourceMappingURL=component---src-pages-page-2-js-0d8a4a917f906ab44fda.js.map