goog.module('org.gwtproject.user.cellview.client.CellTree.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let CellTree = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CellTree}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_cellview_client_CellTree(/** CellTree */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_1__org_gwtproject_user_cellview_client_CellTree($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_1__org_gwtproject_user_cellview_client_CellTree(/** CellTree */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_1.f_isFocused__org_gwtproject_user_cellview_client_CellTree && !this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_1.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_isDestroyed___$pp_org_gwtproject_user_cellview_client() && !this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_1.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_resetFocusOnCell___$pp_org_gwtproject_user_cellview_client()) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_1.f_keyboardSelectedNode__org_gwtproject_user_cellview_client_CellTree_.m_setKeyboardSelected__boolean__boolean_$pp_org_gwtproject_user_cellview_client(true, true);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellTree$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellTree$1.js.map