goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerStyleInitializer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.Style$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

class simplePagerStyleInitializer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!simplePagerStyleInitializer}
  * @public
  */
 static $create__() {
  let $instance = new simplePagerStyleInitializer();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerStyleInitializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_simplePagerStyleInitializer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {Style}
  * @public
  */
 static m_get__() {
  simplePagerStyleInitializer.$clinit();
  return SimplePager__ResourcesImpl.f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  simplePagerStyleInitializer.$clinit = () =>{};
  simplePagerStyleInitializer.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.m_simplePagerStyleInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof simplePagerStyleInitializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadata(simplePagerStyleInitializer, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$simplePagerStyleInitializer');

exports = simplePagerStyleInitializer; 
//# sourceMappingURL=SimplePager_ResourcesImpl$simplePagerStyleInitializer.js.map