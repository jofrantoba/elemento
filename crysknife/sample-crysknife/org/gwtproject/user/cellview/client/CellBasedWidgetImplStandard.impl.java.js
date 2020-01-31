goog.module('org.gwtproject.user.cellview.client.CellBasedWidgetImplStandard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellBasedWidgetImpl = goog.require('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CellBasedWidgetImplStandard extends CellBasedWidgetImpl {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<?string>}*/
  this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_;
 }
 
 static m_handleNonBubblingEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  let eventTarget = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   return;
  }
  let target = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(eventTarget), Element_$Overlay));
  let typeName = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  let listener = DOM.m_getEventListener__org_gwtproject_dom_client_Element(target);
  while (!$Equality.$same(target, null) && $Equality.$same(listener, null)) {
   target = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(target)), Element_$Overlay));
   if (!$Equality.$same(target, null) && CellBasedWidgetImplStandard.m_isNonBubblingEventHandled__org_gwtproject_dom_client_Element__java_lang_String(target, typeName)) {
    listener = DOM.m_getEventListener__org_gwtproject_dom_client_Element(target);
   }
  }
  if (!$Equality.$same(listener, null)) {
   DOM.m_dispatchEvent__org_gwtproject_user_client_Event__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(event, target, listener);
  }
 }
 /** @return {boolean} */
 static m_isNonBubblingEventHandled__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ typeName) {
  return $Equality.$same("true", Element_$Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "__gwtCellBasedWidgetImplDispatching" + j_l_String.m_valueOf__java_lang_Object(typeName)));
 }
 /** @return {!CellBasedWidgetImplStandard} */
 static $create__() {
  CellBasedWidgetImplStandard.$clinit();
  let $instance = new CellBasedWidgetImplStandard();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard__() {
  this.$ctor__org_gwtproject_user_cellview_client_CellBasedWidgetImpl__();
  this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_ = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_.add(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents);
  this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_.add(BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents);
  this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_.add(BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents);
  this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_.add(BrowserEvents.f_ERROR__org_gwtproject_dom_client_BrowserEvents);
 }
 /** @override @return {number} */
 m_sinkEvent__org_gwtproject_user_client_ui_Widget__java_lang_String(/** Widget */ widget, /** ?string */ typeName) {
  if (this.f_nonBubblingEvents__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_.contains(typeName)) {
   if ($Equality.$same(CellBasedWidgetImplStandard.f_dispatchNonBubblingEvent__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_, null)) {
    this.m_initEventSystem___$p_org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard();
   }
   let elem = widget.m_getElement__();
   if (!CellBasedWidgetImplStandard.m_isNonBubblingEventHandled__org_gwtproject_dom_client_Element__java_lang_String(elem, typeName)) {
    elem.setAttribute("__gwtCellBasedWidgetImplDispatching" + j_l_String.m_valueOf__java_lang_Object(typeName), "true");
    this.m_sinkEventImpl__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard(elem, typeName);
   }
   return -1;
  } else {
   return super.m_sinkEvent__org_gwtproject_user_client_ui_Widget__java_lang_String(widget, typeName);
  }
 }
 
 m_initEventSystem___$p_org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard() {
  CellBasedWidgetImplStandard.f_dispatchNonBubblingEvent__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_ = /**@type {?function(*):void}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {?function(*):void}*/ ((/** * */ event) =>{
   CellBasedWidgetImplStandard.m_handleNonBubblingEvent__org_gwtproject_user_client_Event(/**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object(event)));
  })));
 }
 
 m_sinkEventImpl__org_gwtproject_dom_client_Element__java_lang_String_$p_org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard(/** Object */ elem, /** ?string */ typeName) {
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(/**@type {EventTarget}*/ (Js.m_uncheckedCast__java_lang_Object(elem)), typeName, /**@type {EventListener}*/ (Js.m_uncheckedCast__java_lang_Object(CellBasedWidgetImplStandard.f_dispatchNonBubblingEvent__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_)), true);
 }
 
 static $clinit() {
  CellBasedWidgetImplStandard.$clinit = () =>{};
  CellBasedWidgetImplStandard.$loadModules();
  CellBasedWidgetImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellBasedWidgetImplStandard;
 }
 
 static $loadModules() {
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellBasedWidgetImplStandard, 'org.gwtproject.user.cellview.client.CellBasedWidgetImplStandard');

/**@type {?function(*):void}*/
CellBasedWidgetImplStandard.f_dispatchNonBubblingEvent__org_gwtproject_user_cellview_client_CellBasedWidgetImplStandard_;

exports = CellBasedWidgetImplStandard; 
//# sourceMappingURL=CellBasedWidgetImplStandard.js.map