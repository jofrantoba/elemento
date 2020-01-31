goog.module('org.gwtproject.user.cellview.client.AbstractPager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractPager.$2$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
  */
class AbstractPager extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {HandlerRegistration}*/
  this.f_rangeChangeHandler__org_gwtproject_user_cellview_client_AbstractPager;
  /**@type {HandlerRegistration}*/
  this.f_rowCountChangeHandler__org_gwtproject_user_cellview_client_AbstractPager;
  /**@type {HasRows}*/
  this.f_display__org_gwtproject_user_cellview_client_AbstractPager_;
  /**@type {boolean}*/
  this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ = false;
  /**@type {number}*/
  this.f_lastRowCount__org_gwtproject_user_cellview_client_AbstractPager_ = 0;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractPager__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractPager();
 }
 /** @return {HasRows} */
 m_getDisplay__() {
  return this.f_display__org_gwtproject_user_cellview_client_AbstractPager_;
 }
 /** @return {number} */
 m_getPageSize__() {
  return $Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null) ? -1 : this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__().m_getLength__();
 }
 /** @return {number} */
 m_getPageStart__() {
  return $Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null) ? -1 : this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__().m_getStart__();
 }
 /** @return {boolean} */
 m_isRangeLimited__() {
  return this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_;
 }
 
 m_setRangeLimited__boolean(/** boolean */ isRangeLimited) {
  this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ = isRangeLimited;
 }
 
 m_setDisplay__org_gwtproject_view_client_HasRows(/** HasRows */ display) {
  if (!$Equality.$same(this.f_rangeChangeHandler__org_gwtproject_user_cellview_client_AbstractPager, null)) {
   this.f_rangeChangeHandler__org_gwtproject_user_cellview_client_AbstractPager.m_removeHandler__();
   this.f_rangeChangeHandler__org_gwtproject_user_cellview_client_AbstractPager = null;
  }
  if (!$Equality.$same(this.f_rowCountChangeHandler__org_gwtproject_user_cellview_client_AbstractPager, null)) {
   this.f_rowCountChangeHandler__org_gwtproject_user_cellview_client_AbstractPager.m_removeHandler__();
   this.f_rowCountChangeHandler__org_gwtproject_user_cellview_client_AbstractPager = null;
  }
  this.f_display__org_gwtproject_user_cellview_client_AbstractPager_ = display;
  if (!$Equality.$same(display, null)) {
   this.f_rangeChangeHandler__org_gwtproject_user_cellview_client_AbstractPager = display.m_addRangeChangeHandler__org_gwtproject_view_client_RangeChangeEvent_Handler($1.$create__org_gwtproject_user_cellview_client_AbstractPager(this));
   this.f_rowCountChangeHandler__org_gwtproject_user_cellview_client_AbstractPager = display.m_addRowCountChangeHandler__org_gwtproject_view_client_RowCountChangeEvent_Handler($2.$create__org_gwtproject_user_cellview_client_AbstractPager(this));
   this.m_onRangeOrRowCountChanged__();
  }
 }
 
 m_firstPage__() {
  this.m_setPage__int(0);
 }
 /** @return {number} */
 m_getPage__() {
  if ($Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   return -1;
  }
  let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
  let pageSize = range.m_getLength__();
  return $Primitives.$coerceDivision((range.m_getStart__() + pageSize - 1) / pageSize);
 }
 /** @return {number} */
 m_getPageCount__() {
  if ($Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   return -1;
  }
  let pageSize = this.m_getPageSize__();
  return $Primitives.$coerceDivision((this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__() + pageSize - 1) / pageSize);
 }
 /** @return {boolean} */
 m_hasNextPage__() {
  if ($Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null) || this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__() == 0) {
   return false;
  } else if (!this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_isRowCountExact__()) {
   return true;
  }
  let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
  return range.m_getStart__() + range.m_getLength__() < this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__();
 }
 /** @return {boolean} */
 m_hasNextPages__int(/** number */ pages) {
  if ($Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   return false;
  }
  let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
  return range.m_getStart__() + pages * range.m_getLength__() < this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__();
 }
 /** @return {boolean} */
 m_hasPage__int(/** number */ index) {
  return $Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null) ? false : this.m_getPageSize__() * index < this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__();
 }
 /** @return {boolean} */
 m_hasPreviousPage__() {
  return $Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null) ? false : this.m_getPageStart__() > 0 && this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__() > 0;
 }
 /** @return {boolean} */
 m_hasPreviousPages__int(/** number */ pages) {
  if ($Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   return false;
  }
  let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
  return (pages - 1) * range.m_getLength__() < range.m_getStart__();
 }
 
 m_lastPage__() {
  this.m_setPage__int(this.m_getPageCount__() - 1);
 }
 
 m_lastPageStart__() {
  if (!$Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   this.m_setPageStart__int(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__() - this.m_getPageSize__());
  }
 }
 
 m_nextPage__() {
  if (!$Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
   this.m_setPageStart__int(range.m_getStart__() + range.m_getLength__());
  }
 }
 /** @abstract */
 m_onRangeOrRowCountChanged__() {}
 
 m_previousPage__() {
  if (!$Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
   this.m_setPageStart__int(range.m_getStart__() - range.m_getLength__());
  }
 }
 
 m_setPage__int(/** number */ index) {
  if (!$Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null) && (!this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ || !this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_isRowCountExact__() || this.m_hasPage__int(index))) {
   let pageSize = this.m_getPageSize__();
   this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_setVisibleRange__int__int(pageSize * index, pageSize);
  }
 }
 
 m_setPageSize__int(/** number */ pageSize) {
  if (!$Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
   let pageStart = range.m_getStart__();
   if (this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ && this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_isRowCountExact__()) {
    pageStart = Math.min(pageStart, this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__() - pageSize);
   }
   pageStart = Math.max(0, pageStart);
   this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_setVisibleRange__int__int(pageStart, pageSize);
  }
 }
 
 m_setPageStart__int(/** number */ index) {
  if (!$Equality.$same(this.f_display__org_gwtproject_user_cellview_client_AbstractPager_, null)) {
   let range = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getVisibleRange__();
   let pageSize = range.m_getLength__();
   if (this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ && this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_isRowCountExact__()) {
    index = Math.min(index, this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__() - pageSize);
   }
   index = Math.max(0, index);
   if (index != range.m_getStart__()) {
    this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_setVisibleRange__int__int(index, pageSize);
   }
  }
 }
 
 m_handleRowCountChange__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractPager(/** number */ rowCount, /** boolean */ isExact) {
  let oldRowCount = this.f_lastRowCount__org_gwtproject_user_cellview_client_AbstractPager_;
  this.f_lastRowCount__org_gwtproject_user_cellview_client_AbstractPager_ = this.f_display__org_gwtproject_user_cellview_client_AbstractPager_.m_getRowCount__();
  if (this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ && oldRowCount != this.f_lastRowCount__org_gwtproject_user_cellview_client_AbstractPager_) {
   this.m_setPageStart__int(this.m_getPageStart__());
  }
  this.m_onRangeOrRowCountChanged__();
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_AbstractPager() {
  this.f_isRangeLimited__org_gwtproject_user_cellview_client_AbstractPager_ = true;
 }
 
 static $clinit() {
  AbstractPager.$clinit = () =>{};
  AbstractPager.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPager;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.AbstractPager.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.cellview.client.AbstractPager.$2$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(AbstractPager, 'org.gwtproject.user.cellview.client.AbstractPager');

exports = AbstractPager; 
//# sourceMappingURL=AbstractPager.js.map