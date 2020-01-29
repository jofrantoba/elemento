goog.module('org.gwtproject.user.cellview.client.CellTree.NodeAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');

/**
 * @abstract
  */
class NodeAnimation extends Animation {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = 0;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_CellTree_NodeAnimation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__();
  this.$init___$p_org_gwtproject_user_cellview_client_CellTree_NodeAnimation();
 }
 /**
  * @return {number}
  * @public
  */
 m_getDuration__() {
  return this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_;
 }
 /**
  * @param {number} duration
  * @public
  */
 m_setDuration__int(duration) {
  this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = duration;
 }
 /**
  * @abstract
  * @param {CellTreeNodeView<?>} node
  * @param {boolean} isAnimationEnabled
  * @public
  */
 m_animate__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(node, isAnimationEnabled) {}
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_CellTree_NodeAnimation() {
  this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = NodeAnimation.f_DEFAULT_ANIMATION_DURATION__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_;
 }
 /**
  * @public
  */
 static $clinit() {
  NodeAnimation.$clinit = () =>{};
  NodeAnimation.$loadModules();
  Animation.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NodeAnimation;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(NodeAnimation, 'org.gwtproject.user.cellview.client.CellTree$NodeAnimation');

/** @public {number} @const */
NodeAnimation.f_DEFAULT_ANIMATION_DURATION__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = 450;

exports = NodeAnimation; 
//# sourceMappingURL=CellTree$NodeAnimation.js.map