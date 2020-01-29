goog.module('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let LayoutData = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');
let SplitLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter.$1$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
  */
class Splitter extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SplitLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter;
  /** @public {Widget} */
  this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter;
  /** @public {number} */
  this.f_offset__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0;
  /** @public {boolean} */
  this.f_mouseDown__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = false;
  /** @public {ScheduledCommand} */
  this.f_layoutCommand__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_;
  /** @public {boolean} */
  this.f_reverse__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = false;
  /** @public {number} */
  this.f_minSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0;
  /** @public {number} */
  this.f_snapClosedSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0;
  /** @public {number} */
  this.f_centerSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0.0;
  /** @public {number} */
  this.f_syncedCenterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0.0;
  /** @public {boolean} */
  this.f_toggleDisplayAllowed__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = false;
  /** @public {number} */
  this.f_lastClick__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0.0;
 }
 /**
  * @param {SplitLayoutPanel} $outer_this
  * @param {Widget} target
  * @param {boolean} reverse
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.$init___$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter();
  this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter = target;
  this.f_reverse__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = reverse;
  this.m_setElement__org_gwtproject_dom_client_Element($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  this.m_sinkEvents__int(Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event | Event.f_ONMOUSEUP__org_gwtproject_user_client_Event | Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event | Event.f_ONDBLCLICK__org_gwtproject_user_client_Event);
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  let /** number */ width, /** number */ height;
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
    this.f_mouseDown__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = true;
    width = Math.max(Window.m_getClientWidth__(), $Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
    height = Math.max(Window.m_getClientHeight__(), $Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
    Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, height, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, width, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    $Overlay.m_get__().body.appendChild(SplitLayoutPanel.f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_);
    this.f_offset__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = this.m_getEventPosition__org_gwtproject_user_client_Event(event) - this.m_getAbsolutePosition__();
    Event.m_setCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
    NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
    break;
   case Event.f_ONMOUSEUP__org_gwtproject_user_client_Event: 
    this.f_mouseDown__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = false;
    Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(SplitLayoutPanel.f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_);
    if (this.f_toggleDisplayAllowed__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_) {
     let now = Duration.m_currentTimeMillis__();
     if (now - this.f_lastClick__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ < SplitLayoutPanel.f_DOUBLE_CLICK_TIMEOUT__org_gwtproject_user_client_ui_SplitLayoutPanel_) {
      now = 0.0;
      let layout = /**@type {LayoutData} */ ($Casts.$to(this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getLayoutData__(), LayoutData));
      if (layout.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData == 0) {
       this.m_setAssociatedWidgetSize__double_$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter(layout.f_oldSize__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData);
      } else {
       layout.f_oldSize__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = layout.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
       this.m_setAssociatedWidgetSize__double_$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter(0);
      }
     }
     this.f_lastClick__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = now;
    }
    Event.m_releaseCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
    NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
    break;
   case Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event: 
    if (this.f_mouseDown__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_) {
     let /** number */ size;
     if (this.f_reverse__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_) {
      size = this.m_getTargetPosition__() + this.m_getTargetSize__() - this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getSplitterSize__() - this.m_getEventPosition__org_gwtproject_user_client_Event(event) + this.f_offset__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_;
     } else {
      size = this.m_getEventPosition__org_gwtproject_user_client_Event(event) - this.m_getTargetPosition__() - this.f_offset__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_;
     }
     /**@type {LayoutData} */ ($Casts.$to(this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getLayoutData__(), LayoutData)).f_hidden__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = false;
     this.m_setAssociatedWidgetSize__double_$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter(size);
     NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
    }
    break;
  }
 }
 /**
  * @param {number} minSize
  * @public
  */
 m_setMinSize__int(minSize) {
  this.f_minSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = minSize;
  let layout = /**@type {LayoutData} */ ($Casts.$to(this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getLayoutData__(), LayoutData));
  this.m_setAssociatedWidgetSize__double_$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter($Primitives.$narrowDoubleToInt(layout.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData));
 }
 /**
  * @param {number} snapClosedSize
  * @public
  */
 m_setSnapClosedSize__int(snapClosedSize) {
  this.f_snapClosedSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = snapClosedSize;
 }
 /**
  * @param {boolean} allowed
  * @public
  */
 m_setToggleDisplayAllowed__boolean(allowed) {
  this.f_toggleDisplayAllowed__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = allowed;
 }
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getAbsolutePosition__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getCenterSize__() {}
 /**
  * @abstract
  * @param {Event} event
  * @return {number}
  * @public
  */
 m_getEventPosition__org_gwtproject_user_client_Event(event) {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getTargetPosition__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getTargetSize__() {}
 /**
  * @return {number}
  * @public
  */
 m_getMaxSize___$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter() {
  let newCenterSize = this.m_getCenterSize__();
  if (this.f_syncedCenterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ != newCenterSize) {
   this.f_syncedCenterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = newCenterSize;
   this.f_centerSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = newCenterSize;
  }
  return Math.max(/**@type {LayoutData} */ ($Casts.$to(this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getLayoutData__(), LayoutData)).f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData + this.f_centerSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_, 0);
 }
 /**
  * @param {number} size
  * @public
  */
 m_setAssociatedWidgetSize__double_$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter(size) {
  let maxSize = this.m_getMaxSize___$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter();
  if (size > maxSize) {
   size = maxSize;
  }
  if (this.f_snapClosedSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ > 0 && size < this.f_snapClosedSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_) {
   size = 0.0;
  } else if (size < this.f_minSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_) {
   size = this.f_minSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_;
  }
  let layout = /**@type {LayoutData} */ ($Casts.$to(this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getLayoutData__(), LayoutData));
  if (size == layout.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData) {
   return;
  }
  this.f_centerSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ += layout.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData - size;
  layout.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = size;
  if ($Equality.$same(this.f_layoutCommand__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_, null)) {
   this.f_layoutCommand__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = $1.$create__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter(this);
   Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand(this.f_layoutCommand__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter() {
  this.f_snapClosedSize__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = -1;
  this.f_toggleDisplayAllowed__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = false;
  this.f_lastClick__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter_ = 0.0;
 }
 /**
  * @public
  */
 static $clinit() {
  Splitter.$clinit = () =>{};
  Splitter.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Splitter;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  LayoutData = goog.module.get('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');
  SplitLayoutPanel = goog.module.get('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter.$1$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(Splitter, 'org.gwtproject.user.client.ui.SplitLayoutPanel$Splitter');

exports = Splitter; 
//# sourceMappingURL=SplitLayoutPanel$Splitter.js.map