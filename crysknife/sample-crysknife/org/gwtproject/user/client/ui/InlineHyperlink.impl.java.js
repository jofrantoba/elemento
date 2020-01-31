goog.module('org.gwtproject.user.client.ui.InlineHyperlink$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Hyperlink = goog.require('org.gwtproject.user.client.ui.Hyperlink$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

class InlineHyperlink extends Hyperlink {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'InlineHyperlink()'.
 /** @return {!InlineHyperlink} */
 static $create__() {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink()'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__() {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_dom_client_Element(null);
  this.m_setStyleName__java_lang_String("gwt-InlineHyperlink");
 }
 //Factory method corresponding to constructor 'InlineHyperlink(SafeHtml, String)'.
 /** @return {!InlineHyperlink} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeHtml */ html, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(html, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(SafeHtml, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeHtml */ html, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(html.m_asString__(), true, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(SafeHtml, Direction, String)'.
 /** @return {!InlineHyperlink} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** SafeHtml */ html, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html, dir, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(SafeHtml, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** SafeHtml */ html, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html.m_asString__(), true, dir, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(SafeHtml, DirectionEstimator, String)'.
 /** @return {!InlineHyperlink} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html, directionEstimator, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(SafeHtml, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** SafeHtml */ html, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html.m_asString__(), true, directionEstimator, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(String, String)'.
 /** @return {!InlineHyperlink} */
 static $create__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__java_lang_String(text, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__java_lang_String(/** ?string */ text, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(text, false, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(String, Direction, String)'.
 /** @return {!InlineHyperlink} */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(String, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, false, dir, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(String, DirectionEstimator, String)'.
 /** @return {!InlineHyperlink} */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(String, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, false, directionEstimator, targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(String, boolean, String)'.
 /** @return {!InlineHyperlink} */
 static $create__java_lang_String__boolean__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** ?string */ targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(text, asHTML, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(String, boolean, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(String, boolean, Direction, String)'.
 /** @return {!InlineHyperlink} */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, asHTML, dir, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(String, boolean, Direction, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** Direction */ dir, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(text, dir, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 //Factory method corresponding to constructor 'InlineHyperlink(String, boolean, DirectionEstimator, String)'.
 /** @return {!InlineHyperlink} */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, asHTML, directionEstimator, targetHistoryToken);
  return $instance;
 }
 //Initialization from constructor 'InlineHyperlink(String, boolean, DirectionEstimator, String)'.
 
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(/** ?string */ text, /** boolean */ asHTML, /** DirectionEstimator */ directionEstimator, /** ?string */ targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 
 static $clinit() {
  InlineHyperlink.$clinit = () =>{};
  InlineHyperlink.$loadModules();
  Hyperlink.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InlineHyperlink;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(InlineHyperlink, 'org.gwtproject.user.client.ui.InlineHyperlink');

exports = InlineHyperlink; 
//# sourceMappingURL=InlineHyperlink.js.map