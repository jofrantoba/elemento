goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableSelectedBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

class cellTableSelectedBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellTableSelectedBackgroundInitializer} */
 static $create__() {
  let $instance = new cellTableSelectedBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableSelectedBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableSelectedBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellTableSelectedBackgroundInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableSelectedBackground__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 
 static $clinit() {
  cellTableSelectedBackgroundInitializer.$clinit = () =>{};
  cellTableSelectedBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableSelectedBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellTableSelectedBackgroundInitializer;
 }
 
 static $loadModules() {
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableSelectedBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableSelectedBackgroundInitializer');

exports = cellTableSelectedBackgroundInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableSelectedBackgroundInitializer.js.map