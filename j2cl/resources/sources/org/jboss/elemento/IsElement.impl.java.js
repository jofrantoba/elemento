goog.module('org.jboss.elemento.IsElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');

/**
 * @interface
 * @template E
 */
class IsElement {
 /**
  * @abstract
  * @return {E}
  * @public
  */
 m_element__() {}
 /**
  * @template E
  * @param {?function():E} fn
  * @return {IsElement<E>}
  * @public
  */
 static $adapt(fn) {
  IsElement.$clinit();
  return /**@type {!$LambdaAdaptor<E>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  IsElement.$clinit = () =>{};
  IsElement.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_IsElement = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_IsElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IsElement, 'org.jboss.elemento.IsElement');

IsElement.$markImplementor(/** @type {Function} */ (IsElement));

exports = IsElement; 
//# sourceMappingURL=IsElement.js.map