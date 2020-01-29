goog.module('org.gwtproject.user.client.ui.impl.FocusImplStandard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FocusImpl = goog.require('org.gwtproject.user.client.ui.impl.FocusImpl$impl');

let HeightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.HeightUnionType.$Overlay$impl');
let OpacityUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
let WidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.WidthUnionType.$Overlay$impl');
let ZIndexUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.ZIndexUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let Character = goog.forwardDeclare('java.lang.Character$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let org_gwtproject_dom_client_Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FocusImplStandard extends FocusImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!FocusImplStandard}
  * @public
  */
 static $create__() {
  FocusImplStandard.$clinit();
  let $instance = new FocusImplStandard();
  $instance.$ctor__org_gwtproject_user_client_ui_impl_FocusImplStandard__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_FocusImplStandard__() {
  this.$ctor__org_gwtproject_user_client_ui_impl_FocusImpl__();
 }
 /**
  * @param {Object} focusHandler
  * @return {Object}
  * @public
  */
 static m_createFocusable0__org_gwtproject_core_client_JavaScriptObject(focusHandler) {
  let div = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  div.tabIndex = 0;
  let input = /**@type {HTMLInputElement} */ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("input"), HTMLInputElement_$Overlay));
  input.type = "text";
  input.tabIndex = -1;
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(input, "aria-hidden", "true");
  let style = input.style;
  style.opacity = /**@type {?} */ (Js.m_cast__java_lang_Object(0));
  style.height = /**@type {?} */ (Js.m_cast__java_lang_Object("1px"));
  style.width = /**@type {?} */ (Js.m_cast__java_lang_Object("1px"));
  style.zIndex = /**@type {?} */ (Js.m_cast__java_lang_Object(-1));
  style.overflow = "hidden";
  style.position = "absolute";
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(input, "focus", /**@type {EventListener} */ (Js.m_uncheckedCast__java_lang_Object(focusHandler)), false);
  div.appendChild(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(input)));
  return div;
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_createFocusable__() {
  return FocusImplStandard.m_createFocusable0__org_gwtproject_core_client_JavaScriptObject(this.m_ensureFocusHandler___$p_org_gwtproject_user_client_ui_impl_FocusImplStandard());
 }
 /**
  * @override
  * @param {Object} elem
  * @param {number} key
  * @public
  */
 m_setAccessKey__org_gwtproject_dom_client_Element__char(elem, key) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (elem.firstChild), "accessKey", Character.m_toString__char(key));
 }
 /**
  * @return {Object}
  * @public
  */
 m_createFocusHandler___$p_org_gwtproject_user_client_ui_impl_FocusImplStandard() {
  let func = (.../** ...* */ event) =>{
   let _this = /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(this));
   let div = /**@type {HTMLDivElement} */ (Js.m_uncheckedCast__java_lang_Object(_this.parentNode));
   if (!$Equality.$same(div.onfocus, null)) {
    DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object((.../** ...* */ p0) =>{
     div.focus();
    }, 0, []);
   }
  };
  return /**@type {Object} */ ($Casts.$to(func, JavaScriptObject_$Overlay));
 }
 /**
  * @return {Object}
  * @public
  */
 m_ensureFocusHandler___$p_org_gwtproject_user_client_ui_impl_FocusImplStandard() {
  return !$Equality.$same(FocusImplStandard.$f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard, null) ? FocusImplStandard.$f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard : (FocusImplStandard.$f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard = this.m_createFocusHandler___$p_org_gwtproject_user_client_ui_impl_FocusImplStandard());
 }
 /**
  * @return {Object}
  * @public
  */
 static get f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard() {
  return (FocusImplStandard.$clinit(), FocusImplStandard.$f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard);
 }
 /**
  * @param {Object} value
  * @public
  */
 static set f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard(value) {
  (FocusImplStandard.$clinit(), FocusImplStandard.$f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard = value);
 }
 /**
  * @public
  */
 static $clinit() {
  FocusImplStandard.$clinit = () =>{};
  FocusImplStandard.$loadModules();
  FocusImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FocusImplStandard;
 }
 /**
  * @public
  */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  Character = goog.module.get('java.lang.Character$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FocusImplStandard, 'org.gwtproject.user.client.ui.impl.FocusImplStandard');

/** @private {Object} */
FocusImplStandard.$f_focusHandler__org_gwtproject_user_client_ui_impl_FocusImplStandard;

exports = FocusImplStandard; 
//# sourceMappingURL=FocusImplStandard.js.map