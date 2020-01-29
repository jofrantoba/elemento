goog.module('org.gwtproject.user.client.ui.impl.FormPanelImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLFormElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLFormElement.$Overlay$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let FormPanelImplHost = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.FormPanelImplHost$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class FormPanelImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!FormPanelImpl}
  * @public
  */
 static $create__() {
  FormPanelImpl.$clinit();
  let $instance = new FormPanelImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_FormPanelImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_FormPanelImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {Object} iframe
  * @return {?string}
  * @public
  */
 m_getContents__org_gwtproject_dom_client_Element(iframe) {
  try {
   let _iframe = /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(iframe));
   if ($Equality.$same(_iframe.contentWindow.document, null)) {
    return null;
   }
   return $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(_iframe.contentWindow.document.body);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (Exception.$isInstance(__$exc)) {
    let e = /**@type {Exception} */ (__$exc);
    return null;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @param {Object} form
  * @return {?string}
  * @public
  */
 m_getEncoding__org_gwtproject_dom_client_Element(form) {
  return $Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (form), "enctype"));
 }
 /**
  * @param {Object} iframe
  * @param {Object} form
  * @param {FormPanelImplHost} listener
  * @public
  */
 m_hookEvents__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_impl_FormPanelImplHost(iframe, form, listener) {
  if (!$Equality.$same(iframe, null)) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (iframe), "onload", /**@type {?function(Event):void} */ ((/** Event */ event) =>{
    if (!JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (iframe), "__formAction")) {
     return;
    }
    listener.m_onFrameLoad__();
   }));
  }
 }
 /**
  * @param {Object} form
  * @public
  */
 m_reset__org_gwtproject_dom_client_Element(form) {
  /**@type {HTMLFormElement} */ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(form), HTMLFormElement_$Overlay)).reset();
 }
 /**
  * @param {Object} form
  * @param {?string} encoding
  * @public
  */
 m_setEncoding__org_gwtproject_dom_client_Element__java_lang_String(form, encoding) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (form), "enctype", encoding);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (form), "encoding", encoding);
 }
 /**
  * @param {Object} form
  * @param {Object} iframe
  * @public
  */
 m_submit__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(form, iframe) {
  let map = /**@type {Object} */ (form);
  if (!$Equality.$same(iframe, null)) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (iframe), "__formAction", JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(map, "action"));
  } else {
   /**@type {HTMLFormElement} */ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(form), HTMLFormElement_$Overlay)).submit();
  }
 }
 /**
  * @param {Object} iframe
  * @param {Object} form
  * @public
  */
 m_unhookEvents__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(iframe, form) {
  if (!$Equality.$same(iframe, null)) {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (form), "onload", null);
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (form), "onsubmit", null);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  FormPanelImpl.$clinit = () =>{};
  FormPanelImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FormPanelImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HTMLFormElement_$Overlay = goog.module.get('elemental2.dom.HTMLFormElement.$Overlay$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(FormPanelImpl, 'org.gwtproject.user.client.ui.impl.FormPanelImpl');

exports = FormPanelImpl; 
//# sourceMappingURL=FormPanelImpl.js.map