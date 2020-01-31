goog.module('org.gwtproject.user.client.ui.SuggestBox.SuggestionDisplay$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');
let SuggestionCallback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @abstract
  */
class SuggestionDisplay extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {Suggestion} */
 m_getCurrentSelection__() {}
 /** @abstract */
 m_hideSuggestions__() {}
 /** @abstract */
 m_moveSelectionDown__() {}
 /** @abstract */
 m_moveSelectionUp__() {}
 
 m_onEnsureDebugId__java_lang_String(/** ?string */ suggestBoxBaseID) {}
 
 m_setMoreSuggestions__boolean__int(/** boolean */ hasMoreSuggestions, /** number */ numMoreSuggestions) {}
 /** @abstract */
 m_showSuggestions__org_gwtproject_user_client_ui_SuggestBox__java_util_Collection__boolean__boolean__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback(/** SuggestBox */ suggestBox, /** Collection<?> */ suggestions, /** boolean */ isDisplayStringHTML, /** boolean */ isAutoSelectEnabled, /** SuggestionCallback */ callback) {}
 /** @return {boolean} @deprecated */
 m_isAnimationEnabledImpl___$pp_org_gwtproject_user_client_ui() {
  return false;
 }
 /** @return {boolean} */
 m_isSuggestionListShowing__() {
  return false;
 }
 /** @deprecated */
 m_setAnimationEnabledImpl__boolean_$pp_org_gwtproject_user_client_ui(/** boolean */ enable) {}
 /** @deprecated */
 m_setPopupStyleNameImpl__java_lang_String_$pp_org_gwtproject_user_client_ui(/** ?string */ style) {}
 
 static $clinit() {
  SuggestionDisplay.$clinit = () =>{};
  SuggestionDisplay.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuggestionDisplay;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SuggestionDisplay, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionDisplay');

exports = SuggestionDisplay; 
//# sourceMappingURL=SuggestBox$SuggestionDisplay.js.map