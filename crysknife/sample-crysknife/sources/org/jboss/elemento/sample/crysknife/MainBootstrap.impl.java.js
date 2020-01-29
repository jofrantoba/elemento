goog.module('org.jboss.elemento.sample.crysknife.MainBootstrap$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let reflect = goog.forwardDeclare('goog.reflect');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let Main = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.Main$impl');
let MainInfo = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.MainInfo$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let BeanManagerImpl = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
let Instance = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Instance$impl');
let Interceptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Interceptor$impl');
let OnFieldAccessed = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MainBootstrap extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Main} */
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /** @public {Interceptor} */
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /** @public {Instance<TodoRepository>} */
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /** @public {Instance<ApplicationElement>} */
  this.f_org_jboss_elemento_sample_crysknife_applicationelement__org_jboss_elemento_sample_crysknife_MainBootstrap_;
  /** @public {Instance<FooterElement>} */
  this.f_org_jboss_elemento_sample_crysknife_footerelement__org_jboss_elemento_sample_crysknife_MainBootstrap_;
 }
 /**
  * @param {Main} application
  * @return {!MainBootstrap}
  * @public
  */
 static $create__org_jboss_elemento_sample_crysknife_Main(application) {
  MainBootstrap.$clinit();
  let $instance = new MainBootstrap();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_MainBootstrap__org_jboss_elemento_sample_crysknife_Main(application);
  return $instance;
 }
 /**
  * @param {Main} application
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_MainBootstrap__org_jboss_elemento_sample_crysknife_Main(application) {
  this.$ctor__java_lang_Object__();
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_MainBootstrap_ = /**@type {Instance<TodoRepository>} */ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(TodoRepository)));
  this.f_org_jboss_elemento_sample_crysknife_applicationelement__org_jboss_elemento_sample_crysknife_MainBootstrap_ = /**@type {Instance<ApplicationElement>} */ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(ApplicationElement)));
  this.f_org_jboss_elemento_sample_crysknife_footerelement__org_jboss_elemento_sample_crysknife_MainBootstrap_ = /**@type {Instance<FooterElement>} */ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(FooterElement)));
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_ = application;
 }
 /**
  * @public
  */
 m_initialize___$pp_org_jboss_elemento_sample_crysknife() {
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_ = Interceptor.$create__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_);
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_ = /**@type {Main} */ ($Casts.$to(this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_getProxy__(), Main));
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(reflect.objectProperty(MainInfo.f_repository__org_jboss_elemento_sample_crysknife_MainInfo, this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_), OnFieldAccessed.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_get__();
  })));
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(reflect.objectProperty(MainInfo.f_application__org_jboss_elemento_sample_crysknife_MainInfo, this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_), OnFieldAccessed.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return this.f_org_jboss_elemento_sample_crysknife_applicationelement__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_get__();
  })));
  this.f_interceptor__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_addGetPropertyInterceptor__java_lang_String__java_util_function_BiFunction(reflect.objectProperty(MainInfo.f_footer__org_jboss_elemento_sample_crysknife_MainInfo, this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_), OnFieldAccessed.$create__java_util_function_Supplier(Supplier.$adapt(() =>{
   return this.f_org_jboss_elemento_sample_crysknife_footerelement__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_get__();
  })));
  this.f_instance__org_jboss_elemento_sample_crysknife_MainBootstrap_.m_init___$pp_org_jboss_elemento_sample_crysknife();
 }
 /**
  * @public
  */
 static $clinit() {
  MainBootstrap.$clinit = () =>{};
  MainBootstrap.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MainBootstrap;
 }
 /**
  * @public
  */
 static $loadModules() {
  reflect = goog.module.get('goog.reflect');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement$impl');
  Main = goog.module.get('org.jboss.elemento.sample.crysknife.Main$impl');
  MainInfo = goog.module.get('org.jboss.elemento.sample.crysknife.MainInfo$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  BeanManagerImpl = goog.module.get('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
  Interceptor = goog.module.get('org.treblereel.gwt.crysknife.client.Interceptor$impl');
  OnFieldAccessed = goog.module.get('org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MainBootstrap, 'org.jboss.elemento.sample.crysknife.MainBootstrap');

exports = MainBootstrap; 
//# sourceMappingURL=MainBootstrap.js.map