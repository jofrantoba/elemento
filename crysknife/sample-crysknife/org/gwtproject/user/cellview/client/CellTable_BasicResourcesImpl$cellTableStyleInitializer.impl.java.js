goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.cellTableStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BasicStyle = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.BasicStyle$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

class cellTableStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTableStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTableStyleInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {BasicStyle}
  * @public
  */
 static m_get__() {
  cellTableStyleInitializer.$clinit();
  return CellTable__BasicResourcesImpl.f_cellTableStyle__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTableStyleInitializer.$clinit = () =>{};
  cellTableStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_.m_cellTableStyleInitializer___$p_org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTableStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableStyleInitializer, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$cellTableStyleInitializer');

exports = cellTableStyleInitializer; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$cellTableStyleInitializer.js.map