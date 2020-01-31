goog.module('org.treblereel.gwt.crysknife.client.Application$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Application.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Application {
 /** @return {Application} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Application.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Application.$clinit = () =>{};
  Application.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_gwt_crysknife_client_Application = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_Application;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.treblereel.gwt.crysknife.client.Application.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Application, 'org.treblereel.gwt.crysknife.client.Application');

Application.$markImplementor(/** @type {Function} */ (Application));

exports = Application; 
//# sourceMappingURL=Application.js.map