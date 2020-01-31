goog.module('org.gwtproject.user.cellview.client.CellBrowser.CellListStyleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.cellview.client.CellList.Style$impl');

let CellBrowser_Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');

/**
 * @implements {Style}
  */
class CellListStyleImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CellBrowser_Style}*/
  this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_;
 }
 /** @return {!CellListStyleImpl} */
 static $create__org_gwtproject_user_cellview_client_CellBrowser_Style(/** CellBrowser_Style */ delegate) {
  CellListStyleImpl.$clinit();
  let $instance = new CellListStyleImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl__org_gwtproject_user_cellview_client_CellBrowser_Style(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl__org_gwtproject_user_cellview_client_CellBrowser_Style(/** CellBrowser_Style */ delegate) {
  this.$ctor__java_lang_Object__();
  this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_ = delegate;
 }
 /** @override @return {?string} */
 m_cellListEvenItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserEvenItem__();
 }
 /** @override @return {?string} */
 m_cellListKeyboardSelectedItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserKeyboardSelectedItem__();
 }
 /** @override @return {?string} */
 m_cellListOddItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserOddItem__();
 }
 /** @override @return {?string} */
 m_cellListSelectedItem__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_cellBrowserSelectedItem__();
 }
 /** @override @return {?string} */
 m_cellListWidget__() {
  return null;
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_ensureInjected__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_getName__();
 }
 /** @override @return {?string} */
 m_getText__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListStyleImpl_.m_getText__();
 }
 
 static $clinit() {
  CellListStyleImpl.$clinit = () =>{};
  CellListStyleImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellListStyleImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CellListStyleImpl, 'org.gwtproject.user.cellview.client.CellBrowser$CellListStyleImpl');

Style.$markImplementor(CellListStyleImpl);

exports = CellListStyleImpl; 
//# sourceMappingURL=CellBrowser$CellListStyleImpl.js.map