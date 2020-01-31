goog.module('org.gwtproject.user.client.ui.ValueLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const TakesValue = goog.require('org.gwtproject.user.client.TakesValue$impl');
const LabelBase = goog.require('org.gwtproject.user.client.ui.LabelBase$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let Parser = goog.forwardDeclare('org.gwtproject.text.shared.Parser$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let ToStringRenderer = goog.forwardDeclare('org.gwtproject.text.shared.ToStringRenderer$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @template T
 * @extends {LabelBase<T>}
 * @implements {TakesValue<T>}
 * @implements {IsEditor<LeafValueEditor<T>>}
  */
class ValueLabel extends LabelBase {
 /** @protected */
 constructor() {
  super();
  /**@type {Renderer<?>}*/
  this.f_renderer__org_gwtproject_user_client_ui_ValueLabel_;
  /**@type {T}*/
  this.f_value__org_gwtproject_user_client_ui_ValueLabel_;
  /**@type {LeafValueEditor<T>}*/
  this.f_editor__org_gwtproject_user_client_ui_ValueLabel_;
 }
 /** @template T_1 @return {ValueLabel<T_1>} */
 static m_wrap__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer(/** Object */ element, /** Renderer<?> */ renderer) {
  ValueLabel.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let label = /**@type {!ValueLabel<T_1>}*/ (ValueLabel.$create__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer(element, renderer));
  label.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(label);
  return label;
 }
 /** @template T_1 @return {ValueLabel<T_1>} */
 static m_wrap__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser(/** Object */ element, /** Renderer<?> */ renderer, /** Parser<?> */ parser) {
  ValueLabel.$clinit();
  let label = /**@type {ValueLabel<T_1>}*/ (ValueLabel.m_wrap__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer(element, renderer));
  label.m_setValue__java_lang_Object(parser.m_parse__java_lang_CharSequence(Element_$Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(element)));
  label.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(label);
  return label;
 }
 //Factory method corresponding to constructor 'ValueLabel()'.
 /** @template T @return {!ValueLabel<T>} */
 static $create__() {
  ValueLabel.$clinit();
  let $instance = new ValueLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueLabel__();
  return $instance;
 }
 //Initialization from constructor 'ValueLabel()'.
 
 $ctor__org_gwtproject_user_client_ui_ValueLabel__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(ToStringRenderer.m_instance__());
 }
 //Factory method corresponding to constructor 'ValueLabel(Renderer)'.
 /** @template T @return {!ValueLabel<T>} */
 static $create__org_gwtproject_text_shared_Renderer(/** Renderer<?> */ renderer) {
  ValueLabel.$clinit();
  let $instance = new ValueLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(renderer);
  return $instance;
 }
 //Initialization from constructor 'ValueLabel(Renderer)'.
 
 $ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_text_shared_Renderer(/** Renderer<?> */ renderer) {
  this.$ctor__org_gwtproject_user_client_ui_LabelBase__boolean(true);
  this.f_renderer__org_gwtproject_user_client_ui_ValueLabel_ = renderer;
 }
 //Factory method corresponding to constructor 'ValueLabel(Element, Renderer)'.
 /** @template T @return {!ValueLabel<T>} */
 static $create__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer(/** Object */ element, /** Renderer<?> */ renderer) {
  ValueLabel.$clinit();
  let $instance = new ValueLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer(element, renderer);
  return $instance;
 }
 //Initialization from constructor 'ValueLabel(Element, Renderer)'.
 
 $ctor__org_gwtproject_user_client_ui_ValueLabel__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer(/** Object */ element, /** Renderer<?> */ renderer) {
  this.$ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element(element);
  this.f_renderer__org_gwtproject_user_client_ui_ValueLabel_ = renderer;
 }
 /** @override @return {LeafValueEditor<T>} */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_ValueLabel_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_ValueLabel_ = /**@type {TakesValueEditor<T>}*/ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_ValueLabel_;
 }
 /** @override @return {T} */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_client_ui_ValueLabel_;
 }
 /** @override */
 m_setValue__java_lang_Object(/** T */ value) {
  this.f_value__org_gwtproject_user_client_ui_ValueLabel_ = value;
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setText__java_lang_String(this.f_renderer__org_gwtproject_user_client_ui_ValueLabel_.m_render__java_lang_Object(value));
  this.m_updateHorizontalAlignment__();
 }
 
 static $clinit() {
  ValueLabel.$clinit = () =>{};
  ValueLabel.$loadModules();
  LabelBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueLabel;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ToStringRenderer = goog.module.get('org.gwtproject.text.shared.ToStringRenderer$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(ValueLabel, 'org.gwtproject.user.client.ui.ValueLabel');

TakesValue.$markImplementor(ValueLabel);
IsEditor.$markImplementor(ValueLabel);

exports = ValueLabel; 
//# sourceMappingURL=ValueLabel.js.map