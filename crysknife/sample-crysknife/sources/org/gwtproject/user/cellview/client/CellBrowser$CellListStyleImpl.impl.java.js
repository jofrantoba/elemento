goog.module('org.gwtproject.user.cellview.client.CellBrowser.CellListStyleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellList.Style$impl');

let CellBrowser_Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');

/**
 * @implements {Style}
  */
class CellListStyleImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellBrowser_Style} */
  this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_;
 }
 /**
  * @param {CellBrowser_Style} delegate
  * @return {!CellListStyleImpl}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellBrowser_Style(delegate) {
  CellListStyleImpl.$clinit();
  let $instance = new CellListStyleImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl__org_gwtproject_user_cellview_client_CellBrowser_Style(delegate);
  return $instance;
 }
 /**
  * @param {CellBrowser_Style} delegate
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl__org_gwtproject_user_cellview_client_CellBrowser_Style(delegate) {
  this.$ctor__java_lang_Object__();
  this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_ = delegate;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellListEvenItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserEvenItem__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellListKeyboardSelectedItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserKeyboardSelectedItem__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellListOddItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserOddItem__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellListSelectedItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserSelectedItem__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_cellListWidget__() {
  return null;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_ensureInjected__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_getName__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_getText__();
 }
 /**
  * @public
  */
 static $clinit() {
  CellListStyleImpl.$clinit = () =>{};
  CellListStyleImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellListStyleImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CellListStyleImpl, 'org.gwtproject.user.cellview.client.CellBrowser$CellListStyleImpl');

Style.$markImplementor(CellListStyleImpl);

exports = CellListStyleImpl; 
//# sourceMappingURL=CellBrowser$CellListStyleImpl.js.map