goog.module('org.gwtproject.user.client.ui.DialogBox.Caption$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllMouseHandlers = goog.require('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');

/**
 * @interface
 * @extends {HasAllMouseHandlers}
 * @extends {HasHTML}
 * @extends {HasSafeHtml}
 * @extends {IsWidget}
 */
class Caption {
 
 static $clinit() {
  Caption.$clinit = () =>{};
  Caption.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasAllMouseHandlers.$markImplementor(ctor);
  HasHTML.$markImplementor(ctor);
  HasSafeHtml.$markImplementor(ctor);
  IsWidget.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_DialogBox_Caption = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_DialogBox_Caption;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Caption, 'org.gwtproject.user.client.ui.DialogBox$Caption');

Caption.$markImplementor(/** @type {Function} */ (Caption));

exports = Caption; 
//# sourceMappingURL=DialogBox$Caption.js.map