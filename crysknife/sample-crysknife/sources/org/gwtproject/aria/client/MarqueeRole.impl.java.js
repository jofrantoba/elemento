goog.module('org.gwtproject.aria.client.MarqueeRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SectionRole = goog.require('org.gwtproject.aria.client.SectionRole$impl');

/**
 * @interface
 * @extends {SectionRole}
 */
class MarqueeRole {
 
 static $clinit() {
  MarqueeRole.$clinit = () =>{};
  MarqueeRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SectionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MarqueeRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MarqueeRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MarqueeRole, 'org.gwtproject.aria.client.MarqueeRole');

MarqueeRole.$markImplementor(/** @type {Function} */ (MarqueeRole));

exports = MarqueeRole; 
//# sourceMappingURL=MarqueeRole.js.map