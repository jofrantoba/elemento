goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.cellTableFooterBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

class cellTableFooterBackgroundInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTableFooterBackgroundInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTableFooterBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableFooterBackgroundInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_cellTableFooterBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellTableFooterBackgroundInitializer.$clinit();
  return CellTable__BasicResourcesImpl.f_cellTableFooterBackground__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTableFooterBackgroundInitializer.$clinit = () =>{};
  cellTableFooterBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTable__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_.m_cellTableFooterBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTableFooterBackgroundInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTable__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTableFooterBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$cellTableFooterBackgroundInitializer');

exports = cellTableFooterBackgroundInitializer; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$cellTableFooterBackgroundInitializer.js.map