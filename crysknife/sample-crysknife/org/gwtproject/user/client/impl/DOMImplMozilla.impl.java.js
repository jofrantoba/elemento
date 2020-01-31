goog.module('org.gwtproject.user.client.impl.DOMImplMozilla$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DOMImplStandard = goog.require('org.gwtproject.user.client.impl.DOMImplStandard$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class DOMImplMozilla extends DOMImplStandard {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DOMImplMozilla} */
 static $create__() {
  DOMImplMozilla.$clinit();
  let $instance = new DOMImplMozilla();
  $instance.$ctor__org_gwtproject_user_client_impl_DOMImplMozilla__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_impl_DOMImplMozilla__() {
  this.$ctor__org_gwtproject_user_client_impl_DOMImplStandard__();
 }
 
 static m_addMozillaCaptureEventDispatchers__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 m_sinkEvents__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ bits) {
  super.m_sinkEvents__org_gwtproject_dom_client_Element__int(elem, bits);
  this.m_sinkEventsMozilla__org_gwtproject_dom_client_Element__int(elem, bits);
 }
 
 m_sinkEventsMozilla__org_gwtproject_dom_client_Element__int(/** Object */ elem, /** number */ bits) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 m_initEventSystem__() {
  super.m_initEventSystem__();
  this.m_initSyntheticMouseUpEvents___$p_org_gwtproject_user_client_impl_DOMImplMozilla();
 }
 
 m_initSyntheticMouseUpEvents___$p_org_gwtproject_user_client_impl_DOMImplMozilla() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 
 static $clinit() {
  DOMImplMozilla.$clinit = () =>{};
  DOMImplMozilla.$loadModules();
  DOMImplStandard.$clinit();
  DOMImplMozilla.m_addMozillaCaptureEventDispatchers__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOMImplMozilla;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DOMImplMozilla, 'org.gwtproject.user.client.impl.DOMImplMozilla');

exports = DOMImplMozilla; 
//# sourceMappingURL=DOMImplMozilla.js.map