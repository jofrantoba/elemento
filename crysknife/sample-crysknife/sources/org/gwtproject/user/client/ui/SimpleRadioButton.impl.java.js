goog.module('org.gwtproject.user.client.ui.SimpleRadioButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimpleCheckBox = goog.require('org.gwtproject.user.client.ui.SimpleCheckBox$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SimpleRadioButton extends SimpleCheckBox {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {SimpleRadioButton} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  SimpleRadioButton.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let radioButton = SimpleRadioButton.$create__org_gwtproject_dom_client_Element(element);
  radioButton.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(radioButton);
  return radioButton;
 }
 //Factory method corresponding to constructor 'SimpleRadioButton(String)'.
 /** @return {!SimpleRadioButton} */
 static $create__java_lang_String(/** ?string */ name) {
  SimpleRadioButton.$clinit();
  let $instance = new SimpleRadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleRadioButton__java_lang_String(name);
  return $instance;
 }
 //Initialization from constructor 'SimpleRadioButton(String)'.
 
 $ctor__org_gwtproject_user_client_ui_SimpleRadioButton__java_lang_String(/** ?string */ name) {
  this.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element__java_lang_String(Document_$Overlay.m_createRadioInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(Document_$Overlay.m_get__(), name), "gwt-SimpleRadioButton");
 }
 //Factory method corresponding to constructor 'SimpleRadioButton(Element)'.
 /** @return {!SimpleRadioButton} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  SimpleRadioButton.$clinit();
  let $instance = new SimpleRadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleRadioButton__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'SimpleRadioButton(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_SimpleRadioButton__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element__java_lang_String(element, null);
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "radio"));
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object(/** * */ arg0) {
  super.m_setValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(arg0, Boolean)));
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object__boolean(/** * */ arg0, /** boolean */ arg1) {
  super.m_setValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(arg0, Boolean)), arg1);
 }
 
 static $clinit() {
  SimpleRadioButton.$clinit = () =>{};
  SimpleRadioButton.$loadModules();
  SimpleCheckBox.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleRadioButton;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SimpleRadioButton, 'org.gwtproject.user.client.ui.SimpleRadioButton');

exports = SimpleRadioButton; 
//# sourceMappingURL=SimpleRadioButton.js.map