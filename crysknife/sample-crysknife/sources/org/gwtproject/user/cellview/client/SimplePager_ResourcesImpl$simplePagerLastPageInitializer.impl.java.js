goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerLastPageInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerLastPageInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!simplePagerLastPageInitializer} */
 static $create__() {
  let $instance = new simplePagerLastPageInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerLastPageInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerLastPageInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  simplePagerLastPageInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 
 static $clinit() {
  simplePagerLastPageInitializer.$clinit = () =>{};
  simplePagerLastPageInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerLastPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof simplePagerLastPageInitializer;
 }
 
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerLastPageInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerLastPageInitializer');

exports = simplePagerLastPageInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerLastPageInitializer.js.map