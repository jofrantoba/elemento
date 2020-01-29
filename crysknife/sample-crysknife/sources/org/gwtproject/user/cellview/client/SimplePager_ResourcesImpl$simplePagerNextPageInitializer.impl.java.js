goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerNextPageInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!simplePagerNextPageInitializer}
  * @public
  */
 static $create__() {
  let $instance = new simplePagerNextPageInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerNextPageInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerNextPageInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  simplePagerNextPageInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  simplePagerNextPageInitializer.$clinit = () =>{};
  simplePagerNextPageInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerNextPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof simplePagerNextPageInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerNextPageInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerNextPageInitializer');

exports = simplePagerNextPageInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerNextPageInitializer.js.map