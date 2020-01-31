goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.cellTableHeaderBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

class cellTableHeaderBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableHeaderBackgroundInitializer} */
 static $create__() {
  let $instance = new cellTableHeaderBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableHeaderBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableHeaderBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableHeaderBackgroundInitializer.$clinit();
  return CellTable__BasicResourcesImpl.f_cellTableHeaderBackground__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_;
 }
 
 static $clinit() {
  cellTableHeaderBackgroundInitializer.$clinit = () =>{};
  cellTableHeaderBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_.m_cellTableHeaderBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableHeaderBackgroundInitializer;
 }
 
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableHeaderBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$cellTableHeaderBackgroundInitializer');

exports = cellTableHeaderBackgroundInitializer; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$cellTableHeaderBackgroundInitializer.js.map