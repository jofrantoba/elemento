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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Initialization from constructor 'AsyncDataProvider()'.
  * @public
  */
 $ctor__org_gwtproject_view_client_AsyncDataProvider__() {
  this.$ctor__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_ProvidesKey(null);
 }
 /**
  * Initialization from constructor 'AsyncDataProvider(ProvidesKey)'.
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_AsyncDataProvider__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_ProvidesKey(keyProvider);
 }
 /**
  * @override
  * @param {number} size
  * @param {boolean} exact
  * @public
  */
 m_updateRowCount__int__boolean(size, exact) {
  super.m_updateRowCount__int__boolean(size, exact);
 }
 /**
  * @override
  * @param {number} start
  * @param {List<T>} values
  * @public
  */
 m_updateRowData__int__java_util_List(start, values) {
  super.m_updateRowData__int__java_util_List(start, values);
 }
 /**
  * @public
  */
 static $clinit() {
  AsyncDataProvider.$clinit = () =>{};
  AsyncDataProvider.$loadModules();
  AbstractDataProvider.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AsyncDataProvider;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AsyncDataProvider, 'org.gwtproject.view.client.AsyncDataProvider');

exports = AsyncDataProvider; 
//# sourceMappingURL=AsyncDataProvider.js.map