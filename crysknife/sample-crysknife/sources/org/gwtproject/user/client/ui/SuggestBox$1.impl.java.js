goog.module('org.gwtproject.user.client.ui.SuggestBox.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Callback = goog.require('org.gwtproject.user.client.ui.SuggestOracle.Callback$impl');

let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');
let Request = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Request$impl');
let Response = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Response$impl');

/**
 * @implements {Callback}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SuggestBox}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_SuggestBox(/** SuggestBox */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_1__org_gwtproject_user_client_ui_SuggestBox($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox_1__org_gwtproject_user_client_ui_SuggestBox(/** SuggestBox */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSuggestionsReady__org_gwtproject_user_client_ui_SuggestOracle_Request__org_gwtproject_user_client_ui_SuggestOracle_Response(/** Request */ request, /** Response */ response) {
  if (!this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1.m_isEnabled__()) {
   return;
  }
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_setMoreSuggestions__boolean__int(response.m_hasMoreSuggestions__(), response.m_getMoreSuggestionsCount__());
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_showSuggestions__org_gwtproject_user_client_ui_SuggestBox__java_util_Collection__boolean__boolean__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback(this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1, response.m_getSuggestions__(), this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1.f_oracle__org_gwtproject_user_client_ui_SuggestBox_.m_isDisplayStringHTML__(), this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1.m_isAutoSelectEnabled__(), this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1.f_suggestionCallback__org_gwtproject_user_client_ui_SuggestBox_);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.SuggestBox$1');

Callback.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=SuggestBox$1.js.map