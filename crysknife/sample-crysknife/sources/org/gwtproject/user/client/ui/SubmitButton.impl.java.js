goog.module('org.gwtproject.user.client.ui.SubmitButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Button = goog.require('org.gwtproject.user.client.ui.Button$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let ButtonElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SubmitButton extends Button {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Button} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  SubmitButton.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let button = SubmitButton.$create__org_gwtproject_dom_client_Element(element);
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("submit", button.m_getButtonElement__().type));
  button.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(button);
  return button;
 }
 //Factory method corresponding to constructor 'SubmitButton()'.
 /** @return {!SubmitButton} */
 static $create__() {
  SubmitButton.$clinit();
  let $instance = new SubmitButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SubmitButton__();
  return $instance;
 }
 //Initialization from constructor 'SubmitButton()'.
 
 $ctor__org_gwtproject_user_client_ui_SubmitButton__() {
  this.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_dom_client_Element(Document_$Overlay.m_createSubmitButtonElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-SubmitButton");
 }
 //Factory method corresponding to constructor 'SubmitButton(SafeHtml)'.
 /** @return {!SubmitButton} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  SubmitButton.$clinit();
  let $instance = new SubmitButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SubmitButton__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 //Initialization from constructor 'SubmitButton(SafeHtml)'.
 
 $ctor__org_gwtproject_user_client_ui_SubmitButton__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.$ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String(html.m_asString__());
 }
 //Factory method corresponding to constructor 'SubmitButton(String)'.
 /** @return {!SubmitButton} */
 static $create__java_lang_String(/** ?string */ html) {
  SubmitButton.$clinit();
  let $instance = new SubmitButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String(html);
  return $instance;
 }
 //Initialization from constructor 'SubmitButton(String)'.
 
 $ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String(/** ?string */ html) {
  this.$ctor__org_gwtproject_user_client_ui_SubmitButton__();
  this.m_setHTML__java_lang_String(html);
 }
 //Factory method corresponding to constructor 'SubmitButton(SafeHtml, ClickHandler)'.
 /** @return {!SubmitButton} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(/** SafeHtml */ html, /** ClickHandler */ handler) {
  SubmitButton.$clinit();
  let $instance = new SubmitButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SubmitButton__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler);
  return $instance;
 }
 //Initialization from constructor 'SubmitButton(SafeHtml, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_SubmitButton__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(/** SafeHtml */ html, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html.m_asString__(), handler);
 }
 //Factory method corresponding to constructor 'SubmitButton(String, ClickHandler)'.
 /** @return {!SubmitButton} */
 static $create__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ html, /** ClickHandler */ handler) {
  SubmitButton.$clinit();
  let $instance = new SubmitButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler);
  return $instance;
 }
 //Initialization from constructor 'SubmitButton(String, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ html, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_SubmitButton__java_lang_String(html);
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
 }
 //Factory method corresponding to constructor 'SubmitButton(Element)'.
 /** @return {!SubmitButton} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  SubmitButton.$clinit();
  let $instance = new SubmitButton();
  $instance.$ctor__org_gwtproject_user_client_ui_SubmitButton__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'SubmitButton(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_SubmitButton__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_dom_client_Element(element);
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("submit", /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(element), ButtonElement_$Overlay)).type));
 }
 
 static $clinit() {
  SubmitButton.$clinit = () =>{};
  SubmitButton.$loadModules();
  Button.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SubmitButton;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  ButtonElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SubmitButton, 'org.gwtproject.user.client.ui.SubmitButton');

exports = SubmitButton; 
//# sourceMappingURL=SubmitButton.js.map