goog.module('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ModificationCallback {
 /** @abstract */
 m_execute__() {}
 /** @return {ModificationCallback} */
 static $adapt(/** ?function():void */ fn) {
  ModificationCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ModificationCallback.$clinit = () =>{};
  ModificationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ModificationCallback, 'org.jboss.elemento.sample.crysknife.TodoRepository$ModificationCallback');

ModificationCallback.$markImplementor(/** @type {Function} */ (ModificationCallback));

exports = ModificationCallback; 
//# sourceMappingURL=TodoRepository$ModificationCallback.js.map