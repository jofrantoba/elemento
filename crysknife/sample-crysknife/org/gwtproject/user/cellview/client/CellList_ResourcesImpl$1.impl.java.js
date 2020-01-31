goog.module('org.gwtproject.user.cellview.client.CellList_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellList.Style$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let CellList__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList_ResourcesImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CellList__ResourcesImpl}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_cellview_client_CellList_ResourcesImpl(/** CellList__ResourcesImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellList_ResourcesImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellList_ResourcesImpl(/** CellList__ResourcesImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "cellListStyle";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return (".MU1SOAB-g-a,.MU1SOAB-g-c{cursor:pointer;zoom:1}.MU1SOAB-g-b{background:#ffc}.MU1SOAB-g-d{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1.m_cellListSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1.m_cellListSelectedBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellList_ResourcesImpl_1.m_cellListSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:visible}");
 }
 /** @override @return {?string} */
 m_cellListEvenItem__() {
  return "MU1SOAB-g-a";
 }
 /** @override @return {?string} */
 m_cellListKeyboardSelectedItem__() {
  return "MU1SOAB-g-b";
 }
 /** @override @return {?string} */
 m_cellListOddItem__() {
  return "MU1SOAB-g-c";
 }
 /** @override @return {?string} */
 m_cellListSelectedItem__() {
  return "MU1SOAB-g-d";
 }
 /** @override @return {?string} */
 m_cellListWidget__() {
  return "MU1SOAB-g-e";
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
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellList_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellList_ResourcesImpl$1.js.map