goog.module('org.gwtproject.user.history.client.History.HistoryTokenEncoder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class HistoryTokenEncoder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!HistoryTokenEncoder}
  * @public
  */
 static $create__() {
  HistoryTokenEncoder.$clinit();
  let $instance = new HistoryTokenEncoder();
  $instance.$ctor__org_gwtproject_user_history_client_History_HistoryTokenEncoder__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_history_client_History_HistoryTokenEncoder__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} toEncode
  * @return {?string}
  * @public
  */
 m_encode__java_lang_String_$pp_org_gwtproject_user_history_client(toEncode) {
  return j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(window.encodeURI(toEncode), "#", "%23");
 }
 /**
  * @param {?string} toDecode
  * @return {?string}
  * @public
  */
 m_decode__java_lang_String_$pp_org_gwtproject_user_history_client(toDecode) {
  return window.decodeURI(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(toDecode, "%23", "#"));
 }
 /**
  * @public
  */
 static $clinit() {
  HistoryTokenEncoder.$clinit = () =>{};
  HistoryTokenEncoder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HistoryTokenEncoder;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(HistoryTokenEncoder, 'org.gwtproject.user.history.client.History$HistoryTokenEncoder');

exports = HistoryTokenEncoder; 
//# sourceMappingURL=History$HistoryTokenEncoder.js.map