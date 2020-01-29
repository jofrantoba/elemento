goog.module('org.gwtproject.user.client.ui.RenderablePanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const IsRenderable = goog.require('org.gwtproject.user.client.ui.IsRenderable$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let ElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let PotentialElement = goog.forwardDeclare('org.gwtproject.user.client.ui.PotentialElement$impl');
let RenderableStamper = goog.forwardDeclare('org.gwtproject.user.client.ui.RenderableStamper$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {IsRenderable}
  */
class RenderablePanel extends ComplexPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ScheduledCommand} */
  this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel;
  /** @public {ScheduledCommand} */
  this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel;
  /** @public {SafeHtml} */
  this.f_html__org_gwtproject_user_client_ui_RenderablePanel;
 }
 /**
  * @public
  */
 static m_ensureHiddenDiv__() {
  if (!$Equality.$same(RenderablePanel.f_hiddenDiv__org_gwtproject_user_client_ui_RenderablePanel_, null)) {
   return;
  }
  RenderablePanel.f_hiddenDiv__org_gwtproject_user_client_ui_RenderablePanel_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(RenderablePanel.f_hiddenDiv__org_gwtproject_user_client_ui_RenderablePanel_, false);
  RootPanel.m_getBodyElement__().appendChild(RenderablePanel.f_hiddenDiv__org_gwtproject_user_client_ui_RenderablePanel_);
 }
 /**
  * Factory method corresponding to constructor 'RenderablePanel(String)'.
  * @param {?string} html
  * @return {!RenderablePanel}
  * @public
  */
 static $create__java_lang_String(html) {
  RenderablePanel.$clinit();
  let $instance = new RenderablePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_RenderablePanel__java_lang_String(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'RenderablePanel(String)'.
  * @param {?string} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RenderablePanel__java_lang_String(html) {
  this.$ctor__org_gwtproject_user_client_ui_RenderablePanel__org_gwtproject_safehtml_shared_SafeHtml(SafeHtmlUtils.m_fromTrustedString__java_lang_String(html));
 }
 /**
  * Factory method corresponding to constructor 'RenderablePanel(SafeHtml)'.
  * @param {SafeHtml} safeHtml
  * @return {!RenderablePanel}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(safeHtml) {
  RenderablePanel.$clinit();
  let $instance = new RenderablePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_RenderablePanel__org_gwtproject_safehtml_shared_SafeHtml(safeHtml);
  return $instance;
 }
 /**
  * Initialization from constructor 'RenderablePanel(SafeHtml)'.
  * @param {SafeHtml} safeHtml
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RenderablePanel__org_gwtproject_safehtml_shared_SafeHtml(safeHtml) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_RenderablePanel();
  this.f_html__org_gwtproject_user_client_ui_RenderablePanel = safeHtml;
  this.m_setElement__org_gwtproject_dom_client_Element(PotentialElement.m_build__org_gwtproject_user_client_ui_UIObject__java_lang_String(this, RenderablePanel.f_TAG_NAME__org_gwtproject_user_client_ui_RenderablePanel_));
 }
 /**
  * @override
  * @param {Widget} widget
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(widget) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget, this.m_getElement__());
 }
 /**
  * @param {Widget} widget
  * @param {Object} toReplace
  * @public
  */
 m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget, toReplace) {
  widget.m_removeFromParent__();
  this.m_getChildren__().m_add__org_gwtproject_user_client_ui_Widget(widget);
  toReplace.parentNode.replaceChild(widget.m_getElement__(), toReplace);
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @override
  * @param {Object} element
  * @public
  */
 m_claimElement__org_gwtproject_dom_client_Element(element) {
  if (this.m_isFullyInitialized__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("claimElement() cannot be called twice, or after forcing the widget to" + " render itself (e.g. after adding it to a panel)"));
  }
  this.m_setElement__org_gwtproject_dom_client_Element(element);
  this.f_html__org_gwtproject_user_client_ui_RenderablePanel = null;
  if (!$Equality.$same(this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel, null)) {
   this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel.m_execute__();
   this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel = null;
  }
 }
 /**
  * @override
  * @public
  */
 m_initializeClaimedElement__() {
  if (!$Equality.$same(this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel, null)) {
   this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel.m_execute__();
   this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel = null;
  }
 }
 /**
  * @param {IsRenderable} renderable
  * @public
  */
 m_logicalAdd__org_gwtproject_user_client_ui_IsRenderable(renderable) {
  if (!IsWidget.$isInstance(renderable)) {
   return;
  }
  let widget = /**@type {IsWidget} */ ($Casts.$to(renderable, IsWidget)).m_asWidget__();
  this.m_getChildren__().m_add__org_gwtproject_user_client_ui_Widget(widget);
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
 }
 /**
  * @override
  * @param {RenderableStamper} stamper
  * @return {SafeHtml}
  * @public
  */
 m_render__org_gwtproject_user_client_ui_RenderableStamper(stamper) {
  let builder = PotentialElement.m_createBuilderFor__org_gwtproject_dom_client_Element(this.m_getElement__());
  stamper.m_stamp__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase(builder);
  /**@type {ElementBuilder} */ ($Casts.$to(builder.m_html__org_gwtproject_safehtml_shared_SafeHtml(this.m_getInnerHtml__()), ElementBuilder)).m_end__();
  let returnValue = builder.m_asSafeHtml__();
  return returnValue;
 }
 /**
  * @override
  * @param {RenderableStamper} stamper
  * @param {SafeHtmlBuilder} builder
  * @public
  */
 m_render__org_gwtproject_user_client_ui_RenderableStamper__org_gwtproject_safehtml_shared_SafeHtmlBuilder(stamper, builder) {
  builder.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.m_render__org_gwtproject_user_client_ui_RenderableStamper(stamper));
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_resolvePotentialElement__() {
  this.m_buildAndInitDivContainer___$p_org_gwtproject_user_client_ui_RenderablePanel();
  this.f_html__org_gwtproject_user_client_ui_RenderablePanel = null;
  return this.m_getElement__();
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_getInnerHtml__() {
  return this.f_html__org_gwtproject_user_client_ui_RenderablePanel;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isFullyInitialized__() {
  return $Equality.$same(this.f_html__org_gwtproject_user_client_ui_RenderablePanel, null);
 }
 /**
  * @public
  */
 m_buildAndInitDivContainer___$p_org_gwtproject_user_client_ui_RenderablePanel() {
  let element = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(element, this.m_getInnerHtml__());
  let styleName = this.m_getStyleName__();
  if (!$Equality.$same(styleName, null)) {
   Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(element, styleName);
  }
  this.m_setElement__org_gwtproject_dom_client_Element(element);
  if (!$Equality.$same(this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel, null)) {
   RenderablePanel.m_ensureHiddenDiv__();
   RenderablePanel.f_hiddenDiv__org_gwtproject_user_client_ui_RenderablePanel_.appendChild(element);
   this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel.m_execute__();
   element.parentNode.removeChild(element);
  }
  if (!$Equality.$same(this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel, null)) {
   this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel.m_execute__();
  }
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_RenderablePanel() {
  this.f_wrapInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel = null;
  this.f_detachedInitializationCallback__org_gwtproject_user_client_ui_RenderablePanel = null;
  this.f_html__org_gwtproject_user_client_ui_RenderablePanel = null;
 }
 /**
  * @public
  */
 static $clinit() {
  RenderablePanel.$clinit = () =>{};
  RenderablePanel.$loadModules();
  ComplexPanel.$clinit();
  RenderablePanel.f_TAG_NAME__org_gwtproject_user_client_ui_RenderablePanel_ = "div";
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RenderablePanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ElementBuilder = goog.module.get('org.gwtproject.dom.builder.shared.ElementBuilder$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  IsWidget = goog.module.get('org.gwtproject.user.client.ui.IsWidget$impl');
  PotentialElement = goog.module.get('org.gwtproject.user.client.ui.PotentialElement$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(RenderablePanel, 'org.gwtproject.user.client.ui.RenderablePanel');

IsRenderable.$markImplementor(RenderablePanel);

/** @public {Object} */
RenderablePanel.f_hiddenDiv__org_gwtproject_user_client_ui_RenderablePanel_;
/** @public {?string} */
RenderablePanel.f_TAG_NAME__org_gwtproject_user_client_ui_RenderablePanel_;

exports = RenderablePanel; 
//# sourceMappingURL=RenderablePanel.js.map