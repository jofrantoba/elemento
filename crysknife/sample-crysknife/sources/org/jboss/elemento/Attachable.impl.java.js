goog.module('org.jboss.elemento.Attachable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');

/**
 * @interface
 */
class Attachable {
 /**
  * @param {HTMLElement} element
  * @param {Attachable} attachable
  * @public
  */
 static m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable(element, attachable) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_onAttach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, ObserverCallback.$adapt((/** MutationRecord */ arg0) =>{
    attachable.m_attach__elemental2_dom_MutationRecord(arg0);
   }));
   Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, ObserverCallback.$adapt((/** MutationRecord */ arg0_1) =>{
    attachable.m_detach__elemental2_dom_MutationRecord(arg0_1);
   }));
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {Attachable} attachable
  * @public
  */
 static m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable(element, attachable) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable(element.m_element__(), attachable);
  }
 }
 /**
  * @abstract
  * @param {MutationRecord} mutationRecord
  * @public
  */
 m_attach__elemental2_dom_MutationRecord(mutationRecord) {}
 /**
  * @abstract
  * @param {MutationRecord} mutationRecord
  * @public
  */
 m_detach__elemental2_dom_MutationRecord(mutationRecord) {}
 /**
  * @param {?function(MutationRecord):void} fn
  * @return {Attachable}
  * @public
  */
 static $adapt(fn) {
  Attachable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @param {!Attachable} $thisArg
  * @param {MutationRecord} mutationRecord
  * @public
  */
 static m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord($thisArg, mutationRecord) {
  Attachable.$clinit();
 }
 /**
  * @public
  */
 static $clinit() {
  Attachable.$clinit = () =>{};
  Attachable.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_Attachable = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_Attachable;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Attachable, 'org.jboss.elemento.Attachable');

Attachable.$markImplementor(/** @type {Function} */ (Attachable));

exports = Attachable; 
//# sourceMappingURL=Attachable.js.map