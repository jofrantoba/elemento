goog.module('org.gwtproject.editor.client.impl.SimpleViolation.SimpleViolationAdapter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimpleViolation = goog.require('org.gwtproject.editor.client.impl.SimpleViolation$impl');

let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class SimpleViolationAdapter extends SimpleViolation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ConstraintViolation<?>} */
  this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_;
 }
 /**
  * @param {ConstraintViolation<?>} v
  * @return {!SimpleViolationAdapter}
  * @public
  */
 static $create__javax_validation_ConstraintViolation(v) {
  SimpleViolationAdapter.$clinit();
  let $instance = new SimpleViolationAdapter();
  $instance.$ctor__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter__javax_validation_ConstraintViolation(v);
  return $instance;
 }
 /**
  * @param {ConstraintViolation<?>} v
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter__javax_validation_ConstraintViolation(v) {
  this.$ctor__org_gwtproject_editor_client_impl_SimpleViolation__();
  this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_ = v;
 }
 /**
  * @override
  * @return {*}
  * @public
  */
 m_getKey__() {
  return this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_.m_getRootBean__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getMessage__() {
  return this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_.m_getMessage__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getPath__() {
  return $Objects.m_toString__java_lang_Object(this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_.m_getPropertyPath__());
 }
 /**
  * @override
  * @return {*}
  * @public
  */
 m_getUserDataObject__() {
  return this.f_v__org_gwtproject_editor_client_impl_SimpleViolation_SimpleViolationAdapter_;
 }
 /**
  * @public
  */
 static $clinit() {
  SimpleViolationAdapter.$clinit = () =>{};
  SimpleViolationAdapter.$loadModules();
  SimpleViolation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimpleViolationAdapter;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(SimpleViolationAdapter, 'org.gwtproject.editor.client.impl.SimpleViolation$SimpleViolationAdapter');

exports = SimpleViolationAdapter; 
//# sourceMappingURL=SimpleViolation$SimpleViolationAdapter.js.map