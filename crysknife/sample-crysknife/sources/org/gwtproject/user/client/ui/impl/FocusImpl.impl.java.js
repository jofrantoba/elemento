goog.module('org.gwtproject.user.client.ui.impl.FocusImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FocusImplStandard = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.FocusImplStandard$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FocusImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {FocusImpl}
  * @public
  */
 static m_getFocusImplForPanel__() {
  FocusImpl.$clinit();
  return FocusImpl.f_implPanel__org_gwtproject_user_client_ui_impl_FocusImpl_;
 }
 /**
  * @return {FocusImpl}
  * @public
  */
 static m_getFocusImplForWidget__() {
  FocusImpl.$clinit();
  return FocusImpl.f_implWidget__org_gwtproject_user_client_ui_impl_FocusImpl_;
 }
 /**
  * @return {!FocusImpl}
  * @public
  */
 static $create__() {
  FocusImpl.$clinit();
  let $instance = new FocusImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_FocusImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_FocusImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {Object} elem
  * @public
  */
 m_blur__org_gwtproject_dom_client_Element(elem) {
  elem.blur();
 }
 /**
  * @return {Object}
  * @public
  */
 m_createFocusable__() {
  let e = /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  e.tabIndex = 0;
  return e;
 }
 /**
  * @param {Object} elem
  * @public
  */
 m_focus__org_gwtproject_dom_client_Element(elem) {
  elem.focus();
 }
 /**
  * @param {Object} elem
  * @return {number}
  * @public
  */
 m_getTabIndex__org_gwtproject_dom_client_Element(elem) {
  return Element_$Overlay.m_getTabIndex__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @param {Object} elem
  * @param {number} key
  * @public
  */
 m_setAccessKey__org_gwtproject_dom_client_Element__char(elem, key) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (elem), "accessKey", Character.m_toString__char(key));
 }
 /**
  * @param {Object} elem
  * @param {number} index
  * @public
  */
 m_setTabIndex__org_gwtproject_dom_client_Element__int(elem, index) {
  elem.tabIndex = index;
 }
 /**
  * @public
  */
 static $clinit() {
  FocusImpl.$clinit = () =>{};
  FocusImpl.$loadModules();
  j_l_Object.$clinit();
  FocusImpl.f_implPanel__org_gwtproject_user_client_ui_impl_FocusImpl_ = FocusImpl.$create__();
  FocusImpl.f_implWidget__org_gwtproject_user_client_ui_impl_FocusImpl_ = FocusImplStandard.$isInstance(FocusImpl.f_implPanel__org_gwtproject_user_client_ui_impl_FocusImpl_) ? FocusImpl.$create__() : FocusImpl.f_implPanel__org_gwtproject_user_client_ui_impl_FocusImpl_;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FocusImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  FocusImplStandard = goog.module.get('org.gwtproject.user.client.ui.impl.FocusImplStandard$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FocusImpl, 'org.gwtproject.user.client.ui.impl.FocusImpl');

/** @public {FocusImpl} */
FocusImpl.f_implPanel__org_gwtproject_user_client_ui_impl_FocusImpl_;
/** @public {FocusImpl} */
FocusImpl.f_implWidget__org_gwtproject_user_client_ui_impl_FocusImpl_;

exports = FocusImpl; 
//# sourceMappingURL=FocusImpl.js.map