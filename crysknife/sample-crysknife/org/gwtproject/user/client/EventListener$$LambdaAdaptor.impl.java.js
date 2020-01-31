goog.module('org.gwtproject.user.client.EventListener.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EventListener = goog.require('org.gwtproject.user.client.EventListener$impl');

let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event):void}*/
  this.f_$$fn__org_gwtproject_user_client_EventListener_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_EventListener_$LambdaAdaptor__org_gwtproject_user_client_EventListener_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_EventListener_$LambdaAdaptor__org_gwtproject_user_client_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_EventListener_$LambdaAdaptor = fn;
 }
 
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_EventListener_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.EventListener$$LambdaAdaptor');

EventListener.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EventListener$$LambdaAdaptor.js.map