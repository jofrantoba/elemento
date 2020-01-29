goog.module('org.gwtproject.user.cellview.client.ColumnSortList.ColumnSortInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ColumnSortInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ = false;
  /** @public {Column<?, ?>} */
  this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_;
 }
 /**
  * Factory method corresponding to constructor 'ColumnSortInfo(Column, boolean)'.
  * @param {Column<?, ?>} column
  * @param {boolean} ascending
  * @return {!ColumnSortInfo}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_Column__boolean(column, ascending) {
  ColumnSortInfo.$clinit();
  let $instance = new ColumnSortInfo();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__org_gwtproject_user_cellview_client_Column__boolean(column, ascending);
  return $instance;
 }
 /**
  * Initialization from constructor 'ColumnSortInfo(Column, boolean)'.
  * @param {Column<?, ?>} column
  * @param {boolean} ascending
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__org_gwtproject_user_cellview_client_Column__boolean(column, ascending) {
  this.$ctor__java_lang_Object__();
  this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ = column;
  this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ = ascending;
 }
 /**
  * Factory method corresponding to constructor 'ColumnSortInfo()'.
  * @return {!ColumnSortInfo}
  * @public
  */
 static $create__() {
  ColumnSortInfo.$clinit();
  let $instance = new ColumnSortInfo();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ColumnSortInfo()'.
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__() {
  this.$ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__org_gwtproject_user_cellview_client_Column__boolean(null, true);
 }
 /**
  * @override
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 equals(obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  } else if (!ColumnSortInfo.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {ColumnSortInfo} */ ($Casts.$to(obj, ColumnSortInfo));
  return this.m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(this.m_getColumn__(), other.m_getColumn__()) && this.m_isAscending__() == other.m_isAscending__();
 }
 /**
  * @return {Column<?, ?>}
  * @public
  */
 m_getColumn__() {
  return this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return 31 * ($Equality.$same(this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_, null) ? 0 : $Objects.m_hashCode__java_lang_Object(this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_)) + (this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ ? 1 : 0);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isAscending__() {
  return this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_;
 }
 /**
  * @param {*} a
  * @param {*} b
  * @return {boolean}
  * @public
  */
 m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(a, b) {
  return $Equality.$same(a, null) ? $Equality.$same(b, null) : $Objects.m_equals__java_lang_Object__java_lang_Object(a, b);
 }
 /**
  * @public
  */
 static $clinit() {
  ColumnSortInfo.$clinit = () =>{};
  ColumnSortInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ColumnSortInfo;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ColumnSortInfo, 'org.gwtproject.user.cellview.client.ColumnSortList$ColumnSortInfo');

exports = ColumnSortInfo; 
//# sourceMappingURL=ColumnSortList$ColumnSortInfo.js.map