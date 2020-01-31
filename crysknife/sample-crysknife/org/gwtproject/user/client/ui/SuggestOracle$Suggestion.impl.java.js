goog.module('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Suggestion {
 /** @abstract @return {?string} */
 m_getDisplayString__() {}
 /** @abstract @return {?string} */
 m_getReplacementString__() {}
 
 static $clinit() {
  Suggestion.$clinit = () =>{};
  Suggestion.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_SuggestOracle_Suggestion = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_SuggestOracle_Suggestion;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Suggestion, 'org.gwtproject.user.client.ui.SuggestOracle$Suggestion');

Suggestion.$markImplementor(/** @type {Function} */ (Suggestion));

exports = Suggestion; 
//# sourceMappingURL=SuggestOracle$Suggestion.js.map