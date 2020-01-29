goog.module('org.gwtproject.event.dom.client.KeyUpEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const KeyCodeEvent = goog.require('org.gwtproject.event.dom.client.KeyCodeEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {KeyCodeEvent<KeyUpHandler>}
  */
class KeyUpEvent extends KeyCodeEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!KeyUpEvent}
  * @public
  */
 static $create__() {
  KeyUpEvent.$clinit();
  let $instance = new KeyUpEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_KeyUpEvent__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_KeyUpEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_KeyCodeEvent__();
 }
 /**
  * @return {Type<KeyUpHandler>}
  * @public
  */
 static m_getType__() {
  KeyUpEvent.$clinit();
  return KeyUpEvent.f_TYPE__org_gwtproject_event_dom_client_KeyUpEvent_;
 }
 /**
  * @override
  * @return {Type<KeyUpHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return KeyUpEvent.f_TYPE__org_gwtproject_event_dom_client_KeyUpEvent_;
 }
 /**
  * @param {KeyUpHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_dom_client_KeyUpHandler(handler) {
  handler.m_onKeyUp__org_gwtproject_event_dom_client_KeyUpEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_KeyUpHandler(/**@type {KeyUpHandler} */ ($Casts.$to(arg0, KeyUpHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  KeyUpEvent.$clinit = () =>{};
  KeyUpEvent.$loadModules();
  KeyCodeEvent.$clinit();
  KeyUpEvent.f_TYPE__org_gwtproject_event_dom_client_KeyUpEvent_ = /**@type {!Type<KeyUpHandler>} */ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, KeyUpEvent.$create__()));
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof KeyUpEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  KeyUpHandler = goog.module.get('org.gwtproject.event.dom.client.KeyUpHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(KeyUpEvent, 'org.gwtproject.event.dom.client.KeyUpEvent');

/** @public {Type<KeyUpHandler>} */
KeyUpEvent.f_TYPE__org_gwtproject_event_dom_client_KeyUpEvent_;

exports = KeyUpEvent; 
//# sourceMappingURL=KeyUpEvent.js.map