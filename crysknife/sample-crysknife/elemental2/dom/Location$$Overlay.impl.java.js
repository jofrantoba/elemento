goog.module('elemental2.dom.Location.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Location.AssignUrlUnionType.$Overlay$impl');
let ReplaceUrlUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Location.ReplaceUrlUnionType.$Overlay$impl');
let TrustedURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedURL.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Location_$Overlay {
 /**
  * @param {!Location} $thisArg
  * @param {?string} url
  * @public
  */
 static m_assign__$devirt__elemental2_dom_Location__java_lang_String($thisArg, url) {
  Location_$Overlay.$clinit();
  $thisArg.assign(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(url)));
 }
 /**
  * @param {!Location} $thisArg
  * @param {TrustedURL} url
  * @public
  */
 static m_assign__$devirt__elemental2_dom_Location__elemental2_dom_TrustedURL($thisArg, url) {
  Location_$Overlay.$clinit();
  $thisArg.assign(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(url)));
 }
 /**
  * @param {!Location} $thisArg
  * @param {?string} url
  * @public
  */
 static m_replace__$devirt__elemental2_dom_Location__java_lang_String($thisArg, url) {
  Location_$Overlay.$clinit();
  $thisArg.replace(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(url)));
 }
 /**
  * @param {!Location} $thisArg
  * @param {TrustedURL} url
  * @public
  */
 static m_replace__$devirt__elemental2_dom_Location__elemental2_dom_TrustedURL($thisArg, url) {
  Location_$Overlay.$clinit();
  $thisArg.replace(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(url)));
 }
 /**
  * @public
  */
 static $clinit() {
  Location_$Overlay.$clinit = () =>{};
  Location_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Location;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Location_$Overlay, 'Location');

exports = Location_$Overlay; 
//# sourceMappingURL=Location$$Overlay.js.map