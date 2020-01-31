goog.module('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl.cellTreeOpenItemInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

class cellTreeOpenItemInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTreeOpenItemInitializer} */
 static $create__() {
  let $instance = new cellTreeOpenItemInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeOpenItemInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeOpenItemInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTreeOpenItemInitializer.$clinit();
  return CellTree__ResourcesImpl.f_cellTreeOpenItem__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTreeOpenItemInitializer.$clinit = () =>{};
  cellTreeOpenItemInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_.m_cellTreeOpenItemInitializer___$p_org_gwtproject_user_cellview_client_CellTree_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTreeOpenItemInitializer;
 }
 
 static $loadModules() {
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeOpenItemInitializer, 'org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$cellTreeOpenItemInitializer');

exports = cellTreeOpenItemInitializer; 
//# sourceMappingURL=CellTree_ResourcesImpl$cellTreeOpenItemInitializer.js.map