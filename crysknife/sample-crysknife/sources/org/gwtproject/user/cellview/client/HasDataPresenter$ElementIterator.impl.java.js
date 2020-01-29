goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.ElementIterator$impl');

const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {Iterator<Object>}
 */
class ElementIterator {
 /**
  * @abstract
  * @param {boolean} selected
  * @public
  */
 m_setSelected__boolean(selected) {}
 /**
  * @public
  */
 static $clinit() {
  ElementIterator.$clinit = () =>{};
  ElementIterator.$loadModules();
  Iterator.$clinit();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Iterator.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_ElementIterator = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_ElementIterator;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementIterator, 'org.gwtproject.user.cellview.client.HasDataPresenter$ElementIterator');

ElementIterator.$markImplementor(/** @type {Function} */ (ElementIterator));

exports = ElementIterator; 
//# sourceMappingURL=HasDataPresenter$ElementIterator.js.map