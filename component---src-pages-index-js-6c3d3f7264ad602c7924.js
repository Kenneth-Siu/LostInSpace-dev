(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{138:function(A,e,a){"use strict";a.r(e);var t=a(0),n=a.n(t),c=a(148),r=(a(147),a(141)),i=a(183),o=a.n(i),d=a(184),s=a(146),E=a.n(s);function l(){return n.a.createElement(r.b,{query:"840076175",render:function(A){return n.a.createElement(E.a,{fluid:A.placeholderImage.childImageSharp.fluid})},data:d})}function f(A){var e=A.to,a=A.image,t=A.name,c=A.description;return A.underConstruction?n.a.createElement("div",{className:o.a.tile},p(a,t,c),n.a.createElement("div",{className:o.a.underConstructionOverlay},n.a.createElement(l,null))):n.a.createElement(r.a,{to:e,className:o.a.tile},p(a,t,c))}function p(A,e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o.a.background},A),n.a.createElement("div",{className:o.a.text},n.a.createElement("div",{className:o.a.name},e),n.a.createElement("div",{className:o.a.description},a)))}var u=a(185);function g(){return n.a.createElement(r.b,{query:"3002426454",render:function(A){return n.a.createElement(E.a,{fluid:A.placeholderImage.childImageSharp.fluid})},data:u})}var h=a(186);function B(){return n.a.createElement(r.b,{query:"1479450638",render:function(A){return n.a.createElement(E.a,{fluid:A.placeholderImage.childImageSharp.fluid})},data:h})}var m=a(187);function Q(){return n.a.createElement(r.b,{query:"3236542525",render:function(A){return n.a.createElement(E.a,{fluid:A.placeholderImage.childImageSharp.fluid})},data:m})}var j=a(188),b=a.n(j);function I(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:b.a.indexPage},n.a.createElement(f,{to:"/blog/",image:n.a.createElement(g,null),name:"The Toolbox",description:"Life, games, and game design."}),n.a.createElement(f,{to:"/terra/",image:n.a.createElement(B,null),name:"Terra 2170",description:"A science fiction themed Magic: the Gathering custom expansion with 243 cards and four new mechanics. Designed for a deep booster draft experience."}),n.a.createElement(f,{to:"/",image:n.a.createElement(Q,null),name:"The Great Billingsworth Manor Jumble Sale",description:"What better way for the rich and idle to pass time? A bluffing, deduction, and negotiation game for 3–6 players.",underConstruction:!0})))}function S(){return n.a.createElement(I,null)}a.d(e,"default",function(){return S})},141:function(A,e,a){"use strict";a.d(e,"b",function(){return s});var t=a(0),n=a.n(t),c=a(4),r=a.n(c),i=a(28),o=a.n(i);a.d(e,"a",function(){return o.a}),a.d(e,"c",function(){return i.withPrefix});a(142);var d=n.a.createContext({}),s=function(A){return n.a.createElement(d.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},142:function(A,e,a){var t;A.exports=(t=a(144))&&t.default||t},143:function(A){A.exports={data:{site:{siteMetadata:{title:"Lost in Space"}}}}},144:function(A,e,a){"use strict";a.r(e);a(29);var t=a(0),n=a.n(t),c=a(4),r=a.n(c),i=a(49),o=a(2),d=function(A){var e=A.location,a=o.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=d},145:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAPoAAAD6AG1e1JrAAACYUlEQVQozy2R70tTYRTHz/Pce5/73Oe5u7t3995t3m1tc5tzk7ah5o9CTUXSWehcLnGQWKiUSC8U/EEoJRpYKhGIRFiEBb6pFQn13/UkHb4cvpwv53NeHJD8RRLoVe1+yShgPY/1VmLdZKEydW5Leg5pScyaMRM9gVkK81bJV8BCeg70FgAR8AwxOzHPIRrB1MNaXNHzqr8g8xSiHqghJERcdBVdgTKIJYVAjBBtkllcZjGJukgxQdYBG4AtwCYAB2SA5AdJB8WQqCPRICJBgQPBxdQBzAEUAAyABAyrBjPDZjBhe1k7kvWH0poZlVQBkuF/yQj7sGoLh5nhJNq6+ipzlZXt+va7nfcXh19/vfpyuXt+uf7h2/OzxsuPP54efq5uHI8urHeO1rx0USbGv0vz6weLx425t38q+98re2djW69Hnu2MrWyNLK0NL64u7x0uvTiYXd+vbR3d3zmtvzmfP2msffq9cXIxsbQJT44bxdndjupqqfyoZXgyO1BO94ykuoYixZ5YqXv64ePx6XpL72BpqNxVnro1VS/dq9+YWa5uHi2f/oRkX238wUJtbqGtuz+W6/Cai+FEm+WluBPlTkR3YlY4aUfSTizjxLNOIu/l26OFnmhpIDc4CWPVmTt3J+KtRW57hu357bBuOgrVMWFIoSBTwoxYPBVwPSMQooaNmamaQeZe87LtkMldJz5TMywr4HLdrzGfSrlCNIQVIWFUlbnBsO0EQyEv3BQllIOkIpWpPhs03Y8wUVVuGAGxLElE7EiyKowkE859VOOUctO0XDdoBRyq6VevIiCRv+qMZjHF3SN5AAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/495fc/horizon.png",srcSet:"/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/ccac4/horizon.png 480w,\n/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/b43bc/horizon.png 960w,\n/LostInSpace/static/3e1d86c36683b56ac34becdfc805c8b3/495fc/horizon.png 1920w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},147:function(A,e,a){var t=a(23).f,n=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in n||a(16)&&t(n,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(A){return""}}})},148:function(A,e,a){"use strict";var t=a(143),n=a(0),c=a.n(n),r=a(149),i=a.n(r),o=a(141),d=a(145),s=a(146),E=a.n(s);function l(){return c.a.createElement(o.b,{query:"938626037",render:function(A){return c.a.createElement(E.a,{fluid:A.placeholderImage.childImageSharp.fluid})},data:d})}var f=a(150),p=a.n(f);function u(A){var e=A.siteTitle;return c.a.createElement("div",{className:p.a.header},c.a.createElement("div",{className:p.a.background},c.a.createElement(l,null)),c.a.createElement("div",{className:p.a.container},c.a.createElement(o.a,{to:"/",className:p.a.homeLink},c.a.createElement("img",{className:p.a.headerIcon,src:Object(o.c)("icon.png")}),e)))}a(151);function g(A){var e=A.pageTitle,a=A.children,n=A.thin;return c.a.createElement(o.b,{query:"2262439644",render:function(A){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{title:e?e+" · Lost in Space":"Lost in Space"},c.a.createElement("html",{lang:"en"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),c.a.createElement(u,{siteTitle:A.site.siteMetadata.title}),c.a.createElement("div",{className:"layout-page-container "+(n?"thin":"")},a))},data:t})}a.d(e,"a",function(){return g})},184:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABcElEQVQ4y+2TO0hCYRiG378ppa0hCiLaGmtoaQmiLdBcsuhCQphDJSSIkcfuIAgVQhqERRBWEoQhRNjQUBERdBUa3ILWIAjK0+Hr6KcIDXlr9BnO+w0/D+9/OcAf0HMqRPJj6YVjbhxEcShrLsgfd6D5CYQya4e6UYF80HWoYuJ5wQrnyxnIPgLFY4d84AW5bdjLrB025JCmGyZFaGvhpk2NkEKroJMAlMASEvITqL01K82JVpPekh64D7P0dAvS5S5IPQJl0YqvyDooulmAVI5xOi0QR36WCgEpFgGFffj2zyKRPIqGOgTzEjY3AVVangd0wLabpedBSKqMvE4oyw7IF2rrvFveHgJX+zyP9UPEoyytr4Ur8QhSxYpvBjIKpa+L09wDMWrkW12ZgjRtAb1dQ0ExmI2c6tsU9MpNVbnr/aaALf/meINz0gQxqGep+mYllEJNNafNhP/j84Fzx5P6o0TJQkNndtZUokyZYvgB0kJ9yEQamrQAAAAASUVORK5CYII=",aspectRatio:1,src:"/LostInSpace/static/9f539a43fe6d5335c311a94489da4f22/3764c/underConstructionOverlay.png",srcSet:"/LostInSpace/static/9f539a43fe6d5335c311a94489da4f22/8f448/underConstructionOverlay.png 128w,\n/LostInSpace/static/9f539a43fe6d5335c311a94489da4f22/90573/underConstructionOverlay.png 256w,\n/LostInSpace/static/9f539a43fe6d5335c311a94489da4f22/3764c/underConstructionOverlay.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}}}},185:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBA//EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAY6YaUeFis+WinBj/8QAGxAAAQUBAQAAAAAAAAAAAAAAAgABAxIhEBP/2gAIAQEAAQUChG7lGNEL76CKct7/AP/EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwESIL//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAECAQE/AXRtnn//xAAbEAACAQUAAAAAAAAAAAAAAAAAAREQEiAhMv/aAAgBAQAGPwIcKknVxrD/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFx/9oACAEBAAE/IQobMhKhox9lp7HKsOXUd6lzDIHCiWtQ6/Ik/9oADAMBAAIAAwAAABAr5/z/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxB20VL/xAAVEQEBAAAAAAAAAAAAAAAAAAAgMf/aAAgBAgEBPxCaD//EAB4QAQADAAEFAQAAAAAAAAAAAAEAESExQVFhcYGh/9oACAEBAAE/EOGJ0Z82F1gIR5C9yHn1tsDtX+xW3BRQoRJptOpKAVq+LnYmALOIQnqf/9k=",aspectRatio:1,src:"/LostInSpace/static/b139298c933afe05f933b40257a49bdd/95e13/blogSplash.jpg",srcSet:"/LostInSpace/static/b139298c933afe05f933b40257a49bdd/f35dd/blogSplash.jpg 128w,\n/LostInSpace/static/b139298c933afe05f933b40257a49bdd/ed174/blogSplash.jpg 256w,\n/LostInSpace/static/b139298c933afe05f933b40257a49bdd/95e13/blogSplash.jpg 512w,\n/LostInSpace/static/b139298c933afe05f933b40257a49bdd/c8f30/blogSplash.jpg 600w",sizes:"(max-width: 512px) 100vw, 512px"}}}}}},186:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAP/aAAwDAQACEAMQAAABTiVkemUCP//EABsQAAICAwEAAAAAAAAAAAAAAAECAAMEETIT/9oACAEBAAEFAvUpNBmGIurO6ejP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAQMFAAAAAAAAAAAAAAAAIQABEAIRIjFx/9oACAEBAAY/AisbnaLxT2P/xAAbEAEAAgIDAAAAAAAAAAAAAAABABExQRBRYf/aAAgBAQABPyGkhpetMRrp3Siz+TPzj//aAAwDAQACAAMAAAAQSN//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EJhWf//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBkf//EAB4QAQACAQQDAAAAAAAAAAAAAAEAETEhYXGhscHR/9oACAEBAAE/EF7r1FTcfkqFahkvLAsYy22k7c6TzMjj3P/Z",aspectRatio:1,src:"/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/95e13/terraSplash.jpg",srcSet:"/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/f35dd/terraSplash.jpg 128w,\n/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/ed174/terraSplash.jpg 256w,\n/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/95e13/terraSplash.jpg 512w,\n/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/f1004/terraSplash.jpg 768w,\n/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/34bd0/terraSplash.jpg 1024w,\n/LostInSpace/static/d0606fe30f2d1b029fdbd3f0c2985474/4c4a6/terraSplash.jpg 1350w",sizes:"(max-width: 512px) 100vw, 512px"}}}}}},187:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAAGOnL5sYwD/xAAaEAACAgMAAAAAAAAAAAAAAAABAgADECEx/9oACAEBAAEFAlLzcLOCO2Y//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/AYiI/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESE//aAAgBAgEBPwG2aM//xAAZEAACAwEAAAAAAAAAAAAAAAAAIQECEBH/2gAIAQEABj8CcdGKuRn/xAAbEAEAAgIDAAAAAAAAAAAAAAABACERURAxcf/aAAgBAQABPyEWRLU6lGkxgU3Or3m//9oADAMBAAIAAwAAABCzD//EABURAQEAAAAAAAAAAAAAAAAAABBh/9oACAEDAQE/EJF//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAECAQE/EHjn/8QAHBABAAICAwEAAAAAAAAAAAAAAQARMVEhQXGh/9oACAEBAAE/ELC5tQFICgDVlWbjUO6XzPjTH0xzP//Z",aspectRatio:1,src:"/LostInSpace/static/387d2d9acc9b63114c9ff4eba259806e/95e13/fogsworthSplash.jpg",srcSet:"/LostInSpace/static/387d2d9acc9b63114c9ff4eba259806e/f35dd/fogsworthSplash.jpg 128w,\n/LostInSpace/static/387d2d9acc9b63114c9ff4eba259806e/ed174/fogsworthSplash.jpg 256w,\n/LostInSpace/static/387d2d9acc9b63114c9ff4eba259806e/95e13/fogsworthSplash.jpg 512w,\n/LostInSpace/static/387d2d9acc9b63114c9ff4eba259806e/f1004/fogsworthSplash.jpg 768w,\n/LostInSpace/static/387d2d9acc9b63114c9ff4eba259806e/95af7/fogsworthSplash.jpg 800w",sizes:"(max-width: 512px) 100vw, 512px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-6c3d3f7264ad602c7924.js.map