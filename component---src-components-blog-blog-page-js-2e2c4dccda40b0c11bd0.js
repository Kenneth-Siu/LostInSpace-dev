(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var n=a(0),c=a.n(n),r=a(148),l=a(182),i=a.n(l),o=a(159);function s(e){var t=e.pageContext.post,a=""+t.title;return c.a.createElement(r.a,{pageTitle:a,thin:!0},c.a.createElement("div",{className:i.a.blogPost},c.a.createElement(o.a,{post:t})))}},141:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),c=a.n(n),r=a(4),l=a.n(r),i=a(28),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return i.withPrefix});a(142);var s=c.a.createContext({}),u=function(e){return c.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},142:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Lost in Space"}}}}},144:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),i=a(49),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},145:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAPoAAAD6AG1e1JrAAACYUlEQVQozy2R70tTYRTHz/Pce5/73Oe5u7t3995t3m1tc5tzk7ah5o9CTUXSWehcLnGQWKiUSC8U/EEoJRpYKhGIRFiEBb6pFQn13/UkHb4cvpwv53NeHJD8RRLoVe1+yShgPY/1VmLdZKEydW5Leg5pScyaMRM9gVkK81bJV8BCeg70FgAR8AwxOzHPIRrB1MNaXNHzqr8g8xSiHqghJERcdBVdgTKIJYVAjBBtkllcZjGJukgxQdYBG4AtwCYAB2SA5AdJB8WQqCPRICJBgQPBxdQBzAEUAAyABAyrBjPDZjBhe1k7kvWH0poZlVQBkuF/yQj7sGoLh5nhJNq6+ipzlZXt+va7nfcXh19/vfpyuXt+uf7h2/OzxsuPP54efq5uHI8urHeO1rx0USbGv0vz6weLx425t38q+98re2djW69Hnu2MrWyNLK0NL64u7x0uvTiYXd+vbR3d3zmtvzmfP2msffq9cXIxsbQJT44bxdndjupqqfyoZXgyO1BO94ykuoYixZ5YqXv64ePx6XpL72BpqNxVnro1VS/dq9+YWa5uHi2f/oRkX238wUJtbqGtuz+W6/Cai+FEm+WluBPlTkR3YlY4aUfSTizjxLNOIu/l26OFnmhpIDc4CWPVmTt3J+KtRW57hu357bBuOgrVMWFIoSBTwoxYPBVwPSMQooaNmamaQeZe87LtkMldJz5TMywr4HLdrzGfSrlCNIQVIWFUlbnBsO0EQyEv3BQllIOkIpWpPhs03Y8wUVVuGAGxLElE7EiyKowkE859VOOUctO0XDdoBRyq6VevIiCRv+qMZjHF3SN5AAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/495fc/horizon.png",srcSet:"/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/ccac4/horizon.png 480w,\n/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/b43bc/horizon.png 960w,\n/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/495fc/horizon.png 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},148:function(e,t,a){"use strict";var n=a(143),c=a(0),r=a.n(c),l=a(149),i=a.n(l),o=a(141),s=a(145),u=a(146),d=a.n(u);function m(){return r.a.createElement(o.b,{query:"938626037",render:function(e){return r.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})}var p=a(150),f=a.n(p);function g(e){var t=e.siteTitle;return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",{className:f.a.background},r.a.createElement(m,null)),r.a.createElement("div",{className:f.a.container},r.a.createElement(o.a,{to:"/",className:f.a.homeLink},r.a.createElement("img",{className:f.a.headerIcon,src:Object(o.c)("icon.png")}),t)))}a(151);function h(e){var t=e.pageTitle,a=e.children,c=e.thin;return r.a.createElement(o.b,{query:"2262439644",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:t?t+" · Lost in Space":"Lost in Space"},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),r.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"layout-page-container "+(c?"thin":"")},a))},data:n})}a.d(t,"a",function(){return h})},159:function(e,t,a){"use strict";a(161),a(31),a(68);var n=a(0),c=a.n(n),r=a(141),l=a(162),i=a.n(l),o=a(163),s=a.n(o),u=a(164),d=a.n(u);function m(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8"},c.a.createElement("path",{d:"M0 0v3l5 5 3-3-5-5h-3zm2 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"}))}function p(e){var t,a,n,l=e.post,o=function(e,t){return e.replace(new RegExp("<h1.+"+(a=t,a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))+"</h1>"),"");var a}((t=i()(l.markdown),a=l.images,n=t,a.forEach(function(e){n=n.replace('src="'+e+'"','src="'+Object(r.c)("/blog/"+e+".png")+'"')}),n),l.title);return c.a.createElement("div",{className:s.a.post},c.a.createElement("div",{className:s.a.postHeader},c.a.createElement("p",{className:s.a.date},c.a.createElement("small",null,d()(l.publishDate).format("Do MMM YYYY"))),c.a.createElement("ul",{className:s.a.tags},l.tags.map(function(e){return c.a.createElement("li",null,c.a.createElement("small",null,c.a.createElement(m,null),e))}))),c.a.createElement("div",{className:s.a.postBody},c.a.createElement("h1",{id:l.slug},c.a.createElement(r.a,{to:"/blog/"+l.slug+"/"},l.title)),c.a.createElement("div",{className:s.a.content,dangerouslySetInnerHTML:{__html:o}})))}a.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=component---src-components-blog-blog-page-js-2e2c4dccda40b0c11bd0.js.map