goog.module('org.gwtproject.user.client.ui.ResizeComposite$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {RequiresResize}
  */
class ResizeComposite extends Composite {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_ui_ResizeComposite__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
 }
 /** @override */
 m_initWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  $Asserts.$assertWithMessage(RequiresResize.$isInstance(widget), "ResizeComposite requires that its wrapped widget implement RequiresResize");
  super.m_initWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 /** @override */
 m_onResize__() {
  /**@type {RequiresResize}*/ ($Casts.$to(this.m_getWidget__(), RequiresResize)).m_onResize__();
 }
 
 static $clinit() {
  ResizeComposite.$clinit = () =>{};
  ResizeComposite.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResizeComposite;
 }
 
 static $loadModules() {
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ResizeComposite, 'org.gwtproject.user.client.ui.ResizeComposite');

RequiresResize.$markImplementor(ResizeComposite);

exports = ResizeComposite; 
//# sourceMappingURL=ResizeComposite.js.map