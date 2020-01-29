goog.module('org.gwtproject.user.history.client.History.NoopHistoryTokenEncoder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HistoryTokenEncoder = goog.require('org.gwtproject.user.history.client.History.HistoryTokenEncoder$impl');

class NoopHistoryTokenEncoder extends HistoryTokenEncoder {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!NoopHistoryTokenEncoder}
  * @public
  */
 static $create__() {
  NoopHistoryTokenEncoder.$clinit();
  let $instance = new NoopHistoryTokenEncoder();
  $instance.$ctor__org_gwtproject_user_history_client_History_NoopHistoryTokenEncoder__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_history_client_History_NoopHistoryTokenEncoder__() {
  this.$ctor__org_gwtproject_user_history_client_History_HistoryTokenEncoder__();
 }
 /**
  * @override
  * @param {?string} toEncode
  * @return {?string}
  * @public
  */
 m_encode__java_lang_String_$pp_org_gwtproject_user_history_client(toEncode) {
  return toEncode;
 }
 /**
  * @override
  * @param {?string} toDecode
  * @return {?string}
  * @public
  */
 m_decode__java_lang_String_$pp_org_gwtproject_user_history_client(toDecode) {
  return toDecode;
 }
 /**
  * @public
  */
 static $clinit() {
  NoopHistoryTokenEncoder.$clinit = () =>{};
  NoopHistoryTokenEncoder.$loadModules();
  HistoryTokenEncoder.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NoopHistoryTokenEncoder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(NoopHistoryTokenEncoder, 'org.gwtproject.user.history.client.History$NoopHistoryTokenEncoder');

exports = NoopHistoryTokenEncoder; 
//# sourceMappingURL=History$NoopHistoryTokenEncoder.js.map