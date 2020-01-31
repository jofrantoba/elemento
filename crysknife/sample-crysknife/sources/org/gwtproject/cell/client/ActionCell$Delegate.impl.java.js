goog.module('org.gwtproject.cell.client.ActionCell.Delegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.ActionCell.Delegate.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Delegate {
 /** @abstract */
 m_execute__java_lang_Object(/** T */ object) {}
 /** @template T @return {Delegate<T>} */
 static $adapt(/** ?function(T):void */ fn) {
  Delegate.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  Delegate.$clinit = () =>{};
  Delegate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_ActionCell_Delegate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ActionCell_Delegate;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.ActionCell.Delegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Delegate, 'org.gwtproject.cell.client.ActionCell$Delegate');

Delegate.$markImplementor(/** @type {Function} */ (Delegate));

exports = Delegate; 
//# sourceMappingURL=ActionCell$Delegate.js.map