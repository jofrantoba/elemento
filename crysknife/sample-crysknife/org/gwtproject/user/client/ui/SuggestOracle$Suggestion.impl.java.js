goog.module('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Suggestion {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getDisplayString__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getReplacementString__() {}
 /**
  * @public
  */
 static $clinit() {
  Suggestion.$clinit = () =>{};
  Suggestion.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_SuggestOracle_Suggestion = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_SuggestOracle_Suggestion;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Suggestion, 'org.gwtproject.user.client.ui.SuggestOracle$Suggestion');

Suggestion.$markImplementor(/** @type {Function} */ (Suggestion));

exports = Suggestion; 
//# sourceMappingURL=SuggestOracle$Suggestion.js.map