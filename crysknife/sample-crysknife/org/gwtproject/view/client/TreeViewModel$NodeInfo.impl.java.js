goog.module('org.gwtproject.view.client.TreeViewModel.NodeInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');

/**
 * @interface
 * @template T
 */
class NodeInfo {
 /**
  * @abstract
  * @return {Cell<T>}
  * @public
  */
 m_getCell__() {}
 /**
  * @abstract
  * @return {ProvidesKey<T>}
  * @public
  */
 m_getProvidesKey__() {}
 /**
  * @abstract
  * @return {SelectionModel<?>}
  * @public
  */
 m_getSelectionModel__() {}
 /**
  * @abstract
  * @return {ValueUpdater<T>}
  * @public
  */
 m_getValueUpdater__() {}
 /**
  * @abstract
  * @param {HasData<T>} display
  * @public
  */
 m_setDataDisplay__org_gwtproject_view_client_HasData(display) {}
 /**
  * @abstract
  * @public
  */
 m_unsetDataDisplay__() {}
 /**
  * @public
  */
 static $clinit() {
  NodeInfo.$clinit = () =>{};
  NodeInfo.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_TreeViewModel_NodeInfo = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_TreeViewModel_NodeInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NodeInfo, 'org.gwtproject.view.client.TreeViewModel$NodeInfo');

NodeInfo.$markImplementor(/** @type {Function} */ (NodeInfo));

exports = NodeInfo; 
//# sourceMappingURL=TreeViewModel$NodeInfo.js.map