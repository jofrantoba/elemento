goog.module('org.gwtproject.event.logical.shared.ValueChangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueChangeHandler = goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');

/**
 * @template T
 * @implements {ValueChangeHandler<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ValueChangeEvent<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ValueChangeEvent<T>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_ValueChangeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_ValueChangeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ValueChangeHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_ValueChangeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ValueChangeHandler_$JsFunction(/** ?function(ValueChangeEvent<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_ValueChangeHandler_$LambdaAdaptor = fn;
 }
 
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(/** ValueChangeEvent<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_ValueChangeHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.ValueChangeHandler$$LambdaAdaptor');

ValueChangeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ValueChangeHandler$$LambdaAdaptor.js.map