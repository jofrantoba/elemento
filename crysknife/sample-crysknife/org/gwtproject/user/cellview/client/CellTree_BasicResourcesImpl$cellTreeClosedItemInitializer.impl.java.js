goog.module('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl.cellTreeClosedItemInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');

class cellTreeClosedItemInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTreeClosedItemInitializer} */
 static $create__() {
  let $instance = new cellTreeClosedItemInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeClosedItemInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeClosedItemInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTreeClosedItemInitializer.$clinit();
  return CellTree__BasicResourcesImpl.f_cellTreeClosedItem__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_;
 }
 
 static $clinit() {
  cellTreeClosedItemInitializer.$clinit = () =>{};
  cellTreeClosedItemInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_.m_cellTreeClosedItemInitializer___$p_org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTreeClosedItemInitializer;
 }
 
 static $loadModules() {
  CellTree__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeClosedItemInitializer, 'org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$cellTreeClosedItemInitializer');

exports = cellTreeClosedItemInitializer; 
//# sourceMappingURL=CellTree_BasicResourcesImpl$cellTreeClosedItemInitializer.js.map