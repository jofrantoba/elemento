goog.module('org.gwtproject.debug.client.DebugInfo.DebugIdHolder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');

class DebugIdHolder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DebugIdHolder}
  * @public
  */
 static $create__() {
  let $instance = new DebugIdHolder();
  $instance.$ctor__org_gwtproject_debug_client_DebugInfo_DebugIdHolder__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_debug_client_DebugInfo_DebugIdHolder__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {boolean}
  * @public
  */
 static get f_isDebugIdEnabled__org_gwtproject_debug_client_DebugInfo_DebugIdHolder_() {
  return (DebugIdHolder.$clinit(), DebugIdHolder.$f_isDebugIdEnabled__org_gwtproject_debug_client_DebugInfo_DebugIdHolder_);
 }
 /**
  * @public
  */
 static $clinit() {
  DebugIdHolder.$clinit = () =>{};
  DebugIdHolder.$loadModules();
  j_l_Object.$clinit();
  DebugIdHolder.$f_isDebugIdEnabled__org_gwtproject_debug_client_DebugInfo_DebugIdHolder_ = Boolean.m_booleanValue__java_lang_Boolean(Boolean.m_valueOf__java_lang_String($Util.$getDefine("gwt.enableDebugId")));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DebugIdHolder;
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
 }
 
}
$Util.$setClassMetadata(DebugIdHolder, 'org.gwtproject.debug.client.DebugInfo$DebugIdHolder');

/** @private {boolean} */
DebugIdHolder.$f_isDebugIdEnabled__org_gwtproject_debug_client_DebugInfo_DebugIdHolder_ = false;

/* NATIVE.JS EPILOG */

const org_gwtproject_debug_client_DebugInfo_DebugIdHolder = DebugIdHolder;

// ensure that gwt.enableDebugId defines are included
/** @suppress {extraRequire} */
const isDebugIdEnabled = goog.require('gwt');

exports = DebugIdHolder; 
//# sourceMappingURL=DebugInfo$DebugIdHolder.js.map