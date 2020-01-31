goog.module('org.gwtproject.user.client.ui.ProvidesResize$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ProvidesResize {
 
 static $clinit() {
  ProvidesResize.$clinit = () =>{};
  ProvidesResize.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_ProvidesResize = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_ProvidesResize;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ProvidesResize, 'org.gwtproject.user.client.ui.ProvidesResize');

ProvidesResize.$markImplementor(/** @type {Function} */ (ProvidesResize));

exports = ProvidesResize; 
//# sourceMappingURL=ProvidesResize.js.map