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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionDisplay__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @return {Suggestion}
  * @public
  */
 m_getCurrentSelection__() {}
 /**
  * @abstract
  * @public
  */
 m_hideSuggestions__() {}
 /**
  * @abstract
  * @public
  */
 m_moveSelectionDown__() {}
 /**
  * @abstract
  * @public
  */
 m_moveSelectionUp__() {}
 /**
  * @param {?string} suggestBoxBaseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(suggestBoxBaseID) {}
 /**
  * @param {boolean} hasMoreSuggestions
  * @param {number} numMoreSuggestions
  * @public
  */
 m_setMoreSuggestions__boolean__int(hasMoreSuggestions, numMoreSuggestions) {}
 /**
  * @abstract
  * @param {SuggestBox} suggestBox
  * @param {Collection<?>} suggestions
  * @param {boolean} isDisplayStringHTML
  * @param {boolean} isAutoSelectEnabled
  * @param {SuggestionCallback} callback
  * @public
  */
 m_showSuggestions__org_gwtproject_user_client_ui_SuggestBox__java_util_Collection__boolean__boolean__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback(suggestBox, suggestions, isDisplayStringHTML, isAutoSelectEnabled, callback) {}
 /**
  * @return {boolean}
  * @public
  * @deprecated
  */
 m_isAnimationEnabledImpl___$pp_org_gwtproject_user_client_ui() {
  return false;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSuggestionListShowing__() {
  return false;
 }
 /**
  * @param {boolean} enable
  * @public
  * @deprecated
  */
 m_setAnimationEnabledImpl__boolean_$pp_org_gwtproject_user_client_ui(enable) {}
 /**
  * @param {?string} style
  * @public
  * @deprecated
  */
 m_setPopupStyleNameImpl__java_lang_String_$pp_org_gwtproject_user_client_ui(style) {}
 /**
  * @public
  */
 static $clinit() {
  SuggestionDisplay.$clinit = () =>{};
  SuggestionDisplay.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SuggestionDisplay;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SuggestionDisplay, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionDisplay');

exports = SuggestionDisplay; 
//# sourceMappingURL=SuggestBox$SuggestionDisplay.js.map