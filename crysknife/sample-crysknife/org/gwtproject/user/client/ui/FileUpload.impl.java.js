goog.module('org.gwtproject.user.client.ui.FileUpload$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasChangeHandlers = goog.require('org.gwtproject.event.dom.client.HasChangeHandlers$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let ChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasName}
 * @implements {HasChangeHandlers}
 * @implements {HasEnabled}
  */
class FileUpload extends FocusWidget {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {FileUpload} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  FileUpload.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let fileUpload = FileUpload.$create__org_gwtproject_dom_client_Element(element);
  fileUpload.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(fileUpload);
  return fileUpload;
 }
 //Factory method corresponding to constructor 'FileUpload()'.
 /** @return {!FileUpload} */
 static $create__() {
  FileUpload.$clinit();
  let $instance = new FileUpload();
  $instance.$ctor__org_gwtproject_user_client_ui_FileUpload__();
  return $instance;
 }
 //Initialization from constructor 'FileUpload()'.
 
 $ctor__org_gwtproject_user_client_ui_FileUpload__() {
  this.$ctor__org_gwtproject_user_client_ui_FileUpload__org_gwtproject_dom_client_Element(Document_$Overlay.m_createFileInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-FileUpload");
 }
 //Factory method corresponding to constructor 'FileUpload(Element)'.
 /** @return {!FileUpload} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  FileUpload.$clinit();
  let $instance = new FileUpload();
  $instance.$ctor__org_gwtproject_user_client_ui_FileUpload__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'FileUpload(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_FileUpload__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "file"));
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {HandlerRegistration} */
 m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(/** ChangeHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ChangeEvent.m_getType__());
 }
 /** @return {?string} */
 m_getFilename__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_FileUpload().value;
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_FileUpload().name;
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return !Element_$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "disabled");
 }
 /** @override */
 m_setEnabled__boolean(/** boolean */ enabled) {
  Element_$Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getElement__(), "disabled", !enabled);
 }
 /** @override */
 m_setName__java_lang_String(/** ?string */ name) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_FileUpload().name = name;
 }
 /** @return {Object} */
 m_getInputElement___$p_org_gwtproject_user_client_ui_FileUpload() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), InputElement_$Overlay));
 }
 
 m_click__() {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_FileUpload().click();
 }
 
 static $clinit() {
  FileUpload.$clinit = () =>{};
  FileUpload.$loadModules();
  FocusWidget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FileUpload;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  ChangeEvent = goog.module.get('org.gwtproject.event.dom.client.ChangeEvent$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FileUpload, 'org.gwtproject.user.client.ui.FileUpload');

HasName.$markImplementor(FileUpload);
HasChangeHandlers.$markImplementor(FileUpload);
HasEnabled.$markImplementor(FileUpload);

exports = FileUpload; 
//# sourceMappingURL=FileUpload.js.map