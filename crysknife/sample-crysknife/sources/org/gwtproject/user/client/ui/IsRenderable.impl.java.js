goog.module('org.gwtproject.user.client.ui.IsRenderable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let RenderableStamper = goog.forwardDeclare('org.gwtproject.user.client.ui.RenderableStamper$impl');

/**
 * @interface
 */
class IsRenderable {
 /**
  * @abstract
  * @param {Object} element
  * @public
  */
 m_claimElement__org_gwtproject_dom_client_Element(element) {}
 /**
  * @abstract
  * @public
  */
 m_initializeClaimedElement__() {}
 /**
  * @abstract
  * @param {RenderableStamper} stamper
  * @return {SafeHtml}
  * @public
  */
 m_render__org_gwtproject_user_client_ui_RenderableStamper(stamper) {}
 /**
  * @abstract
  * @param {RenderableStamper} stamper
  * @param {SafeHtmlBuilder} builder
  * @public
  */
 m_render__org_gwtproject_user_client_ui_RenderableStamper__org_gwtproject_safehtml_shared_SafeHtmlBuilder(stamper, builder) {}
 /**
  * @public
  */
 static $clinit() {
  IsRenderable.$clinit = () =>{};
  IsRenderable.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_IsRenderable = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IsRenderable;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IsRenderable, 'org.gwtproject.user.client.ui.IsRenderable');

IsRenderable.$markImplementor(/** @type {Function} */ (IsRenderable));

exports = IsRenderable; 
//# sourceMappingURL=IsRenderable.js.map