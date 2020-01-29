goog.module('org.gwtproject.user.client.ui.SimpleCheckBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.SimpleCheckBox.$1$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasName}
 * @implements {HasValue<?boolean>}
 * @implements {IsEditor<LeafValueEditor<?boolean>>}
  */
class SimpleCheckBox extends FocusWidget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LeafValueEditor<?boolean>} */
  this.f_editor__org_gwtproject_user_client_ui_SimpleCheckBox_;
  /** @public {boolean} */
  this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_SimpleCheckBox_ = false;
 }
 /**
  * @param {Object} element
  * @return {SimpleCheckBox}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  SimpleCheckBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let checkBox = SimpleCheckBox.$create__org_gwtproject_dom_client_Element(element);
  checkBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(checkBox);
  return checkBox;
 }
 /**
  * Factory method corresponding to constructor 'SimpleCheckBox()'.
  * @return {!SimpleCheckBox}
  * @public
  */
 static $create__() {
  SimpleCheckBox.$clinit();
  let $instance = new SimpleCheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SimpleCheckBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SimpleCheckBox__() {
  this.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element__java_lang_String(Document_$Overlay.m_createCheckInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()), "gwt-SimpleCheckBox");
 }
 /**
  * Factory method corresponding to constructor 'SimpleCheckBox(Element)'.
  * @param {Object} element
  * @return {!SimpleCheckBox}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  SimpleCheckBox.$clinit();
  let $instance = new SimpleCheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimpleCheckBox(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "checkbox"));
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /**
  * Factory method corresponding to constructor 'SimpleCheckBox(Element, String)'.
  * @param {Object} element
  * @param {?string} styleName
  * @return {!SimpleCheckBox}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element__java_lang_String(element, styleName) {
  SimpleCheckBox.$clinit();
  let $instance = new SimpleCheckBox();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element__java_lang_String(element, styleName);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimpleCheckBox(Element, String)'.
  * @param {Object} element
  * @param {?string} styleName
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SimpleCheckBox__org_gwtproject_dom_client_Element__java_lang_String(element, styleName) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  this.m_setElement__org_gwtproject_dom_client_Element(element);
  if (!$Equality.$same(styleName, null)) {
   this.m_setStyleName__java_lang_String(styleName);
  }
 }
 /**
  * @override
  * @param {ValueChangeHandler<?boolean>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  if (!this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_SimpleCheckBox_) {
   this.m_ensureDomEventHandlers__();
   this.f_valueChangeHandlerInitialized__org_gwtproject_user_client_ui_SimpleCheckBox_ = true;
  }
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /**
  * @override
  * @return {LeafValueEditor<?boolean>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_SimpleCheckBox_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_SimpleCheckBox_ = /**@type {TakesValueEditor<?boolean>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_SimpleCheckBox_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getFormValue__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox().value;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox().name;
 }
 /**
  * @override
  * @return {?boolean}
  * @public
  */
 m_getValue__() {
  let propName = this.m_isAttached__() ? "checked" : "defaultChecked";
  return Element_$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox(), propName);
 }
 /**
  * @return {boolean}
  * @public
  * @deprecated
  */
 m_isChecked__() {
  return Boolean.m_booleanValue__java_lang_Boolean(this.m_getValue__()) == true;
 }
 /**
  * @param {boolean} checked
  * @public
  * @deprecated
  */
 m_setChecked__boolean(checked) {
  this.m_setValue__java_lang_Boolean(checked);
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  super.m_setEnabled__boolean(enabled);
  if (enabled) {
   this.m_removeStyleDependentName__java_lang_String("disabled");
  } else {
   this.m_addStyleDependentName__java_lang_String("disabled");
  }
 }
 /**
  * @param {?string} value
  * @public
  */
 m_setFormValue__java_lang_String(value) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox().setAttribute("value", value);
 }
 /**
  * @override
  * @param {?string} name
  * @public
  */
 m_setName__java_lang_String(name) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox().name = name;
 }
 /**
  * @param {?boolean} value
  * @public
  */
 m_setValue__java_lang_Boolean(value) {
  this.m_setValue__java_lang_Boolean__boolean(value, false);
 }
 /**
  * @param {?boolean} value
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_lang_Boolean__boolean(value, fireEvents) {
  if ($Equality.$same(value, null)) {
   value = Boolean.f_FALSE__java_lang_Boolean;
  }
  let oldValue = fireEvents ? this.m_getValue__() : null;
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox().checked = Boolean.m_booleanValue__java_lang_Boolean(value);
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox().defaultChecked = Boolean.m_booleanValue__java_lang_Boolean(value);
  if (fireEvents) {
   ValueChangeEvent.m_fireIfNotEqual__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(this, oldValue, value);
  }
 }
 /**
  * @public
  */
 m_ensureDomEventHandlers__() {
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($1.$create__org_gwtproject_user_client_ui_SimpleCheckBox(this));
 }
 /**
  * @override
  * @public
  */
 m_onUnload__() {
  this.m_setValue__java_lang_Boolean(this.m_getValue__());
 }
 /**
  * @return {Object}
  * @public
  */
 m_getInputElement___$p_org_gwtproject_user_client_ui_SimpleCheckBox() {
  return InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(arg0, Boolean)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {boolean} arg1
  * @public
  */
 m_setValue__java_lang_Object__boolean(arg0, arg1) {
  this.m_setValue__java_lang_Boolean__boolean(/**@type {?boolean} */ ($Casts.$to(arg0, Boolean)), arg1);
 }
 /**
  * @public
  */
 static $clinit() {
  SimpleCheckBox.$clinit = () =>{};
  SimpleCheckBox.$loadModules();
  FocusWidget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimpleCheckBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.SimpleCheckBox.$1$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SimpleCheckBox, 'org.gwtproject.user.client.ui.SimpleCheckBox');

HasName.$markImplementor(SimpleCheckBox);
HasValue.$markImplementor(SimpleCheckBox);
IsEditor.$markImplementor(SimpleCheckBox);

exports = SimpleCheckBox; 
//# sourceMappingURL=SimpleCheckBox.js.map