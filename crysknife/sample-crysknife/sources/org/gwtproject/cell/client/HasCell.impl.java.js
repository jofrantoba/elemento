goog.module('org.gwtproject.cell.client.HasCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let FieldUpdater = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater$impl');

/**
 * @interface
 * @template T, C
 */
class HasCell {
 /**
  * @abstract
  * @return {Cell<C>}
  * @public
  */
 m_getCell__() {}
 /**
  * @abstract
  * @return {FieldUpdater<T, C>}
  * @public
  */
 m_getFieldUpdater__() {}
 /**
  * @abstract
  * @param {T} object
  * @return {C}
  * @public
  */
 m_getValue__java_lang_Object(object) {}
 /**
  * @public
  */
 static $clinit() {
  HasCell.$clinit = () =>{};
  HasCell.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_HasCell = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_HasCell;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasCell, 'org.gwtproject.cell.client.HasCell');

HasCell.$markImplementor(/** @type {Function} */ (HasCell));

exports = HasCell; 
//# sourceMappingURL=HasCell.js.map