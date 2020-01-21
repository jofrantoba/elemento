goog.module('org.jboss.elemento.sample.crysknife.TodoRepository_Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');

/**
 * @implements {Factory<TodoRepository>}
  */
class TodoRepository__Factory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TodoRepository} */
  this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
 }
 /**
  * @override
  * @return {TodoRepository}
  * @public
  */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
  }
  this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_ = TodoRepository.$create__();
  return this.f_instance__org_jboss_elemento_sample_crysknife_TodoRepository_Factory_;
 }
 /**
  * @return {!TodoRepository__Factory}
  * @public
  */
 static $create__() {
  let $instance = new TodoRepository__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {TodoRepository__Factory}
  * @public
  */
 static m_create__() {
  TodoRepository__Factory.$clinit();
  return TodoRepository__Factory.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  TodoRepository__Factory.$clinit = () =>{};
  TodoRepository__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TodoRepository__Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
 }
 
}
$Util.$setClassMetadata(TodoRepository__Factory, 'org.jboss.elemento.sample.crysknife.TodoRepository_Factory');

Factory.$markImplementor(TodoRepository__Factory);

exports = TodoRepository__Factory; 
//# sourceMappingURL=TodoRepository_Factory.js.map