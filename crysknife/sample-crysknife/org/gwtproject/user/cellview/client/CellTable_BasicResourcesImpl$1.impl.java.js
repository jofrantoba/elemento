goog.module('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BasicStyle = goog.require('org.gwtproject.user.cellview.client.CellTable.BasicStyle$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let CellTable__BasicResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$impl');

/**
 * @implements {BasicStyle}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellTable__BasicResourcesImpl} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1_ = false;
 }
 /**
  * @param {CellTable__BasicResourcesImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl($outer_this);
  return $instance;
 }
 /**
  * @param {CellTable__BasicResourcesImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "cellTableStyle";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1_ = true;
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
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? j_l_String.m_valueOf__java_lang_Object((".MU1SOAB-c-g{height:" + j_l_String.m_valueOf__java_lang_Object((this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getHeight__() + "px")) + ";background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#b4d0f8;border-top:1px solid #88b0f2;border-right:1px solid #88b0f2;border-left:1px solid #eef;padding:0 10px;text-align:right;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-c-h{height:" + j_l_String.m_valueOf__java_lang_Object((this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getHeight__() + "px")) + ";background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#b4d0f8;border-bottom:1px solid #88b0f2;border-right:1px solid #88b0f2;border-left:1px solid #eef;padding:0 10px;text-align:right;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-c-a{padding:4px 10px;overflow:hidden}.MU1SOAB-c-e,.MU1SOAB-c-f{border-right:0}.MU1SOAB-c-v{cursor:pointer;cursor:hand}.MU1SOAB-c-v:hover{color:#6c6b6b}.MU1SOAB-c-b{background:#fff}.MU1SOAB-c-r{background:#eef4fb}.MU1SOAB-c-i{background:#eee}.MU1SOAB-c-l{background:#ffc}.MU1SOAB-c-t{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableSelectedBackground__().m_getLeft__() + "px")) + " ")) + j_l_String.m_valueOf__java_lang_Object((j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:auto}.MU1SOAB-c-u{background:#628cd5}.MU1SOAB-c-k{background:#d7dde8}.MU1SOAB-c-q{margin:30px}")) : j_l_String.m_valueOf__java_lang_Object((".MU1SOAB-c-g{height:" + j_l_String.m_valueOf__java_lang_Object((this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getHeight__() + "px")) + ";background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableFooterBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#b4d0f8;border-top:1px solid #88b0f2;border-left:1px solid #88b0f2;border-right:1px solid #eef;padding:0 10px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-c-h{height:" + j_l_String.m_valueOf__java_lang_Object((this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getHeight__() + "px")) + ";background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getLeft__() + "px")) + " " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableHeaderBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#b4d0f8;border-bottom:1px solid #88b0f2;border-left:1px solid #88b0f2;border-right:1px solid #eef;padding:0 10px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-c-a{padding:4px 10px;overflow:hidden}.MU1SOAB-c-e,.MU1SOAB-c-f{border-left:0}.MU1SOAB-c-v{cursor:pointer;cursor:hand}.MU1SOAB-c-v:hover{color:#6c6b6b}.MU1SOAB-c-b{background:#fff}.MU1SOAB-c-r{background:#eef4fb}.MU1SOAB-c-i{background:#eee}.MU1SOAB-c-l{background:#ffc}.MU1SOAB-c-t{background:url(" + j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableSelectedBackground__().m_getSafeUri__().m_asString__()) + ") " + j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableSelectedBackground__().m_getLeft__() + "px")) + " ")) + j_l_String.m_valueOf__java_lang_Object((j_l_String.m_valueOf__java_lang_Object(("-" + this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_BasicResourcesImpl_1.m_cellTableSelectedBackground__().m_getTop__() + "px")) + "  repeat-x;background-color:#628cd5;color:white;height:auto;overflow:auto}.MU1SOAB-c-u{background:#628cd5}.MU1SOAB-c-k{background:#d7dde8}.MU1SOAB-c-q{margin:30px}"));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableCell__() {
  return "MU1SOAB-c-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableEvenRow__() {
  return "MU1SOAB-c-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableEvenRowCell__() {
  return "MU1SOAB-c-c";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumn__() {
  return "MU1SOAB-c-d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumnFooter__() {
  return "MU1SOAB-c-e";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumnHeader__() {
  return "MU1SOAB-c-f";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFooter__() {
  return "MU1SOAB-c-g";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableHeader__() {
  return "MU1SOAB-c-h";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableHoveredRow__() {
  return "MU1SOAB-c-i";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableHoveredRowCell__() {
  return "MU1SOAB-c-j";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedCell__() {
  return "MU1SOAB-c-k";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedRow__() {
  return "MU1SOAB-c-l";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedRowCell__() {
  return "MU1SOAB-c-m";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLastColumn__() {
  return "MU1SOAB-c-n";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLastColumnFooter__() {
  return "MU1SOAB-c-o";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLastColumnHeader__() {
  return "MU1SOAB-c-p";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLoading__() {
  return "MU1SOAB-c-q";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableOddRow__() {
  return "MU1SOAB-c-r";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableOddRowCell__() {
  return "MU1SOAB-c-s";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSelectedRow__() {
  return "MU1SOAB-c-t";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSelectedRowCell__() {
  return "MU1SOAB-c-u";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSortableHeader__() {
  return "MU1SOAB-c-v";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSortedHeaderAscending__() {
  return "MU1SOAB-c-w";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSortedHeaderDescending__() {
  return "MU1SOAB-c-x";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableWidget__() {
  return "MU1SOAB-c-y";
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellTable_BasicResourcesImpl$1');

BasicStyle.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellTable_BasicResourcesImpl$1.js.map