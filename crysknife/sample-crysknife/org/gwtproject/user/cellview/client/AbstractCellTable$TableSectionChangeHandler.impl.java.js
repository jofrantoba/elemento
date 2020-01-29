goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.TableSectionChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');

/**
 * @interface
 */
class TableSectionChangeHandler {
 /**
  * @abstract
  * @param {Object} newTBody
  * @public
  */
 m_onTableBodyChange__org_gwtproject_dom_client_TableSectionElement(newTBody) {}
 /**
  * @abstract
  * @param {Object} newTFoot
  * @public
  */
 m_onTableFootChange__org_gwtproject_dom_client_TableSectionElement(newTFoot) {}
 /**
  * @abstract
  * @param {Object} newTHead
  * @public
  */
 m_onTableHeadChange__org_gwtproject_dom_client_TableSectionElement(newTHead) {}
 /**
  * @public
  */
 static $clinit() {
  TableSectionChangeHandler.$clinit = () =>{};
  TableSectionChangeHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_TableSectionChangeHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_TableSectionChangeHandler;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableSectionChangeHandler, 'org.gwtproject.user.cellview.client.AbstractCellTable$TableSectionChangeHandler');

TableSectionChangeHandler.$markImplementor(/** @type {Function} */ (TableSectionChangeHandler));

exports = TableSectionChangeHandler; 
//# sourceMappingURL=AbstractCellTable$TableSectionChangeHandler.js.map