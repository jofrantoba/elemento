goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserOpenBackgroundInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

class cellBrowserOpenBackgroundInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellBrowserOpenBackgroundInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellBrowserOpenBackgroundInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserOpenBackgroundInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserOpenBackgroundInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  cellBrowserOpenBackgroundInitializer.$clinit();
  return CellBrowser__ResourcesImpl.f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellBrowserOpenBackgroundInitializer.$clinit = () =>{};
  cellBrowserOpenBackgroundInitializer.$loadModules();
  j_l_Object.$clinit();
  CellBrowser__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.m_cellBrowserOpenBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellBrowserOpenBackgroundInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellBrowser__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellBrowserOpenBackgroundInitializer, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$cellBrowserOpenBackgroundInitializer');

exports = cellBrowserOpenBackgroundInitializer; 
//# sourceMappingURL=CellBrowser_ResourcesImpl$cellBrowserOpenBackgroundInitializer.js.map