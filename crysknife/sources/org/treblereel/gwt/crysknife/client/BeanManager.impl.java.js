goog.module('org.treblereel.gwt.crysknife.client.BeanManager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Instance = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Instance$impl');

/**
 * @interface
 */
class BeanManager {
 /**
  * @abstract
  * @param {*} ref
  * @public
  */
 m_destroyBean__java_lang_Object(ref) {}
 /**
  * @abstract
  * @template T
  * @param {Class} type
  * @param {Class<?>} qualifier
  * @return {Instance<T>}
  * @public
  */
 m_lookupBean__java_lang_Class__java_lang_Class(type, qualifier) {}
 /**
  * @abstract
  * @template T
  * @param {Class} type
  * @return {Instance<T>}
  * @public
  */
 m_lookupBean__java_lang_Class(type) {}
 /**
  * @public
  */
 static $clinit() {
  BeanManager.$clinit = () =>{};
  BeanManager.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_client_BeanManager = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_BeanManager;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BeanManager, 'org.treblereel.gwt.crysknife.client.BeanManager');

BeanManager.$markImplementor(/** @type {Function} */ (BeanManager));

exports = BeanManager; 
//# sourceMappingURL=BeanManager.js.map