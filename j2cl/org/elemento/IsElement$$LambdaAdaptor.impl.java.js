goog.module('org.elemento.IsElement.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @template E
 * @implements {IsElement<E>}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function():E} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function():E} */
  this.f_$$fn__org_elemento_IsElement_$LambdaAdaptor;
  this.$ctor__org_elemento_IsElement_$LambdaAdaptor__org_elemento_IsElement_$JsFunction(fn);
 }
 /**
  * @param {?function():E} fn
  * @public
  */
 $ctor__org_elemento_IsElement_$LambdaAdaptor__org_elemento_IsElement_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_elemento_IsElement_$LambdaAdaptor = fn;
 }
 /**
  * @return {E}
  * @public
  */
 m_element__() {
  let /** ?function():E */ $function;
  return ($function = this.f_$$fn__org_elemento_IsElement_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.elemento.IsElement$$LambdaAdaptor');

IsElement.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsElement$$LambdaAdaptor.js.map