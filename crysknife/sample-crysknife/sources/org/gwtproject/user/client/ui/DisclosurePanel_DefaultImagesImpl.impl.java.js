goog.module('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultImages = goog.require('org.gwtproject.user.client.ui.DisclosurePanel.DefaultImages$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let disclosurePanelClosedInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl.disclosurePanelClosedInitializer$impl');
let disclosurePanelOpenInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl.disclosurePanelOpenInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DefaultImages}
  */
class DisclosurePanel__DefaultImagesImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DisclosurePanel__DefaultImagesImpl}
  * @public
  */
 static $create__() {
  DisclosurePanel__DefaultImagesImpl.$clinit();
  let $instance = new DisclosurePanel__DefaultImagesImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_disclosurePanelClosedInitializer___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl() {
  DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("disclosurePanelClosed", UriUtils.m_fromTrustedString__java_lang_String(DisclosurePanel__DefaultImagesImpl.f_externalImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_), 0, 0, 16, 16, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_disclosurePanelClosed__() {
  return disclosurePanelClosedInitializer.m_get__();
 }
 /**
  * @public
  */
 m_disclosurePanelOpenInitializer___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl() {
  DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("disclosurePanelOpen", UriUtils.m_fromTrustedString__java_lang_String(DisclosurePanel__DefaultImagesImpl.f_externalImage0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_), 0, 0, 16, 16, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_disclosurePanelOpen__() {
  return disclosurePanelOpenInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_disclosurePanelClosed__(), this.m_disclosurePanelOpen__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(DisclosurePanel__DefaultImagesImpl.f_resourceMap__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_, null)) {
   DisclosurePanel__DefaultImagesImpl.f_resourceMap__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   DisclosurePanel__DefaultImagesImpl.f_resourceMap__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_.put("disclosurePanelClosed", this.m_disclosurePanelClosed__());
   DisclosurePanel__DefaultImagesImpl.f_resourceMap__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_.put("disclosurePanelOpen", this.m_disclosurePanelOpen__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(DisclosurePanel__DefaultImagesImpl.f_resourceMap__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {DisclosurePanel__DefaultImagesImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_() {
  return (DisclosurePanel__DefaultImagesImpl.$clinit(), DisclosurePanel__DefaultImagesImpl.$f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_);
 }
 /**
  * @param {DisclosurePanel__DefaultImagesImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_(value) {
  (DisclosurePanel__DefaultImagesImpl.$clinit(), DisclosurePanel__DefaultImagesImpl.$f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_() {
  return (DisclosurePanel__DefaultImagesImpl.$clinit(), DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_(value) {
  (DisclosurePanel__DefaultImagesImpl.$clinit(), DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_() {
  return (DisclosurePanel__DefaultImagesImpl.$clinit(), DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_(value) {
  (DisclosurePanel__DefaultImagesImpl.$clinit(), DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  DisclosurePanel__DefaultImagesImpl.$clinit = () =>{};
  DisclosurePanel__DefaultImagesImpl.$loadModules();
  j_l_Object.$clinit();
  DisclosurePanel__DefaultImagesImpl.$f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = DisclosurePanel__DefaultImagesImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DisclosurePanel__DefaultImagesImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  disclosurePanelClosedInitializer = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl.disclosurePanelClosedInitializer$impl');
  disclosurePanelOpenInitializer = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl.disclosurePanelOpenInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DisclosurePanel__DefaultImagesImpl, 'org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl');

DefaultImages.$markImplementor(DisclosurePanel__DefaultImagesImpl);

/** @private {DisclosurePanel__DefaultImagesImpl} */
DisclosurePanel__DefaultImagesImpl.$f__instance0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
DisclosurePanel__DefaultImagesImpl.f_resourceMap__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_;
/** @public {?string} @const */
DisclosurePanel__DefaultImagesImpl.f_externalImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAnklEQVR4XmNgoDZITk4WQhcjCaSlpZ1JTU3tBdL86HJEAaDGS0D8H4hfpaenJ6PLEwRIBsDweSC2QVeHE2AxAIaXArEcunoMgMcAEP4GDJ+6wsJCTnR9cEDAABjeGBoayoyuFwwIGPCcYMDiMOAnKGqzsrJ40NVjACwGbAQmLhV0dTgBkgFXgc71QJcnCIAaDwOdm48zkAgBvFE0KAEAjDyRV4CcerkAAAAASUVORK5CYII=";
/** @public {?string} @const */
DisclosurePanel__DefaultImagesImpl.f_externalImage0__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4XmNgGD6gsLCQMy0t7TAQXyICn0lOThZCN4MhNTU1Hyj5nxAGqutF1wsGoaGhzEAFV9E1oOFXQMyPrhcO0tPTPbBogmOgfDK6HgwAVLgRXSMUn0dXixUAA0gFqPgnFgNs0NXiBKCAQtO8FF0NXpCVlcUD1PQcqvkbEMuhqyEIQAEGMgDomjp0OaIB0ICNoESGLk40AKUNdLHBBQAIRpFXGETgdQAAAABJRU5ErkJggg==";
/** @private {ImageResource} */
DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelClosed__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_;
/** @private {ImageResource} */
DisclosurePanel__DefaultImagesImpl.$f_disclosurePanelOpen__org_gwtproject_user_client_ui_DisclosurePanel_DefaultImagesImpl_;

exports = DisclosurePanel__DefaultImagesImpl; 
//# sourceMappingURL=DisclosurePanel_DefaultImagesImpl.js.map