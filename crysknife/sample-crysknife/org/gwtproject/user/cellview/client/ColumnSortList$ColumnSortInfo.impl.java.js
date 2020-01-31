goog.module('org.gwtproject.user.cellview.client.ColumnSortList.ColumnSortInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ColumnSortInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ = false;
  /**@type {Column<?, ?>}*/
  this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_;
 }
 //Factory method corresponding to constructor 'ColumnSortInfo(Column, boolean)'.
 /** @return {!ColumnSortInfo} */
 static $create__org_gwtproject_user_cellview_client_Column__boolean(/** Column<?, ?> */ column, /** boolean */ ascending) {
  ColumnSortInfo.$clinit();
  let $instance = new ColumnSortInfo();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__org_gwtproject_user_cellview_client_Column__boolean(column, ascending);
  return $instance;
 }
 //Initialization from constructor 'ColumnSortInfo(Column, boolean)'.
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__org_gwtproject_user_cellview_client_Column__boolean(/** Column<?, ?> */ column, /** boolean */ ascending) {
  this.$ctor__java_lang_Object__();
  this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ = column;
  this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ = ascending;
 }
 //Factory method corresponding to constructor 'ColumnSortInfo()'.
 /** @return {!ColumnSortInfo} */
 static $create__() {
  ColumnSortInfo.$clinit();
  let $instance = new ColumnSortInfo();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__();
  return $instance;
 }
 //Initialization from constructor 'ColumnSortInfo()'.
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__() {
  this.$ctor__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo__org_gwtproject_user_cellview_client_Column__boolean(null, true);
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  } else if (!ColumnSortInfo.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {ColumnSortInfo}*/ ($Casts.$to(obj, ColumnSortInfo));
  return this.m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(this.m_getColumn__(), other.m_getColumn__()) && this.m_isAscending__() == other.m_isAscending__();
 }
 /** @return {Column<?, ?>} */
 m_getColumn__() {
  return this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_;
 }
 /** @override @return {number} */
 hashCode() {
  return 31 * ($Equality.$same(this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_, null) ? 0 : $Objects.m_hashCode__java_lang_Object(this.f_column__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_)) + (this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_ ? 1 : 0);
 }
 /** @return {boolean} */
 m_isAscending__() {
  return this.f_ascending__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo_;
 }
 /** @return {boolean} */
 m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(/** * */ a, /** * */ b) {
  return $Equality.$same(a, null) ? $Equality.$same(b, null) : $Objects.m_equals__java_lang_Object__java_lang_Object(a, b);
 }
 
 static $clinit() {
  ColumnSortInfo.$clinit = () =>{};
  ColumnSortInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColumnSortInfo;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ColumnSortInfo, 'org.gwtproject.user.cellview.client.ColumnSortList$ColumnSortInfo');

exports = ColumnSortInfo; 
//# sourceMappingURL=ColumnSortList$ColumnSortInfo.js.map