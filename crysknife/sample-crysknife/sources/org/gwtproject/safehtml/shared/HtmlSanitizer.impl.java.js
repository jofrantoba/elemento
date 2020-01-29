goog.module('org.gwtproject.safehtml.shared.HtmlSanitizer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.safehtml.shared.HtmlSanitizer.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 */
class HtmlSanitizer {
 /**
  * @abstract
  * @param {?string} html
  * @return {SafeHtml}
  * @public
  */
 m_sanitize__java_lang_String(html) {}
 /**
  * @param {?function(?string):SafeHtml} fn
  * @return {HtmlSanitizer}
  * @public
  */
 static $adapt(fn) {
  HtmlSanitizer.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlSanitizer.$clinit = () =>{};
  HtmlSanitizer.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_safehtml_shared_HtmlSanitizer = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_shared_HtmlSanitizer;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.safehtml.shared.HtmlSanitizer.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HtmlSanitizer, 'org.gwtproject.safehtml.shared.HtmlSanitizer');

HtmlSanitizer.$markImplementor(/** @type {Function} */ (HtmlSanitizer));

exports = HtmlSanitizer; 
//# sourceMappingURL=HtmlSanitizer.js.map