goog.module('org.gwtproject.user.client.ui.DisclosurePanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCloseHandlers = goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
const HasOpenHandlers = goog.require('org.gwtproject.event.logical.shared.HasOpenHandlers$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let OpenEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenEvent$impl');
let OpenHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.OpenHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ClickableHeader = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.ClickableHeader$impl');
let ContentAnimation = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.ContentAnimation$impl');
let DefaultHeader = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader$impl');
let DefaultImages = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel.DefaultImages$impl');
let DisclosurePanel__DefaultImagesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');
let HasText = goog.forwardDeclare('org.gwtproject.user.client.ui.HasText$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let VerticalPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.VerticalPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let WidgetIterators = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetIterators$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {ForIsWidget}
 * @implements {HasAnimation}
 * @implements {HasOpenHandlers<DisclosurePanel>}
 * @implements {HasCloseHandlers<DisclosurePanel>}
  */
class DisclosurePanel extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {VerticalPanel} */
  this.f_mainPanel__org_gwtproject_user_client_ui_DisclosurePanel_;
  /** @public {SimplePanel} */
  this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_;
  /** @public {ClickableHeader} */
  this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_;
  /** @public {boolean} */
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DisclosurePanel_ = false;
  /** @public {boolean} */
  this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_ = false;
 }
 /**
  * Factory method corresponding to constructor 'DisclosurePanel()'.
  * @return {!DisclosurePanel}
  * @public
  */
 static $create__() {
  DisclosurePanel.$clinit();
  let $instance = new DisclosurePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DisclosurePanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_DisclosurePanel();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_mainPanel__org_gwtproject_user_client_ui_DisclosurePanel_);
  this.f_mainPanel__org_gwtproject_user_client_ui_DisclosurePanel_.m_add__org_gwtproject_user_client_ui_Widget(this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_);
  this.f_mainPanel__org_gwtproject_user_client_ui_DisclosurePanel_.m_add__org_gwtproject_user_client_ui_Widget(this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getElement__().style, "padding", "0px");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getElement__().style, "overflow", "hidden");
  this.m_setStyleName__java_lang_String(DisclosurePanel.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_DisclosurePanel_);
  this.m_setContentDisplay__boolean_$p_org_gwtproject_user_client_ui_DisclosurePanel(false);
 }
 /**
  * Factory method corresponding to constructor 'DisclosurePanel(ImageResource, ImageResource, String)'.
  * @param {ImageResource} openImage
  * @param {ImageResource} closedImage
  * @param {?string} headerText
  * @return {!DisclosurePanel}
  * @public
  */
 static $create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String(openImage, closedImage, headerText) {
  DisclosurePanel.$clinit();
  let $instance = new DisclosurePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String(openImage, closedImage, headerText);
  return $instance;
 }
 /**
  * Initialization from constructor 'DisclosurePanel(ImageResource, ImageResource, String)'.
  * @param {ImageResource} openImage
  * @param {ImageResource} closedImage
  * @param {?string} headerText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String(openImage, closedImage, headerText) {
  this.$ctor__org_gwtproject_user_client_ui_DisclosurePanel__();
  this.m_setHeader__org_gwtproject_user_client_ui_Widget(DefaultHeader.$create__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String(this, openImage, closedImage, headerText));
 }
 /**
  * Factory method corresponding to constructor 'DisclosurePanel(String)'.
  * @param {?string} headerText
  * @return {!DisclosurePanel}
  * @public
  */
 static $create__java_lang_String(headerText) {
  DisclosurePanel.$clinit();
  let $instance = new DisclosurePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel__java_lang_String(headerText);
  return $instance;
 }
 /**
  * Initialization from constructor 'DisclosurePanel(String)'.
  * @param {?string} headerText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel__java_lang_String(headerText) {
  this.$ctor__org_gwtproject_user_client_ui_DisclosurePanel__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String(DisclosurePanel.f_DEFAULT_IMAGES__org_gwtproject_user_client_ui_DisclosurePanel_.m_disclosurePanelOpen__(), DisclosurePanel.f_DEFAULT_IMAGES__org_gwtproject_user_client_ui_DisclosurePanel_.m_disclosurePanelClosed__(), headerText);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  if ($Equality.$same(this.m_getContent__(), null)) {
   this.m_setContent__org_gwtproject_user_client_ui_Widget(w);
  } else {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("A DisclosurePanel can only contain two Widgets."));
  }
 }
 /**
  * @override
  * @param {IsWidget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget(w) {
  this.m_add__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /**
  * @override
  * @param {CloseHandler<DisclosurePanel>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, CloseEvent.m_getType__());
 }
 /**
  * @override
  * @param {OpenHandler<DisclosurePanel>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addOpenHandler__org_gwtproject_event_logical_shared_OpenHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, OpenEvent.m_getType__());
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  this.m_setContent__org_gwtproject_user_client_ui_Widget(null);
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getContent__() {
  return this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getWidget__();
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getHeader__() {
  return this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_.m_getWidget__();
 }
 /**
  * @return {HasText}
  * @public
  */
 m_getHeaderTextAccessor__() {
  let widget = this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_.m_getWidget__();
  return HasText.$isInstance(widget) ? /**@type {HasText} */ ($Casts.$to(widget, HasText)) : null;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DisclosurePanel_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isOpen__() {
  return this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_;
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return WidgetIterators.m_createWidgetIterator__org_gwtproject_user_client_ui_HasWidgets__arrayOf_org_gwtproject_user_client_ui_Widget(this, /**@type {!Array<Widget>} */ ($Arrays.$init([this.m_getContent__()], Widget)));
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  if ($Equality.$same(w, this.m_getContent__())) {
   this.m_setContent__org_gwtproject_user_client_ui_Widget(null);
   return true;
  }
  return false;
 }
 /**
  * @override
  * @param {IsWidget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_IsWidget(w) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /**
  * @override
  * @param {boolean} enable
  * @public
  */
 m_setAnimationEnabled__boolean(enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DisclosurePanel_ = enable;
 }
 /**
  * @param {Widget} content
  * @public
  */
 m_setContent__org_gwtproject_user_client_ui_Widget(content) {
  let currentContent = this.m_getContent__();
  if (!$Equality.$same(currentContent, null)) {
   this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_setWidget__org_gwtproject_user_client_ui_Widget(null);
   currentContent.m_removeStyleName__java_lang_String(DisclosurePanel.f_STYLENAME_CONTENT__org_gwtproject_user_client_ui_DisclosurePanel_);
  }
  if (!$Equality.$same(content, null)) {
   this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_setWidget__org_gwtproject_user_client_ui_Widget(content);
   content.m_addStyleName__java_lang_String(DisclosurePanel.f_STYLENAME_CONTENT__org_gwtproject_user_client_ui_DisclosurePanel_);
   this.m_setContentDisplay__boolean_$p_org_gwtproject_user_client_ui_DisclosurePanel(false);
  }
 }
 /**
  * @param {Widget} headerWidget
  * @public
  */
 m_setHeader__org_gwtproject_user_client_ui_Widget(headerWidget) {
  this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_.m_setWidget__org_gwtproject_user_client_ui_Widget(headerWidget);
 }
 /**
  * @param {boolean} isOpen
  * @public
  */
 m_setOpen__boolean(isOpen) {
  if (this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_ != isOpen) {
   this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_ = isOpen;
   this.m_setContentDisplay__boolean_$p_org_gwtproject_user_client_ui_DisclosurePanel(true);
   this.m_fireEvent___$p_org_gwtproject_user_client_ui_DisclosurePanel();
  }
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_.m_ensureDebugId__java_lang_String(j_l_String.m_valueOf__java_lang_Object(baseID) + "-header");
 }
 /**
  * @public
  */
 m_fireEvent___$p_org_gwtproject_user_client_ui_DisclosurePanel() {
  if (this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_) {
   OpenEvent.m_fire__org_gwtproject_event_logical_shared_HasOpenHandlers__java_lang_Object(this, this);
  } else {
   CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(this, this);
  }
 }
 /**
  * @param {boolean} animate
  * @public
  */
 m_setContentDisplay__boolean_$p_org_gwtproject_user_client_ui_DisclosurePanel(animate) {
  if (this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_) {
   this.m_removeStyleDependentName__java_lang_String(DisclosurePanel.f_STYLENAME_SUFFIX_CLOSED__org_gwtproject_user_client_ui_DisclosurePanel_);
   this.m_addStyleDependentName__java_lang_String(DisclosurePanel.f_STYLENAME_SUFFIX_OPEN__org_gwtproject_user_client_ui_DisclosurePanel_);
  } else {
   this.m_removeStyleDependentName__java_lang_String(DisclosurePanel.f_STYLENAME_SUFFIX_OPEN__org_gwtproject_user_client_ui_DisclosurePanel_);
   this.m_addStyleDependentName__java_lang_String(DisclosurePanel.f_STYLENAME_SUFFIX_CLOSED__org_gwtproject_user_client_ui_DisclosurePanel_);
  }
  if (!$Equality.$same(this.m_getContent__(), null)) {
   if ($Equality.$same(DisclosurePanel.f_contentAnimation__org_gwtproject_user_client_ui_DisclosurePanel_, null)) {
    DisclosurePanel.f_contentAnimation__org_gwtproject_user_client_ui_DisclosurePanel_ = ContentAnimation.$create__();
   }
   DisclosurePanel.f_contentAnimation__org_gwtproject_user_client_ui_DisclosurePanel_.m_setOpen__org_gwtproject_user_client_ui_DisclosurePanel__boolean(this, animate && this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DisclosurePanel_);
  }
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_DisclosurePanel() {
  this.f_mainPanel__org_gwtproject_user_client_ui_DisclosurePanel_ = VerticalPanel.$create__();
  this.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_ = SimplePanel.$create__();
  this.f_header__org_gwtproject_user_client_ui_DisclosurePanel_ = ClickableHeader.$create__org_gwtproject_user_client_ui_DisclosurePanel(this);
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_DisclosurePanel_ = false;
  this.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  DisclosurePanel.$clinit = () =>{};
  DisclosurePanel.$loadModules();
  Composite.$clinit();
  Iterable.$clinit();
  DisclosurePanel.f_DEFAULT_IMAGES__org_gwtproject_user_client_ui_DisclosurePanel_ = DisclosurePanel__DefaultImagesImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DisclosurePanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  OpenEvent = goog.module.get('org.gwtproject.event.logical.shared.OpenEvent$impl');
  ClickableHeader = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel.ClickableHeader$impl');
  ContentAnimation = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel.ContentAnimation$impl');
  DefaultHeader = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel.DefaultHeader$impl');
  DisclosurePanel__DefaultImagesImpl = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel_DefaultImagesImpl$impl');
  HasText = goog.module.get('org.gwtproject.user.client.ui.HasText$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  VerticalPanel = goog.module.get('org.gwtproject.user.client.ui.VerticalPanel$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  WidgetIterators = goog.module.get('org.gwtproject.user.client.ui.WidgetIterators$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DisclosurePanel, 'org.gwtproject.user.client.ui.DisclosurePanel');

ForIsWidget.$markImplementor(DisclosurePanel);
HasAnimation.$markImplementor(DisclosurePanel);
HasOpenHandlers.$markImplementor(DisclosurePanel);
HasCloseHandlers.$markImplementor(DisclosurePanel);

/** @public {DefaultImages} */
DisclosurePanel.f_DEFAULT_IMAGES__org_gwtproject_user_client_ui_DisclosurePanel_;
/** @public {number} @const */
DisclosurePanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_DisclosurePanel_ = 350;
/** @public {?string} @const */
DisclosurePanel.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_DisclosurePanel_ = "gwt-DisclosurePanel";
/** @public {?string} @const */
DisclosurePanel.f_STYLENAME_SUFFIX_OPEN__org_gwtproject_user_client_ui_DisclosurePanel_ = "open";
/** @public {?string} @const */
DisclosurePanel.f_STYLENAME_SUFFIX_CLOSED__org_gwtproject_user_client_ui_DisclosurePanel_ = "closed";
/** @public {?string} @const */
DisclosurePanel.f_STYLENAME_HEADER__org_gwtproject_user_client_ui_DisclosurePanel_ = "header";
/** @public {?string} @const */
DisclosurePanel.f_STYLENAME_CONTENT__org_gwtproject_user_client_ui_DisclosurePanel_ = "content";
/** @public {ContentAnimation} */
DisclosurePanel.f_contentAnimation__org_gwtproject_user_client_ui_DisclosurePanel_;

exports = DisclosurePanel; 
//# sourceMappingURL=DisclosurePanel.js.map