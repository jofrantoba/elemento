goog.module('org.gwtproject.user.history.client.History$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let $LambdaAdaptor$1 = goog.forwardDeclare('org.gwtproject.user.history.client.History.$LambdaAdaptor$1$impl');
let HistoryEventSource = goog.forwardDeclare('org.gwtproject.user.history.client.History.HistoryEventSource$impl');
let HistoryTokenEncoder = goog.forwardDeclare('org.gwtproject.user.history.client.History.HistoryTokenEncoder$impl');
let NoopHistoryTokenEncoder = goog.forwardDeclare('org.gwtproject.user.history.client.History.NoopHistoryTokenEncoder$impl');
let Window_Location = goog.forwardDeclare('org.gwtproject.user.window.client.Window.Location$impl');

class org_gwtproject_user_history_client_History extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!org_gwtproject_user_history_client_History}
  * @public
  */
 static $create__() {
  org_gwtproject_user_history_client_History.$clinit();
  let $instance = new org_gwtproject_user_history_client_History();
  $instance.$ctor__org_gwtproject_user_history_client_History__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_history_client_History__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {ValueChangeHandler<?string>} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  org_gwtproject_user_history_client_History.$clinit();
  return org_gwtproject_user_history_client_History.f_historyEventSource__org_gwtproject_user_history_client_History_.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler);
 }
 /**
  * @public
  */
 static m_back__() {
  org_gwtproject_user_history_client_History.$clinit();
  window.window.history.back();
 }
 /**
  * @param {?string} historyToken
  * @return {?string}
  * @public
  */
 static m_encodeHistoryToken__java_lang_String(historyToken) {
  org_gwtproject_user_history_client_History.$clinit();
  return org_gwtproject_user_history_client_History.f_tokenEncoder__org_gwtproject_user_history_client_History_.m_encode__java_lang_String_$pp_org_gwtproject_user_history_client(historyToken);
 }
 /**
  * @public
  */
 static m_fireCurrentHistoryState__() {
  org_gwtproject_user_history_client_History.$clinit();
  let currentToken = org_gwtproject_user_history_client_History.m_getToken__();
  org_gwtproject_user_history_client_History.f_historyEventSource__org_gwtproject_user_history_client_History_.m_fireValueChangedEvent__java_lang_String(currentToken);
 }
 /**
  * @public
  */
 static m_forward__() {
  org_gwtproject_user_history_client_History.$clinit();
  window.window.history.forward();
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getToken__() {
  org_gwtproject_user_history_client_History.$clinit();
  return org_gwtproject_user_history_client_History.f_token__org_gwtproject_user_history_client_History_;
 }
 /**
  * @param {?string} historyToken
  * @public
  */
 static m_newItem__java_lang_String(historyToken) {
  org_gwtproject_user_history_client_History.$clinit();
  org_gwtproject_user_history_client_History.m_newItem__java_lang_String__boolean(historyToken, true);
 }
 /**
  * @param {?string} historyToken
  * @param {boolean} issueEvent
  * @public
  */
 static m_newItem__java_lang_String__boolean(historyToken, issueEvent) {
  org_gwtproject_user_history_client_History.$clinit();
  historyToken = $Equality.$same(historyToken, null) ? "" : historyToken;
  if (!j_l_String.m_equals__java_lang_String__java_lang_Object(historyToken, org_gwtproject_user_history_client_History.m_getToken__())) {
   org_gwtproject_user_history_client_History.f_token__org_gwtproject_user_history_client_History_ = historyToken;
   let updateToken = org_gwtproject_user_history_client_History.m_encodeHistoryToken__java_lang_String(historyToken);
   org_gwtproject_user_history_client_History.m_newToken__java_lang_String(updateToken);
   if (issueEvent) {
    org_gwtproject_user_history_client_History.f_historyEventSource__org_gwtproject_user_history_client_History_.m_fireValueChangedEvent__java_lang_String(historyToken);
   }
  }
 }
 /**
  * @param {?string} historyToken
  * @public
  */
 static m_newToken__java_lang_String(historyToken) {
  window.window.location.hash = historyToken;
 }
 /**
  * @param {?string} historyToken
  * @public
  */
 static m_replaceItem__java_lang_String(historyToken) {
  org_gwtproject_user_history_client_History.$clinit();
  org_gwtproject_user_history_client_History.m_replaceItem__java_lang_String__boolean(historyToken, true);
 }
 /**
  * @param {?string} historyToken
  * @param {boolean} issueEvent
  * @public
  */
 static m_replaceItem__java_lang_String__boolean(historyToken, issueEvent) {
  org_gwtproject_user_history_client_History.$clinit();
  org_gwtproject_user_history_client_History.f_token__org_gwtproject_user_history_client_History_ = historyToken;
  Window_Location.m_replace__java_lang_String("#" + j_l_String.m_valueOf__java_lang_Object(org_gwtproject_user_history_client_History.m_encodeHistoryToken__java_lang_String(historyToken)));
  if (issueEvent) {
   org_gwtproject_user_history_client_History.m_fireCurrentHistoryState__();
  }
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getDecodedHash__() {
  let hashToken = Window_Location.m_getHash__();
  if ($Equality.$same(hashToken, null) || j_l_String.m_isEmpty__java_lang_String(hashToken)) {
   return "";
  }
  return org_gwtproject_user_history_client_History.f_tokenEncoder__org_gwtproject_user_history_client_History_.m_decode__java_lang_String_$pp_org_gwtproject_user_history_client(j_l_String.m_substring__java_lang_String__int(hashToken, 1));
 }
 /**
  * @public
  */
 static m_onHashChanged__() {
  let hashToken = org_gwtproject_user_history_client_History.m_getDecodedHash__();
  if (!j_l_String.m_equals__java_lang_String__java_lang_Object(hashToken, org_gwtproject_user_history_client_History.m_getToken__())) {
   org_gwtproject_user_history_client_History.f_token__org_gwtproject_user_history_client_History_ = hashToken;
   org_gwtproject_user_history_client_History.f_historyEventSource__org_gwtproject_user_history_client_History_.m_fireValueChangedEvent__java_lang_String(hashToken);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_user_history_client_History.$clinit = () =>{};
  org_gwtproject_user_history_client_History.$loadModules();
  j_l_Object.$clinit();
  window.window.addEventListener("hashchange", new $LambdaAdaptor$1((/** Event */ evt) =>{
   org_gwtproject_user_history_client_History.m_onHashChanged__();
  }));
  org_gwtproject_user_history_client_History.f_historyEventSource__org_gwtproject_user_history_client_History_ = HistoryEventSource.$create__();
  org_gwtproject_user_history_client_History.f_tokenEncoder__org_gwtproject_user_history_client_History_ = $Equality.$same($Util.$getDefine("history.noDoubleEncoding", null), "true") ? NoopHistoryTokenEncoder.$create__() : HistoryTokenEncoder.$create__();
  org_gwtproject_user_history_client_History.f_token__org_gwtproject_user_history_client_History_ = org_gwtproject_user_history_client_History.m_getDecodedHash__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof org_gwtproject_user_history_client_History;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor$1 = goog.module.get('org.gwtproject.user.history.client.History.$LambdaAdaptor$1$impl');
  HistoryEventSource = goog.module.get('org.gwtproject.user.history.client.History.HistoryEventSource$impl');
  HistoryTokenEncoder = goog.module.get('org.gwtproject.user.history.client.History.HistoryTokenEncoder$impl');
  NoopHistoryTokenEncoder = goog.module.get('org.gwtproject.user.history.client.History.NoopHistoryTokenEncoder$impl');
  Window_Location = goog.module.get('org.gwtproject.user.window.client.Window.Location$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_user_history_client_History, 'org.gwtproject.user.history.client.History');

/** @public {HistoryEventSource} */
org_gwtproject_user_history_client_History.f_historyEventSource__org_gwtproject_user_history_client_History_;
/** @public {HistoryTokenEncoder} */
org_gwtproject_user_history_client_History.f_tokenEncoder__org_gwtproject_user_history_client_History_;
/** @public {?string} */
org_gwtproject_user_history_client_History.f_token__org_gwtproject_user_history_client_History_;

exports = org_gwtproject_user_history_client_History; 
//# sourceMappingURL=History.js.map