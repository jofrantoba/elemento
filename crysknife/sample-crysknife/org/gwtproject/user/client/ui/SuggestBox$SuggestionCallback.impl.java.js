goog.module('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback.$LambdaAdaptor$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @interface
 */
class SuggestionCallback {
 /**
  * @abstract
  * @param {Suggestion} suggestion
  * @public
  */
 m_onSuggestionSelected__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(suggestion) {}
 /**
  * @param {?function(Suggestion):void} fn
  * @return {SuggestionCallback}
  * @public
  */
 static $adapt(fn) {
  SuggestionCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SuggestionCallback.$clinit = () =>{};
  SuggestionCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SuggestionCallback, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionCallback');

SuggestionCallback.$markImplementor(/** @type {Function} */ (SuggestionCallback));

exports = SuggestionCallback; 
//# sourceMappingURL=SuggestBox$SuggestionCallback.js.map