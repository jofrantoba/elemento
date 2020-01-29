goog.module('org.gwtproject.user.client.ui.NotificationMole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SpanElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Timer = goog.forwardDeclare('org.gwtproject.timer.client.Timer$impl');
let HTMLPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole.$1$impl');
let Binder = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole.Binder$impl');
let MoleAnimation = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole.MoleAnimation$impl');
let NotificationMole__BinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class NotificationMole extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_borderElement__org_gwtproject_user_client_ui_NotificationMole;
  /** @public {Object} */
  this.f_heightMeasure__org_gwtproject_user_client_ui_NotificationMole;
  /** @public {Object} */
  this.f_notificationText__org_gwtproject_user_client_ui_NotificationMole;
  /** @public {number} */
  this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole = 0;
  /** @public {Timer} */
  this.f_showTimer__org_gwtproject_user_client_ui_NotificationMole;
  /** @public {MoleAnimation} */
  this.f_animation__org_gwtproject_user_client_ui_NotificationMole_;
  /** @public {number} */
  this.f_animationDuration__org_gwtproject_user_client_ui_NotificationMole_ = 0;
 }
 /**
  * @return {!NotificationMole}
  * @public
  */
 static $create__() {
  NotificationMole.$clinit();
  let $instance = new NotificationMole();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NotificationMole__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_NotificationMole();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(/**@type {HTMLPanel} */ ($Casts.$to(NotificationMole.f_BINDER__org_gwtproject_user_client_ui_NotificationMole_.m_createAndBindUi__java_lang_Object(this), HTMLPanel)));
 }
 /**
  * @public
  */
 m_hide__() {
  if (this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole > 0) {
   --this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole;
  }
  if (this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole == 0) {
   this.f_animation__org_gwtproject_user_client_ui_NotificationMole_.m_animateMole__int__int__int_$pp_org_gwtproject_user_client_ui($Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_heightMeasure__org_gwtproject_user_client_ui_NotificationMole), 0, this.f_animationDuration__org_gwtproject_user_client_ui_NotificationMole_);
   return;
  }
 }
 /**
  * @public
  */
 m_hideNow__() {
  this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole = 0;
  this.f_animation__org_gwtproject_user_client_ui_NotificationMole_.m_animateMole__int__int__int_$pp_org_gwtproject_user_client_ui($Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_heightMeasure__org_gwtproject_user_client_ui_NotificationMole), 0, this.f_animationDuration__org_gwtproject_user_client_ui_NotificationMole_);
 }
 /**
  * @param {number} duration
  * @public
  */
 m_setAnimationDuration__int(duration) {
  this.f_animationDuration__org_gwtproject_user_client_ui_NotificationMole_ = duration;
 }
 /**
  * @param {?string} message
  * @public
  */
 m_setMessage__java_lang_String(message) {
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_notificationText__org_gwtproject_user_client_ui_NotificationMole, message);
 }
 /**
  * @public
  */
 m_show__() {
  ++this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole;
  this.m_showImpl___$p_org_gwtproject_user_client_ui_NotificationMole();
 }
 /**
  * @param {?string} message
  * @public
  */
 m_show__java_lang_String(message) {
  this.m_setMessage__java_lang_String(message);
  this.m_show__();
 }
 /**
  * @param {number} delay
  * @public
  */
 m_showDelayed__int(delay) {
  if (this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole == 0) {
   if (delay == 0) {
    this.m_show__();
   } else {
    ++this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole;
    this.f_showTimer__org_gwtproject_user_client_ui_NotificationMole.m_schedule__int(delay);
   }
  }
 }
 /**
  * @public
  */
 m_showImpl___$p_org_gwtproject_user_client_ui_NotificationMole() {
  Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_borderElement__org_gwtproject_user_client_ui_NotificationMole.style, Display.f_BLOCK__org_gwtproject_dom_style_shared_Display);
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_borderElement__org_gwtproject_user_client_ui_NotificationMole.style, $Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(this.f_notificationText__org_gwtproject_user_client_ui_NotificationMole), Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_animation__org_gwtproject_user_client_ui_NotificationMole_.m_animateMole__int__int__int_$pp_org_gwtproject_user_client_ui(0, $Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_heightMeasure__org_gwtproject_user_client_ui_NotificationMole), this.f_animationDuration__org_gwtproject_user_client_ui_NotificationMole_);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_NotificationMole() {
  this.f_showAttempts__org_gwtproject_user_client_ui_NotificationMole = 0;
  this.f_showTimer__org_gwtproject_user_client_ui_NotificationMole = $1.$create__org_gwtproject_user_client_ui_NotificationMole(this);
  this.f_animation__org_gwtproject_user_client_ui_NotificationMole_ = MoleAnimation.$create__org_gwtproject_user_client_ui_NotificationMole(this);
 }
 /**
  * @public
  */
 static $clinit() {
  NotificationMole.$clinit = () =>{};
  NotificationMole.$loadModules();
  Composite.$clinit();
  NotificationMole.f_BINDER__org_gwtproject_user_client_ui_NotificationMole_ = NotificationMole__BinderImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NotificationMole;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  HTMLPanel = goog.module.get('org.gwtproject.user.client.ui.HTMLPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NotificationMole.$1$impl');
  MoleAnimation = goog.module.get('org.gwtproject.user.client.ui.NotificationMole.MoleAnimation$impl');
  NotificationMole__BinderImpl = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NotificationMole, 'org.gwtproject.user.client.ui.NotificationMole');

/** @public {Binder} */
NotificationMole.f_BINDER__org_gwtproject_user_client_ui_NotificationMole_;

exports = NotificationMole; 
//# sourceMappingURL=NotificationMole.js.map