goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.DefaultState$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const State = goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.State$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');

/**
 * @template T
 * @implements {State<T>}
  */
class DefaultState extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /**@type {T}*/
  this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /**@type {number}*/
  this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /**@type {number}*/
  this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /**@type {number}*/
  this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /**@type {boolean}*/
  this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = false;
  /**@type {List<T>}*/
  this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /**@type {Set<Integer>}*/
  this.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /**@type {T}*/
  this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /**@type {boolean}*/
  this.f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = false;
 }
 /** @template T @return {!DefaultState<T>} */
 static $create__int(/** number */ pageSize) {
  DefaultState.$clinit();
  let $instance = new DefaultState();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState__int(pageSize);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState__int(/** number */ pageSize) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState();
  this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = pageSize;
 }
 /** @override @return {number} */
 m_getKeyboardSelectedRow__() {
  return this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {T} */
 m_getKeyboardSelectedRowValue__() {
  return this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {number} */
 m_getPageSize__() {
  return this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {number} */
 m_getPageStart__() {
  return this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {number} */
 m_getRowCount__() {
  return this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {number} */
 m_getRowDataSize__() {
  return this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.size();
 }
 /** @override @return {T} */
 m_getRowDataValue__int(/** number */ index) {
  return this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.getAtIndex(index);
 }
 /** @override @return {List<T>} */
 m_getRowDataValues__() {
  return /**@type {List<T>}*/ (Collections.m_unmodifiableList__java_util_List(this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState));
 }
 /** @override @return {T} */
 m_getSelectedValue__() {
  return this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {boolean} */
 m_isRowCountExact__() {
  return this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @override @return {boolean} */
 m_isRowSelected__int(/** number */ index) {
  return this.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.contains(Integer.m_valueOf__int(index));
 }
 /** @override @return {boolean} */
 m_isViewTouched__() {
  return this.f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState() {
  this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
  this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = false;
  this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
  this.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = /**@type {!HashSet<Integer>}*/ (HashSet.$create__());
  this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
 }
 
 static $clinit() {
  DefaultState.$clinit = () =>{};
  DefaultState.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultState;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
 }
 
}
$Util.$setClassMetadata(DefaultState, 'org.gwtproject.user.cellview.client.HasDataPresenter$DefaultState');

State.$markImplementor(DefaultState);

exports = DefaultState; 
//# sourceMappingURL=HasDataPresenter$DefaultState.js.map