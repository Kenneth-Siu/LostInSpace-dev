(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(147);function i(){return r.a.createElement(c.a,{pageTitle:"Not Found"},r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}function u(){return r.a.createElement(i,null)}a.d(t,"default",function(){return u})},140:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),u=a(28),l=a.n(u);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return u.withPrefix});a(141);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Lost in Space"}}}}},145:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),u=a(49),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},146:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7CAAAOwgEVKEqAAAACo0lEQVQ4y12VX2iNcRjHD9uujLAw+XtBbRIXQhRpZPmTsEZyJRbicEW7QEvcMXekrF1IacKSlIvhUHPBJDPy5wItTN7jnJ2dI5wTn6/zvG9P71uf8/x5f+/zPL/n9+ck0ul0Qk8QBKMS9qC34K9LuAd7NFR6n74Jv1Mc9GiwD3YDuwRz0KuQ+6AL/RXyEwzABVjsk9m35chhlcjbOL/BGPR1yK9/7cE+gb0GuUvB5UN2Y4/zQaVUmDwGv6CKgXstyGWYj61EL9Dr4RAMwxXoBRVQaxVGQWeBMq5ENmQyGQX7ib3TtaLfknyADW6613jXl4g1/DzOXtOzkLSq2mAB9ntQD+9Dv0tSid1uiQ5GK4XxGbkFmmHIAp+FP/ADLsFE82vqnTY+h/4MOuDN/ynzU2c9mWDldyFbFSybzSrzithsdltFARwxX43NbJGMjarQVjtVLBY1+DVsgo/QYh/NAG2p79aCnliiQdgmZbs+dNPpcIOS8BaOqmKqf4ycB9NsR6zSfoWHpVJJi9qkjxoh7NsjbZ/49BiYha2xU9Jp/VXFd0D9bNCL2SgjMBVOwlN8quKJ9emqtaTGklTyvhWG8/m82rMUFqbLz6Qw2zuMAzAZilokfAo004J0W/WN+HX8hmyDa3dMR96Cm778466PF1VZrOFr3RE87fzaMvdUGjHm+oDVtuyHbeCALZC2VDvvRyzRS7gO1Tb1QUuyIzrG7iw3FQoFvVxiSXpcVUm3dbTqBZNa6eb45RAZulEs6HoLuhlS1rPA9t+X8gwDXWFj/QXjpxzdiZp2LpdTUJ2YWncSlsFqxtabb7zGuiNZvgbDW9ZXahdCys5yH5zDtx/2oJ+CB/DbttiU+I0fBZWECreKCtwGd21Fn9uNc4Zxy/1fQaj/A+qe+Sm7w0dhAAAAAElFTkSuQmCC",aspectRatio:1,src:"/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/ec466/icon.png",srcSet:"/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/f3397/icon.png 64w,\n/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/960ff/icon.png 128w,\n/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/ec466/icon.png 256w",sizes:"(max-width: 256px) 100vw, 256px"}}}}}},147:function(e,t,a){"use strict";var n=a(144),r=a(0),c=a.n(r),i=a(148),u=a.n(i),l=a(140),o=a(146),s=a(143),d=a.n(s);function f(){return c.a.createElement(l.b,{query:"1158076013",render:function(e){return c.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})}var m=a(149),p=a.n(m);function A(e){var t=e.siteTitle;return c.a.createElement("div",{className:p.a.header},c.a.createElement("div",{className:p.a.container},c.a.createElement(l.a,{to:"/",className:p.a.homeLink},c.a.createElement("div",{className:p.a.headerIcon},c.a.createElement(f,null)),c.a.createElement("h1",null,t))))}a(150);function h(e){var t=e.pageTitle,a=e.children;return c.a.createElement(l.b,{query:"2262439644",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{title:t?t+" · Lost in Space":"Lost in Space"},c.a.createElement("html",{lang:"en"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),c.a.createElement(A,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{className:"layout-page-container"},a))},data:n})}a.d(t,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-pages-404-js-cd59e470b39c1fd61de5.js.map