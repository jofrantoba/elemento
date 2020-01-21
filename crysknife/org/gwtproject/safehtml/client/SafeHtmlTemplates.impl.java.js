goog.module('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class SafeHtmlTemplates {
 /**
  * @public
  */
 static $clinit() {
  SafeHtmlTemplates.$clinit = () =>{};
  SafeHtmlTemplates.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_safehtml_client_SafeHtmlTemplates;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SafeHtmlTemplates, 'org.gwtproject.safehtml.client.SafeHtmlTemplates');

SafeHtmlTemplates.$markImplementor(/** @type {Function} */ (SafeHtmlTemplates));

exports = SafeHtmlTemplates; 
//# sourceMappingURL=SafeHtmlTemplates.js.map