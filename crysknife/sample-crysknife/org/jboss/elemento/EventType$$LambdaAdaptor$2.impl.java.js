goog.module('org.jboss.elemento.EventType.$LambdaAdaptor$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor$2 extends j_l_Object {
 
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor$2.$clinit();
  super();
  /**@type {?function(Event):void}*/
  this.f_$$fn__org_jboss_elemento_EventType_$LambdaAdaptor$2;
  this.$ctor__org_jboss_elemento_EventType_$LambdaAdaptor$2__elemental2_dom_EventListener_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_EventType_$LambdaAdaptor$2__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_EventType_$LambdaAdaptor$2 = fn;
 }
 
 handleEvent(/** Event */ arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_EventType_$LambdaAdaptor$2;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor$2.$clinit = () =>{};
  $LambdaAdaptor$2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor$2;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor$2, 'org.jboss.elemento.EventType$$LambdaAdaptor$2');

exports = $LambdaAdaptor$2; 
//# sourceMappingURL=EventType$$LambdaAdaptor$2.js.map