(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(140);function c(){return r.a.createElement(i.a,{pageTitle:"Not Found"},r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}function u(){return r.a.createElement(c,null)}a.d(t,"default",function(){return u})},131:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),u=a(130),o=a.n(u);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var l=a(133),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},133:function(e,t,a){var n;e.exports=(n=a(136))&&n.default||n},135:function(e){e.exports={data:{site:{siteMetadata:{title:"Lost in Space"}}}}},136:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),u=a(48),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},137:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7CAAAOwgEVKEqAAAACo0lEQVQ4y12VX2iNcRjHD9uujLAw+XtBbRIXQhRpZPmTsEZyJRbicEW7QEvcMXekrF1IacKSlIvhUHPBJDPy5wItTN7jnJ2dI5wTn6/zvG9P71uf8/x5f+/zPL/n9+ck0ul0Qk8QBKMS9qC34K9LuAd7NFR6n74Jv1Mc9GiwD3YDuwRz0KuQ+6AL/RXyEwzABVjsk9m35chhlcjbOL/BGPR1yK9/7cE+gb0GuUvB5UN2Y4/zQaVUmDwGv6CKgXstyGWYj61EL9Dr4RAMwxXoBRVQaxVGQWeBMq5ENmQyGQX7ib3TtaLfknyADW6613jXl4g1/DzOXtOzkLSq2mAB9ntQD+9Dv0tSid1uiQ5GK4XxGbkFmmHIAp+FP/ADLsFE82vqnTY+h/4MOuDN/ynzU2c9mWDldyFbFSybzSrzithsdltFARwxX43NbJGMjarQVjtVLBY1+DVsgo/QYh/NAG2p79aCnliiQdgmZbs+dNPpcIOS8BaOqmKqf4ycB9NsR6zSfoWHpVJJi9qkjxoh7NsjbZ/49BiYha2xU9Jp/VXFd0D9bNCL2SgjMBVOwlN8quKJ9emqtaTGklTyvhWG8/m82rMUFqbLz6Qw2zuMAzAZilokfAo004J0W/WN+HX8hmyDa3dMR96Cm778466PF1VZrOFr3RE87fzaMvdUGjHm+oDVtuyHbeCALZC2VDvvRyzRS7gO1Tb1QUuyIzrG7iw3FQoFvVxiSXpcVUm3dbTqBZNa6eb45RAZulEs6HoLuhlS1rPA9t+X8gwDXWFj/QXjpxzdiZp2LpdTUJ2YWncSlsFqxtabb7zGuiNZvgbDW9ZXahdCys5yH5zDtx/2oJ+CB/DbttiU+I0fBZWECreKCtwGd21Fn9uNc4Zxy/1fQaj/A+qe+Sm7w0dhAAAAAElFTkSuQmCC",aspectRatio:1,src:"/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/00224/icon.png",srcSet:"/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/ff501/icon.png 64w,\n/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/47e5f/icon.png 128w,\n/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/00224/icon.png 256w",sizes:"(max-width: 256px) 100vw, 256px"}}}}}},138:function(e,t,a){e.exports={header:"header-module--header--1O-d1",container:"header-module--container--uDvDr",homeLink:"header-module--homeLink--yxiUN",headerIcon:"header-module--headerIcon--2Bx2x"}},139:function(e,t,a){},140:function(e,t,a){"use strict";var n=a(135),r=a(0),i=a.n(r),c=a(141),u=a.n(c),o=a(131),l=a(137),s=a(132),d=a.n(s);function f(){return i.a.createElement(o.StaticQuery,{query:"1158076013",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})}var m=a(138),p=a.n(m);function h(e){var t=e.siteTitle;return i.a.createElement("div",{className:p.a.header},i.a.createElement("div",{className:p.a.container},i.a.createElement(o.Link,{to:"/",className:p.a.homeLink},i.a.createElement("div",{className:p.a.headerIcon},i.a.createElement(f,null)),i.a.createElement("h1",null,t))))}a(139);function A(e){var t=e.pageTitle,a=e.children;return i.a.createElement(o.StaticQuery,{query:"2262439644",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:t?t+" · Lost in Space":"Lost in Space"},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"layout-page-container"},a))},data:n})}a.d(t,"a",function(){return A})}}]);
//# sourceMappingURL=component---src-pages-404-js-cd1e1f49b12150abd71b.js.map