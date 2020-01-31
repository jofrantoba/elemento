goog.module('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BasicStyle = goog.require('org.gwtproject.user.cellview.client.CellTree.BasicStyle$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let CellTree__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$impl');

/**
 * @implements {BasicStyle}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CellTree__BasicResourcesImpl}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl(/** CellTree__BasicResourcesImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl(/** CellTree__BasicResourcesImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "cellTreeStyle";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? (".MU1SOAB-e-a{padding-right:16px;font-style:italic}.MU1SOAB-e-b{padding-top:4px;padding-bottom:4px;cursor:hand;cursor:pointer;zoom:1}.MU1SOAB-e-d{zoom:1}.MU1SOAB-e-e{padding-right:3px;padding-left:3px;outline:none}.MU1SOAB-e-f{background-color:#ffc;outline:none}.MU1SOAB-e-h{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1.m_cellTreeSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1.m_cellTreeSelectedBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1.m_cellTreeSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:visible}.MU1SOAB-e-i{padding-right:16px;outline:none}") : (".MU1SOAB-e-a{padding-left:16px;font-style:italic}.MU1SOAB-e-b{padding-top:4px;padding-bottom:4px;cursor:hand;cursor:pointer;zoom:1}.MU1SOAB-e-d{zoom:1}.MU1SOAB-e-e{padding-left:3px;padding-right:3px;outline:none}.MU1SOAB-e-f{background-color:#ffc;outline:none}.MU1SOAB-e-h{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1.m_cellTreeSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1.m_cellTreeSelectedBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_BasicResourcesImpl_1.m_cellTreeSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:visible}.MU1SOAB-e-i{padding-left:16px;outline:none}");
 }
 /** @override @return {?string} */
 m_cellTreeEmptyMessage__() {
  return "MU1SOAB-e-a";
 }
 /** @override @return {?string} */
 m_cellTreeItem__() {
  return "MU1SOAB-e-b";
 }
 /** @override @return {?string} */
 m_cellTreeItemImage__() {
  return "MU1SOAB-e-c";
 }
 /** @override @return {?string} */
 m_cellTreeItemImageValue__() {
  return "MU1SOAB-e-d";
 }
 /** @override @return {?string} */
 m_cellTreeItemValue__() {
  return "MU1SOAB-e-e";
 }
 /** @override @return {?string} */
 m_cellTreeKeyboardSelectedItem__() {
  return "MU1SOAB-e-f";
 }
 /** @override @return {?string} */
 m_cellTreeOpenItem__() {
  return "MU1SOAB-e-g";
 }
 /** @override @return {?string} */
 m_cellTreeSelectedItem__() {
  return "MU1SOAB-e-h";
 }
 /** @override @return {?string} */
 m_cellTreeShowMoreButton__() {
  return "MU1SOAB-e-i";
 }
 /** @override @return {?string} */
 m_cellTreeTopItem__() {
  return "MU1SOAB-e-j";
 }
 /** @override @return {?string} */
 m_cellTreeTopItemImage__() {
  return "MU1SOAB-e-k";
 }
 /** @override @return {?string} */
 m_cellTreeTopItemImageValue__() {
  return "MU1SOAB-e-l";
 }
 /** @override @return {?string} */
 m_cellTreeWidget__() {
  return "MU1SOAB-e-m";
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellTree_BasicResourcesImpl$1');

BasicStyle.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellTree_BasicResourcesImpl$1.js.map