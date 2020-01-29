goog.module('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');

/**
 * @implements {Serializable}
  */
class Response extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Collection<?>} */
  this.f_suggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
  /** @public {boolean} */
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = false;
  /** @public {number} */
  this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = 0;
 }
 /**
  * Factory method corresponding to constructor 'Response()'.
  * @return {!Response}
  * @public
  */
 static $create__() {
  Response.$clinit();
  let $instance = new Response();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Response()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Response();
 }
 /**
  * Factory method corresponding to constructor 'Response(Collection)'.
  * @param {Collection<?>} suggestions
  * @return {!Response}
  * @public
  */
 static $create__java_util_Collection(suggestions) {
  Response.$clinit();
  let $instance = new Response();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__java_util_Collection(suggestions);
  return $instance;
 }
 /**
  * Initialization from constructor 'Response(Collection)'.
  * @param {Collection<?>} suggestions
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestOracle_Response__java_util_Collection(suggestions) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_ui_SuggestOracle_Response();
  this.m_setSuggestions__java_util_Collection(suggestions);
 }
 /**
  * @return {number}
  * @public
  */
 m_getMoreSuggestionsCount__() {
  return this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
 }
 /**
  * @return {Collection<?>}
  * @public
  */
 m_getSuggestions__() {
  return this.f_suggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_hasMoreSuggestions__() {
  return this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_;
 }
 /**
  * @param {boolean} moreSuggestions
  * @public
  */
 m_setMoreSuggestions__boolean(moreSuggestions) {
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = moreSuggestions;
 }
 /**
  * @param {number} count
  * @public
  */
 m_setMoreSuggestionsCount__int(count) {
  this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = count;
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = (count > 0);
 }
 /**
  * @param {Collection<?>} suggestions
  * @public
  */
 m_setSuggestions__java_util_Collection(suggestions) {
  this.f_suggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = suggestions;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_SuggestOracle_Response() {
  this.f_moreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = false;
  this.f_numMoreSuggestions__org_gwtproject_user_client_ui_SuggestOracle_Response_ = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  Response.$clinit = () =>{};
  Response.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Response;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Response, 'org.gwtproject.user.client.ui.SuggestOracle$Response');

Serializable.$markImplementor(Response);

exports = Response; 
//# sourceMappingURL=SuggestOracle$Response.js.map