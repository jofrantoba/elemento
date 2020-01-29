goog.module('org.gwtproject.canvas.dom.client.CssColor.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CssColor_$Overlay {
 /**
  * @param {number} r
  * @param {number} g
  * @param {number} b
  * @return {String}
  * @public
  */
 static m_make__int__int__int(r, g, b) {
  CssColor_$Overlay.$clinit();
  return CssColor_$Overlay.m_make__java_lang_String("rgb(" + r + "," + g + "," + b + ")");
 }
 /**
  * @param {?string} cssColor
  * @return {String}
  * @public
  */
 static m_make__java_lang_String(cssColor) {
  CssColor_$Overlay.$clinit();
  return /**@type {String} */ (Js.m_uncheckedCast__java_lang_Object(cssColor));
 }
 /**
  * @param {!String} $thisArg
  * @return {?string}
  * @public
  */
 static m_value__$devirt__org_gwtproject_canvas_dom_client_CssColor($thisArg) {
  CssColor_$Overlay.$clinit();
  return /**@type {?string} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($thisArg), j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  CssColor_$Overlay.$clinit = () =>{};
  CssColor_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof String;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CssColor_$Overlay, 'String');

exports = CssColor_$Overlay; 
//# sourceMappingURL=CssColor$$Overlay.js.map