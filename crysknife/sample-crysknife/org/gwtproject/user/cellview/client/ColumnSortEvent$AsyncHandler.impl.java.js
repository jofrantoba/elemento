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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HasData<?>} */
  this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_;
 }
 /**
  * @param {HasData<?>} hasData
  * @return {!AsyncHandler}
  * @public
  */
 static $create__org_gwtproject_view_client_HasData(hasData) {
  AsyncHandler.$clinit();
  let $instance = new AsyncHandler();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler__org_gwtproject_view_client_HasData(hasData);
  return $instance;
 }
 /**
  * @param {HasData<?>} hasData
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler__org_gwtproject_view_client_HasData(hasData) {
  this.$ctor__java_lang_Object__();
  this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_ = hasData;
 }
 /**
  * @override
  * @param {ColumnSortEvent} event
  * @public
  */
 m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(event) {
  this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_.m_setVisibleRangeAndClearData__org_gwtproject_view_client_Range__boolean(this.f_hasData__org_gwtproject_user_cellview_client_ColumnSortEvent_AsyncHandler_.m_getVisibleRange__(), true);
 }
 /**
  * @public
  */
 static $clinit() {
  AsyncHandler.$clinit = () =>{};
  AsyncHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AsyncHandler;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AsyncHandler, 'org.gwtproject.user.cellview.client.ColumnSortEvent$AsyncHandler');

Handler.$markImplementor(AsyncHandler);

exports = AsyncHandler; 
//# sourceMappingURL=ColumnSortEvent$AsyncHandler.js.map