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
 /**
  * @param {?function():Class<?>} fn
  * @return {Select}
  * @public
  */
 static $adapt(fn) {
  Select.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Select.$clinit = () =>{};
  Select.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Messages_Select = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Messages_Select;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.i18n.client.Messages.Select.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Select, 'org.gwtproject.i18n.client.Messages$Select');

Select.$markImplementor(/** @type {Function} */ (Select));

exports = Select; 
//# sourceMappingURL=Messages$Select.js.map