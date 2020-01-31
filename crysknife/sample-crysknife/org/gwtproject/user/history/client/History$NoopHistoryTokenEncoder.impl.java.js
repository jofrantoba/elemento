goog.module('org.gwtproject.user.history.client.History.NoopHistoryTokenEncoder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HistoryTokenEncoder = goog.require('org.gwtproject.user.history.client.History.HistoryTokenEncoder$impl');

class NoopHistoryTokenEncoder extends HistoryTokenEncoder {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NoopHistoryTokenEncoder} */
 static $create__() {
  NoopHistoryTokenEncoder.$clinit();
  let $instance = new NoopHistoryTokenEncoder();
  $instance.$ctor__org_gwtproject_user_history_client_History_NoopHistoryTokenEncoder__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_history_client_History_NoopHistoryTokenEncoder__() {
  this.$ctor__org_gwtproject_user_history_client_History_HistoryTokenEncoder__();
 }
 /** @override @return {?string} */
 m_encode__java_lang_String_$pp_org_gwtproject_user_history_client(/** ?string */ toEncode) {
  return toEncode;
 }
 /** @override @return {?string} */
 m_decode__java_lang_String_$pp_org_gwtproject_user_history_client(/** ?string */ toDecode) {
  return toDecode;
 }
 
 static $clinit() {
  NoopHistoryTokenEncoder.$clinit = () =>{};
  NoopHistoryTokenEncoder.$loadModules();
  HistoryTokenEncoder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoopHistoryTokenEncoder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(NoopHistoryTokenEncoder, 'org.gwtproject.user.history.client.History$NoopHistoryTokenEncoder');

exports = NoopHistoryTokenEncoder; 
//# sourceMappingURL=History$NoopHistoryTokenEncoder.js.map