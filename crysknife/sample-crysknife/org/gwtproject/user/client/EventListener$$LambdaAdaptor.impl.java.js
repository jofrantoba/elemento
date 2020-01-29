goog.module('org.gwtproject.user.client.EventListener.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EventListener = goog.require('org.gwtproject.user.client.EventListener$impl');

let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(Event):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(Event):void} */
  this.f_$$fn__org_gwtproject_user_client_EventListener_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_EventListener_$LambdaAdaptor__org_gwtproject_user_client_EventListener_$JsFunction(fn);
 }
 /**
  * @param {?function(Event):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_EventListener_$LambdaAdaptor__org_gwtproject_user_client_EventListener_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_EventListener_$LambdaAdaptor = fn;
 }
 /**
  * @param {Event} arg0
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_EventListener_$LambdaAdaptor;
   $function(arg0);
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.EventListener$$LambdaAdaptor');

EventListener.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EventListener$$LambdaAdaptor.js.map