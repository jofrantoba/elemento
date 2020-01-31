goog.module('org.gwtproject.user.client.TakesValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template V
 */
class TakesValue {
 /** @abstract */
 m_setValue__java_lang_Object(/** V */ value) {}
 /** @abstract @return {V} */
 m_getValue__() {}
 
 static $clinit() {
  TakesValue.$clinit = () =>{};
  TakesValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_TakesValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_TakesValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TakesValue, 'org.gwtproject.user.client.TakesValue');

TakesValue.$markImplementor(/** @type {Function} */ (TakesValue));

exports = TakesValue; 
//# sourceMappingURL=TakesValue.js.map