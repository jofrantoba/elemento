goog.module('org.gwtproject.user.client.TakesValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template V
 */
class TakesValue {
 /**
  * @abstract
  * @param {V} value
  * @public
  */
 m_setValue__java_lang_Object(value) {}
 /**
  * @abstract
  * @return {V}
  * @public
  */
 m_getValue__() {}
 /**
  * @public
  */
 static $clinit() {
  TakesValue.$clinit = () =>{};
  TakesValue.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_TakesValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_TakesValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TakesValue, 'org.gwtproject.user.client.TakesValue');

TakesValue.$markImplementor(/** @type {Function} */ (TakesValue));

exports = TakesValue; 
//# sourceMappingURL=TakesValue.js.map