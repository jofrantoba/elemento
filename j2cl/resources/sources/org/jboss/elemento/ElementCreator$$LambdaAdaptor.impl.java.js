goog.module('org.jboss.elemento.ElementCreator.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementCreator = goog.require('org.jboss.elemento.ElementCreator$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @template E
 * @implements {ElementCreator}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(?string, Class<E>):E} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(?string, Class<E>):E} */
  this.f_$$fn__org_jboss_elemento_ElementCreator_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_ElementCreator_$LambdaAdaptor__org_jboss_elemento_ElementCreator_$JsFunction(fn);
 }
 /**
  * @param {?function(?string, Class<E>):E} fn
  * @public
  */
 $ctor__org_jboss_elemento_ElementCreator_$LambdaAdaptor__org_jboss_elemento_ElementCreator_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_jboss_elemento_ElementCreator_$LambdaAdaptor = fn;
 }
 /**
  * @param {?string} arg0
  * @param {Class<E>} arg1
  * @return {E}
  * @public
  */
 m_create__java_lang_String__java_lang_Class(arg0, arg1) {
  let /** ?function(?string, Class<E>):E */ $function;
  return ($function = this.f_$$fn__org_jboss_elemento_ElementCreator_$LambdaAdaptor, $function(arg0, arg1));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.ElementCreator$$LambdaAdaptor');

ElementCreator.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ElementCreator$$LambdaAdaptor.js.map