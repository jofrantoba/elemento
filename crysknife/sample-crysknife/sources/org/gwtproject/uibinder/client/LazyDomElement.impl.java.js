goog.module('org.gwtproject.uibinder.client.LazyDomElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
  */
class LazyDomElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_element__org_gwtproject_uibinder_client_LazyDomElement_;
  /**@type {?string}*/
  this.f_domId__org_gwtproject_uibinder_client_LazyDomElement_;
 }
 /** @template T @return {!LazyDomElement<T>} */
 static $create__java_lang_String(/** ?string */ domId) {
  LazyDomElement.$clinit();
  let $instance = new LazyDomElement();
  $instance.$ctor__org_gwtproject_uibinder_client_LazyDomElement__java_lang_String(domId);
  return $instance;
 }
 
 $ctor__org_gwtproject_uibinder_client_LazyDomElement__java_lang_String(/** ?string */ domId) {
  this.$ctor__java_lang_Object__();
  this.f_domId__org_gwtproject_uibinder_client_LazyDomElement_ = domId;
 }
 /** @return {T} */
 m_get__() {
  if ($Equality.$same(this.f_element__org_gwtproject_uibinder_client_LazyDomElement_, null)) {
   this.f_element__org_gwtproject_uibinder_client_LazyDomElement_ = /**@type {T}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(Document_$Overlay.m_get__().getElementById(this.f_domId__org_gwtproject_uibinder_client_LazyDomElement_)), Element_$Overlay));
   if ($Equality.$same(this.f_element__org_gwtproject_uibinder_client_LazyDomElement_, null)) {
    throw $Exceptions.toJs(RuntimeException.$create__java_lang_String("Cannot find element with id \"" + j_l_String.m_valueOf__java_lang_Object(this.f_domId__org_gwtproject_uibinder_client_LazyDomElement_) + "\". Perhaps it is not attached to the document body."));
   }
   /**@type {Object}*/ (this.f_element__org_gwtproject_uibinder_client_LazyDomElement_).removeAttribute("id");
  }
  return this.f_element__org_gwtproject_uibinder_client_LazyDomElement_;
 }
 
 static $clinit() {
  LazyDomElement.$clinit = () =>{};
  LazyDomElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LazyDomElement;
 }
 
 static $loadModules() {
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(LazyDomElement, 'org.gwtproject.uibinder.client.LazyDomElement');

exports = LazyDomElement; 
//# sourceMappingURL=LazyDomElement.js.map