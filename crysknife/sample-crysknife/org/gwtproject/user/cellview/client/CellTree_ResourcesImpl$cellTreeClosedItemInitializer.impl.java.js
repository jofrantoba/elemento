goog.module('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl.cellTreeClosedItemInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

class cellTreeClosedItemInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellTreeClosedItemInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellTreeClosedItemInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeClosedItemInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeClosedItemInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellTreeClosedItemInitializer.$clinit();
  return CellTree__ResourcesImpl.f_cellTreeClosedItem__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTreeClosedItemInitializer.$clinit = () =>{};
  cellTreeClosedItemInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_.m_cellTreeClosedItemInitializer___$p_org_gwtproject_user_cellview_client_CellTree_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellTreeClosedItemInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeClosedItemInitializer, 'org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$cellTreeClosedItemInitializer');

exports = cellTreeClosedItemInitializer; 
//# sourceMappingURL=CellTree_ResourcesImpl$cellTreeClosedItemInitializer.js.map