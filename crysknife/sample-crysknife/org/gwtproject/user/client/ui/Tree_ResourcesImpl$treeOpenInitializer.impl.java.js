goog.module('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeOpenInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Tree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');

class treeOpenInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!treeOpenInitializer}
  * @public
  */
 static $create__() {
  let $instance = new treeOpenInitializer();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl_treeOpenInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl_treeOpenInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  treeOpenInitializer.$clinit();
  return Tree__ResourcesImpl.f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  treeOpenInitializer.$clinit = () =>{};
  treeOpenInitializer.$loadModules();
  j_l_Object.$clinit();
  Tree__ResourcesImpl.f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.m_treeOpenInitializer___$p_org_gwtproject_user_client_ui_Tree_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof treeOpenInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Tree__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(treeOpenInitializer, 'org.gwtproject.user.client.ui.Tree_ResourcesImpl$treeOpenInitializer');

exports = treeOpenInitializer; 
//# sourceMappingURL=Tree_ResourcesImpl$treeOpenInitializer.js.map