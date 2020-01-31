goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableLoadingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

class cellTableLoadingInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableLoadingInitializer} */
 static $create__() {
  let $instance = new cellTableLoadingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableLoadingInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableLoadingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableLoadingInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableLoading__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTableLoadingInitializer.$clinit = () =>{};
  cellTableLoadingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableLoadingInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableLoadingInitializer;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableLoadingInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableLoadingInitializer');

exports = cellTableLoadingInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableLoadingInitializer.js.map