goog.module('elemental2.dom.Console.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Console_$Overlay {
 /**
  * @param {!Console} $thisArg
  * @param {*} tabularData
  * @param {*} properties
  * @public
  */
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object__java_lang_Object($thisArg, tabularData, properties) {
  Console_$Overlay.$clinit();
  $thisArg.table(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(tabularData)), properties);
 }
 /**
  * @param {!Console} $thisArg
  * @param {*} tabularData
  * @public
  */
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object($thisArg, tabularData) {
  Console_$Overlay.$clinit();
  $thisArg.table(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(tabularData)));
 }
 /**
  * @public
  */
 static $clinit() {
  Console_$Overlay.$clinit = () =>{};
  Console_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Console;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Console_$Overlay, 'Console');

exports = Console_$Overlay; 
//# sourceMappingURL=Console$$Overlay.js.map