goog.module('org.treblereel.gwt.crysknife.client.internal.AbstractBeanManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BeanManager = goog.require('org.treblereel.gwt.crysknife.client.BeanManager$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Default = goog.forwardDeclare('javax.enterprise.inject.Default$impl');
let Provider = goog.forwardDeclare('javax.inject.Provider$impl');
let Instance = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Instance$impl');
let InstanceImpl = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.internal.InstanceImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {BeanManager}
  */
class AbstractBeanManager extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Map<Class, Map<Class<?>, Provider>>} */
  this.f_beanStore__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager_;
 }
 /**
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager();
 }
 /**
  * @override
  * @param {*} ref
  * @public
  */
 m_destroyBean__java_lang_Object(ref) {}
 /**
  * @param {Class} type
  * @param {Provider} provider
  * @public
  */
 m_register__java_lang_Class__javax_inject_Provider(type, provider) {
  this.m_register__java_lang_Class__javax_inject_Provider__java_lang_Class(type, provider, Class.$get(Default));
 }
 /**
  * @param {Class} type
  * @param {Provider} provider
  * @param {Class<?>} annotation
  * @public
  */
 m_register__java_lang_Class__javax_inject_Provider__java_lang_Class(type, provider, annotation) {
  if (!this.f_beanStore__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager_.containsKey(type)) {
   this.f_beanStore__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager_.put(type, /**@type {!HashMap<Class<?>, Provider>} */ (HashMap.$create__()));
  }
  /**@type {Map<Class<?>, Provider>} */ ($Casts.$to(this.f_beanStore__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager_.get(type), Map)).put(annotation, provider);
 }
 /**
  * @override
  * @template T
  * @param {Class} type
  * @param {Class<?>} qualifier
  * @return {Instance<T>}
  * @public
  */
 m_lookupBean__java_lang_Class__java_lang_Class(type, qualifier) {
  return /**@type {!InstanceImpl<T>} */ (InstanceImpl.$create__javax_inject_Provider(/**@type {Provider} */ ($Casts.$to(/**@type {Map<Class<?>, Provider>} */ ($Casts.$to(this.f_beanStore__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager_.get(type), Map)).get(qualifier), Provider))));
 }
 /**
  * @override
  * @template T
  * @param {Class} type
  * @return {Instance<T>}
  * @public
  */
 m_lookupBean__java_lang_Class(type) {
  return /**@type {Instance<T>} */ (this.m_lookupBean__java_lang_Class__java_lang_Class(type, Class.$get(Default)));
 }
 /**
  * @private
  */
 $init___$p_org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager() {
  this.f_beanStore__org_treblereel_gwt_crysknife_client_internal_AbstractBeanManager_ = /**@type {!HashMap<Class, Map<Class<?>, Provider>>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractBeanManager.$clinit = () =>{};
  AbstractBeanManager.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractBeanManager;
 }
 /**
  * @public
  */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Map = goog.module.get('java.util.Map$impl');
  Default = goog.module.get('javax.enterprise.inject.Default$impl');
  Provider = goog.module.get('javax.inject.Provider$impl');
  InstanceImpl = goog.module.get('org.treblereel.gwt.crysknife.client.internal.InstanceImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AbstractBeanManager, 'org.treblereel.gwt.crysknife.client.internal.AbstractBeanManager');

BeanManager.$markImplementor(AbstractBeanManager);

exports = AbstractBeanManager; 
//# sourceMappingURL=AbstractBeanManager.js.map