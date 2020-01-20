goog.module('elemental2.dom.SQLTransaction.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let SQLError_$Overlay = goog.forwardDeclare('elemental2.dom.SQLError.$Overlay$impl');
let SQLResultSet_$Overlay = goog.forwardDeclare('elemental2.dom.SQLResultSet.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class SQLTransaction_$Overlay {
 /**
  * @param {!SQLTransaction} $thisArg
  * @param {?string} sqlStatement
  * @param {Array<*>} queryArgs
  * @param {?function(SQLTransaction, SQLResultSet):void} callback
  * @param {?function(SQLTransaction, SQLError):boolean} errorCallback
  * @public
  */
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__elemental2_dom_SQLStatementCallback__elemental2_dom_SQLTransaction_ExecuteSqlErrorCallbackFn($thisArg, sqlStatement, queryArgs, callback, errorCallback) {
  SQLTransaction_$Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>} */ (Js.m_uncheckedCast__java_lang_Object(queryArgs)), callback, errorCallback);
 }
 /**
  * @param {!SQLTransaction} $thisArg
  * @param {?string} sqlStatement
  * @param {Array<*>} queryArgs
  * @param {?function(SQLTransaction, SQLResultSet):void} callback
  * @public
  */
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__elemental2_dom_SQLStatementCallback($thisArg, sqlStatement, queryArgs, callback) {
  SQLTransaction_$Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>} */ (Js.m_uncheckedCast__java_lang_Object(queryArgs)), callback);
 }
 /**
  * @param {!SQLTransaction} $thisArg
  * @param {?string} sqlStatement
  * @param {Array<*>} queryArgs
  * @public
  */
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object($thisArg, sqlStatement, queryArgs) {
  SQLTransaction_$Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>} */ (Js.m_uncheckedCast__java_lang_Object(queryArgs)));
 }
 /**
  * @public
  */
 static $clinit() {
  SQLTransaction_$Overlay.$clinit = () =>{};
  SQLTransaction_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SQLTransaction;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(SQLTransaction_$Overlay, 'SQLTransaction');

exports = SQLTransaction_$Overlay; 
//# sourceMappingURL=SQLTransaction$$Overlay.js.map