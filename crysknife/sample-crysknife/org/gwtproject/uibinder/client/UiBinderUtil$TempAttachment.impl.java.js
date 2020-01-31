goog.module('org.gwtproject.uibinder.client.UiBinderUtil.TempAttachment$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let UiBinderUtil = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinderUtil$impl');

class TempAttachment extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_element__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_;
  /**@type {Object}*/
  this.f_origParent__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_;
  /**@type {Object}*/
  this.f_origSibling__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_;
 }
 /** @return {!TempAttachment} */
 static $create__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ origParent, /** Object */ origSibling, /** Object */ element) {
  TempAttachment.$clinit();
  let $instance = new TempAttachment();
  $instance.$ctor__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(origParent, origSibling, element);
  return $instance;
 }
 
 $ctor__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ origParent, /** Object */ origSibling, /** Object */ element) {
  this.$ctor__java_lang_Object__();
  this.f_origParent__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_ = origParent;
  this.f_origSibling__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_ = origSibling;
  this.f_element__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_ = element;
 }
 
 m_detach__() {
  if (!$Equality.$same(this.f_origParent__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_, null)) {
   this.f_origParent__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_.insertBefore(this.f_element__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_, this.f_origSibling__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_);
  } else {
   UiBinderUtil.m_orphan__org_gwtproject_dom_client_Node(this.f_element__org_gwtproject_uibinder_client_UiBinderUtil_TempAttachment_);
  }
 }
 
 static $clinit() {
  TempAttachment.$clinit = () =>{};
  TempAttachment.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TempAttachment;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  UiBinderUtil = goog.module.get('org.gwtproject.uibinder.client.UiBinderUtil$impl');
 }
 
}
$Util.$setClassMetadata(TempAttachment, 'org.gwtproject.uibinder.client.UiBinderUtil$TempAttachment');

exports = TempAttachment; 
//# sourceMappingURL=UiBinderUtil$TempAttachment.js.map