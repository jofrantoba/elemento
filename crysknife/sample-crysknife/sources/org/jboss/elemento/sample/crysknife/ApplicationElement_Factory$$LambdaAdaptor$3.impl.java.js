goog.module('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor$3 extends j_l_Object {
 
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor$3.$clinit();
  super();
  /**@type {?function(Event):void}*/
  this.f_$$fn__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_$LambdaAdaptor$3;
  this.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_$LambdaAdaptor$3__elemental2_dom_EventListener_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_$LambdaAdaptor$3__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_$LambdaAdaptor$3 = fn;
 }
 
 handleEvent(/** Event */ arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_$LambdaAdaptor$3;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor$3.$clinit = () =>{};
  $LambdaAdaptor$3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor$3;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor$3, 'org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$$LambdaAdaptor$3');

exports = $LambdaAdaptor$3; 
//# sourceMappingURL=ApplicationElement_Factory$$LambdaAdaptor$3.js.map