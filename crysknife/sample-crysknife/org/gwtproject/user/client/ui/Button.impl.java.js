goog.module('org.gwtproject.user.client.ui.Button$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ButtonBase = goog.require('org.gwtproject.user.client.ui.ButtonBase$impl');

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

class Button extends ButtonBase {
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
  Button.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let button = Button.$create__org_gwtproject_dom_client_Element(element);
  button.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(button);
  return button;
 }
 /**
  * Factory method corresponding to constructor 'Button()'.
  * @return {!Button}
  * @public
  */
 static $create__() {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_gwtproject_user_client_ui_Button__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Button()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Button__() {
  this.$ctor__org_gwtproject_user_client_ui_ButtonBase__org_gwtproject_dom_client_Element(Document_$Overlay.m_createPushButtonElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-Button");
 }
 /**
  * Factory method corresponding to constructor 'Button(SafeHtml)'.
  * @param {SafeHtml} html
  * @return {!Button}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(html) {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_safehtml_shared_SafeHtml(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'Button(SafeHtml)'.
  * @param {SafeHtml} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.$ctor__org_gwtproject_user_client_ui_Button__java_lang_String(html.m_asString__());
 }
 /**
  * Factory method corresponding to constructor 'Button(String)'.
  * @param {?string} html
  * @return {!Button}
  * @public
  */
 static $create__java_lang_String(html) {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_gwtproject_user_client_ui_Button__java_lang_String(html);
  return $instance;
 }
 /**
  * Initialization from constructor 'Button(String)'.
  * @param {?string} html
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Button__java_lang_String(html) {
  this.$ctor__org_gwtproject_user_client_ui_Button__();
  this.m_setHTML__java_lang_String(html);
 }
 /**
  * Factory method corresponding to constructor 'Button(SafeHtml, ClickHandler)'.
  * @param {SafeHtml} html
  * @param {ClickHandler} handler
  * @return {!Button}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'Button(SafeHtml, ClickHandler)'.
  * @param {SafeHtml} html
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  this.$ctor__org_gwtproject_user_client_ui_Button__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html.m_asString__(), handler);
 }
 /**
  * Factory method corresponding to constructor 'Button(String, ClickHandler)'.
  * @param {?string} html
  * @param {ClickHandler} handler
  * @return {!Button}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_gwtproject_user_client_ui_Button__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'Button(String, ClickHandler)'.
  * @param {?string} html
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Button__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(html, handler) {
  this.$ctor__org_gwtproject_user_client_ui_Button__java_lang_String(html);
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
 }
 /**
  * Factory method corresponding to constructor 'Button(Element)'.
  * @param {Object} element
  * @return {!Button}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  Button.$clinit();
  let $instance = new Button();
  $instance.$ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'Button(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Button__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_ButtonBase__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(element), Element_$Overlay)));
  ButtonElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @public
  */
 m_click__() {
  this.m_getButtonElement__().click();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getButtonElement__() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), ButtonElement_$Overlay));
 }
 /**
  * @public
  */
 static $clinit() {
  Button.$clinit = () =>{};
  Button.$loadModules();
  ButtonBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Button;
 }
 /**
  * @public
  */
 static $loadModules() {
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  ButtonElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Button, 'org.gwtproject.user.client.ui.Button');

exports = Button; 
//# sourceMappingURL=Button.js.map