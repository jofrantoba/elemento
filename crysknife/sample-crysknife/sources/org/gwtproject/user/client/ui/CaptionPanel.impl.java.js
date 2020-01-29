goog.module('org.gwtproject.user.client.ui.CaptionPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let LegendElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CaptionPanelImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImpl$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ForIsWidget}
  */
class CaptionPanel extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_;
 }
 /**
  * Factory method corresponding to constructor 'CaptionPanel()'.
  * @return {!CaptionPanel}
  * @public
  */
 static $create__() {
  CaptionPanel.$clinit();
  let $instance = new CaptionPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'CaptionPanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CaptionPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String__boolean("", false);
 }
 /**
  * Factory method corresponding to constructor 'CaptionPanel(SafeHtml)'.
  * @param {SafeHtml} caption
  * @return {!CaptionPanel}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(caption) {
  CaptionPanel.$clinit();
  let $instance = new CaptionPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel__org_gwtproject_safehtml_shared_SafeHtml(caption);
  return $instance;
 }
 /**
  * Initialization from constructor 'CaptionPanel(SafeHtml)'.
  * @param {SafeHtml} caption
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CaptionPanel__org_gwtproject_safehtml_shared_SafeHtml(caption) {
  this.$ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String__boolean(caption.m_asString__(), true);
 }
 /**
  * Factory method corresponding to constructor 'CaptionPanel(String)'.
  * @param {?string} captionText
  * @return {!CaptionPanel}
  * @public
  */
 static $create__java_lang_String(captionText) {
  CaptionPanel.$clinit();
  let $instance = new CaptionPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String(captionText);
  return $instance;
 }
 /**
  * Initialization from constructor 'CaptionPanel(String)'.
  * @param {?string} captionText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String(captionText) {
  this.$ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String__boolean(captionText, false);
 }
 /**
  * Factory method corresponding to constructor 'CaptionPanel(String, boolean)'.
  * @param {?string} caption
  * @param {boolean} asHTML
  * @return {!CaptionPanel}
  * @public
  */
 static $create__java_lang_String__boolean(caption, asHTML) {
  CaptionPanel.$clinit();
  let $instance = new CaptionPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String__boolean(caption, asHTML);
  return $instance;
 }
 /**
  * Initialization from constructor 'CaptionPanel(String, boolean)'.
  * @param {?string} caption
  * @param {boolean} asHTML
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CaptionPanel__java_lang_String__boolean(caption, asHTML) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  let fieldSet = $Overlay.m_createFieldSetElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(SimplePanel.$create__org_gwtproject_dom_client_Element(fieldSet));
  this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_ = $Overlay.m_createLegendElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  fieldSet.appendChild(this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_);
  if (asHTML) {
   this.m_setCaptionHTML__java_lang_String(caption);
  } else {
   this.m_setCaptionText__java_lang_String(caption);
  }
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  /**@type {SimplePanel} */ ($Casts.$to(this.m_getWidget__(), SimplePanel)).m_add__org_gwtproject_user_client_ui_Widget(w);
 }
 /**
  * @override
  * @param {IsWidget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget(w) {
  this.m_add__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  /**@type {SimplePanel} */ ($Casts.$to(this.m_getWidget__(), SimplePanel)).m_clear__();
 }
 /**
  * @return {?string}
  * @public
  */
 m_getCaptionHTML__() {
  let html = Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_);
  $Asserts.$assert((!$Equality.$same(html, null)));
  return html;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getCaptionText__() {
  let text = Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_);
  $Asserts.$assert((!$Equality.$same(text, null)));
  return text;
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getContentWidget__() {
  return /**@type {SimplePanel} */ ($Casts.$to(this.m_getWidget__(), SimplePanel)).m_getWidget__();
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return /**@type {SimplePanel} */ ($Casts.$to(this.m_getWidget__(), SimplePanel)).m_iterator__();
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  return /**@type {SimplePanel} */ ($Casts.$to(this.m_getWidget__(), SimplePanel)).m_remove__org_gwtproject_user_client_ui_Widget(w);
 }
 /**
  * @override
  * @param {IsWidget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_IsWidget(w) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /**
  * @param {?string} html
  * @public
  */
 m_setCaptionHTML__java_lang_String(html) {
  $Asserts.$assert((!$Equality.$same(html, null)));
  CaptionPanel.f_impl__org_gwtproject_user_client_ui_CaptionPanel_.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(FieldSetElement_$Overlay.m_as__org_gwtproject_dom_client_Element(this.m_getElement__()), this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_, html, true);
 }
 /**
  * @param {SafeHtml} html
  * @public
  */
 m_setCaptionHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.m_setCaptionHTML__java_lang_String(html.m_asString__());
 }
 /**
  * @param {?string} text
  * @public
  */
 m_setCaptionText__java_lang_String(text) {
  $Asserts.$assert((!$Equality.$same(text, null)));
  CaptionPanel.f_impl__org_gwtproject_user_client_ui_CaptionPanel_.m_setCaption__org_gwtproject_dom_client_FieldSetElement__org_gwtproject_dom_client_Element__java_lang_String__boolean(FieldSetElement_$Overlay.m_as__org_gwtproject_dom_client_Element(this.m_getElement__()), this.f_legend__org_gwtproject_user_client_ui_CaptionPanel_, text, false);
 }
 /**
  * @param {Widget} w
  * @public
  */
 m_setContentWidget__org_gwtproject_user_client_ui_Widget(w) {
  /**@type {SimplePanel} */ ($Casts.$to(this.m_getWidget__(), SimplePanel)).m_setWidget__org_gwtproject_user_client_ui_Widget(w);
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
  * @public
  */
 static $clinit() {
  CaptionPanel.$clinit = () =>{};
  CaptionPanel.$loadModules();
  Composite.$clinit();
  Iterable.$clinit();
  CaptionPanel.f_impl__org_gwtproject_user_client_ui_CaptionPanel_ = CaptionPanelImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CaptionPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  FieldSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
  CaptionPanelImpl = goog.module.get('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImpl$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CaptionPanel, 'org.gwtproject.user.client.ui.CaptionPanel');

ForIsWidget.$markImplementor(CaptionPanel);

/** @public {CaptionPanelImpl} */
CaptionPanel.f_impl__org_gwtproject_user_client_ui_CaptionPanel_;

exports = CaptionPanel; 
//# sourceMappingURL=CaptionPanel.js.map