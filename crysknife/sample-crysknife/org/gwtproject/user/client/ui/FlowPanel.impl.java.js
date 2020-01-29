goog.module('org.gwtproject.user.client.ui.FlowPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {ForIsWidget}
  */
class FlowPanel extends ComplexPanel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'FlowPanel()'.
  * @return {!FlowPanel}
  * @public
  */
 static $create__() {
  FlowPanel.$clinit();
  let $instance = new FlowPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FlowPanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'FlowPanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FlowPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_FlowPanel__java_lang_String($Overlay.f_TAG__org_gwtproject_dom_client_DivElement_$Overlay);
 }
 /**
  * Factory method corresponding to constructor 'FlowPanel(String)'.
  * @param {?string} tag
  * @return {!FlowPanel}
  * @public
  */
 static $create__java_lang_String(tag) {
  FlowPanel.$clinit();
  let $instance = new FlowPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_FlowPanel__java_lang_String(tag);
  return $instance;
 }
 /**
  * Initialization from constructor 'FlowPanel(String)'.
  * @param {?string} tag
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FlowPanel__java_lang_String(tag) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.m_setElement__org_gwtproject_dom_client_Element(Document_$Overlay.m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(Document_$Overlay.m_get__(), tag));
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(w, this.m_getElement__());
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  try {
   this.m_doLogicalClear___$pp_org_gwtproject_user_client_ui();
  } finally {
   Node_$Overlay.m_removeAllChildren__$devirt__org_gwtproject_dom_client_Node(this.m_getElement__());
  }
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
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(w, this.m_getElement__(), beforeIndex, true);
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
  FlowPanel.$clinit = () =>{};
  FlowPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FlowPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
 }
 
}
$Util.$setClassMetadata(FlowPanel, 'org.gwtproject.user.client.ui.FlowPanel');

ForIsWidget.$markImplementor(FlowPanel);

exports = FlowPanel; 
//# sourceMappingURL=FlowPanel.js.map