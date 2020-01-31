goog.module('org.gwtproject.user.client.ui.StackLayoutPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let StackLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
let LayoutData = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.LayoutData$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Widget>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StackLayoutPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_1;
  /**@type {number}*/
  this.f_i__org_gwtproject_user_client_ui_StackLayoutPanel_1 = 0;
  /**@type {number}*/
  this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1 = 0;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_StackLayoutPanel(/** StackLayoutPanel */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel_1__org_gwtproject_user_client_ui_StackLayoutPanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel_1__org_gwtproject_user_client_ui_StackLayoutPanel(/** StackLayoutPanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_StackLayoutPanel_1();
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return this.f_i__org_gwtproject_user_client_ui_StackLayoutPanel_1 < this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_1.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.size();
 }
 /** @override @return {Widget} */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  return /**@type {LayoutData}*/ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_1.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1 = this.f_i__org_gwtproject_user_client_ui_StackLayoutPanel_1++), LayoutData)).f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData;
 }
 /** @override */
 m_remove__() {
  if (this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1 < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_1.m_remove__org_gwtproject_user_client_ui_Widget(/**@type {LayoutData}*/ ($Casts.$to(this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_1.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1), LayoutData)).f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData);
  this.f_i__org_gwtproject_user_client_ui_StackLayoutPanel_1 = this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1;
  this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1 = -1;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_StackLayoutPanel_1() {
  this.f_i__org_gwtproject_user_client_ui_StackLayoutPanel_1 = 0;
  this.f_last__org_gwtproject_user_client_ui_StackLayoutPanel_1 = -1;
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
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  LayoutData = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.LayoutData$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.StackLayoutPanel$1');

Iterator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=StackLayoutPanel$1.js.map