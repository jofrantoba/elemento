goog.module('org.gwtproject.event.shared.Event$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');

/**
 * @abstract
 * @template H
  */
class Event extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {*} */
  this.f_source__org_gwtproject_event_shared_Event_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_shared_Event__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @return {Type<H>}
  * @public
  */
 m_getAssociatedType__() {}
 /**
  * @return {*}
  * @public
  */
 m_getSource__() {
  return this.f_source__org_gwtproject_event_shared_Event_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_toDebugString__() {
  let name = this.m_getClass__().m_getName__();
  name = j_l_String.m_substring__java_lang_String__int(name, j_l_String.m_lastIndexOf__java_lang_String__java_lang_String(name, ".") + 1);
  return "event: " + j_l_String.m_valueOf__java_lang_Object(name) + ":";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return "An event type";
 }
 /**
  * @abstract
  * @param {H} handler
  * @public
  */
 m_dispatch__java_lang_Object(handler) {}
 /**
  * @param {*} source
  * @public
  */
 m_setSource__java_lang_Object(source) {
  this.f_source__org_gwtproject_event_shared_Event_ = source;
 }
 /**
  * @public
  */
 static $clinit() {
  Event.$clinit = () =>{};
  Event.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Event;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(Event, 'org.gwtproject.event.shared.Event');

exports = Event; 
//# sourceMappingURL=Event.js.map