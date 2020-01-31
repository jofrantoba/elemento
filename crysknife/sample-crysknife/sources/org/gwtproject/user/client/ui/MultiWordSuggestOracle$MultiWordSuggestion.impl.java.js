goog.module('org.gwtproject.user.client.ui.MultiWordSuggestOracle.MultiWordSuggestion$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Suggestion = goog.require('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @implements {Suggestion}
 * @implements {Serializable}
  */
class MultiWordSuggestion extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_displayString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
  /**@type {?string}*/
  this.f_replacementString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
 }
 //Factory method corresponding to constructor 'MultiWordSuggestion()'.
 /** @return {!MultiWordSuggestion} */
 static $create__() {
  MultiWordSuggestion.$clinit();
  let $instance = new MultiWordSuggestion();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__();
  return $instance;
 }
 //Initialization from constructor 'MultiWordSuggestion()'.
 
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__() {
  this.$ctor__java_lang_Object__();
 }
 //Factory method corresponding to constructor 'MultiWordSuggestion(String, String)'.
 /** @return {!MultiWordSuggestion} */
 static $create__java_lang_String__java_lang_String(/** ?string */ replacementString, /** ?string */ displayString) {
  MultiWordSuggestion.$clinit();
  let $instance = new MultiWordSuggestion();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__java_lang_String__java_lang_String(replacementString, displayString);
  return $instance;
 }
 //Initialization from constructor 'MultiWordSuggestion(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__java_lang_String__java_lang_String(/** ?string */ replacementString, /** ?string */ displayString) {
  this.$ctor__java_lang_Object__();
  this.f_replacementString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_ = replacementString;
  this.f_displayString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_ = displayString;
 }
 /** @override @return {?string} */
 m_getDisplayString__() {
  return this.f_displayString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
 }
 /** @override @return {?string} */
 m_getReplacementString__() {
  return this.f_replacementString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
 }
 
 static $clinit() {
  MultiWordSuggestion.$clinit = () =>{};
  MultiWordSuggestion.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiWordSuggestion;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MultiWordSuggestion, 'org.gwtproject.user.client.ui.MultiWordSuggestOracle$MultiWordSuggestion');

Suggestion.$markImplementor(MultiWordSuggestion);
Serializable.$markImplementor(MultiWordSuggestion);

exports = MultiWordSuggestion; 
//# sourceMappingURL=MultiWordSuggestOracle$MultiWordSuggestion.js.map