goog.module('org.elemento.ElementCreator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.elemento.ElementCreator.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ElementCreator {
 /**
  * @abstract
  * @template E
  * @param {?string} element
  * @param {Class<E>} type
  * @return {E}
  * @public
  */
 m_create__java_lang_String__java_lang_Class(element, type) {}
 /**
  * @template E
  * @param {?function(?string, Class<E>):E} fn
  * @return {ElementCreator}
  * @public
  */
 static $adapt(fn) {
  ElementCreator.$clinit();
  return /**@type {!$LambdaAdaptor<E>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  ElementCreator.$clinit = () =>{};
  ElementCreator.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_elemento_ElementCreator = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_elemento_ElementCreator;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.elemento.ElementCreator.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ElementCreator, 'org.elemento.ElementCreator');

ElementCreator.$markImplementor(/** @type {Function} */ (ElementCreator));

exports = ElementCreator; 
//# sourceMappingURL=ElementCreator.js.map