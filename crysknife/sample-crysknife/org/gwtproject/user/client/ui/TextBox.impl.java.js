goog.module('org.gwtproject.user.client.ui.TextBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextBoxBase = goog.require('org.gwtproject.user.client.ui.TextBoxBase$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class TextBox extends TextBoxBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {TextBox} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  TextBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let textBox = TextBox.$create__org_gwtproject_dom_client_Element(element);
  textBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(textBox);
  return textBox;
 }
 //Factory method corresponding to constructor 'TextBox()'.
 /** @return {!TextBox} */
 static $create__() {
  TextBox.$clinit();
  let $instance = new TextBox();
  $instance.$ctor__org_gwtproject_user_client_ui_TextBox__();
  return $instance;
 }
 //Initialization from constructor 'TextBox()'.
 
 $ctor__org_gwtproject_user_client_ui_TextBox__() {
  this.$ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element__java_lang_String(Document_$Overlay.m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()), "gwt-TextBox");
 }
 //Factory method corresponding to constructor 'TextBox(Element)'.
 /** @return {!TextBox} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  TextBox.$clinit();
  let $instance = new TextBox();
  $instance.$ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'TextBox(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_TextBoxBase__org_gwtproject_dom_client_Element(element);
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "text"));
 }
 //Factory method corresponding to constructor 'TextBox(Element, String)'.
 /** @return {!TextBox} */
 static $create__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ element, /** ?string */ styleName) {
  TextBox.$clinit();
  let $instance = new TextBox();
  $instance.$ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element__java_lang_String(element, styleName);
  return $instance;
 }
 //Initialization from constructor 'TextBox(Element, String)'.
 
 $ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ element, /** ?string */ styleName) {
  this.$ctor__org_gwtproject_user_client_ui_TextBoxBase__org_gwtproject_dom_client_Element(element);
  if (!$Equality.$same(styleName, null)) {
   this.m_setStyleName__java_lang_String(styleName);
  }
 }
 /** @return {number} */
 m_getMaxLength__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_TextBox().maxLength;
 }
 /** @return {number} */
 m_getVisibleLength__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_TextBox().size;
 }
 
 m_setMaxLength__int(/** number */ length) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_TextBox().maxLength = length;
 }
 
 m_setVisibleLength__int(/** number */ length) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_TextBox().size = length;
 }
 /** @return {Object} */
 m_getInputElement___$p_org_gwtproject_user_client_ui_TextBox() {
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(this.m_getElement__()));
 }
 
 static $clinit() {
  TextBox.$clinit = () =>{};
  TextBox.$loadModules();
  TextBoxBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextBox;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(TextBox, 'org.gwtproject.user.client.ui.TextBox');

exports = TextBox; 
//# sourceMappingURL=TextBox.js.map