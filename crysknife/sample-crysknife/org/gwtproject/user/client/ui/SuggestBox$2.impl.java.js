goog.module('org.gwtproject.user.client.ui.SuggestBox.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SuggestionCallback = goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');

let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @implements {SuggestionCallback}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SuggestBox} */
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_2;
 }
 /**
  * @param {SuggestBox} $outer_this
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SuggestBox($outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_2__org_gwtproject_user_client_ui_SuggestBox($outer_this);
  return $instance;
 }
 /**
  * @param {SuggestBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox_2__org_gwtproject_user_client_ui_SuggestBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {Suggestion} suggestion
  * @public
  */
 m_onSuggestionSelected__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(suggestion) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_2.f_box__org_gwtproject_user_client_ui_SuggestBox_.m_setFocus__boolean(true);
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_2.m_setNewSelection__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(suggestion);
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.SuggestBox$2');

SuggestionCallback.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=SuggestBox$2.js.map