goog.module('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.DataGrid.Style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let DataGrid__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DataGrid__ResourcesImpl} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1_ = false;
 }
 /**
  * @param {DataGrid__ResourcesImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl($outer_this);
  return $instance;
 }
 /**
  * @param {DataGrid__ResourcesImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "dataGridStyle";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_cellview_client_DataGrid_ResourcesImpl_1_ = true;
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
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? ".MU1SOAB-a-g{border-top:2px solid #6f7277;padding:3px 15px;text-align:right;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap}.MU1SOAB-a-h{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:right;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap}.MU1SOAB-a-a{padding:2px 15px;overflow:hidden}.MU1SOAB-a-u{cursor:pointer;cursor:hand}.MU1SOAB-a-u:hover{color:#6c6b6b}.MU1SOAB-a-b{background:#fff}.MU1SOAB-a-c{border:2px solid #fff}.MU1SOAB-a-q{background:#f3f7fb}.MU1SOAB-a-r{border:2px solid #f3f7fb}.MU1SOAB-a-i{background:#eee}.MU1SOAB-a-j{border:2px solid #eee}.MU1SOAB-a-l{background:#ffc}.MU1SOAB-a-m{border:2px solid #ffc}.MU1SOAB-a-s{background:#628cd5;color:white;height:auto;overflow:auto}.MU1SOAB-a-t{border:2px solid #628cd5}.MU1SOAB-a-k{border:2px solid #d7dde8}" : ".MU1SOAB-a-g{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap}.MU1SOAB-a-h{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;white-space:nowrap}.MU1SOAB-a-a{padding:2px 15px;overflow:hidden}.MU1SOAB-a-u{cursor:pointer;cursor:hand}.MU1SOAB-a-u:hover{color:#6c6b6b}.MU1SOAB-a-b{background:#fff}.MU1SOAB-a-c{border:2px solid #fff}.MU1SOAB-a-q{background:#f3f7fb}.MU1SOAB-a-r{border:2px solid #f3f7fb}.MU1SOAB-a-i{background:#eee}.MU1SOAB-a-j{border:2px solid #eee}.MU1SOAB-a-l{background:#ffc}.MU1SOAB-a-m{border:2px solid #ffc}.MU1SOAB-a-s{background:#628cd5;color:white;height:auto;overflow:auto}.MU1SOAB-a-t{border:2px solid #628cd5}.MU1SOAB-a-k{border:2px solid #d7dde8}";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridCell__() {
  return "MU1SOAB-a-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridEvenRow__() {
  return "MU1SOAB-a-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridEvenRowCell__() {
  return "MU1SOAB-a-c";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridFirstColumn__() {
  return "MU1SOAB-a-d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridFirstColumnFooter__() {
  return "MU1SOAB-a-e";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridFirstColumnHeader__() {
  return "MU1SOAB-a-f";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridFooter__() {
  return "MU1SOAB-a-g";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridHeader__() {
  return "MU1SOAB-a-h";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridHoveredRow__() {
  return "MU1SOAB-a-i";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridHoveredRowCell__() {
  return "MU1SOAB-a-j";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridKeyboardSelectedCell__() {
  return "MU1SOAB-a-k";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridKeyboardSelectedRow__() {
  return "MU1SOAB-a-l";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridKeyboardSelectedRowCell__() {
  return "MU1SOAB-a-m";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridLastColumn__() {
  return "MU1SOAB-a-n";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridLastColumnFooter__() {
  return "MU1SOAB-a-o";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridLastColumnHeader__() {
  return "MU1SOAB-a-p";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridOddRow__() {
  return "MU1SOAB-a-q";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridOddRowCell__() {
  return "MU1SOAB-a-r";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridSelectedRow__() {
  return "MU1SOAB-a-s";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridSelectedRowCell__() {
  return "MU1SOAB-a-t";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridSortableHeader__() {
  return "MU1SOAB-a-u";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridSortedHeaderAscending__() {
  return "MU1SOAB-a-v";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridSortedHeaderDescending__() {
  return "MU1SOAB-a-w";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dataGridWidget__() {
  return "MU1SOAB-a-x";
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.DataGrid_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=DataGrid_ResourcesImpl$1.js.map