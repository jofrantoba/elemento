goog.module('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let SimpleViolation = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation$impl');
let $1 = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable.$1$impl');

/**
 * @implements {Iterable<SimpleViolation>}
  */
class ConstraintViolationIterable extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Iterable<ConstraintViolation<?>>} */
  this.f_violations__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_;
 }
 /**
  * @param {Iterable<ConstraintViolation<?>>} violations
  * @return {!ConstraintViolationIterable}
  * @public
  */
 static $create__java_lang_Iterable(violations) {
  ConstraintViolationIterable.$clinit();
  let $instance = new ConstraintViolationIterable();
  $instance.$ctor__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable__java_lang_Iterable(violations);
  return $instance;
 }
 /**
  * @param {Iterable<ConstraintViolation<?>>} violations
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable__java_lang_Iterable(violations) {
  this.$ctor__java_lang_Object__();
  this.f_violations__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_ = violations;
 }
 /**
  * @override
  * @return {Iterator<SimpleViolation>}
  * @public
  */
 m_iterator__() {
  let source = this.f_violations__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable_.m_iterator__();
  return $1.$create__org_gwtproject_editor_client_impl_SimpleViolation_ConstraintViolationIterable__java_util_Iterator(this, source);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<SimpleViolation>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<SimpleViolation>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @public
  */
 static $clinit() {
  ConstraintViolationIterable.$clinit = () =>{};
  ConstraintViolationIterable.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ConstraintViolationIterable;
 }
 /**
  * @public
  */
 static $loadModules() {
  $1 = goog.module.get('org.gwtproject.editor.client.impl.SimpleViolation.ConstraintViolationIterable.$1$impl');
 }
 
}
$Util.$setClassMetadata(ConstraintViolationIterable, 'org.gwtproject.editor.client.impl.SimpleViolation$ConstraintViolationIterable');

Iterable.$markImplementor(ConstraintViolationIterable);

exports = ConstraintViolationIterable; 
//# sourceMappingURL=SimpleViolation$ConstraintViolationIterable.js.map