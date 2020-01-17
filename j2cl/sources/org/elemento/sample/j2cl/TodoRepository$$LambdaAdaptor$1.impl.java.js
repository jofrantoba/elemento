goog.module('org.elemento.sample.j2cl.TodoRepository.$LambdaAdaptor$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');

/**
 * @implements {EventListener}
  */
class $LambdaAdaptor$1 extends j_l_Object {
 /**
  * @param {?function(Event):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor$1.$clinit();
  super();
  /** @public {?function(Event):void} */
  this.f_$$fn__org_elemento_sample_j2cl_TodoRepository_$LambdaAdaptor$1;
  this.$ctor__org_elemento_sample_j2cl_TodoRepository_$LambdaAdaptor$1__elemental2_dom_EventListener_$JsFunction(fn);
 }
 /**
  * @param {?function(Event):void} fn
  * @public
  */
 $ctor__org_elemento_sample_j2cl_TodoRepository_$LambdaAdaptor$1__elemental2_dom_EventListener_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_elemento_sample_j2cl_TodoRepository_$LambdaAdaptor$1 = fn;
 }
 /**
  * @param {Event} arg0
  * @public
  */
 handleEvent(arg0) {
  {
   let $function = this.f_$$fn__org_elemento_sample_j2cl_TodoRepository_$LambdaAdaptor$1;
   $function(arg0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor$1.$clinit = () =>{};
  $LambdaAdaptor$1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor$1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor$1, 'org.elemento.sample.j2cl.TodoRepository$$LambdaAdaptor$1');

exports = $LambdaAdaptor$1; 
//# sourceMappingURL=TodoRepository$$LambdaAdaptor$1.js.map