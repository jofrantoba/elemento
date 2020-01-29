goog.module('org.gwtproject.user.client.ui.AbstractImagePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let ImagePrototypeElement = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractImagePrototype.ImagePrototypeElement$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let ClippedImagePrototype = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImagePrototype$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
  */
class AbstractImagePrototype extends j_l_Object {
 /**
  * @public
  */
 constructor() {
  AbstractImagePrototype.$clinit();
  super();
  this.$ctor__org_gwtproject_user_client_ui_AbstractImagePrototype__();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AbstractImagePrototype__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {ImageResource} resource
  * @return {AbstractImagePrototype}
  * @public
  */
 static m_create__org_gwtproject_resources_client_ImageResource(resource) {
  AbstractImagePrototype.$clinit();
  return new ClippedImagePrototype(resource.m_getSafeUri__(), resource.m_getLeft__(), resource.m_getTop__(), resource.m_getWidth__(), resource.m_getHeight__());
 }
 /**
  * @abstract
  * @param {Image} image
  * @public
  */
 m_applyTo__org_gwtproject_user_client_ui_Image(image) {}
 /**
  * @param {ImagePrototypeElement} imageElement
  * @public
  */
 m_applyTo__org_gwtproject_user_client_ui_AbstractImagePrototype_ImagePrototypeElement(imageElement) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @return {ImagePrototypeElement}
  * @public
  */
 m_createElement__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @abstract
  * @return {Image}
  * @public
  */
 m_createImage__() {}
 /**
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return this.m_getSafeHtml__().m_asString__();
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_getSafeHtml__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractImagePrototype.$clinit = () =>{};
  AbstractImagePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractImagePrototype;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ClippedImagePrototype = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImagePrototype$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractImagePrototype, 'org.gwtproject.user.client.ui.AbstractImagePrototype');

exports = AbstractImagePrototype; 
//# sourceMappingURL=AbstractImagePrototype.js.map