goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellBrowser__ResourcesImpl} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1_ = false;
 }
 /**
  * @param {CellBrowser__ResourcesImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl($outer_this);
  return $instance;
 }
 /**
  * @param {CellBrowser__ResourcesImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "cellBrowserStyle";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1_ = true;
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
  return (".MU1SOAB-h-b,.MU1SOAB-h-e{padding:8px;zoom:1}.MU1SOAB-h-d{background:#ffc}.MU1SOAB-h-g{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1.m_cellBrowserSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1.m_cellBrowserSelectedBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1.m_cellBrowserSelectedBackground__().m_getTop__() + "px")) + "  repeat;background-color:#628cd5;background-repeat:repeat-x;color:white;height:auto;overflow:hidden}.MU1SOAB-h-f{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1.m_cellBrowserOpenBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1.m_cellBrowserOpenBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_1.m_cellBrowserOpenBackground__().m_getTop__() + "px")) + "  repeat;background-color:#7b7b7b;background-repeat:repeat-x;color:white;height:auto;overflow:hidden}");
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserColumn__() {
  return "MU1SOAB-h-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserEvenItem__() {
  return "MU1SOAB-h-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserFirstColumn__() {
  return "MU1SOAB-h-c";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserKeyboardSelectedItem__() {
  return "MU1SOAB-h-d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserOddItem__() {
  return "MU1SOAB-h-e";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserOpenItem__() {
  return "MU1SOAB-h-f";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserSelectedItem__() {
  return "MU1SOAB-h-g";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellBrowserWidget__() {
  return "MU1SOAB-h-h";
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
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellBrowser_ResourcesImpl$1.js.map