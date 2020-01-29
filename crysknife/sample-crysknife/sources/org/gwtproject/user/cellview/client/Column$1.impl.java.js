goog.module('org.gwtproject.user.cellview.client.Column.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueUpdater = goog.require('org.gwtproject.cell.client.ValueUpdater$impl');

let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');

/**
 * @template T, C
 * @implements {ValueUpdater<C>}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Column<T, C>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_Column_1;
  /** @public {number} */
  this.$c_index = 0;
  /** @public {T} */
  this.$c_object;
 }
 /**
  * @template T, C
  * @param {Column<T, C>} $outer_this
  * @param {number} $c_index
  * @param {T} $c_object
  * @return {!$1<T, C>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_Column__int__java_lang_Object($outer_this, $c_index, $c_object) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_Column_1__org_gwtproject_user_cellview_client_Column__int__java_lang_Object($outer_this, $c_index, $c_object);
  return $instance;
 }
 /**
  * @param {Column<T, C>} $outer_this
  * @param {number} $c_index
  * @param {T} $c_object
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_Column_1__org_gwtproject_user_cellview_client_Column__int__java_lang_Object($outer_this, $c_index, $c_object) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_Column_1 = $outer_this;
  this.$c_index = $c_index;
  this.$c_object = $c_object;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {C} value
  * @public
  */
 m_update__java_lang_Object(value) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_Column_1.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_.m_update__int__java_lang_Object__java_lang_Object(this.$c_index, this.$c_object, value);
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.Column$1');

ValueUpdater.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=Column$1.js.map