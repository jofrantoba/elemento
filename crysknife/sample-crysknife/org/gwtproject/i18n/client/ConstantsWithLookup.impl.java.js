goog.module('org.gwtproject.i18n.client.ConstantsWithLookup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Constants = goog.require('org.gwtproject.i18n.client.Constants$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');

/**
 * @interface
 * @extends {Constants}
 */
class ConstantsWithLookup {
 /**
  * @abstract
  * @param {?string} methodName
  * @return {boolean}
  * @public
  */
 m_getBoolean__java_lang_String(methodName) {}
 /**
  * @abstract
  * @param {?string} methodName
  * @return {number}
  * @public
  */
 m_getDouble__java_lang_String(methodName) {}
 /**
  * @abstract
  * @param {?string} methodName
  * @return {number}
  * @public
  */
 m_getFloat__java_lang_String(methodName) {}
 /**
  * @abstract
  * @param {?string} methodName
  * @return {number}
  * @public
  */
 m_getInt__java_lang_String(methodName) {}
 /**
  * @abstract
  * @param {?string} methodName
  * @return {Map<?string, ?string>}
  * @public
  */
 m_getMap__java_lang_String(methodName) {}
 /**
  * @abstract
  * @param {?string} methodName
  * @return {?string}
  * @public
  */
 m_getString__java_lang_String(methodName) {}
 /**
  * @abstract
  * @param {?string} methodName
  * @return {Array<?string>}
  * @public
  */
 m_getStringArray__java_lang_String(methodName) {}
 /**
  * @public
  */
 static $clinit() {
  ConstantsWithLookup.$clinit = () =>{};
  ConstantsWithLookup.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Constants.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_ConstantsWithLookup = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_ConstantsWithLookup;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ConstantsWithLookup, 'org.gwtproject.i18n.client.ConstantsWithLookup');

ConstantsWithLookup.$markImplementor(/** @type {Function} */ (ConstantsWithLookup));

exports = ConstantsWithLookup; 
//# sourceMappingURL=ConstantsWithLookup.js.map