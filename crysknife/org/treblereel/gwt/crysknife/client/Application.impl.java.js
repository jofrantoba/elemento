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
 /**
  * @param {?function():Class<?>} fn
  * @return {Application}
  * @public
  */
 static $adapt(fn) {
  Application.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Application.$clinit = () =>{};
  Application.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_client_Application = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_Application;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.treblereel.gwt.crysknife.client.Application.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Application, 'org.treblereel.gwt.crysknife.client.Application');

Application.$markImplementor(/** @type {Function} */ (Application));

exports = Application; 
//# sourceMappingURL=Application.js.map