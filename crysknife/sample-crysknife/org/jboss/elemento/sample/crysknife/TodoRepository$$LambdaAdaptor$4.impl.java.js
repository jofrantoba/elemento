goog.module('org.jboss.elemento.sample.crysknife.TodoRepository.$LambdaAdaptor$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor$4 extends j_l_Object {
 /**
  * @param {?function(Event):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor$4.$clinit();
  super();
  /** @public {?function(Event):void} */
  this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4;
  this.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4__elemental2_dom_EventListener_$JsFunction(fn);
 }
 /**
  * @param {?function(Event):void} fn
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4__elemental2_dom_EventListener_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4 = fn;
 }
 /**
  * @param {Event} arg0
  * @public
  */
 handleEvent(arg0) {
  {
   let $function = this.f_$$fn__org_jboss_elemento_sample_crysknife_TodoRepository_$LambdaAdaptor$4;
   $function(arg0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor$4.$clinit = () =>{};
  $LambdaAdaptor$4.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor$4;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor$4, 'org.jboss.elemento.sample.crysknife.TodoRepository$$LambdaAdaptor$4');

exports = $LambdaAdaptor$4; 
//# sourceMappingURL=TodoRepository$$LambdaAdaptor$4.js.map