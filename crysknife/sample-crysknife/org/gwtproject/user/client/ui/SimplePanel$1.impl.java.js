goog.module('org.gwtproject.user.client.ui.SimplePanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Widget>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SimplePanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_SimplePanel_1;
  /**@type {boolean}*/
  this.f_hasElement__org_gwtproject_user_client_ui_SimplePanel_1 = false;
  /**@type {Widget}*/
  this.f_returned__org_gwtproject_user_client_ui_SimplePanel_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_SimplePanel(/** SimplePanel */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel_1__org_gwtproject_user_client_ui_SimplePanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SimplePanel_1__org_gwtproject_user_client_ui_SimplePanel(/** SimplePanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SimplePanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SimplePanel_1();
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return this.f_hasElement__org_gwtproject_user_client_ui_SimplePanel_1;
 }
 /** @override @return {Widget} */
 m_next__() {
  if (!this.f_hasElement__org_gwtproject_user_client_ui_SimplePanel_1 || $Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_SimplePanel_1.f_widget__org_gwtproject_user_client_ui_SimplePanel, null)) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_hasElement__org_gwtproject_user_client_ui_SimplePanel_1 = false;
  return (this.f_returned__org_gwtproject_user_client_ui_SimplePanel_1 = this.f_$outer_this__org_gwtproject_user_client_ui_SimplePanel_1.f_widget__org_gwtproject_user_client_ui_SimplePanel);
 }
 /** @override */
 m_remove__() {
  if (!$Equality.$same(this.f_returned__org_gwtproject_user_client_ui_SimplePanel_1, null)) {
   this.f_$outer_this__org_gwtproject_user_client_ui_SimplePanel_1.m_remove__org_gwtproject_user_client_ui_Widget(this.f_returned__org_gwtproject_user_client_ui_SimplePanel_1);
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_SimplePanel_1() {
  this.f_hasElement__org_gwtproject_user_client_ui_SimplePanel_1 = !$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_SimplePanel_1.f_widget__org_gwtproject_user_client_ui_SimplePanel, null);
  this.f_returned__org_gwtproject_user_client_ui_SimplePanel_1 = null;
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.SimplePanel$1');

Iterator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=SimplePanel$1.js.map