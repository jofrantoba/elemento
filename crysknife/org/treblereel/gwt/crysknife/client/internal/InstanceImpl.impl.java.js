goog.module('org.treblereel.gwt.crysknife.client.internal.InstanceImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Instance = goog.require('org.treblereel.gwt.crysknife.client.Instance$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Provider = goog.forwardDeclare('javax.inject.Provider$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {Instance<T>}
  */
class InstanceImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Provider<T>} */
  this.f_provider__org_treblereel_gwt_crysknife_client_internal_InstanceImpl;
 }
 /**
  * @template T
  * @param {Provider<T>} provider
  * @return {!InstanceImpl<T>}
  * @public
  */
 static $create__javax_inject_Provider(provider) {
  InstanceImpl.$clinit();
  let $instance = new InstanceImpl();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_internal_InstanceImpl__javax_inject_Provider(provider);
  return $instance;
 }
 /**
  * @param {Provider<T>} provider
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_internal_InstanceImpl__javax_inject_Provider(provider) {
  this.$ctor__java_lang_Object__();
  this.f_provider__org_treblereel_gwt_crysknife_client_internal_InstanceImpl = provider;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_get__() {
  return this.f_provider__org_treblereel_gwt_crysknife_client_internal_InstanceImpl.m_get__();
 }
 /**
  * @override
  * @param {T} var1
  * @public
  */
 m_destroy__java_lang_Object(var1) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @public
  */
 m_destroyAll__() {}
 /**
  * @public
  */
 static $clinit() {
  InstanceImpl.$clinit = () =>{};
  InstanceImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof InstanceImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(InstanceImpl, 'org.treblereel.gwt.crysknife.client.internal.InstanceImpl');

Instance.$markImplementor(InstanceImpl);

exports = InstanceImpl; 
//# sourceMappingURL=InstanceImpl.js.map