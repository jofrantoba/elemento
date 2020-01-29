goog.module('org.gwtproject.cell.client.ValueUpdater$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class ValueUpdater {
 /**
  * @abstract
  * @param {C} value
  * @public
  */
 m_update__java_lang_Object(value) {}
 /**
  * @template C
  * @param {?function(C):void} fn
  * @return {ValueUpdater<C>}
  * @public
  */
 static $adapt(fn) {
  ValueUpdater.$clinit();
  return /**@type {!$LambdaAdaptor<C>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  ValueUpdater.$clinit = () =>{};
  ValueUpdater.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ValueUpdater = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ValueUpdater;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.ValueUpdater.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ValueUpdater, 'org.gwtproject.cell.client.ValueUpdater');

ValueUpdater.$markImplementor(/** @type {Function} */ (ValueUpdater));

exports = ValueUpdater; 
//# sourceMappingURL=ValueUpdater.js.map