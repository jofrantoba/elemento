goog.module('org.jboss.elemento.TextContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class TextContent {
 /**
  * @abstract
  * @param {?string} text
  * @return {B}
  * @public
  */
 m_textContent__java_lang_String(text) {}
 /**
  * @template E, B
  * @param {!TextContent<E, B>} $thisArg
  * @param {?string} text
  * @return {B}
  * @public
  */
 static m_textContent__$default__org_jboss_elemento_TextContent__java_lang_String($thisArg, text) {
  TextContent.$clinit();
  /**@type {HTMLElement} */ ($thisArg.m_element__()).textContent = text;
  return $thisArg.m_that__();
 }
 /**
  * @public
  */
 static $clinit() {
  TextContent.$clinit = () =>{};
  TextContent.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  TypedBuilder.$markImplementor(classConstructor);
  IsElement.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_TextContent = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_TextContent;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextContent, 'org.jboss.elemento.TextContent');

TextContent.$markImplementor(/** @type {Function} */ (TextContent));

exports = TextContent; 
//# sourceMappingURL=TextContent.js.map