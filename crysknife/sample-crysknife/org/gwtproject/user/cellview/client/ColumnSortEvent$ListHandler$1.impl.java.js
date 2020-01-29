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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ListHandler<T>} */
  this.f_$outer_this__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1;
  /** @public {Comparator<T>} */
  this.$c_comparator;
 }
 /**
  * @template T
  * @param {ListHandler<T>} $outer_this
  * @param {Comparator<T>} $c_comparator
  * @return {!$1<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator($outer_this, $c_comparator) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator($outer_this, $c_comparator);
  return $instance;
 }
 /**
  * @param {ListHandler<T>} $outer_this
  * @param {Comparator<T>} $c_comparator
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler__java_util_Comparator($outer_this, $c_comparator) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_ColumnSortEvent_ListHandler_1 = $outer_this;
  this.$c_comparator = $c_comparator;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {T} o1
  * @param {T} o2
  * @return {number}
  * @public
  */
 m_compare__java_lang_Object__java_lang_Object(o1, o2) {
  return -this.$c_comparator.m_compare__java_lang_Object__java_lang_Object(o1, o2);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Comparator<T>}
  * @public
  */
 m_reversed__() {
  return /**@type {Comparator<T>} */ (Comparator.m_reversed__$default__java_util_Comparator(this));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Comparator<?>} arg0
  * @return {Comparator<T>}
  * @public
  */
 m_thenComparing__java_util_Comparator(arg0) {
  return /**@type {Comparator<T>} */ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_Comparator(this, arg0));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @template U
  * @param {j_u_function_Function<?, ?>} arg0
  * @return {Comparator<T>}
  * @public
  */
 m_thenComparing__java_util_function_Function(arg0) {
  return /**@type {Comparator<T>} */ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function(this, arg0));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @template U
  * @param {j_u_function_Function<?, ?>} arg0
  * @param {Comparator<?>} arg1
  * @return {Comparator<T>}
  * @public
  */
 m_thenComparing__java_util_function_Function__java_util_Comparator(arg0, arg1) {
  return /**@type {Comparator<T>} */ (Comparator.m_thenComparing__$default__java_util_Comparator__java_util_function_Function__java_util_Comparator(this, arg0, arg1));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {ToDoubleFunction<?>} arg0
  * @return {Comparator<T>}
  * @public
  */
 m_thenComparingDouble__java_util_function_ToDoubleFunction(arg0) {
  return /**@type {Comparator<T>} */ (Comparator.m_thenComparingDouble__$default__java_util_Comparator__java_util_function_ToDoubleFunction(this, arg0));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {ToIntFunction<?>} arg0
  * @return {Comparator<T>}
  * @public
  */
 m_thenComparingInt__java_util_function_ToIntFunction(arg0) {
  return /**@type {Comparator<T>} */ (Comparator.m_thenComparingInt__$default__java_util_Comparator__java_util_function_ToIntFunction(this, arg0));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {ToLongFunction<?>} arg0
  * @return {Comparator<T>}
  * @public
  */
 m_thenComparingLong__java_util_function_ToLongFunction(arg0) {
  return /**@type {Comparator<T>} */ (Comparator.m_thenComparingLong__$default__java_util_Comparator__java_util_function_ToLongFunction(this, arg0));
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Comparator.$clinit();
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.ColumnSortEvent$ListHandler$1');

Comparator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ColumnSortEvent$ListHandler$1.js.map