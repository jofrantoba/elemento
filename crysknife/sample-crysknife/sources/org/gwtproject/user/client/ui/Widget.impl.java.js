goog.module('org.gwtproject.user.client.ui.Widget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAttachHandlers = goog.require('org.gwtproject.event.logical.shared.HasAttachHandlers$impl');
const EventListener = goog.require('org.gwtproject.user.client.EventListener$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');
const UIObject = goog.require('org.gwtproject.user.client.ui.UIObject$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let DomEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');
let AttachEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent$impl');
let Handler = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');
let org_gwtproject_event_shared_Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Event_Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerManager = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let HasWidgets = goog.forwardDeclare('org.gwtproject.user.client.ui.HasWidgets$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {EventListener}
 * @implements {HasAttachHandlers}
 * @implements {IsWidget}
  */
class Widget extends UIObject {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_eventsToSink__org_gwtproject_user_client_ui_Widget = 0;
  /** @public {boolean} */
  this.f_attached__org_gwtproject_user_client_ui_Widget_ = false;
  /** @public {HandlerManager} */
  this.f_handlerManager__org_gwtproject_user_client_ui_Widget_;
  /** @public {*} */
  this.f_layoutData__org_gwtproject_user_client_ui_Widget_;
  /** @public {Widget} */
  this.f_parent__org_gwtproject_user_client_ui_Widget_;
 }
 /**
  * @return {!Widget}
  * @public
  */
 static $create__() {
  Widget.$clinit();
  let $instance = new Widget();
  $instance.$ctor__org_gwtproject_user_client_ui_Widget__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Widget__() {
  this.$ctor__org_gwtproject_user_client_ui_UIObject__();
 }
 /**
  * @param {IsWidget} w
  * @return {Widget}
  * @public
  */
 static m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w) {
  Widget.$clinit();
  return $Equality.$same(w, null) ? null : w.m_asWidget__();
 }
 /**
  * @override
  * @param {Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addAttachHandler__org_gwtproject_event_logical_shared_AttachEvent_Handler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, AttachEvent.m_getType__());
 }
 /**
  * @template H
  * @param {H} handler
  * @param {Type<H>} type
  * @return {HandlerRegistration}
  * @public
  */
 m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, type) {
  $Asserts.$assertWithMessage(!$Equality.$same(handler, null), "handler must not be null");
  $Asserts.$assertWithMessage(!$Equality.$same(type, null), "type must not be null");
  this.m_sinkBitlessEvent__java_lang_String(type.m_getName__());
  return this.m_ensureHandlers___$pp_org_gwtproject_user_client_ui().m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @template H
  * @param {H} handler
  * @param {Type<H>} type
  * @return {HandlerRegistration}
  * @public
  */
 m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, type) {
  $Asserts.$assertWithMessage(!$Equality.$same(handler, null), "handler must not be null");
  $Asserts.$assertWithMessage(!$Equality.$same(type, null), "type must not be null");
  let typeInt = Event.m_getTypeInt__java_lang_String(type.m_getName__());
  if (typeInt == -1) {
   this.m_sinkBitlessEvent__java_lang_String(type.m_getName__());
  } else {
   this.m_sinkEvents__int(typeInt);
  }
  return this.m_ensureHandlers___$pp_org_gwtproject_user_client_ui().m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @template H
  * @param {H} handler
  * @param {Event_Type<H>} type
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, type) {
  return this.m_ensureHandlers___$pp_org_gwtproject_user_client_ui().m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @override
  * @return {Widget}
  * @public
  */
 m_asWidget__() {
  return this;
 }
 /**
  * @override
  * @param {org_gwtproject_event_shared_Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {
  if (!$Equality.$same(this.f_handlerManager__org_gwtproject_user_client_ui_Widget_, null)) {
   this.f_handlerManager__org_gwtproject_user_client_ui_Widget_.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {*}
  * @public
  */
 m_getLayoutData__() {
  return this.f_layoutData__org_gwtproject_user_client_ui_Widget_;
 }
 /**
  * @param {*} layoutData
  * @public
  */
 m_setLayoutData__java_lang_Object(layoutData) {
  this.f_layoutData__org_gwtproject_user_client_ui_Widget_ = layoutData;
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getParent__() {
  return this.f_parent__org_gwtproject_user_client_ui_Widget_;
 }
 /**
  * @param {Widget} parent
  * @public
  */
 m_setParent__org_gwtproject_user_client_ui_Widget(parent) {
  let oldParent = this.f_parent__org_gwtproject_user_client_ui_Widget_;
  if ($Equality.$same(parent, null)) {
   try {
    if (!$Equality.$same(oldParent, null) && oldParent.m_isAttached__()) {
     this.m_onDetach__();
     $Asserts.$assertWithMessage(!this.m_isAttached__(), "Failure of " + j_l_String.m_valueOf__java_lang_Object(this.m_getClass__().m_getName__()) + " to call super.onDetach()");
    }
   } finally {
    this.f_parent__org_gwtproject_user_client_ui_Widget_ = null;
   }
  } else {
   if (!$Equality.$same(oldParent, null)) {
    throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Cannot set a new parent without first clearing the old parent"));
   }
   this.f_parent__org_gwtproject_user_client_ui_Widget_ = parent;
   if (parent.m_isAttached__()) {
    this.m_onAttach__();
    $Asserts.$assertWithMessage(this.m_isAttached__(), "Failure of " + j_l_String.m_valueOf__java_lang_Object(this.m_getClass__().m_getName__()) + " to call super.onAttach()");
   }
  }
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAttached__() {
  return this.f_attached__org_gwtproject_user_client_ui_Widget_;
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  let /** Object */ related;
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event: 
   case Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event: 
    related = /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)));
    if (!$Equality.$same(related, null) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getElement__(), related)) {
     return;
    }
    break;
  }
  DomEvent.m_fireNativeEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_Element(event, this, this.m_getElement__());
 }
 /**
  * @public
  */
 m_removeFromParent__() {
  if ($Equality.$same(this.f_parent__org_gwtproject_user_client_ui_Widget_, null)) {
   if (RootPanel.m_isInDetachList__org_gwtproject_user_client_ui_Widget(this)) {
    RootPanel.m_detachNow__org_gwtproject_user_client_ui_Widget(this);
   }
  } else if (HasWidgets.$isInstance(this.f_parent__org_gwtproject_user_client_ui_Widget_)) {
   /**@type {HasWidgets} */ ($Casts.$to(this.f_parent__org_gwtproject_user_client_ui_Widget_, HasWidgets)).m_remove__org_gwtproject_user_client_ui_Widget(this);
  } else if (!$Equality.$same(this.f_parent__org_gwtproject_user_client_ui_Widget_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("This widget's parent does not implement HasWidgets"));
  }
 }
 /**
  * @override
  * @param {number} eventBitsToAdd
  * @public
  */
 m_sinkEvents__int(eventBitsToAdd) {
  if (this.m_isOrWasAttached__()) {
   super.m_sinkEvents__int(eventBitsToAdd);
  } else {
   this.f_eventsToSink__org_gwtproject_user_client_ui_Widget |= eventBitsToAdd;
  }
 }
 /**
  * @override
  * @param {number} eventBitsToRemove
  * @public
  */
 m_unsinkEvents__int(eventBitsToRemove) {
  if (this.m_isOrWasAttached__()) {
   super.m_unsinkEvents__int(eventBitsToRemove);
  } else {
   this.f_eventsToSink__org_gwtproject_user_client_ui_Widget &= ~eventBitsToRemove;
  }
 }
 /**
  * @return {HandlerManager}
  * @public
  */
 m_createHandlerManager__() {
  return HandlerManager.$create__java_lang_Object(this);
 }
 /**
  * @param {Widget} target
  * @param {org_gwtproject_event_shared_Event<?>} event
  * @public
  */
 m_delegateEvent__org_gwtproject_user_client_ui_Widget__org_gwtproject_event_shared_Event(target, event) {
  target.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /**
  * @public
  */
 m_doAttachChildren__() {}
 /**
  * @public
  */
 m_doDetachChildren__() {}
 /**
  * @param {Event_Type<?>} type
  * @return {number}
  * @public
  */
 m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type) {
  return $Equality.$same(this.f_handlerManager__org_gwtproject_user_client_ui_Widget_, null) ? 0 : this.f_handlerManager__org_gwtproject_user_client_ui_Widget_.m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isOrWasAttached__() {
  return this.f_eventsToSink__org_gwtproject_user_client_ui_Widget == -1;
 }
 /**
  * @public
  */
 m_onAttach__() {
  if (this.m_isAttached__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this.f_attached__org_gwtproject_user_client_ui_Widget_ = true;
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getElement__(), this);
  let bitsToAdd = this.f_eventsToSink__org_gwtproject_user_client_ui_Widget;
  this.f_eventsToSink__org_gwtproject_user_client_ui_Widget = -1;
  if (bitsToAdd > 0) {
   this.m_sinkEvents__int(bitsToAdd);
  }
  this.m_doAttachChildren__();
  this.m_onLoad__();
  AttachEvent.m_fire__org_gwtproject_event_logical_shared_HasAttachHandlers__boolean(this, true);
 }
 /**
  * @public
  */
 m_onDetach__() {
  if (!this.m_isAttached__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
   this.m_onUnload__();
   AttachEvent.m_fire__org_gwtproject_event_logical_shared_HasAttachHandlers__boolean(this, false);
  } finally {
   try {
    this.m_doDetachChildren__();
   } finally {
    DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getElement__(), null);
    this.f_attached__org_gwtproject_user_client_ui_Widget_ = false;
   }
  }
 }
 /**
  * @public
  */
 m_onLoad__() {}
 /**
  * @public
  */
 m_onUnload__() {}
 /**
  * @return {HandlerManager}
  * @public
  */
 m_ensureHandlers___$pp_org_gwtproject_user_client_ui() {
  return $Equality.$same(this.f_handlerManager__org_gwtproject_user_client_ui_Widget_, null) ? this.f_handlerManager__org_gwtproject_user_client_ui_Widget_ = this.m_createHandlerManager__() : this.f_handlerManager__org_gwtproject_user_client_ui_Widget_;
 }
 /**
  * @return {HandlerManager}
  * @public
  */
 m_getHandlerManager___$pp_org_gwtproject_user_client_ui() {
  return this.f_handlerManager__org_gwtproject_user_client_ui_Widget_;
 }
 /**
  * @override
  * @param {Object} elem
  * @public
  */
 m_replaceElement__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(elem) {
  if (this.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getElement__(), null);
  }
  super.m_replaceElement__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(elem);
  if (this.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getElement__(), this);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  Widget.$clinit = () =>{};
  Widget.$loadModules();
  UIObject.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Widget;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  DomEvent = goog.module.get('org.gwtproject.event.dom.client.DomEvent$impl');
  AttachEvent = goog.module.get('org.gwtproject.event.logical.shared.AttachEvent$impl');
  HandlerManager = goog.module.get('org.gwtproject.event.shared.HandlerManager$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  HasWidgets = goog.module.get('org.gwtproject.user.client.ui.HasWidgets$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Widget, 'org.gwtproject.user.client.ui.Widget');

EventListener.$markImplementor(Widget);
HasAttachHandlers.$markImplementor(Widget);
IsWidget.$markImplementor(Widget);

exports = Widget; 
//# sourceMappingURL=Widget.js.map