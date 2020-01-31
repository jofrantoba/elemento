goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.PendingState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultState = goog.require('org.gwtproject.user.cellview.client.HasDataPresenter.DefaultState$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let State = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter.State$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');

/**
 * @template T
 * @extends {DefaultState<T>}
  */
class PendingState extends DefaultState {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_keyboardSelectedRowChanged__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = false;
  /**@type {boolean}*/
  this.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = false;
  /**@type {boolean}*/
  this.f_redrawRequired__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = false;
  /**@type {List<Range>}*/
  this.f_replacedRanges__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_;
 }
 /** @template T @return {!PendingState<T>} */
 static $create__org_gwtproject_user_cellview_client_HasDataPresenter_State(/** State<T> */ state) {
  PendingState.$clinit();
  let $instance = new PendingState();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState__org_gwtproject_user_cellview_client_HasDataPresenter_State(state);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState__org_gwtproject_user_cellview_client_HasDataPresenter_State(/** State<T> */ state) {
  this.$ctor__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState__int(state.m_getPageSize__());
  this.$init___$p_org_gwtproject_user_cellview_client_HasDataPresenter_PendingState();
  this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_getKeyboardSelectedRow__();
  this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_getKeyboardSelectedRowValue__();
  this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_getPageSize__();
  this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_getPageStart__();
  this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_getRowCount__();
  this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_isRowCountExact__();
  this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_getSelectedValue__();
  this.f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = state.m_isViewTouched__();
  let rowDataSize = state.m_getRowDataSize__();
  for (let i = 0; i < rowDataSize; i++) {
   this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.add(state.m_getRowDataValue__int(i));
  }
 }
 
 m_replaceRange__int__int(/** number */ start, /** number */ end) {
  this.f_replacedRanges__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_.add(Range.$create__int__int(start, end - start));
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_HasDataPresenter_PendingState() {
  this.f_keyboardStealFocus__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = false;
  this.f_redrawRequired__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = false;
  this.f_replacedRanges__org_gwtproject_user_cellview_client_HasDataPresenter_PendingState_ = /**@type {!ArrayList<Range>}*/ (ArrayList.$create__());
 }
 
 static $clinit() {
  PendingState.$clinit = () =>{};
  PendingState.$loadModules();
  DefaultState.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PendingState;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Range = goog.module.get('org.gwtproject.view.client.Range$impl');
 }
 
}
$Util.$setClassMetadata(PendingState, 'org.gwtproject.user.cellview.client.HasDataPresenter$PendingState');

exports = PendingState; 
//# sourceMappingURL=HasDataPresenter$PendingState.js.map