goog.module('org.gwtproject.user.client.ui.DisclosurePanel.ContentAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DisclosurePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DisclosurePanel$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ContentAnimation extends Animation {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_opening__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_ = false;
  /**@type {DisclosurePanel}*/
  this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_;
 }
 /** @return {!ContentAnimation} */
 static $create__() {
  ContentAnimation.$clinit();
  let $instance = new ContentAnimation();
  $instance.$ctor__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__();
 }
 
 m_setOpen__org_gwtproject_user_client_ui_DisclosurePanel__boolean(/** DisclosurePanel */ panel, /** boolean */ animate) {
  this.m_cancel__();
  if (animate) {
   this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_ = panel;
   this.f_opening__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_ = panel.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_;
   this.m_run__int(DisclosurePanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_DisclosurePanel_);
  } else {
   panel.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_setVisible__boolean(panel.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_);
   if (panel.f_isOpen__org_gwtproject_user_client_ui_DisclosurePanel_) {
    panel.m_getContent__().m_setVisible__boolean(true);
   }
  }
 }
 /** @override */
 m_onComplete__() {
  if (!this.f_opening__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_) {
   this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_setVisible__boolean(false);
  }
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getElement__().style, "height", "auto");
  this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_ = null;
 }
 /** @override */
 m_onStart__() {
  super.m_onStart__();
  if (this.f_opening__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_) {
   this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_setVisible__boolean(true);
   this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.m_getContent__().m_setVisible__boolean(true);
  }
 }
 /** @override */
 m_onUpdate__double(/** number */ progress) {
  let scrollHeight = Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getElement__(), "scrollHeight");
  let height = $Primitives.$narrowDoubleToInt((progress * scrollHeight));
  if (!this.f_opening__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_) {
   height = scrollHeight - height;
  }
  height = Math.max(height, 1);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getElement__().style, "height", height + "px");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_DisclosurePanel_ContentAnimation_.f_contentWrapper__org_gwtproject_user_client_ui_DisclosurePanel_.m_getElement__().style, "width", "auto");
 }
 
 static $clinit() {
  ContentAnimation.$clinit = () =>{};
  ContentAnimation.$loadModules();
  Animation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ContentAnimation;
 }
 
 static $loadModules() {
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DisclosurePanel = goog.module.get('org.gwtproject.user.client.ui.DisclosurePanel$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(ContentAnimation, 'org.gwtproject.user.client.ui.DisclosurePanel$ContentAnimation');

exports = ContentAnimation; 
//# sourceMappingURL=DisclosurePanel$ContentAnimation.js.map