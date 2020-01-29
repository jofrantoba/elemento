goog.module('org.gwtproject.user.cellview.client.CellList_ResourcesImpl.cellListStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Style$impl');
let CellList__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');

class cellListStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellListStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellListStyleInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_cellListStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_cellListStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  cellListStyleInitializer.$clinit();
  return CellList__ResourcesImpl.f_cellListStyle__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellListStyleInitializer.$clinit = () =>{};
  cellListStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CellList__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_.m_cellListStyleInitializer___$p_org_gwtproject_user_cellview_client_CellList_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellListStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellList__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellListStyleInitializer, 'org.gwtproject.user.cellview.client.CellList_ResourcesImpl$cellListStyleInitializer');

exports = cellListStyleInitializer; 
//# sourceMappingURL=CellList_ResourcesImpl$cellListStyleInitializer.js.map