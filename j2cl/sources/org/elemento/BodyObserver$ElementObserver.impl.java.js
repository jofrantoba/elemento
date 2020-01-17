goog.module('org.elemento.BodyObserver.ElementObserver$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let ObserverCallback = goog.forwardDeclare('org.elemento.ObserverCallback$impl');

/**
 * @interface
 */
class ElementObserver {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_attachId__() {}
 /**
  * @abstract
  * @return {HTMLElement}
  * @public
  */
 m_observedElement__() {}
 /**
  * @abstract
  * @return {ObserverCallback}
  * @public
  */
 m_callback__() {}
 /**
  * @public
  */
 static $clinit() {
  ElementObserver.$clinit = () =>{};
  ElementObserver.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_elemento_BodyObserver_ElementObserver = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_elemento_BodyObserver_ElementObserver;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementObserver, 'org.elemento.BodyObserver$ElementObserver');

ElementObserver.$markImplementor(/** @type {Function} */ (ElementObserver));

exports = ElementObserver; 
//# sourceMappingURL=BodyObserver$ElementObserver.js.map