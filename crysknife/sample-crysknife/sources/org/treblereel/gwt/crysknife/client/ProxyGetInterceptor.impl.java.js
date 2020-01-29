goog.module('org.treblereel.gwt.crysknife.client.ProxyGetInterceptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const $JavaScriptFunction = goog.require('vmbootstrap.JavaScriptFunction$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ProxyGetInterceptor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {*} */
  this.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_;
  /** @public {Map<?string, BiFunction<*, ?string, *>>} */
  this.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_;
  /** @public {Map<?string, BiFunction<*, ?string, *>>} */
  this.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_;
 }
 /**
  * @param {*} target
  * @return {function(*, ?string, *):*}
  * @public
  */
 static $create__java_lang_Object(target) {
  ProxyGetInterceptor.$clinit();
  let $instance = new ProxyGetInterceptor();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor__java_lang_Object(target);
  return $Util.$makeLambdaFunction(ProxyGetInterceptor.prototype.m_onInvoke__java_lang_Object__java_lang_String__java_lang_Object, $instance, ProxyGetInterceptor.$copy);
 }
 /**
  * @suppress {invalidCasts}
  * @param {*} target
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor__java_lang_Object(target) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_treblereel_gwt_crysknife_client_ProxyGetInterceptor();
  this.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_ = target;
 }
 /**
  * @param {function(*, ?string, *):*} $thisArg
  * @param {?string} obfuscated
  * @param {BiFunction} function_1
  * @public
  */
 static m_addProperty__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor__java_lang_String__java_util_function_BiFunction($thisArg, obfuscated, function_1) {
  ProxyGetInterceptor.$clinit();
  window.console.debug("register property interceptor [" + j_l_String.m_valueOf__java_lang_Object(obfuscated) + "] for [" + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object($thisArg.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_).m_getCanonicalName__()) + "]");
  $thisArg.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.put(obfuscated, function_1);
 }
 /**
  * @param {function(*, ?string, *):*} $thisArg
  * @param {?string} obfuscated
  * @param {BiFunction} function_1
  * @public
  */
 static m_addMethod__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor__java_lang_String__java_util_function_BiFunction($thisArg, obfuscated, function_1) {
  ProxyGetInterceptor.$clinit();
  window.console.debug("register method interceptor [" + j_l_String.m_valueOf__java_lang_Object(obfuscated) + "] for [" + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object($thisArg.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_).m_getCanonicalName__()) + "]");
  $thisArg.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.put(obfuscated, function_1);
 }
 /**
  * @this {?function(*, ?string, *):*}
  * @param {*} object
  * @param {?string} objectKey
  * @param {*} receiver
  * @return {*}
  * @public
  */
 m_onInvoke__java_lang_Object__java_lang_String__java_lang_Object(object, objectKey, receiver) {
  window.console.debug("invoked interceptor [" + j_l_String.m_valueOf__java_lang_Object(objectKey) + "] for [" + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(this.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_).m_getCanonicalName__()) + "]");
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(typeof($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(object), objectKey)), "function")) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(object, this.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_) && this.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.containsKey(objectKey)) {
    window.console.debug("process method interceptor " + j_l_String.m_valueOf__java_lang_Object(objectKey) + " " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(/**@type {BiFunction<*, ?string, *>} */ ($Casts.$to(this.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.get(objectKey), BiFunction))).m_getCanonicalName__()));
    return /**@type {BiFunction<*, ?string, *>} */ ($Casts.$to(this.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.get(objectKey), BiFunction)).m_apply__java_lang_Object__java_lang_Object(object, objectKey);
   }
  } else {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(object, this.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_) && this.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.containsKey(objectKey)) {
    return /**@type {BiFunction<*, ?string, *>} */ ($Casts.$to(this.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_.get(objectKey), BiFunction)).m_apply__java_lang_Object__java_lang_Object(object, objectKey);
   }
  }
  return $Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(object), objectKey);
 }
 /**
  * @this {?function(*, ?string, *):*}
  * @private
  */
 $init___$p_org_treblereel_gwt_crysknife_client_ProxyGetInterceptor() {
  this.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_ = /**@type {!HashMap<?string, BiFunction<*, ?string, *>>} */ (HashMap.$create__());
  this.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_ = /**@type {!HashMap<?string, BiFunction<*, ?string, *>>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  ProxyGetInterceptor.$clinit = () =>{};
  ProxyGetInterceptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$is__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor;
  
 }
 /**
  * @param {ProxyGetInterceptor} from
  * @param {?} to
  * @public
  */
 static $copy(from, to) {
  to.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_ = from.f_target__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_;
  to.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_ = from.f_propHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_;
  to.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_ = from.f_methodHolder__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor_;
  // Marks the object is an instance of this class.
  to.$is__org_treblereel_gwt_crysknife_client_ProxyGetInterceptor = true;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  BiFunction = goog.module.get('java.util.function.BiFunction$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ProxyGetInterceptor, 'org.treblereel.gwt.crysknife.client.ProxyGetInterceptor');

$JavaScriptFunction.$markImplementor(ProxyGetInterceptor);

exports = ProxyGetInterceptor; 
//# sourceMappingURL=ProxyGetInterceptor.js.map