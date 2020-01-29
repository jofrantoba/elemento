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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Array<Widget>} */
  this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_;
  /** @public {Array<Object>} */
  this.f_elements__org_gwtproject_user_client_ui_SplitPanel_;
  /** @public {Object} */
  this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_;
  /** @public {boolean} */
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = false;
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_addAbsolutePositoning__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "position", "absolute");
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_addClipping__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "overflow", "hidden");
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_addScrolling__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "overflow", "auto");
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_expandToFitParentUsingCssOffsets__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  let zeroSize = "0px";
  SplitPanel.m_addAbsolutePositoning__org_gwtproject_dom_client_Element(elem);
  SplitPanel.m_setLeft__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setRight__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setTop__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setBottom__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_expandToFitParentUsingPercentages__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  let zeroSize = "0px";
  let fullSize = "100%";
  SplitPanel.m_addAbsolutePositoning__org_gwtproject_dom_client_Element(elem);
  SplitPanel.m_setTop__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setLeft__org_gwtproject_dom_client_Element__java_lang_String(elem, zeroSize);
  SplitPanel.m_setWidth__org_gwtproject_dom_client_Element__java_lang_String(elem, fullSize);
  SplitPanel.m_setHeight__org_gwtproject_dom_client_Element__java_lang_String(elem, fullSize);
 }
 /**
  * @param {Object} elem
  * @return {number}
  * @public
  */
 static m_getOffsetHeight__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "offsetHeight");
 }
 /**
  * @param {Object} elem
  * @return {number}
  * @public
  */
 static m_getOffsetWidth__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  return Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "offsetWidth");
 }
 /**
  * @param {Object} elem
  * @return {Object}
  * @public
  */
 static m_preventBoxStyles__org_gwtproject_dom_client_Element(elem) {
  SplitPanel.$clinit();
  DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(elem, "padding", 0);
  DOM.m_setIntStyleAttribute__org_gwtproject_dom_client_Element__java_lang_String__int(elem, "margin", 0);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "border", "none");
  return elem;
 }
 /**
  * @param {Object} elem
  * @param {?string} size
  * @public
  */
 static m_setBottom__org_gwtproject_dom_client_Element__java_lang_String(elem, size) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "bottom", size);
 }
 /**
  * @param {Object} elem
  * @param {?string} className
  * @public
  */
 static m_setClassname__org_gwtproject_dom_client_Element__java_lang_String(elem, className) {
  SplitPanel.$clinit();
  Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(elem, "className", className);
 }
 /**
  * @param {Object} elem
  * @param {?string} height
  * @public
  */
 static m_setHeight__org_gwtproject_dom_client_Element__java_lang_String(elem, height) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "height", height);
 }
 /**
  * @param {Object} elem
  * @param {?string} left
  * @public
  */
 static m_setLeft__org_gwtproject_dom_client_Element__java_lang_String(elem, left) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "left", left);
 }
 /**
  * @param {Object} elem
  * @param {?string} right
  * @public
  */
 static m_setRight__org_gwtproject_dom_client_Element__java_lang_String(elem, right) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "right", right);
 }
 /**
  * @param {Object} elem
  * @param {?string} top
  * @public
  */
 static m_setTop__org_gwtproject_dom_client_Element__java_lang_String(elem, top) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "top", top);
 }
 /**
  * @param {Object} elem
  * @param {?string} width
  * @public
  */
 static m_setWidth__org_gwtproject_dom_client_Element__java_lang_String(elem, width) {
  SplitPanel.$clinit();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(elem.style, "width", width);
 }
 /**
  * @param {Object} mainElem
  * @param {Object} splitElem
  * @param {Object} headElem
  * @param {Object} tailElem
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SplitPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(mainElem, splitElem, headElem, tailElem) {
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
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  if ($Equality.$same(this.m_getWidget__int(0), null)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(0, w);
  } else if ($Equality.$same(this.m_getWidget__int(1), null)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(1, w);
  } else {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("A Splitter can only contain two Widgets."));
  }
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isResizing__() {
  return this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_;
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return WidgetIterators.m_createWidgetIterator__org_gwtproject_user_client_ui_HasWidgets__arrayOf_org_gwtproject_user_client_ui_Widget(this, this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_);
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
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
 /**
  * @override
  * @param {Widget} widget
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(widget) {
  if ($Equality.$same(this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[0], widget)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(0, null);
   return true;
  } else if ($Equality.$same(this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[1], widget)) {
   this.m_setWidget__int__org_gwtproject_user_client_ui_Widget(1, null);
   return true;
  }
  return false;
 }
 /**
  * @abstract
  * @param {?string} size
  * @public
  */
 m_setSplitPosition__java_lang_String(size) {}
 /**
  * @param {number} index
  * @return {Object}
  * @public
  */
 m_getElement__int(index) {
  return this.f_elements__org_gwtproject_user_client_ui_SplitPanel_[index];
 }
 /**
  * @return {Object}
  * @public
  */
 m_getSplitElement__() {
  return this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_;
 }
 /**
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getWidget__int(index) {
  return this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_[index];
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_splitElem__org_gwtproject_user_client_ui_SplitPanel_, baseID, "splitter");
 }
 /**
  * @param {number} index
  * @param {Widget} w
  * @public
  */
 m_setWidget__int__org_gwtproject_user_client_ui_Widget(index, w) {
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
 /**
  * @abstract
  * @param {number} x
  * @param {number} y
  * @public
  */
 m_onSplitterResize__int__int_$pp_org_gwtproject_user_client_ui(x, y) {}
 /**
  * @abstract
  * @param {number} x
  * @param {number} y
  * @public
  */
 m_onSplitterResizeStarted__int__int_$pp_org_gwtproject_user_client_ui(x, y) {}
 /**
  * @param {number} x
  * @param {number} y
  * @public
  */
 m_startResizingFrom__int__int_$p_org_gwtproject_user_client_ui_SplitPanel(x, y) {
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = true;
  this.m_onSplitterResizeStarted__int__int_$pp_org_gwtproject_user_client_ui(x, y);
  let height = Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(RootPanel.m_getBodyElement__()) - 1;
  let width = Element_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(RootPanel.m_getBodyElement__()) - 1;
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "height", height + "px");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_.style, "width", width + "px");
  RootPanel.m_getBodyElement__().appendChild(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_);
 }
 /**
  * @public
  */
 m_stopResizing___$p_org_gwtproject_user_client_ui_SplitPanel() {
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = false;
  RootPanel.m_getBodyElement__().removeChild(SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_);
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
 $init___$p_org_gwtproject_user_client_ui_SplitPanel() {
  this.f_widgets__org_gwtproject_user_client_ui_SplitPanel_ = /**@type {!Array<Widget>} */ ($Arrays.$create([2], Widget));
  this.f_elements__org_gwtproject_user_client_ui_SplitPanel_ = new Array(2);
  this.f_isResizing__org_gwtproject_user_client_ui_SplitPanel_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  SplitPanel.$clinit = () =>{};
  SplitPanel.$loadModules();
  Panel.$clinit();
  SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SplitPanel;
 }
 /**
  * @public
  */
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

/** @public {Object} */
SplitPanel.f_glassElem__org_gwtproject_user_client_ui_SplitPanel_;

exports = SplitPanel; 
//# sourceMappingURL=SplitPanel.js.map