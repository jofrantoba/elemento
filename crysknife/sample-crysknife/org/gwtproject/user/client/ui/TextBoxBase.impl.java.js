goog.module('org.gwtproject.user.client.ui.TextBoxBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBoxBase = goog.require('org.gwtproject.user.client.ui.ValueBoxBase$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let PassthroughParser = goog.forwardDeclare('org.gwtproject.text.shared.testing.PassthroughParser$impl');
let PassthroughRenderer = goog.forwardDeclare('org.gwtproject.text.shared.testing.PassthroughRenderer$impl');
let TextAlignConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.TextBoxBase.TextAlignConstant$impl');
let TextAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ValueBoxBase<?string>}
  */
class TextBoxBase extends ValueBoxBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} elem
  * @return {!TextBoxBase}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(elem) {
  TextBoxBase.$clinit();
  let $instance = new TextBoxBase();
  $instance.$ctor__org_gwtproject_user_client_ui_TextBoxBase__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 /**
  * @param {Object} elem
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TextBoxBase__org_gwtproject_dom_client_Element(elem) {
  this.$ctor__org_gwtproject_user_client_ui_ValueBoxBase__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(elem, PassthroughRenderer.m_instance__(), PassthroughParser.m_instance__());
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getValue__() {
  let raw = /**@type {?string} */ ($Casts.$to(super.m_getValue__(), j_l_String));
  return $Equality.$same(raw, null) ? "" : raw;
 }
 /**
  * @param {TextAlignConstant} align
  * @public
  * @deprecated
  */
 m_setTextAlignment__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant(align) {
  this.m_setAlignment__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(align.f_value__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant_);
 }
 /**
  * @return {TextAlignConstant}
  * @public
  */
 static get f_ALIGN_CENTER__org_gwtproject_user_client_ui_TextBoxBase() {
  return (TextBoxBase.$clinit(), TextBoxBase.$f_ALIGN_CENTER__org_gwtproject_user_client_ui_TextBoxBase);
 }
 /**
  * @return {TextAlignConstant}
  * @public
  */
 static get f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_TextBoxBase() {
  return (TextBoxBase.$clinit(), TextBoxBase.$f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_TextBoxBase);
 }
 /**
  * @return {TextAlignConstant}
  * @public
  */
 static get f_ALIGN_LEFT__org_gwtproject_user_client_ui_TextBoxBase() {
  return (TextBoxBase.$clinit(), TextBoxBase.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_TextBoxBase);
 }
 /**
  * @return {TextAlignConstant}
  * @public
  */
 static get f_ALIGN_RIGHT__org_gwtproject_user_client_ui_TextBoxBase() {
  return (TextBoxBase.$clinit(), TextBoxBase.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_TextBoxBase);
 }
 /**
  * @public
  */
 static $clinit() {
  TextBoxBase.$clinit = () =>{};
  TextBoxBase.$loadModules();
  ValueBoxBase.$clinit();
  TextBoxBase.$f_ALIGN_CENTER__org_gwtproject_user_client_ui_TextBoxBase = TextAlignConstant.$create__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(TextAlignment.f_CENTER__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextBoxBase.$f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_TextBoxBase = TextAlignConstant.$create__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(TextAlignment.f_JUSTIFY__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextBoxBase.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_TextBoxBase = TextAlignConstant.$create__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(TextAlignment.f_LEFT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
  TextBoxBase.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_TextBoxBase = TextAlignConstant.$create__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(TextAlignment.f_RIGHT__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment);
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextBoxBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PassthroughParser = goog.module.get('org.gwtproject.text.shared.testing.PassthroughParser$impl');
  PassthroughRenderer = goog.module.get('org.gwtproject.text.shared.testing.PassthroughRenderer$impl');
  TextAlignConstant = goog.module.get('org.gwtproject.user.client.ui.TextBoxBase.TextAlignConstant$impl');
  TextAlignment = goog.module.get('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TextBoxBase, 'org.gwtproject.user.client.ui.TextBoxBase');

/** @private {TextAlignConstant} */
TextBoxBase.$f_ALIGN_CENTER__org_gwtproject_user_client_ui_TextBoxBase;
/** @private {TextAlignConstant} */
TextBoxBase.$f_ALIGN_JUSTIFY__org_gwtproject_user_client_ui_TextBoxBase;
/** @private {TextAlignConstant} */
TextBoxBase.$f_ALIGN_LEFT__org_gwtproject_user_client_ui_TextBoxBase;
/** @private {TextAlignConstant} */
TextBoxBase.$f_ALIGN_RIGHT__org_gwtproject_user_client_ui_TextBoxBase;

exports = TextBoxBase; 
//# sourceMappingURL=TextBoxBase.js.map