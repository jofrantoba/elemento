goog.module('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeClosedInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Tree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');

class treeClosedInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!treeClosedInitializer}
  * @public
  */
 static $create__() {
  let $instance = new treeClosedInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl_treeClosedInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl_treeClosedInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  treeClosedInitializer.$clinit();
  return Tree__ResourcesImpl.f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  treeClosedInitializer.$clinit = () =>{};
  treeClosedInitializer.$loadModules();
  j_l_Object.$clinit();
  Tree__ResourcesImpl.f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.m_treeClosedInitializer___$p_org_gwtproject_user_client_ui_Tree_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof treeClosedInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Tree__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(treeClosedInitializer, 'org.gwtproject.user.client.ui.Tree_ResourcesImpl$treeClosedInitializer');

exports = treeClosedInitializer; 
//# sourceMappingURL=Tree_ResourcesImpl$treeClosedInitializer.js.map