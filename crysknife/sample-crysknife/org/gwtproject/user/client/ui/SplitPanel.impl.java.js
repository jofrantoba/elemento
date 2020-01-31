goog.module('org.gwtproject.user.client.ui.SplitPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Panel = goog.require('org.gwtproject.user.client.ui.Panel$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let WidgetIterators = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetIterators$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @deprecated
  */
class SplitPanel extends Panel {
 /** @protected */
 constructor() {
  super();
  /**@type {Array<Widget>}*/
  this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_;
  /**@type {Array<Object>}*/
  this.f_elements__org_gwtproject_user_client_ui_SplitPanel_;
  /**@type {Object}*/
  this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_;
  /**@type {boolean}*/
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = false;
 }
 
 static m_addAbsolutePositoning__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "position", "absolute");
 }
 
 static m_addClipping__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "overflow", "hidden");
 }
 
 static m_addScrolling__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "overflow", "auto");
 }
 
 static m_expandToFitParentUsingCssOffsets__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  let zeroSize = "0px";
  SplitPanel.m_addAbsolutePositoning__org_gwtproject_dom_client_Element(elem);
  SplitPanel.m_setLeft__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setRight__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setTop__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setBottom__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
 }
 
 static m_expandToFitParentUsingPercentages__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  let zeroSize = "0px";
  let fullSize = "100%";
  SplitPanel.m_addAbsolutePositoning__org_gwtproject_dom_client_Element(elem);
  SplitPanel.m_setTop__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setLeft__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setWidth__org_gwtproject_dom_client_Element__java_lang_String(elem, fullSize);
  SplitPanel.m_setHeight__org_gwtproject_dom_client_Element__java_lang_String(elem, fullSize);
 }
 /** @return {number} */
 static m_getOffsetHeight__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "offsetHeight");
 }
 /** @return {number} */
 static m_getOffsetWidth__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "offsetWidth");
 }
 /** @return {Object} */
 static m_preventBoxStyles__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SplitPanel.$clinit();
  DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(elem, "padding", 0);
  DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(elem, "margin", 0);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "border", "none");
  return elem;
 }
 
 static m_setBottom__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ size) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "bottom", size);
 }
 
 static m_setClassname__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ className) {
  SplitPanel.$clinit();
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "className", className);
 }
 
 static m_setHeight__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ height) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "height", height);
 }
 
 static m_setLeft__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ left) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "left", left);
 }
 
 static m_setRight__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ right) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "right", right);
 }
 
 static m_setTop__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ top) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "top", top);
 }
 
 static m_setWidth__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ elem, /** ?string */ width) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "width", width);
 }
 
 $ctor__org_gwtproject_user_client_ui_SplitPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ mainElem, /** Object */ splitElem, /** Object */ headElem, /** Object */ tailElem) {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.$init___$p_org_gwtproject_user_client_ui_SplitPanel();
  this.m_setElement__org_gwtproject_dom_client_Element(mainElem);
  this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_ = splitElem;
  $Arrays.$set(this.f_elements__org_gwtproject_user_client_ui_SplitPanel_, 0, headElem);
  $Arrays.$set(this.f_elements__org_gwtproject_user_client_ui_SplitPanel_, 1, tailElem);
  this.m_sinkEvents__int(Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_ONLOSECAPTURE__org_gwtproject_user_client_Event);
  if ($Equality.$same(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_, null)) {
   SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_ = DOM.m_createDiv__();
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "position", "absolute");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "top", "0px");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "left", "0px");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "margin", "0px");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "padding", "0px");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "border", "0px");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "background", "white");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "opacity", "0.0");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "filter", "alpha(opacity=0)");
  }
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if ($Equality.$same(this.m_getWidget__int(0), null)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(0, w);
  } else if ($Equality.$same(this.m_getWidget__int(1), null)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(1, w);
  } else {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("A Splitter can only contain two Widgets."));
  }
 }
 /** @return {boolean} */
 m_isResizing__() {
  return this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_;
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return WidgetIterators.m_createWidgetIterator__org_gwtproject_user_client_ui_HasWidgets__arrayOf_org_gwtproject_user_client_ui_Widget(this, this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_);
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
    {
     let target = DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event);
     if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_, target)) {
      this.m_startResizingFrom__int__int_$p_org_gwtproject_user_client_ui_SplitPanel(NativeEvent_$Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(event) - this.m_getAbsoluteLeft__(), NativeEvent_$Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(event) - this.m_getAbsoluteTop__());
      DOM.m_setCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
      NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
     }
     break;
    }
   case Event.f_ONMOUSEUP__org_gwtproject_user_client_Event: 
    {
     if (this.m_isResizing__()) {
      this.m_stopResizing___$p_org_gwtproject_user_client_ui_SplitPanel();
      DOM.m_releaseCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
     }
     break;
    }
   case Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event: 
    {
     if (this.m_isResizing__()) {
      $Asserts.$assert(!$Equality.$same(DOM.m_getCaptureElement__(), null));
      this.m_onSplitterResize__int__int_$pp_org_gwtproject_user_client_ui(NativeEvent_$Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(event) - this.m_getAbsoluteLeft__(), NativeEvent_$Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(event) - this.m_getAbsoluteTop__());
      NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
     }
     break;
    }
   case Event.f_ONLOSECAPTURE__org_gwtproject_user_client_Event: 
    {
     if (this.m_isResizing__()) {
      this.m_stopResizing___$p_org_gwtproject_user_client_ui_SplitPanel();
     }
     break;
    }
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  if ($Equality.$same(this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[0], widget)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(0, null);
   return true;
  } else if ($Equality.$same(this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[1], widget)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(1, null);
   return true;
  }
  return false;
 }
 /** @abstract */
 m_setSplitPosition__java_lang_String(/** ?string */ size) {}
 /** @return {Object} */
 m_getElement__int(/** number */ index) {
  return this.f_elements__org_gwtproject_user_client_ui_SplitPanel_[index];
 }
 /** @return {Object} */
 m_getSplitElement__() {
  return this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_;
 }
 /** @return {Widget} */
 m_getWidget__int(/** number */ index) {
  return this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[index];
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_, baseID, "splitter");
 }
 
 m_setWidget__int__org_gwtproject_user_client_ui_Widget(/** number */ index, /** Widget */ w) {
  let oldWidget = this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[index];
  if ($Equality.$same(oldWidget, w)) {
   return;
  }
  if (!$Equality.$same(w, null)) {
   w.m_removeFromParent__();
  }
  if (!$Equality.$same(oldWidget, null)) {
   try {
    this.m_orphan__org_gwtproject_user_client_ui_Widget(oldWidget);
   } finally {
    this.f_elements__org_gwtproject_user_client_ui_SplitPanel_[index].removeChild(oldWidget.m_getElement__());
    $Arrays.$set(this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_, index, null);
   }
  }
  $Arrays.$set(this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_, index, w);
  if (!$Equality.$same(w, null)) {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_elements__org_gwtproject_user_client_ui_SplitPanel_[index], w.m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w);
  }
 }
 /** @abstract */
 m_onSplitterResize__int__int_$pp_org_gwtproject_user_client_ui(/** number */ x, /** number */ y) {}
 /** @abstract */
 m_onSplitterResizeStarted__int__int_$pp_org_gwtproject_user_client_ui(/** number */ x, /** number */ y) {}
 
 m_startResizingFrom__int__int_$p_org_gwtproject_user_client_ui_SplitPanel(/** number */ x, /** number */ y) {
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = true;
  this.m_onSplitterResizeStarted__int__int_$pp_org_gwtproject_user_client_ui(x, y);
  let height = Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(RootPanel.m_getBodyElement__()) - 1;
  let width = Element_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(RootPanel.m_getBodyElement__()) - 1;
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "height", height + "px");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "width", width + "px");
  RootPanel.m_getBodyElement__().appendChild(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_);
 }
 
 m_stopResizing___$p_org_gwtproject_user_client_ui_SplitPanel() {
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = false;
  RootPanel.m_getBodyElement__().removeChild(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_);
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
 $init___$p_org_gwtproject_user_client_ui_SplitPanel() {
  this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_ = /**@type {!Array<Widget>}*/ ($Arrays.$create([2], Widget));
  this.f_elements__org_gwtproject_user_client_ui_SplitPanel_ = new Array(2);
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = false;
 }
 
 static $clinit() {
  SplitPanel.$clinit = () =>{};
  SplitPanel.$loadModules();
  Panel.$clinit();
  SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SplitPanel;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  WidgetIterators = goog.module.get('org.gwtproject.user.client.ui.WidgetIterators$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SplitPanel, 'org.gwtproject.user.client.ui.SplitPanel');

/**@type {Object}*/
SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_;

exports = SplitPanel; 
//# sourceMappingURL=SplitPanel.js.map