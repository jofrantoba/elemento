goog.module('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl.cellTreeLoadingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');

class cellTreeLoadingInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTreeLoadingInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTreeLoadingInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeLoadingInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_cellTreeLoadingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellTreeLoadingInitializer.$clinit();
  return CellTree__BasicResourcesImpl.f_cellTreeLoading__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTreeLoadingInitializer.$clinit = () =>{};
  cellTreeLoadingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__BasicResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_.m_cellTreeLoadingInitializer___$p_org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTreeLoadingInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTree__BasicResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeLoadingInitializer, 'org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$cellTreeLoadingInitializer');

exports = cellTreeLoadingInitializer; 
//# sourceMappingURL=CellTree_BasicResourcesImpl$cellTreeLoadingInitializer.js.map