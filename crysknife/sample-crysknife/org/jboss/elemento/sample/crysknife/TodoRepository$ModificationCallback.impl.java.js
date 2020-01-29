goog.module('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ModificationCallback {
 /**
  * @abstract
  * @public
  */
 m_execute__() {}
 /**
  * @param {?function():void} fn
  * @return {ModificationCallback}
  * @public
  */
 static $adapt(fn) {
  ModificationCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ModificationCallback.$clinit = () =>{};
  ModificationCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ModificationCallback, 'org.jboss.elemento.sample.crysknife.TodoRepository$ModificationCallback');

ModificationCallback.$markImplementor(/** @type {Function} */ (ModificationCallback));

exports = ModificationCallback; 
//# sourceMappingURL=TodoRepository$ModificationCallback.js.map