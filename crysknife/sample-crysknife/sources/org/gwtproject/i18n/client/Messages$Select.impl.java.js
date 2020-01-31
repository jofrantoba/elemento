goog.module('org.gwtproject.i18n.client.Messages.Select$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.i18n.client.Messages.Select.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Select {
 /** @return {Select} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Select.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Select.$clinit = () =>{};
  Select.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Messages_Select = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Select;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.client.Messages.Select.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Select, 'org.gwtproject.i18n.client.Messages$Select');

Select.$markImplementor(/** @type {Function} */ (Select));

exports = Select; 
//# sourceMappingURL=Messages$Select.js.map