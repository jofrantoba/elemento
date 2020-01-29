goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventListener = goog.require('org.gwtproject.user.client.EventListener$impl');
const Impl = goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Visibility = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let Delegate = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard.$1$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {EventListener}
  */
class ImplStandard extends Impl {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_;
  /** @public {Object} */
  this.f_collapsibleInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_;
  /** @public {Object} */
  this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_;
  /** @public {Object} */
  this.f_expandableInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_;
  /** @public {number} */
  this.f_lastOffsetHeight__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = 0;
  /** @public {number} */
  this.f_lastOffsetWidth__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = 0;
  /** @public {boolean} */
  this.f_resettingScrollables__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = false;
 }
 /**
  * @return {!ImplStandard}
  * @public
  */
 static $create__() {
  ImplStandard.$clinit();
  let $instance = new ImplStandard();
  $instance.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard__() {
  this.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl__();
  this.$init___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard();
 }
 /**
  * @override
  * @param {Object} elem
  * @param {Delegate} delegate
  * @public
  */
 m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(elem, delegate) {
  super.m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(elem, delegate);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "minWidth", ImplStandard.f_MIN_SIZE__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "minHeight", ImplStandard.f_MIN_SIZE__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_);
  this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  $Overlay.m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, Visibility.f_HIDDEN__org_gwtproject_dom_style_shared_Visibility);
  $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow);
  $Overlay.m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, -1);
  elem.appendChild(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_);
  this.f_expandableInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.appendChild(this.f_expandableInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_);
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, Event.f_ONSCROLL__org_gwtproject_user_client_Event);
  this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  $Overlay.m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, Visibility.f_HIDDEN__org_gwtproject_dom_style_shared_Visibility);
  $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow);
  $Overlay.m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, -1);
  elem.appendChild(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_);
  this.f_collapsibleInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_collapsibleInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, 200, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_collapsibleInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, 200, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.appendChild(this.f_collapsibleInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_);
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, Event.f_ONSCROLL__org_gwtproject_user_client_Event);
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, this);
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, this);
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand($1.$create__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard(this));
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  if (!this.f_resettingScrollables__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ && Event.f_ONSCROLL__org_gwtproject_user_client_Event == DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   let eventTarget = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
   if (!Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
    return;
   }
   let target = /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(eventTarget), Element_$Overlay));
   if ($Equality.$same(target, this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_) || $Equality.$same(target, this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_)) {
    this.m_handleResize__();
   }
  }
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  super.m_onDetach__();
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, null);
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, null);
  this.f_lastOffsetHeight__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = -1;
  this.f_lastOffsetWidth__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = -1;
 }
 /**
  * @override
  * @public
  */
 m_handleResize__() {
  if (this.m_resetScrollables___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard()) {
   super.m_handleResize__();
  }
 }
 /**
  * @return {boolean}
  * @public
  */
 m_resetScrollables___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard() {
  if (this.f_resettingScrollables__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_) {
   return false;
  }
  this.f_resettingScrollables__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = true;
  let offsetHeight = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_parent__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl);
  let offsetWidth = Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(this.f_parent__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl);
  let height = offsetHeight + 100;
  let width = offsetWidth + 100;
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_expandableInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, height, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_expandableInner__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.style, width, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.scrollTop = height;
  Element_$Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.f_expandable__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, width);
  this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_.scrollTop = Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_) + 100;
  Element_$Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_, Element_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(this.f_collapsible__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_) + 100);
  if (this.f_lastOffsetHeight__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ != offsetHeight || this.f_lastOffsetWidth__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ != offsetWidth) {
   this.f_lastOffsetHeight__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = offsetHeight;
   this.f_lastOffsetWidth__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = offsetWidth;
   this.f_resettingScrollables__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = false;
   return true;
  }
  this.f_resettingScrollables__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = false;
  return false;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard() {
  this.f_lastOffsetHeight__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = -1;
  this.f_lastOffsetWidth__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  ImplStandard.$clinit = () =>{};
  ImplStandard.$loadModules();
  Impl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ImplStandard;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Visibility = goog.module.get('org.gwtproject.dom.style.shared.Visibility$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard.$1$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ImplStandard, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$ImplStandard');

EventListener.$markImplementor(ImplStandard);

/** @public {?string} @const */
ImplStandard.f_MIN_SIZE__org_gwtproject_user_client_ui_ResizeLayoutPanel_ImplStandard_ = "20px";

exports = ImplStandard; 
//# sourceMappingURL=ResizeLayoutPanel$ImplStandard.js.map