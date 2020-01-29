goog.module('org.gwtproject.user.cellview.client.RowStyles$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowStyles.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class RowStyles {
 /**
  * @abstract
  * @param {T} row
  * @param {number} rowIndex
  * @return {?string}
  * @public
  */
 m_getStyleNames__java_lang_Object__int(row, rowIndex) {}
 /**
  * @template T
  * @param {?function(T, number):?string} fn
  * @return {RowStyles<T>}
  * @public
  */
 static $adapt(fn) {
  RowStyles.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  RowStyles.$clinit = () =>{};
  RowStyles.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_RowStyles = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_RowStyles;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.RowStyles.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(RowStyles, 'org.gwtproject.user.cellview.client.RowStyles');

RowStyles.$markImplementor(/** @type {Function} */ (RowStyles));

exports = RowStyles; 
//# sourceMappingURL=RowStyles.js.map