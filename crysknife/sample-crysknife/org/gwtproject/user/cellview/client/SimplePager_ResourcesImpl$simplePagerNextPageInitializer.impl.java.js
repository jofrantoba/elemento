goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerNextPageInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!simplePagerNextPageInitializer} */
 static $create__() {
  let $instance = new simplePagerNextPageInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerNextPageInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerNextPageInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  simplePagerNextPageInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 
 static $clinit() {
  simplePagerNextPageInitializer.$clinit = () =>{};
  simplePagerNextPageInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerNextPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof simplePagerNextPageInitializer;
 }
 
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerNextPageInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerNextPageInitializer');

exports = simplePagerNextPageInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerNextPageInitializer.js.map