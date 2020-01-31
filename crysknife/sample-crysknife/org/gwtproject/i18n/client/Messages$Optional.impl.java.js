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
 /** @return {Optional} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Optional.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Optional.$clinit = () =>{};
  Optional.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_Optional = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Optional;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.client.Messages.Optional.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Optional, 'org.gwtproject.i18n.client.Messages$Optional');

Optional.$markImplementor(/** @type {Function} */ (Optional));

exports = Optional; 
//# sourceMappingURL=Messages$Optional.js.map