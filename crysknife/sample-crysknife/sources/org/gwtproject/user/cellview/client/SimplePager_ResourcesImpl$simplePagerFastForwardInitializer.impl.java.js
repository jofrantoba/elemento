goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFastForwardInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerFastForwardInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!simplePagerFastForwardInitializer} */
 static $create__() {
  let $instance = new simplePagerFastForwardInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerFastForwardInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerFastForwardInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  simplePagerFastForwardInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 
 static $clinit() {
  simplePagerFastForwardInitializer.$clinit = () =>{};
  simplePagerFastForwardInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerFastForwardInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof simplePagerFastForwardInitializer;
 }
 
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerFastForwardInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerFastForwardInitializer');

exports = simplePagerFastForwardInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerFastForwardInitializer.js.map