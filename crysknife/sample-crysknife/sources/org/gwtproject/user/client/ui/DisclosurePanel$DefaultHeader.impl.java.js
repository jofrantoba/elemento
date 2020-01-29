goog.module('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CloseHandler = goog.require('org.gwtproject.event.logical.shared.CloseHandler$impl');
const OpenHandler = goog.require('org.gwtproject.event.logical.shared.OpenHandler$impl');
const HasText = goog.require('org.gwtproject.user.client.ui.HasText$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let DisclosurePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader.$2$impl');
let Imager = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.Imager$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

/**
 * @implements {HasText}
 * @implements {OpenHandler<DisclosurePanel>}
 * @implements {CloseHandler<DisclosurePanel>}
  */
class DefaultHeader extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DisclosurePanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader;
  /** @public {Object} */
  this.f_labelTD__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_;
  /** @public {Image} */
  this.f_iconImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_;
  /** @public {Imager} */
  this.f_imager__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_;
 }
 /**
  * Factory method corresponding to constructor 'DefaultHeader(DisclosurePanel, String)'.
  * @param {DisclosurePanel} $outer_this
  * @param {?string} text
  * @return {!DefaultHeader}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DisclosurePanel__java_lang_String($outer_this, text) {
  let $instance = new DefaultHeader();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__java_lang_String($outer_this, text);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultHeader(DisclosurePanel, String)'.
  * @param {DisclosurePanel} $outer_this
  * @param {?string} text
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__java_lang_String($outer_this, text) {
  this.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_user_client_ui_DisclosurePanel_Imager__java_lang_String($outer_this, $1.$create__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader(this), text);
 }
 /**
  * Factory method corresponding to constructor 'DefaultHeader(DisclosurePanel, Imager, String)'.
  * @param {DisclosurePanel} $outer_this
  * @param {Imager} imager
  * @param {?string} text
  * @return {!DefaultHeader}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_user_client_ui_DisclosurePanel_Imager__java_lang_String($outer_this, imager, text) {
  let $instance = new DefaultHeader();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_user_client_ui_DisclosurePanel_Imager__java_lang_String($outer_this, imager, text);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultHeader(DisclosurePanel, Imager, String)'.
  * @param {DisclosurePanel} $outer_this
  * @param {Imager} imager
  * @param {?string} text
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_user_client_ui_DisclosurePanel_Imager__java_lang_String($outer_this, imager, text) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.f_imager__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_ = imager;
  this.f_iconImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_ = imager.m_makeImage__();
  let root = DOM.m_createTable__();
  let tbody = DOM.m_createTBody__();
  let tr = DOM.m_createTR__();
  let imageTD = DOM.m_createTD__();
  this.f_labelTD__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_ = DOM.m_createTD__();
  this.m_setElement__org_gwtproject_dom_client_Element(root);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(root, tbody);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tbody, tr);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, imageTD);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, this.f_labelTD__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(imageTD, "align", "center");
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(imageTD, "valign", "middle");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(imageTD.style, "width", this.f_iconImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_.m_getWidth__() + "px");
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(imageTD, this.f_iconImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_.m_getElement__());
  this.m_setText__java_lang_String(text);
  $outer_this.m_addOpenHandler__org_gwtproject_event_logical_shared_OpenHandler(this);
  $outer_this.m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(this);
  this.m_setStyle___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader();
 }
 /**
  * Factory method corresponding to constructor 'DefaultHeader(DisclosurePanel, ImageResource, ImageResource, String)'.
  * @param {DisclosurePanel} $outer_this
  * @param {ImageResource} openImage
  * @param {ImageResource} closedImage
  * @param {?string} text
  * @return {!DefaultHeader}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String($outer_this, openImage, closedImage, text) {
  DefaultHeader.$clinit();
  let $instance = new DefaultHeader();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String($outer_this, openImage, closedImage, text);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultHeader(DisclosurePanel, ImageResource, ImageResource, String)'.
  * @param {DisclosurePanel} $outer_this
  * @param {ImageResource} openImage
  * @param {ImageResource} closedImage
  * @param {?string} text
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String($outer_this, openImage, closedImage, text) {
  this.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_user_client_ui_DisclosurePanel_Imager__java_lang_String($outer_this, $2.$create__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource(this, closedImage, openImage), text);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.f_labelTD__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_);
 }
 /**
  * @override
  * @param {CloseEvent<DisclosurePanel>} event
  * @public
  */
 m_onClose__org_gwtproject_event_logical_shared_CloseEvent(event) {
  this.m_setStyle___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader();
 }
 /**
  * @override
  * @param {OpenEvent<DisclosurePanel>} event
  * @public
  */
 m_onOpen__org_gwtproject_event_logical_shared_OpenEvent(event) {
  this.m_setStyle___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader();
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_labelTD__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_, text);
 }
 /**
  * @public
  */
 m_setStyle___$p_org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader() {
  this.f_imager__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_.m_updateImage__boolean__org_gwtproject_user_client_ui_Image(this.f_$outer_this__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_, this.f_iconImage__org_gwtproject_user_client_ui_DisclosurePanel_DefaultHeader_);
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultHeader.$clinit = () =>{};
  DefaultHeader.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultHeader;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader.$2$impl');
 }
 
}
$Util.$setClassMetadata(DefaultHeader, 'org.gwtproject.user.client.ui.DisclosurePanel$DefaultHeader');

HasText.$markImplementor(DefaultHeader);
OpenHandler.$markImplementor(DefaultHeader);
CloseHandler.$markImplementor(DefaultHeader);

exports = DefaultHeader; 
//# sourceMappingURL=DisclosurePanel$DefaultHeader.js.map