goog.module('org.gwtproject.user.client.ui.WidgetIterators.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasWidgets = goog.forwardDeclare('org.gwtproject.user.client.ui.HasWidgets$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let WidgetIterators = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetIterators$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<Widget>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1 = 0;
  /**@type {number}*/
  this.f_last__org_gwtproject_user_client_ui_WidgetIterators_1 = 0;
  /**@type {boolean}*/
  this.f_widgetsWasCopied__org_gwtproject_user_client_ui_WidgetIterators_1 = false;
  /**@type {Array<Widget>}*/
  this.f_widgets__org_gwtproject_user_client_ui_WidgetIterators_1;
  /**@type {Array<Widget>}*/
  this.$c_contained;
  /**@type {HasWidgets}*/
  this.$c_container;
 }
 /** @return {!$1} */
 static $create__arrayOf_org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasWidgets(/** Array<Widget> */ $c_contained, /** HasWidgets */ $c_container) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_WidgetIterators_1__arrayOf_org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasWidgets($c_contained, $c_container);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_WidgetIterators_1__arrayOf_org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasWidgets(/** Array<Widget> */ $c_contained, /** HasWidgets */ $c_container) {
  this.$c_contained = $c_contained;
  this.$c_container = $c_container;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_WidgetIterators_1();
 }
 
 m_gotoNextIndex___$p_org_gwtproject_user_client_ui_WidgetIterators_1() {
  ++this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1;
  while (this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1 < this.$c_contained.length) {
   if (!$Equality.$same(this.$c_contained[this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1], null)) {
    return;
   }
   ++this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1;
  }
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return (this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1 < this.$c_contained.length);
 }
 /** @override @return {Widget} */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  this.f_last__org_gwtproject_user_client_ui_WidgetIterators_1 = this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1;
  let w = this.$c_contained[this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1];
  this.m_gotoNextIndex___$p_org_gwtproject_user_client_ui_WidgetIterators_1();
  return w;
 }
 /** @override */
 m_remove__() {
  if (this.f_last__org_gwtproject_user_client_ui_WidgetIterators_1 < 0) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  if (!this.f_widgetsWasCopied__org_gwtproject_user_client_ui_WidgetIterators_1) {
   this.f_widgets__org_gwtproject_user_client_ui_WidgetIterators_1 = WidgetIterators.m_copyWidgetArray__arrayOf_org_gwtproject_user_client_ui_Widget(this.f_widgets__org_gwtproject_user_client_ui_WidgetIterators_1);
   this.f_widgetsWasCopied__org_gwtproject_user_client_ui_WidgetIterators_1 = true;
  }
  this.$c_container.m_remove__org_gwtproject_user_client_ui_Widget(this.$c_contained[this.f_last__org_gwtproject_user_client_ui_WidgetIterators_1]);
  this.f_last__org_gwtproject_user_client_ui_WidgetIterators_1 = -1;
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_WidgetIterators_1() {
  this.f_index__org_gwtproject_user_client_ui_WidgetIterators_1 = -1;
  this.f_last__org_gwtproject_user_client_ui_WidgetIterators_1 = -1;
  this.f_widgetsWasCopied__org_gwtproject_user_client_ui_WidgetIterators_1 = false;
  this.f_widgets__org_gwtproject_user_client_ui_WidgetIterators_1 = this.$c_contained;
  this.m_gotoNextIndex___$p_org_gwtproject_user_client_ui_WidgetIterators_1();
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  WidgetIterators = goog.module.get('org.gwtproject.user.client.ui.WidgetIterators$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.WidgetIterators$1');

Iterator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=WidgetIterators$1.js.map