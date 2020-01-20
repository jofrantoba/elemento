goog.module('elemental2.dom.MediaConstraintsInterface_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MediaConstraintsInterface___$Overlay {
 /**
  * @param {!MediaConstraintsInterface_} $thisArg
  * @param {*} mandatory
  * @public
  */
 static m_setMandatory__$devirt__elemental2_dom_MediaConstraintsInterface___java_lang_Object($thisArg, mandatory) {
  MediaConstraintsInterface___$Overlay.$clinit();
  $thisArg.mandatory = /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(mandatory));
 }
 /**
  * @param {!MediaConstraintsInterface_} $thisArg
  * @param {Array<Object>} optional
  * @public
  */
 static m_setOptional__$devirt__elemental2_dom_MediaConstraintsInterface___arrayOf_elemental2_core_JsObject($thisArg, optional) {
  MediaConstraintsInterface___$Overlay.$clinit();
  $thisArg.optional = /**@type {Array<Object>} */ (Js.m_uncheckedCast__java_lang_Object(optional));
 }
 /**
  * @public
  */
 static $clinit() {
  MediaConstraintsInterface___$Overlay.$clinit = () =>{};
  MediaConstraintsInterface___$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = MediaConstraintsInterface___$Overlay; 
//# sourceMappingURL=MediaConstraintsInterface_$$Overlay.js.map