goog.module('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl.cellTreeOpenItemInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');

class cellTreeOpenItemInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTreeOpenItemInitializer} */
 static $create__() {
  let $instance = new cellTreeOpenItemInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeOpenItemInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeOpenItemInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTreeOpenItemInitializer.$clinit();
  return CellTree__BasicResourcesImpl.f_cellTreeOpenItem__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_;
 }
 
 static $clinit() {
  cellTreeOpenItemInitializer.$clinit = () =>{};
  cellTreeOpenItemInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_.m_cellTreeOpenItemInitializer___$p_org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTreeOpenItemInitializer;
 }
 
 static $loadModules() {
  CellTree__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeOpenItemInitializer, 'org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$cellTreeOpenItemInitializer');

exports = cellTreeOpenItemInitializer; 
//# sourceMappingURL=CellTree_BasicResourcesImpl$cellTreeOpenItemInitializer.js.map