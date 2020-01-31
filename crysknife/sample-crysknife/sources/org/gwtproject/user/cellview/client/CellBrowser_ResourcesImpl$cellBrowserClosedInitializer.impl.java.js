goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserClosedInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

class cellBrowserClosedInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!cellBrowserClosedInitializer} */
 static $create__() {
  let $instance = new cellBrowserClosedInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserClosedInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserClosedInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  cellBrowserClosedInitializer.$clinit();
  return CellBrowser__ResourcesImpl.f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
 }
 
 static $clinit() {
  cellBrowserClosedInitializer.$clinit = () =>{};
  cellBrowserClosedInitializer.$loadModules();
  j_l_Object.$clinit();
  CellBrowser__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.m_cellBrowserClosedInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof cellBrowserClosedInitializer;
 }
 
 static $loadModules() {
  CellBrowser__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellBrowserClosedInitializer, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$cellBrowserClosedInitializer');

exports = cellBrowserClosedInitializer; 
//# sourceMappingURL=CellBrowser_ResourcesImpl$cellBrowserClosedInitializer.js.map