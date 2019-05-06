(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(148),o=(n(147),n(6)),c=n.n(o),s=n(153),u=n(158),l=(n(160),n(188)),h=n.n(l),f=Object.freeze({NONE:"",WHITE:"W",BLUE:"U",BLACK:"B",RED:"R",GREEN:"G",GOLD:"X",COLORLESS:"C"}),d=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var n=t.prototype;return n.render=function(){return a.a.createElement("div",{className:h.a.container},this.getButton(f.WHITE,"White"),this.getButton(f.BLUE,"Blue"),this.getButton(f.BLACK,"Black"),this.getButton(f.RED,"Red"),this.getButton(f.GREEN,"Green"),this.getButton(f.GOLD,"Gold"),this.getButton(f.COLORLESS,"Colorless"))},n.getButton=function(e,t){var n=this;return a.a.createElement("button",{className:h.a.button+" "+(this.props.filter===e?h.a.selected:""),onClick:function(){return n.handleClick(e)}},t)},n.handleClick=function(e){this.props.onFilterChange(this.props.filter===e?f.NONE:e)},t}(a.a.Component),m=n(189),p=n.n(m),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={filter:f.WHITE},n}c()(t,e);var n=t.prototype;return n.render=function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{filter:this.state.filter,onFilterChange:function(t){return e.changeFilter(t)}}),a.a.createElement("div",{className:p.a.cardImagesContainer},this.getFilteredCards().map(function(e){return a.a.createElement("div",{className:p.a.cardContainer,key:e.id},a.a.createElement("img",{src:e.imageUrl,className:p.a.card,alt:e.name}),a.a.createElement("div",{className:p.a.cardName},e.name))})),a.a.createElement(d,{filter:this.state.filter,onFilterChange:function(t){return e.changeFilter(t)}}))},n.changeFilter=function(e){this.setState({filter:e})},n.getFilteredCards=function(){var e=this;return s.a.filter(function(t){switch(e.state.filter){case f.NONE:return!0;case f.GOLD:return t.color.length>1;case f.COLORLESS:return 0===t.color.length;case f.WHITE:return t.color===u.a.WHITE;case f.BLUE:return t.color===u.a.BLUE;case f.BLACK:return t.color===u.a.BLACK;case f.RED:return t.color===u.a.RED;case f.GREEN:return t.color===u.a.GREEN;default:return!0}})},t}(a.a.Component),k=(n(190),n(191),n(68),n(73),n(154),n(195)),v=n.n(k),y=function(){function e(e,t){this.white=.1*Math.random(),this.blue=.1*Math.random(),this.black=.1*Math.random(),this.red=.1*Math.random(),this.green=.1*Math.random(),this.totalPicks=e.length,this.countRatings(e),t&&this.countRating(t),this.generateFuzz()}var t=e.prototype;return t.getModifier=function(e){return""===e?Math.max.apply(Math,this.getModifierArray("WUBRG")):Math.min.apply(Math,this.getModifierArray(e))},t.countRatings=function(e){var t=this;e.forEach(function(e){return t.countRating(e)})},t.countRating=function(e){-1!==e.card.color.indexOf("W")&&(this.white+=e.rating),-1!==e.card.color.indexOf("U")&&(this.blue+=e.rating),-1!==e.card.color.indexOf("B")&&(this.black+=e.rating),-1!==e.card.color.indexOf("R")&&(this.red+=e.rating),-1!==e.card.color.indexOf("G")&&(this.green+=e.rating)},t.generateFuzz=function(){var e=this;[new P("white",this.white),new P("blue",this.blue),new P("black",this.black),new P("red",this.red),new P("green",this.green)].sort(function(e,t){return e.rating-t.rating}).forEach(function(t,n){e[t.name+"Fuzz"]=e.getColorFuzz(n)})},t.getColorFuzz=function(e){switch(e){case 0:return Math.max(0,Math.min(45,72-9*this.totalPicks));case 1:return Math.max(0,Math.min(45,126-9*this.totalPicks));case 2:return Math.max(0,Math.min(45,216-12*this.totalPicks));default:return Math.max(8*this.totalPicks-67,45)}},t.getModifierArray=function(e){var t=this;return e.split("").map(function(e){return t.getModifierForSingleColor(e)})},t.getModifierForSingleColor=function(e){return"W"===e?this.fuzzedWhite/this.getTotalFuzzyCount():"U"===e?this.fuzzedBlue/this.getTotalFuzzyCount():"B"===e?this.fuzzedBlack/this.getTotalFuzzyCount():"R"===e?this.fuzzedRed/this.getTotalFuzzyCount():this.fuzzedGreen/this.getTotalFuzzyCount()},t.getTotalFuzzyCount=function(){return this.fuzzedWhite+this.fuzzedBlue+this.fuzzedBlack+this.fuzzedRed+this.fuzzedGreen},v()(e,[{key:"fuzzedWhite",get:function(){return this.white+this.whiteFuzz}},{key:"fuzzedBlue",get:function(){return this.blue+this.blueFuzz}},{key:"fuzzedBlack",get:function(){return this.black+this.blackFuzz}},{key:"fuzzedRed",get:function(){return this.red+this.redFuzz}},{key:"fuzzedGreen",get:function(){return this.green+this.greenFuzz}}]),e}(),P=function(e,t){this.name=e,this.rating=t},b=function(){function e(e,t){this.artifact=0,this.etb=0,this.lifegain=0,this.lifeloss=0,this.equipment=0,this.creatureTokens=0,this.fodder=0,this.creatureFodder=0,this.artifactFodder=0,this.police=0,this.evasion=0,this.flash=0,this.cheating=0,this.scry=0,this.combatTrick=0,this.mutantXeno=0,this.totalPicks=e.length,this.countCards(e),t&&this.countCard(t)}var t=e.prototype;return t.getPotentialPowerOfCard=function(e){if(!e.notes.potential)return e.notes.power;var t=this.getFractionOfPotential(e);return e.notes.power+(e.notes.potential-e.notes.power)*(t+(1-t)*this.getOptimism())},t.getExistingPowerOfCard=function(e){return e.notes.potential?e.notes.power+(e.notes.potential-e.notes.power)*this.getFractionOfPotential(e):e.notes.power},t.getFractionOfPotential=function(e){var t=0;for(var n in e.notes.synergies){if(void 0===this[n])throw new Error("Missing card tag: "+n);t+=this[n]/e.notes.synergies[n]}return Math.max(1,t)},t.countCards=function(e){var t=this;e.forEach(function(e){return t.countCard(e)})},t.countCard=function(e){for(var t in e.notes.tags){if(void 0===this[t])throw new Error("Missing card tag: "+t);this[t]+=e.notes.tags[t]}},t.getOptimism=function(){return Math.max(0,Math.min(1,1.6-.2*this.totalPicks))},e}(),E=function(e,t){this.card=e,this.rating=t},C=function(e){this.white=e.getModifier("W"),this.blue=e.getModifier("U"),this.black=e.getModifier("B"),this.red=e.getModifier("R"),this.green=e.getModifier("G")},w=function(){function e(){}var t=e.prototype;return t.decidePick=function(e,t){if(!e||0===e.cards.length)throw new Error("Sorry Dave, I can't let you pick from a nonexistent or empty pack.");return this.picks=t,this.evaluatePack(t,e),this.makePick()},t.evaluateCard=function(e,t){var n=new b(e,t),r=e.map(function(e){return new E(e,n.getExistingPowerOfCard(e))}),a=new E(t,n.getPotentialPowerOfCard(t)),i=new y(r,a),o=r.map(function(e){return e.rating*i.getModifier(e.card.color)}).reduce(function(e,t){return e+t},0),c=a.rating*i.getModifier(t.color);return new E(t,o+c)},t.getColorPreferences=function(e){var t=new b(e),n=e.map(function(e){return new E(e,t.getExistingPowerOfCard(e))}),r=new y(n);return new C(r)},t.evaluatePack=function(e,t){var n=this;this.packRatings=t.cards.map(function(t){return n.evaluateCard(e,t)})},t.makePick=function(){return this.packRatings.reduce(function(e,t){return t.rating>=e.rating?t:e}).card},e}(),S=n(152),z=s.a.filter(function(e){return"M"===e.rarity}),O=s.a.filter(function(e){return"R"===e.rarity}),A=s.a.filter(function(e){return"U"===e.rarity}),M=s.a.filter(function(e){return"C"===e.rarity});function N(){var e=[];return 0===Object(S.random)(0,7)?e.push(Object(S.cloneDeep)(Object(S.sample)(z)).assignUuid()):e.push(Object(S.cloneDeep)(Object(S.sample)(O)).assignUuid()),e.push.apply(e,function(){for(var e=[],t=function(t){var n=e.map(function(e){return e.color}),r=A.filter(function(e){return!n.some(function(t){return t===e.color})});e.push(Object(S.cloneDeep)(Object(S.sample)(r)).assignUuid())},n=0;n<3;n++)t(n);return e}()),e.push.apply(e,function(){var e=[];["W","U","B","R","G"].forEach(function(t){return e.push(function(e){var t=M.filter(function(t){return t.color===e});return Object(S.cloneDeep)(t[Object(S.random)(0,t.length-1)]).assignUuid()}(t))});for(var t=function(t){var n=[],r=e.map(function(e){return e.color});r.forEach(function(e){r.filter(function(t){return t===e}).length>=3&&!n.some(function(t){return t===e})&&n.push(e)});var a=M.filter(function(e){return!n.some(function(t){return t===e.color})}),i=a.filter(function(t){return!e.some(function(e){return e.id===t.id})});e.push(Object(S.cloneDeep)(Object(S.sample)(i)).assignUuid())},n=0;n<5;n++)t(n);return Object(S.shuffle)(e)}()),e}var x=function(){this.cards=N()},F=function(){function e(e){this.nextPack=new x,this.pack=null,this.picks=[],this.sideboard=[],this.cardPicker=new w,this.leftHandPlayer=null,this.rightHandPlayer=null,e&&(this.leftHandPlayer=e,this.leftHandPlayer.setRightHandPlayer(this))}var t=e.prototype;return t.makePick=function(e){if(!this.nextPack||0===this.nextPack.cards.length)throw new Error("No next pack?!?!");this.pack=this.nextPack,this.nextPack=null;var t=Object(S.findIndex)(this.pack.cards,function(t){return t.id===e.id});if(-1===t)throw new Error("You tried to pick "+e.name+" that's not in the pack. Cheater.");var n=Object(S.pullAt)(this.pack.cards,t)[0];this.picks.push(n)},t.passPack=function(e){"left"===e?this.leftHandPlayer.receivePack(this.pack):this.rightHandPlayer.receivePack(this.pack)},t.computerPick=function(){var e=this.cardPicker.decidePick(this.nextPack,this.picks);this.makePick(e),this.sideboardUnwantedCards()},t.openPack=function(){this.nextPack=new x},t.getColorPreferences=function(){return this.cardPicker.getColorPreferences(this.picks)},t.moveFromPicksToSideboard=function(e){var t,n=Object(S.remove)(this.picks,function(t){return t===e});(t=this.sideboard).push.apply(t,n)},t.moveFromSideboardToPicks=function(e){var t,n=Object(S.remove)(this.sideboard,function(t){return t===e});(t=this.picks).push.apply(t,n)},t.setLeftHandPlayer=function(e){this.leftHandPlayer=e,e.rightHandPlayer||e.setRightHandPlayer(this)},t.setRightHandPlayer=function(e){this.rightHandPlayer=e,e.leftHandPlayer||e.setLeftHandPlayer(this)},t.receivePack=function(e){this.nextPack=e},t.sideboardUnwantedCards=function(){var e,t=this.getColorPreferences(),n=Object(S.remove)(this.picks,function(e){return e.color.split("").some(function(e){return"W"===e?t.white<.1:"U"===e?t.blue<.1:"B"===e?t.black<.1:"R"===e?t.red<.1:"G"===e&&t.green<.1})});(e=this.sideboard).push.apply(e,n)},e.createTableOfPlayers=function(){for(var t=[],n=0;n<8;n++){var r=0===n?new e:new e(t[n-1]);t.push(r)}return t[0].setLeftHandPlayer(t[7]),t},e}(),B=n(197),R=n.n(B);function I(e){var t=e.url,n=e.additionalClasses,r=e.onMouseEnter,i=e.name;return a.a.createElement("img",{src:t,className:""+R.a.card+(n&&" "+n||""),onMouseEnter:function(){r&&r()},alt:i})}var L=n(198),T=n.n(L),D=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var n=t.prototype;return n.render=function(){var e=this,t=this.pilify(this.props.cards),n=Math.max.apply(Math,t.map(function(e){return e.length}));return a.a.createElement("div",{className:T.a.cardPiles+" "+T.a["sizeOfLargestPile"+n]},t.map(function(t,n){return e.getPileElement(t,n)}))},n.getPileElement=function(e,t){var n=this;return a.a.createElement("div",{className:T.a.pile,key:t},e.map(function(e,t){return n.getPileCardImageElement(e,t)}))},n.getPileCardImageElement=function(e,t){var n=this;return a.a.createElement("div",{onClick:function(){n.props.onClick&&n.props.onClick(e)},onMouseEnter:function(){n.props.onMouseEnter&&n.props.onMouseEnter(e)},onMouseLeave:function(){n.props.onMouseLeave&&n.props.onMouseLeave()},key:t},a.a.createElement(I,{key:e.uuid,url:e.imageUrl,additionalClasses:T.a.card+" "+T.a["pileIndex"+t]}))},n.pilify=function(e){var t=this,n=e.sort(function(e,t){return e<t?-1:e>t?1:0});return this.splitIntoCmcPiles(n).map(function(e){return t.sortByColor(e)})},n.splitIntoCmcPiles=function(e){var t=[[],[],[],[],[],[],[],[]];return e.forEach(function(e){"X"===e.cmc||0===e.cmc?t[7].push(e):e.cmc>=7?t[6].push(e):t[e.cmc-1].push(e)}),t},n.sortByColor=function(e){return e.sort(function(e,t){return(0===e.color.length?5:e.color.length>1?6:"WUBRG".indexOf(e.color))-(0===t.color.length?5:t.color.length>1?6:"WUBRG".indexOf(t.color))})},t}(a.a.Component),U=n(199),j=n.n(U);function G(e){var t=e.url;return a.a.createElement("div",{className:j.a.cardPreview},t&&a.a.createElement(I,{url:t}))}function H(e){var t=e.onClick,n=e.imageUrl;return a.a.createElement("div",{onClick:t},a.a.createElement(I,{url:n}))}var W=n(200),Q=n.n(W),X=function(e){function t(t){var n;return(n=e.call(this,t)||this).cardPicker=new w,n.computerPlayers=F.createTableOfPlayers(),n.humanPlayer=n.computerPlayers.shift(),n.state={isClient:!1,pack:n.humanPlayer.nextPack.cards.map(function(e){return n.cardPicker.evaluateCard(n.humanPlayer.picks,e)}),packNumber:1,picks:[],sideboard:[],computerColorPreferences:n.computerPlayers.map(function(e){return e.getColorPreferences()}),computerPicks:[[],[],[],[],[],[],[]],showAIRatings:!1,showAIPicks:!1,hoveredCardUrl:null},n.passDirection="left",n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({isClient:!0})},n.render=function(){var e=this;return this.state.isClient?a.a.createElement("div",{className:Q.a.draftSim},this.state.pack.length>0&&a.a.createElement("div",{className:Q.a.boosterPack},a.a.createElement("h3",{className:Q.a.header},"Pack ",this.state.packNumber," Pick ",15-this.state.pack.length," ",a.a.createElement("small",null,"Click a card to add it to your deck")),a.a.createElement("div",{className:Q.a.cards},this.state.pack.map(function(t){return e.getCardPickElement(t)}))),a.a.createElement("h3",{className:Q.a.header},"Deck (",this.state.picks.length,") ",a.a.createElement("small",null,"Click a card to move it to your sideboard")),a.a.createElement(D,{cards:this.state.picks,onClick:function(t){return e.moveFromPicksToSideboard(t)},onMouseEnter:function(t){return e.handleMouseEnterPileCard(t)},onMouseLeave:function(){return e.handleMouseLeavePileCard()}}),a.a.createElement("h3",{className:Q.a.header},"Sideboard (",this.state.sideboard.length,") ",a.a.createElement("small",null,"Click a card to move it to your deck")),a.a.createElement(D,{cards:this.state.sideboard,onClick:function(t){return e.moveFromSideboardToPicks(t)},onMouseEnter:function(t){return e.handleMouseEnterPileCard(t)},onMouseLeave:function(){return e.handleMouseLeavePileCard()}}),a.a.createElement("div",{className:Q.a.toggleAiPicksButtonContainer},a.a.createElement("button",{onClick:function(){return e.toggleAIPicks()},className:Q.a.button},this.state.showAIPicks?"Hide AI Picks":"Show AI Picks")),this.state.showAIPicks&&this.state.computerPicks.map(function(t,n){return a.a.createElement("div",{className:"row",key:n},a.a.createElement("div",{className:"col-md-12"},a.a.createElement("h3",null,"AI ",n," —  W:",e.state.computerColorPreferences[n].white.toPrecision(3),"  U:",e.state.computerColorPreferences[n].blue.toPrecision(3),"  B:",e.state.computerColorPreferences[n].black.toPrecision(3),"  R:",e.state.computerColorPreferences[n].red.toPrecision(3),"  G:",e.state.computerColorPreferences[n].green.toPrecision(3)," ")),a.a.createElement("div",{className:"col-md-12"},a.a.createElement(D,{cards:t,onMouseEnter:function(t){return e.handleMouseEnterPileCard(t)},onMouseLeave:function(){return e.handleMouseLeavePileCard()}})))}),a.a.createElement(G,{url:this.state.hoveredCardUrl})):null},n.makePick=function(e){this.humanPlayer.makePick(e);var t=this.computerPlayers,n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var a;if(n){if(r>=t.length)break;a=t[r++]}else{if((r=t.next()).done)break;a=r.value}a.computerPick()}this.humanPlayer.passPack(this.passDirection);var i=this.computerPlayers,o=Array.isArray(i),c=0;for(i=o?i:i[Symbol.iterator]();;){var s;if(o){if(c>=i.length)break;s=i[c++]}else{if((c=i.next()).done)break;s=c.value}s.passPack(this.passDirection)}if(0===this.humanPlayer.nextPack.cards.length&&this.state.packNumber<3){this.humanPlayer.openPack();var u=this.computerPlayers,l=Array.isArray(u),h=0;for(u=l?u:u[Symbol.iterator]();;){var f;if(l){if(h>=u.length)break;f=u[h++]}else{if((h=u.next()).done)break;f=h.value}f.openPack()}this.passDirection="left"===this.passDirection?"right":"left",this.setState({packNumber:this.state.packNumber+1})}this.updatePackState(),this.updatePicksState(),this.setState({computerColorPreferences:this.computerPlayers.map(function(e){return e.getColorPreferences()}),computerPicks:this.computerPlayers.map(function(e){return e.picks})})},n.moveFromPicksToSideboard=function(e){this.humanPlayer.moveFromPicksToSideboard(e),this.updatePackState(),this.updatePicksState(),this.updateSideboardState()},n.moveFromSideboardToPicks=function(e){this.humanPlayer.moveFromSideboardToPicks(e),this.updatePackState(),this.updatePicksState(),this.updateSideboardState()},n.updatePackState=function(){var e=this;this.setState({pack:this.humanPlayer.nextPack.cards.map(function(t){return e.cardPicker.evaluateCard(e.humanPlayer.picks,t)})})},n.updatePicksState=function(){this.setState({picks:this.humanPlayer.picks})},n.updateSideboardState=function(){this.setState({sideboard:this.humanPlayer.sideboard})},n.toggleAIPicks=function(){this.setState({showAIPicks:!this.state.showAIPicks})},n.getCardPickElement=function(e){var t=this;return a.a.createElement(H,{key:e.card.uuid,onClick:function(){t.makePick(e.card)},imageUrl:e.card.imageUrl})},n.handleMouseEnterPileCard=function(e){this.setState({hoveredCardUrl:e.imageUrl})},n.handleMouseLeavePileCard=function(){this.setState({hoveredCardUrl:null})},t}(a.a.Component),V=(n(201),n(202)),J=n.n(V),q=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isClient:!1,selectedTabIndex:n.getDefaultSelectedTabIndex(n.props.content)},n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({isClient:!0})},n.render=function(){var e=this;return this.state.isClient?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:J.a.tabsBar},a.a.createElement("h2",{className:J.a.header},this.props.header),a.a.createElement("div",{className:J.a.tabs},this.props.content.map(function(t,n){return a.a.createElement("button",{className:J.a.tabButton+" "+(e.state.selectedTabIndex===n?J.a.selected:""),onClick:function(){return e.onTabClick(t.urlHash,n)},key:n},t.name)}))),a.a.createElement("div",{className:J.a.content},this.props.content.map(function(t,n){return a.a.createElement("div",{className:J.a.tabContent+" "+(e.state.selectedTabIndex===n?J.a.selected:""),key:n},t.content)}))):null},n.getDefaultSelectedTabIndex=function(e){var t="undefined"!=typeof window&&window;if(!t)return 0;var n=t.location.hash,r=e.findIndex(function(e){return e.urlHash===n});return-1!==r?r:0},n.onTabClick=function(e,t){var n="undefined"!=typeof window&&window;n&&n.history.replaceState(void 0,void 0,e),this.setState({selectedTabIndex:t})},t}(a.a.Component);function K(){var e=[{name:"Card Image Gallery",content:a.a.createElement(g,null),urlHash:"#cards"},{name:"Draft Simulator",content:a.a.createElement(X,null),urlHash:"#draftsim"}];return a.a.createElement(i.a,{pageTitle:"Terra 2170"},a.a.createElement(q,{header:"Terra 2170",content:e}))}function Z(){return a.a.createElement(K,null)}n.d(t,"default",function(){return Z})},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Lost in Space"}}}}},145:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7CAAAOwgEVKEqAAAACo0lEQVQ4y12VX2iNcRjHD9uujLAw+XtBbRIXQhRpZPmTsEZyJRbicEW7QEvcMXekrF1IacKSlIvhUHPBJDPy5wItTN7jnJ2dI5wTn6/zvG9P71uf8/x5f+/zPL/n9+ck0ul0Qk8QBKMS9qC34K9LuAd7NFR6n74Jv1Mc9GiwD3YDuwRz0KuQ+6AL/RXyEwzABVjsk9m35chhlcjbOL/BGPR1yK9/7cE+gb0GuUvB5UN2Y4/zQaVUmDwGv6CKgXstyGWYj61EL9Dr4RAMwxXoBRVQaxVGQWeBMq5ENmQyGQX7ib3TtaLfknyADW6613jXl4g1/DzOXtOzkLSq2mAB9ntQD+9Dv0tSid1uiQ5GK4XxGbkFmmHIAp+FP/ADLsFE82vqnTY+h/4MOuDN/ynzU2c9mWDldyFbFSybzSrzithsdltFARwxX43NbJGMjarQVjtVLBY1+DVsgo/QYh/NAG2p79aCnliiQdgmZbs+dNPpcIOS8BaOqmKqf4ycB9NsR6zSfoWHpVJJi9qkjxoh7NsjbZ/49BiYha2xU9Jp/VXFd0D9bNCL2SgjMBVOwlN8quKJ9emqtaTGklTyvhWG8/m82rMUFqbLz6Qw2zuMAzAZilokfAo004J0W/WN+HX8hmyDa3dMR96Cm778466PF1VZrOFr3RE87fzaMvdUGjHm+oDVtuyHbeCALZC2VDvvRyzRS7gO1Tb1QUuyIzrG7iw3FQoFvVxiSXpcVUm3dbTqBZNa6eb45RAZulEs6HoLuhlS1rPA9t+X8gwDXWFj/QXjpxzdiZp2LpdTUJ2YWncSlsFqxtabb7zGuiNZvgbDW9ZXahdCys5yH5zDtx/2oJ+CB/DbttiU+I0fBZWECreKCtwGd21Fn9uNc4Zxy/1fQaj/A+qe+Sm7w0dhAAAAAElFTkSuQmCC",aspectRatio:1,src:"/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/ec466/icon.png",srcSet:"/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/f3397/icon.png 64w,\n/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/960ff/icon.png 128w,\n/LostInSpace/static/e512a78e4f1b821a143f7ff97ddb8676/ec466/icon.png 256w",sizes:"(max-width: 256px) 100vw, 256px"}}}}}},148:function(e,t,n){"use strict";var r=n(144),a=n(0),i=n.n(a),o=n(149),c=n.n(o),s=n(141),u=n(145),l=n(146),h=n.n(l);function f(){return i.a.createElement(s.b,{query:"1158076013",render:function(e){return i.a.createElement(h.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:u})}var d=n(150),m=n.n(d);function p(e){var t=e.siteTitle;return i.a.createElement("div",{className:m.a.header},i.a.createElement("div",{className:m.a.container},i.a.createElement(s.a,{to:"/",className:m.a.homeLink},i.a.createElement("div",{className:m.a.headerIcon},i.a.createElement(f,null)),i.a.createElement("h1",null,t))))}n(151);function g(e){var t=e.pageTitle,n=e.children;return i.a.createElement(s.b,{query:"2262439644",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:t?t+" · Lost in Space":"Lost in Space"},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"layout-page-container"},n))},data:r})}n.d(t,"a",function(){return g})},164:function(e,t,n){var r=n(5),a=n(18),i=n(32),o=n(165),c=n(23).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:o.f(e)})}},165:function(e,t,n){t.f=n(3)},166:function(e,t,n){var r=n(75),a=n(52).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},190:function(e,t,n){n(164)("asyncIterator")},191:function(e,t,n){"use strict";var r=n(5),a=n(25),i=n(16),o=n(13),c=n(17),s=n(161).KEY,u=n(24),l=n(51),h=n(36),f=n(31),d=n(3),m=n(165),p=n(164),g=n(192),k=n(77),v=n(10),y=n(11),P=n(30),b=n(71),E=n(50),C=n(78),w=n(193),S=n(194),z=n(23),O=n(33),A=S.f,M=z.f,N=w.f,x=r.Symbol,F=r.JSON,B=F&&F.stringify,R=d("_hidden"),I=d("toPrimitive"),L={}.propertyIsEnumerable,T=l("symbol-registry"),D=l("symbols"),U=l("op-symbols"),j=Object.prototype,G="function"==typeof x,H=r.QObject,W=!H||!H.prototype||!H.prototype.findChild,Q=i&&u(function(){return 7!=C(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=A(j,t);r&&delete j[t],M(e,t,n),r&&e!==j&&M(j,t,r)}:M,X=function(e){var t=D[e]=C(x.prototype);return t._k=e,t},V=G&&"symbol"==typeof x.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof x},J=function(e,t,n){return e===j&&J(U,t,n),v(e),t=b(t,!0),v(n),a(D,t)?(n.enumerable?(a(e,R)&&e[R][t]&&(e[R][t]=!1),n=C(n,{enumerable:E(0,!1)})):(a(e,R)||M(e,R,E(1,{})),e[R][t]=!0),Q(e,t,n)):M(e,t,n)},q=function(e,t){v(e);for(var n,r=g(t=P(t)),a=0,i=r.length;i>a;)J(e,n=r[a++],t[n]);return e},K=function(e){var t=L.call(this,e=b(e,!0));return!(this===j&&a(D,e)&&!a(U,e))&&(!(t||!a(this,e)||!a(D,e)||a(this,R)&&this[R][e])||t)},Z=function(e,t){if(e=P(e),t=b(t,!0),e!==j||!a(D,t)||a(U,t)){var n=A(e,t);return!n||!a(D,t)||a(e,R)&&e[R][t]||(n.enumerable=!0),n}},Y=function(e){for(var t,n=N(P(e)),r=[],i=0;n.length>i;)a(D,t=n[i++])||t==R||t==s||r.push(t);return r},_=function(e){for(var t,n=e===j,r=N(n?U:P(e)),i=[],o=0;r.length>o;)!a(D,t=r[o++])||n&&!a(j,t)||i.push(D[t]);return i};G||(c((x=function(){if(this instanceof x)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===j&&t.call(U,n),a(this,R)&&a(this[R],e)&&(this[R][e]=!1),Q(this,e,E(1,n))};return i&&W&&Q(j,e,{configurable:!0,set:t}),X(e)}).prototype,"toString",function(){return this._k}),S.f=Z,z.f=J,n(166).f=w.f=Y,n(69).f=K,n(72).f=_,i&&!n(32)&&c(j,"propertyIsEnumerable",K,!0),m.f=function(e){return X(d(e))}),o(o.G+o.W+o.F*!G,{Symbol:x});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)d($[ee++]);for(var te=O(d.store),ne=0;te.length>ne;)p(te[ne++]);o(o.S+o.F*!G,"Symbol",{for:function(e){return a(T,e+="")?T[e]:T[e]=x(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in T)if(T[t]===e)return t},useSetter:function(){W=!0},useSimple:function(){W=!1}}),o(o.S+o.F*!G,"Object",{create:function(e,t){return void 0===t?C(e):q(C(e),t)},defineProperty:J,defineProperties:q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Y,getOwnPropertySymbols:_}),F&&o(o.S+o.F*(!G||u(function(){var e=x();return"[null]"!=B([e])||"{}"!=B({a:e})||"{}"!=B(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(y(t)||void 0!==e)&&!V(e))return k(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!V(t))return t}),r[1]=t,B.apply(F,r)}}),x.prototype[I]||n(12)(x.prototype,I,x.prototype.valueOf),h(x,"Symbol"),h(Math,"Math",!0),h(r.JSON,"JSON",!0)},192:function(e,t,n){var r=n(33),a=n(72),i=n(69);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,c=n(e),s=i.f,u=0;c.length>u;)s.call(e,o=c[u++])&&t.push(o);return t}},193:function(e,t,n){var r=n(30),a=n(166).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?function(e){try{return a(e)}catch(t){return o.slice()}}(e):a(r(e))}},194:function(e,t,n){var r=n(69),a=n(50),i=n(30),o=n(71),c=n(25),s=n(74),u=Object.getOwnPropertyDescriptor;t.f=n(16)?u:function(e,t){if(e=i(e),t=o(t,!0),s)try{return u(e,t)}catch(n){}if(c(e,t))return a(!r.f.call(e,t),e[t])}},195:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},201:function(e,t,n){"use strict";var r=n(13),a=n(76)(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(37)(i)}}]);
//# sourceMappingURL=component---src-pages-terra-index-js-c049d95dab3a3a9cd346.js.map