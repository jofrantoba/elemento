goog.module('org.gwtproject.user.cellview.client.CellBrowser.CellListResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.CellList.Resources$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellListStyleImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.CellListStyleImpl$impl');
let CellBrowser_Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Resources$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Style$impl');

/**
 * @implements {Resources}
  */
class CellListResourcesImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CellBrowser_Resources} */
  this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl_;
  /** @public {CellListStyleImpl} */
  this.f_style__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl_;
 }
 /**
  * @param {CellBrowser_Resources} delegate
  * @return {!CellListResourcesImpl}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_CellBrowser_Resources(delegate) {
  CellListResourcesImpl.$clinit();
  let $instance = new CellListResourcesImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl__org_gwtproject_user_cellview_client_CellBrowser_Resources(delegate);
  return $instance;
 }
 /**
  * @param {CellBrowser_Resources} delegate
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl__org_gwtproject_user_cellview_client_CellBrowser_Resources(delegate) {
  this.$ctor__java_lang_Object__();
  this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl_ = delegate;
  this.f_style__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl_ = CellListStyleImpl.$create__org_gwtproject_user_cellview_client_CellBrowser_Style(delegate.m_cellBrowserStyle__());
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_cellListSelectedBackground__() {
  return this.f_delegate__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl_.m_cellBrowserSelectedBackground__();
 }
 /**
  * @override
  * @return {Style}
  * @public
  */
 m_cellListStyle__() {
  return this.f_style__org_gwtproject_user_cellview_client_CellBrowser_CellListResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  CellListResourcesImpl.$clinit = () =>{};
  CellListResourcesImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellListResourcesImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellListStyleImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser.CellListStyleImpl$impl');
 }
 
}
$Util.$setClassMetadata(CellListResourcesImpl, 'org.gwtproject.user.cellview.client.CellBrowser$CellListResourcesImpl');

Resources.$markImplementor(CellListResourcesImpl);

exports = CellListResourcesImpl; 
//# sourceMappingURL=CellBrowser$CellListResourcesImpl.js.map