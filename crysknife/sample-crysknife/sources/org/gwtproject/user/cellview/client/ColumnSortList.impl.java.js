goog.module('org.gwtproject.user.cellview.client.ColumnSortList$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let ColumnSortInfo = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortList.ColumnSortInfo$impl');
let Delegate = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortList.Delegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ColumnSortList extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Delegate}*/
  this.f_delegate__org_gwtproject_user_cellview_client_ColumnSortList_;
  /**@type {List<ColumnSortInfo>}*/
  this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_;
  /**@type {number}*/
  this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_ = 0;
 }
 //Factory method corresponding to constructor 'ColumnSortList()'.
 /** @return {!ColumnSortList} */
 static $create__() {
  ColumnSortList.$clinit();
  let $instance = new ColumnSortList();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortList__();
  return $instance;
 }
 //Initialization from constructor 'ColumnSortList()'.
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortList__() {
  this.$ctor__org_gwtproject_user_cellview_client_ColumnSortList__org_gwtproject_user_cellview_client_ColumnSortList_Delegate(null);
 }
 //Factory method corresponding to constructor 'ColumnSortList(Delegate)'.
 /** @return {!ColumnSortList} */
 static $create__org_gwtproject_user_cellview_client_ColumnSortList_Delegate(/** Delegate */ delegate) {
  ColumnSortList.$clinit();
  let $instance = new ColumnSortList();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortList__org_gwtproject_user_cellview_client_ColumnSortList_Delegate(delegate);
  return $instance;
 }
 //Initialization from constructor 'ColumnSortList(Delegate)'.
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortList__org_gwtproject_user_cellview_client_ColumnSortList_Delegate(/** Delegate */ delegate) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_ColumnSortList();
  this.f_delegate__org_gwtproject_user_cellview_client_ColumnSortList_ = delegate;
 }
 
 m_clear__() {
  this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.clear();
  this.m_fireDelegate___$p_org_gwtproject_user_cellview_client_ColumnSortList();
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  } else if (!ColumnSortList.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {ColumnSortList}*/ ($Casts.$to(obj, ColumnSortList));
  return $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_, other.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_);
 }
 /** @return {ColumnSortInfo} */
 m_get__int(/** number */ index) {
  return /**@type {ColumnSortInfo}*/ ($Casts.$to(this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.getAtIndex(index), ColumnSortInfo));
 }
 /** @return {number} */
 m_getLimit__() {
  return this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_;
 }
 /** @override @return {number} */
 hashCode() {
  return 31 * $Objects.m_hashCode__java_lang_Object(this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_) + 13;
 }
 
 m_insert__int__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(/** number */ index, /** ColumnSortInfo */ sortInfo) {
  if ($Equality.$same(sortInfo, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("sortInfo cannot be null"));
  }
  let column = sortInfo.m_getColumn__();
  for (let i = 0; i < this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.size(); i++) {
   let curInfo = /**@type {ColumnSortInfo}*/ ($Casts.$to(this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.getAtIndex(i), ColumnSortInfo));
   if ($Equality.$same(curInfo.m_getColumn__(), column)) {
    this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.removeAtIndex(i);
    if (i < index) {
     index--;
    }
    i--;
   }
  }
  if (this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_ > 0) {
   if (this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_ == this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.size()) {
    this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.removeAtIndex(this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.size() - 1);
   }
   if (index >= this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_) {
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Index: " + index + ", Limit: " + this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_));
   }
  }
  this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.addAtIndex(index, sortInfo);
  this.m_fireDelegate___$p_org_gwtproject_user_cellview_client_ColumnSortList();
 }
 /** @return {ColumnSortInfo} */
 m_push__org_gwtproject_user_cellview_client_Column(/** Column<?, ?> */ column) {
  let ascending = $Equality.$same(column, null) ? true : column.m_isDefaultSortAscending__();
  if (this.m_size__() > 0 && $Equality.$same(this.m_get__int(0).m_getColumn__(), column)) {
   ascending = !this.m_get__int(0).m_isAscending__();
  }
  let toRet = ColumnSortInfo.$create__org_gwtproject_user_cellview_client_Column__boolean(column, ascending);
  this.m_push__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(toRet);
  return toRet;
 }
 
 m_push__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(/** ColumnSortInfo */ sortInfo) {
  this.m_insert__int__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(0, sortInfo);
 }
 /** @return {boolean} */
 m_remove__org_gwtproject_user_cellview_client_ColumnSortList_ColumnSortInfo(/** ColumnSortInfo */ sortInfo) {
  let toRet = this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.remove(sortInfo);
  this.m_fireDelegate___$p_org_gwtproject_user_cellview_client_ColumnSortList();
  return toRet;
 }
 
 m_setLimit__int(/** number */ limit) {
  this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_ = limit;
  if (limit > 0) {
   let modified = false;
   while (limit < this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.size()) {
    this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.removeAtIndex(this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.size() - 1);
    modified = true;
   }
   if (modified) {
    this.m_fireDelegate___$p_org_gwtproject_user_cellview_client_ColumnSortList();
   }
  }
 }
 /** @return {number} */
 m_size__() {
  return this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_.size();
 }
 
 m_fireDelegate___$p_org_gwtproject_user_cellview_client_ColumnSortList() {
  if (!$Equality.$same(this.f_delegate__org_gwtproject_user_cellview_client_ColumnSortList_, null)) {
   this.f_delegate__org_gwtproject_user_cellview_client_ColumnSortList_.m_onModification__();
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_ColumnSortList() {
  this.f_infos__org_gwtproject_user_cellview_client_ColumnSortList_ = /**@type {!ArrayList<ColumnSortInfo>}*/ (ArrayList.$create__());
  this.f_limit__org_gwtproject_user_cellview_client_ColumnSortList_ = 0;
 }
 
 static $clinit() {
  ColumnSortList.$clinit = () =>{};
  ColumnSortList.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColumnSortList;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColumnSortInfo = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortList.ColumnSortInfo$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ColumnSortList, 'org.gwtproject.user.cellview.client.ColumnSortList');

exports = ColumnSortList; 
//# sourceMappingURL=ColumnSortList.js.map