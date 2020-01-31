goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplTrident$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Impl = goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Delegate = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class ImplTrident extends Impl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ImplTrident} */
 static $create__() {
  ImplTrident.$clinit();
  let $instance = new ImplTrident();
  $instance.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident__() {
  this.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl__();
 }
 /** @override */
 m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(/** Object */ elem, /** Delegate */ delegate) {
  super.m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(elem, delegate);
  this.m_initResizeEventListener__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident(elem);
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  this.m_setResizeEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident(this.f_parent__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl, this);
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
  this.m_setResizeEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident(this.f_parent__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl, null);
 }
 
 m_initResizeEventListener__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident(/** Object */ elem) {
  let func = () =>{
   if ($Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (elem), "__resizeImpl")) {
    /**@type {Impl}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (elem), "__resizeImpl"), Impl)).m_handleResize__();
   }
  };
  /**@type {?function(...*):void}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (elem), "attachEvent"), $JavaScriptFunction))("onresize", func);
 }
 
 m_setResizeEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplTrident(/** Object */ elem, /** Impl */ listener) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object}*/ (elem), "__resizeImpl", listener);
 }
 
 static $clinit() {
  ImplTrident.$clinit = () =>{};
  ImplTrident.$loadModules();
  Impl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImplTrident;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
 
}
$Util.$setClassMetadata(ImplTrident, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$ImplTrident');

exports = ImplTrident; 
//# sourceMappingURL=ResizeLayoutPanel$ImplTrident.js.map