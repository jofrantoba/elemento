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
 /** @abstract @return {Cell<T>} */
 m_getCell__() {}
 /** @abstract @return {ProvidesKey<T>} */
 m_getProvidesKey__() {}
 /** @abstract @return {SelectionModel<?>} */
 m_getSelectionModel__() {}
 /** @abstract @return {ValueUpdater<T>} */
 m_getValueUpdater__() {}
 /** @abstract */
 m_setDataDisplay__org_gwtproject_view_client_HasData(/** HasData<T> */ display) {}
 /** @abstract */
 m_unsetDataDisplay__() {}
 
 static $clinit() {
  NodeInfo.$clinit = () =>{};
  NodeInfo.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_TreeViewModel_NodeInfo = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_TreeViewModel_NodeInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NodeInfo, 'org.gwtproject.view.client.TreeViewModel$NodeInfo');

NodeInfo.$markImplementor(/** @type {Function} */ (NodeInfo));

exports = NodeInfo; 
//# sourceMappingURL=TreeViewModel$NodeInfo.js.map