goog.module('org.gwtproject.user.client.ui.SplitLayoutPanel.VSplitter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Splitter = goog.require('org.gwtproject.user.client.ui.SplitLayoutPanel.Splitter$impl');

let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let SplitLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SplitLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class VSplitter extends Splitter {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SplitLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_VSplitter;
 }
 /**
  * @param {SplitLayoutPanel} $outer_this
  * @param {Widget} target
  * @param {boolean} reverse
  * @return {!VSplitter}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse) {
  VSplitter.$clinit();
  let $instance = new VSplitter();
  $instance.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_VSplitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse);
  return $instance;
 }
 /**
  * @param {SplitLayoutPanel} $outer_this
  * @param {Widget} target
  * @param {boolean} reverse
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_VSplitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_VSplitter = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter__org_gwtproject_user_client_ui_SplitLayoutPanel__org_gwtproject_user_client_ui_Widget__boolean($outer_this, target, reverse);
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(this.m_getElement__().style, "height", $outer_this.f_splitterSize__org_gwtproject_user_client_ui_SplitLayoutPanel_);
  this.m_setStyleName__java_lang_String("gwt-SplitLayoutPanel-VDragger");
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getAbsolutePosition__() {
  return this.m_getAbsoluteTop__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getCenterSize__() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_SplitLayoutPanel_VSplitter.m_getCenterHeight__();
 }
 /**
  * @override
  * @param {Event} event
  * @return {number}
  * @public
  */
 m_getEventPosition__org_gwtproject_user_client_Event(event) {
  return NativeEvent_$Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(event);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTargetPosition__() {
  return this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getAbsoluteTop__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTargetSize__() {
  return this.f_target__org_gwtproject_user_client_ui_SplitLayoutPanel_Splitter.m_getOffsetHeight__();
 }
 /**
  * @public
  */
 static $clinit() {
  VSplitter.$clinit = () =>{};
  VSplitter.$loadModules();
  Splitter.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof VSplitter;
 }
 /**
  * @public
  */
 static $loadModules() {
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(VSplitter, 'org.gwtproject.user.client.ui.SplitLayoutPanel$VSplitter');

exports = VSplitter; 
//# sourceMappingURL=SplitLayoutPanel$VSplitter.js.map