goog.module('org.treblereel.gwt.crysknife.client.Instance$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template T
 */
class Instance {
 /**
  * @abstract
  * @template T_1
  * @return {T_1}
  * @public
  */
 m_get__() {}
 /**
  * @abstract
  * @param {T} var1
  * @public
  */
 m_destroy__java_lang_Object(var1) {}
 /**
  * @abstract
  * @public
  */
 m_destroyAll__() {}
 /**
  * @public
  */
 static $clinit() {
  Instance.$clinit = () =>{};
  Instance.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_client_Instance = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_Instance;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Instance, 'org.treblereel.gwt.crysknife.client.Instance');

Instance.$markImplementor(/** @type {Function} */ (Instance));

exports = Instance; 
//# sourceMappingURL=Instance.js.map