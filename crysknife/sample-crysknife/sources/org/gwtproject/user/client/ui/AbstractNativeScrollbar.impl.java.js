goog.module('org.gwtproject.user.client.ui.AbstractNativeScrollbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasScrollHandlers = goog.require('org.gwtproject.event.dom.client.HasScrollHandlers$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let ScrollHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');

/**
 * @abstract
 * @implements {HasScrollHandlers}
  */
class AbstractNativeScrollbar extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AbstractNativeScrollbar__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
 }
 /**
  * @return {number}
  * @public
  */
 static m_getNativeScrollbarHeight__() {
  AbstractNativeScrollbar.$clinit();
  AbstractNativeScrollbar.m_maybeRecalculateNativeScrollbarSize__();
  return AbstractNativeScrollbar.f_nativeHeight__org_gwtproject_user_client_ui_AbstractNativeScrollbar_;
 }
 /**
  * @return {number}
  * @public
  */
 static m_getNativeScrollbarWidth__() {
  AbstractNativeScrollbar.$clinit();
  AbstractNativeScrollbar.m_maybeRecalculateNativeScrollbarSize__();
  return AbstractNativeScrollbar.f_nativeWidth__org_gwtproject_user_client_ui_AbstractNativeScrollbar_;
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isScrollbarLeftAlignedInRtl__() {
  AbstractNativeScrollbar.$clinit();
  AbstractNativeScrollbar.m_maybeRecalculateNativeScrollbarSize__();
  return AbstractNativeScrollbar.f_nativeRtl__org_gwtproject_user_client_ui_AbstractNativeScrollbar_;
 }
 /**
  * @public
  */
 static m_maybeRecalculateNativeScrollbarSize__() {
  if (AbstractNativeScrollbar.f_nativeHeight__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ > -1) {
   return;
  }
  let scrollable = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(scrollable.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(scrollable.style, -1000.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(scrollable.style, -1000.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(scrollable.style, 100.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(scrollable.style, 100.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(scrollable.style, Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(scrollable.style, "direction", "rtl");
  $Overlay.m_get__().body.appendChild(scrollable);
  let content = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(content, "content");
  scrollable.appendChild(content);
  AbstractNativeScrollbar.f_nativeHeight__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(scrollable) - Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(scrollable);
  AbstractNativeScrollbar.f_nativeWidth__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(scrollable) - Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(scrollable);
  AbstractNativeScrollbar.f_nativeRtl__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = (Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(content) > Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(scrollable));
  Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(scrollable);
 }
 /**
  * @override
  * @param {ScrollHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler(handler) {
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), Event.f_ONSCROLL__org_gwtproject_user_client_Event);
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ScrollEvent.m_getType__());
 }
 /**
  * @abstract
  * @return {Object}
  * @public
  */
 m_getScrollableElement__() {}
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  Event.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getScrollableElement__(), this);
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  Event.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getScrollableElement__(), null);
  super.m_onDetach__();
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractNativeScrollbar.$clinit = () =>{};
  AbstractNativeScrollbar.$loadModules();
  Widget.$clinit();
  AbstractNativeScrollbar.f_nativeHeight__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = -1;
  AbstractNativeScrollbar.f_nativeWidth__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = -1;
  AbstractNativeScrollbar.f_nativeRtl__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = false;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractNativeScrollbar;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  ScrollEvent = goog.module.get('org.gwtproject.event.dom.client.ScrollEvent$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
 }
 
}
$Util.$setClassMetadata(AbstractNativeScrollbar, 'org.gwtproject.user.client.ui.AbstractNativeScrollbar');

HasScrollHandlers.$markImplementor(AbstractNativeScrollbar);

/** @public {number} */
AbstractNativeScrollbar.f_nativeHeight__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = 0;
/** @public {number} */
AbstractNativeScrollbar.f_nativeWidth__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = 0;
/** @public {boolean} */
AbstractNativeScrollbar.f_nativeRtl__org_gwtproject_user_client_ui_AbstractNativeScrollbar_ = false;

exports = AbstractNativeScrollbar; 
//# sourceMappingURL=AbstractNativeScrollbar.js.map