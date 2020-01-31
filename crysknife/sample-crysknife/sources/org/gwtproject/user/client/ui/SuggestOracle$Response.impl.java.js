goog.module('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');

/**
 * @implements {Serializable}
  */
class Response extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Collection<?>}*/
  this.f_suggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
  /**@type {boolean}*/
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = false;
  /**@type {number}*/
  this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = 0;
 }
 //Factory method corresponding to constructor 'Response()'.
 /** @return {!Response} */
 static $create__() {
  Response.$clinit();
  let $instance = new Response();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__();
  return $instance;
 }
 //Initialization from constructor 'Response()'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Response();
 }
 //Factory method corresponding to constructor 'Response(Collection)'.
 /** @return {!Response} */
 static $create__java_util_Collection(/** Collection<?> */ suggestions) {
  Response.$clinit();
  let $instance = new Response();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__java_util_Collection(suggestions);
  return $instance;
 }
 //Initialization from constructor 'Response(Collection)'.
 
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__java_util_Collection(/** Collection<?> */ suggestions) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Response();
  this.m_setSuggestions__java_util_Collection(suggestions);
 }
 /** @return {number} */
 m_getMoreSuggestionsCount__() {
  return this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
 }
 /** @return {Collection<?>} */
 m_getSuggestions__() {
  return this.f_suggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
 }
 /** @return {boolean} */
 m_hasMoreSuggestions__() {
  return this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
 }
 
 m_setMoreSuggestions__boolean(/** boolean */ moreSuggestions) {
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = moreSuggestions;
 }
 
 m_setMoreSuggestionsCount__int(/** number */ count) {
  this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = count;
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = (count > 0);
 }
 
 m_setSuggestions__java_util_Collection(/** Collection<?> */ suggestions) {
  this.f_suggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = suggestions;
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_SuggestOracle_Response() {
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = false;
  this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = 0;
 }
 
 static $clinit() {
  Response.$clinit = () =>{};
  Response.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Response;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Response, 'org.gwtproject.user.client.ui.SuggestOracle$Response');

Serializable.$markImplementor(Response);

exports = Response; 
//# sourceMappingURL=SuggestOracle$Response.js.map