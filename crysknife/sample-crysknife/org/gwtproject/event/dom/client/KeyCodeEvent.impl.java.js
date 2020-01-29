goog.module('org.gwtproject.event.dom.client.KeyCodeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const KeyEvent = goog.require('org.gwtproject.event.dom.client.KeyEvent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');

/**
 * @abstract
 * @template H
 * @extends {KeyEvent<H>}
  */
class KeyCodeEvent extends KeyEvent {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_KeyCodeEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_KeyEvent__();
 }
 /**
  * @param {number} keyCode
  * @return {boolean}
  * @public
  */
 static m_isArrow__int(keyCode) {
  KeyCodeEvent.$clinit();
  switch (keyCode) {
   case KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes: 
   case KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes: 
    return true;
   default: 
    return false;
  }
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDownArrow__() {
  return this.m_getNativeKeyCode__() == KeyCodes.f_KEY_DOWN__org_gwtproject_event_dom_client_KeyCodes;
 }
 /**
  * @return {number}
  * @public
  */
 m_getNativeKeyCode__() {
  return $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isLeftArrow__() {
  return this.m_getNativeKeyCode__() == KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isRightArrow__() {
  return this.m_getNativeKeyCode__() == KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isUpArrow__() {
  return this.m_getNativeKeyCode__() == KeyCodes.f_KEY_UP__org_gwtproject_event_dom_client_KeyCodes;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + "[" + this.m_getNativeKeyCode__() + "]";
 }
 /**
  * @public
  */
 static $clinit() {
  KeyCodeEvent.$clinit = () =>{};
  KeyCodeEvent.$loadModules();
  KeyEvent.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof KeyCodeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
 }
 
}
$Util.$setClassMetadata(KeyCodeEvent, 'org.gwtproject.event.dom.client.KeyCodeEvent');

exports = KeyCodeEvent; 
//# sourceMappingURL=KeyCodeEvent.js.map