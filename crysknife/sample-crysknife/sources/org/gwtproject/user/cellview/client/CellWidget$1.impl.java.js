goog.module('org.gwtproject.user.cellview.client.CellWidget.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueUpdater = goog.require('org.gwtproject.cell.client.ValueUpdater$impl');

let CellWidget = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellWidget$impl');

/**
 * @template C
 * @implements {ValueUpdater<C>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CellWidget<C>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellWidget_1;
 }
 /** @template C @return {!$1<C>} */
 static $create__org_gwtproject_user_cellview_client_CellWidget(/** CellWidget<C> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellWidget_1__org_gwtproject_user_cellview_client_CellWidget($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellWidget_1__org_gwtproject_user_cellview_client_CellWidget(/** CellWidget<C> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellWidget_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_update__java_lang_Object(/** C */ value) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellWidget_1.m_setValue__java_lang_Object__boolean__boolean(value, true, false);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellWidget$1');

ValueUpdater.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellWidget$1.js.map