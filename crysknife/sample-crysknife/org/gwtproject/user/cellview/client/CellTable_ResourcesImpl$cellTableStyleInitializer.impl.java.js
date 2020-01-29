goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.cellTableStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable.Style$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

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
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_cellTableStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  cellTableStyleInitializer.$clinit();
  return CellTable__ResourcesImpl.f_cellTableStyle__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTableStyleInitializer.$clinit = () =>{};
  cellTableStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_.m_cellTableStyleInitializer___$p_org_gwtproject_user_cellview_client_CellTable_ResourcesImpl();
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
  CellTable__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableStyleInitializer, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$cellTableStyleInitializer');

exports = cellTableStyleInitializer; 
//# sourceMappingURL=CellTable_ResourcesImpl$cellTableStyleInitializer.js.map