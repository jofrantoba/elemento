goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.ElementIterator$impl');

const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @interface
 * @extends {Iterator<Object>}
 */
class ElementIterator {
 /** @abstract */
 m_setSelected__boolean(/** boolean */ selected) {}
 
 static $clinit() {
  ElementIterator.$clinit = () =>{};
  ElementIterator.$loadModules();
  Iterator.$clinit();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Iterator.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_ElementIterator = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_HasDataPresenter_ElementIterator;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementIterator, 'org.gwtproject.user.cellview.client.HasDataPresenter$ElementIterator');

ElementIterator.$markImplementor(/** @type {Function} */ (ElementIterator));

exports = ElementIterator; 
//# sourceMappingURL=HasDataPresenter$ElementIterator.js.map