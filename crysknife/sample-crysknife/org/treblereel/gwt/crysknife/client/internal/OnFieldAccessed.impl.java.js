goog.module('org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const BiFunction = goog.require('java.util.function.BiFunction$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BiFunction<*, ?string, *>}
  */
class OnFieldAccessed extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Supplier} */
  this.f_supplier__org_treblereel_gwt_crysknife_client_internal_OnFieldAccessed_;
 }
 /**
  * @param {Supplier} supplier
  * @return {!OnFieldAccessed}
  * @public
  */
 static $create__java_util_function_Supplier(supplier) {
  OnFieldAccessed.$clinit();
  let $instance = new OnFieldAccessed();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_internal_OnFieldAccessed__java_util_function_Supplier(supplier);
  return $instance;
 }
 /**
  * @param {Supplier} supplier
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_internal_OnFieldAccessed__java_util_function_Supplier(supplier) {
  this.$ctor__java_lang_Object__();
  this.f_supplier__org_treblereel_gwt_crysknife_client_internal_OnFieldAccessed_ = supplier;
 }
 /**
  * @param {*} o
  * @param {?string} propertyKey
  * @return {*}
  * @public
  */
 m_apply__java_lang_Object__java_lang_String(o, propertyKey) {
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(o), propertyKey), null)) {
   window.console.log("propertyKey null, set value ...");
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(o), propertyKey, this.f_supplier__org_treblereel_gwt_crysknife_client_internal_OnFieldAccessed_.m_get__());
  }
  return $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(o), propertyKey);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @template V
  * @param {j_u_function_Function<?, ?>} arg0
  * @return {BiFunction<*, ?string, V>}
  * @public
  */
 m_andThen__java_util_function_Function(arg0) {
  return /**@type {BiFunction<*, ?string, V>} */ (BiFunction.m_andThen__$default__java_util_function_BiFunction__java_util_function_Function(this, arg0));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {*} arg1
  * @return {*}
  * @public
  */
 m_apply__java_lang_Object__java_lang_Object(arg0, arg1) {
  return this.m_apply__java_lang_Object__java_lang_String(arg0, /**@type {?string} */ ($Casts.$to(arg1, j_l_String)));
 }
 /**
  * @public
  */
 static $clinit() {
  OnFieldAccessed.$clinit = () =>{};
  OnFieldAccessed.$loadModules();
  j_l_Object.$clinit();
  BiFunction.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof OnFieldAccessed;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(OnFieldAccessed, 'org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed');

BiFunction.$markImplementor(OnFieldAccessed);

exports = OnFieldAccessed; 
//# sourceMappingURL=OnFieldAccessed.js.map