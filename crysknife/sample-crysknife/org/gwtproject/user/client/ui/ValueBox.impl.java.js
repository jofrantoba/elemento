goog.module('org.gwtproject.user.client.ui.ValueBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBoxBase = goog.require('org.gwtproject.user.client.ui.ValueBoxBase$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Parser = goog.forwardDeclare('org.gwtproject.text.shared.Parser$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {ValueBoxBase<T>}
  */
class ValueBox extends ValueBoxBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T_1 @return {ValueBox<T_1>} */
 static m_wrap__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(/** Object */ element, /** Renderer<T_1> */ renderer, /** Parser<T_1> */ parser) {
  ValueBox.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let valueBox = /**@type {!ValueBox<T_1>}*/ (ValueBox.$create__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(element, renderer, parser));
  valueBox.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(valueBox);
  return valueBox;
 }
 /** @template T @return {!ValueBox<T>} */
 static $create__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(/** Object */ element, /** Renderer<T> */ renderer, /** Parser<T> */ parser) {
  ValueBox.$clinit();
  let $instance = new ValueBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueBox__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(element, renderer, parser);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ValueBox__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(/** Object */ element, /** Renderer<T> */ renderer, /** Parser<T> */ parser) {
  this.$ctor__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(element, renderer, parser);
  this.m_setDirectionEstimator__boolean(false);
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   this.m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction);
  }
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(InputElement_$Overlay.m_as__org_gwtproject_dom_client_Element(element).type, "text"));
 }
 /** @return {number} */
 m_getMaxLength__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_ValueBox().maxLength;
 }
 /** @return {number} */
 m_getVisibleLength__() {
  return this.m_getInputElement___$p_org_gwtproject_user_client_ui_ValueBox().size;
 }
 
 m_setMaxLength__int(/** number */ length) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_ValueBox().maxLength = length;
 }
 
 m_setVisibleLength__int(/** number */ length) {
  this.m_getInputElement___$p_org_gwtproject_user_client_ui_ValueBox().size = length;
 }
 /** @return {Object} */
 m_getInputElement___$p_org_gwtproject_user_client_ui_ValueBox() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), InputElement_$Overlay));
 }
 
 static $clinit() {
  ValueBox.$clinit = () =>{};
  ValueBox.$loadModules();
  ValueBoxBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueBox;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ValueBox, 'org.gwtproject.user.client.ui.ValueBox');

exports = ValueBox; 
//# sourceMappingURL=ValueBox.js.map