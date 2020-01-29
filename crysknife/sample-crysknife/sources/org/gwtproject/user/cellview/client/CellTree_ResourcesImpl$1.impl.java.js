goog.module('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellTree.Style$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let CellTree__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellTree__ResourcesImpl} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1_ = false;
 }
 /**
  * @param {CellTree__ResourcesImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl($outer_this);
  return $instance;
 }
 /**
  * @param {CellTree__ResourcesImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "cellTreeStyle";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? (".MU1SOAB-f-a{padding-right:16px;font-style:italic}.MU1SOAB-f-b{padding-top:4px;padding-bottom:4px;cursor:hand;cursor:pointer;zoom:1}.MU1SOAB-f-d{zoom:1}.MU1SOAB-f-e{padding-right:3px;padding-left:3px;outline:none}.MU1SOAB-f-j{font-weight:bold;color:#4b4a4a;margin-top:20px;padding:3px 10px 3px 13px!important}.MU1SOAB-f-l{border-bottom:1px solid #6f7277;padding-bottom:1px}.MU1SOAB-f-f{background-color:#ffc;outline:none}.MU1SOAB-f-h{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1.m_cellTreeSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1.m_cellTreeSelectedBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1.m_cellTreeSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:visible}.MU1SOAB-f-i{padding-right:16px;outline:none}") : (".MU1SOAB-f-a{padding-left:16px;font-style:italic}.MU1SOAB-f-b{padding-top:4px;padding-bottom:4px;cursor:hand;cursor:pointer;zoom:1}.MU1SOAB-f-d{zoom:1}.MU1SOAB-f-e{padding-left:3px;padding-right:3px;outline:none}.MU1SOAB-f-j{font-weight:bold;color:#4b4a4a;margin-top:20px;padding:3px 13px 3px 10px!important}.MU1SOAB-f-l{border-bottom:1px solid #6f7277;padding-bottom:1px}.MU1SOAB-f-f{background-color:#ffc;outline:none}.MU1SOAB-f-h{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1.m_cellTreeSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1.m_cellTreeSelectedBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTree_ResourcesImpl_1.m_cellTreeSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:visible}.MU1SOAB-f-i{padding-left:16px;outline:none}");
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeEmptyMessage__() {
  return "MU1SOAB-f-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeItem__() {
  return "MU1SOAB-f-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeItemImage__() {
  return "MU1SOAB-f-c";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeItemImageValue__() {
  return "MU1SOAB-f-d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeItemValue__() {
  return "MU1SOAB-f-e";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeKeyboardSelectedItem__() {
  return "MU1SOAB-f-f";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeOpenItem__() {
  return "MU1SOAB-f-g";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeSelectedItem__() {
  return "MU1SOAB-f-h";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeShowMoreButton__() {
  return "MU1SOAB-f-i";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeTopItem__() {
  return "MU1SOAB-f-j";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeTopItemImage__() {
  return "MU1SOAB-f-k";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeTopItemImageValue__() {
  return "MU1SOAB-f-l";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTreeWidget__() {
  return "MU1SOAB-f-m";
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellTree_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellTree_ResourcesImpl$1.js.map