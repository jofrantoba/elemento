goog.module('org.gwtproject.event.dom.client.LoadedMetadataHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoadedMetadataHandler = goog.require('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');

let LoadedMetadataEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');

/**
 * @implements {LoadedMetadataHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(LoadedMetadataEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(LoadedMetadataEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(LoadedMetadataEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoadedMetadataHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {LoadedMetadataEvent} arg0
  * @public
  */
 m_onLoadedMetadata__org_gwtproject_event_dom_client_LoadedMetadataEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_LoadedMetadataHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.LoadedMetadataHandler$$LambdaAdaptor');

LoadedMetadataHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoadedMetadataHandler$$LambdaAdaptor.js.map