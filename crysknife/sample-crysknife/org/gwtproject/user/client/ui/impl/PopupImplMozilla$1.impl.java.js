goog.module('org.gwtproject.user.client.ui.impl.PopupImplMozilla.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let PopupImplMozilla = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.PopupImplMozilla$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PopupImplMozilla}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_impl_PopupImplMozilla_1;
  /**@type {Object}*/
  this.$c_outerElem;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_impl_PopupImplMozilla__org_gwtproject_dom_client_Element(/** PopupImplMozilla */ $outer_this, /** Object */ $c_outerElem) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_PopupImplMozilla_1__org_gwtproject_user_client_ui_impl_PopupImplMozilla__org_gwtproject_dom_client_Element($outer_this, $c_outerElem);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_PopupImplMozilla_1__org_gwtproject_user_client_ui_impl_PopupImplMozilla__org_gwtproject_dom_client_Element(/** PopupImplMozilla */ $outer_this, /** Object */ $c_outerElem) {
  this.f_$outer_this__org_gwtproject_user_client_ui_impl_PopupImplMozilla_1 = $outer_this;
  this.$c_outerElem = $c_outerElem;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.$c_outerElem.style, Overflow.f_AUTO__org_gwtproject_dom_style_shared_Overflow);
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
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.impl.PopupImplMozilla$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=PopupImplMozilla$1.js.map