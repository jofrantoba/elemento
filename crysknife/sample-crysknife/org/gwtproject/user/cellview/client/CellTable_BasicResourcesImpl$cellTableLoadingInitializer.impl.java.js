goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.cellTableLoadingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

class cellTableLoadingInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTableLoadingInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTableLoadingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableLoadingInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableLoadingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellTableLoadingInitializer.$clinit();
  return CellTable__BasicResourcesImpl.f_cellTableLoading__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTableLoadingInitializer.$clinit = () =>{};
  cellTableLoadingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_.m_cellTableLoadingInitializer___$p_org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTableLoadingInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableLoadingInitializer, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$cellTableLoadingInitializer');

exports = cellTableLoadingInitializer; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$cellTableLoadingInitializer.js.map