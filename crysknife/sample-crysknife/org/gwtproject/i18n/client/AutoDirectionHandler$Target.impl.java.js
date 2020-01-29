goog.module('org.gwtproject.i18n.client.AutoDirectionHandler.Target$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyUpHandlers = goog.require('org.gwtproject.event.dom.client.HasKeyUpHandlers$impl');
const HasDirection = goog.require('org.gwtproject.i18n.client.HasDirection$impl');

/**
 * @interface
 * @extends {HasDirection}
 * @extends {HasKeyUpHandlers}
 */
class Target {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getText__() {}
 /**
  * @abstract
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {}
 /**
  * @public
  */
 static $clinit() {
  Target.$clinit = () =>{};
  Target.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasDirection.$markImplementor(classConstructor);
  HasKeyUpHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_AutoDirectionHandler_Target = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_AutoDirectionHandler_Target;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Target, 'org.gwtproject.i18n.client.AutoDirectionHandler$Target');

Target.$markImplementor(/** @type {Function} */ (Target));

exports = Target; 
//# sourceMappingURL=AutoDirectionHandler$Target.js.map