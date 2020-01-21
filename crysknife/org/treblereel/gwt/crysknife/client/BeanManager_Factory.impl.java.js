goog.module('org.treblereel.gwt.crysknife.client.BeanManager_Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

let BeanManager = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManager$impl');
let BeanManagerImpl = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');

/**
 * @implements {Factory<BeanManager>}
  */
class BeanManager__Factory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @override
  * @return {BeanManager}
  * @public
  */
 m_get__() {
  return BeanManagerImpl.m_get__();
 }
 /**
  * @return {!BeanManager__Factory}
  * @public
  */
 static $create__() {
  let $instance = new BeanManager__Factory();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_BeanManager_Factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_BeanManager_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {BeanManager__Factory}
  * @public
  */
 static m_create__() {
  BeanManager__Factory.$clinit();
  return BeanManager__Factory.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  BeanManager__Factory.$clinit = () =>{};
  BeanManager__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BeanManager__Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  BeanManagerImpl = goog.module.get('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
 }
 
}
$Util.$setClassMetadata(BeanManager__Factory, 'org.treblereel.gwt.crysknife.client.BeanManager_Factory');

Factory.$markImplementor(BeanManager__Factory);

exports = BeanManager__Factory; 
//# sourceMappingURL=BeanManager_Factory.js.map