goog.module('org.gwtproject.view.client.AsyncDataProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDataProvider = goog.require('org.gwtproject.view.client.AbstractDataProvider$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @abstract
 * @template T
 * @extends {AbstractDataProvider<T>}
  */
class AsyncDataProvider extends AbstractDataProvider {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'AsyncDataProvider()'.
 
 $ctor__org_gwtproject_view_client_AsyncDataProvider__() {
  this.$ctor__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_ProvidesKey(null);
 }
 //Initialization from constructor 'AsyncDataProvider(ProvidesKey)'.
 
 $ctor__org_gwtproject_view_client_AsyncDataProvider__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_ProvidesKey(keyProvider);
 }
 /** @override */
 m_updateRowCount__int__boolean(/** number */ size, /** boolean */ exact) {
  super.m_updateRowCount__int__boolean(size, exact);
 }
 /** @override */
 m_updateRowData__int__java_util_List(/** number */ start, /** List<T> */ values) {
  super.m_updateRowData__int__java_util_List(start, values);
 }
 
 static $clinit() {
  AsyncDataProvider.$clinit = () =>{};
  AsyncDataProvider.$loadModules();
  AbstractDataProvider.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AsyncDataProvider;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AsyncDataProvider, 'org.gwtproject.view.client.AsyncDataProvider');

exports = AsyncDataProvider; 
//# sourceMappingURL=AsyncDataProvider.js.map