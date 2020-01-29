goog.module('org.gwtproject.event.shared.Event.Type$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template H
  */
class Type extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_index__org_gwtproject_event_shared_Event_Type_ = 0;
 }
 /**
  * @template H
  * @return {!Type<H>}
  * @public
  */
 static $create__() {
  Type.$clinit();
  let $instance = new Type();
  $instance.$ctor__org_gwtproject_event_shared_Event_Type__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_shared_Event_Type__() {
  this.$ctor__java_lang_Object__();
  this.f_index__org_gwtproject_event_shared_Event_Type_ = ++Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return this.f_index__org_gwtproject_event_shared_Event_Type_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return "Event type";
 }
 /**
  * @public
  */
 static $clinit() {
  Type.$clinit = () =>{};
  Type.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Type;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Type, 'org.gwtproject.event.shared.Event$Type');

/** @public {number} */
Type.f_nextHashCode__org_gwtproject_event_shared_Event_Type_ = 0;

exports = Type; 
//# sourceMappingURL=Event$Type.js.map