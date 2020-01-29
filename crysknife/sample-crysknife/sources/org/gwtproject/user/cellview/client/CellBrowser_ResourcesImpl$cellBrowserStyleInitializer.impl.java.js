goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');
let CellBrowser__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

class cellBrowserStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!cellBrowserStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new cellBrowserStyleInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_cellBrowserStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  cellBrowserStyleInitializer.$clinit();
  return CellBrowser__ResourcesImpl.f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  cellBrowserStyleInitializer.$clinit = () =>{};
  cellBrowserStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  CellBrowser__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.m_cellBrowserStyleInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof cellBrowserStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellBrowser__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(cellBrowserStyleInitializer, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$cellBrowserStyleInitializer');

exports = cellBrowserStyleInitializer; 
//# sourceMappingURL=CellBrowser_ResourcesImpl$cellBrowserStyleInitializer.js.map