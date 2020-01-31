goog.module('org.gwtproject.cell.client.HasCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let FieldUpdater = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater$impl');

/**
 * @interface
 * @template T, C
 */
class HasCell {
 /** @abstract @return {Cell<C>} */
 m_getCell__() {}
 /** @abstract @return {FieldUpdater<T, C>} */
 m_getFieldUpdater__() {}
 /** @abstract @return {C} */
 m_getValue__java_lang_Object(/** T */ object) {}
 
 static $clinit() {
  HasCell.$clinit = () =>{};
  HasCell.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_HasCell = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_HasCell;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCell, 'org.gwtproject.cell.client.HasCell');

HasCell.$markImplementor(/** @type {Function} */ (HasCell));

exports = HasCell; 
//# sourceMappingURL=HasCell.js.map