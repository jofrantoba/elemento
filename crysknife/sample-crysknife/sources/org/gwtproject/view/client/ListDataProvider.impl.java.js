goog.module('org.gwtproject.view.client.ListDataProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDataProvider = goog.require('org.gwtproject.view.client.AbstractDataProvider$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let ListWrapper = goog.forwardDeclare('org.gwtproject.view.client.ListDataProvider.ListWrapper$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @template T
 * @extends {AbstractDataProvider<T>}
  */
class ListDataProvider extends AbstractDataProvider {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ListWrapper<T>} */
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_;
 }
 /**
  * Factory method corresponding to constructor 'ListDataProvider()'.
  * @template T
  * @return {!ListDataProvider<T>}
  * @public
  */
 static $create__() {
  ListDataProvider.$clinit();
  let $instance = new ListDataProvider();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ListDataProvider()'.
  * @public
  */
 $ctor__org_gwtproject_view_client_ListDataProvider__() {
  this.$ctor__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ProvidesKey(/**@type {!ArrayList<T>} */ (ArrayList.$create__()), null);
 }
 /**
  * Factory method corresponding to constructor 'ListDataProvider(List)'.
  * @template T
  * @param {List<T>} listToWrap
  * @return {!ListDataProvider<T>}
  * @public
  */
 static $create__java_util_List(listToWrap) {
  ListDataProvider.$clinit();
  let $instance = new ListDataProvider();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider__java_util_List(listToWrap);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListDataProvider(List)'.
  * @param {List<T>} listToWrap
  * @public
  */
 $ctor__org_gwtproject_view_client_ListDataProvider__java_util_List(listToWrap) {
  this.$ctor__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ProvidesKey(listToWrap, null);
 }
 /**
  * Factory method corresponding to constructor 'ListDataProvider(ProvidesKey)'.
  * @template T
  * @param {ProvidesKey<T>} keyProvider
  * @return {!ListDataProvider<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  ListDataProvider.$clinit();
  let $instance = new ListDataProvider();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListDataProvider(ProvidesKey)'.
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_ListDataProvider__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ProvidesKey(/**@type {!ArrayList<T>} */ (ArrayList.$create__()), keyProvider);
 }
 /**
  * Factory method corresponding to constructor 'ListDataProvider(List, ProvidesKey)'.
  * @template T
  * @param {List<T>} listToWrap
  * @param {ProvidesKey<T>} keyProvider
  * @return {!ListDataProvider<T>}
  * @public
  */
 static $create__java_util_List__org_gwtproject_view_client_ProvidesKey(listToWrap, keyProvider) {
  ListDataProvider.$clinit();
  let $instance = new ListDataProvider();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ProvidesKey(listToWrap, keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'ListDataProvider(List, ProvidesKey)'.
  * @param {List<T>} listToWrap
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_ListDataProvider__java_util_List__org_gwtproject_view_client_ProvidesKey(listToWrap, keyProvider) {
  this.$ctor__org_gwtproject_view_client_AbstractDataProvider__org_gwtproject_view_client_ProvidesKey(keyProvider);
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_ = /**@type {!ListWrapper<T>} */ (ListWrapper.$create__org_gwtproject_view_client_ListDataProvider__java_util_List(this, listToWrap));
 }
 /**
  * @public
  */
 m_flush__() {
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_.m_flushNow___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
 }
 /**
  * @return {List<T>}
  * @public
  */
 m_getList__() {
  return this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_;
 }
 /**
  * @public
  */
 m_refresh__() {
  this.m_updateRowData__int__java_util_List(0, this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_);
 }
 /**
  * @param {List<T>} listToWrap
  * @public
  */
 m_setList__java_util_List(listToWrap) {
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_ = /**@type {!ListWrapper<T>} */ (ListWrapper.$create__org_gwtproject_view_client_ListDataProvider__java_util_List(this, listToWrap));
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_.f_minModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = 0;
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_.f_maxModified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_.size();
  this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_.f_modified__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = true;
  this.m_flush__();
 }
 /**
  * @override
  * @param {HasData<T>} display
  * @public
  */
 m_onRangeChanged__org_gwtproject_view_client_HasData(display) {
  let size = this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_.size();
  if (size > 0) {
   this.m_updateRowData__org_gwtproject_view_client_HasData__int__java_util_List(display, 0, this.f_listWrapper__org_gwtproject_view_client_ListDataProvider_);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  ListDataProvider.$clinit = () =>{};
  ListDataProvider.$loadModules();
  AbstractDataProvider.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ListDataProvider;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  ListWrapper = goog.module.get('org.gwtproject.view.client.ListDataProvider.ListWrapper$impl');
 }
 
}
$Util.$setClassMetadata(ListDataProvider, 'org.gwtproject.view.client.ListDataProvider');

exports = ListDataProvider; 
//# sourceMappingURL=ListDataProvider.js.map