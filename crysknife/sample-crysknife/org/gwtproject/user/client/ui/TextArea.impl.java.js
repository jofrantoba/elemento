goog.module('org.gwtproject.user.client.ui.TextArea$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextBoxBase = goog.require('org.gwtproject.user.client.ui.TextBoxBase$impl');

let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let TextAreaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextArea extends TextBoxBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {TextArea} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  TextArea.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let textArea = TextArea.$create__org_gwtproject_dom_client_Element(element);
  textArea.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(textArea);
  return textArea;
 }
 //Factory method corresponding to constructor 'TextArea()'.
 /** @return {!TextArea} */
 static $create__() {
  TextArea.$clinit();
  let $instance = new TextArea();
  $instance.$ctor__org_gwtproject_user_client_ui_TextArea__();
  return $instance;
 }
 //Initialization from constructor 'TextArea()'.
 
 $ctor__org_gwtproject_user_client_ui_TextArea__() {
  this.$ctor__org_gwtproject_user_client_ui_TextBoxBase__org_gwtproject_dom_client_Element(Document_$Overlay.m_createTextAreaElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-TextArea");
 }
 //Factory method corresponding to constructor 'TextArea(Element)'.
 /** @return {!TextArea} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  TextArea.$clinit();
  let $instance = new TextArea();
  $instance.$ctor__org_gwtproject_user_client_ui_TextArea__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'TextArea(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_TextArea__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_TextBoxBase__org_gwtproject_dom_client_Element(/**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(element), Element_$Overlay)));
  TextAreaElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element);
 }
 /** @return {number} */
 m_getCharacterWidth__() {
  return this.m_getTextAreaElement___$p_org_gwtproject_user_client_ui_TextArea().cols;
 }
 /** @override @return {number} */
 m_getCursorPos__() {
  return this.m_getImpl__().m_getTextAreaCursorPos__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override @return {number} */
 m_getSelectionLength__() {
  return this.m_getImpl__().m_getTextAreaSelectionLength__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {number} */
 m_getVisibleLines__() {
  return this.m_getTextAreaElement___$p_org_gwtproject_user_client_ui_TextArea().rows;
 }
 
 m_setCharacterWidth__int(/** number */ width) {
  this.m_getTextAreaElement___$p_org_gwtproject_user_client_ui_TextArea().cols = width;
 }
 
 m_setVisibleLines__int(/** number */ lines) {
  this.m_getTextAreaElement___$p_org_gwtproject_user_client_ui_TextArea().rows = lines;
 }
 /** @return {Object} */
 m_getTextAreaElement___$p_org_gwtproject_user_client_ui_TextArea() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), TextAreaElement_$Overlay));
 }
 
 static $clinit() {
  TextArea.$clinit = () =>{};
  TextArea.$loadModules();
  TextBoxBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextArea;
 }
 
 static $loadModules() {
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  TextAreaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TextArea, 'org.gwtproject.user.client.ui.TextArea');

exports = TextArea; 
//# sourceMappingURL=TextArea.js.map