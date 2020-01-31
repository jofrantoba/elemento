goog.module('org.gwtproject.cell.client.FieldUpdater$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, C
 */
class FieldUpdater {
 /** @abstract */
 m_update__int__java_lang_Object__java_lang_Object(/** number */ index, /** T */ object, /** C */ value) {}
 /** @template T, C @return {FieldUpdater<T, C>} */
 static $adapt(/** ?function(number, T, C):void */ fn) {
  FieldUpdater.$clinit();
  return /**@type {!$LambdaAdaptor<T, C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  FieldUpdater.$clinit = () =>{};
  FieldUpdater.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_FieldUpdater = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_FieldUpdater;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.FieldUpdater.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(FieldUpdater, 'org.gwtproject.cell.client.FieldUpdater');

FieldUpdater.$markImplementor(/** @type {Function} */ (FieldUpdater));

exports = FieldUpdater; 
//# sourceMappingURL=FieldUpdater.js.map