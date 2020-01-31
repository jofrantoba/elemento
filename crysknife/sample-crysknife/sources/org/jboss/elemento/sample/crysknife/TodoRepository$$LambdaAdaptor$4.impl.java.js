goog.module('org.jboss.elemento.sample.crysknife.TodoRepository.$LambdaAdaptor$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor$4 extends j_l_Object {
 
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor$4.$clinit();
  super();
  /**@type {?function(Event):void}*/
  this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4;
  this.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4__elemental2_dom_EventListener_$JsFunction(fn);
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4__elemental2_dom_EventListener_$JsFunction(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4 = fn;
 }
 
 handleEvent(/** Event */ arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor$4.$clinit = () =>{};
  $LambdaAdaptor$4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor$4;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor$4, 'org.jboss.elemento.sample.crysknife.TodoRepository$$LambdaAdaptor$4');

exports = $LambdaAdaptor$4; 
//# sourceMappingURL=TodoRepository$$LambdaAdaptor$4.js.map