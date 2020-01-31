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
 /** @abstract */
 m_claimElement__org_gwtproject_dom_client_Element(/** Object */ element) {}
 /** @abstract */
 m_initializeClaimedElement__() {}
 /** @abstract @return {SafeHtml} */
 m_render__org_gwtproject_user_client_ui_RenderableStamper(/** RenderableStamper */ stamper) {}
 /** @abstract */
 m_render__org_gwtproject_user_client_ui_RenderableStamper__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** RenderableStamper */ stamper, /** SafeHtmlBuilder */ builder) {}
 
 static $clinit() {
  IsRenderable.$clinit = () =>{};
  IsRenderable.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_IsRenderable = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_IsRenderable;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(IsRenderable, 'org.gwtproject.user.client.ui.IsRenderable');

IsRenderable.$markImplementor(/** @type {Function} */ (IsRenderable));

exports = IsRenderable; 
//# sourceMappingURL=IsRenderable.js.map