goog.module('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl.cellTreeLoadingInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

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
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeLoadingInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeLoadingInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellTreeLoadingInitializer.$clinit();
  return CellTree__ResourcesImpl.f_cellTreeLoading__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTreeLoadingInitializer.$clinit = () =>{};
  cellTreeLoadingInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_.m_cellTreeLoadingInitializer___$p_org_gwtproject_user_cellview_client_CellTree_ResourcesImpl();
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
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeLoadingInitializer, 'org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$cellTreeLoadingInitializer');

exports = cellTreeLoadingInitializer; 
//# sourceMappingURL=CellTree_ResourcesImpl$cellTreeLoadingInitializer.js.map