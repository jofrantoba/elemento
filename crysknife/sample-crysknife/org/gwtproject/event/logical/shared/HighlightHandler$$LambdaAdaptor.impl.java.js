goog.module('org.gwtproject.event.logical.shared.HighlightHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HighlightHandler = goog.require('org.gwtproject.event.logical.shared.HighlightHandler$impl');

let HighlightEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightEvent$impl');

/**
 * @template V
 * @implements {HighlightHandler<V>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(HighlightEvent<V>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(HighlightEvent<V>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_HighlightHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_HighlightHandler_$JsFunction(/** ?function(HighlightEvent<V>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor = fn;
 }
 
 m_onHighlight__org_gwtproject_event_logical_shared_HighlightEvent(/** HighlightEvent<V> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.HighlightHandler$$LambdaAdaptor');

HighlightHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HighlightHandler$$LambdaAdaptor.js.map