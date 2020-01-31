goog.module('org.gwtproject.user.client.ui.NotificationMole.MoleAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let NotificationMole = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole$impl');

class MoleAnimation extends Animation {
 /** @protected */
 constructor() {
  super();
  /**@type {NotificationMole}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation;
  /**@type {number}*/
  this.f_endSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ = 0;
  /**@type {number}*/
  this.f_startSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ = 0;
 }
 /** @return {!MoleAnimation} */
 static $create__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole */ $outer_this) {
  MoleAnimation.$clinit();
  let $instance = new MoleAnimation();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation__org_gwtproject_user_client_ui_NotificationMole($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation = $outer_this;
  this.$ctor__org_gwtproject_animation_client_Animation__();
 }
 /** @override */
 m_onComplete__() {
  if (this.f_endSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ == 0) {
   $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation.f_borderElement__org_gwtproject_user_client_ui_NotificationMole.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   return;
  }
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation.f_borderElement__org_gwtproject_user_client_ui_NotificationMole.style, this.f_endSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 /** @override */
 m_onUpdate__double(/** number */ progress) {
  let delta = (this.f_endSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ - this.f_startSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_) * progress;
  let newSize = this.f_startSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ + delta;
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation.f_borderElement__org_gwtproject_user_client_ui_NotificationMole.style, newSize, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 
 m_animateMole__int__int__int_$pp_org_gwtproject_user_client_ui(/** number */ startSize, /** number */ endSize, /** number */ duration) {
  this.f_startSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ = startSize;
  this.f_endSize__org_gwtproject_user_client_ui_NotificationMole_MoleAnimation_ = endSize;
  if (duration == 0) {
   this.m_onComplete__();
   return;
  }
  this.m_run__int(duration);
 }
 
 static $clinit() {
  MoleAnimation.$clinit = () =>{};
  MoleAnimation.$loadModules();
  Animation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MoleAnimation;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
 }
 
}
$Util.$setClassMetadata(MoleAnimation, 'org.gwtproject.user.client.ui.NotificationMole$MoleAnimation');

exports = MoleAnimation; 
//# sourceMappingURL=NotificationMole$MoleAnimation.js.map