goog.module('org.gwtproject.user.cellview.client.RowStyles$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowStyles.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class RowStyles {
 /** @abstract @return {?string} */
 m_getStyleNames__java_lang_Object__int(/** T */ row, /** number */ rowIndex) {}
 /** @template T @return {RowStyles<T>} */
 static $adapt(/** ?function(T, number):?string */ fn) {
  RowStyles.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  RowStyles.$clinit = () =>{};
  RowStyles.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_RowStyles = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_RowStyles;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.RowStyles.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(RowStyles, 'org.gwtproject.user.cellview.client.RowStyles');

RowStyles.$markImplementor(/** @type {Function} */ (RowStyles));

exports = RowStyles; 
//# sourceMappingURL=RowStyles.js.map