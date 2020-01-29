goog.module('org.gwtproject.user.client.ui.DeckPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let SlideAnimation = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckPanel.SlideAnimation$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {HasAnimation}
 * @implements {ForIsWidget}
  */
class DeckPanel extends ComplexPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DeckPanel_ = false;
  /** @public {Widget} */
  this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_;
 }
 /**
  * @param {Widget} w
  * @return {Object}
  * @public
  */
 static m_getContainer__org_gwtproject_user_client_ui_Widget(w) {
  DeckPanel.$clinit();
  return DOM.m_getParent__org_gwtproject_dom_client_Element(w.m_getElement__());
 }
 /**
  * @return {!DeckPanel}
  * @public
  */
 static $create__() {
  DeckPanel.$clinit();
  let $instance = new DeckPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DeckPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_DeckPanel();
  this.m_setElement__org_gwtproject_dom_client_Element(DOM.m_createDiv__());
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  let container = this.m_createWidgetContainer___$p_org_gwtproject_user_client_ui_DeckPanel();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), container);
  super.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(w, container);
  this.m_finishWidgetInitialization__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_DeckPanel(container, w);
 }
 /**
  * @return {number}
  * @public
  */
 m_getVisibleWidget__() {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_);
 }
 /**
  * @override
  * @param {IsWidget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(w, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), beforeIndex);
 }
 /**
  * @override
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  let container = this.m_createWidgetContainer___$p_org_gwtproject_user_client_ui_DeckPanel();
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.m_getElement__(), container, beforeIndex);
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(w, container, beforeIndex, true);
  this.m_finishWidgetInitialization__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_DeckPanel(container, w);
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DeckPanel_;
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let container = DeckPanel.m_getContainer__org_gwtproject_user_client_ui_Widget(w);
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   this.m_resetChildWidget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_DeckPanel(w);
   this.m_getElement__().removeChild(container);
   if ($Equality.$same(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_, w)) {
    this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_ = null;
   }
  }
  return removed;
 }
 /**
  * @override
  * @param {boolean} enable
  * @public
  */
 m_setAnimationEnabled__boolean(enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DeckPanel_ = enable;
 }
 /**
  * @param {number} index
  * @public
  */
 m_showWidget__int(index) {
  this.m_checkIndexBoundsForAccess__int(index);
  let oldWidget = this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_;
  this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_ = this.m_getWidget__int(index);
  if (!$Equality.$same(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_, oldWidget)) {
   if ($Equality.$same(DeckPanel.f_slideAnimation__org_gwtproject_user_client_ui_DeckPanel_, null)) {
    DeckPanel.f_slideAnimation__org_gwtproject_user_client_ui_DeckPanel_ = SlideAnimation.$create__();
   }
   DeckPanel.f_slideAnimation__org_gwtproject_user_client_ui_DeckPanel_.m_showWidget__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__boolean(oldWidget, this.f_visibleWidget__org_gwtproject_user_client_ui_DeckPanel_, this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DeckPanel_ && this.m_isAttached__());
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_createWidgetContainer___$p_org_gwtproject_user_client_ui_DeckPanel() {
  let container = DOM.m_createDiv__();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(container.style, "width", "100%");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(container.style, "height", "0px");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(container.style, "padding", "0px");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(container.style, "margin", "0px");
  return container;
 }
 /**
  * @param {Object} container
  * @param {Widget} w
  * @public
  */
 m_finishWidgetInitialization__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_DeckPanel(container, w) {
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(container, false);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(container.style, "height", "100%");
  let element = w.m_getElement__();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object($Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(element.style, "width"), "")) {
   w.m_setWidth__java_lang_String("100%");
  }
  if (j_l_String.m_equals__java_lang_String__java_lang_Object($Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(element.style, "height"), "")) {
   w.m_setHeight__java_lang_String("100%");
  }
  w.m_setVisible__boolean(false);
 }
 /**
  * @param {Widget} w
  * @public
  */
 m_resetChildWidget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_DeckPanel(w) {
  w.m_setSize__java_lang_String__java_lang_String("", "");
  w.m_setVisible__boolean(true);
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
 $init___$p_org_gwtproject_user_client_ui_DeckPanel() {
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DeckPanel_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  DeckPanel.$clinit = () =>{};
  DeckPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DeckPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  SlideAnimation = goog.module.get('org.gwtproject.user.client.ui.DeckPanel.SlideAnimation$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
 }
 
}
$Util.$setClassMetadata(DeckPanel, 'org.gwtproject.user.client.ui.DeckPanel');

HasAnimation.$markImplementor(DeckPanel);
ForIsWidget.$markImplementor(DeckPanel);

/** @public {number} @const */
DeckPanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_DeckPanel_ = 350;
/** @public {SlideAnimation} */
DeckPanel.f_slideAnimation__org_gwtproject_user_client_ui_DeckPanel_;

exports = DeckPanel; 
//# sourceMappingURL=DeckPanel.js.map