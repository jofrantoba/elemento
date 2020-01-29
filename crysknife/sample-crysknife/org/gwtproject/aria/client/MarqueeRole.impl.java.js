goog.module('org.gwtproject.aria.client.MarqueeRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class MarqueeRole {
 /**
  * @public
  */
 static $clinit() {
  MarqueeRole.$clinit = () =>{};
  MarqueeRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SectionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_MarqueeRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MarqueeRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MarqueeRole, 'org.gwtproject.aria.client.MarqueeRole');

MarqueeRole.$markImplementor(/** @type {Function} */ (MarqueeRole));

exports = MarqueeRole; 
//# sourceMappingURL=MarqueeRole.js.map