goog.module('org.gwtproject.user.client.ui.DeckPanel.SlideAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let DeckPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckPanel$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class SlideAnimation extends Animation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_;
  /** @public {Object} */
  this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_;
  /** @public {boolean} */
  this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = false;
  /** @public {number} */
  this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = 0;
  /** @public {Widget} */
  this.f_oldWidget__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_;
 }
 /**
  * @return {!SlideAnimation}
  * @public
  */
 static $create__() {
  SlideAnimation.$clinit();
  let $instance = new SlideAnimation();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__();
  this.$init___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation();
 }
 /**
  * @param {Widget} oldWidget
  * @param {Widget} newWidget
  * @param {boolean} animate
  * @public
  */
 m_showWidget__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__boolean(oldWidget, newWidget, animate) {
  this.m_cancel__();
  let newContainer = DeckPanel.m_getContainer__org_gwtproject_user_client_ui_Widget(newWidget);
  let newIndex = DOM.m_getChildIndex__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(DOM.m_getParent__org_gwtproject_dom_client_Element(newContainer), newContainer);
  if ($Equality.$same(oldWidget, null)) {
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(newContainer, true);
   newWidget.m_setVisible__boolean(true);
   return;
  }
  this.f_oldWidget__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = oldWidget;
  let oldContainer = DeckPanel.m_getContainer__org_gwtproject_user_client_ui_Widget(oldWidget);
  let oldIndex = DOM.m_getChildIndex__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(DOM.m_getParent__org_gwtproject_dom_client_Element(oldContainer), oldContainer);
  if (newIndex > oldIndex) {
   this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = oldContainer;
   this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = newContainer;
   this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = false;
  } else {
   this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = newContainer;
   this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = oldContainer;
   this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = true;
  }
  if (animate) {
   let deckElem = $Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_);
   let deckHeight = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(deckElem);
   if (this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_) {
    this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_);
    Style_$Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", Math.max(1, this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ - 1));
   } else {
    this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_);
    Style_$Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", Math.max(1, this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ - 1));
   }
   if (Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(deckElem) != deckHeight) {
    this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = -1;
   }
   this.m_run__int__org_gwtproject_dom_client_Element(DeckPanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_DeckPanel_, this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ == -1 ? null : deckElem);
  } else {
   this.m_onInstantaneousRun___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation();
  }
  newWidget.m_setVisible__boolean(true);
 }
 /**
  * @override
  * @public
  */
 m_onComplete__() {
  if (this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_) {
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", "100%");
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, true);
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, false);
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", "100%");
  } else {
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, false);
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", "100%");
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", "100%");
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, true);
  }
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "overflow", "visible");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "overflow", "visible");
  this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
  this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
  this.m_hideOldWidget___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation();
 }
 /**
  * @override
  * @public
  */
 m_onStart__() {
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "overflow", "hidden");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "overflow", "hidden");
  this.m_onUpdate__double(0.0);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, true);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, true);
 }
 /**
  * @override
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {
  if (!this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_) {
   progress = 1.0 - progress;
  }
  let /** number */ height1;
  let /** number */ height2;
  if (this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ == -1) {
   height1 = $Primitives.$narrowDoubleToInt((progress * Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, "scrollHeight")));
   height2 = $Primitives.$narrowDoubleToInt(((1.0 - progress) * Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, "scrollHeight")));
  } else {
   height1 = $Primitives.$narrowDoubleToInt((progress * this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_));
   height2 = this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ - height1;
  }
  if (height1 == 0) {
   height1 = 1;
   height2 = Math.max(1, height2 - 1);
  } else if (height2 == 0) {
   height2 = 1;
   height1 = Math.max(1, height1 - 1);
  }
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", height1 + "px");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.style, "height", height2 + "px");
 }
 /**
  * @public
  */
 m_hideOldWidget___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation() {
  this.f_oldWidget__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_.m_setVisible__boolean(false);
  this.f_oldWidget__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
 }
 /**
  * @public
  */
 m_onInstantaneousRun___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation() {
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_, !this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_);
  this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
  this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
  this.m_hideOldWidget___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation();
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_DeckPanel_SlideAnimation() {
  this.f_container1__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
  this.f_container2__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
  this.f_growing__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = false;
  this.f_fixedHeight__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = -1;
  this.f_oldWidget__org_gwtproject_user_client_ui_DeckPanel_SlideAnimation_ = null;
 }
 /**
  * @public
  */
 static $clinit() {
  SlideAnimation.$clinit = () =>{};
  SlideAnimation.$loadModules();
  Animation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SlideAnimation;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  DeckPanel = goog.module.get('org.gwtproject.user.client.ui.DeckPanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(SlideAnimation, 'org.gwtproject.user.client.ui.DeckPanel$SlideAnimation');

exports = SlideAnimation; 
//# sourceMappingURL=DeckPanel$SlideAnimation.js.map