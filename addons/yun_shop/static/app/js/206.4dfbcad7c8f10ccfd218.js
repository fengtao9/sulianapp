webpackJsonp([206],{"+ozO":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},Crck:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{cTitle:a("Pexp").a},data:function(){return{language:{}}},methods:{initLang:function(){sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).addOrder:this.language=this.$store.state.service.languageService.addOrder}},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(e){this.language=e?JSON.parse(sessionStorage.languageService).addOrder:this.$store.state.service.languageService.addOrder}},mounted:function(){this.initLang()},activated:function(){this.$store.commit("onload")}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:"changeAgreement"+this.$store.state.service.lang,attrs:{id:"changeAgreement"}},[t("c-title",{attrs:{hide:!1,text:"改退协议"}}),this._v(" "),t("div",{staticStyle:{height:"40px"}}),this._v(" "),t("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis autem eaque facere omnis amet laboriosam nihil odio quas repellat at fugiat debitis vero ea eum deserunt doloribus maxime adipisci ab! \n\t\t")])],1)},staticRenderFns:[]};var n=a("VU/8")(i,s,!1,function(e){a("y0p9")},"data-v-c995a12e",null);t.default=n.exports},y0p9:function(e,t,a){var i=a("+ozO");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("4992f39c",i,!0,{})}});