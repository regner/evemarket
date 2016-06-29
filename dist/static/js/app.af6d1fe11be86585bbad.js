webpackJsonp([1,0],[function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=r(53),o=i(a),s=r(52),n=i(s),u=r(27),d=i(u),l=r(40),p=i(l),c=r(1);o["default"].use(n["default"]),o["default"].use(d["default"]),o["default"].filter("isk",c.isk),o["default"].filter("formattedNumber",c.formattedNumber),new o["default"]({el:"body",components:{App:p["default"]}})},function(t,e){"use strict";function r(t){return t.toLocaleString("us",{minimumFractionDigits:2,maximumFractionDigits:2})+" ISK"}function i(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}Object.defineProperty(e,"__esModule",{value:!0}),e.isk=r,e.formattedNumber=i},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(44),o=i(a),s=r(41),n=i(s),u="https://crest-tq.eveonline.com/";e["default"]={name:"app",components:{Navigation:o["default"],Content:n["default"]},data:function(){return{regions:[],marketGroupsLookup:{},marketGroupsList:[],regionsLoaded:!1,groupsLoaded:!1,allLoaded:!1,selectedType:null,typeData:null}},watch:{regionsLoaded:function(t,e){this.groupsLoaded===!0&&(this.allLoaded=!0)},groupsLoaded:function(t,e){this.regionsLoaded===!0&&(this.allLoaded=!0)},selectedType:function(t,e){window.history.pushState("","","?type="+t),this.updateType()}},created:function(){var t=window.location.href,e=/type=([^&]+)/.exec(t);e&&(this.selectedType=e[1],this.updateType()),this.$http.get(u).then(function(t){this.getMarketGroups(t.data.marketGroups.href),this.getRegions(t.data.regions.href)})},methods:{getRegions:function(t){this.$http.get(t).then(function(t){for(var e=0;e<t.data.items.length;e++)t.data.items[e].id<11e6&&this.regions.push(t.data.items[e]);this.regionsLoaded=!0})},getMarketGroups:function(t){this.$http.get(t).then(function(t){for(var e=0;e<t.data.items.length;e++)t.data.items[e].hasOwnProperty("children")||(t.data.items[e].children=[]),t.data.items[e].typesDownloaded=!1,this.marketGroupsLookup[t.data.items[e].id]=t.data.items[e];for(var r in this.marketGroupsLookup){var i=this.marketGroupsLookup[r];i.hasOwnProperty("parentGroup")?this.marketGroupsLookup[i.parentGroup.id].children.push(i):this.marketGroupsList.push(i)}this.marketGroupsList.sort(function(t,e){var r=t.name.toLowerCase(),i=e.name.toLowerCase();return r<i?-1:r>i?1:0}),this.groupsLoaded=!0})},updateType:function(){this.$http.get(this.selectedType).then(function(t){var e={};t.data.dogma.attributes.forEach(function(t){e[t.attribute.id]=t}),t.data.dogma.attributeLookup=e,this.typeData=t.data})}}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(48),o=i(a),s=r(51),n=i(s),u=r(50),d=i(u),l=r(49),p=i(l);e["default"]={name:"Content",components:{TypeHeader:o["default"],TypeOrders:n["default"],TypeInfo:d["default"],TypeHistory:p["default"]},props:["selectedType","typeData"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=[113,271,267],i=[111,272,268],a=[109,273,269],o=[110,274,270];e["default"]={name:"DogmaAttributeResistance",data:function(){return{isEM:!1,isExplosive:!1,isKinetic:!1,isThermal:!1}},props:["attributeUrl","value","id"],created:function(){this.$http.get(this.attributeUrl).then(function(t){})},computed:{computedValue:function(){return(100*(1-this.value)).toFixed(0)},resistanceStyle:function(){return r.indexOf(this.id)>-1?"emResistance":o.indexOf(this.id)>-1?"thermalResistance":i.indexOf(this.id)>-1?"explosiveResistance":a.indexOf(this.id)>-1?"kineticResistance":void console.log("Attempted to add a dogmaAttributeResistance with invalid id of "+this.id)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"DogmaAttributeStandard",data:function(){return{name:null}},props:["attributeUrl","value"],created:function(){this.$http.get(this.attributeUrl).then(function(t){this.name=t.data.displayName})}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(45),o=i(a);e["default"]={name:"Navigation",components:{NavigationGroup:o["default"]},props:["marketGroupsList","selectedType"]}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(46),o=i(a);e["default"]={name:"NavigationGroup",components:{NavigationItem:o["default"]},props:["group","selectedType"],data:function(){return{open:!1}},methods:{toggle:function(){this.group.typesDownloaded||0!==this.group.children.length||(this.group.typeChildren=[],this.$http.get(this.group.types.href).then(function(t){for(var e=0;e<t.data.items.length;e++)this.group.typeChildren.push(t.data.items[e]);this.group.typesDownloaded=!0})),this.group.children.sort(function(t,e){var r=t.name.toLowerCase(),i=e.name.toLowerCase();return r<i?-1:r>i?1:0}),this.open=!this.open}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"NavigationItem",props:["item","selectedType"],computed:{imageUrl:function(){return"https://image.eveonline.com/Type/"+this.item.type.id+"_32.png"}},methods:{selected:function(){this.selectedType=this.item.type.href}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"OrdersTable",props:["orders"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"TypeHeader",props:["typeData"],computed:{imageUrl:function(){return"https://image.eveonline.com/Type/"+this.typeData.id+"_64.png"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="https://crest-tq.eveonline.com/market/10000002/history/";e["default"]={name:"TypeHistory",data:function(){return{columns:[{type:"string",label:"Date"},{type:"number",label:"Average Price"},{type:"number",label:"High Price"},{type:"number",label:"Low Price"},{type:"number",label:"Volume"}],rows:null,options:{title:"Market History",seriesType:"bars",series:{0:{type:"line"},1:{type:"line"},2:{type:"line"},3:{type:"bar",targetAxisIndex:2}},vAxes:{1:{title:""},2:{title:""}},width:1200,height:400}}},props:["selectedType"],watch:{selectedType:function(){this.updateHistory()}},created:function(){this.selectedType&&this.updateHistory()},methods:{updateHistory:function(){var t=[];this.$http.get(r,{type:this.selectedType}).then(function(e){e.data.items.forEach(function(e){var r=e.date.substring(0,10);t.push([r,e.avgPrice,e.highPrice,e.lowPrice,e.volume])}),this.rows=t})}}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(43),o=i(a),s=r(42),n=i(s),u=[161,9,38,4,1271,283],d=[109,110,111,113],l=[265],p=[267,268,269,270],c=[263,479],f=[271,272,273,274],h=[55,482],v=[76,79,192,552,564],b=[37,1281,600],m=[48,11,12,13,14,1137,1132,101,102];e["default"]={name:"TypeInfo",components:{DogmaAttributeStandard:o["default"],DogmaAttributeResistance:n["default"]},data:function(){return{localStructureAttributes:[],localStructureResistances:[],localArmorAttributes:[],localArmorResistances:[],localShieldAttributes:[],localShieldResistances:[],localCapacitorAttributes:[],localTargetingAttributes:[],localPropulsionAttributes:[],localFittingAttributes:[]}},props:["typeData"],watch:{typeData:function(){this.updateAttributes()}},created:function(){this.typeData&&this.updateAttributes()},methods:{updateAttributes:function(){var t=[],e=[],r=[],i=[],a=[],o=[],s=[],n=[],y=[],g=[];this.typeData.dogma.attributes.forEach(function(x){var _=x.attribute.id;u.indexOf(_)>-1?t.push(x):d.indexOf(_)>-1?e.push(x):l.indexOf(_)>-1?r.push(x):p.indexOf(_)>-1?i.push(x):c.indexOf(_)>-1?a.push(x):f.indexOf(_)>-1?o.push(x):h.indexOf(_)>-1?s.push(x):v.indexOf(_)>-1?n.push(x):b.indexOf(_)>-1?y.push(x):m.indexOf(_)>-1?g.push(x):console.log("Unused dogma attribute: "+x.attribute.name+"("+x.attribute.id+") with value "+x.value)}),this.localStructureAttributes=t,this.localStructureResistances=e,this.localArmorAttributes=r,this.localArmorResistances=i,this.localShieldAttributes=a,this.localShieldResistances=o,this.localCapacitorAttributes=s,this.localTargetingAttributes=n,this.localPropulsionAttributes=y,this.localFittingAttributes=g}}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(47),o=i(a),s="https://crest-tq.eveonline.com/market/10000002/orders/";e["default"]={name:"TypeOrders",components:{OrdersTable:o["default"]},data:function(){return{buyOrders:[],sellOrders:[]}},props:["selectedType"],watch:{selectedType:function(){this.updateOrders()}},created:function(){this.selectedType&&this.updateOrders()},methods:{updateOrders:function(){this.buyOrders=[],this.sellOrders=[],this.$http.get(s,{type:this.selectedType}).then(function(t){var e=[],r=[];t.data.items.forEach(function(t,i,a){t.buy?e.push(t):r.push(t)}),e.sort(function(t,e){return t.price>e.price?-1:t.price<e.price?1:0}),r.sort(function(t,e){return t.price<e.price?-1:t.price>e.price?1:0}),this.buyOrders=e,this.sellOrders=r})}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports='<div class=container-fluid> <div class=row v-if=allLoaded> <div class=col-sm-3> <navigation v-bind:market-groups-list=marketGroupsList v-bind:selected-type.sync=selectedType></navigation> </div> <div class=col-sm-9> <content v-bind:selected-type=selectedType v-bind:type-data=typeData></content> </div> </div> <div v-else> <div class="progress-bar progress-bar-striped active" role=progressbar aria-valuenow=100 aria-valuemin=0 aria-valuemax=100 style="width: 100%">Loading...</div> </div> </div>'},function(t,e){t.exports='<type-header v-bind:type-data=typeData></type-header> <ul class="nav nav-tabs" role=tablist> <li class=nav-item> <a class="nav-link active" data-toggle=tab href=#orders role=tab>Orders</a> </li> <li class=nav-item> <a class=nav-link data-toggle=tab href=#history role=tab>History</a> </li> <li class=nav-item> <a class=nav-link data-toggle=tab href=#info role=tab>Info</a> </li> </ul> <div class=tab-content> <div class="tab-pane active" id=orders role=tabpanel><type-orders v-bind:selected-type=selectedType></type-orders></div> <div class=tab-pane id=history role=tabpanel><type-history v-bind:selected-type=selectedType></type-history></div> <div class=tab-pane id=info role=tabpanel><type-info v-bind:type-data=typeData></type-info></div> </div>'},function(t,e){t.exports="<div class=dogmaAttributeResistance v-bind:class=resistanceStyle> <div class=resistanceInner v-bind:style=\"{width: computedValue + '%'}\">{{ computedValue }}%</div> </div>"},function(t,e){t.exports="<li>{{ name }}<span class=pull-right>{{ value | formattedNumber }}</span></li>"},function(t,e){t.exports='<div> <ul> <navigation-group v-for="mg in marketGroupsList" v-bind:group=mg v-bind:selected-type.sync=selectedType></navigation-group> </ul> </div>'},function(t,e){t.exports='<li> <label v-on:click=toggle><span class="glyphicon {{open ? \'glyphicon-chevron-down\' : \'glyphicon-chevron-right\'}}"></span> {{ group.name }}</label> <ul v-show=open> <navigation-group v-for="mg in group.children" v-bind:group=mg v-bind:selected-type.sync=selectedType></navigation-group> <div v-if=group.typesDownloaded> <navigation-item v-for="item in group.typeChildren" v-bind:item=item v-bind:selected-type.sync=selectedType> </navigation-item></div> </ul> </li>'},function(t,e){t.exports="<li v-on:click=selected> <img width=16 height=16 v-bind:src=imageUrl> <label>{{ item.type.name }}</label> </li>"},function(t,e){t.exports='<table class="table orders table-condensed table-hover"> <thead> <tr> <th class=text-sm-center>Location</th> <th class=text-sm-center>Price</th> <th class=text-sm-center>Quantity</th> </tr> </thead> <tbody> <tr v-for="order in orders"> <td>{{ order.location.name }}</td> <td class=text-sm-right>{{ order.price | isk }}</td> <td class=text-sm-right>{{ order.volume }}</td> </tr> </tbody> </table>'},function(t,e){t.exports="<h2 v-if=typeData><img v-bind:src=imageUrl> {{ typeData.name }}</h2> <h2 v-else>Please select a type</h2>"},function(t,e){t.exports="<div v-if=rows> <vue-chart chart-type=ComboChart v-bind:columns=columns v-bind:rows=rows v-bind:options=options> </vue-chart> </div> <div v-else>Please select a type</div>"},function(t,e){t.exports='<div v-if=typeData> <p>{{ typeData.description }}</p> <h4>Structure</h4> <ul> <dogma-attribute-standard v-for="attr in localStructureAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> <dogma-attribute-resistance v-for="attr in localStructureResistances" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value v-bind:id=attr.attribute.id></dogma-attribute-resistance> </ul> <h4>Armor</h4> <ul> <dogma-attribute-standard v-for="attr in localArmorAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> <dogma-attribute-resistance v-for="attr in localArmorResistances" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value v-bind:id=attr.attribute.id></dogma-attribute-resistance> </ul> <h4>Shield</h4> <ul> <dogma-attribute-standard v-for="attr in localShieldAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> <li><dogma-attribute-resistance v-for="attr in localShieldResistances" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value v-bind:id=attr.attribute.id></dogma-attribute-resistance></li> </ul> <h4>Capacitor</h4> <ul> <dogma-attribute-standard v-for="attr in localCapacitorAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> </ul> <h4>Targeting</h4> <ul> <dogma-attribute-standard v-for="attr in localTargetingAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> </ul> <h4>Propulsion</h4> <ul> <dogma-attribute-standard v-for="attr in localPropulsionAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> </ul> <h4>Fitting</h4> <ul> <dogma-attribute-standard v-for="attr in localFittingAttributes" v-bind:attribute-url=attr.attribute.href v-bind:value=attr.value></dogma-attribute-standard> </ul> </div> <div v-else>Please select a type</div>'},function(t,e){t.exports="<h3>Sell Orders</h3> <orders-table v-bind:orders=sellOrders></orders-table> <h3>Buy Orders</h3> <orders-table v-bind:orders=buyOrders></orders-table>"},function(t,e,r){var i,a;r(16),i=r(2),a=r(28),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(17),i=r(3),a=r(29),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(14),i=r(4),a=r(30),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(18),i=r(5),a=r(31),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(15),i=r(6),a=r(32),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(19),i=r(7),a=r(33),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(20),i=r(8),a=r(34),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(21),i=r(9),a=r(35),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(22),i=r(10),a=r(36),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(23),i=r(11),a=r(37),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(24),i=r(12),a=r(38),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,r){var i,a;r(25),i=r(13),a=r(39),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)}]);
//# sourceMappingURL=app.af6d1fe11be86585bbad.js.map