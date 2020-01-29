goog.module('org.gwtproject.i18n.client.Messages.Optional$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.i18n.client.Messages.Optional.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Optional {
 /**
  * @param {?function():Class<?>} fn
  * @return {Optional}
  * @public
  */
 static $adapt(fn) {
  Optional.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Optional.$clinit = () =>{};
  Optional.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_Optional = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Optional;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.client.Messages.Optional.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Optional, 'org.gwtproject.i18n.client.Messages$Optional');

Optional.$markImplementor(/** @type {Function} */ (Optional));

exports = Optional; 
//# sourceMappingURL=Messages$Optional.js.map