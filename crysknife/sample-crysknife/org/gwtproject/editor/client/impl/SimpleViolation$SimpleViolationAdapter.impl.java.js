goog.module('org.gwtproject.editor.client.impl.SimpleViolation.SimpleViolationAdapter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimpleViolation = goog.require('org.gwtproject.editor.client.impl.SimpleViolation$impl');

let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class SimpleViolationAdapter extends SimpleViolation {
 /** @protected */
 constructor() {
  super();
  /**@type {ConstraintViolation<?>}*/
  this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_;
 }
 /** @return {!SimpleViolationAdapter} */
 static $create__javax_validation_ConstraintViolation(/** ConstraintViolation<?> */ v) {
  SimpleViolationAdapter.$clinit();
  let $instance = new SimpleViolationAdapter();
  $instance.$ctor__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter__javax_validation_ConstraintViolation(v);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter__javax_validation_ConstraintViolation(/** ConstraintViolation<?> */ v) {
  this.$ctor__org_gwtproject_editor_client_impl_SimpleViolation__();
  this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_ = v;
 }
 /** @override @return {*} */
 m_getKey__() {
  return this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_.m_getRootBean__();
 }
 /** @override @return {?string} */
 m_getMessage__() {
  return this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_.m_getMessage__();
 }
 /** @override @return {?string} */
 m_getPath__() {
  return $Objects.m_toString__java_lang_Object(this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_.m_getPropertyPath__());
 }
 /** @override @return {*} */
 m_getUserDataObject__() {
  return this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_;
 }
 
 static $clinit() {
  SimpleViolationAdapter.$clinit = () =>{};
  SimpleViolationAdapter.$loadModules();
  SimpleViolation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleViolationAdapter;
 }
 
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(SimpleViolationAdapter, 'org.gwtproject.editor.client.impl.SimpleViolation$SimpleViolationAdapter');

exports = SimpleViolationAdapter; 
//# sourceMappingURL=SimpleViolation$SimpleViolationAdapter.js.map