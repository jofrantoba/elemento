goog.module('org.gwtproject.i18n.client.impl.CldrImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Localizable = goog.require('org.gwtproject.i18n.client.Localizable$impl');

/**
 * @implements {Localizable}
  */
class CldrImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CldrImpl}
  * @public
  */
 static $create__() {
  CldrImpl.$clinit();
  let $instance = new CldrImpl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_CldrImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_CldrImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isRTL__() {
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  CldrImpl.$clinit = () =>{};
  CldrImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CldrImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CldrImpl, 'org.gwtproject.i18n.client.impl.CldrImpl');

Localizable.$markImplementor(CldrImpl);

exports = CldrImpl; 
//# sourceMappingURL=CldrImpl.js.map