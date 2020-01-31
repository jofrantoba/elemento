goog.module('org.gwtproject.view.client.ListDataProvider.ListWrapper.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let ListWrapper = goog.forwardDeclare('org.gwtproject.view.client.ListDataProvider.ListWrapper$impl');

/**
 * @template T
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ListWrapper<T>}*/
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_1;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_view_client_ListDataProvider_ListWrapper(/** ListWrapper<T> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper_1__org_gwtproject_view_client_ListDataProvider_ListWrapper($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_ListDataProvider_ListWrapper_1__org_gwtproject_view_client_ListDataProvider_ListWrapper(/** ListWrapper<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_1.f_flushPending__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
  if (this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_1.f_flushCancelled__org_gwtproject_view_client_ListDataProvider_ListWrapper_) {
   this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_1.f_flushCancelled__org_gwtproject_view_client_ListDataProvider_ListWrapper_ = false;
   return;
  }
  this.f_$outer_this__org_gwtproject_view_client_ListDataProvider_ListWrapper_1.m_flushNow___$p_org_gwtproject_view_client_ListDataProvider_ListWrapper();
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.view.client.ListDataProvider$ListWrapper$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ListDataProvider$ListWrapper$1.js.map