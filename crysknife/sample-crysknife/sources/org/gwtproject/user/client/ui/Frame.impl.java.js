goog.module('org.gwtproject.user.client.ui.Frame$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasLoadHandlers = goog.require('org.gwtproject.event.dom.client.HasLoadHandlers$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LoadEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadEvent$impl');
let LoadHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasLoadHandlers}
  */
class Frame extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {Frame}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  Frame.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let frame = Frame.$create__org_gwtproject_dom_client_Element(element);
  frame.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(frame);
  return frame;
 }
 /**
  * Factory method corresponding to constructor 'Frame()'.
  * @return {!Frame}
  * @public
  */
 static $create__() {
  Frame.$clinit();
  let $instance = new Frame();
  $instance.$ctor__org_gwtproject_user_client_ui_Frame__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Frame()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Frame__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.m_setElement__org_gwtproject_dom_client_Element(Document_$Overlay.m_createIFrameElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String(Frame.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_Frame);
 }
 /**
  * Factory method corresponding to constructor 'Frame(String)'.
  * @param {?string} url
  * @return {!Frame}
  * @public
  */
 static $create__java_lang_String(url) {
  Frame.$clinit();
  let $instance = new Frame();
  $instance.$ctor__org_gwtproject_user_client_ui_Frame__java_lang_String(url);
  return $instance;
 }
 /**
  * Initialization from constructor 'Frame(String)'.
  * @param {?string} url
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Frame__java_lang_String(url) {
  this.$ctor__org_gwtproject_user_client_ui_Frame__();
  this.m_setUrl__java_lang_String(url);
 }
 /**
  * Factory method corresponding to constructor 'Frame(Element)'.
  * @param {Object} element
  * @return {!Frame}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  Frame.$clinit();
  let $instance = new Frame();
  $instance.$ctor__org_gwtproject_user_client_ui_Frame__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'Frame(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Frame__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  IFrameElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element);
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @param {LoadHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addLoadHandler__org_gwtproject_event_dom_client_LoadHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, LoadEvent.m_getType__());
 }
 /**
  * @return {?string}
  * @public
  */
 m_getUrl__() {
  return this.m_getFrameElement___$p_org_gwtproject_user_client_ui_Frame().src;
 }
 /**
  * @param {?string} url
  * @public
  */
 m_setUrl__java_lang_String(url) {
  this.m_getFrameElement___$p_org_gwtproject_user_client_ui_Frame().src = url;
 }
 /**
  * @param {SafeUri} url
  * @public
  */
 m_setUrl__org_gwtproject_safehtml_shared_SafeUri(url) {
  FrameElement_$Overlay.m_setSrc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri(this.m_getFrameElement___$p_org_gwtproject_user_client_ui_Frame(), url);
 }
 /**
  * @return {Object}
  * @public
  */
 m_getFrameElement___$p_org_gwtproject_user_client_ui_Frame() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), FrameElement_$Overlay));
 }
 /**
  * @public
  */
 static $clinit() {
  Frame.$clinit = () =>{};
  Frame.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Frame;
 }
 /**
  * @public
  */
 static $loadModules() {
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  FrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
  IFrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  LoadEvent = goog.module.get('org.gwtproject.event.dom.client.LoadEvent$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Frame, 'org.gwtproject.user.client.ui.Frame');

HasLoadHandlers.$markImplementor(Frame);

/** @public {?string} @const */
Frame.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_Frame = "gwt-Frame";

exports = Frame; 
//# sourceMappingURL=Frame.js.map