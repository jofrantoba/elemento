goog.module('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl.cellTreeSelectedBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

class cellTreeSelectedBackgroundInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTreeSelectedBackgroundInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTreeSelectedBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeSelectedBackgroundInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeSelectedBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellTreeSelectedBackgroundInitializer.$clinit();
  return CellTree__ResourcesImpl.f_cellTreeSelectedBackground__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTreeSelectedBackgroundInitializer.$clinit = () =>{};
  cellTreeSelectedBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_.m_cellTreeSelectedBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellTree_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTreeSelectedBackgroundInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeSelectedBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$cellTreeSelectedBackgroundInitializer');

exports = cellTreeSelectedBackgroundInitializer; 
//# sourceMappingURL=CellTree_ResourcesImpl$cellTreeSelectedBackgroundInitializer.js.map