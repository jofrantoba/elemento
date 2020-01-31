goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableFooterBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

class cellTableFooterBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableFooterBackgroundInitializer} */
 static $create__() {
  let $instance = new cellTableFooterBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableFooterBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableFooterBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableFooterBackgroundInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableFooterBackground__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTableFooterBackgroundInitializer.$clinit = () =>{};
  cellTableFooterBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableFooterBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableFooterBackgroundInitializer;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableFooterBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableFooterBackgroundInitializer');

exports = cellTableFooterBackgroundInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableFooterBackgroundInitializer.js.map