goog.module('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SuggestionCallback = goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');

let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @implements {SuggestionCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Suggestion):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Suggestion):void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$LambdaAdaptor__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$LambdaAdaptor__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$JsFunction(/** ?function(Suggestion):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$LambdaAdaptor = fn;
 }
 
 m_onSuggestionSelected__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(/** Suggestion */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionCallback$$LambdaAdaptor');

SuggestionCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SuggestBox$SuggestionCallback$$LambdaAdaptor.js.map