goog.module('org.gwtproject.user.client.ui.InlineHyperlink$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Hyperlink = goog.require('org.gwtproject.user.client.ui.Hyperlink$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

class InlineHyperlink extends Hyperlink {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink()'.
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__() {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__() {
  this.$ctor__org_gwtproject_user_client_ui_Hyperlink__org_gwtproject_dom_client_Element(null);
  this.m_setStyleName__java_lang_String("gwt-InlineHyperlink");
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(SafeHtml, String)'.
  * @param {SafeHtml} html
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(html, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(html, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(SafeHtml, String)'.
  * @param {SafeHtml} html
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(html, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(html.m_asString__(), true, targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(SafeHtml, Direction, String)'.
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html, dir, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html, dir, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(SafeHtml, Direction, String)'.
  * @param {SafeHtml} html
  * @param {Direction} dir
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html, dir, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(html.m_asString__(), true, dir, targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(SafeHtml, DirectionEstimator, String)'.
  * @param {SafeHtml} html
  * @param {DirectionEstimator} directionEstimator
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html, directionEstimator, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html, directionEstimator, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(SafeHtml, DirectionEstimator, String)'.
  * @param {SafeHtml} html
  * @param {DirectionEstimator} directionEstimator
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html, directionEstimator, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(html.m_asString__(), true, directionEstimator, targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(String, String)'.
  * @param {?string} text
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__java_lang_String__java_lang_String(text, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__java_lang_String(text, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(String, String)'.
  * @param {?string} text
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__java_lang_String(text, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(text, false, targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(String, Direction, String)'.
  * @param {?string} text
  * @param {Direction} dir
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(String, Direction, String)'.
  * @param {?string} text
  * @param {Direction} dir
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, dir, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, false, dir, targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(String, DirectionEstimator, String)'.
  * @param {?string} text
  * @param {DirectionEstimator} directionEstimator
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(String, DirectionEstimator, String)'.
  * @param {?string} text
  * @param {DirectionEstimator} directionEstimator
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, directionEstimator, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, false, directionEstimator, targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(String, boolean, String)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__java_lang_String__boolean__java_lang_String(text, asHTML, targetHistoryToken) {
  InlineHyperlink.$clinit();
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(text, asHTML, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(String, boolean, String)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__java_lang_String(text, asHTML, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(String, boolean, Direction, String)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {Direction} dir
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, asHTML, dir, targetHistoryToken) {
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, asHTML, dir, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(String, boolean, Direction, String)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {Direction} dir
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String(text, asHTML, dir, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(text, dir, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 /**
  * Factory method corresponding to constructor 'InlineHyperlink(String, boolean, DirectionEstimator, String)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {DirectionEstimator} directionEstimator
  * @param {?string} targetHistoryToken
  * @return {!InlineHyperlink}
  * @public
  */
 static $create__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, asHTML, directionEstimator, targetHistoryToken) {
  let $instance = new InlineHyperlink();
  $instance.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, asHTML, directionEstimator, targetHistoryToken);
  return $instance;
 }
 /**
  * Initialization from constructor 'InlineHyperlink(String, boolean, DirectionEstimator, String)'.
  * @param {?string} text
  * @param {boolean} asHTML
  * @param {DirectionEstimator} directionEstimator
  * @param {?string} targetHistoryToken
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_InlineHyperlink__java_lang_String__boolean__org_gwtproject_i18n_shared_DirectionEstimator__java_lang_String(text, asHTML, directionEstimator, targetHistoryToken) {
  this.$ctor__org_gwtproject_user_client_ui_InlineHyperlink__();
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_Hyperlink.m_setTextOrHtml__java_lang_String__boolean(text, asHTML);
  this.m_setTargetHistoryToken__java_lang_String(targetHistoryToken);
 }
 /**
  * @public
  */
 static $clinit() {
  InlineHyperlink.$clinit = () =>{};
  InlineHyperlink.$loadModules();
  Hyperlink.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof InlineHyperlink;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(InlineHyperlink, 'org.gwtproject.user.client.ui.InlineHyperlink');

exports = InlineHyperlink; 
//# sourceMappingURL=InlineHyperlink.js.map