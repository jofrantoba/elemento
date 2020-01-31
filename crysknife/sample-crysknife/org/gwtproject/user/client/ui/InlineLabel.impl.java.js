goog.module('org.gwtproject.user.client.ui.InlineLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Label = goog.require('org.gwtproject.user.client.ui.Label$impl');

let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class InlineLabel extends Label {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {InlineLabel} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  InlineLabel.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let label = InlineLabel.$create__org_gwtproject_dom_client_Element(element);
  label.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(label);
  return label;
 }
 //Factory method corresponding to constructor 'InlineLabel()'.
 /** @return {!InlineLabel} */
 static $create__() {
  InlineLabel.$clinit();
  let $instance = new InlineLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineLabel__();
  return $instance;
 }
 //Initialization from constructor 'InlineLabel()'.
 
 $ctor__org_gwtproject_user_client_ui_InlineLabel__() {
  this.$ctor__org_gwtproject_user_client_ui_Label__org_gwtproject_dom_client_Element(Document_$Overlay.m_createSpanElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_setStyleName__java_lang_String("gwt-InlineLabel");
 }
 //Factory method corresponding to constructor 'InlineLabel(String)'.
 /** @return {!InlineLabel} */
 static $create__java_lang_String(/** ?string */ text) {
  InlineLabel.$clinit();
  let $instance = new InlineLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineLabel__java_lang_String(text);
  return $instance;
 }
 //Initialization from constructor 'InlineLabel(String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineLabel__java_lang_String(/** ?string */ text) {
  this.$ctor__org_gwtproject_user_client_ui_InlineLabel__();
  this.m_setText__java_lang_String(text);
 }
 //Factory method corresponding to constructor 'InlineLabel(String, Direction)'.
 /** @return {!InlineLabel} */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {
  InlineLabel.$clinit();
  let $instance = new InlineLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineLabel__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
  return $instance;
 }
 //Initialization from constructor 'InlineLabel(String, Direction)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineLabel__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ text, /** Direction */ dir) {
  this.$ctor__org_gwtproject_user_client_ui_InlineLabel__();
  this.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
 }
 //Factory method corresponding to constructor 'InlineLabel(String, DirectionEstimator)'.
 /** @return {!InlineLabel} */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(/** ?string */ text, /** DirectionEstimator */ directionEstimator) {
  InlineLabel.$clinit();
  let $instance = new InlineLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineLabel__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(text, directionEstimator);
  return $instance;
 }
 //Initialization from constructor 'InlineLabel(String, DirectionEstimator)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineLabel__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(/** ?string */ text, /** DirectionEstimator */ directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_InlineLabel__();
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setText__java_lang_String(text);
 }
 //Factory method corresponding to constructor 'InlineLabel(Element)'.
 /** @return {!InlineLabel} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  InlineLabel.$clinit();
  let $instance = new InlineLabel();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineLabel__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'InlineLabel(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineLabel__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_Label__org_gwtproject_dom_client_Element(element);
 }
 
 static $clinit() {
  InlineLabel.$clinit = () =>{};
  InlineLabel.$loadModules();
  Label.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InlineLabel;
 }
 
 static $loadModules() {
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(InlineLabel, 'org.gwtproject.user.client.ui.InlineLabel');

exports = InlineLabel; 
//# sourceMappingURL=InlineLabel.js.map