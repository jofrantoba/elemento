goog.module('org.gwtproject.user.client.ui.Composite$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsRenderable = goog.require('org.gwtproject.user.client.ui.IsRenderable$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HtmlBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
let HtmlSpanBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlSpanBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let AttachEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let PotentialElement = goog.forwardDeclare('org.gwtproject.user.client.ui.PotentialElement$impl');
let RenderableStamper = goog.forwardDeclare('org.gwtproject.user.client.ui.RenderableStamper$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {IsRenderable}
  */
class Composite extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Widget} */
  this.f_widget__org_gwtproject_user_client_ui_Composite_;
  /** @public {IsRenderable} */
  this.f_renderable__org_gwtproject_user_client_ui_Composite_;
  /** @public {Object} */
  this.f_elementToWrap__org_gwtproject_user_client_ui_Composite_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Composite__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_claimElement__org_gwtproject_dom_client_Element(element) {
  if (!$Equality.$same(this.f_renderable__org_gwtproject_user_client_ui_Composite_, null)) {
   this.f_renderable__org_gwtproject_user_client_ui_Composite_.m_claimElement__org_gwtproject_dom_client_Element(element);
   this.m_setElement__org_gwtproject_dom_client_Element(this.f_widget__org_gwtproject_user_client_ui_Composite_.m_getElement__());
  } else {
   this.f_elementToWrap__org_gwtproject_user_client_ui_Composite_ = element;
  }
 }
 /**
  * @override
  * @public
  */
 m_initializeClaimedElement__() {
  if (!$Equality.$same(this.f_renderable__org_gwtproject_user_client_ui_Composite_, null)) {
   this.f_renderable__org_gwtproject_user_client_ui_Composite_.m_initializeClaimedElement__();
  } else {
   this.f_elementToWrap__org_gwtproject_user_client_ui_Composite_.parentNode.replaceChild(this.f_widget__org_gwtproject_user_client_ui_Composite_.m_getElement__(), this.f_elementToWrap__org_gwtproject_user_client_ui_Composite_);
  }
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAttached__() {
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_Composite_, null)) {
   return this.f_widget__org_gwtproject_user_client_ui_Composite_.m_isAttached__();
  }
  return false;
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  this.f_widget__org_gwtproject_user_client_ui_Composite_.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /**
  * @override
  * @param {RenderableStamper} stamper
  * @return {SafeHtml}
  * @public
  */
 m_render__org_gwtproject_user_client_ui_RenderableStamper(stamper) {
  if (!$Equality.$same(this.f_renderable__org_gwtproject_user_client_ui_Composite_, null)) {
   return this.f_renderable__org_gwtproject_user_client_ui_Composite_.m_render__org_gwtproject_user_client_ui_RenderableStamper(stamper);
  } else {
   this.m_checkInit___$p_org_gwtproject_user_client_ui_Composite();
   let spanBuilder = HtmlBuilderFactory.m_get__().m_createSpanBuilder__();
   /**@type {HtmlSpanBuilder} */ ($Casts.$to(stamper.m_stamp__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase(spanBuilder), HtmlSpanBuilder)).m_end__();
   return spanBuilder.m_asSafeHtml__();
  }
 }
 /**
  * @override
  * @param {RenderableStamper} stamper
  * @param {SafeHtmlBuilder} builder
  * @public
  */
 m_render__org_gwtproject_user_client_ui_RenderableStamper__org_gwtproject_safehtml_shared_SafeHtmlBuilder(stamper, builder) {
  if (!$Equality.$same(this.f_renderable__org_gwtproject_user_client_ui_Composite_, null)) {
   this.f_renderable__org_gwtproject_user_client_ui_Composite_.m_render__org_gwtproject_user_client_ui_RenderableStamper__org_gwtproject_safehtml_shared_SafeHtmlBuilder(stamper, builder);
  } else {
   builder.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.m_render__org_gwtproject_user_client_ui_RenderableStamper(stamper));
  }
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getWidget__() {
  return this.f_widget__org_gwtproject_user_client_ui_Composite_;
 }
 /**
  * @public
  */
 m_checkInit___$p_org_gwtproject_user_client_ui_Composite() {
  if ($Equality.$same(this.f_widget__org_gwtproject_user_client_ui_Composite_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("initWidget() is not called yet"));
  }
 }
 /**
  * @param {Widget} widget
  * @public
  */
 m_initWidget__org_gwtproject_user_client_ui_Widget(widget) {
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_Composite_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Composite.initWidget() may only be " + "called once."));
  }
  if ($Equality.$same(widget, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("widget cannot be null"));
  }
  if (IsRenderable.$isInstance(widget)) {
   this.f_renderable__org_gwtproject_user_client_ui_Composite_ = /**@type {IsRenderable} */ ($Casts.$to(widget, IsRenderable));
  }
  widget.m_removeFromParent__();
  let elem = widget.m_getElement__();
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
  if (PotentialElement.m_isPotential__org_gwtproject_core_client_JavaScriptObject(elem)) {
   PotentialElement.m_as__org_gwtproject_dom_client_Element(elem).m_setResolver__org_gwtproject_user_client_ui_UIObject_$pp_org_gwtproject_user_client_ui(this);
  }
  this.f_widget__org_gwtproject_user_client_ui_Composite_ = widget;
  widget.m_setParent__org_gwtproject_user_client_ui_Widget(this);
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  this.m_checkInit___$p_org_gwtproject_user_client_ui_Composite();
  if (!this.m_isOrWasAttached__()) {
   this.f_widget__org_gwtproject_user_client_ui_Composite_.m_sinkEvents__int(this.f_eventsToSink__org_gwtproject_user_client_ui_Widget);
   this.f_eventsToSink__org_gwtproject_user_client_ui_Widget = -1;
  }
  this.f_widget__org_gwtproject_user_client_ui_Composite_.m_onAttach__();
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getElement__(), this);
  this.m_doAttachChildren__();
  this.m_onLoad__();
  AttachEvent.m_fire__org_gwtproject_event_logical_shared_HasAttachHandlers__boolean(this, true);
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  try {
   this.m_onUnload__();
   this.m_doDetachChildren__();
   AttachEvent.m_fire__org_gwtproject_event_logical_shared_HasAttachHandlers__boolean(this, false);
  } finally {
   this.f_widget__org_gwtproject_user_client_ui_Composite_.m_onDetach__();
  }
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_resolvePotentialElement__() {
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_widget__org_gwtproject_user_client_ui_Composite_.m_resolvePotentialElement__());
  return this.m_getElement__();
 }
 /**
  * @param {Widget} widget
  * @public
  * @deprecated
  */
 m_setWidget__org_gwtproject_user_client_ui_Widget(widget) {
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @public
  */
 static $clinit() {
  Composite.$clinit = () =>{};
  Composite.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Composite;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HtmlBuilderFactory = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
  HtmlSpanBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlSpanBuilder$impl');
  AttachEvent = goog.module.get('org.gwtproject.event.logical.shared.AttachEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  PotentialElement = goog.module.get('org.gwtproject.user.client.ui.PotentialElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Composite, 'org.gwtproject.user.client.ui.Composite');

IsRenderable.$markImplementor(Composite);

exports = Composite; 
//# sourceMappingURL=Composite.js.map