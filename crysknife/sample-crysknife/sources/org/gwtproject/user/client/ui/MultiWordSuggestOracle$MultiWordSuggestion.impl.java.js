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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_displayString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
  /** @public {?string} */
  this.f_replacementString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
 }
 /**
  * Factory method corresponding to constructor 'MultiWordSuggestion()'.
  * @return {!MultiWordSuggestion}
  * @public
  */
 static $create__() {
  MultiWordSuggestion.$clinit();
  let $instance = new MultiWordSuggestion();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__();
  return $instance;
 }
 /**
  * Initialization from constructor 'MultiWordSuggestion()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * Factory method corresponding to constructor 'MultiWordSuggestion(String, String)'.
  * @param {?string} replacementString
  * @param {?string} displayString
  * @return {!MultiWordSuggestion}
  * @public
  */
 static $create__java_lang_String__java_lang_String(replacementString, displayString) {
  MultiWordSuggestion.$clinit();
  let $instance = new MultiWordSuggestion();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__java_lang_String__java_lang_String(replacementString, displayString);
  return $instance;
 }
 /**
  * Initialization from constructor 'MultiWordSuggestion(String, String)'.
  * @param {?string} replacementString
  * @param {?string} displayString
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion__java_lang_String__java_lang_String(replacementString, displayString) {
  this.$ctor__java_lang_Object__();
  this.f_replacementString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_ = replacementString;
  this.f_displayString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_ = displayString;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getDisplayString__() {
  return this.f_displayString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getReplacementString__() {
  return this.f_replacementString__org_gwtproject_user_client_ui_MultiWordSuggestOracle_MultiWordSuggestion_;
 }
 /**
  * @public
  */
 static $clinit() {
  MultiWordSuggestion.$clinit = () =>{};
  MultiWordSuggestion.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MultiWordSuggestion;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MultiWordSuggestion, 'org.gwtproject.user.client.ui.MultiWordSuggestOracle$MultiWordSuggestion');

Suggestion.$markImplementor(MultiWordSuggestion);
Serializable.$markImplementor(MultiWordSuggestion);

exports = MultiWordSuggestion; 
//# sourceMappingURL=MultiWordSuggestOracle$MultiWordSuggestion.js.map