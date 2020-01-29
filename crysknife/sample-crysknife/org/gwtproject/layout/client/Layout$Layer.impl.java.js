goog.module('org.gwtproject.layout.client.Layout.Layer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let Alignment = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Alignment$impl');

class Layer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Layout} */
  this.f_$outer_this__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Object} */
  this.f_container__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Object} */
  this.f_child__org_gwtproject_layout_client_Layout_Layer;
  /** @public {*} */
  this.f_userObject__org_gwtproject_layout_client_Layout_Layer;
  /** @public {boolean} */
  this.f_setLeft__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setRight__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTop__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setBottom__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setWidth__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setHeight__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {boolean} */
  this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = false;
  /** @public {Unit} */
  this.f_leftUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_topUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_rightUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_bottomUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_widthUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_heightUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Unit} */
  this.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer;
  /** @public {number} */
  this.f_left__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_top__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_right__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_bottom__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_width__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_height__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_sourceTop__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_sourceRight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_targetLeft__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_targetTop__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_targetRight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_targetBottom__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_targetWidth__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {number} */
  this.f_targetHeight__org_gwtproject_layout_client_Layout_Layer = 0.0;
  /** @public {Alignment} */
  this.f_hPos__org_gwtproject_layout_client_Layout_Layer;
  /** @public {Alignment} */
  this.f_vPos__org_gwtproject_layout_client_Layout_Layer;
  /** @public {boolean} */
  this.f_visible__org_gwtproject_layout_client_Layout_Layer = false;
 }
 /**
  * @param {Layout} $outer_this
  * @param {Object} container
  * @param {Object} child
  * @param {*} userObject
  * @return {!Layer}
  * @public
  */
 static $create__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, container, child, userObject) {
  Layer.$clinit();
  let $instance = new Layer();
  $instance.$ctor__org_gwtproject_layout_client_Layout_Layer__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, container, child, userObject);
  return $instance;
 }
 /**
  * @param {Layout} $outer_this
  * @param {Object} container
  * @param {Object} child
  * @param {*} userObject
  * @public
  */
 $ctor__org_gwtproject_layout_client_Layout_Layer__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object($outer_this, container, child, userObject) {
  this.f_$outer_this__org_gwtproject_layout_client_Layout_Layer = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_layout_client_Layout_Layer();
  this.f_container__org_gwtproject_layout_client_Layout_Layer = container;
  this.f_child__org_gwtproject_layout_client_Layout_Layer = child;
  this.f_userObject__org_gwtproject_layout_client_Layout_Layer = userObject;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getContainerElement__() {
  return this.f_container__org_gwtproject_layout_client_Layout_Layer;
 }
 /**
  * @return {*}
  * @public
  */
 m_getUserObject__() {
  return this.f_userObject__org_gwtproject_layout_client_Layout_Layer;
 }
 /**
  * @param {number} bottom
  * @param {Unit} bottomUnit
  * @param {number} height
  * @param {Unit} heightUnit
  * @public
  */
 m_setBottomHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(bottom, bottomUnit, height, heightUnit) {
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetBottom__org_gwtproject_layout_client_Layout_Layer = bottom;
  this.f_targetHeight__org_gwtproject_layout_client_Layout_Layer = height;
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer = bottomUnit;
  this.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer = heightUnit;
 }
 /**
  * @param {Alignment} position
  * @public
  */
 m_setChildHorizontalPosition__org_gwtproject_layout_client_Layout_Alignment(position) {
  this.f_hPos__org_gwtproject_layout_client_Layout_Layer = position;
 }
 /**
  * @param {Alignment} position
  * @public
  */
 m_setChildVerticalPosition__org_gwtproject_layout_client_Layout_Alignment(position) {
  this.f_vPos__org_gwtproject_layout_client_Layout_Layer = position;
 }
 /**
  * @param {number} left
  * @param {Unit} leftUnit
  * @param {number} right
  * @param {Unit} rightUnit
  * @public
  */
 m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, leftUnit, right, rightUnit) {
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetLeft__org_gwtproject_layout_client_Layout_Layer = left;
  this.f_targetRight__org_gwtproject_layout_client_Layout_Layer = right;
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer = leftUnit;
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer = rightUnit;
 }
 /**
  * @param {number} left
  * @param {Unit} leftUnit
  * @param {number} width
  * @param {Unit} widthUnit
  * @public
  */
 m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, leftUnit, width, widthUnit) {
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetLeft__org_gwtproject_layout_client_Layout_Layer = left;
  this.f_targetWidth__org_gwtproject_layout_client_Layout_Layer = width;
  this.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer = leftUnit;
  this.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer = widthUnit;
 }
 /**
  * @param {number} right
  * @param {Unit} rightUnit
  * @param {number} width
  * @param {Unit} widthUnit
  * @public
  */
 m_setRightWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(right, rightUnit, width, widthUnit) {
  this.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetRight__org_gwtproject_layout_client_Layout_Layer = right;
  this.f_targetWidth__org_gwtproject_layout_client_Layout_Layer = width;
  this.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer = rightUnit;
  this.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer = widthUnit;
 }
 /**
  * @param {number} top
  * @param {Unit} topUnit
  * @param {number} bottom
  * @param {Unit} bottomUnit
  * @public
  */
 m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, topUnit, bottom, bottomUnit) {
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetTop__org_gwtproject_layout_client_Layout_Layer = top;
  this.f_targetBottom__org_gwtproject_layout_client_Layout_Layer = bottom;
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer = topUnit;
  this.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer = bottomUnit;
 }
 /**
  * @param {number} top
  * @param {Unit} topUnit
  * @param {number} height
  * @param {Unit} heightUnit
  * @public
  */
 m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, topUnit, height, heightUnit) {
  this.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = this.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = true;
  this.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = false;
  this.f_targetTop__org_gwtproject_layout_client_Layout_Layer = top;
  this.f_targetHeight__org_gwtproject_layout_client_Layout_Layer = height;
  this.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer = topUnit;
  this.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer = heightUnit;
 }
 /**
  * @param {boolean} visible
  * @public
  */
 m_setVisible__boolean(visible) {
  this.f_visible__org_gwtproject_layout_client_Layout_Layer = visible;
 }
 /**
  * @private
  */
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
 /**
  * @public
  */
 static $clinit() {
  Layer.$clinit = () =>{};
  Layer.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Layer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Alignment = goog.module.get('org.gwtproject.layout.client.Layout.Alignment$impl');
 }
 
}
$Util.$setClassMetadata(Layer, 'org.gwtproject.layout.client.Layout$Layer');

exports = Layer; 
//# sourceMappingURL=Layout$Layer.js.map