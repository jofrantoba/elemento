goog.module('org.gwtproject.event.logical.shared.ShowRangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ShowRangeHandler = goog.require('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');

let ShowRangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');

/**
 * @template V
 * @implements {ShowRangeHandler<V>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ShowRangeEvent<V>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ShowRangeEvent<V>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ShowRangeHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ShowRangeHandler_$JsFunction(/** ?function(ShowRangeEvent<V>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor = fn;
 }
 
 m_onShowRange__org_gwtproject_event_logical_shared_ShowRangeEvent(/** ShowRangeEvent<V> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.ShowRangeHandler$$LambdaAdaptor');

ShowRangeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ShowRangeHandler$$LambdaAdaptor.js.map