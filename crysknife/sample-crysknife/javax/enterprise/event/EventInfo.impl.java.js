goog.module('javax.enterprise.event.EventInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class EventInfo extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!EventInfo}
  * @public
  */
 static $create__() {
  EventInfo.$clinit();
  let $instance = new EventInfo();
  $instance.$ctor__javax_enterprise_event_EventInfo__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__javax_enterprise_event_EventInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  EventInfo.$clinit = () =>{};
  EventInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EventInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EventInfo, 'javax.enterprise.event.EventInfo');

exports = EventInfo; 
//# sourceMappingURL=EventInfo.js.map