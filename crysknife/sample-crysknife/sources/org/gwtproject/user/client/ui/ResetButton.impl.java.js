goog.module('org.gwtproject.user.client.ui.ResetButton$impl');

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

class ResetButton extends Button {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {Button}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  ResetButton.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let button = ResetButton.$create__org_gwtproject_dom_client_Element(element);
  button.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(button);
  return button;
 }
 /**
  * Factory method corresponding to constructor 'ResetButton()'.
  * @return {!ResetButton}
  * @public
  */
 static $create__() {
  ResetButton.$clinit();
  let $instance = new ResetButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ResetButton__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ResetButton()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResetButton__() {
  this.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_dom_client_Element(Document_$Overlay.m_createResetButtonElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-ResetButton");
 }
 /**
  * Factory method corresponding to constructor 'ResetButton(SafeHtml)'.
  * @param {SafeHtml} html
  * @return {!ResetButton}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(html) {
  ResetButton.$clinit();
  let $instance = new ResetButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ResetButton__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'ResetButton(SafeHtml)'.
  * @param {SafeHtml} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResetButton__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.$ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String(html.m_asString__());
 }
 /**
  * Factory method corresponding to constructor 'ResetButton(String)'.
  * @param {?string} html
  * @return {!ResetButton}
  * @public
  */
 static $create__java_lang_String(html) {
  ResetButton.$clinit();
  let $instance = new ResetButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'ResetButton(String)'.
  * @param {?string} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String(html) {
  this.$ctor__org_gwtproject_user_client_ui_ResetButton__();
  this.m_setHTML__java_lang_String(html);
 }
 /**
  * Factory method corresponding to constructor 'ResetButton(SafeHtml, ClickHandler)'.
  * @param {SafeHtml} html
  * @param {ClickHandler} handler
  * @return {!ResetButton}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  ResetButton.$clinit();
  let $instance = new ResetButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ResetButton__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'ResetButton(SafeHtml, ClickHandler)'.
  * @param {SafeHtml} html
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResetButton__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  this.$ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html.m_asString__(), handler);
 }
 /**
  * Factory method corresponding to constructor 'ResetButton(String, ClickHandler)'.
  * @param {?string} html
  * @param {ClickHandler} handler
  * @return {!ResetButton}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  ResetButton.$clinit();
  let $instance = new ResetButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'ResetButton(String, ClickHandler)'.
  * @param {?string} html
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  this.$ctor__org_gwtproject_user_client_ui_ResetButton__java_lang_String(html);
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
 }
 /**
  * Factory method corresponding to constructor 'ResetButton(Element)'.
  * @param {Object} element
  * @return {!ResetButton}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  ResetButton.$clinit();
  let $instance = new ResetButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ResetButton__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'ResetButton(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResetButton__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_dom_client_Element(element);
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("reset", /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(element), ButtonElement_$Overlay)).type));
 }
 /**
  * @public
  */
 static $clinit() {
  ResetButton.$clinit = () =>{};
  ResetButton.$loadModules();
  Button.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ResetButton;
 }
 /**
  * @public
  */
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
$Util.$setClassMetadata(ResetButton, 'org.gwtproject.user.client.ui.ResetButton');

exports = ResetButton; 
//# sourceMappingURL=ResetButton.js.map