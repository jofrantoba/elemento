goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Delegate = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');

/**
 * @abstract
  */
class Impl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isAttached__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl = false;
  /**@type {Object}*/
  this.f_parent__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl;
  /**@type {Delegate}*/
  this.f_delegate__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_;
 }
 
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(/** Object */ elem, /** Delegate */ delegate) {
  this.f_parent__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl = elem;
  this.f_delegate__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_ = delegate;
 }
 
 m_onAttach__() {
  this.f_isAttached__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl = true;
 }
 
 m_onDetach__() {
  this.f_isAttached__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl = false;
 }
 
 m_handleResize__() {
  if (this.f_isAttached__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl && !$Equality.$same(this.f_delegate__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_, null)) {
   this.f_delegate__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_.m_onResize__();
  }
 }
 
 static $clinit() {
  Impl.$clinit = () =>{};
  Impl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Impl;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(Impl, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$Impl');

exports = Impl; 
//# sourceMappingURL=ResizeLayoutPanel$Impl.js.map