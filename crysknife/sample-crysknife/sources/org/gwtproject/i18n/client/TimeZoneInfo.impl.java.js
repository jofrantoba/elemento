goog.module('org.gwtproject.i18n.client.TimeZoneInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let JsArrayInteger_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArrayInteger.$Overlay$impl');
let JsArrayString_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArrayString.$Overlay$impl');
let JsonUtils = goog.forwardDeclare('org.gwtproject.core.client.JsonUtils$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TimeZoneInfo extends Object {
 /**
  * @public
  */
 constructor() {
  TimeZoneInfo.$clinit();
  super();
  this.$ctor__org_gwtproject_i18n_client_TimeZoneInfo__();
 }
 /**
  * @param {?string} json
  * @return {TimeZoneInfo}
  * @public
  */
 static m_buildTimeZoneData__java_lang_String(json) {
  TimeZoneInfo.$clinit();
  return /**@type {TimeZoneInfo} */ ($Casts.$to(JsonUtils.m_safeEval__java_lang_String(json), TimeZoneInfo));
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_TimeZoneInfo__() {}
 /**
  * @return {?string}
  * @public
  */
 m_getID__() {
  return /**@type {?string} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this), "id")));
 }
 /**
  * @return {Object}
  * @public
  */
 m_getNames__() {
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this), "names")));
 }
 /**
  * @return {number}
  * @public
  */
 m_getStandardOffset__() {
  return /**@type {Integer} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this), "std_offset"))).m_intValue__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getTransitions__() {
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this), "transitions")));
 }
 /**
  * @public
  */
 static $clinit() {
  TimeZoneInfo.$clinit = () =>{};
  TimeZoneInfo.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TimeZoneInfo;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  JsonUtils = goog.module.get('org.gwtproject.core.client.JsonUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TimeZoneInfo, 'org.gwtproject.i18n.client.TimeZoneInfo');

exports = TimeZoneInfo; 
//# sourceMappingURL=TimeZoneInfo.js.map