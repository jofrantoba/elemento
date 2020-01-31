goog.module('org.gwtproject.cell.client.ValueUpdater$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater.$LambdaAdaptor$impl');

/**
 * @interface
 * @template C
 */
class ValueUpdater {
 /** @abstract */
 m_update__java_lang_Object(/** C */ value) {}
 /** @template C @return {ValueUpdater<C>} */
 static $adapt(/** ?function(C):void */ fn) {
  ValueUpdater.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ValueUpdater.$clinit = () =>{};
  ValueUpdater.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_ValueUpdater = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ValueUpdater;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.ValueUpdater.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ValueUpdater, 'org.gwtproject.cell.client.ValueUpdater');

ValueUpdater.$markImplementor(/** @type {Function} */ (ValueUpdater));

exports = ValueUpdater; 
//# sourceMappingURL=ValueUpdater.js.map