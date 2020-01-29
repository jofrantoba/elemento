goog.module('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Timer = goog.forwardDeclare('org.gwtproject.timer.client.Timer$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let AnimationType = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation.$1$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ResizeAnimation extends Animation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PopupPanel} */
  this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_;
  /** @public {boolean} */
  this.f_isUnloading__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = false;
  /** @public {number} */
  this.f_offsetHeight__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = 0;
  /** @public {number} */
  this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = 0;
  /** @public {boolean} */
  this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = false;
  /** @public {Timer} */
  this.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_;
  /** @public {boolean} */
  this.f_glassShowing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = false;
  /** @public {HandlerRegistration} */
  this.f_resizeRegistration__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_;
 }
 /**
  * @param {PopupPanel} panel
  * @return {!ResizeAnimation}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_PopupPanel(panel) {
  ResizeAnimation.$clinit();
  let $instance = new ResizeAnimation();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation__org_gwtproject_user_client_ui_PopupPanel(panel);
  return $instance;
 }
 /**
  * @param {PopupPanel} panel
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation__org_gwtproject_user_client_ui_PopupPanel(panel) {
  this.$ctor__org_gwtproject_animation_client_Animation__();
  this.$init___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation();
  this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = panel;
 }
 /**
  * @param {boolean} showing
  * @param {boolean} isUnloading
  * @public
  */
 m_setState__boolean__boolean(showing, isUnloading) {
  this.f_isUnloading__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = isUnloading;
  this.m_cancel__();
  if (!$Equality.$same(this.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_, null)) {
   this.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_cancel__();
   this.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = null;
   this.m_onComplete__();
  }
  this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_showing__org_gwtproject_user_client_ui_PopupPanel_ = showing;
  this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_updateHandlers___$p_org_gwtproject_user_client_ui_PopupPanel();
  let animate = !isUnloading && this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_isAnimationEnabled__org_gwtproject_user_client_ui_PopupPanel_;
  if (!$Equality.$same(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_animType__org_gwtproject_user_client_ui_PopupPanel_, AnimationType.f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType) && !showing) {
   animate = false;
  }
  this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = showing;
  if (animate) {
   if (showing) {
    this.m_maybeShowGlass___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation();
    $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__().style, "position", "absolute");
    if (this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_ != -1) {
     this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_setPopupPosition__int__int(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_leftPosition__org_gwtproject_user_client_ui_PopupPanel_, this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_);
    }
    PopupPanel.f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_setClip__org_gwtproject_dom_client_Element__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__(), this.m_getRectString__int__int__int__int_$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation(0, 0, 0, 0));
    RootPanel.m_get__().m_add__org_gwtproject_user_client_ui_Widget(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_);
    this.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = $1.$create__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation(this);
    this.f_showTimer__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_schedule__int(1);
   } else {
    this.m_run__int(PopupPanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_PopupPanel_);
   }
  } else {
   this.m_onInstantaneousRun___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation();
  }
 }
 /**
  * @override
  * @public
  */
 m_onComplete__() {
  if (!this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
   this.m_maybeShowGlass___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation();
   if (!this.f_isUnloading__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
    RootPanel.m_get__().m_remove__org_gwtproject_user_client_ui_Widget(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_);
   }
  }
  PopupPanel.f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_setClip__org_gwtproject_dom_client_Element__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__(), "rect(auto, auto, auto, auto)");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__().style, "overflow", "visible");
 }
 /**
  * @override
  * @public
  */
 m_onStart__() {
  this.f_offsetHeight__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getOffsetHeight__();
  this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getOffsetWidth__();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__().style, "overflow", "hidden");
  super.m_onStart__();
 }
 /**
  * @override
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {
  if (!this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
   progress = 1.0 - progress;
  }
  let top = 0;
  let left = 0;
  let right = 0;
  let bottom = 0;
  let height = $Primitives.$narrowDoubleToInt((progress * this.f_offsetHeight__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_));
  let width = $Primitives.$narrowDoubleToInt((progress * this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_));
  switch (this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_animType__org_gwtproject_user_client_ui_PopupPanel_.ordinal()) {
   case AnimationType.$ordinal$f_ROLL_DOWN__org_gwtproject_user_client_ui_PopupPanel_AnimationType: 
    right = this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_;
    bottom = height;
    break;
   case AnimationType.$ordinal$f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType: 
    top = (this.f_offsetHeight__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ - height) >> 1;
    left = (this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ - width) >> 1;
    right = left + width;
    bottom = top + height;
    break;
   case AnimationType.$ordinal$f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType: 
    if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
     left = this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ - width;
    }
    right = left + width;
    bottom = top + height;
    break;
  }
  PopupPanel.f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_setClip__org_gwtproject_dom_client_Element__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__(), this.m_getRectString__int__int__int__int_$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation(top, right, bottom, left));
 }
 /**
  * @param {number} top
  * @param {number} right
  * @param {number} bottom
  * @param {number} left
  * @return {?string}
  * @public
  */
 m_getRectString__int__int__int__int_$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation(top, right, bottom, left) {
  return "rect(" + top + "px, " + right + "px, " + bottom + "px, " + left + "px)";
 }
 /**
  * @public
  */
 m_maybeShowGlass___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation() {
  if (this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
   if (this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_isGlassEnabled__org_gwtproject_user_client_ui_PopupPanel_) {
    Document_$Overlay.m_get__().body.appendChild(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_glass__org_gwtproject_user_client_ui_PopupPanel_);
    this.f_resizeRegistration__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = Window.m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_glassResizer__org_gwtproject_user_client_ui_PopupPanel_);
    this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_glassResizer__org_gwtproject_user_client_ui_PopupPanel_.m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(null);
    this.f_glassShowing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = true;
   }
  } else if (this.f_glassShowing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
   Document_$Overlay.m_get__().body.removeChild(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_glass__org_gwtproject_user_client_ui_PopupPanel_);
   this.f_resizeRegistration__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_removeHandler__();
   this.f_resizeRegistration__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = null;
   this.f_glassShowing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = false;
  }
 }
 /**
  * @public
  */
 m_onInstantaneousRun___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation() {
  this.m_maybeShowGlass___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation();
  if (this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__().style, "position", "absolute");
   if (this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_ != -1) {
    this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_setPopupPosition__int__int(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_leftPosition__org_gwtproject_user_client_ui_PopupPanel_, this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_);
   }
   RootPanel.m_get__().m_add__org_gwtproject_user_client_ui_Widget(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_);
  } else {
   if (!this.f_isUnloading__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_) {
    RootPanel.m_get__().m_remove__org_gwtproject_user_client_ui_Widget(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_);
   }
  }
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_.m_getElement__().style, "overflow", "visible");
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation() {
  this.f_curPanel__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = null;
  this.f_offsetWidth__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  ResizeAnimation.$clinit = () =>{};
  ResizeAnimation.$loadModules();
  Animation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ResizeAnimation;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  PopupPanel = goog.module.get('org.gwtproject.user.client.ui.PopupPanel$impl');
  AnimationType = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation.$1$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(ResizeAnimation, 'org.gwtproject.user.client.ui.PopupPanel$ResizeAnimation');

exports = ResizeAnimation; 
//# sourceMappingURL=PopupPanel$ResizeAnimation.js.map