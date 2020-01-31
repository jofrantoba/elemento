goog.module('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let org_jboss_elemento_sample_crysknife_FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement_Factory.FooterElement$impl');
let Interceptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Interceptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Factory<org_jboss_elemento_sample_crysknife_FooterElement>}
  */
class FooterElement__Factory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Interceptor}*/
  this.f_interceptor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
  /**@type {FooterElement}*/
  this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
 }
 /** @override @return {FooterElement} */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
  }
  this.f_interceptor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_ = Interceptor.$create__java_lang_Object(FooterElement.$create__org_jboss_elemento_sample_crysknife_FooterElement_Factory(this));
  this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_ = /**@type {FooterElement}*/ ($Casts.$to(this.f_interceptor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_.m_getProxy__(), FooterElement));
  return this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
 }
 /** @return {!FooterElement__Factory} */
 static $create__() {
  let $instance = new FooterElement__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {FooterElement__Factory} */
 static m_create__() {
  FooterElement__Factory.$clinit();
  return FooterElement__Factory.$create__();
 }
 
 static $clinit() {
  FooterElement__Factory.$clinit = () =>{};
  FooterElement__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FooterElement__Factory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement_Factory.FooterElement$impl');
  Interceptor = goog.module.get('org.treblereel.gwt.crysknife.client.Interceptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FooterElement__Factory, 'org.jboss.elemento.sample.crysknife.FooterElement_Factory');

Factory.$markImplementor(FooterElement__Factory);

exports = FooterElement__Factory; 
//# sourceMappingURL=FooterElement_Factory.js.map