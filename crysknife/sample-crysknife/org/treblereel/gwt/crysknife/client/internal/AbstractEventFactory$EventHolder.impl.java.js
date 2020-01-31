goog.module('org.treblereel.gwt.crysknife.client.internal.AbstractEventFactory.EventHolder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEventHandler = goog.require('org.treblereel.gwt.crysknife.client.internal.AbstractEventHandler$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let AbstractEventFactory = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.internal.AbstractEventFactory$impl');

class EventHolder extends AbstractEventHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractEventFactory}*/
  this.f_$outer_this__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder;
  /**@type {Class}*/
  this.f_type__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder_;
 }
 /** @return {!EventHolder} */
 static $create__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory__java_lang_Class(/** AbstractEventFactory */ $outer_this, /** Class */ type) {
  EventHolder.$clinit();
  let $instance = new EventHolder();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory__java_lang_Class($outer_this, type);
  return $instance;
 }
 
 $ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory__java_lang_Class(/** AbstractEventFactory */ $outer_this, /** Class */ type) {
  this.f_$outer_this__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder = $outer_this;
  this.$ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler__();
  this.f_type__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder_ = type;
 }
 
 static $clinit() {
  EventHolder.$clinit = () =>{};
  EventHolder.$loadModules();
  AbstractEventHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventHolder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EventHolder, 'org.treblereel.gwt.crysknife.client.internal.AbstractEventFactory$EventHolder');

exports = EventHolder; 
//# sourceMappingURL=AbstractEventFactory$EventHolder.js.map