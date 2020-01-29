goog.module('org.gwtproject.cell.client.FieldUpdater$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, C
 */
class FieldUpdater {
 /**
  * @abstract
  * @param {number} index
  * @param {T} object
  * @param {C} value
  * @public
  */
 m_update__int__java_lang_Object__java_lang_Object(index, object, value) {}
 /**
  * @template T, C
  * @param {?function(number, T, C):void} fn
  * @return {FieldUpdater<T, C>}
  * @public
  */
 static $adapt(fn) {
  FieldUpdater.$clinit();
  return /**@type {!$LambdaAdaptor<T, C>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  FieldUpdater.$clinit = () =>{};
  FieldUpdater.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_FieldUpdater = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_FieldUpdater;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.FieldUpdater.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(FieldUpdater, 'org.gwtproject.cell.client.FieldUpdater');

FieldUpdater.$markImplementor(/** @type {Function} */ (FieldUpdater));

exports = FieldUpdater; 
//# sourceMappingURL=FieldUpdater.js.map