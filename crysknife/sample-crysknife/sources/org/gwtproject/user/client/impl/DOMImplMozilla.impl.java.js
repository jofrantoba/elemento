goog.module('org.gwtproject.user.client.impl.DOMImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DOMImplStandard = goog.require('org.gwtproject.user.client.impl.DOMImplStandard$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class DOMImplMozilla extends DOMImplStandard {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DOMImplMozilla}
  * @public
  */
 static $create__() {
  DOMImplMozilla.$clinit();
  let $instance = new DOMImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_impl_DOMImplMozilla__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_impl_DOMImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_impl_DOMImplStandard__();
 }
 /**
  * @public
  */
 static m_addMozillaCaptureEventDispatchers__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @param {Object} elem
  * @param {number} bits
  * @public
  */
 m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, bits) {
  super.m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, bits);
  this.m_sinkEventsMozilla__org_gwtproject_dom_client_Element__int(elem, bits);
 }
 /**
  * @param {Object} elem
  * @param {number} bits
  * @public
  */
 m_sinkEventsMozilla__org_gwtproject_dom_client_Element__int(elem, bits) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @public
  */
 m_initEventSystem__() {
  super.m_initEventSystem__();
  this.m_initSyntheticMouseUpEvents___$p_org_gwtproject_user_client_impl_DOMImplMozilla();
 }
 /**
  * @public
  */
 m_initSyntheticMouseUpEvents___$p_org_gwtproject_user_client_impl_DOMImplMozilla() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  DOMImplMozilla.$clinit = () =>{};
  DOMImplMozilla.$loadModules();
  DOMImplStandard.$clinit();
  DOMImplMozilla.m_addMozillaCaptureEventDispatchers__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DOMImplMozilla;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DOMImplMozilla, 'org.gwtproject.user.client.impl.DOMImplMozilla');

exports = DOMImplMozilla; 
//# sourceMappingURL=DOMImplMozilla.js.map