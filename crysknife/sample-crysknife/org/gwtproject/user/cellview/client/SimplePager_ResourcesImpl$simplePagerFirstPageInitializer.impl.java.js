goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFirstPageInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerFirstPageInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!simplePagerFirstPageInitializer}
  * @public
  */
 static $create__() {
  let $instance = new simplePagerFirstPageInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerFirstPageInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerFirstPageInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  simplePagerFirstPageInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  simplePagerFirstPageInitializer.$clinit = () =>{};
  simplePagerFirstPageInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerFirstPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof simplePagerFirstPageInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerFirstPageInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerFirstPageInitializer');

exports = simplePagerFirstPageInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerFirstPageInitializer.js.map