goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.AsyncHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');

let ColumnSortEvent = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');

/**
 * @implements {Handler}
  */
class AsyncHandler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HasData<?>}*/
  this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_;
 }
 /** @return {!AsyncHandler} */
 static $create__org_gwtproject_view_client_HasData(/** HasData<?> */ hasData) {
  AsyncHandler.$clinit();
  let $instance = new AsyncHandler();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler__org_gwtproject_view_client_HasData(hasData);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler__org_gwtproject_view_client_HasData(/** HasData<?> */ hasData) {
  this.$ctor__java_lang_Object__();
  this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_ = hasData;
 }
 /** @override */
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(/** ColumnSortEvent */ event) {
  this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_.m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_.m_getVisibleRange__(), true);
 }
 
 static $clinit() {
  AsyncHandler.$clinit = () =>{};
  AsyncHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AsyncHandler;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AsyncHandler, 'org.gwtproject.user.cellview.client.ColumnSortEvent$AsyncHandler');

Handler.$markImplementor(AsyncHandler);

exports = AsyncHandler; 
//# sourceMappingURL=ColumnSortEvent$AsyncHandler.js.map