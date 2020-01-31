goog.module('org.treblereel.gwt.crysknife.client.BeanManager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Instance = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Instance$impl');

/**
 * @interface
 */
class BeanManager {
 /** @abstract */
 m_destroyBean__java_lang_Object(/** * */ ref) {}
 /** @abstract @template T @return {Instance<T>} */
 m_lookupBean__java_lang_Class__java_lang_Class(/** Class */ type, /** Class<?> */ qualifier) {}
 /** @abstract @template T @return {Instance<T>} */
 m_lookupBean__java_lang_Class(/** Class */ type) {}
 
 static $clinit() {
  BeanManager.$clinit = () =>{};
  BeanManager.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_client_BeanManager = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_BeanManager;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BeanManager, 'org.treblereel.gwt.crysknife.client.BeanManager');

BeanManager.$markImplementor(/** @type {Function} */ (BeanManager));

exports = BeanManager; 
//# sourceMappingURL=BeanManager.js.map