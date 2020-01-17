goog.module('org.elemento.ObserverCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ObserverCallback = goog.require('org.elemento.ObserverCallback$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');

/**
 * @implements {ObserverCallback}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(MutationRecord):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(MutationRecord):void} */
  this.f_$$fn__org_elemento_ObserverCallback_$LambdaAdaptor;
  this.$ctor__org_elemento_ObserverCallback_$LambdaAdaptor__org_elemento_ObserverCallback_$JsFunction(fn);
 }
 /**
  * @param {?function(MutationRecord):void} fn
  * @public
  */
 $ctor__org_elemento_ObserverCallback_$LambdaAdaptor__org_elemento_ObserverCallback_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_elemento_ObserverCallback_$LambdaAdaptor = fn;
 }
 /**
  * @param {MutationRecord} arg0
  * @public
  */
 m_onObserved__elemental2_dom_MutationRecord(arg0) {
  {
   let $function = this.f_$$fn__org_elemento_ObserverCallback_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.elemento.ObserverCallback$$LambdaAdaptor');

ObserverCallback.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ObserverCallback$$LambdaAdaptor.js.map