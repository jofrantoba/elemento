goog.module('org.gwtproject.resources.client.CssResourceBase.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CssResourceBase = goog.require('org.gwtproject.resources.client.CssResourceBase$impl');

/**
 * @implements {CssResourceBase}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():?string} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():?string} */
  this.f_$$fn__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor;
  this.$ctor__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor__org_gwtproject_resources_client_CssResourceBase_$JsFunction(fn);
 }
 /**
  * @param {?function():?string} fn
  * @public
  */
 $ctor__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor__org_gwtproject_resources_client_CssResourceBase_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor = fn;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getName__() {
  let /** ?function():?string */ $function;
  return ($function = this.f_$$fn__org_gwtproject_resources_client_CssResourceBase_$LambdaAdaptor, $function());
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.resources.client.CssResourceBase$$LambdaAdaptor');

CssResourceBase.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CssResourceBase$$LambdaAdaptor.js.map