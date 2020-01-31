goog.module('org.gwtproject.layout.client.Layout.Layer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let Alignment = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Alignment$impl');

class Layer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Layout}*/
  this.f_$outer_this__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Object}*/
  this.f_container__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Object}*/
  this.f_child__org_gwtproject_layout_client_Layout_Layer;
  /**@type {*}*/
  this.f_userObject__org_gwtproject_layout_client_Layout_Layer;
  /**@type {boolean}*/
  this.f_setLeft__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setRight__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTop__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setBottom__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setWidth__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setHeight__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {boolean}*/
  this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = false;
  /**@type {Unit}*/
  this.f_leftUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_topUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_rightUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_bottomUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_widthUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_heightUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Unit}*/
  this.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer;
  /**@type {number}*/
  this.f_left__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_top__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_right__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_bottom__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_width__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_height__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_sourceTop__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_sourceRight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_targetLeft__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_targetTop__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_targetRight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_targetBottom__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_targetWidth__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {number}*/
  this.f_targetHeight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /**@type {Alignment}*/
  this.f_hPos__org_gwtproject_layout_client_Layout_Layer;
  /**@type {Alignment}*/
  this.f_vPos__org_gwtproject_layout_client_Layout_Layer;
  /**@type {boolean}*/
  this.f_visible__org_gwtproject_layout_client_Layout_Layer = false;
 }
 /** @return {!Layer} */
 static $create__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(/** Layout */ $outer_this, /** Object */ container, /** Object */ child, /** * */ userObject) {
  Layer.$clinit();
  let $instance = new Layer();
  $instance.$ctor__org_gwtproject_layout_client_Layout_Layer__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, container, child, userObject);
  return $instance;
 }
 
 $ctor__org_gwtproject_layout_client_Layout_Layer__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(/** Layout */ $outer_this, /** Object */ container, /** Object */ child, /** * */ userObject) {
  this.f_$outer_this__org_gwtproject_layout_client_Layout_Layer = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_layout_client_Layout_Layer();
  this.f_container__org_gwtproject_layout_client_Layout_Layer = container;
  this.f_child__org_gwtproject_layout_client_Layout_Layer = child;
  this.f_userObject__org_gwtproject_layout_client_Layout_Layer = userObject;
 }
 /** @return {Object} */
 m_getContainerElement__() {
  return this.f_container__org_gwtproject_layout_client_Layout_Layer;
 }
 /** @return {*} */
 m_getUserObject__() {
  return this.f_userObject__org_gwtproject_layout_client_Layout_Layer;
 }
 
 m_setBottomHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** number */ bottom, /** Unit */ bottomUnit, /** number */ height, /** Unit */ heightUnit) {
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetBottom__org_gwtproject_layout_client_Layout_Layer = bottom;
  this.f_targetHeight__org_gwtproject_layout_client_Layout_Layer = height;
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer = bottomUnit;
  this.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer = heightUnit;
 }
 
 m_setChildHorizontalPosition__org_gwtproject_layout_client_Layout_Alignment(/** Alignment */ position) {
  this.f_hPos__org_gwtproject_layout_client_Layout_Layer = position;
 }
 
 m_setChildVerticalPosition__org_gwtproject_layout_client_Layout_Alignment(/** Alignment */ position) {
  this.f_vPos__org_gwtproject_layout_client_Layout_Layer = position;
 }
 
 m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** number */ left, /** Unit */ leftUnit, /** number */ right, /** Unit */ rightUnit) {
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetLeft__org_gwtproject_layout_client_Layout_Layer = left;
  this.f_targetRight__org_gwtproject_layout_client_Layout_Layer = right;
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer = leftUnit;
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer = rightUnit;
 }
 
 m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** number */ left, /** Unit */ leftUnit, /** number */ width, /** Unit */ widthUnit) {
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetLeft__org_gwtproject_layout_client_Layout_Layer = left;
  this.f_targetWidth__org_gwtproject_layout_client_Layout_Layer = width;
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer = leftUnit;
  this.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer = widthUnit;
 }
 
 m_setRightWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** number */ right, /** Unit */ rightUnit, /** number */ width, /** Unit */ widthUnit) {
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetRight__org_gwtproject_layout_client_Layout_Layer = right;
  this.f_targetWidth__org_gwtproject_layout_client_Layout_Layer = width;
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer = rightUnit;
  this.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer = widthUnit;
 }
 
 m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** number */ top, /** Unit */ topUnit, /** number */ bottom, /** Unit */ bottomUnit) {
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetTop__org_gwtproject_layout_client_Layout_Layer = top;
  this.f_targetBottom__org_gwtproject_layout_client_Layout_Layer = bottom;
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer = topUnit;
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer = bottomUnit;
 }
 
 m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** number */ top, /** Unit */ topUnit, /** number */ height, /** Unit */ heightUnit) {
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetTop__org_gwtproject_layout_client_Layout_Layer = top;
  this.f_targetHeight__org_gwtproject_layout_client_Layout_Layer = height;
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer = topUnit;
  this.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer = heightUnit;
 }
 
 m_setVisible__boolean(/** boolean */ visible) {
  this.f_visible__org_gwtproject_layout_client_Layout_Layer = visible;
 }
 /** @private */
 $init___$p_org_gwtproject_layout_client_Layout_Layer() {
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer = Unit.f_PX__org_gwtproject_dom_style_shared_Unit;
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer = Unit.f_PX__org_gwtproject_dom_style_shared_Unit;
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer = Unit.f_PX__org_gwtproject_dom_style_shared_Unit;
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer = Unit.f_PX__org_gwtproject_dom_style_shared_Unit;
  this.f_hPos__org_gwtproject_layout_client_Layout_Layer = Alignment.f_STRETCH__org_gwtproject_layout_client_Layout_Alignment;
  this.f_vPos__org_gwtproject_layout_client_Layout_Layer = Alignment.f_STRETCH__org_gwtproject_layout_client_Layout_Alignment;
  this.f_visible__org_gwtproject_layout_client_Layout_Layer = true;
 }
 
 static $clinit() {
  Layer.$clinit = () =>{};
  Layer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Layer;
 }
 
 static $loadModules() {
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Alignment = goog.module.get('org.gwtproject.layout.client.Layout.Alignment$impl');
 }
 
}
$Util.$setClassMetadata(Layer, 'org.gwtproject.layout.client.Layout$Layer');

exports = Layer; 
//# sourceMappingURL=Layout$Layer.js.map