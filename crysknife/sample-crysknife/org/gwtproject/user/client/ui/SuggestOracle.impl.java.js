goog.module('org.gwtproject.user.client.ui.SuggestOracle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Callback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');
let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @abstract
  */
class SuggestOracle extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Response}*/
  this.f_emptyResponse__org_gwtproject_user_client_ui_SuggestOracle_;
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle();
 }
 /** @return {boolean} */
 m_isDisplayStringHTML__() {
  return false;
 }
 
 m_requestDefaultSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(/** Request */ request, /** Callback */ callback) {
  $Asserts.$assert($Equality.$same(request.f_query__org_gwtproject_user_client_ui_SuggestOracle_Request_, null));
  callback.m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(request, this.f_emptyResponse__org_gwtproject_user_client_ui_SuggestOracle_);
 }
 /** @abstract */
 m_requestSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Callback(/** Request */ request, /** Callback */ callback) {}
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_SuggestOracle() {
  this.f_emptyResponse__org_gwtproject_user_client_ui_SuggestOracle_ = Response.$create__java_util_Collection(/**@type {!ArrayList<Suggestion>}*/ (ArrayList.$create__()));
 }
 
 static $clinit() {
  SuggestOracle.$clinit = () =>{};
  SuggestOracle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuggestOracle;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Response = goog.module.get('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(SuggestOracle, 'org.gwtproject.user.client.ui.SuggestOracle');

exports = SuggestOracle; 
//# sourceMappingURL=SuggestOracle.js.map