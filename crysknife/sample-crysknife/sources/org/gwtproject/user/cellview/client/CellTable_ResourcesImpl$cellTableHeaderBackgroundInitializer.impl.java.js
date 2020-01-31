goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableHeaderBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

class cellTableHeaderBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableHeaderBackgroundInitializer} */
 static $create__() {
  let $instance = new cellTableHeaderBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableHeaderBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableHeaderBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableHeaderBackgroundInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableHeaderBackground__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTableHeaderBackgroundInitializer.$clinit = () =>{};
  cellTableHeaderBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableHeaderBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableHeaderBackgroundInitializer;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableHeaderBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableHeaderBackgroundInitializer');

exports = cellTableHeaderBackgroundInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableHeaderBackgroundInitializer.js.map