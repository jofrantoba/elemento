goog.module('org.gwtproject.user.cellview.client.CellTree.CellTreeMessages$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Messages = goog.require('org.gwtproject.i18n.client.Messages$impl');

let CellTree__CellTreeMessages__en__US = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_CellTreeMessages_en_US$impl');

/**
 * @interface
 * @extends {Messages}
 */
class CellTreeMessages {
 /** @abstract @return {?string} */
 m_showMore__() {}
 /** @abstract @return {?string} */
 m_emptyTree__() {}
 /** @return {CellTreeMessages} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages() {
  return (CellTreeMessages.$clinit(), CellTreeMessages.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages);
 }
 
 static $clinit() {
  CellTreeMessages.$clinit = () =>{};
  CellTreeMessages.$loadModules();
  CellTreeMessages.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages = CellTree__CellTreeMessages__en__US.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Messages.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages;
 }
 
 static $loadModules() {
  CellTree__CellTreeMessages__en__US = goog.module.get('org.gwtproject.user.cellview.client.CellTree_CellTreeMessages_en_US$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CellTreeMessages, 'org.gwtproject.user.cellview.client.CellTree$CellTreeMessages');

CellTreeMessages.$markImplementor(/** @type {Function} */ (CellTreeMessages));

/**@private {CellTreeMessages}*/
CellTreeMessages.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_CellTreeMessages;

exports = CellTreeMessages; 
//# sourceMappingURL=CellTree$CellTreeMessages.js.map