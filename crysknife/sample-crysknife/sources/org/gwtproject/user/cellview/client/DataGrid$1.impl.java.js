goog.module('org.gwtproject.user.cellview.client.DataGrid.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollHandler = goog.require('org.gwtproject.event.dom.client.ScrollHandler$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let DataGrid = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid$impl');

/**
 * @template T
 * @implements {ScrollHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataGrid<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_1;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_user_cellview_client_DataGrid(/** DataGrid<T> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_1__org_gwtproject_user_cellview_client_DataGrid($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_DataGrid_1__org_gwtproject_user_cellview_client_DataGrid(/** DataGrid<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(/** ScrollEvent */ event) {
  let scrollLeft = this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_1.f_tableDataScroller__org_gwtproject_user_cellview_client_DataGrid_.m_getHorizontalScrollPosition__();
  $Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_1.f_tableHeaderScroller__org_gwtproject_user_cellview_client_DataGrid_, scrollLeft);
  $Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_1.f_tableFooterScroller__org_gwtproject_user_cellview_client_DataGrid_, scrollLeft);
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
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.DataGrid$1');

ScrollHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DataGrid$1.js.map