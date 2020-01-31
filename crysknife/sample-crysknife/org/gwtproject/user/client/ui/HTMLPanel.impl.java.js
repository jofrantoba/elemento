goog.module('org.gwtproject.user.client.ui.HTMLPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class HTMLPanel extends ComplexPanel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {?string} */
 static m_createUniqueId__() {
  HTMLPanel.$clinit();
  return $Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
 }
 /** @return {HTMLPanel} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  HTMLPanel.$clinit();
  $Asserts.$assert(Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node($Overlay.m_get__().body, element));
  let html = HTMLPanel.$create__org_gwtproject_dom_client_Element(element);
  html.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(html);
  return html;
 }
 //Factory method corresponding to constructor 'HTMLPanel(String)'.
 /** @return {!HTMLPanel} */
 static $create__java_lang_String(/** ?string */ html) {
  HTMLPanel.$clinit();
  let $instance = new HTMLPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLPanel__java_lang_String(html);
  return $instance;
 }
 //Initialization from constructor 'HTMLPanel(String)'.
 
 $ctor__org_gwtproject_user_client_ui_HTMLPanel__java_lang_String(/** ?string */ html) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.m_setElement__org_gwtproject_dom_client_Element($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), html);
 }
 //Factory method corresponding to constructor 'HTMLPanel(SafeHtml)'.
 /** @return {!HTMLPanel} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ safeHtml) {
  HTMLPanel.$clinit();
  let $instance = new HTMLPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLPanel__org_gwtproject_safehtml_shared_SafeHtml(safeHtml);
  return $instance;
 }
 //Initialization from constructor 'HTMLPanel(SafeHtml)'.
 
 $ctor__org_gwtproject_user_client_ui_HTMLPanel__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ safeHtml) {
  this.$ctor__org_gwtproject_user_client_ui_HTMLPanel__java_lang_String(safeHtml.m_asString__());
 }
 //Factory method corresponding to constructor 'HTMLPanel(String, String)'.
 /** @return {!HTMLPanel} */
 static $create__java_lang_String__java_lang_String(/** ?string */ tag, /** ?string */ html) {
  HTMLPanel.$clinit();
  let $instance = new HTMLPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLPanel__java_lang_String__java_lang_String(tag, html);
  return $instance;
 }
 //Initialization from constructor 'HTMLPanel(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_HTMLPanel__java_lang_String__java_lang_String(/** ?string */ tag, /** ?string */ html) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  if ($Equality.$same("", html)) {
   this.m_setElement__org_gwtproject_dom_client_Element($Overlay.m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($Overlay.m_get__(), tag));
   return;
  }
  let b = StringBuilder.$create__();
  b.m_append__char(60 /* '<' */).m_append__java_lang_String(tag).m_append__char(62 /* '>' */).m_append__java_lang_String(html);
  b.m_append__java_lang_String("</").m_append__java_lang_String(tag).m_append__char(62 /* '>' */);
  let scratchDiv = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(scratchDiv, b.toString());
  this.m_setElement__org_gwtproject_dom_client_Element(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(scratchDiv));
  Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(this.m_getElement__());
 }
 //Factory method corresponding to constructor 'HTMLPanel(Element)'.
 /** @return {!HTMLPanel} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let $instance = new HTMLPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_HTMLPanel__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 //Initialization from constructor 'HTMLPanel(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_HTMLPanel__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget, this.m_getElement__());
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(/** Widget */ widget, /** ?string */ id) {
  let elem = this.m_getElementById__java_lang_String(id);
  if ($Equality.$same(elem, null)) {
   throw $Exceptions.toJs(NoSuchElementException.$create__java_lang_String(id));
  }
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget, elem);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(/** Widget */ widget, /** Object */ elem) {
  super.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget, elem);
 }
 
 m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(/** Widget */ widget, /** Object */ toReplace) {
  if ($Equality.$same(toReplace, widget.m_getElement__())) {
   return;
  }
  widget.m_removeFromParent__();
  let toRemove = null;
  let children = this.m_getChildren__().m_iterator__();
  while (children.m_hasNext__()) {
   let next = /**@type {Widget}*/ ($Casts.$to(children.m_next__(), Widget));
   if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(toReplace, next.m_getElement__())) {
    if ($Equality.$same(next.m_getElement__(), toReplace)) {
     toRemove = next;
     break;
    }
    children.m_remove__();
   }
  }
  this.m_getChildren__().m_add__org_gwtproject_user_client_ui_Widget(widget);
  if ($Equality.$same(toRemove, null)) {
   toReplace.parentNode.replaceChild(widget.m_getElement__(), toReplace);
  } else {
   toReplace.parentNode.insertBefore(widget.m_getElement__(), toReplace);
   this.m_remove__org_gwtproject_user_client_ui_Widget(toRemove);
  }
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
 }
 
 m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__java_lang_String(/** Widget */ widget, /** ?string */ id) {
  let toReplace = this.m_getElementById__java_lang_String(id);
  if ($Equality.$same(toReplace, null)) {
   throw $Exceptions.toJs(NoSuchElementException.$create__java_lang_String(id));
  }
  this.m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget, toReplace);
 }
 
 m_addAndReplaceElement__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_dom_client_Element(/** IsWidget */ widget, /** Object */ elm) {
  this.m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(widget.m_asWidget__(), elm);
 }
 
 m_addAndReplaceElement__org_gwtproject_user_client_ui_IsWidget__java_lang_String(/** IsWidget */ widget, /** ?string */ id) {
  this.m_addAndReplaceElement__org_gwtproject_user_client_ui_Widget__java_lang_String(widget.m_asWidget__(), id);
 }
 /** @return {Object} */
 m_getElementById__java_lang_String(/** ?string */ id) {
  let elem = this.m_isAttached__() ? $Overlay.m_get__().getElementById(id) : this.m_attachToDomAndGetElement__java_lang_String_$p_org_gwtproject_user_client_ui_HTMLPanel(id);
  return elem;
 }
 /** @return {Object} */
 m_attachToDomAndGetElement__java_lang_String_$p_org_gwtproject_user_client_ui_HTMLPanel(/** ?string */ id) {
  if ($Equality.$same(HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_, null)) {
   HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_, false);
   RootPanel.m_getBodyElement__().appendChild(HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_);
  }
  let origParent = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.m_getElement__());
  let origSibling = Element_$Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
  HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_.appendChild(this.m_getElement__());
  let child = $Overlay.m_get__().getElementById(id);
  if (!$Equality.$same(origParent, null)) {
   origParent.insertBefore(this.m_getElement__(), origSibling);
  } else {
   HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_.removeChild(this.m_getElement__());
  }
  return child;
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
 
 static $clinit() {
  HTMLPanel.$clinit = () =>{};
  HTMLPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HTMLPanel, 'org.gwtproject.user.client.ui.HTMLPanel');

/**@type {Object}*/
HTMLPanel.f_hiddenDiv__org_gwtproject_user_client_ui_HTMLPanel_;

exports = HTMLPanel; 
//# sourceMappingURL=HTMLPanel.js.map