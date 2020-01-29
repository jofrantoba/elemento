goog.module('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let DefaultSuggestionDisplay = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay$impl');
let SuggestionCallback = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DefaultSuggestionDisplay} */
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_1;
  /** @public {SuggestionCallback} */
  this.$c_callback;
  /** @public {Suggestion} */
  this.$c_curSuggestion;
 }
 /**
  * @param {DefaultSuggestionDisplay} $outer_this
  * @param {SuggestionCallback} $c_callback
  * @param {Suggestion} $c_curSuggestion
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback__org_gwtproject_user_client_ui_SuggestOracle_Suggestion($outer_this, $c_callback, $c_curSuggestion) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_1__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback__org_gwtproject_user_client_ui_SuggestOracle_Suggestion($outer_this, $c_callback, $c_curSuggestion);
  return $instance;
 }
 /**
  * @param {DefaultSuggestionDisplay} $outer_this
  * @param {SuggestionCallback} $c_callback
  * @param {Suggestion} $c_curSuggestion
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_1__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay__org_gwtproject_user_client_ui_SuggestBox_SuggestionCallback__org_gwtproject_user_client_ui_SuggestOracle_Suggestion($outer_this, $c_callback, $c_curSuggestion) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_DefaultSuggestionDisplay_1 = $outer_this;
  this.$c_callback = $c_callback;
  this.$c_curSuggestion = $c_curSuggestion;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.$c_callback.m_onSuggestionSelected__org_gwtproject_user_client_ui_SuggestOracle_Suggestion(this.$c_curSuggestion);
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.SuggestBox$DefaultSuggestionDisplay$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=SuggestBox$DefaultSuggestionDisplay$1.js.map