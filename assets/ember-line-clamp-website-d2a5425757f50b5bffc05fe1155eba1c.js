"use strict"
define("ember-line-clamp-website/app",["exports","ember-line-clamp-website/resolver","ember-load-initializers","ember-line-clamp-website/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var l=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,n.default)(l,a.default.modulePrefix),e.default=l}),define("ember-line-clamp-website/components/code-snippet",["exports","ember-line-clamp-website/snippets"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=self.require("highlight.js")
e.default=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var t,n,a=e.split("\n").filter(function(e){return""!==e}),l=0;l<a.length;l++)(t=/^[ \t]*/.exec(a[l]))&&(void 0===n||n>t[0].length)&&(n=t[0].length)
return void 0!==n&&n>0&&(e=e.replace(new RegExp("^[ \t]{"+n+"}","gm"),"")),e},source:Ember.computed("name",function(){return this._unindent((t.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){n.highlightBlock(this.get("element"))},language:Ember.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("ember-line-clamp-website/components/fancy-line-clamp",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({lines:3,didRender:function(){if(!this.keepButton){var e=this.element.querySelector(".lt-line-clamp__line--last .lt-line-clamp__ellipsis")
this.set("showFancyButton",!!e),this.keepButton=!!e}},actions:{onButtonClick:function(){this.get("onClick")()}}})}),define("ember-line-clamp-website/components/line-clamp",["exports","ember-line-clamp/components/line-clamp"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-line-clamp-website/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({appName:"Ember Line Clamp"})}),define("ember-line-clamp-website/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({init:function(){this._super.apply(this,arguments),this.text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",this.text2=Ember.String.htmlSafe("Lorem ipsum dolor sit amet,<br/ ><br/> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."),this.text3="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",this.truncate=!0,this.buttonText="Read More"},handleTruncate:function(e){console.log("App - HandleTruncate: ",e)},onCollapse:function(){console.log("App - Collapsed Text")},actions:{onExpand:function(){console.log("App - Expanded text")},onHandleTruncate:function(e){console.log("App - onHandleTruncate: ",e)},toggleTruncate:function(){this.toggleProperty("truncate"),this.set("buttonText","Read More"===this.get("buttonText")?"Read Less":"Read More")},toggleText:function(){this.set("text3",Ember.String.htmlSafe("Luis Torres <br/> <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))}}})}),define("ember-line-clamp-website/helpers/app-version",["exports","ember-line-clamp-website/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=l
var a=t.default.APP.version
function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?a.match(n.versionRegExp)[0]:t.hideVersion?a.match(n.shaRegExp)[0]:a}e.default=Ember.Helper.helper(l)}),define("ember-line-clamp-website/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-line-clamp-website/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-line-clamp-website/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-line-clamp-website/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var a=void 0,l=void 0
n.default.APP&&(a=n.default.APP.name,l=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(a,l)}}),define("ember-line-clamp-website/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-line-clamp-website/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-line-clamp-website/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-line-clamp-website/initializers/export-application-global",["exports","ember-line-clamp-website/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n
function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,l=t.default.exportApplicationGlobal
a="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}e.default={name:"export-application-global",initialize:n}}),define("ember-line-clamp-website/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-line-clamp-website/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-line-clamp-website/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-line-clamp-website/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-line-clamp-website/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-line-clamp-website/router",["exports","ember-line-clamp-website/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("ember-line-clamp-website/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("ember-line-clamp-website/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-line-clamp-website/services/unified-event-handler",["exports","ember-singularity/services/unified-event-handler"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-line-clamp-website/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"example1.hbs":"{{line-clamp\n  text=text2\n  lines=1\n}}\n","example10.hbs":'{{line-clamp\n  text=text\n  interactive=false\n  truncate=truncate\n  useJsOnly=true\n  lines=10\n}}\n{{#if showFancyButton}}\n  <button class="fancy-button" style="display: block; text-align: center;" {{action "toggleTruncate"}}>{{buttonText}}</button>\n{{/if}}\n',"example11.hbs":'{{line-clamp\n  text=text\n  lines=4\n  interactive=false\n  useJsOnly=true\n  ellipsis="😃😃😃"\n}}\n',"example2.hbs":"{{line-clamp\n  text=text2\n  lines=3\n}}\n","example3.hbs":"{{line-clamp\n  text=text\n  showLessButton=false\n}}\n","example4.hbs":'{{line-clamp\n  text=text\n  lines=4\n  onExpand=(action "onExpand")\n  onCollapse=onCollapse\n  handleTruncate=(action "onHandleTruncate")\n}}\n',"example5.hbs":'{{line-clamp\n  text=text\n  lines=3\n  seeMoreText="Read more"\n  seeLessText="Read less"\n}}\n',"example6.hbs":"{{line-clamp\n  text=text\n  lines=1\n  interactive=false\n}}\n","example7.hbs":"{{line-clamp\n  text=text\n  lines=4\n  interactive=false\n}}\n","example8.hbs":"{{line-clamp\n  text=text\n  lines=4\n  interactive=false\n  useJsOnly=true\n}}\n","example9.hbs":'{{line-clamp\n  text=text\n  interactive=false\n  truncate=truncate\n  useJsOnly=true\n}}\n{{#if showFancyButton}}\n  <button class="fancy-button" {{action "toggleTruncate"}}>{{buttonText}}</button>\n{{/if}}\n'}}),define("ember-line-clamp-website/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"c8XRT3ZZ",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","section-content"],[7],[0,"\\n  "],[6,"nav"],[7],[0,"\\n    "],[6,"h1"],[7],[1,[18,"appName"],false],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","section-inner"],[7],[0,"\\n    "],[1,[18,"outlet"],false],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"]],"hasEval":false}',meta:{moduleName:"ember-line-clamp-website/templates/application.hbs"}})}),define("ember-line-clamp-website/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"QDBMU6d3",block:'{"symbols":[],"statements":[[1,[18,"source"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-line-clamp-website/templates/components/code-snippet.hbs"}})}),define("ember-line-clamp-website/templates/components/fancy-line-clamp",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"DcY+07UC",block:'{"symbols":[],"statements":[[1,[25,"line-clamp",null,[["text","classNames","interactive","truncate","useJsOnly","lines"],[[20,["text"]],"example",false,[20,["truncate"]],true,[20,["lines"]]]]],false],[0,"\\n"],[4,"if",[[20,["showFancyButton"]]],null,{"statements":[[0,"  "],[6,"button"],[9,"class","fancy-button"],[3,"action",[[19,0,[]],"onButtonClick"]],[7],[1,[18,"buttonText"],false],[8],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"ember-line-clamp-website/templates/components/fancy-line-clamp.hbs"}})}),define("ember-line-clamp-website/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Tvqw14IM",block:'{"symbols":[],"statements":[[6,"h2"],[7],[0,"A simple example"],[8],[0,"\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s say you wanted to truncate some text with the \\"See more/See less\\" capability. Well this is easy!"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example1.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines"],["example",[20,["text2"]],1]]],false],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s increase the lines to 4"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example2.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines"],["example",[20,["text2"]],3]]],false],[0,"\\n\\n"],[6,"h2"],[7],[0,"What else?"],[8],[0,"\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s prevent users from \\"See less\\""],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example3.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","showLessButton"],["example",[20,["text"]],false]]],false],[0,"\\n\\n"],[6,"h2"],[7],[0,"Can I know when a user clicks?"],[8],[0,"\\n"],[6,"p"],[9,"class","text"],[7],[0,"Of course!"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example4.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines","onExpand","onCollapse","handleTruncate"],["example",[20,["text"]],4,[25,"action",[[19,0,[]],"onExpand"],null],[20,["onCollapse"]],[25,"action",[[19,0,[]],"onHandleTruncate"],null]]]],false],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"Hint: Look at the console while clicking on \\"See more/See less\\" buttons"],[8],[0,"\\n\\n"],[6,"h2"],[7],[0,"Im not a fan of the \\"See more/See less\\" text"],[8],[0,"\\n"],[6,"p"],[9,"class","text"],[7],[0,"No worries, go head and change it"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example5.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines","seeMoreText","seeLessText"],["example",[20,["text"]],3,"Read more","Read less"]]],false],[0,"\\n\\n"],[6,"h2"],[7],[0,"Let\'s see something cool"],[8],[0,"\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s say you wanted to render some text and truncate it to one line. Well you could easily get this done with CSS but we can do the following:"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example6.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines","interactive"],["example",[20,["text"]],1,false]]],false],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"If you inspect the above text you will see that it uses "],[6,"pre"],[9,"style","display: inline;"],[7],[0,"text-overflow: ellipsis;"],[8],[0,". The interactive flag prevents the truncation from being interactive as we will see later."],[8],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s increase the lines to 4"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example7.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines","interactive"],["example",[20,["text"]],4,false]]],false],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"If you are using Chrome you will notice that "],[6,"pre"],[9,"style","display: inline"],[7],[0,"-webkit-line-clamp: 4;"],[8],[0," is used. If you are not on Chrome it will use JS to truncate the text to the specified number of lines."],[8],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s force JS in Chrome as well by using the "],[6,"pre"],[9,"style","display: inline"],[7],[0,"useJsOnly=true"],[8],[0,"."],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example8.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines","interactive","useJsOnly"],["example",[20,["text"]],4,false,true]]],false],[0,"\\n\\n"],[6,"h2"],[7],[0,"Ehh, that\'s not really cool"],[8],[0,"\\n"],[6,"p"],[9,"class","text"],[7],[0,"Well you can control the truncate from outside the component and when JS is used we apply a specific class to the sllipsis element"],[8],[0,"\\n\\n"],[6,"p"],[9,"style","font-size: 24px; text-align: center;"],[7],[0,"🤔🤔🤔"],[8],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"Let\'s try something fancy then"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example9.hbs"]]],false],[0,"\\n"],[1,[25,"fancy-line-clamp",null,[["text","truncate","buttonText","onClick"],[[20,["text"]],[20,["truncate"]],[20,["buttonText"]],[25,"action",[[19,0,[]],"toggleTruncate"],null]]]],false],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"You can use "],[6,"pre"],[9,"style","display: inline"],[7],[0,"querySelector(\'.lt-line-clamp__line-last .lt-line-clamp__ellipsis\')"],[8],[0," and use that to figure out if the fancy button needs to be shown"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example10.hbs"]]],false],[0,"\\n"],[1,[25,"fancy-line-clamp",null,[["text","truncate","buttonText","lines","onClick"],[[20,["text"]],[20,["truncate"]],[20,["buttonText"]],10,[25,"action",[[19,0,[]],"toggleTruncate"],null]]]],false],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"Here we have increased the number of lines and the text has not been truncated, hence no need for the fancy button"],[8],[0,"\\n\\n"],[6,"h2"],[7],[0,"One last thing"],[8],[0,"\\n\\n"],[6,"p"],[9,"class","text"],[7],[0,"We can update the ellipsis element!"],[8],[0,"\\n\\n"],[1,[25,"code-snippet",null,[["name"],["example11.hbs"]]],false],[0,"\\n\\n"],[1,[25,"line-clamp",null,[["classNames","text","lines","interactive","useJsOnly","ellipsis"],["example",[20,["text"]],4,false,true,"😃😃😃"]]],false],[0,"\\n\\n"],[6,"br"],[7],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-line-clamp-website/templates/index.hbs"}})}),define("ember-line-clamp-website/config/environment",[],function(){try{var e="ember-line-clamp-website/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-line-clamp-website/app").default.create({name:"ember-line-clamp-website",version:"0.0.0+80429d6b"})
