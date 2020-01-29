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
 /**
  * @param {?function(HighlightEvent<V>):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(HighlightEvent<V>):void} */
  this.f_$$fn__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_HighlightHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(HighlightEvent<V>):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_HighlightHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {HighlightEvent<V>} arg0
  * @public
  */
 m_onHighlight__org_gwtproject_event_logical_shared_HighlightEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_HighlightHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.HighlightHandler$$LambdaAdaptor');

HighlightHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HighlightHandler$$LambdaAdaptor.js.map