goog.module('org.gwtproject.user.cellview.client.CellTree.NodeAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Animation = goog.require('org.gwtproject.animation.client.Animation$impl');

let CellTreeNodeView = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView$impl');

/**
 * @abstract
  */
class NodeAnimation extends Animation {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = 0;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellTree_NodeAnimation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__();
  this.$init___$p_org_gwtproject_user_cellview_client_CellTree_NodeAnimation();
 }
 /** @return {number} */
 m_getDuration__() {
  return this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_;
 }
 
 m_setDuration__int(/** number */ duration) {
  this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = duration;
 }
 /** @abstract */
 m_animate__org_gwtproject_user_cellview_client_CellTreeNodeView__boolean_$pp_org_gwtproject_user_cellview_client(/** CellTreeNodeView<?> */ node, /** boolean */ isAnimationEnabled) {}
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_CellTree_NodeAnimation() {
  this.f_duration__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = NodeAnimation.f_DEFAULT_ANIMATION_DURATION__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_;
 }
 
 static $clinit() {
  NodeAnimation.$clinit = () =>{};
  NodeAnimation.$loadModules();
  Animation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NodeAnimation;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(NodeAnimation, 'org.gwtproject.user.cellview.client.CellTree$NodeAnimation');

/**@const {number}*/
NodeAnimation.f_DEFAULT_ANIMATION_DURATION__org_gwtproject_user_cellview_client_CellTree_NodeAnimation_ = 450;

exports = NodeAnimation; 
//# sourceMappingURL=CellTree$NodeAnimation.js.map