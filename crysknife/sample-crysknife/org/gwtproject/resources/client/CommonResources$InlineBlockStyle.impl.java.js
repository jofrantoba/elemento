goog.module('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssResource = goog.require('org.gwtproject.resources.client.CssResource$impl');

/**
 * @interface
 * @extends {CssResource}
 */
class InlineBlockStyle {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_inlineBlock__() {}
 /**
  * @public
  */
 static $clinit() {
  InlineBlockStyle.$clinit = () =>{};
  InlineBlockStyle.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CommonResources_InlineBlockStyle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CommonResources_InlineBlockStyle;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InlineBlockStyle, 'org.gwtproject.resources.client.CommonResources$InlineBlockStyle');

InlineBlockStyle.$markImplementor(/** @type {Function} */ (InlineBlockStyle));

exports = InlineBlockStyle; 
//# sourceMappingURL=CommonResources$InlineBlockStyle.js.map