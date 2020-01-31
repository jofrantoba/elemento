goog.module('org.gwtproject.user.client.ui.ValueBoxBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const HasChangeHandlers = goog.require('org.gwtproject.event.dom.client.HasChangeHandlers$impl');
const Target = goog.require('org.gwtproject.i18n.client.AutoDirectionHandler.Target$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');
const HasText = goog.require('org.gwtproject.user.client.ui.HasText$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ParseException = goog.forwardDeclare('java.text.ParseException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let ValueBoxEditor = goog.forwardDeclare('org.gwtproject.editor.ui.client.adapters.ValueBoxEditor$impl');
let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let AutoDirectionHandler = goog.forwardDeclare('org.gwtproject.i18n.client.AutoDirectionHandler$impl');
let BidiPolicy = goog.forwardDeclare('org.gwtproject.i18n.client.BidiPolicy$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.client.BidiUtils$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let Parser = goog.forwardDeclare('org.gwtproject.text.shared.Parser$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let TextAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');
let TextBoxImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.TextBoxImpl$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {HasChangeHandlers}
 * @implements {HasName}
 * @implements {HasDirectionEstimator}
 * @implements {HasValue<T>}
 * @implements {HasText}
 * @implements {Target}
 * @implements {IsEditor<ValueBoxEditor<T>>}
  */
class ValueBoxBase extends FocusWidget {
 /** @protected */
 constructor() {
  super();
  /**@type {AutoDirectionHandler}*/
  this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_;
  /**@type {Parser<T>}*/
  this.f_parser__org_gwtproject_user_client_ui_ValueBoxBase_;
  /**@type {Renderer<T>}*/
  this.f_renderer__org_gwtproject_user_client_ui_ValueBoxBase_;
  /**@type {ValueBoxEditor<T>}*/
  this.f_editor__org_gwtproject_user_client_ui_ValueBoxBase_;
  /**@type {Event}*/
  this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_;
  /**@type {boolean}*/
  this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_ValueBoxBase_ = false;
 }
 /** @template T @return {!ValueBoxBase<T>} */
 static $create__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(/** Object */ elem, /** Renderer<T> */ renderer, /** Parser<T> */ parser) {
  ValueBoxBase.$clinit();
  let $instance = new ValueBoxBase();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(elem, renderer, parser);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(/** Object */ elem, /** Renderer<T> */ renderer, /** Parser<T> */ parser) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__org_gwtproject_dom_client_Element(elem);
  this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_ = AutoDirectionHandler.m_addTo__org_gwtproject_i18n_client_AutoDirectionHandler_Target__boolean(this, BidiPolicy.m_isBidiEnabled__());
  this.f_renderer__org_gwtproject_user_client_ui_ValueBoxBase_ = renderer;
  this.f_parser__org_gwtproject_user_client_ui_ValueBoxBase_ = parser;
 }
 /** @override @return {HandlerRegistration} */
 m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(/** ChangeHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ChangeEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(/** ValueChangeHandler<T> */ handler) {
  if (!this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_ValueBoxBase_) {
   this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_ValueBoxBase_ = true;
   this.m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(ChangeHandler.$adapt((/** ChangeEvent */ event) =>{
    ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this, this.m_getValue__());
   }));
  }
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /** @override @return {ValueBoxEditor<T>} */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_ValueBoxBase_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_ValueBoxBase_ = /**@type {ValueBoxEditor<T>}*/ (ValueBoxEditor.m_of__org_gwtproject_user_client_ui_ValueBoxBase(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_ValueBoxBase_;
 }
 
 m_cancelKey__() {
  if (!$Equality.$same(this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_, null)) {
   $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_);
  }
 }
 /** @return {number} */
 m_getCursorPos__() {
  return ValueBoxBase.f_impl__org_gwtproject_user_client_ui_ValueBoxBase_.m_getCursorPos__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 
 m_setCursorPos__int(/** number */ pos) {
  this.m_setSelectionRange__int__int(pos, 0);
 }
 /** @override @return {Direction} */
 m_getDirection__() {
  return BidiUtils.m_getDirectionOnElement__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ direction) {
  BidiUtils.m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(this.m_getElement__(), direction);
 }
 /** @override @return {DirectionEstimator} */
 m_getDirectionEstimator__() {
  return this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_.m_getDirectionEstimator__();
 }
 /** @override */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(/** DirectionEstimator */ directionEstimator) {
  this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
 }
 /** @override @return {?string} */
 m_getName__() {
  return Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "name");
 }
 /** @override */
 m_setName__java_lang_String(/** ?string */ name) {
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getElement__(), "name", name);
 }
 /** @return {?string} */
 m_getSelectedText__() {
  let start = this.m_getCursorPos__();
  if (start < 0) {
   return "";
  }
  let length = this.m_getSelectionLength__();
  return j_l_String.m_substring__java_lang_String__int__int(this.m_getText__(), start, start + length);
 }
 /** @return {number} */
 m_getSelectionLength__() {
  return ValueBoxBase.f_impl__org_gwtproject_user_client_ui_ValueBoxBase_.m_getSelectionLength__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override @return {?string} */
 m_getText__() {
  return Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "value");
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getElement__(), "value", !$Equality.$same(text, null) ? text : "");
  this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_.m_refreshDirection__();
 }
 /** @override @return {T} */
 m_getValue__() {
  try {
   return this.m_getValueOrThrow__();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (ParseException.$isInstance(__$exc)) {
    let e = /**@type {ParseException}*/ (__$exc);
    return null;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override */
 m_setValue__java_lang_Object(/** T */ value) {
  this.m_setValue__java_lang_Object__boolean(value, false);
 }
 /** @return {T} */
 m_getValueOrThrow__() {
  let text = this.m_getText__();
  let parseResult = this.f_parser__org_gwtproject_user_client_ui_ValueBoxBase_.m_parse__java_lang_CharSequence(text);
  if ($Equality.$same("", text)) {
   return null;
  }
  return parseResult;
 }
 /** @return {boolean} */
 m_isReadOnly__() {
  return Element_$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "readOnly");
 }
 
 m_setReadOnly__boolean(/** boolean */ readOnly) {
  Element_$Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getElement__(), "readOnly", readOnly);
  let readOnlyStyle = "readonly";
  if (readOnly) {
   this.m_addStyleDependentName__java_lang_String(readOnlyStyle);
  } else {
   this.m_removeStyleDependentName__java_lang_String(readOnlyStyle);
  }
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  let type = DOM.m_eventGetType__org_gwtproject_user_client_Event(event);
  if ((type & Event.f_KEYEVENTS__org_gwtproject_user_client_Event) != 0) {
   this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_ = event;
   super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
   this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_ = null;
  } else {
   super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  }
 }
 
 m_selectAll__() {
  let length = j_l_String.m_length__java_lang_String(this.m_getText__());
  if (length > 0) {
   this.m_setSelectionRange__int__int(0, length);
  }
 }
 
 m_setAlignment__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(/** TextAlignment */ align) {
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "textAlign", align.m_getTextAlignString___$pp_org_gwtproject_user_client_ui());
 }
 /** @override */
 m_setDirectionEstimator__boolean(/** boolean */ enabled) {
  this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_.m_setDirectionEstimator__boolean(enabled);
 }
 /** @deprecated */
 m_setKey__char(/** number */ key) {
  if (!$Equality.$same(this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_, null)) {
   DOM.m_eventSetKeyCode__org_gwtproject_user_client_Event__char(this.f_currentEvent__org_gwtproject_user_client_ui_ValueBoxBase_, key);
  }
 }
 
 m_setSelectionRange__int__int(/** number */ pos, /** number */ length) {
  if (!this.m_isAttached__()) {
   return;
  }
  if (length < 0) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Length must be a positive integer. Length: " + length));
  }
  if (pos < 0 || length + pos > j_l_String.m_length__java_lang_String(this.m_getText__())) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("From Index: " + pos + "  To Index: " + (pos + length) + "  Text Length: " + j_l_String.m_length__java_lang_String(this.m_getText__())));
  }
  ValueBoxBase.f_impl__org_gwtproject_user_client_ui_ValueBoxBase_.m_setSelectionRange__org_gwtproject_dom_client_Element__int__int(this.m_getElement__(), pos, length);
 }
 /** @override */
 m_setValue__java_lang_Object__boolean(/** T */ value, /** boolean */ fireEvents) {
  let oldValue = fireEvents ? this.m_getValue__() : null;
  this.m_setText__java_lang_String(this.f_renderer__org_gwtproject_user_client_ui_ValueBoxBase_.m_render__java_lang_Object(value));
  if (fireEvents) {
   let newValue = this.m_getValue__();
   ValueChangeEvent.m_fireIfNotEqual__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(this, oldValue, newValue);
  }
 }
 /** @return {TextBoxImpl} */
 m_getImpl__() {
  return ValueBoxBase.f_impl__org_gwtproject_user_client_ui_ValueBoxBase_;
 }
 /** @override */
 m_onLoad__() {
  super.m_onLoad__();
  this.f_autoDirHandler__org_gwtproject_user_client_ui_ValueBoxBase_.m_refreshDirection__();
 }
 
 static $clinit() {
  ValueBoxBase.$clinit = () =>{};
  ValueBoxBase.$loadModules();
  FocusWidget.$clinit();
  ValueBoxBase.f_impl__org_gwtproject_user_client_ui_ValueBoxBase_ = TextBoxImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueBoxBase;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ParseException = goog.module.get('java.text.ParseException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  ValueBoxEditor = goog.module.get('org.gwtproject.editor.ui.client.adapters.ValueBoxEditor$impl');
  ChangeEvent = goog.module.get('org.gwtproject.event.dom.client.ChangeEvent$impl');
  ChangeHandler = goog.module.get('org.gwtproject.event.dom.client.ChangeHandler$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  AutoDirectionHandler = goog.module.get('org.gwtproject.i18n.client.AutoDirectionHandler$impl');
  BidiPolicy = goog.module.get('org.gwtproject.i18n.client.BidiPolicy$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.client.BidiUtils$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  TextBoxImpl = goog.module.get('org.gwtproject.user.client.ui.impl.TextBoxImpl$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ValueBoxBase, 'org.gwtproject.user.client.ui.ValueBoxBase');

HasChangeHandlers.$markImplementor(ValueBoxBase);
HasName.$markImplementor(ValueBoxBase);
HasDirectionEstimator.$markImplementor(ValueBoxBase);
HasValue.$markImplementor(ValueBoxBase);
HasText.$markImplementor(ValueBoxBase);
Target.$markImplementor(ValueBoxBase);
IsEditor.$markImplementor(ValueBoxBase);

/**@type {TextBoxImpl}*/
ValueBoxBase.f_impl__org_gwtproject_user_client_ui_ValueBoxBase_;

exports = ValueBoxBase; 
//# sourceMappingURL=ValueBoxBase.js.map