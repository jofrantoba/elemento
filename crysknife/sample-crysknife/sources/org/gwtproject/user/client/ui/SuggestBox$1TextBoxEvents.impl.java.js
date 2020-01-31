goog.module('org.gwtproject.user.client.ui.SuggestBox.$1TextBoxEvents$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyDownHandler = goog.require('org.gwtproject.event.dom.client.KeyDownHandler$impl');
const KeyUpHandler = goog.require('org.gwtproject.event.dom.client.KeyUpHandler$impl');
const ValueChangeHandler = goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');
let Suggestion = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestOracle.Suggestion$impl');

/**
 * @implements {KeyDownHandler}
 * @implements {KeyUpHandler}
 * @implements {ValueChangeHandler<?string>}
  */
class $1TextBoxEvents extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SuggestBox}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents;
 }
 /** @return {!$1TextBoxEvents} */
 static $create__org_gwtproject_user_client_ui_SuggestBox(/** SuggestBox */ $outer_this) {
  $1TextBoxEvents.$clinit();
  let $instance = new $1TextBoxEvents();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents__org_gwtproject_user_client_ui_SuggestBox($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents__org_gwtproject_user_client_ui_SuggestBox(/** SuggestBox */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(/** KeyDownEvent */ event) {
  let /** Suggestion */ suggestion;
  switch (event.m_getNativeKeyCode__()) {
   case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_moveSelectionDown__();
    if (this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.m_isSuggestionListShowing__()) {
     event.m_preventDefault__();
    }
    break;
   case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
    this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_moveSelectionUp__();
    if (this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.m_isSuggestionListShowing__()) {
     event.m_preventDefault__();
    }
    break;
   case KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_TAB__org_gwtproject_event_dom_client_KeyCodes: 
    suggestion = this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_getCurrentSelection__();
    if ($Equality.$same(suggestion, null)) {
     this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.f_display__org_gwtproject_user_client_ui_SuggestBox_.m_hideSuggestions__();
    } else {
     this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.m_setNewSelection__org_gwtproject_user_client_ui_SuggestOracle_Suggestion_$p_org_gwtproject_user_client_ui_SuggestBox(suggestion);
    }
    break;
  }
 }
 /** @override */
 m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(/** KeyUpEvent */ event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.m_refreshSuggestions___$p_org_gwtproject_user_client_ui_SuggestBox();
 }
 /** @override */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(/** ValueChangeEvent<?string> */ event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents.m_delegateEvent__org_gwtproject_user_client_ui_Widget__org_gwtproject_event_shared_Event(this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_1TextBoxEvents, event);
 }
 
 static $clinit() {
  $1TextBoxEvents.$clinit = () =>{};
  $1TextBoxEvents.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1TextBoxEvents;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
 }
 
}
$Util.$setClassMetadata($1TextBoxEvents, 'org.gwtproject.user.client.ui.SuggestBox$1TextBoxEvents');

KeyDownHandler.$markImplementor($1TextBoxEvents);
KeyUpHandler.$markImplementor($1TextBoxEvents);
ValueChangeHandler.$markImplementor($1TextBoxEvents);

exports = $1TextBoxEvents; 
//# sourceMappingURL=SuggestBox$1TextBoxEvents.js.map