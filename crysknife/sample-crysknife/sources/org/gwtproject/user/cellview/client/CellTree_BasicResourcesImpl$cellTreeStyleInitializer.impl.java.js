goog.module('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl.cellTreeStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let BasicStyle = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.BasicStyle$impl');
let CellTree__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');

class cellTreeStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTreeStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTreeStyleInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {BasicStyle}
  * @public
  */
 static m_get__() {
  cellTreeStyleInitializer.$clinit();
  return CellTree__BasicResourcesImpl.f_cellTreeStyle__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTreeStyleInitializer.$clinit = () =>{};
  cellTreeStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_.m_cellTreeStyleInitializer___$p_org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTreeStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTree__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeStyleInitializer, 'org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$cellTreeStyleInitializer');

exports = cellTreeStyleInitializer; 
//# sourceMappingURL=CellTree_BasicResourcesImpl$cellTreeStyleInitializer.js.map