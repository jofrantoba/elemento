goog.module('org.gwtproject.user.cellview.client.AbstractHasData.View.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let View = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractHasData.View$impl');

/**
 * @template T
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {View<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_View_1;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_user_cellview_client_AbstractHasData_View(/** View<T> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_View_1__org_gwtproject_user_cellview_client_AbstractHasData_View($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractHasData_View_1__org_gwtproject_user_cellview_client_AbstractHasData_View(/** View<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_View_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  if (!this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_View_1.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_resetFocusOnCell__()) {
   let elem = this.f_$outer_this__org_gwtproject_user_cellview_client_AbstractHasData_View_1.f_hasData__org_gwtproject_user_cellview_client_AbstractHasData_View_.m_getKeyboardSelectedElement__();
   if (!$Equality.$same(elem, null)) {
    elem.focus();
   }
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
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.AbstractHasData$View$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=AbstractHasData$View$1.js.map