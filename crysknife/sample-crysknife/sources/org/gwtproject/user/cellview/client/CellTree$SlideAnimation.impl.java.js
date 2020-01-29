goog.module('org.gwtproject.user.cellview.client.CellTree.SlideAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RevealAnimation = goog.require('org.gwtproject.user.cellview.client.CellTree.RevealAnimation$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');

class SlideAnimation extends RevealAnimation {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {SlideAnimation}
  * @public
  */
 static m_create__() {
  SlideAnimation.$clinit();
  return SlideAnimation.$create__();
 }
 /**
  * @return {!SlideAnimation}
  * @public
  */
 static $create__() {
  let $instance = new SlideAnimation();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_SlideAnimation__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_SlideAnimation__() {
  this.$ctor__org_gwtproject_user_cellview_client_CellTree_RevealAnimation__();
 }
 /**
  * @override
  * @public
  */
 m_onComplete__() {
  $Overlay.m_clearPosition__$devirt__org_gwtproject_dom_client_Style(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style);
  $Overlay.m_clearTop__$devirt__org_gwtproject_dom_client_Style(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style);
  $Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style);
  super.m_onComplete__();
 }
 /**
  * @override
  * @public
  */
 m_onStart__() {
  super.m_onStart__();
  if (this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation) {
   $Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style, -this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   $Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
 }
 /**
  * @override
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {
  super.m_onUpdate__double(progress);
  if (this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation) {
   let curTop = (1.0 - progress) * -this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation;
   $Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style, curTop, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   let curTop_1 = progress * -this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation;
   $Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation.style, curTop_1, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  SlideAnimation.$clinit = () =>{};
  SlideAnimation.$loadModules();
  RevealAnimation.$clinit();
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
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
 }
 
}
$Util.$setClassMetadata(SlideAnimation, 'org.gwtproject.user.cellview.client.CellTree$SlideAnimation');

exports = SlideAnimation; 
//# sourceMappingURL=CellTree$SlideAnimation.js.map