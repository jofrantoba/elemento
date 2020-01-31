goog.module('org.gwtproject.user.client.impl.EventMap$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');

class EventMap extends Object {
 
 constructor() {
  EventMap.$clinit();
  super();
  this.$ctor__org_gwtproject_user_client_impl_EventMap__();
 }
 
 $ctor__org_gwtproject_user_client_impl_EventMap__() {}
 /** @return {?function(?string, *):void} */
 static m_copyTo__org_gwtproject_user_client_impl_EventMap(/** EventMap */ target) {
  return (/** ?string */ key, /** * */ value) =>{
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(target), key, value);
  };
 }
 
 static m_foreach__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_user_client_impl_EventMap_FnVarArgs(/** Object */ map, /** ?function(?string, *):void */ fn) {
  EventMap.$clinit();
  $Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn(Js.m_asPropertyMap__java_lang_Object(map), (/** ?string */ cb) =>{
   fn(cb, $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(map), cb));
  });
 }
 
 m_merge__org_gwtproject_core_client_JavaScriptObject(/** Object */ eventMap) {
  EventMap.m_foreach__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_user_client_impl_EventMap_FnVarArgs(eventMap, EventMap.m_copyTo__org_gwtproject_user_client_impl_EventMap(this));
 }
 
 static $clinit() {
  EventMap.$clinit = () =>{};
  EventMap.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventMap;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(EventMap, 'org.gwtproject.user.client.impl.EventMap');

exports = EventMap; 
//# sourceMappingURL=EventMap.js.map