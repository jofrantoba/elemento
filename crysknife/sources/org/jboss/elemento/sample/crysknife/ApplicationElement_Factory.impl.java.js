goog.module('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let BeanManagerImpl = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
let Instance = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Instance$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Factory<ApplicationElement>}
  */
class ApplicationElement__Factory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Instance<TodoRepository>} */
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
  /** @public {ApplicationElement} */
  this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
 }
 /**
  * @override
  * @return {ApplicationElement}
  * @public
  */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
  }
  this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ = ApplicationElement.$create__org_jboss_elemento_sample_crysknife_TodoRepository(/**@type {TodoRepository} */ ($Casts.$to(this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_get__(), TodoRepository)));
  return this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
 }
 /**
  * @return {!ApplicationElement__Factory}
  * @public
  */
 static $create__() {
  let $instance = new ApplicationElement__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__() {
  this.$ctor__java_lang_Object__();
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ = /**@type {Instance<TodoRepository>} */ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(TodoRepository)));
 }
 /**
  * @return {ApplicationElement__Factory}
  * @public
  */
 static m_create__() {
  ApplicationElement__Factory.$clinit();
  return ApplicationElement__Factory.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  ApplicationElement__Factory.$clinit = () =>{};
  ApplicationElement__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ApplicationElement__Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  BeanManagerImpl = goog.module.get('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ApplicationElement__Factory, 'org.jboss.elemento.sample.crysknife.ApplicationElement_Factory');

Factory.$markImplementor(ApplicationElement__Factory);

exports = ApplicationElement__Factory; 
//# sourceMappingURL=ApplicationElement_Factory.js.map