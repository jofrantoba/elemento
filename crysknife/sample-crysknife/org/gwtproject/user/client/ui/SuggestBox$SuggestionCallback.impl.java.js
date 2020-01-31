goog.module('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback.$LambdaAdaptor$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @interface
 */
class SuggestionCallback {
 /** @abstract */
 m_onSuggestionSelected__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(/** Suggestion */ suggestion) {}
 /** @return {SuggestionCallback} */
 static $adapt(/** ?function(Suggestion):void */ fn) {
  SuggestionCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SuggestionCallback.$clinit = () =>{};
  SuggestionCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuggestionCallback, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionCallback');

SuggestionCallback.$markImplementor(/** @type {Function} */ (SuggestionCallback));

exports = SuggestionCallback; 
//# sourceMappingURL=SuggestBox$SuggestionCallback.js.map