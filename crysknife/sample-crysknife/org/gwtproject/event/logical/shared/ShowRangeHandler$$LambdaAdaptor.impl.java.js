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
 /**
  * @param {?function(ShowRangeEvent<V>):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ShowRangeEvent<V>):void} */
  this.f_$$fn__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ShowRangeHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ShowRangeEvent<V>):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ShowRangeHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ShowRangeEvent<V>} arg0
  * @public
  */
 m_onShowRange__org_gwtproject_event_logical_shared_ShowRangeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_ShowRangeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.ShowRangeHandler$$LambdaAdaptor');

ShowRangeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ShowRangeHandler$$LambdaAdaptor.js.map