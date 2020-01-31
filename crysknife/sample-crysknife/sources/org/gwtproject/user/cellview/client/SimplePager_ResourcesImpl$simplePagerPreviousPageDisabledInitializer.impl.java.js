goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerPreviousPageDisabledInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerPreviousPageDisabledInitializer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!simplePagerPreviousPageDisabledInitializer} */
 static $create__() {
  let $instance = new simplePagerPreviousPageDisabledInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerPreviousPageDisabledInitializer__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerPreviousPageDisabledInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ImageResource} */
 static m_get__() {
  simplePagerPreviousPageDisabledInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 
 static $clinit() {
  simplePagerPreviousPageDisabledInitializer.$clinit = () =>{};
  simplePagerPreviousPageDisabledInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerPreviousPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof simplePagerPreviousPageDisabledInitializer;
 }
 
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerPreviousPageDisabledInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerPreviousPageDisabledInitializer');

exports = simplePagerPreviousPageDisabledInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerPreviousPageDisabledInitializer.js.map