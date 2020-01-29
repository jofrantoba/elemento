goog.module('org.treblereel.gwt.crysknife.client.internal.AbstractEventFactory.EventHolder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEventHandler = goog.require('org.treblereel.gwt.crysknife.client.internal.AbstractEventHandler$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let AbstractEventFactory = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.internal.AbstractEventFactory$impl');

class EventHolder extends AbstractEventHandler {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractEventFactory} */
  this.f_$outer_this__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder;
  /** @public {Class} */
  this.f_type__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder_;
 }
 /**
  * @param {AbstractEventFactory} $outer_this
  * @param {Class} type
  * @return {!EventHolder}
  * @public
  */
 static $create__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory__java_lang_Class($outer_this, type) {
  EventHolder.$clinit();
  let $instance = new EventHolder();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory__java_lang_Class($outer_this, type);
  return $instance;
 }
 /**
  * @param {AbstractEventFactory} $outer_this
  * @param {Class} type
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory__java_lang_Class($outer_this, type) {
  this.f_$outer_this__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder = $outer_this;
  this.$ctor__org_treblereel_gwt_crysknife_client_internal_AbstractEventHandler__();
  this.f_type__org_treblereel_gwt_crysknife_client_internal_AbstractEventFactory_EventHolder_ = type;
 }
 /**
  * @public
  */
 static $clinit() {
  EventHolder.$clinit = () =>{};
  EventHolder.$loadModules();
  AbstractEventHandler.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EventHolder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EventHolder, 'org.treblereel.gwt.crysknife.client.internal.AbstractEventFactory$EventHolder');

exports = EventHolder; 
//# sourceMappingURL=AbstractEventFactory$EventHolder.js.map