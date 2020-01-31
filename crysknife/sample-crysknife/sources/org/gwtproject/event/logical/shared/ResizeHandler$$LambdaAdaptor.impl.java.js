goog.module('org.gwtproject.event.logical.shared.ResizeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.gwtproject.event.logical.shared.ResizeHandler$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');

/**
 * @implements {ResizeHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ResizeEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ResizeEvent):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ResizeHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ResizeHandler_$JsFunction(/** ?function(ResizeEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor = fn;
 }
 
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(/** ResizeEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.ResizeHandler$$LambdaAdaptor');

ResizeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ResizeHandler$$LambdaAdaptor.js.map