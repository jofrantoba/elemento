goog.module('org.gwtproject.user.client.impl.EventMap$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');

class EventMap extends Object {
 /**
  * @public
  */
 constructor() {
  EventMap.$clinit();
  super();
  this.$ctor__org_gwtproject_user_client_impl_EventMap__();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_impl_EventMap__() {}
 /**
  * @param {EventMap} target
  * @return {?function(?string, *):void}
  * @public
  */
 static m_copyTo__org_gwtproject_user_client_impl_EventMap(target) {
  return (/** ?string */ key, /** * */ value) =>{
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(target), key, value);
  };
 }
 /**
  * @param {Object} map
  * @param {?function(?string, *):void} fn
  * @public
  */
 static m_foreach__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_user_client_impl_EventMap_FnVarArgs(map, fn) {
  EventMap.$clinit();
  $Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn(Js.m_asPropertyMap__java_lang_Object(map), (/** ?string */ cb) =>{
   fn(cb, $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(map), cb));
  });
 }
 /**
  * @param {Object} eventMap
  * @public
  */
 m_merge__org_gwtproject_core_client_JavaScriptObject(eventMap) {
  EventMap.m_foreach__org_gwtproject_core_client_JavaScriptObject__org_gwtproject_user_client_impl_EventMap_FnVarArgs(eventMap, EventMap.m_copyTo__org_gwtproject_user_client_impl_EventMap(this));
 }
 /**
  * @public
  */
 static $clinit() {
  EventMap.$clinit = () =>{};
  EventMap.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EventMap;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(EventMap, 'org.gwtproject.user.client.impl.EventMap');

exports = EventMap; 
//# sourceMappingURL=EventMap.js.map