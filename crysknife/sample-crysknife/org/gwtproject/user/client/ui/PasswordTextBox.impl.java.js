goog.module('org.gwtproject.user.client.ui.PasswordTextBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextBox = goog.require('org.gwtproject.user.client.ui.TextBox$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class PasswordTextBox extends TextBox {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {PasswordTextBox}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  PasswordTextBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let textBox = PasswordTextBox.$create__org_gwtproject_dom_client_Element(element);
  textBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(textBox);
  return textBox;
 }
 /**
  * Factory method corresponding to constructor 'PasswordTextBox()'.
  * @return {!PasswordTextBox}
  * @public
  */
 static $create__() {
  PasswordTextBox.$clinit();
  let $instance = new PasswordTextBox();
  $instance.$ctor__org_gwtproject_user_client_ui_PasswordTextBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'PasswordTextBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PasswordTextBox__() {
  this.$ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element__java_lang_String(Document_$Overlay.m_createPasswordInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()), "gwt-PasswordTextBox");
 }
 /**
  * Factory method corresponding to constructor 'PasswordTextBox(Element)'.
  * @param {Object} element
  * @return {!PasswordTextBox}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  PasswordTextBox.$clinit();
  let $instance = new PasswordTextBox();
  $instance.$ctor__org_gwtproject_user_client_ui_PasswordTextBox__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'PasswordTextBox(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PasswordTextBox__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_TextBox__org_gwtproject_dom_client_Element__java_lang_String(element, null);
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "password"));
 }
 /**
  * @public
  */
 static $clinit() {
  PasswordTextBox.$clinit = () =>{};
  PasswordTextBox.$loadModules();
  TextBox.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PasswordTextBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(PasswordTextBox, 'org.gwtproject.user.client.ui.PasswordTextBox');

exports = PasswordTextBox; 
//# sourceMappingURL=PasswordTextBox.js.map