goog.module('org.gwtproject.user.cellview.client.CellTree.RevealAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NodeAnimation = goog.require('org.gwtproject.user.cellview.client.CellTree.NodeAnimation$impl');

let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class RevealAnimation extends NodeAnimation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation;
  /** @public {number} */
  this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = 0;
  /** @public {boolean} */
  this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = false;
  /** @public {Object} */
  this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_;
  /** @public {Object} */
  this.f_childContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_;
 }
 /**
  * @return {RevealAnimation}
  * @public
  */
 static m_create__() {
  RevealAnimation.$clinit();
  return RevealAnimation.$create__();
 }
 /**
  * @return {!RevealAnimation}
  * @public
  */
 static $create__() {
  let $instance = new RevealAnimation();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellTree_RevealAnimation__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_RevealAnimation__() {
  this.$ctor__org_gwtproject_user_cellview_client_CellTree_NodeAnimation__();
 }
 /**
  * @override
  * @public
  */
 m_onComplete__() {
  this.m_cleanup___$p_org_gwtproject_user_cellview_client_CellTree_RevealAnimation();
 }
 /**
  * @override
  * @public
  */
 m_onStart__() {
  if (this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation) {
   $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, 1.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
   $Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style);
   this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation);
  } else {
   this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation);
  }
 }
 /**
  * @override
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {
  if (this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation) {
   let curHeight = progress * this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation;
   $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, curHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   let curHeight_1 = (1.0 - progress) * this.f_height__org_gwtproject_user_cellview_client_CellTree_RevealAnimation;
   $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, curHeight_1, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  $Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
 }
 /**
  * @override
  * @param {CellTreeNodeView<?>} node
  * @param {boolean} isAnimationEnabled
  * @public
  */
 m_animate__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(node, isAnimationEnabled) {
  this.m_cancel__();
  this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = node.m_isOpen__();
  this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_ = node.m_ensureAnimationFrame___$pp_org_gwtproject_user_cellview_client();
  this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = node.m_ensureContentContainer___$pp_org_gwtproject_user_cellview_client();
  this.f_childContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_ = node.m_ensureChildContainer___$pp_org_gwtproject_user_cellview_client();
  if (isAnimationEnabled) {
   let duration = this.m_getDuration__();
   let childCount = Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(this.f_childContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_);
   if (childCount < 4) {
    duration = $Primitives.$narrowDoubleToInt(((childCount / 4.0) * duration));
   }
   this.m_run__int(duration);
  } else {
   this.m_cleanup___$p_org_gwtproject_user_cellview_client_CellTree_RevealAnimation();
  }
 }
 /**
  * @public
  */
 m_cleanup___$p_org_gwtproject_user_cellview_client_CellTree_RevealAnimation() {
  if (this.f_opening__org_gwtproject_user_cellview_client_CellTree_RevealAnimation) {
   $Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style);
  } else {
   $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
   Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_childContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_, "");
  }
  $Overlay.m_clearHeight__$devirt__org_gwtproject_dom_client_Style(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style);
  $Overlay.m_clearPosition__$devirt__org_gwtproject_dom_client_Style(this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_.style);
  this.f_contentContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation = null;
  this.f_childContainer__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_ = null;
  this.f_animFrame__org_gwtproject_user_cellview_client_CellTree_RevealAnimation_ = null;
 }
 /**
  * @public
  */
 static $clinit() {
  RevealAnimation.$clinit = () =>{};
  RevealAnimation.$loadModules();
  NodeAnimation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RevealAnimation;
 }
 /**
  * @public
  */
 static $loadModules() {
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(RevealAnimation, 'org.gwtproject.user.cellview.client.CellTree$RevealAnimation');

exports = RevealAnimation; 
//# sourceMappingURL=CellTree$RevealAnimation.js.map