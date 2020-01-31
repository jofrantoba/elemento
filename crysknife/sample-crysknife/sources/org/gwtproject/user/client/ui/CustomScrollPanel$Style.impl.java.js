goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /** @abstract @return {?string} */
 m_customScrollPanel__() {}
 /** @abstract @return {?string} */
 m_customScrollPanelCorner__() {}
 
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_CustomScrollPanel_Style = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_CustomScrollPanel_Style;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.client.ui.CustomScrollPanel$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/**@const {?string}*/
Style.f_DEFAULT_CSS__org_gwtproject_user_client_ui_CustomScrollPanel_Style = "org/gwtproject/user/client/ui/CustomScrollPanel.gss";

exports = Style; 
//# sourceMappingURL=CustomScrollPanel$Style.js.map