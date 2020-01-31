goog.module('org.treblereel.gwt.crysknife.client.EntryPoint$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.EntryPoint.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class EntryPoint {
 /** @return {EntryPoint} */
 static $adapt(/** ?function():Class<?> */ fn) {
  EntryPoint.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EntryPoint.$clinit = () =>{};
  EntryPoint.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_client_EntryPoint = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_EntryPoint;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.treblereel.gwt.crysknife.client.EntryPoint.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(EntryPoint, 'org.treblereel.gwt.crysknife.client.EntryPoint');

EntryPoint.$markImplementor(/** @type {Function} */ (EntryPoint));

exports = EntryPoint; 
//# sourceMappingURL=EntryPoint.js.map