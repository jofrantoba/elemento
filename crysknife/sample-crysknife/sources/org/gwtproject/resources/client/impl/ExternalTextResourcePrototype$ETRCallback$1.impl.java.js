goog.module('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TextResource = goog.require('org.gwtproject.resources.client.TextResource$impl');

let ETRCallback = goog.forwardDeclare('org.gwtproject.resources.client.impl.ExternalTextResourcePrototype.ETRCallback$impl');

/**
 * @implements {TextResource}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ETRCallback}*/
  this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback_1;
  /**@type {?string}*/
  this.$c_resourceText;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback__java_lang_String(/** ETRCallback */ $outer_this, /** ?string */ $c_resourceText) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback_1__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback__java_lang_String($outer_this, $c_resourceText);
  return $instance;
 }
 
 $ctor__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback_1__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback__java_lang_String(/** ETRCallback */ $outer_this, /** ?string */ $c_resourceText) {
  this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback_1 = $outer_this;
  this.$c_resourceText = $c_resourceText;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return this.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback_1.f_$outer_this__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_ETRCallback.f_name__org_gwtproject_resources_client_impl_ExternalTextResourcePrototype_;
 }
 /** @override @return {?string} */
 m_getText__() {
  return this.$c_resourceText;
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.resources.client.impl.ExternalTextResourcePrototype$ETRCallback$1');

TextResource.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ExternalTextResourcePrototype$ETRCallback$1.js.map