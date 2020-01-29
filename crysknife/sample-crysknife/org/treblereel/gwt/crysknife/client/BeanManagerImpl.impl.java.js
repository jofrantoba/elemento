goog.module('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractBeanManager = goog.require('org.treblereel.gwt.crysknife.client.internal.AbstractBeanManager$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let ApplicationElement__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let FooterElement__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let TodoRepository__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository_Factory$impl');
let BeanManager = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManager$impl');
let BeanManager__Factory = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManager_Factory$impl');

class BeanManagerImpl extends AbstractBeanManager {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!BeanManagerImpl}
  * @public
  */
 static $create__() {
  BeanManagerImpl.$clinit();
  let $instance = new BeanManagerImpl();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_BeanManagerImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_BeanManagerImpl__() {
  this.$ctor__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager__();
 }
 /**
  * @public
  */
 m_init___$p_org_treblereel_gwt_crysknife_client_BeanManagerImpl() {
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(BeanManager), BeanManager__Factory.m_create__());
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(TodoRepository), TodoRepository__Factory.m_create__());
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(ApplicationElement), ApplicationElement__Factory.m_create__());
  this.m_register__java_lang_Class__javax_inject_Provider(Class.$get(FooterElement), FooterElement__Factory.m_create__());
 }
 /**
  * @return {BeanManager}
  * @public
  */
 static m_get__() {
  BeanManagerImpl.$clinit();
  if ($Equality.$same(BeanManagerImpl.f_instance__org_treblereel_gwt_crysknife_client_BeanManagerImpl_, null)) {
   BeanManagerImpl.f_instance__org_treblereel_gwt_crysknife_client_BeanManagerImpl_ = BeanManagerImpl.$create__();
   BeanManagerImpl.f_instance__org_treblereel_gwt_crysknife_client_BeanManagerImpl_.m_init___$p_org_treblereel_gwt_crysknife_client_BeanManagerImpl();
  }
  return BeanManagerImpl.f_instance__org_treblereel_gwt_crysknife_client_BeanManagerImpl_;
 }
 /**
  * @public
  */
 static $clinit() {
  BeanManagerImpl.$clinit = () =>{};
  BeanManagerImpl.$loadModules();
  AbstractBeanManager.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BeanManagerImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
  ApplicationElement__Factory = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement$impl');
  FooterElement__Factory = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  TodoRepository__Factory = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository_Factory$impl');
  BeanManager = goog.module.get('org.treblereel.gwt.crysknife.client.BeanManager$impl');
  BeanManager__Factory = goog.module.get('org.treblereel.gwt.crysknife.client.BeanManager_Factory$impl');
 }
 
}
$Util.$setClassMetadata(BeanManagerImpl, 'org.treblereel.gwt.crysknife.client.BeanManagerImpl');

/** @public {BeanManagerImpl} */
BeanManagerImpl.f_instance__org_treblereel_gwt_crysknife_client_BeanManagerImpl_;

exports = BeanManagerImpl; 
//# sourceMappingURL=BeanManagerImpl.js.map