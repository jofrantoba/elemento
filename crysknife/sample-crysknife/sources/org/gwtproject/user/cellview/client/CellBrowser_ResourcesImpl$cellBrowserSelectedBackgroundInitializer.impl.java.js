goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserSelectedBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

class cellBrowserSelectedBackgroundInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellBrowserSelectedBackgroundInitializer} */
 static $create__() {
  let $instance = new cellBrowserSelectedBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserSelectedBackgroundInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserSelectedBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellBrowserSelectedBackgroundInitializer.$clinit();
  return CellBrowser__ResourcesImpl.f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
 }
 
 static $clinit() {
  cellBrowserSelectedBackgroundInitializer.$clinit = () =>{};
  cellBrowserSelectedBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellBrowser__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.m_cellBrowserSelectedBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellBrowserSelectedBackgroundInitializer;
 }
 
 static $loadModules() {
  CellBrowser__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellBrowserSelectedBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$cellBrowserSelectedBackgroundInitializer');

exports = cellBrowserSelectedBackgroundInitializer; 
//# sourceMappingURL=CellBrowser_ResourcesImpl$cellBrowserSelectedBackgroundInitializer.js.map