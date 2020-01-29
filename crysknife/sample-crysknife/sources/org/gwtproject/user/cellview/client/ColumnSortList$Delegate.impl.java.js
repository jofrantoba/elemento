goog.module('org.gwtproject.user.cellview.client.ColumnSortList.Delegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortList.Delegate.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Delegate {
 /**
  * @abstract
  * @public
  */
 m_onModification__() {}
 /**
  * @param {?function():void} fn
  * @return {Delegate}
  * @public
  */
 static $adapt(fn) {
  Delegate.$clinit();
  return new $LambdaAdaptor(fn);
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_ColumnSortList_Delegate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_ColumnSortList_Delegate;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortList.Delegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Delegate, 'org.gwtproject.user.cellview.client.ColumnSortList$Delegate');

Delegate.$markImplementor(/** @type {Function} */ (Delegate));

exports = Delegate; 
//# sourceMappingURL=ColumnSortList$Delegate.js.map