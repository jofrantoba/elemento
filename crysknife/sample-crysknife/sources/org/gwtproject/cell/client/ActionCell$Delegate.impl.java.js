goog.module('org.gwtproject.cell.client.ActionCell.Delegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.ActionCell.Delegate.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Delegate {
 /**
  * @abstract
  * @param {T} object
  * @public
  */
 m_execute__java_lang_Object(object) {}
 /**
  * @template T
  * @param {?function(T):void} fn
  * @return {Delegate<T>}
  * @public
  */
 static $adapt(fn) {
  Delegate.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  Delegate.$clinit = () =>{};
  Delegate.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ActionCell_Delegate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ActionCell_Delegate;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.ActionCell.Delegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Delegate, 'org.gwtproject.cell.client.ActionCell$Delegate');

Delegate.$markImplementor(/** @type {Function} */ (Delegate));

exports = Delegate; 
//# sourceMappingURL=ActionCell$Delegate.js.map