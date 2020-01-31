goog.module('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.Tree.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let treeClosedInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeClosedInitializer$impl');
let treeLeafInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeLeafInitializer$impl');
let treeOpenInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeOpenInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class Tree__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Tree__ResourcesImpl} */
 static $create__() {
  Tree__ResourcesImpl.$clinit();
  let $instance = new Tree__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_Tree_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_treeClosedInitializer___$p_org_gwtproject_user_client_ui_Tree_ResourcesImpl() {
  Tree__ResourcesImpl.$f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("treeClosed", UriUtils.m_fromTrustedString__java_lang_String(Tree__ResourcesImpl.f_externalImage__org_gwtproject_user_client_ui_Tree_ResourcesImpl_), 0, 0, 16, 16, false, false);
 }
 /** @override @return {ImageResource} */
 m_treeClosed__() {
  return treeClosedInitializer.m_get__();
 }
 
 m_treeLeafInitializer___$p_org_gwtproject_user_client_ui_Tree_ResourcesImpl() {
  Tree__ResourcesImpl.$f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("treeLeaf", UriUtils.m_fromTrustedString__java_lang_String(Tree__ResourcesImpl.f_externalImage0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_), 0, 0, 16, 16, false, false);
 }
 /** @override @return {ImageResource} */
 m_treeLeaf__() {
  return treeLeafInitializer.m_get__();
 }
 
 m_treeOpenInitializer___$p_org_gwtproject_user_client_ui_Tree_ResourcesImpl() {
  Tree__ResourcesImpl.$f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("treeOpen", UriUtils.m_fromTrustedString__java_lang_String(Tree__ResourcesImpl.f_externalImage1__org_gwtproject_user_client_ui_Tree_ResourcesImpl_), 0, 0, 16, 16, false, false);
 }
 /** @override @return {ImageResource} */
 m_treeOpen__() {
  return treeOpenInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_treeClosed__(), this.m_treeLeaf__(), this.m_treeOpen__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_, null)) {
   Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.put("treeClosed", this.m_treeClosed__());
   Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.put("treeLeaf", this.m_treeLeaf__());
   Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.put("treeOpen", this.m_treeOpen__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {Tree__ResourcesImpl} */
 static get f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_() {
  return (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_(/** Tree__ResourcesImpl */ value) {
  (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_() {
  return (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_);
 }
 
 static set f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_(/** ImageResource */ value) {
  (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_() {
  return (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_);
 }
 
 static set f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_(/** ImageResource */ value) {
  (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_() {
  return (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_);
 }
 
 static set f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_(/** ImageResource */ value) {
  (Tree__ResourcesImpl.$clinit(), Tree__ResourcesImpl.$f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  Tree__ResourcesImpl.$clinit = () =>{};
  Tree__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  Tree__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = Tree__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tree__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  treeClosedInitializer = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeClosedInitializer$impl');
  treeLeafInitializer = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeLeafInitializer$impl');
  treeOpenInitializer = goog.module.get('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeOpenInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Tree__ResourcesImpl, 'org.gwtproject.user.client.ui.Tree_ResourcesImpl');

Resources.$markImplementor(Tree__ResourcesImpl);

/**@private {Tree__ResourcesImpl}*/
Tree__ResourcesImpl.$f__instance0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
Tree__ResourcesImpl.f_resourceMap__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
/**@const {?string}*/
Tree__ResourcesImpl.f_externalImage__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = "data:image/gif;base64,R0lGODlhEAAQAIQaAFhorldnrquz1mFxsvz9/vr6/M3Q2ZGbw5mixvb3+Gp5t2Nys77F4GRzs9ze4mt6uGV1s8/R2VZnrl5usFdortPV2/P09+3u8eXm6lZnrf///wAAzP///////////////yH5BAEAAB8ALAAAAAAQABAAAAVE4CeOZGmeaKquo5K974MuTKHdhDCcgOVvvoTkRLkYN8bL0ETBbJ5PTIaIqW6q0lPAYcVOTRNEpEI2HCYoCOzVYLnf7hAAOw==";
/**@const {?string}*/
Tree__ResourcesImpl.f_externalImage0__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = "data:image/gif;base64,R0lGODlhEAAQAJEAAP///wAAAP///wAAACH5BAEAAAIALAAAAAAQABAAAAIOlI+py+0Po5y02ouzPgUAOw==";
/**@const {?string}*/
Tree__ResourcesImpl.f_externalImage1__org_gwtproject_user_client_ui_Tree_ResourcesImpl_ = "data:image/gif;base64,R0lGODlhEAAQAIQaAFhorldnrquz1mFxsvz9/vr6/M3Q2ZGbw5mixvb3+Gp5t2Nys77F4GRzs9ze4mt6uGV1s8/R2VZnrl5usFdortPV2/P09+3u8eXm6lZnrf///wAAzP///////////////yH5BAEAAB8ALAAAAAAQABAAAAVD4CeOZGmeaKquo5K974MuTKHdhDCcgOVfvoTkRLkYj5ehiYLZOJ2YDBFDvVCjp4CjepWaJohIZWw4TFAQ2KvBarvbIQA7";
/**@private {ImageResource}*/
Tree__ResourcesImpl.$f_treeClosed__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
/**@private {ImageResource}*/
Tree__ResourcesImpl.$f_treeLeaf__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;
/**@private {ImageResource}*/
Tree__ResourcesImpl.$f_treeOpen__org_gwtproject_user_client_ui_Tree_ResourcesImpl_;

exports = Tree__ResourcesImpl; 
//# sourceMappingURL=Tree_ResourcesImpl.js.map