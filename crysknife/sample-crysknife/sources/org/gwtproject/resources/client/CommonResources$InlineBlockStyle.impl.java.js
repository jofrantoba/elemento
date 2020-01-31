goog.module('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class InlineBlockStyle {
 /** @abstract @return {?string} */
 m_inlineBlock__() {}
 
 static $clinit() {
  InlineBlockStyle.$clinit = () =>{};
  InlineBlockStyle.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  CssResource.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CommonResources_InlineBlockStyle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CommonResources_InlineBlockStyle;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InlineBlockStyle, 'org.gwtproject.resources.client.CommonResources$InlineBlockStyle');

InlineBlockStyle.$markImplementor(/** @type {Function} */ (InlineBlockStyle));

exports = InlineBlockStyle; 
//# sourceMappingURL=CommonResources$InlineBlockStyle.js.map