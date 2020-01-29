goog.module('org.gwtproject.user.client.ui.Hidden$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const TakesValue = goog.require('org.gwtproject.user.client.TakesValue$impl');
const HasName = goog.require('org.gwtproject.user.client.ui.HasName$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasName}
 * @implements {TakesValue<?string>}
 * @implements {IsEditor<LeafValueEditor<?string>>}
  */
class Hidden extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LeafValueEditor<?string>} */
  this.f_editor__org_gwtproject_user_client_ui_Hidden_;
 }
 /**
  * @param {Object} element
  * @return {Hidden}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  Hidden.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let hidden = Hidden.$create__org_gwtproject_dom_client_Element(element);
  hidden.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(hidden);
  return hidden;
 }
 /**
  * Factory method corresponding to constructor 'Hidden()'.
  * @return {!Hidden}
  * @public
  */
 static $create__() {
  Hidden.$clinit();
  let $instance = new Hidden();
  $instance.$ctor__org_gwtproject_user_client_ui_Hidden__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Hidden()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Hidden__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.m_setElement__org_gwtproject_dom_client_Element(Document_$Overlay.m_createHiddenInputElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
 }
 /**
  * Factory method corresponding to constructor 'Hidden(String)'.
  * @param {?string} name
  * @return {!Hidden}
  * @public
  */
 static $create__java_lang_String(name) {
  Hidden.$clinit();
  let $instance = new Hidden();
  $instance.$ctor__org_gwtproject_user_client_ui_Hidden__java_lang_String(name);
  return $instance;
 }
 /**
  * Initialization from constructor 'Hidden(String)'.
  * @param {?string} name
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Hidden__java_lang_String(name) {
  this.$ctor__org_gwtproject_user_client_ui_Hidden__();
  this.m_setName__java_lang_String(name);
 }
 /**
  * Factory method corresponding to constructor 'Hidden(String, String)'.
  * @param {?string} name
  * @param {?string} value
  * @return {!Hidden}
  * @public
  */
 static $create__java_lang_String__java_lang_String(name, value) {
  Hidden.$clinit();
  let $instance = new Hidden();
  $instance.$ctor__org_gwtproject_user_client_ui_Hidden__java_lang_String__java_lang_String(name, value);
  return $instance;
 }
 /**
  * Initialization from constructor 'Hidden(String, String)'.
  * @param {?string} name
  * @param {?string} value
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Hidden__java_lang_String__java_lang_String(name, value) {
  this.$ctor__org_gwtproject_user_client_ui_Hidden__java_lang_String(name);
  this.m_setValue__java_lang_String(value);
 }
 /**
  * Factory method corresponding to constructor 'Hidden(Element)'.
  * @param {Object} element
  * @return {!Hidden}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  Hidden.$clinit();
  let $instance = new Hidden();
  $instance.$ctor__org_gwtproject_user_client_ui_Hidden__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'Hidden(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Hidden__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "hidden"));
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @override
  * @return {LeafValueEditor<?string>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_Hidden_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_Hidden_ = /**@type {TakesValueEditor<?string>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_Hidden_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getDefaultValue__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden().defaultValue;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getID__() {
  return this.m_getElement__().id;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden().name;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden().value;
 }
 /**
  * @param {?string} defaultValue
  * @public
  */
 m_setDefaultValue__java_lang_String(defaultValue) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden().defaultValue = defaultValue;
 }
 /**
  * @param {?string} id
  * @public
  */
 m_setID__java_lang_String(id) {
  this.m_getElement__().id = id;
 }
 /**
  * @override
  * @param {?string} name
  * @public
  */
 m_setName__java_lang_String(name) {
  if ($Equality.$same(name, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("Name cannot be null"));
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(name, "")) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Name cannot be an empty string."));
  }
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden().name = name;
 }
 /**
  * @param {?string} value
  * @public
  */
 m_setValue__java_lang_String(value) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden().value = value;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getInputElement___$p_org_gwtproject_user_client_ui_Hidden() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), InputElement_$Overlay));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_lang_String(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)));
 }
 /**
  * @public
  */
 static $clinit() {
  Hidden.$clinit = () =>{};
  Hidden.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Hidden;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Hidden, 'org.gwtproject.user.client.ui.Hidden');

HasName.$markImplementor(Hidden);
TakesValue.$markImplementor(Hidden);
IsEditor.$markImplementor(Hidden);

exports = Hidden; 
//# sourceMappingURL=Hidden.js.map