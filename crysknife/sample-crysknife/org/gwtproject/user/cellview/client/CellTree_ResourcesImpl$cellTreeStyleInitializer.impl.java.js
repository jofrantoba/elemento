goog.module('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl.cellTreeStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.Style$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

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
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_cellTreeStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  cellTreeStyleInitializer.$clinit();
  return CellTree__ResourcesImpl.f_cellTreeStyle__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellTreeStyleInitializer.$clinit = () =>{};
  cellTreeStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CellTree__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_.m_cellTreeStyleInitializer___$p_org_gwtproject_user_cellview_client_CellTree_ResourcesImpl();
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
  CellTree__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellTreeStyleInitializer, 'org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$cellTreeStyleInitializer');

exports = cellTreeStyleInitializer; 
//# sourceMappingURL=CellTree_ResourcesImpl$cellTreeStyleInitializer.js.map