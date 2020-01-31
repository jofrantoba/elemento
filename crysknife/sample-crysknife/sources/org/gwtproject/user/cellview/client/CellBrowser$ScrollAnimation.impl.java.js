goog.module('org.gwtproject.user.cellview.client.CellBrowser.ScrollAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let CellBrowser = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ScrollAnimation extends Animation {
 /** @protected */
 constructor() {
  super();
  /**@type {CellBrowser}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation;
  /**@type {number}*/
  this.f_startScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ = 0;
  /**@type {number}*/
  this.f_targetScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ = 0;
 }
 /** @return {!ScrollAnimation} */
 static $create__org_gwtproject_user_cellview_client_CellBrowser(/** CellBrowser */ $outer_this) {
  ScrollAnimation.$clinit();
  let $instance = new ScrollAnimation();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation__org_gwtproject_user_cellview_client_CellBrowser($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation__org_gwtproject_user_cellview_client_CellBrowser(/** CellBrowser */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation = $outer_this;
  this.$ctor__org_gwtproject_animation_client_Animation__();
 }
 /** @override */
 m_onComplete__() {
  $Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation.m_getElement__(), this.f_targetScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_);
 }
 /** @override */
 m_onUpdate__double(/** number */ progress) {
  let diff = this.f_targetScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ - this.f_startScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_;
  $Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation.m_getElement__(), this.f_startScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ + $Primitives.$narrowDoubleToInt((diff * progress)));
 }
 
 m_scrollToEnd___$pp_org_gwtproject_user_cellview_client() {
  let elem = this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation.m_getElement__();
  this.f_targetScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ = $Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(elem) - $Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(elem);
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   this.f_targetScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ *= -1;
  }
  if (this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation.m_isAnimationEnabled__()) {
   this.f_startScrollLeft__org_gwtproject_user_cellview_client_CellBrowser_ScrollAnimation_ = $Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(elem);
   this.m_run__int__org_gwtproject_dom_client_Element(250, elem);
  } else {
   this.m_onComplete__();
  }
 }
 
 static $clinit() {
  ScrollAnimation.$clinit = () =>{};
  ScrollAnimation.$loadModules();
  Animation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScrollAnimation;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(ScrollAnimation, 'org.gwtproject.user.cellview.client.CellBrowser$ScrollAnimation');

exports = ScrollAnimation; 
//# sourceMappingURL=CellBrowser$ScrollAnimation.js.map