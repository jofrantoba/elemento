goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent.ListHandler.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Comparator = goog.require('java.util.Comparator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let ToDoubleFunction = goog.forwardDeclare('java.util.function.ToDoubleFunction$impl');
let ToIntFunction = goog.forwardDeclare('java.util.function.ToIntFunction$impl');
let ToLongFunction = goog.forwardDeclare('java.util.function.ToLongFunction$impl');
let ListHandler = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent.ListHandler$impl');

/**
 * @template T
 * @implements {Comparator<T>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ListHandler<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1;
  /**@type {Comparator<T>}*/
  this.$c_comparator;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator(/** ListHandler<T> */ $outer_this, /** Comparator<T> */ $c_comparator) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator($outer_this, $c_comparator);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator(/** ListHandler<T> */ $outer_this, /** Comparator<T> */ $c_comparator) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1 = $outer_this;
  this.$c_comparator = $c_comparator;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {number} */
 m_compare__java_lang_Object__java_lang_Object(/** T */ o1, /** T */ o2) {
  return -this.$c_comparator.m_compare__java_lang_Object__java_lang_Object(o1, o2);
 }
 //Default method forwarding stub.
 /** @override @return {Comparator<T>} */
 m_reversed__() {
  return /**@type {Comparator<T>}*/ (Comparator.m_reversed__$default__java_util_Comparator(this));
 }
 //Default method forwarding stub.
 /** @override @return {Comparator<T>} */
 m_thenComparing__java_util_Comparator(/** Comparator<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_Comparator(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function(/** j_u_function_Function<?, ?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @template U @return {Comparator<T>} */
 m_thenComparing__java_util_function_Function__java_util_Comparator(/** j_u_function_Function<?, ?> */ arg0, /** Comparator<?> */ arg1) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator(this, arg0, arg1));
 }
 //Default method forwarding stub.
 /** @override @return {Comparator<T>} */
 m_thenComparingDouble__java_util_function_ToDoubleFunction(/** ToDoubleFunction<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparingDouble__$default__java_util_Comparator__java_util_function_ToDoubleFunction(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @return {Comparator<T>} */
 m_thenComparingInt__java_util_function_ToIntFunction(/** ToIntFunction<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparingInt__$default__java_util_Comparator__java_util_function_ToIntFunction(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @return {Comparator<T>} */
 m_thenComparingLong__java_util_function_ToLongFunction(/** ToLongFunction<?> */ arg0) {
  return /**@type {Comparator<T>}*/ (Comparator.m_thenComparingLong__$default__java_util_Comparator__java_util_function_ToLongFunction(this, arg0));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Comparator.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.ColumnSortEvent$ListHandler$1');

Comparator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ColumnSortEvent$ListHandler$1.js.map