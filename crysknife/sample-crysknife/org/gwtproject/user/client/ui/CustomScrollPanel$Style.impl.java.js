goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class Style {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_customScrollPanel__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_customScrollPanelCorner__() {}
 /**
  * @public
  */
 static $clinit() {
  Style.$clinit = () =>{};
  Style.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CssResource.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_CustomScrollPanel_Style = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_CustomScrollPanel_Style;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Style, 'org.gwtproject.user.client.ui.CustomScrollPanel$Style');

Style.$markImplementor(/** @type {Function} */ (Style));

/** @public {?string} @const */
Style.f_DEFAULT_CSS__org_gwtproject_user_client_ui_CustomScrollPanel_Style = "org/gwtproject/user/client/ui/CustomScrollPanel.gss";

exports = Style; 
//# sourceMappingURL=CustomScrollPanel$Style.js.map