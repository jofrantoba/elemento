goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageDisabledInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerNextPageDisabledInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!simplePagerNextPageDisabledInitializer}
  * @public
  */
 static $create__() {
  let $instance = new simplePagerNextPageDisabledInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerNextPageDisabledInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerNextPageDisabledInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  simplePagerNextPageDisabledInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  simplePagerNextPageDisabledInitializer.$clinit = () =>{};
  simplePagerNextPageDisabledInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerNextPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof simplePagerNextPageDisabledInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerNextPageDisabledInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerNextPageDisabledInitializer');

exports = simplePagerNextPageDisabledInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerNextPageDisabledInitializer.js.map