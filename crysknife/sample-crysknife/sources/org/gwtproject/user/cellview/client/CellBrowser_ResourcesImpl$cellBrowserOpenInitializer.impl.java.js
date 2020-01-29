goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserOpenInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

class cellBrowserOpenInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellBrowserOpenInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellBrowserOpenInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserOpenInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserOpenInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellBrowserOpenInitializer.$clinit();
  return CellBrowser__ResourcesImpl.f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellBrowserOpenInitializer.$clinit = () =>{};
  cellBrowserOpenInitializer.$loadModules();
  j_l_Object.$clinit();
  CellBrowser__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.m_cellBrowserOpenInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellBrowserOpenInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellBrowser__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellBrowserOpenInitializer, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$cellBrowserOpenInitializer');

exports = cellBrowserOpenInitializer; 
//# sourceMappingURL=CellBrowser_ResourcesImpl$cellBrowserOpenInitializer.js.map