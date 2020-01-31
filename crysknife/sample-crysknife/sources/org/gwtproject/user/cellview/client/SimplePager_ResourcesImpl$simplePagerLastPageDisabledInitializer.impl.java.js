goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerLastPageDisabledInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerLastPageDisabledInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!simplePagerLastPageDisabledInitializer} */
 static $create__() {
  let $instance = new simplePagerLastPageDisabledInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerLastPageDisabledInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerLastPageDisabledInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  simplePagerLastPageDisabledInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 
 static $clinit() {
  simplePagerLastPageDisabledInitializer.$clinit = () =>{};
  simplePagerLastPageDisabledInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerLastPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof simplePagerLastPageDisabledInitializer;
 }
 
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerLastPageDisabledInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerLastPageDisabledInitializer');

exports = simplePagerLastPageDisabledInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerLastPageDisabledInitializer.js.map