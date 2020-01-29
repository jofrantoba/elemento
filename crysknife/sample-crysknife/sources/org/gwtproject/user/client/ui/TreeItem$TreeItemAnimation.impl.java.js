goog.module('org.gwtproject.user.client.ui.TreeItem.TreeItemAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class TreeItemAnimation extends Animation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TreeItem} */
  this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_;
  /** @public {boolean} */
  this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = false;
  /** @public {number} */
  this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = 0;
 }
 /**
  * @return {!TreeItemAnimation}
  * @public
  */
 static $create__() {
  TreeItemAnimation.$clinit();
  let $instance = new TreeItemAnimation();
  $instance.$ctor__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__();
  this.$init___$p_org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation();
 }
 /**
  * @param {TreeItem} item
  * @param {boolean} animate
  * @public
  */
 m_setItemState__org_gwtproject_user_client_ui_TreeItem__boolean(item, animate) {
  this.m_cancel__();
  if (animate) {
   this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = item;
   this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = item.f_open__org_gwtproject_user_client_ui_TreeItem_;
   this.m_run__int(Math.min(TreeItem.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_TreeItem_, TreeItem.f_ANIMATION_DURATION_PER_ITEM__org_gwtproject_user_client_ui_TreeItem_ * this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.m_getChildCount__()));
  } else {
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(item.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, item.f_open__org_gwtproject_user_client_ui_TreeItem_);
  }
 }
 /**
  * @override
  * @public
  */
 m_onComplete__() {
  if (!$Equality.$same(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_, null)) {
   if (this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_) {
    UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, true);
    this.m_onUpdate__double(1.0);
    $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "height", "auto");
   } else {
    UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, false);
   }
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "overflow", "visible");
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "width", "auto");
   this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = null;
  }
 }
 /**
  * @override
  * @public
  */
 m_onStart__() {
  this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = 0;
  if (!this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_) {
   this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_);
  }
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "overflow", "hidden");
  super.m_onStart__();
  if (this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_) {
   UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, true);
   this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_);
  }
 }
 /**
  * @override
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {
  let height = $Primitives.$narrowDoubleToInt((progress * this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_));
  if (!this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_) {
   height = this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ - height;
  }
  height = Math.max(height, 1);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "height", height + "px");
  let scrollWidth = Element_$Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_, "scrollWidth");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_.f_childSpanElem__org_gwtproject_user_client_ui_TreeItem_.style, "width", scrollWidth + "px");
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation() {
  this.f_curItem__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = null;
  this.f_opening__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = true;
  this.f_scrollHeight__org_gwtproject_user_client_ui_TreeItem_TreeItemAnimation_ = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  TreeItemAnimation.$clinit = () =>{};
  TreeItemAnimation.$loadModules();
  Animation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TreeItemAnimation;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  TreeItem = goog.module.get('org.gwtproject.user.client.ui.TreeItem$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(TreeItemAnimation, 'org.gwtproject.user.client.ui.TreeItem$TreeItemAnimation');

exports = TreeItemAnimation; 
//# sourceMappingURL=TreeItem$TreeItemAnimation.js.map