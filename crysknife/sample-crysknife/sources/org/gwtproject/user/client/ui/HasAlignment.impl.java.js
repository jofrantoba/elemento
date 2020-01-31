goog.module('org.gwtproject.user.client.ui.HasAlignment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasHorizontalAlignment = goog.require('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
const HasVerticalAlignment = goog.require('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');

/**
 * @interface
 * @extends {HasHorizontalAlignment}
 * @extends {HasVerticalAlignment}
 */
class HasAlignment {
 
 static $clinit() {
  HasAlignment.$clinit = () =>{};
  HasAlignment.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasHorizontalAlignment.$markImplementor(ctor);
  HasVerticalAlignment.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasAlignment = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasAlignment;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAlignment, 'org.gwtproject.user.client.ui.HasAlignment');

HasAlignment.$markImplementor(/** @type {Function} */ (HasAlignment));

exports = HasAlignment; 
//# sourceMappingURL=HasAlignment.js.map