goog.module('org.gwtproject.event.logical.shared.SelectionHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SelectionHandler = goog.require('org.gwtproject.event.logical.shared.SelectionHandler$impl');

let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');

/**
 * @template T
 * @implements {SelectionHandler<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(SelectionEvent<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SelectionEvent<T>):void}*/
  this.f_$$fn__org_gwtproject_event_logical_shared_SelectionHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_SelectionHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_SelectionHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_event_logical_shared_SelectionHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_SelectionHandler_$JsFunction(/** ?function(SelectionEvent<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_SelectionHandler_$LambdaAdaptor = fn;
 }
 
 m_onSelection__org_gwtproject_event_logical_shared_SelectionEvent(/** SelectionEvent<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_SelectionHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.SelectionHandler$$LambdaAdaptor');

SelectionHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=SelectionHandler$$LambdaAdaptor.js.map