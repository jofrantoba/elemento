goog.module('org.treblereel.gwt.crysknife.client.ProxySetInterceptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const $JavaScriptFunction = goog.require('vmbootstrap.JavaScriptFunction$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ProxySetInterceptor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {*} */
  this.f_target__org_treblereel_gwt_crysknife_client_ProxySetInterceptor_;
 }
 /**
  * @param {*} target
  * @return {function(*, ?string, *):boolean}
  * @public
  */
 static $create__java_lang_Object(target) {
  ProxySetInterceptor.$clinit();
  let $instance = new ProxySetInterceptor();
  $instance.$ctor__org_treblereel_gwt_crysknife_client_ProxySetInterceptor__java_lang_Object(target);
  return $Util.$makeLambdaFunction(ProxySetInterceptor.prototype.m_onInvoke__java_lang_Object__java_lang_String__java_lang_Object, $instance, ProxySetInterceptor.$copy);
 }
 /**
  * @suppress {invalidCasts}
  * @param {*} target
  * @public
  */
 $ctor__org_treblereel_gwt_crysknife_client_ProxySetInterceptor__java_lang_Object(target) {
  this.$ctor__java_lang_Object__();
  this.f_target__org_treblereel_gwt_crysknife_client_ProxySetInterceptor_ = target;
 }
 /**
  * @this {?function(*, ?string, *):boolean}
  * @param {*} object
  * @param {?string} objectKey
  * @param {*} value
  * @return {boolean}
  * @public
  */
 m_onInvoke__java_lang_Object__java_lang_String__java_lang_Object(object, objectKey, value) {
  window.console.debug("invoked set [" + j_l_String.m_valueOf__java_lang_Object(value) + "] +interceptor [" + j_l_String.m_valueOf__java_lang_Object(objectKey) + "] for [" + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(this.f_target__org_treblereel_gwt_crysknife_client_ProxySetInterceptor_).m_getCanonicalName__()) + "]");
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(object), objectKey, value);
  return true;
 }
 /**
  * @public
  */
 static $clinit() {
  ProxySetInterceptor.$clinit = () =>{};
  ProxySetInterceptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$is__org_treblereel_gwt_crysknife_client_ProxySetInterceptor;
  
 }
 /**
  * @param {ProxySetInterceptor} from
  * @param {?} to
  * @public
  */
 static $copy(from, to) {
  to.f_target__org_treblereel_gwt_crysknife_client_ProxySetInterceptor_ = from.f_target__org_treblereel_gwt_crysknife_client_ProxySetInterceptor_;
  // Marks the object is an instance of this class.
  to.$is__org_treblereel_gwt_crysknife_client_ProxySetInterceptor = true;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ProxySetInterceptor, 'org.treblereel.gwt.crysknife.client.ProxySetInterceptor');

$JavaScriptFunction.$markImplementor(ProxySetInterceptor);

exports = ProxySetInterceptor; 
//# sourceMappingURL=ProxySetInterceptor.js.map