goog.module('org.gwtproject.user.client.ui.HeaderPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Panel = goog.require('org.gwtproject.user.client.ui.Panel$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let FiniteWidgetIterator = goog.forwardDeclare('org.gwtproject.user.client.ui.FiniteWidgetIterator$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.HeaderPanel.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.HeaderPanel.$2$impl');
let WidgetProviderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.HeaderPanel.WidgetProviderImpl$impl');
let Impl = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl$impl');
let ImplStandard = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {RequiresResize}
  */
class HeaderPanel extends Panel {
 /** @protected */
 constructor() {
  super();
  /**@type {Widget}*/
  this.f_content__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Object}*/
  this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Widget}*/
  this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Object}*/
  this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Impl}*/
  this.f_footerImpl__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Widget}*/
  this.f_header__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Object}*/
  this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {Impl}*/
  this.f_headerImpl__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {ScheduledCommand}*/
  this.f_layoutCmd__org_gwtproject_user_client_ui_HeaderPanel_;
  /**@type {boolean}*/
  this.f_layoutScheduled__org_gwtproject_user_client_ui_HeaderPanel_ = false;
 }
 /** @return {!HeaderPanel} */
 static $create__() {
  HeaderPanel.$clinit();
  let $instance = new HeaderPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_HeaderPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HeaderPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.$init___$p_org_gwtproject_user_client_ui_HeaderPanel();
  let elem = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(elem.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(elem.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
  let resizeDelegate = $2.$create__org_gwtproject_user_client_ui_HeaderPanel(this);
  this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_ = this.m_createContainer___$p_org_gwtproject_user_client_ui_HeaderPanel();
  Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_headerImpl__org_gwtproject_user_client_ui_HeaderPanel_.m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_, resizeDelegate);
  elem.appendChild(this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_);
  this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_ = this.m_createContainer___$p_org_gwtproject_user_client_ui_HeaderPanel();
  Style_$Overlay.m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_footerImpl__org_gwtproject_user_client_ui_HeaderPanel_.m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_, resizeDelegate);
  elem.appendChild(this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_);
  this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_ = this.m_createContainer___$p_org_gwtproject_user_client_ui_HeaderPanel();
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  elem.appendChild(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if ($Equality.$same(this.f_header__org_gwtproject_user_client_ui_HeaderPanel_, null)) {
   this.m_setHeaderWidget__org_gwtproject_user_client_ui_Widget(w);
  } else if ($Equality.$same(this.f_content__org_gwtproject_user_client_ui_HeaderPanel_, null)) {
   this.m_setContentWidget__org_gwtproject_user_client_ui_Widget(w);
  } else if ($Equality.$same(this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_, null)) {
   this.m_setFooterWidget__org_gwtproject_user_client_ui_Widget(w);
  } else {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("HeaderPanel already contains header, content, and footer widgets."));
  }
 }
 /** @return {Widget} */
 m_getContentWidget__() {
  return this.f_content__org_gwtproject_user_client_ui_HeaderPanel_;
 }
 /** @return {Widget} */
 m_getFooterWidget__() {
  return this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_;
 }
 /** @return {Widget} */
 m_getHeaderWidget__() {
  return this.f_header__org_gwtproject_user_client_ui_HeaderPanel_;
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return FiniteWidgetIterator.$create__org_gwtproject_user_client_ui_FiniteWidgetIterator_WidgetProvider__int(WidgetProviderImpl.$create__org_gwtproject_user_client_ui_HeaderPanel(this), 3);
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_headerImpl__org_gwtproject_user_client_ui_HeaderPanel_.m_onAttach__();
  this.f_footerImpl__org_gwtproject_user_client_ui_HeaderPanel_.m_onAttach__();
  this.m_scheduledLayout___$p_org_gwtproject_user_client_ui_HeaderPanel();
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_headerImpl__org_gwtproject_user_client_ui_HeaderPanel_.m_onDetach__();
  this.f_footerImpl__org_gwtproject_user_client_ui_HeaderPanel_.m_onDetach__();
 }
 /** @override */
 m_onResize__() {
  this.m_scheduledLayout___$p_org_gwtproject_user_client_ui_HeaderPanel();
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   return false;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(w);
  } finally {
   Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(w.m_getElement__());
   if ($Equality.$same(w, this.f_content__org_gwtproject_user_client_ui_HeaderPanel_)) {
    this.f_content__org_gwtproject_user_client_ui_HeaderPanel_ = null;
    Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   } else if ($Equality.$same(w, this.f_header__org_gwtproject_user_client_ui_HeaderPanel_)) {
    this.f_header__org_gwtproject_user_client_ui_HeaderPanel_ = null;
    Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   } else if ($Equality.$same(w, this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_)) {
    this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_ = null;
    Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   }
  }
  return true;
 }
 
 m_setContentWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HeaderPanel(w, this.f_content__org_gwtproject_user_client_ui_HeaderPanel_, this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_);
  this.f_content__org_gwtproject_user_client_ui_HeaderPanel_ = w;
  this.m_scheduledLayout___$p_org_gwtproject_user_client_ui_HeaderPanel();
 }
 
 m_setFooterWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HeaderPanel(w, this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_, this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_);
  this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_ = w;
  this.m_scheduledLayout___$p_org_gwtproject_user_client_ui_HeaderPanel();
 }
 
 m_setHeaderWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HeaderPanel(w, this.f_header__org_gwtproject_user_client_ui_HeaderPanel_, this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_);
  this.f_header__org_gwtproject_user_client_ui_HeaderPanel_ = w;
  this.m_scheduledLayout___$p_org_gwtproject_user_client_ui_HeaderPanel();
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_HeaderPanel(/** Widget */ w, /** Widget */ toReplace, /** Object */ container) {
  if ($Equality.$same(w, toReplace)) {
   return;
  }
  if (!$Equality.$same(w, null)) {
   w.m_removeFromParent__();
  }
  if (!$Equality.$same(toReplace, null)) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(toReplace);
  }
  if (!$Equality.$same(w, null)) {
   container.appendChild(w.m_getElement__());
   Style_$Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(container.style);
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w);
  }
 }
 /** @return {Object} */
 m_createContainer___$p_org_gwtproject_user_client_ui_HeaderPanel() {
  let container = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__())), Element_$Overlay));
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(container.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(container.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(container.style, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(container.style, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
  return container;
 }
 
 m_forceLayout___$p_org_gwtproject_user_client_ui_HeaderPanel() {
  if (!this.m_isAttached__() || $Equality.$same(this.f_content__org_gwtproject_user_client_ui_HeaderPanel_, null)) {
   return;
  }
  let remainingHeight = Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
  if (!$Equality.$same(this.f_header__org_gwtproject_user_client_ui_HeaderPanel_, null)) {
   let height = Math.max(0, Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_headerContainer__org_gwtproject_user_client_ui_HeaderPanel_));
   remainingHeight -= height;
   Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, height, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  if (!$Equality.$same(this.f_footer__org_gwtproject_user_client_ui_HeaderPanel_, null)) {
   remainingHeight -= Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_footerContainer__org_gwtproject_user_client_ui_HeaderPanel_);
  }
  Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_client_ui_HeaderPanel_.style, Math.max(0, remainingHeight), Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  if (RequiresResize.$isInstance(this.f_content__org_gwtproject_user_client_ui_HeaderPanel_)) {
   /**@type {RequiresResize}*/ ($Casts.$to(this.f_content__org_gwtproject_user_client_ui_HeaderPanel_, RequiresResize)).m_onResize__();
  }
 }
 
 m_scheduledLayout___$p_org_gwtproject_user_client_ui_HeaderPanel() {
  if (this.m_isAttached__() && !this.f_layoutScheduled__org_gwtproject_user_client_ui_HeaderPanel_) {
   this.f_layoutScheduled__org_gwtproject_user_client_ui_HeaderPanel_ = true;
   Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand(this.f_layoutCmd__org_gwtproject_user_client_ui_HeaderPanel_);
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_HeaderPanel() {
  this.f_footerImpl__org_gwtproject_user_client_ui_HeaderPanel_ = ImplStandard.$create__();
  this.f_headerImpl__org_gwtproject_user_client_ui_HeaderPanel_ = ImplStandard.$create__();
  this.f_layoutCmd__org_gwtproject_user_client_ui_HeaderPanel_ = $1.$create__org_gwtproject_user_client_ui_HeaderPanel(this);
  this.f_layoutScheduled__org_gwtproject_user_client_ui_HeaderPanel_ = false;
 }
 
 static $clinit() {
  HeaderPanel.$clinit = () =>{};
  HeaderPanel.$loadModules();
  Panel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HeaderPanel;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  FiniteWidgetIterator = goog.module.get('org.gwtproject.user.client.ui.FiniteWidgetIterator$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.HeaderPanel.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.HeaderPanel.$2$impl');
  WidgetProviderImpl = goog.module.get('org.gwtproject.user.client.ui.HeaderPanel.WidgetProviderImpl$impl');
  ImplStandard = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HeaderPanel, 'org.gwtproject.user.client.ui.HeaderPanel');

RequiresResize.$markImplementor(HeaderPanel);

exports = HeaderPanel; 
//# sourceMappingURL=HeaderPanel.js.map