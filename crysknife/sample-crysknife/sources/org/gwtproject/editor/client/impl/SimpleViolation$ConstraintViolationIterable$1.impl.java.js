goog.module('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let SimpleViolation = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation$impl');
let ConstraintViolationIterable = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable$impl');
let SimpleViolationAdapter = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation.SimpleViolationAdapter$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Iterator<SimpleViolation>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ConstraintViolationIterable}*/
  this.f_$outer_this__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_1;
  /**@type {Iterator<ConstraintViolation<?>>}*/
  this.$c_source;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable__java_util_Iterator(/** ConstraintViolationIterable */ $outer_this, /** Iterator<ConstraintViolation<?>> */ $c_source) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_1__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable__java_util_Iterator($outer_this, $c_source);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_1__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable__java_util_Iterator(/** ConstraintViolationIterable */ $outer_this, /** Iterator<ConstraintViolation<?>> */ $c_source) {
  this.f_$outer_this__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_1 = $outer_this;
  this.$c_source = $c_source;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_hasNext__() {
  return this.$c_source.m_hasNext__();
 }
 /** @override @return {SimpleViolation} */
 m_next__() {
  return SimpleViolationAdapter.$create__javax_validation_ConstraintViolation(/**@type {ConstraintViolation<*>}*/ ($Casts.$to(this.$c_source.m_next__(), ConstraintViolation)));
 }
 /** @override */
 m_remove__() {
  this.$c_source.m_remove__();
 }
 //Default method forwarding stub.
 /** @override */
 m_forEachRemaining__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  ConstraintViolation = goog.module.get('javax.validation.ConstraintViolation$impl');
  SimpleViolationAdapter = goog.module.get('org.gwtproject.editor.client.impl.SimpleViolation.SimpleViolationAdapter$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.editor.client.impl.SimpleViolation$ConstraintViolationIterable$1');

Iterator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=SimpleViolation$ConstraintViolationIterable$1.js.map