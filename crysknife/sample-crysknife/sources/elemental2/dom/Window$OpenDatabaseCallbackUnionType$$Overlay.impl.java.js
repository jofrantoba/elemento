goog.module('elemental2.dom.Window.OpenDatabaseCallbackUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Database_$Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class OpenDatabaseCallbackUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {DatabaseCallback}
  * @public
  */
 static m_asDatabaseCallback__$devirt__elemental2_dom_Window_OpenDatabaseCallbackUnionType($thisArg) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return /**@type {DatabaseCallback} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {?function(Database):*}
  * @public
  */
 static m_asOpenDatabaseCallbackFn__$devirt__elemental2_dom_Window_OpenDatabaseCallbackUnionType($thisArg) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return /**@type {?function(Database):*} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isOpenDatabaseCallbackFn__$devirt__elemental2_dom_Window_OpenDatabaseCallbackUnionType($thisArg) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit = () =>{};
  OpenDatabaseCallbackUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
 
}

exports = OpenDatabaseCallbackUnionType_$Overlay; 
//# sourceMappingURL=Window$OpenDatabaseCallbackUnionType$$Overlay.js.map