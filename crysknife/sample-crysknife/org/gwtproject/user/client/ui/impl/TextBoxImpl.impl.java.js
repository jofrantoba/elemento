goog.module('org.gwtproject.user.client.ui.impl.TextBoxImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.TextBoxImpl.HTMLInputElement.$Overlay$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class TextBoxImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TextBoxImpl} */
 static $create__() {
  TextBoxImpl.$clinit();
  let $instance = new TextBoxImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_TextBoxImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_TextBoxImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {number} */
 m_getCursorPos__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let jsObject = Js.m_asPropertyMap__java_lang_Object(elem);
  if ($Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionStart")) {
   try {
    return Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionStart"))).m_intValue__();
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {} else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return 0;
 }
 /** @return {number} */
 m_getSelectionLength__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let jsObject = Js.m_asPropertyMap__java_lang_Object(elem);
  if ($Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionEnd") && $Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionStart")) {
   try {
    let selectionEnd = Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionEnd"))).m_intValue__();
    let selectionStart = Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(jsObject, "selectionStart"))).m_intValue__();
    return selectionEnd - selectionStart;
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {} else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return 0;
 }
 /** @return {number} */
 m_getTextAreaCursorPos__org_gwtproject_dom_client_Element(/** Object */ elem) {
  return this.m_getCursorPos__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} */
 m_getTextAreaSelectionLength__org_gwtproject_dom_client_Element(/** Object */ elem) {
  return this.m_getSelectionLength__org_gwtproject_dom_client_Element(elem);
 }
 
 m_setSelectionRange__org_gwtproject_dom_client_Element__int__int(/** Object */ elem, /** number */ pos, /** number */ length) {
  try {
   /**@type {HTMLInputElement}*/ (Js.m_uncheckedCast__java_lang_Object(elem)).setSelectionRange(pos, pos + length);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (Exception.$isInstance(__$exc)) {} else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 
 static $clinit() {
  TextBoxImpl.$clinit = () =>{};
  TextBoxImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextBoxImpl;
 }
 
 static $loadModules() {
  Exception = goog.module.get('java.lang.Exception$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(TextBoxImpl, 'org.gwtproject.user.client.ui.impl.TextBoxImpl');

exports = TextBoxImpl; 
//# sourceMappingURL=TextBoxImpl.js.map