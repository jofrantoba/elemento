goog.module('elemental2.dom.MediaRecorderOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MediaRecorderOptions_$Overlay {
 /**
  * @return {MediaRecorderOptions}
  * @public
  */
 static m_create__() {
  MediaRecorderOptions_$Overlay.$clinit();
  return /**@type {MediaRecorderOptions} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @public
  */
 static $clinit() {
  MediaRecorderOptions_$Overlay.$clinit = () =>{};
  MediaRecorderOptions_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MediaRecorderOptions_$Overlay; 
//# sourceMappingURL=MediaRecorderOptions$$Overlay.js.map