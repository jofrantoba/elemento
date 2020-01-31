goog.module('org.jboss.elemento.EventType.$LambdaAdaptor$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor$1 extends j_l_Object {
 
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor$1.$clinit();
  super();
  /**@type {?function(Event):void}*/
  this.f_$$fn__org_jboss_elemento_EventType_$LambdaAdaptor$1;
  this.$ctor__org_jboss_elemento_EventType_$LambdaAdaptor$1__elemental2_dom_EventListener_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_EventType_$LambdaAdaptor$1__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_EventType_$LambdaAdaptor$1 = fn;
 }
 
 handleEvent(/** Event */ arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_EventType_$LambdaAdaptor$1;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor$1.$clinit = () =>{};
  $LambdaAdaptor$1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor$1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor$1, 'org.jboss.elemento.EventType$$LambdaAdaptor$1');

exports = $LambdaAdaptor$1; 
//# sourceMappingURL=EventType$$LambdaAdaptor$1.js.map