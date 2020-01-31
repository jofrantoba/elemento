goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Delegate = goog.require('org.gwtproject.user.cellview.client.ColumnSortList.Delegate$impl');

let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');

/**
 * @template T
 * @implements {Delegate}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractCellTable<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_1;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable(/** AbstractCellTable<T> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_1__org_gwtproject_user_cellview_client_AbstractCellTable($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_1__org_gwtproject_user_cellview_client_AbstractCellTable(/** AbstractCellTable<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onModification__() {
  if (!this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_1.f_updatingSortList__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractCellTable_1.m_createHeaders__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable(false);
  }
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
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.AbstractCellTable$1');

Delegate.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=AbstractCellTable$1.js.map