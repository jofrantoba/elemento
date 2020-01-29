goog.module('org.gwtproject.user.client.ui.SplitLayoutPanel.HSplitter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Splitter = goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter$impl');

let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let SplitLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class HSplitter extends Splitter {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SplitLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_HSplitter;
 }
 /**
  * @param {SplitLayoutPanel} $outer_this
  * @param {Widget} target
  * @param {boolean} reverse
  * @return {!HSplitter}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse) {
  HSplitter.$clinit();
  let $instance = new HSplitter();
  $instance.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_HSplitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse);
  return $instance;
 }
 /**
  * @param {SplitLayoutPanel} $outer_this
  * @param {Widget} target
  * @param {boolean} reverse
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_HSplitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_HSplitter = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse);
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(this.m_getElement__().style, "width", $outer_this.f_splitterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_);
  this.m_setStyleName__java_lang_String("gwt-SplitLayoutPanel-HDragger");
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getAbsolutePosition__() {
  return this.m_getAbsoluteLeft__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getCenterSize__() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_HSplitter.m_getCenterWidth__();
 }
 /**
  * @override
  * @param {Event} event
  * @return {number}
  * @public
  */
 m_getEventPosition__org_gwtproject_user_client_Event(event) {
  return NativeEvent_$Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(event);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTargetPosition__() {
  return this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getAbsoluteLeft__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTargetSize__() {
  return this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getOffsetWidth__();
 }
 /**
  * @public
  */
 static $clinit() {
  HSplitter.$clinit = () =>{};
  HSplitter.$loadModules();
  Splitter.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HSplitter;
 }
 /**
  * @public
  */
 static $loadModules() {
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(HSplitter, 'org.gwtproject.user.client.ui.SplitLayoutPanel$HSplitter');

exports = HSplitter; 
//# sourceMappingURL=SplitLayoutPanel$HSplitter.js.map