goog.module('org.gwtproject.user.client.ui.DialogBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const DecoratedPopupPanel = goog.require('org.gwtproject.user.client.ui.DecoratedPopupPanel$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');
let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.DialogBox.$1$impl');
let Caption = goog.forwardDeclare('org.gwtproject.user.client.ui.DialogBox.Caption$impl');
let CaptionImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.DialogBox.CaptionImpl$impl');
let MouseHandler = goog.forwardDeclare('org.gwtproject.user.client.ui.DialogBox.MouseHandler$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {HasHTML}
 * @implements {HasSafeHtml}
  */
class DialogBox extends DecoratedPopupPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Caption} */
  this.f_caption__org_gwtproject_user_client_ui_DialogBox_;
  /** @public {boolean} */
  this.f_dragging__org_gwtproject_user_client_ui_DialogBox_ = false;
  /** @public {number} */
  this.f_dragStartX__org_gwtproject_user_client_ui_DialogBox_ = 0;
  /** @public {number} */
  this.f_dragStartY__org_gwtproject_user_client_ui_DialogBox_ = 0;
  /** @public {number} */
  this.f_windowWidth__org_gwtproject_user_client_ui_DialogBox_ = 0;
  /** @public {number} */
  this.f_clientLeft__org_gwtproject_user_client_ui_DialogBox_ = 0;
  /** @public {number} */
  this.f_clientTop__org_gwtproject_user_client_ui_DialogBox_ = 0;
  /** @public {HandlerRegistration} */
  this.f_resizeHandlerRegistration__org_gwtproject_user_client_ui_DialogBox;
 }
 /**
  * Factory method corresponding to constructor 'DialogBox()'.
  * @return {!DialogBox}
  * @public
  */
 static $create__() {
  DialogBox.$clinit();
  let $instance = new DialogBox();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DialogBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox__() {
  this.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean(false);
 }
 /**
  * Factory method corresponding to constructor 'DialogBox(boolean)'.
  * @param {boolean} autoHide
  * @return {!DialogBox}
  * @public
  */
 static $create__boolean(autoHide) {
  DialogBox.$clinit();
  let $instance = new DialogBox();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean(autoHide);
  return $instance;
 }
 /**
  * Initialization from constructor 'DialogBox(boolean)'.
  * @param {boolean} autoHide
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox__boolean(autoHide) {
  this.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean(autoHide, true);
 }
 /**
  * Factory method corresponding to constructor 'DialogBox(Caption)'.
  * @param {Caption} captionWidget
  * @return {!DialogBox}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DialogBox_Caption(captionWidget) {
  DialogBox.$clinit();
  let $instance = new DialogBox();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox__org_gwtproject_user_client_ui_DialogBox_Caption(captionWidget);
  return $instance;
 }
 /**
  * Initialization from constructor 'DialogBox(Caption)'.
  * @param {Caption} captionWidget
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox__org_gwtproject_user_client_ui_DialogBox_Caption(captionWidget) {
  this.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean__org_gwtproject_user_client_ui_DialogBox_Caption(false, true, captionWidget);
 }
 /**
  * Factory method corresponding to constructor 'DialogBox(boolean, boolean)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @return {!DialogBox}
  * @public
  */
 static $create__boolean__boolean(autoHide, modal) {
  DialogBox.$clinit();
  let $instance = new DialogBox();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean(autoHide, modal);
  return $instance;
 }
 /**
  * Initialization from constructor 'DialogBox(boolean, boolean)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean(autoHide, modal) {
  this.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean__org_gwtproject_user_client_ui_DialogBox_Caption(autoHide, modal, CaptionImpl.$create__());
 }
 /**
  * Factory method corresponding to constructor 'DialogBox(boolean, boolean, Caption)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @param {Caption} captionWidget
  * @return {!DialogBox}
  * @public
  */
 static $create__boolean__boolean__org_gwtproject_user_client_ui_DialogBox_Caption(autoHide, modal, captionWidget) {
  DialogBox.$clinit();
  let $instance = new DialogBox();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean__org_gwtproject_user_client_ui_DialogBox_Caption(autoHide, modal, captionWidget);
  return $instance;
 }
 /**
  * Initialization from constructor 'DialogBox(boolean, boolean, Caption)'.
  * @param {boolean} autoHide
  * @param {boolean} modal
  * @param {Caption} captionWidget
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox__boolean__boolean__org_gwtproject_user_client_ui_DialogBox_Caption(autoHide, modal, captionWidget) {
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(autoHide, modal, "dialog");
  $Asserts.$assertWithMessage(!$Equality.$same(captionWidget, null), "The caption must not be null");
  captionWidget.m_asWidget__().m_removeFromParent__();
  this.f_caption__org_gwtproject_user_client_ui_DialogBox_ = captionWidget;
  let td = this.m_getCellElement__int__int(0, 1);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(td, this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__().m_getElement__());
  this.m_adopt__org_gwtproject_user_client_ui_Widget(this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__());
  this.m_setStyleName__java_lang_String(DialogBox.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DialogBox_);
  this.f_windowWidth__org_gwtproject_user_client_ui_DialogBox_ = Window.m_getClientWidth__();
  this.f_clientLeft__org_gwtproject_user_client_ui_DialogBox_ = $Overlay.m_getBodyOffsetLeft__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  this.f_clientTop__org_gwtproject_user_client_ui_DialogBox_ = $Overlay.m_getBodyOffsetTop__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  let mouseHandler = MouseHandler.$create__org_gwtproject_user_client_ui_DialogBox(this);
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(mouseHandler, MouseDownEvent.m_getType__());
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(mouseHandler, MouseUpEvent.m_getType__());
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(mouseHandler, MouseMoveEvent.m_getType__());
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(mouseHandler, MouseOverEvent.m_getType__());
  this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(mouseHandler, MouseOutEvent.m_getType__());
 }
 /**
  * @return {Caption}
  * @public
  */
 m_getCaption__() {
  return this.f_caption__org_gwtproject_user_client_ui_DialogBox_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_getHTML__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_getText__();
 }
 /**
  * @override
  * @param {boolean} autoClosed
  * @public
  */
 m_hide__boolean(autoClosed) {
  if (!$Equality.$same(this.f_resizeHandlerRegistration__org_gwtproject_user_client_ui_DialogBox, null)) {
   this.f_resizeHandlerRegistration__org_gwtproject_user_client_ui_DialogBox.m_removeHandler__();
   this.f_resizeHandlerRegistration__org_gwtproject_user_client_ui_DialogBox = null;
  }
  super.m_hide__boolean(autoClosed);
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
   case Event.f_ONMOUSEUP__org_gwtproject_user_client_Event: 
   case Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event: 
   case Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event: 
   case Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event: 
    if (!this.f_dragging__org_gwtproject_user_client_ui_DialogBox_ && !this.m_isCaptionEvent__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_DialogBox(event)) {
     return;
    }
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /**
  * @param {Widget} sender
  * @param {number} x
  * @param {number} y
  * @public
  * @deprecated
  */
 m_onMouseDown__org_gwtproject_user_client_ui_Widget__int__int(sender, x, y) {
  if ($Equality.$same(DOM.m_getCaptureElement__(), null)) {
   this.f_dragging__org_gwtproject_user_client_ui_DialogBox_ = true;
   DOM.m_setCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
   this.f_dragStartX__org_gwtproject_user_client_ui_DialogBox_ = x;
   this.f_dragStartY__org_gwtproject_user_client_ui_DialogBox_ = y;
  }
 }
 /**
  * @param {Widget} sender
  * @public
  * @deprecated
  */
 m_onMouseEnter__org_gwtproject_user_client_ui_Widget(sender) {}
 /**
  * @param {Widget} sender
  * @public
  * @deprecated
  */
 m_onMouseLeave__org_gwtproject_user_client_ui_Widget(sender) {}
 /**
  * @param {Widget} sender
  * @param {number} x
  * @param {number} y
  * @public
  * @deprecated
  */
 m_onMouseMove__org_gwtproject_user_client_ui_Widget__int__int(sender, x, y) {
  if (this.f_dragging__org_gwtproject_user_client_ui_DialogBox_) {
   let absX = x + this.m_getAbsoluteLeft__();
   let absY = y + this.m_getAbsoluteTop__();
   if (absX < this.f_clientLeft__org_gwtproject_user_client_ui_DialogBox_ || absX >= this.f_windowWidth__org_gwtproject_user_client_ui_DialogBox_ || absY < this.f_clientTop__org_gwtproject_user_client_ui_DialogBox_) {
    return;
   }
   this.m_setPopupPosition__int__int(absX - this.f_dragStartX__org_gwtproject_user_client_ui_DialogBox_, absY - this.f_dragStartY__org_gwtproject_user_client_ui_DialogBox_);
  }
 }
 /**
  * @param {Widget} sender
  * @param {number} x
  * @param {number} y
  * @public
  * @deprecated
  */
 m_onMouseUp__org_gwtproject_user_client_ui_Widget__int__int(sender, x, y) {
  this.f_dragging__org_gwtproject_user_client_ui_DialogBox_ = false;
  DOM.m_releaseCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html);
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(SafeHtmlUtils.m_fromTrustedString__java_lang_String(html));
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_setText__java_lang_String(text);
 }
 /**
  * @override
  * @public
  */
 m_show__() {
  if ($Equality.$same(this.f_resizeHandlerRegistration__org_gwtproject_user_client_ui_DialogBox, null)) {
   this.f_resizeHandlerRegistration__org_gwtproject_user_client_ui_DialogBox = Window.m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler($1.$create__org_gwtproject_user_client_ui_DialogBox(this));
  }
  super.m_show__();
 }
 /**
  * @param {MouseDownEvent} event
  * @public
  */
 m_beginDragging__org_gwtproject_event_dom_client_MouseDownEvent(event) {
  this.m_onMouseDown__org_gwtproject_user_client_ui_Widget__int__int(this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__(), event.m_getX__(), event.m_getY__());
 }
 /**
  * @param {MouseMoveEvent} event
  * @public
  */
 m_continueDragging__org_gwtproject_event_dom_client_MouseMoveEvent(event) {
  this.m_onMouseMove__org_gwtproject_user_client_ui_Widget__int__int(this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__(), event.m_getX__(), event.m_getY__());
 }
 /**
  * @override
  * @public
  */
 m_doAttachChildren__() {
  try {
   super.m_doAttachChildren__();
  } finally {
   this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__().m_onAttach__();
  }
 }
 /**
  * @override
  * @public
  */
 m_doDetachChildren__() {
  try {
   super.m_doDetachChildren__();
  } finally {
   this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__().m_onDetach__();
  }
 }
 /**
  * @param {MouseUpEvent} event
  * @public
  */
 m_endDragging__org_gwtproject_event_dom_client_MouseUpEvent(event) {
  this.m_onMouseUp__org_gwtproject_user_client_ui_Widget__int__int(this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__(), event.m_getX__(), event.m_getY__());
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__().m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-caption");
  UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getCellElement__int__int(1, 1), baseID, "content");
 }
 /**
  * @override
  * @param {NativePreviewEvent} event
  * @public
  */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event) {
  let nativeEvent = event.m_getNativeEvent__();
  if (!event.m_isCanceled__() && (event.m_getTypeInt__() == Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event) && this.m_isCaptionEvent__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_DialogBox(nativeEvent)) {
   NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
  }
  super.m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event);
 }
 /**
  * @param {Object} event
  * @return {boolean}
  * @public
  */
 m_isCaptionEvent__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_DialogBox(event) {
  let target = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(target)) {
   return Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.m_getCellElement__int__int(0, 1)), Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(target));
  }
  return false;
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
  DialogBox.$clinit = () =>{};
  DialogBox.$loadModules();
  DecoratedPopupPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DialogBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  MouseDownEvent = goog.module.get('org.gwtproject.event.dom.client.MouseDownEvent$impl');
  MouseMoveEvent = goog.module.get('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
  MouseOutEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOutEvent$impl');
  MouseOverEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOverEvent$impl');
  MouseUpEvent = goog.module.get('org.gwtproject.event.dom.client.MouseUpEvent$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.DialogBox.$1$impl');
  CaptionImpl = goog.module.get('org.gwtproject.user.client.ui.DialogBox.CaptionImpl$impl');
  MouseHandler = goog.module.get('org.gwtproject.user.client.ui.DialogBox.MouseHandler$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(DialogBox, 'org.gwtproject.user.client.ui.DialogBox');

HasHTML.$markImplementor(DialogBox);
HasSafeHtml.$markImplementor(DialogBox);

/** @public {?string} @const */
DialogBox.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_DialogBox_ = "gwt-DialogBox";

exports = DialogBox; 
//# sourceMappingURL=DialogBox.js.map