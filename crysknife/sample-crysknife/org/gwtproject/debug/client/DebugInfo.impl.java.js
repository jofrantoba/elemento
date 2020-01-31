goog.module('org.gwtproject.debug.client.DebugInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DebugIdHolder = goog.forwardDeclare('org.gwtproject.debug.client.DebugInfo.DebugIdHolder$impl');

class DebugInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DebugInfo} */
 static $create__() {
  DebugInfo.$clinit();
  let $instance = new DebugInfo();
  $instance.$ctor__org_gwtproject_debug_client_DebugInfo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_debug_client_DebugInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static m_getDebugIdAttribute__() {
  DebugInfo.$clinit();
  return DebugInfo.f_debugIdAttribute__org_gwtproject_debug_client_DebugInfo_;
 }
 /** @return {?string} */
 static m_getDebugIdPrefix__() {
  DebugInfo.$clinit();
  return DebugInfo.f_debugIdPrefix__org_gwtproject_debug_client_DebugInfo_;
 }
 /** @return {boolean} */
 static m_isDebugIdAsProperty__() {
  DebugInfo.$clinit();
  return DebugInfo.f_debugIdAsProperty__org_gwtproject_debug_client_DebugInfo_;
 }
 /** @return {boolean} */
 static m_isDebugIdEnabled__() {
  DebugInfo.$clinit();
  return DebugIdHolder.f_isDebugIdEnabled__org_gwtproject_debug_client_DebugInfo_DebugIdHolder_;
 }
 
 static m_setDebugIdAttribute__java_lang_String__boolean(/** ?string */ attribute, /** boolean */ asProperty) {
  DebugInfo.$clinit();
  DebugInfo.f_debugIdAttribute__org_gwtproject_debug_client_DebugInfo_ = attribute;
  DebugInfo.f_debugIdAsProperty__org_gwtproject_debug_client_DebugInfo_ = asProperty;
 }
 
 static m_setDebugIdPrefix__java_lang_String(/** ?string */ prefix) {
  DebugInfo.$clinit();
  DebugInfo.f_debugIdPrefix__org_gwtproject_debug_client_DebugInfo_ = prefix;
 }
 
 static $clinit() {
  DebugInfo.$clinit = () =>{};
  DebugInfo.$loadModules();
  j_l_Object.$clinit();
  DebugInfo.f_debugIdPrefix__org_gwtproject_debug_client_DebugInfo_ = DebugInfo.f_DEFAULT_DEBUG_ID_PREFIX__org_gwtproject_debug_client_DebugInfo;
  DebugInfo.f_debugIdAttribute__org_gwtproject_debug_client_DebugInfo_ = "id";
  DebugInfo.f_debugIdAsProperty__org_gwtproject_debug_client_DebugInfo_ = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DebugInfo;
 }
 
 static $loadModules() {
  DebugIdHolder = goog.module.get('org.gwtproject.debug.client.DebugInfo.DebugIdHolder$impl');
 }
 
}
$Util.$setClassMetadata(DebugInfo, 'org.gwtproject.debug.client.DebugInfo');

/**@const {?string}*/
DebugInfo.f_DEFAULT_DEBUG_ID_PREFIX__org_gwtproject_debug_client_DebugInfo = "gwt-debug-";
/**@type {?string}*/
DebugInfo.f_debugIdPrefix__org_gwtproject_debug_client_DebugInfo_;
/**@type {?string}*/
DebugInfo.f_debugIdAttribute__org_gwtproject_debug_client_DebugInfo_;
/**@type {boolean}*/
DebugInfo.f_debugIdAsProperty__org_gwtproject_debug_client_DebugInfo_ = false;

exports = DebugInfo; 
//# sourceMappingURL=DebugInfo.js.map