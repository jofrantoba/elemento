goog.module('org.gwtproject.user.client.ui.Tree.ImageAdapter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree.Resources$impl');
let Tree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');

class ImageAdapter extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractImagePrototype}*/
  this.f_treeClosed__org_gwtproject_user_client_ui_Tree_ImageAdapter_;
  /**@type {AbstractImagePrototype}*/
  this.f_treeLeaf__org_gwtproject_user_client_ui_Tree_ImageAdapter_;
  /**@type {AbstractImagePrototype}*/
  this.f_treeOpen__org_gwtproject_user_client_ui_Tree_ImageAdapter_;
 }
 //Factory method corresponding to constructor 'ImageAdapter()'.
 /** @return {!ImageAdapter} */
 static $create__() {
  ImageAdapter.$clinit();
  let $instance = new ImageAdapter();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree_ImageAdapter__();
  return $instance;
 }
 //Initialization from constructor 'ImageAdapter()'.
 
 $ctor__org_gwtproject_user_client_ui_Tree_ImageAdapter__() {
  this.$ctor__org_gwtproject_user_client_ui_Tree_ImageAdapter__org_gwtproject_user_client_ui_Tree_Resources(ImageAdapter.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_Tree_ImageAdapter_);
 }
 //Factory method corresponding to constructor 'ImageAdapter(Resources)'.
 /** @return {!ImageAdapter} */
 static $create__org_gwtproject_user_client_ui_Tree_Resources(/** Resources */ resources) {
  ImageAdapter.$clinit();
  let $instance = new ImageAdapter();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree_ImageAdapter__org_gwtproject_user_client_ui_Tree_Resources(resources);
  return $instance;
 }
 //Initialization from constructor 'ImageAdapter(Resources)'.
 
 $ctor__org_gwtproject_user_client_ui_Tree_ImageAdapter__org_gwtproject_user_client_ui_Tree_Resources(/** Resources */ resources) {
  this.$ctor__java_lang_Object__();
  this.f_treeClosed__org_gwtproject_user_client_ui_Tree_ImageAdapter_ = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(resources.m_treeClosed__());
  this.f_treeLeaf__org_gwtproject_user_client_ui_Tree_ImageAdapter_ = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(resources.m_treeLeaf__());
  this.f_treeOpen__org_gwtproject_user_client_ui_Tree_ImageAdapter_ = AbstractImagePrototype.m_create__org_gwtproject_resources_client_ImageResource(resources.m_treeOpen__());
 }
 /** @return {AbstractImagePrototype} */
 m_treeClosed__() {
  return this.f_treeClosed__org_gwtproject_user_client_ui_Tree_ImageAdapter_;
 }
 /** @return {AbstractImagePrototype} */
 m_treeLeaf__() {
  return this.f_treeLeaf__org_gwtproject_user_client_ui_Tree_ImageAdapter_;
 }
 /** @return {AbstractImagePrototype} */
 m_treeOpen__() {
  return this.f_treeOpen__org_gwtproject_user_client_ui_Tree_ImageAdapter_;
 }
 
 static $clinit() {
  ImageAdapter.$clinit = () =>{};
  ImageAdapter.$loadModules();
  j_l_Object.$clinit();
  ImageAdapter.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_Tree_ImageAdapter_ = Tree__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageAdapter;
 }
 
 static $loadModules() {
  AbstractImagePrototype = goog.module.get('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');
  Tree__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(ImageAdapter, 'org.gwtproject.user.client.ui.Tree$ImageAdapter');

/**@type {Resources}*/
ImageAdapter.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_Tree_ImageAdapter_;

exports = ImageAdapter; 
//# sourceMappingURL=Tree$ImageAdapter.js.map