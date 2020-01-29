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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /** @public {T} */
  this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /** @public {number} */
  this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /** @public {number} */
  this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /** @public {number} */
  this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  /** @public {boolean} */
  this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = false;
  /** @public {List<T>} */
  this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /** @public {Set<Integer>} */
  this.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /** @public {T} */
  this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
  /** @public {boolean} */
  this.f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = false;
 }
 /**
  * @template T
  * @param {number} pageSize
  * @return {!DefaultState<T>}
  * @public
  */
 static $create__int(pageSize) {
  DefaultState.$clinit();
  let $instance = new DefaultState();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState__int(pageSize);
  return $instance;
 }
 /**
  * @param {number} pageSize
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState__int(pageSize) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState();
  this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = pageSize;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getKeyboardSelectedRow__() {
  return this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getKeyboardSelectedRowValue__() {
  return this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getPageSize__() {
  return this.f_pageSize__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getPageStart__() {
  return this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getRowCount__() {
  return this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getRowDataSize__() {
  return this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.size();
 }
 /**
  * @override
  * @param {number} index
  * @return {T}
  * @public
  */
 m_getRowDataValue__int(index) {
  return this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.getAtIndex(index);
 }
 /**
  * @override
  * @return {List<T>}
  * @public
  */
 m_getRowDataValues__() {
  return /**@type {List<T>} */ (Collections.m_unmodifiableList__java_util_List(this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState));
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getSelectedValue__() {
  return this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isRowCountExact__() {
  return this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isRowSelected__int(index) {
  return this.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState.contains(Integer.m_valueOf__int(index));
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isViewTouched__() {
  return this.f_viewTouched__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState() {
  this.f_keyboardSelectedRow__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  this.f_keyboardSelectedRowValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
  this.f_pageStart__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  this.f_rowCount__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = 0;
  this.f_rowCountIsExact__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = false;
  this.f_rowData__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = /**@type {!ArrayList<T>} */ (ArrayList.$create__());
  this.f_selectedRows__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = /**@type {!HashSet<Integer>} */ (HashSet.$create__());
  this.f_selectedValue__org_gwtproject_user_cellview_client_HasDataPresenter_DefaultState = null;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultState.$clinit = () =>{};
  DefaultState.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultState;
 }
 /**
  * @public
  */
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