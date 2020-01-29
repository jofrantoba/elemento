goog.module('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeLeafInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Tree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');

class treeLeafInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!treeLeafInitializer}
  * @public
  */
 static $create__() {
  let $instance = new treeLeafInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl_treeLeafInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl_treeLeafInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  treeLeafInitializer.$clinit();
  return Tree__ResourcesImpl.f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  treeLeafInitializer.$clinit = () =>{};
  treeLeafInitializer.$loadModules();
  j_l_Object.$clinit();
  Tree__ResourcesImpl.f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.m_treeLeafInitializer___$p_org_gwtproject_user_client_ui_Tree_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof treeLeafInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Tree__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(treeLeafInitializer, 'org.gwtproject.user.client.ui.Tree_ResourcesImpl$treeLeafInitializer');

exports = treeLeafInitializer; 
//# sourceMappingURL=Tree_ResourcesImpl$treeLeafInitializer.js.map