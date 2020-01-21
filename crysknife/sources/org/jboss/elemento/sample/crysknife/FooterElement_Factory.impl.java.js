goog.module('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');

/**
 * @implements {Factory<FooterElement>}
  */
class FooterElement__Factory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {FooterElement} */
  this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
 }
 /**
  * @override
  * @return {FooterElement}
  * @public
  */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
  }
  this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_ = FooterElement.$create__();
  return this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
 }
 /**
  * @return {!FooterElement__Factory}
  * @public
  */
 static $create__() {
  let $instance = new FooterElement__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {FooterElement__Factory}
  * @public
  */
 static m_create__() {
  FooterElement__Factory.$clinit();
  return FooterElement__Factory.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  FooterElement__Factory.$clinit = () =>{};
  FooterElement__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FooterElement__Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement$impl');
 }
 
}
$Util.$setClassMetadata(FooterElement__Factory, 'org.jboss.elemento.sample.crysknife.FooterElement_Factory');

Factory.$markImplementor(FooterElement__Factory);

exports = FooterElement__Factory; 
//# sourceMappingURL=FooterElement_Factory.js.map