goog.module('org.gwtproject.user.client.ui.impl.RichTextAreaImplStandard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Formatter = goog.require('org.gwtproject.user.client.ui.RichTextArea.Formatter$impl');
const RichTextAreaImpl = goog.require('org.gwtproject.user.client.ui.impl.RichTextAreaImpl$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let HTMLIFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let FontSize = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.FontSize$impl');
let Justification = goog.forwardDeclare('org.gwtproject.user.client.ui.RichTextArea.Justification$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {Formatter}
  */
class RichTextAreaImplStandard extends RichTextAreaImpl {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_;
  /**@type {boolean}*/
  this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard = false;
  /**@type {boolean}*/
  this.f_isPendingFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = false;
  /**@type {boolean}*/
  this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = false;
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard__() {
  this.$ctor__org_gwtproject_user_client_ui_impl_RichTextAreaImpl__();
  this.$init___$p_org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard();
 }
 /** @override @return {Object} */
 m_createElement__() {
  return $Overlay.m_createIFrameElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
 }
 /** @override */
 m_createLink__java_lang_String(/** ?string */ url) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("CreateLink", url);
 }
 /** @override @return {?string} */
 m_getBackColor__() {
  return this.m_queryCommandValue__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("BackColor");
 }
 /** @override @return {?string} */
 m_getForeColor__() {
  return this.m_queryCommandValue__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("ForeColor");
 }
 /** @override @return {?string} */
 m_getHTML__() {
  return $Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null) ? this.m_getHTMLImpl__() : Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_);
 }
 /** @override @return {?string} */
 m_getText__() {
  return $Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null) ? this.m_getTextImpl__() : Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_);
 }
 /** @override */
 m_initElement__() {
  let _this = this;
  _this.m_onElementInitializing__();
  DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object((.../** ...* */ ignore) =>{
   if (!$Equality.$same(_this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, null)) {
    let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(_this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
    if (!$Equality.$same(iframe.contentWindow, null)) {
     JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (iframe.contentWindow), "document")), "designMode", "On");
     _this.m_onElementInitialized__();
    }
   }
  }, 1.0, new Array(0));
 }
 /** @override */
 m_insertHorizontalRule__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("InsertHorizontalRule", null);
 }
 /** @override */
 m_insertHTML__java_lang_String(/** ?string */ html) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("InsertHTML", html);
 }
 /** @override */
 m_insertImage__java_lang_String(/** ?string */ url) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("InsertImage", url);
 }
 /** @override */
 m_insertOrderedList__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("InsertOrderedList", null);
 }
 /** @override */
 m_insertUnorderedList__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("InsertUnorderedList", null);
 }
 /** @override @return {boolean} */
 m_isBold__() {
  return this.m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Bold");
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return $Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null) ? this.m_isEnabledImpl__() : !Element_$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, "disabled");
 }
 /** @override @return {boolean} */
 m_isItalic__() {
  return this.m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Italic");
 }
 /** @override @return {boolean} */
 m_isStrikethrough__() {
  return this.m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Strikethrough");
 }
 /** @override @return {boolean} */
 m_isSubscript__() {
  return this.m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Subscript");
 }
 /** @override @return {boolean} */
 m_isSuperscript__() {
  return this.m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Superscript");
 }
 /** @override @return {boolean} */
 m_isUnderlined__() {
  return this.m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Underline");
 }
 /** @override */
 m_leftIndent__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Outdent", null);
 }
 /** @override */
 m_redo__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Redo", "false");
 }
 /** @override */
 m_removeFormat__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("RemoveFormat", null);
 }
 /** @override */
 m_removeLink__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Unlink", "false");
 }
 /** @override */
 m_rightIndent__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Indent", null);
 }
 /** @override */
 m_selectAll__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("SelectAll", null);
 }
 /** @override */
 m_setBackColor__java_lang_String(/** ?string */ color) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("BackColor", color);
 }
 /** @override */
 m_setEnabled__boolean(/** boolean */ enabled) {
  if ($Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null)) {
   this.m_setEnabledImpl__boolean(enabled);
  } else {
   Element_$Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, "disabled", !enabled);
  }
 }
 /** @override */
 m_setFocus__boolean(/** boolean */ focused) {
  if (this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard) {
   this.f_isPendingFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = focused;
  } else {
   this.m_setFocusImpl__boolean(focused);
  }
 }
 /** @override */
 m_setFontName__java_lang_String(/** ?string */ name) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("FontName", name);
 }
 /** @override */
 m_setFontSize__org_gwtproject_user_client_ui_RichTextArea_FontSize(/** FontSize */ fontSize) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("FontSize", Integer.m_toString__int(fontSize.m_getNumber__()));
 }
 /** @override */
 m_setForeColor__java_lang_String(/** ?string */ color) {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("ForeColor", color);
 }
 /** @override */
 m_setHTML__java_lang_String(/** ?string */ html) {
  if ($Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null)) {
   this.m_setHTMLImpl__java_lang_String(html);
  } else {
   Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, html);
  }
 }
 /** @override */
 m_setJustification__org_gwtproject_user_client_ui_RichTextArea_Justification(/** Justification */ justification) {
  if ($Equality.$same(justification, Justification.f_CENTER__org_gwtproject_user_client_ui_RichTextArea_Justification)) {
   this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("JustifyCenter", null);
  } else if ($Equality.$same(justification, Justification.f_FULL__org_gwtproject_user_client_ui_RichTextArea_Justification)) {
   this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("JustifyFull", null);
  } else if ($Equality.$same(justification, Justification.f_LEFT__org_gwtproject_user_client_ui_RichTextArea_Justification)) {
   this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("JustifyLeft", null);
  } else if ($Equality.$same(justification, Justification.f_RIGHT__org_gwtproject_user_client_ui_RichTextArea_Justification)) {
   this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("JustifyRight", null);
  }
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  if ($Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null)) {
   this.m_setTextImpl__java_lang_String(text);
  } else {
   Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, text);
  }
 }
 /** @override */
 m_toggleBold__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Bold", "false");
 }
 /** @override */
 m_toggleItalic__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Italic", "false");
 }
 /** @override */
 m_toggleStrikethrough__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Strikethrough", "false");
 }
 /** @override */
 m_toggleSubscript__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Subscript", "false");
 }
 /** @override */
 m_toggleSuperscript__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Superscript", "false");
 }
 /** @override */
 m_toggleUnderline__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Underline", "False");
 }
 /** @override */
 m_undo__() {
  this.m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl("Undo", "false");
 }
 /** @override */
 m_uninitElement__() {
  this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = false;
  if (this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard) {
   this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard = false;
   return;
  }
  this.m_unhookEvents__();
  let html = this.m_getHTML__();
  let enabled = this.m_isEnabled__();
  this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = DOM.m_createDiv__();
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, html);
  this.m_setEnabled__boolean(enabled);
 }
 /** @return {?string} */
 m_getHTMLImpl__() {
  return Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), IFrameElement_$Overlay)).contentWindow.document.body);
 }
 /** @return {?string} */
 m_getTextImpl__() {
  return Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), IFrameElement_$Overlay)).contentWindow.document.body);
 }
 /** @override */
 m_hookEvents__() {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  let wnd = iframe.contentWindow;
  Element_$Overlay.m_setPropertyObject__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "__gwt_handler", /**@type {?function(Event):void}*/ ((/** Event */ event) =>{
   DOM.m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element(event, this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl);
  }));
  Element_$Overlay.m_setPropertyObject__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "__gwt_focusHandler", /**@type {?function(Event):void}*/ ((/** Event */ event_1) =>{
   if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_isFocused")) {
    return;
   }
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_isFocused", true);
   /**@type {?function(Event):void}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_handler"), $JavaScriptFunction))(event_1);
  }));
  Element_$Overlay.m_setPropertyObject__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl, "__gwt_blurHandler", /**@type {?function(Event):void}*/ ((/** Event */ event_2) =>{
   if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_isFocused")) {
    return;
   }
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_isFocused", true);
   /**@type {?function(Event):void}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_handler"), $JavaScriptFunction))(event_2);
  }));
  let __gwt_handler = /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_handler"));
  let __gwt_focusHandler = /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_focusHandler"));
  let __gwt_blurHandler = /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl), "__gwt_blurHandler"));
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "keydown", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "keyup", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "keypress", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mousedown", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mouseup", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mousemove", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mouseover", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mouseout", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "click", __gwt_handler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "focus", __gwt_focusHandler, true);
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "blur", __gwt_blurHandler, true);
 }
 /** @return {boolean} */
 m_isEnabledImpl__() {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  return j_l_String.m_equals__java_lang_String__java_lang_Object(j_l_String.m_toUpperCase__java_lang_String($Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (iframe.contentWindow), "document")), "designMode"))), "ON");
 }
 /** @override */
 m_onElementInitialized__() {
  if (!this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard) {
   return;
  }
  this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard = false;
  this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = true;
  if (!$Equality.$same(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, null)) {
   this.m_setHTMLImpl__java_lang_String(Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_));
   this.m_setEnabledImpl__boolean(this.m_isEnabled__());
   this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = null;
  }
  super.m_onElementInitialized__();
  if (this.f_isPendingFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_) {
   this.f_isPendingFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = false;
   this.m_setFocus__boolean(true);
  }
 }
 
 m_onElementInitializing__() {
  this.f_initializing__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard = true;
  this.f_isPendingFocus__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = false;
 }
 
 m_setEnabledImpl__boolean(/** boolean */ enabled) {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (iframe.contentWindow), "document")), "designMode", enabled ? "On" : "Off");
 }
 
 m_setFocusImpl__boolean(/** boolean */ focused) {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  if (focused) {
   iframe.contentWindow.focus();
  } else {
   iframe.contentWindow.blur();
  }
 }
 
 m_setHTMLImpl__java_lang_String(/** ?string */ html) {
  let iframe = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(iframe.contentWindow.document.body, html);
 }
 
 m_setTextImpl__java_lang_String(/** ?string */ text) {
  let iframe = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(iframe.contentWindow.document.body, text);
 }
 
 m_unhookEvents__() {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  let wnd = iframe.contentWindow;
  let asMap = /**@type {Object}*/ (iframe);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "keydown", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "keyup", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "keypress", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mousedown", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mouseup", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mousemove", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mouseover", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "mouseout", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "click", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_handler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "focus", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_focusHandler")), true);
  EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(wnd, "blur", /**@type {EventListener}*/ (JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(asMap, "__gwt_blurHandler")), true);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(asMap, "__gwt_handler", null);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(asMap, "__gwt_focusHandler", null);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(asMap, "__gwt_blurHandler", null);
 }
 
 m_execCommand__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(/** ?string */ cmd, /** ?string */ param) {
  $Asserts.$assertWithMessage(this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_, RichTextAreaImplStandard.f_INACTIVE_MESSAGE__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_);
  if (this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_) {
   this.m_setFocus__boolean(true);
   try {
    this.m_execCommandAssumingFocus__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(cmd, param);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {} else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
 }
 
 m_execCommandAssumingFocus__java_lang_String__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(/** ?string */ cmd, /** ?string */ param) {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  let document = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(iframe.contentWindow), "document")));
  /**@type {?function(?string, boolean, ?string):void}*/ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(document), "execCommand")), $JavaScriptFunction))(cmd, false, param);
 }
 /** @return {boolean} */
 m_queryCommandState__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(/** ?string */ cmd) {
  if (this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_) {
   this.m_setFocus__boolean(true);
   try {
    return this.m_queryCommandStateAssumingFocus__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(cmd);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     return false;
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return false;
 }
 /** @return {boolean} */
 m_queryCommandStateAssumingFocus__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(/** ?string */ cmd) {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  let document = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(iframe.contentWindow), "document")));
  return /**@type {?function(?string):boolean}*/ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(document), "queryCommandState")), $JavaScriptFunction))(cmd);
 }
 /** @return {?string} */
 m_queryCommandValue__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(/** ?string */ cmd) {
  if (this.f_isReady__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_) {
   this.m_setFocus__boolean(true);
   try {
    return this.m_queryCommandValueAssumingFocus__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(cmd);
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (Exception.$isInstance(__$exc)) {
     let e = /**@type {Exception}*/ (__$exc);
     return "";
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return "";
 }
 /** @return {?string} */
 m_queryCommandValueAssumingFocus__java_lang_String_$pp_org_gwtproject_user_client_ui_impl(/** ?string */ cmd) {
  let iframe = /**@type {HTMLIFrameElement}*/ (Js.m_uncheckedCast__java_lang_Object(this.f_elem__org_gwtproject_user_client_ui_impl_RichTextAreaImpl));
  let document = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(iframe.contentWindow), "document")));
  return /**@type {?function(?string):?string}*/ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(document), "queryCommandValue")), $JavaScriptFunction))(cmd);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard() {
  this.f_beforeInitPlaceholder__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = DOM.m_createDiv__();
 }
 
 static $clinit() {
  RichTextAreaImplStandard.$clinit = () =>{};
  RichTextAreaImplStandard.$loadModules();
  RichTextAreaImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RichTextAreaImplStandard;
 }
 
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  IFrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Justification = goog.module.get('org.gwtproject.user.client.ui.RichTextArea.Justification$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(RichTextAreaImplStandard, 'org.gwtproject.user.client.ui.impl.RichTextAreaImplStandard');

Formatter.$markImplementor(RichTextAreaImplStandard);

/**@const {?string}*/
RichTextAreaImplStandard.f_INACTIVE_MESSAGE__org_gwtproject_user_client_ui_impl_RichTextAreaImplStandard_ = "RichTextArea formatters cannot be used until the RichTextArea is attached and focused.";

exports = RichTextAreaImplStandard; 
//# sourceMappingURL=RichTextAreaImplStandard.js.map