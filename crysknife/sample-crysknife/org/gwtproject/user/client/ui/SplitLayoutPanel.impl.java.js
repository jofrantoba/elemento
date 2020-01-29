goog.module('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DockLayoutPanel = goog.require('org.gwtproject.user.client.ui.DockLayoutPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Direction = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.Direction$impl');
let LayoutData = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');
let HSplitter = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel.HSplitter$impl');
let Splitter = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter$impl');
let VSplitter = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel.VSplitter$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SplitLayoutPanel extends DockLayoutPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_splitterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_ = 0;
 }
 /**
  * Factory method corresponding to constructor 'SplitLayoutPanel()'.
  * @return {!SplitLayoutPanel}
  * @public
  */
 static $create__() {
  SplitLayoutPanel.$clinit();
  let $instance = new SplitLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SplitLayoutPanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SplitLayoutPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel__int(SplitLayoutPanel.f_DEFAULT_SPLITTER_SIZE__org_gwtproject_user_client_ui_SplitLayoutPanel_);
 }
 /**
  * Factory method corresponding to constructor 'SplitLayoutPanel(int)'.
  * @param {number} splitterSize
  * @return {!SplitLayoutPanel}
  * @public
  */
 static $create__int(splitterSize) {
  SplitLayoutPanel.$clinit();
  let $instance = new SplitLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel__int(splitterSize);
  return $instance;
 }
 /**
  * Initialization from constructor 'SplitLayoutPanel(int)'.
  * @param {number} splitterSize
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SplitLayoutPanel__int(splitterSize) {
  this.$ctor__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_dom_style_shared_Unit(Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_splitterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_ = splitterSize;
  this.m_setStyleName__java_lang_String("gwt-SplitLayoutPanel");
  if ($Equality.$same(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_, null)) {
   SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
   Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
   Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   Style_$Overlay.m_setMargin__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   Style_$Overlay.m_setPadding__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   Style_$Overlay.m_setBorderWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, "background", "white");
   Style_$Overlay.m_setOpacity__$devirt__org_gwtproject_dom_client_Style__double(SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_.style, 0.0);
  }
 }
 /**
  * @return {number}
  * @public
  */
 m_getSplitterSize__() {
  return this.f_splitterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_;
 }
 /**
  * @override
  * @param {Widget} child
  * @param {Direction} direction
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(child, direction, size, before) {
  super.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(child, direction, size, before);
  if (!$Equality.$same(direction, Direction.f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction)) {
   this.m_insertSplitter__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(child, before);
  }
 }
 /**
  * @override
  * @param {Widget} child
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(child) {
  $Asserts.$assertWithMessage(!Splitter.$isInstance(child), "Splitters may not be directly removed");
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
  if (super.m_remove__org_gwtproject_user_client_ui_Widget(child)) {
   if (idx < this.m_getWidgetCount__()) {
    super.m_remove__org_gwtproject_user_client_ui_Widget(this.m_getWidget__int(idx));
   }
   return true;
  }
  return false;
 }
 /**
  * @override
  * @param {Widget} widget
  * @param {boolean} hidden
  * @public
  */
 m_setWidgetHidden__org_gwtproject_user_client_ui_Widget__boolean(widget, hidden) {
  super.m_setWidgetHidden__org_gwtproject_user_client_ui_Widget__boolean(widget, hidden);
  let splitter = this.m_getAssociatedSplitter__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(widget);
  if (!$Equality.$same(splitter, null)) {
   super.m_setWidgetHidden__org_gwtproject_user_client_ui_Widget__boolean(splitter, hidden);
  }
 }
 /**
  * @param {Widget} child
  * @param {number} minSize
  * @public
  */
 m_setWidgetMinSize__org_gwtproject_user_client_ui_Widget__int(child, minSize) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(child);
  let splitter = this.m_getAssociatedSplitter__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(child);
  if (!$Equality.$same(splitter, null)) {
   splitter.m_setMinSize__int(minSize);
  }
 }
 /**
  * @param {Widget} child
  * @param {number} snapClosedSize
  * @public
  */
 m_setWidgetSnapClosedSize__org_gwtproject_user_client_ui_Widget__int(child, snapClosedSize) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(child);
  let splitter = this.m_getAssociatedSplitter__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(child);
  if (!$Equality.$same(splitter, null)) {
   splitter.m_setSnapClosedSize__int(snapClosedSize);
  }
 }
 /**
  * @param {Widget} child
  * @param {boolean} allowed
  * @public
  */
 m_setWidgetToggleDisplayAllowed__org_gwtproject_user_client_ui_Widget__boolean(child, allowed) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(child);
  let splitter = this.m_getAssociatedSplitter__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(child);
  if (!$Equality.$same(splitter, null)) {
   splitter.m_setToggleDisplayAllowed__boolean(allowed);
  }
 }
 /**
  * @param {Widget} child
  * @return {Splitter}
  * @public
  */
 m_getAssociatedSplitter__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(child) {
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
  if (idx > -1 && idx < this.m_getWidgetCount__() - 1) {
   let splitter = this.m_getWidget__int(idx + 1);
   $Asserts.$assertWithMessage(Splitter.$isInstance(splitter), "Expected child widget to be splitter");
   return /**@type {Splitter} */ ($Casts.$to(splitter, Splitter));
  }
  return null;
 }
 /**
  * @param {Widget} widget
  * @param {Widget} before
  * @public
  */
 m_insertSplitter__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_SplitLayoutPanel(widget, before) {
  $Asserts.$assertWithMessage(this.m_getChildren__().m_size__() > 0, "Can't add a splitter before any children");
  let layout = /**@type {LayoutData} */ ($Casts.$to(widget.m_getLayoutData__(), LayoutData));
  let splitter = null;
  switch (this.m_getResolvedDirection__org_gwtproject_user_client_ui_DockLayoutPanel_Direction(layout.f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData).ordinal()) {
   case Direction.$ordinal$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
    splitter = HSplitter.$create__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean(this, widget, false);
    break;
   case Direction.$ordinal$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
    splitter = HSplitter.$create__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean(this, widget, true);
    break;
   case Direction.$ordinal$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
    splitter = VSplitter.$create__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean(this, widget, false);
    break;
   case Direction.$ordinal$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
    splitter = VSplitter.$create__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean(this, widget, true);
    break;
   default: 
    $Asserts.$assertWithMessage(false, "Unexpected direction");
  }
  super.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(splitter, layout.f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData, this.f_splitterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_, before);
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
  * @return {Object}
  * @public
  */
 static get f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_() {
  return (SplitLayoutPanel.$clinit(), SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_);
 }
 /**
  * @param {Object} value
  * @public
  */
 static set f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_(value) {
  (SplitLayoutPanel.$clinit(), SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  SplitLayoutPanel.$clinit = () =>{};
  SplitLayoutPanel.$loadModules();
  DockLayoutPanel.$clinit();
  SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SplitLayoutPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Direction = goog.module.get('org.gwtproject.user.client.ui.DockLayoutPanel.Direction$impl');
  LayoutData = goog.module.get('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');
  HSplitter = goog.module.get('org.gwtproject.user.client.ui.SplitLayoutPanel.HSplitter$impl');
  Splitter = goog.module.get('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter$impl');
  VSplitter = goog.module.get('org.gwtproject.user.client.ui.SplitLayoutPanel.VSplitter$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SplitLayoutPanel, 'org.gwtproject.user.client.ui.SplitLayoutPanel');

/** @public {number} @const */
SplitLayoutPanel.f_DEFAULT_SPLITTER_SIZE__org_gwtproject_user_client_ui_SplitLayoutPanel_ = 8;
/** @public {number} @const */
SplitLayoutPanel.f_DOUBLE_CLICK_TIMEOUT__org_gwtproject_user_client_ui_SplitLayoutPanel_ = 500;
/** @private {Object} */
SplitLayoutPanel.$f_glassElem__org_gwtproject_user_client_ui_SplitLayoutPanel_;

exports = SplitLayoutPanel; 
//# sourceMappingURL=SplitLayoutPanel.js.map