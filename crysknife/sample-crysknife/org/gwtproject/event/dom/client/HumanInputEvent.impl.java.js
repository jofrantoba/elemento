goog.module('org.gwtproject.event.dom.client.HumanInputEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');

/**
 * @abstract
 * @template H
 * @extends {DomEvent<H>}
  */
class HumanInputEvent extends DomEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_HumanInputEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isAltKeyDown__() {
  return $Overlay.m_getAltKey__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isControlKeyDown__() {
  return $Overlay.m_getCtrlKey__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isMetaKeyDown__() {
  return $Overlay.m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isShiftKeyDown__() {
  return $Overlay.m_getShiftKey__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @public
  */
 static $clinit() {
  HumanInputEvent.$clinit = () =>{};
  HumanInputEvent.$loadModules();
  DomEvent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HumanInputEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(HumanInputEvent, 'org.gwtproject.event.dom.client.HumanInputEvent');

exports = HumanInputEvent; 
//# sourceMappingURL=HumanInputEvent.js.map