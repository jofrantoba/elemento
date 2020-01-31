goog.module('org.gwtproject.user.cellview.client.CellList_ResourcesImpl.cellListSelectedBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellList__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');

class cellListSelectedBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellListSelectedBackgroundInitializer} */
 static $create__() {
  let $instance = new cellListSelectedBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_cellListSelectedBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_cellListSelectedBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellListSelectedBackgroundInitializer.$clinit();
  return CellList__ResourcesImpl.f_cellListSelectedBackground__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_;
 }
 
 static $clinit() {
  cellListSelectedBackgroundInitializer.$clinit = () =>{};
  cellListSelectedBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellList__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_.m_cellListSelectedBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellList_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellListSelectedBackgroundInitializer;
 }
 
 static $loadModules() {
  CellList__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellListSelectedBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellList_ResourcesImpl$cellListSelectedBackgroundInitializer');

exports = cellListSelectedBackgroundInitializer; 
//# sourceMappingURL=CellList_ResourcesImpl$cellListSelectedBackgroundInitializer.js.map