goog.module('org.gwtproject.user.client.ui.AbsolutePanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {ForIsWidget}
  */
class AbsolutePanel extends ComplexPanel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_changeToStaticPositioning__org_gwtproject_dom_client_Element(elem) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "left", "");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "top", "");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "position", "");
 }
 /**
  * Factory method corresponding to constructor 'AbsolutePanel()'.
  * @return {!AbsolutePanel}
  * @public
  */
 static $create__() {
  AbsolutePanel.$clinit();
  let $instance = new AbsolutePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_AbsolutePanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'AbsolutePanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AbsolutePanel__() {
  this.$ctor__org_gwtproject_user_client_ui_AbsolutePanel__org_gwtproject_dom_client_Element(DOM.m_createDiv__());
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "position", "relative");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "overflow", "hidden");
 }
 /**
  * Factory method corresponding to constructor 'AbsolutePanel(Element)'.
  * @param {Object} elem
  * @return {!AbsolutePanel}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(elem) {
  AbsolutePanel.$clinit();
  let $instance = new AbsolutePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_AbsolutePanel__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 /**
  * Initialization from constructor 'AbsolutePanel(Element)'.
  * @param {Object} elem
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AbsolutePanel__org_gwtproject_dom_client_Element(elem) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  super.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(w, this.m_getElement__());
 }
 /**
  * @param {Widget} w
  * @param {number} left
  * @param {number} top
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__int__int(w, left, top) {
  w.m_removeFromParent__();
  let beforeIndex = this.m_getWidgetCount__();
  this.m_setWidgetPositionImpl__org_gwtproject_user_client_ui_Widget__int__int(w, left, top);
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex);
  this.m_verifyPositionNotStatic__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w);
 }
 /**
  * @param {IsWidget} w
  * @param {number} left
  * @param {number} top
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__int__int(w, left, top) {
  this.m_add__org_gwtproject_user_client_ui_Widget__int__int(w.m_asWidget__(), left, top);
 }
 /**
  * @param {Widget} w
  * @return {number}
  * @public
  */
 m_getWidgetLeft__org_gwtproject_user_client_ui_Widget(w) {
  this.m_checkWidgetParent__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w);
  return Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(w.m_getElement__()) - Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @param {Widget} w
  * @return {number}
  * @public
  */
 m_getWidgetTop__org_gwtproject_user_client_ui_Widget(w) {
  this.m_checkWidgetParent__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w);
  return Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(w.m_getElement__()) - Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(w, this.m_getElement__(), beforeIndex, true);
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
  * @param {Widget} w
  * @param {number} left
  * @param {number} top
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int__int__int(w, left, top, beforeIndex) {
  w.m_removeFromParent__();
  this.m_setWidgetPositionImpl__org_gwtproject_user_client_ui_Widget__int__int(w, left, top);
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex);
  this.m_verifyPositionNotStatic__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w);
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   AbsolutePanel.m_changeToStaticPositioning__org_gwtproject_dom_client_Element(w.m_getElement__());
  }
  return removed;
 }
 /**
  * @param {Widget} w
  * @param {number} left
  * @param {number} top
  * @public
  */
 m_setWidgetPosition__org_gwtproject_user_client_ui_Widget__int__int(w, left, top) {
  this.m_checkWidgetParent__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w);
  this.m_setWidgetPositionImpl__org_gwtproject_user_client_ui_Widget__int__int(w, left, top);
  this.m_verifyPositionNotStatic__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w);
 }
 /**
  * @param {Widget} w
  * @param {number} left
  * @param {number} top
  * @public
  */
 m_setWidgetPositionImpl__org_gwtproject_user_client_ui_Widget__int__int(w, left, top) {
  let h = w.m_getElement__();
  if (left == -1 && top == -1) {
   AbsolutePanel.m_changeToStaticPositioning__org_gwtproject_dom_client_Element(h);
  } else {
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(h.style, "position", "absolute");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(h.style, "left", left + "px");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(h.style, "top", top + "px");
  }
 }
 /**
  * @param {Widget} w
  * @public
  */
 m_checkWidgetParent__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Widget must be a child of this panel."));
  }
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_verifyPositionNotStatic__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_AbsolutePanel(child) {
  if (!this.m_isAttached__()) {
   return;
  }
  if ($Equality.$same(child.m_getElement__().offsetParent, null)) {
   return;
  }
  if ($Equality.$same(child.m_getElement__().offsetParent, this.m_getElement__())) {
   return;
  }
  if ($Equality.$same("body", j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(this.m_getElement__().nodeName, Locale.f_ROOT__java_util_Locale))) {
   return;
  }
  let className = this.m_getClass__().m_getName__();
  window.console.warn("Warning: " + j_l_String.m_valueOf__java_lang_Object(className) + " descendants will be incorrectly " + "positioned, i.e. not relative to their parent element, when " + "'position:static', which is the CSS default, is in effect. One " + "possible fix is to call " + "'panel.getElement().getStyle().setPosition(Position.RELATIVE)'.", IllegalStateException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(className) + " is missing CSS 'position:{relative,absolute,fixed}'"));
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
  AbsolutePanel.$clinit = () =>{};
  AbsolutePanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbsolutePanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbsolutePanel, 'org.gwtproject.user.client.ui.AbsolutePanel');

ForIsWidget.$markImplementor(AbsolutePanel);

exports = AbsolutePanel; 
//# sourceMappingURL=AbsolutePanel.js.map