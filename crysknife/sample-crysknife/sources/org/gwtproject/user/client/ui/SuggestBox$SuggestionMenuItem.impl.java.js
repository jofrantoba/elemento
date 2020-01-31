goog.module('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenuItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuItem = goog.require('org.gwtproject.user.client.ui.MenuItem$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

class SuggestionMenuItem extends MenuItem {
 /** @protected */
 constructor() {
  super();
  /**@type {Suggestion}*/
  this.f_suggestion__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem_;
 }
 /** @return {!SuggestionMenuItem} */
 static $create__org_gwtproject_user_client_ui_SuggestOracle_Suggestion__boolean(/** Suggestion */ suggestion, /** boolean */ asHTML) {
  SuggestionMenuItem.$clinit();
  let $instance = new SuggestionMenuItem();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem__org_gwtproject_user_client_ui_SuggestOracle_Suggestion__boolean(suggestion, asHTML);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem__org_gwtproject_user_client_ui_SuggestOracle_Suggestion__boolean(/** Suggestion */ suggestion, /** boolean */ asHTML) {
  this.$ctor__org_gwtproject_user_client_ui_MenuItem__java_lang_String__boolean(suggestion.m_getDisplayString__(), asHTML);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "whiteSpace", "nowrap");
  this.m_setStyleName__java_lang_String(SuggestionMenuItem.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem_);
  this.m_setSuggestion__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(suggestion);
 }
 /** @return {Suggestion} */
 m_getSuggestion__() {
  return this.f_suggestion__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem_;
 }
 
 m_setSuggestion__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(/** Suggestion */ suggestion) {
  this.f_suggestion__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem_ = suggestion;
 }
 
 static $clinit() {
  SuggestionMenuItem.$clinit = () =>{};
  SuggestionMenuItem.$loadModules();
  MenuItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuggestionMenuItem;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(SuggestionMenuItem, 'org.gwtproject.user.client.ui.SuggestBox$SuggestionMenuItem');

/**@const {?string}*/
SuggestionMenuItem.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_SuggestBox_SuggestionMenuItem_ = "item";

exports = SuggestionMenuItem; 
//# sourceMappingURL=SuggestBox$SuggestionMenuItem.js.map