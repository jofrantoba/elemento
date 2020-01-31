goog.module('org.gwtproject.user.client.DOM$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let OptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let SelectElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let EventListener = goog.forwardDeclare('org.gwtproject.user.client.EventListener$impl');
let DOMImpl = goog.forwardDeclare('org.gwtproject.user.client.impl.DOMImpl$impl');
let DOMImplStandardBase = goog.forwardDeclare('org.gwtproject.user.client.impl.DOMImplStandardBase$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class DOM extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DOM} */
 static $create__() {
  DOM.$clinit();
  let $instance = new DOM();
  $instance.$ctor__org_gwtproject_user_client_DOM__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_DOM__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child) {
  DOM.$clinit();
  $Asserts.$assertWithMessage(!DOM.m_isPotential__org_gwtproject_core_client_JavaScriptObject(parent), "Cannot append to a PotentialElement");
  parent.appendChild(DOM.m_resolve__org_gwtproject_dom_client_Element(child));
 }
 /** @return {Object} */
 static m_clone__org_gwtproject_dom_client_Element__boolean(/** Object */ elem, /** boolean */ deep) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(elem.cloneNode(deep)), Element_$Overlay));
 }
 /** @return {boolean} @deprecated */
 static m_compare__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ elem1, /** Object */ elem2) {
  DOM.$clinit();
  return $Equality.$same(elem1, elem2);
 }
 /** @return {Object} */
 static m_createAnchor__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createAnchorElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createButton__() {
  DOM.$clinit();
  return Document_$Overlay.m_createPushButtonElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
 }
 /** @return {Object} */
 static m_createCaption__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createCaptionElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createCol__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createColElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createColGroup__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createColGroupElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createDiv__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createElement__java_lang_String(/** ?string */ tagName) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(Document_$Overlay.m_get__(), tagName)), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createFieldSet__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createFieldSetElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createForm__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createFormElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createIFrame__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createIFrameElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createImg__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createImageElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createInputCheck__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createCheckInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createInputPassword__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createPasswordInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createInputRadio__java_lang_String(/** ?string */ name) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createRadioInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(Document_$Overlay.m_get__(), name)), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createInputText__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createLabel__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createLabelElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createLegend__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createLegendElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createOption__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createOptionElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} @deprecated */
 static m_createOptions__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(Document_$Overlay.m_get__(), "options")), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createSelect__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createSelectElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createSelect__boolean(/** boolean */ multiple) {
  DOM.$clinit();
  let selectElement = Document_$Overlay.m_createSelectElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  selectElement.multiple = multiple;
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(selectElement), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createSpan__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createSpanElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTable__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTableElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTBody__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTBodyElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTD__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTDElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTextArea__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTextAreaElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTFoot__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTFootElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTH__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTHElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTHead__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTHeadElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createTR__() {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createTRElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
 }
 /** @return {?string} */
 static m_createUniqueId__() {
  DOM.$clinit();
  return Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
 }
 
 static m_eventCancelBubble__org_gwtproject_user_client_Event__boolean(/** Event */ evt, /** boolean */ cancel) {
  DOM.$clinit();
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_eventCancelBubble__org_gwtproject_user_client_Event__boolean(evt, cancel);
 }
 /** @return {boolean} @deprecated */
 static m_eventGetAltKey__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getAltKey__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetButton__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetClientX__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetClientY__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {boolean} @deprecated */
 static m_eventGetCtrlKey__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getCtrlKey__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {Event} */
 static m_eventGetCurrentEvent__() {
  DOM.$clinit();
  return DOM.f_currentEvent__org_gwtproject_user_client_DOM_;
 }
 /** @return {Object} */
 static m_eventGetCurrentTarget__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getCurrentEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
 }
 /** @return {Object} */
 static m_eventGetFromElement__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_eventGetFromElement__org_gwtproject_user_client_Event(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetKeyCode__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {boolean} @deprecated */
 static m_eventGetMetaKey__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetMouseWheelVelocityY__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getMouseWheelVelocityY__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {boolean} @deprecated */
 static m_eventGetRepeat__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_eventGetRepeat__org_gwtproject_user_client_Event(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetScreenX__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getScreenX__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {number} @deprecated */
 static m_eventGetScreenY__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getScreenY__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {boolean} @deprecated */
 static m_eventGetShiftKey__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getShiftKey__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {Object} */
 static m_eventGetTarget__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(evt)), Element_$Overlay));
 }
 /** @return {Object} */
 static m_eventGetToElement__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_eventGetToElement__org_gwtproject_user_client_Event(evt);
 }
 /** @return {number} */
 static m_eventGetType__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_eventGetTypeInt__org_gwtproject_user_client_Event(evt);
 }
 /** @return {?string} @deprecated */
 static m_eventGetTypeString__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @deprecated */
 static m_eventPreventDefault__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @deprecated */
 static m_eventSetKeyCode__org_gwtproject_user_client_Event__char(/** Event */ evt, /** number */ key) {
  DOM.$clinit();
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_eventSetKeyCode__org_gwtproject_user_client_Event__char(evt, key);
 }
 /** @return {?string} @deprecated */
 static m_eventToString__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  return NativeEvent_$Overlay.m_getString__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
 }
 /** @return {number} @deprecated */
 static m_getAbsoluteLeft__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} @deprecated */
 static m_getAbsoluteTop__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {?string} @deprecated */
 static m_getAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  return Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attr);
 }
 /** @return {boolean} @deprecated */
 static m_getBooleanAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  return Element_$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attr);
 }
 /** @return {Object} */
 static m_getCaptureElement__() {
  DOM.$clinit();
  return DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_;
 }
 /** @return {Object} */
 static m_getChild__org_gwtproject_dom_client_Element__int(/** Object */ parent, /** number */ index) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_getChild__org_gwtproject_dom_client_Element__int(parent, index);
 }
 /** @return {number} */
 static m_getChildCount__org_gwtproject_dom_client_Element(/** Object */ parent) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_getChildCount__org_gwtproject_dom_client_Element(parent);
 }
 /** @return {number} */
 static m_getChildIndex__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_getChildIndex__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(parent, child);
 }
 /** @return {?string} @deprecated */
 static m_getElementAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  return Element_$Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attr);
 }
 /** @return {Object} */
 static m_getElementById__java_lang_String(/** ?string */ id) {
  DOM.$clinit();
  return Document_$Overlay.m_get__().getElementById(id);
 }
 /** @return {?string} @deprecated */
 static m_getElementProperty__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ prop) {
  DOM.$clinit();
  return Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, prop);
 }
 /** @return {boolean} @deprecated */
 static m_getElementPropertyBoolean__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ prop) {
  DOM.$clinit();
  return Element_$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, prop);
 }
 /** @return {number} @deprecated */
 static m_getElementPropertyInt__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ prop) {
  DOM.$clinit();
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, prop);
 }
 /** @return {EventListener} */
 static m_getEventListener__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return DOMImpl.m_getEventListener__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} */
 static m_getEventsSunk__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return DOM.$f_impl__org_gwtproject_user_client_DOM.m_getEventsSunk__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {Object} */
 static m_getFirstChild__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {?string} */
 static m_getImgSrc__org_gwtproject_dom_client_Element(/** Object */ img) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(img), ImageElement_$Overlay)).src;
 }
 /** @return {?string} @deprecated */
 static m_getInnerHTML__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {?string} @deprecated */
 static m_getInnerText__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} @deprecated */
 static m_getIntAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, attr);
 }
 /** @return {number} */
 static m_getIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  let val = Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(elem.style, attr);
  return !$Equality.$same(val, null) ? Integer.m_valueOf__java_lang_String(val).m_intValue__() : 0;
 }
 /** @return {Object} */
 static m_getNextSibling__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(elem.nextSibling), Element_$Overlay));
 }
 /** @return {Object} */
 static m_getParent__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(elem);
 }
 /** @return {?string} @deprecated */
 static m_getStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(elem.style, attr);
 }
 
 static m_insertBefore__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child, /** Object */ before) {
  DOM.$clinit();
  $Asserts.$assertWithMessage(!DOM.m_isPotential__org_gwtproject_core_client_JavaScriptObject(parent), "Cannot insert into a PotentialElement");
  parent.insertBefore(DOM.m_resolve__org_gwtproject_dom_client_Element(child), before);
 }
 
 static m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(/** Object */ parent, /** Object */ child, /** number */ index) {
  DOM.$clinit();
  $Asserts.$assertWithMessage(!DOM.m_isPotential__org_gwtproject_core_client_JavaScriptObject(parent), "Cannot insert into a PotentialElement");
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(parent, DOM.m_resolve__org_gwtproject_dom_client_Element(child), index);
 }
 
 static m_insertListItem__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String__int(/** Object */ selectElem, /** ?string */ item, /** ?string */ value, /** number */ index) {
  DOM.$clinit();
  $Asserts.$assertWithMessage(!DOM.m_isPotential__org_gwtproject_core_client_JavaScriptObject(selectElem), "Cannot insert into a PotentialElement");
  let select = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(selectElem), SelectElement_$Overlay));
  let option = Document_$Overlay.m_createOptionElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  option.text = item;
  option.value = value;
  if ((index == -1) || (index == SelectElement_$Overlay.m_getLength__$devirt__org_gwtproject_dom_client_SelectElement(select))) {
   SelectElement_$Overlay.m_add__$devirt__org_gwtproject_dom_client_SelectElement__org_gwtproject_dom_client_OptionElement__org_gwtproject_dom_client_OptionElement(select, option, null);
  } else {
   let before = /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(select), index), OptionElement_$Overlay));
   SelectElement_$Overlay.m_add__$devirt__org_gwtproject_dom_client_SelectElement__org_gwtproject_dom_client_OptionElement__org_gwtproject_dom_client_OptionElement(select, option, before);
  }
 }
 /** @return {boolean} */
 static m_isPotential__org_gwtproject_core_client_JavaScriptObject(/** Object */ o) {
  DOM.$clinit();
  try {
   return (!$Equality.$same(o, null)) && JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(o), "__gwt_resolve");
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (Exception.$isInstance(__$exc)) {} else {
    throw $Exceptions.toJs(__$exc);
   }
  }
  return false;
 }
 /** @return {Object} */
 static m_resolve__org_gwtproject_dom_client_Element(/** Object */ maybePotential) {
  if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(maybePotential), "__gwt_resolve")) {
   return /**@type {Object}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(maybePotential), "__gwt_resolve"), Element_$Overlay));
  } else {
   return maybePotential;
  }
 }
 /** @return {boolean} @deprecated */
 static m_isOrHasChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child) {
  DOM.$clinit();
  return Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(parent, child);
 }
 
 static m_releaseCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  if ((!$Equality.$same(DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_, null)) && $Equality.$same(elem, DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_)) {
   DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_ = null;
  }
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_releaseCapture__org_gwtproject_dom_client_Element(elem);
 }
 /** @deprecated */
 static m_removeChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child) {
  DOM.$clinit();
  parent.removeChild(child);
 }
 /** @deprecated */
 static m_removeElementAttribute__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ attr) {
  DOM.$clinit();
  elem.removeAttribute(attr);
 }
 /** @deprecated */
 static m_scrollIntoView__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  Element_$Overlay.m_scrollIntoView__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @deprecated */
 static m_setAttribute__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ attr, /** ?string */ value) {
  DOM.$clinit();
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, attr, value);
 }
 /** @deprecated */
 static m_setBooleanAttribute__org_gwtproject_dom_client_Element__java_lang_String__boolean(/** Object */ elem, /** ?string */ attr, /** boolean */ value) {
  DOM.$clinit();
  Element_$Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(elem, attr, value);
 }
 
 static m_setCapture__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_ = elem;
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_setCapture__org_gwtproject_dom_client_Element(elem);
 }
 /** @deprecated */
 static m_setElementAttribute__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ attr, /** ?string */ value) {
  DOM.$clinit();
  elem.setAttribute(attr, value);
 }
 /** @deprecated */
 static m_setElementProperty__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ prop, /** ?string */ value) {
  DOM.$clinit();
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, prop, value);
 }
 /** @deprecated */
 static m_setElementPropertyBoolean__org_gwtproject_dom_client_Element__java_lang_String__boolean(/** Object */ elem, /** ?string */ prop, /** boolean */ value) {
  DOM.$clinit();
  Element_$Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(elem, prop, value);
 }
 /** @deprecated */
 static m_setElementPropertyInt__org_gwtproject_dom_client_Element__java_lang_String__int(/** Object */ elem, /** ?string */ prop, /** number */ value) {
  DOM.$clinit();
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(elem, prop, value);
 }
 
 static m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(/** Object */ elem, /** EventListener */ listener) {
  DOM.$clinit();
  DOMImpl.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(elem, listener);
 }
 
 static m_setImgSrc__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ img, /** ?string */ src) {
  DOM.$clinit();
  /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(img), ImageElement_$Overlay)).src = src;
 }
 /** @deprecated */
 static m_setInnerHTML__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ html) {
  DOM.$clinit();
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, html);
 }
 /** @deprecated */
 static m_setInnerText__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ text) {
  DOM.$clinit();
  Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, text);
 }
 /** @deprecated */
 static m_setIntAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(/** Object */ elem, /** ?string */ attr, /** number */ value) {
  DOM.$clinit();
  Element_$Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(elem, attr, value);
 }
 
 static m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(/** Object */ elem, /** ?string */ attr, /** number */ value) {
  DOM.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, attr, Integer.m_toString__int(value));
 }
 
 static m_setOptionText__org_gwtproject_dom_client_Element__java_lang_String__int(/** Object */ select, /** ?string */ text, /** number */ index) {
  DOM.$clinit();
  /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(SelectElement_$Overlay.m_getOptions__$devirt__org_gwtproject_dom_client_SelectElement(/**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(select), SelectElement_$Overlay))), index), OptionElement_$Overlay)).text = text;
 }
 /** @deprecated */
 static m_setStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ elem, /** ?string */ attr, /** ?string */ value) {
  DOM.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, attr, value);
 }
 
 static m_sinkBitlessEvent__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ eventTypeName) {
  DOM.$clinit();
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_sinkBitlessEvent__org_gwtproject_dom_client_Element__java_lang_String(elem, eventTypeName);
 }
 
 static m_sinkEvents__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ eventBits) {
  DOM.$clinit();
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, eventBits);
 }
 /** @return {?string} @deprecated */
 static m_toString__org_gwtproject_dom_client_Element(/** Object */ elem) {
  DOM.$clinit();
  return Element_$Overlay.m_getString__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @return {number} @deprecated */
 static m_windowGetClientHeight__() {
  DOM.$clinit();
  return Window.m_getClientHeight__();
 }
 /** @return {number} @deprecated */
 static m_windowGetClientWidth__() {
  DOM.$clinit();
  return Window.m_getClientWidth__();
 }
 
 static m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(/** Event */ evt, /** Object */ elem, /** EventListener */ listener) {
  DOM.$clinit();
  let prevCurrentEvent = DOM.f_currentEvent__org_gwtproject_user_client_DOM_;
  DOM.f_currentEvent__org_gwtproject_user_client_DOM_ = evt;
  DOM.m_dispatchEventImpl__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(evt, elem, listener);
  DOM.f_currentEvent__org_gwtproject_user_client_DOM_ = prevCurrentEvent;
 }
 /** @return {boolean} */
 static m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element(/** Event */ evt, /** Object */ elem) {
  DOM.$clinit();
  let eventListener = DOM.m_getEventListener__org_gwtproject_dom_client_Element(elem);
  if ($Equality.$same(eventListener, null)) {
   return false;
  }
  DOM.m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(evt, elem, eventListener);
  return true;
 }
 
 static m_maybeInitializeEventSystem__() {
  DOM.$clinit();
  DOM.$f_impl__org_gwtproject_user_client_DOM.m_maybeInitializeEventSystem__();
 }
 /** @return {boolean} */
 static m_previewEvent__org_gwtproject_user_client_Event(/** Event */ evt) {
  DOM.$clinit();
  let ret = Event.m_fireNativePreviewEvent__org_gwtproject_dom_client_NativeEvent(evt);
  if (!ret && !$Equality.$same(evt, null)) {
   NativeEvent_$Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
   NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(evt);
  }
  return ret;
 }
 
 static m_dispatchEventImpl__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(/** Event */ evt, /** Object */ elem, /** EventListener */ listener) {
  if ($Equality.$same(elem, DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_)) {
   if (DOM.m_eventGetType__org_gwtproject_user_client_Event(evt) == Event.f_ONLOSECAPTURE__org_gwtproject_user_client_Event) {
    DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_ = null;
   }
  }
  listener.m_onBrowserEvent__org_gwtproject_user_client_Event(evt);
 }
 /** @return {DOMImpl} */
 static get f_impl__org_gwtproject_user_client_DOM() {
  return (DOM.$clinit(), DOM.$f_impl__org_gwtproject_user_client_DOM);
 }
 
 static $clinit() {
  DOM.$clinit = () =>{};
  DOM.$loadModules();
  j_l_Object.$clinit();
  DOM.f_currentEvent__org_gwtproject_user_client_DOM_ = null;
  DOM.$f_impl__org_gwtproject_user_client_DOM = DOMImplStandardBase.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOM;
 }
 
 static $loadModules() {
  Exception = goog.module.get('java.lang.Exception$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  ImageElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  OptionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
  SelectElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  DOMImpl = goog.module.get('org.gwtproject.user.client.impl.DOMImpl$impl');
  DOMImplStandardBase = goog.module.get('org.gwtproject.user.client.impl.DOMImplStandardBase$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DOM, 'org.gwtproject.user.client.DOM');

/**@type {Event}*/
DOM.f_currentEvent__org_gwtproject_user_client_DOM_;
/**@private {DOMImpl}*/
DOM.$f_impl__org_gwtproject_user_client_DOM;
/**@type {Object}*/
DOM.f_sCaptureElem__org_gwtproject_user_client_DOM_;

exports = DOM; 
//# sourceMappingURL=DOM.js.map