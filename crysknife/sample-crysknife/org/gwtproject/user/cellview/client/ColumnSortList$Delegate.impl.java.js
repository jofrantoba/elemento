goog.module('org.gwtproject.user.cellview.client.ColumnSortList.Delegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortList.Delegate.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Delegate {
 /** @abstract */
 m_onModification__() {}
 /** @return {Delegate} */
 static $adapt(/** ?function():void */ fn) {
  Delegate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Delegate.$clinit = () =>{};
  Delegate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_ColumnSortList_Delegate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_ColumnSortList_Delegate;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortList.Delegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Delegate, 'org.gwtproject.user.cellview.client.ColumnSortList$Delegate');

Delegate.$markImplementor(/** @type {Function} */ (Delegate));

exports = Delegate; 
//# sourceMappingURL=ColumnSortList$Delegate.js.map