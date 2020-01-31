goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.TableSectionChangeHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');

/**
 * @interface
 */
class TableSectionChangeHandler {
 /** @abstract */
 m_onTableBodyChange__org_gwtproject_dom_client_TableSectionElement(/** Object */ newTBody) {}
 /** @abstract */
 m_onTableFootChange__org_gwtproject_dom_client_TableSectionElement(/** Object */ newTFoot) {}
 /** @abstract */
 m_onTableHeadChange__org_gwtproject_dom_client_TableSectionElement(/** Object */ newTHead) {}
 
 static $clinit() {
  TableSectionChangeHandler.$clinit = () =>{};
  TableSectionChangeHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_TableSectionChangeHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_TableSectionChangeHandler;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TableSectionChangeHandler, 'org.gwtproject.user.cellview.client.AbstractCellTable$TableSectionChangeHandler');

TableSectionChangeHandler.$markImplementor(/** @type {Function} */ (TableSectionChangeHandler));

exports = TableSectionChangeHandler; 
//# sourceMappingURL=AbstractCellTable$TableSectionChangeHandler.js.map