goog.module('org.gwtproject.event.dom.client.HasNativeEvent.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasNativeEvent = goog.require('org.gwtproject.event.dom.client.HasNativeEvent$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');

/**
 * @implements {HasNativeEvent}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():Object} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():Object} */
  this.f_$$fn__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor__org_gwtproject_event_dom_client_HasNativeEvent_$JsFunction(fn);
 }
 /**
  * @param {?function():Object} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor__org_gwtproject_event_dom_client_HasNativeEvent_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor = fn;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getNativeEvent__() {
  let /** ?function():Object */ $function;
  return ($function = this.f_$$fn__org_gwtproject_event_dom_client_HasNativeEvent_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.HasNativeEvent$$LambdaAdaptor');

HasNativeEvent.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasNativeEvent$$LambdaAdaptor.js.map