goog.module('org.gwtproject.user.client.ui.SuggestionEvent$impl');

const EventObject = goog.require('java.util.EventObject$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

class SuggestionEvent extends EventObject {
 /** @protected */
 constructor() {
  super();
  /**@type {Suggestion}*/
  this.f_selectedSuggestion__org_gwtproject_user_client_ui_SuggestionEvent_;
 }
 /** @return {!SuggestionEvent} */
 static $create__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(/** SuggestBox */ sender, /** Suggestion */ selectedSuggestion) {
  SuggestionEvent.$clinit();
  let $instance = new SuggestionEvent();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestionEvent__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(sender, selectedSuggestion);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestionEvent__org_gwtproject_user_client_ui_SuggestBox__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(/** SuggestBox */ sender, /** Suggestion */ selectedSuggestion) {
  this.$ctor__java_util_EventObject__java_lang_Object(sender);
  this.f_selectedSuggestion__org_gwtproject_user_client_ui_SuggestionEvent_ = selectedSuggestion;
 }
 /** @return {Suggestion} */
 m_getSelectedSuggestion__() {
  return this.f_selectedSuggestion__org_gwtproject_user_client_ui_SuggestionEvent_;
 }
 /** @override @return {?string} */
 toString() {
  return "[source=" + j_l_String.m_valueOf__java_lang_Object(this.m_getSource__()) + ", selectedSuggestion=" + j_l_String.m_valueOf__java_lang_Object(this.m_getSelectedSuggestion__()) + "]";
 }
 
 static $clinit() {
  SuggestionEvent.$clinit = () =>{};
  SuggestionEvent.$loadModules();
  EventObject.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SuggestionEvent;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(SuggestionEvent, 'org.gwtproject.user.client.ui.SuggestionEvent');

exports = SuggestionEvent; 
//# sourceMappingURL=SuggestionEvent.js.map