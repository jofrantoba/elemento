goog.module('elemental2.dom.NotificationOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let NotificationAction_$Overlay = goog.forwardDeclare('elemental2.dom.NotificationAction.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class NotificationOptions_$Overlay {
 /**
  * @return {NotificationOptions}
  * @public
  */
 static m_create__() {
  NotificationOptions_$Overlay.$clinit();
  return /**@type {NotificationOptions} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!NotificationOptions} $thisArg
  * @param {Array<NotificationAction>} actions
  * @public
  */
 static m_setActions__$devirt__elemental2_dom_NotificationOptions__arrayOf_elemental2_dom_NotificationAction($thisArg, actions) {
  NotificationOptions_$Overlay.$clinit();
  $thisArg.actions = /**@type {Array<NotificationAction>} */ (Js.m_uncheckedCast__java_lang_Object(actions));
 }
 /**
  * @param {!NotificationOptions} $thisArg
  * @param {Array<number>} vibrate
  * @public
  */
 static m_setVibrate__$devirt__elemental2_dom_NotificationOptions__arrayOf_double($thisArg, vibrate) {
  NotificationOptions_$Overlay.$clinit();
  $thisArg.vibrate = /**@type {Array<?number>} */ (Js.m_uncheckedCast__java_lang_Object(vibrate));
 }
 /**
  * @public
  */
 static $clinit() {
  NotificationOptions_$Overlay.$clinit = () =>{};
  NotificationOptions_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = NotificationOptions_$Overlay; 
//# sourceMappingURL=NotificationOptions$$Overlay.js.map