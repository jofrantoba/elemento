goog.module('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellTable.Style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let CellTable__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellTable__ResourcesImpl} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1_ = false;
 }
 /**
  * @param {CellTable__ResourcesImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl($outer_this);
  return $instance;
 }
 /**
  * @param {CellTable__ResourcesImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1 = $outer_this;
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
  if (!this.f_injected__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_CellTable_ResourcesImpl_1_ = true;
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
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? ".MU1SOAB-d-g{border-top:2px solid #6f7277;padding:3px 15px;text-align:right;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-d-h{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:right;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-d-a{padding:2px 15px;overflow:hidden}.MU1SOAB-d-v{cursor:pointer;cursor:hand}.MU1SOAB-d-v:hover{color:#6c6b6b}.MU1SOAB-d-b{background:#fff}.MU1SOAB-d-c{border:2px solid #fff}.MU1SOAB-d-r{background:#f3f7fb}.MU1SOAB-d-s{border:2px solid #f3f7fb}.MU1SOAB-d-i{background:#eee}.MU1SOAB-d-j{border:2px solid #eee}.MU1SOAB-d-l{background:#ffc}.MU1SOAB-d-m{border:2px solid #ffc}.MU1SOAB-d-t{background:#628cd5;color:white;height:auto;overflow:auto}.MU1SOAB-d-u{border:2px solid #628cd5}.MU1SOAB-d-k{border:2px solid #d7dde8}.MU1SOAB-d-q{margin:30px}" : ".MU1SOAB-d-g{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-d-h{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden}.MU1SOAB-d-a{padding:2px 15px;overflow:hidden}.MU1SOAB-d-v{cursor:pointer;cursor:hand}.MU1SOAB-d-v:hover{color:#6c6b6b}.MU1SOAB-d-b{background:#fff}.MU1SOAB-d-c{border:2px solid #fff}.MU1SOAB-d-r{background:#f3f7fb}.MU1SOAB-d-s{border:2px solid #f3f7fb}.MU1SOAB-d-i{background:#eee}.MU1SOAB-d-j{border:2px solid #eee}.MU1SOAB-d-l{background:#ffc}.MU1SOAB-d-m{border:2px solid #ffc}.MU1SOAB-d-t{background:#628cd5;color:white;height:auto;overflow:auto}.MU1SOAB-d-u{border:2px solid #628cd5}.MU1SOAB-d-k{border:2px solid #d7dde8}.MU1SOAB-d-q{margin:30px}";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableCell__() {
  return "MU1SOAB-d-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableEvenRow__() {
  return "MU1SOAB-d-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableEvenRowCell__() {
  return "MU1SOAB-d-c";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumn__() {
  return "MU1SOAB-d-d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumnFooter__() {
  return "MU1SOAB-d-e";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFirstColumnHeader__() {
  return "MU1SOAB-d-f";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableFooter__() {
  return "MU1SOAB-d-g";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableHeader__() {
  return "MU1SOAB-d-h";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableHoveredRow__() {
  return "MU1SOAB-d-i";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableHoveredRowCell__() {
  return "MU1SOAB-d-j";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedCell__() {
  return "MU1SOAB-d-k";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedRow__() {
  return "MU1SOAB-d-l";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableKeyboardSelectedRowCell__() {
  return "MU1SOAB-d-m";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLastColumn__() {
  return "MU1SOAB-d-n";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLastColumnFooter__() {
  return "MU1SOAB-d-o";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLastColumnHeader__() {
  return "MU1SOAB-d-p";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableLoading__() {
  return "MU1SOAB-d-q";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableOddRow__() {
  return "MU1SOAB-d-r";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableOddRowCell__() {
  return "MU1SOAB-d-s";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSelectedRow__() {
  return "MU1SOAB-d-t";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSelectedRowCell__() {
  return "MU1SOAB-d-u";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSortableHeader__() {
  return "MU1SOAB-d-v";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSortedHeaderAscending__() {
  return "MU1SOAB-d-w";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableSortedHeaderDescending__() {
  return "MU1SOAB-d-x";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellTableWidget__() {
  return "MU1SOAB-d-y";
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
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellTable_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellTable_ResourcesImpl$1.js.map