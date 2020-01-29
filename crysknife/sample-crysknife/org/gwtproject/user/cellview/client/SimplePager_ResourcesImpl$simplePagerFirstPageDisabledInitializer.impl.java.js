goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFirstPageDisabledInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerFirstPageDisabledInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!simplePagerFirstPageDisabledInitializer}
  * @public
  */
 static $create__() {
  let $instance = new simplePagerFirstPageDisabledInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerFirstPageDisabledInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerFirstPageDisabledInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static m_get__() {
  simplePagerFirstPageDisabledInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  simplePagerFirstPageDisabledInitializer.$clinit = () =>{};
  simplePagerFirstPageDisabledInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerFirstPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof simplePagerFirstPageDisabledInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerFirstPageDisabledInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerFirstPageDisabledInitializer');

exports = simplePagerFirstPageDisabledInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerFirstPageDisabledInitializer.js.map