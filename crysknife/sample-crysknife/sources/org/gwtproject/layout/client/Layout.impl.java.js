goog.module('org.gwtproject.layout.client.Layout$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Animation = goog.forwardDeclare('org.gwtproject.animation.client.Animation$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let $1 = goog.forwardDeclare('org.gwtproject.layout.client.Layout.$1$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let LayoutImpl = goog.forwardDeclare('org.gwtproject.layout.client.LayoutImpl$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Layout extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_parentElem__org_gwtproject_layout_client_Layout_;
  /** @public {LayoutImpl} */
  this.f_impl__org_gwtproject_layout_client_Layout_;
  /** @public {List<Layer>} */
  this.f_layers__org_gwtproject_layout_client_Layout_;
  /** @public {Animation} */
  this.f_animation__org_gwtproject_layout_client_Layout_;
 }
 /**
  * @param {Object} parent
  * @return {!Layout}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(parent) {
  Layout.$clinit();
  let $instance = new Layout();
  $instance.$ctor__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element(parent);
  return $instance;
 }
 /**
  * @param {Object} parent
  * @public
  */
 $ctor__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element(parent) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_layout_client_Layout();
  this.f_parentElem__org_gwtproject_layout_client_Layout_ = parent;
  this.f_impl__org_gwtproject_layout_client_Layout_.m_initParent__org_gwtproject_dom_client_Element(parent);
 }
 /**
  * @param {Object} elem
  * @public
  */
 m_assertIsChild__org_gwtproject_dom_client_Element(elem) {
  $Asserts.$assertWithMessage($Equality.$same($Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node($Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(elem)), this.f_parentElem__org_gwtproject_layout_client_Layout_), "Element is not a child of this layout");
 }
 /**
  * @param {Object} child
  * @return {Layer}
  * @public
  */
 m_attachChild__org_gwtproject_dom_client_Element(child) {
  return this.m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(child, null);
 }
 /**
  * @param {Object} child
  * @param {Object} before
  * @return {Layer}
  * @public
  */
 m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(child, before) {
  return this.m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(child, before, null);
 }
 /**
  * @param {Object} child
  * @param {*} userObject
  * @return {Layer}
  * @public
  */
 m_attachChild__org_gwtproject_dom_client_Element__java_lang_Object(child, userObject) {
  return this.m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(child, null, userObject);
 }
 /**
  * @param {Object} child
  * @param {Object} before
  * @param {*} userObject
  * @return {Layer}
  * @public
  */
 m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(child, before, userObject) {
  let container = this.f_impl__org_gwtproject_layout_client_Layout_.m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_, child, before);
  let layer = Layer.$create__org_gwtproject_layout_client_Layout__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(this, container, child, userObject);
  this.f_layers__org_gwtproject_layout_client_Layout_.add(layer);
  return layer;
 }
 /**
  * @public
  */
 m_fillParent__() {
  this.f_impl__org_gwtproject_layout_client_Layout_.m_fillParent__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_);
 }
 /**
  * @param {Unit} unit
  * @param {boolean} vertical
  * @return {number}
  * @public
  */
 m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(unit, vertical) {
  return this.f_impl__org_gwtproject_layout_client_Layout_.m_getUnitSizeInPixels__org_gwtproject_dom_client_Element__org_gwtproject_dom_style_shared_Unit__boolean(this.f_parentElem__org_gwtproject_layout_client_Layout_, unit, vertical);
 }
 /**
  * @public
  */
 m_layout__() {
  this.m_layout__int(0);
 }
 /**
  * @param {number} duration
  * @public
  */
 m_layout__int(duration) {
  this.m_layout__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, null);
 }
 /**
  * @param {number} duration
  * @param {AnimationCallback} callback
  * @public
  */
 m_layout__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback) {
  if (!$Equality.$same(this.f_animation__org_gwtproject_layout_client_Layout_, null)) {
   this.f_animation__org_gwtproject_layout_client_Layout_.m_cancel__();
  }
  if (duration == 0) {
   for (let $iterator = this.f_layers__org_gwtproject_layout_client_Layout_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let l = /**@type {Layer} */ ($Casts.$to($iterator.m_next__(), Layer));
    l.f_left__org_gwtproject_layout_client_Layout_Layer = l.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer = l.f_targetLeft__org_gwtproject_layout_client_Layout_Layer;
    l.f_top__org_gwtproject_layout_client_Layout_Layer = l.f_sourceTop__org_gwtproject_layout_client_Layout_Layer = l.f_targetTop__org_gwtproject_layout_client_Layout_Layer;
    l.f_right__org_gwtproject_layout_client_Layout_Layer = l.f_sourceRight__org_gwtproject_layout_client_Layout_Layer = l.f_targetRight__org_gwtproject_layout_client_Layout_Layer;
    l.f_bottom__org_gwtproject_layout_client_Layout_Layer = l.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer = l.f_targetBottom__org_gwtproject_layout_client_Layout_Layer;
    l.f_width__org_gwtproject_layout_client_Layout_Layer = l.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer = l.f_targetWidth__org_gwtproject_layout_client_Layout_Layer;
    l.f_height__org_gwtproject_layout_client_Layout_Layer = l.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer = l.f_targetHeight__org_gwtproject_layout_client_Layout_Layer;
    l.f_setLeft__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer;
    l.f_setTop__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer;
    l.f_setRight__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer;
    l.f_setBottom__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer;
    l.f_setWidth__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer;
    l.f_setHeight__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer;
    l.f_leftUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer;
    l.f_topUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer;
    l.f_rightUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer;
    l.f_bottomUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer;
    l.f_widthUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer;
    l.f_heightUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer;
    this.f_impl__org_gwtproject_layout_client_Layout_.m_layout__org_gwtproject_layout_client_Layout_Layer(l);
    if (!$Equality.$same(callback, null)) {
     callback.m_onLayout__org_gwtproject_layout_client_Layout_Layer__double(l, 1.0);
    }
   }
   this.f_impl__org_gwtproject_layout_client_Layout_.m_finalizeLayout__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_);
   if (!$Equality.$same(callback, null)) {
    callback.m_onAnimationComplete__();
   }
   return;
  }
  let parentWidth = Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_);
  let parentHeight = Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_);
  for (let $iterator_1 = this.f_layers__org_gwtproject_layout_client_Layout_.m_iterator__(); $iterator_1.m_hasNext__(); ) {
   let l_1 = /**@type {Layer} */ ($Casts.$to($iterator_1.m_next__(), Layer));
   this.m_adjustHorizontalConstraints__int__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_layout_client_Layout(parentWidth, l_1);
   this.m_adjustVerticalConstraints__int__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_layout_client_Layout(parentHeight, l_1);
  }
  this.f_animation__org_gwtproject_layout_client_Layout_ = $1.$create__org_gwtproject_layout_client_Layout__org_gwtproject_layout_client_Layout_AnimationCallback(this, callback);
  this.f_animation__org_gwtproject_layout_client_Layout_.m_run__int__org_gwtproject_dom_client_Element(duration, this.f_parentElem__org_gwtproject_layout_client_Layout_);
 }
 /**
  * @public
  */
 m_onAttach__() {
  this.f_impl__org_gwtproject_layout_client_Layout_.m_onAttach__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_);
 }
 /**
  * @public
  */
 m_onDetach__() {
  this.f_impl__org_gwtproject_layout_client_Layout_.m_onDetach__org_gwtproject_dom_client_Element(this.f_parentElem__org_gwtproject_layout_client_Layout_);
 }
 /**
  * @param {Layer} layer
  * @public
  */
 m_removeChild__org_gwtproject_layout_client_Layout_Layer(layer) {
  this.f_impl__org_gwtproject_layout_client_Layout_.m_removeChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(layer.f_container__org_gwtproject_layout_client_Layout_Layer, layer.f_child__org_gwtproject_layout_client_Layout_Layer);
  this.f_layers__org_gwtproject_layout_client_Layout_.remove(layer);
 }
 /**
  * @param {number} parentWidth
  * @param {Layer} l
  * @public
  */
 m_adjustHorizontalConstraints__int__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_layout_client_Layout(parentWidth, l) {
  let leftPx = l.f_left__org_gwtproject_layout_client_Layout_Layer * this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_leftUnit__org_gwtproject_layout_client_Layout_Layer, false);
  let rightPx = l.f_right__org_gwtproject_layout_client_Layout_Layer * this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_rightUnit__org_gwtproject_layout_client_Layout_Layer, false);
  let widthPx = l.f_width__org_gwtproject_layout_client_Layout_Layer * this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_widthUnit__org_gwtproject_layout_client_Layout_Layer, false);
  if (l.f_setLeft__org_gwtproject_layout_client_Layout_Layer && !l.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer) {
   l.f_setLeft__org_gwtproject_layout_client_Layout_Layer = false;
   if (!l.f_setWidth__org_gwtproject_layout_client_Layout_Layer) {
    l.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer = (parentWidth - (leftPx + rightPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer, false);
   } else {
    l.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceRight__org_gwtproject_layout_client_Layout_Layer = (parentWidth - (leftPx + widthPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer, false);
   }
  } else if (l.f_setWidth__org_gwtproject_layout_client_Layout_Layer && !l.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer) {
   l.f_setWidth__org_gwtproject_layout_client_Layout_Layer = false;
   if (!l.f_setLeft__org_gwtproject_layout_client_Layout_Layer) {
    l.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer = (parentWidth - (rightPx + widthPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer, false);
   } else {
    l.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceRight__org_gwtproject_layout_client_Layout_Layer = (parentWidth - (leftPx + widthPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer, false);
   }
  } else if (l.f_setRight__org_gwtproject_layout_client_Layout_Layer && !l.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer) {
   l.f_setRight__org_gwtproject_layout_client_Layout_Layer = false;
   if (!l.f_setWidth__org_gwtproject_layout_client_Layout_Layer) {
    l.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceWidth__org_gwtproject_layout_client_Layout_Layer = (parentWidth - (leftPx + rightPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer, false);
   } else {
    l.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceLeft__org_gwtproject_layout_client_Layout_Layer = (parentWidth - (rightPx + widthPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer, false);
   }
  }
  l.f_setLeft__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetLeft__org_gwtproject_layout_client_Layout_Layer;
  l.f_setRight__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetRight__org_gwtproject_layout_client_Layout_Layer;
  l.f_setWidth__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetWidth__org_gwtproject_layout_client_Layout_Layer;
  l.f_leftUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetLeftUnit__org_gwtproject_layout_client_Layout_Layer;
  l.f_rightUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetRightUnit__org_gwtproject_layout_client_Layout_Layer;
  l.f_widthUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetWidthUnit__org_gwtproject_layout_client_Layout_Layer;
 }
 /**
  * @param {number} parentHeight
  * @param {Layer} l
  * @public
  */
 m_adjustVerticalConstraints__int__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_layout_client_Layout(parentHeight, l) {
  let topPx = l.f_top__org_gwtproject_layout_client_Layout_Layer * this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_topUnit__org_gwtproject_layout_client_Layout_Layer, true);
  let bottomPx = l.f_bottom__org_gwtproject_layout_client_Layout_Layer * this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_bottomUnit__org_gwtproject_layout_client_Layout_Layer, true);
  let heightPx = l.f_height__org_gwtproject_layout_client_Layout_Layer * this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_heightUnit__org_gwtproject_layout_client_Layout_Layer, true);
  if (l.f_setTop__org_gwtproject_layout_client_Layout_Layer && !l.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer) {
   l.f_setTop__org_gwtproject_layout_client_Layout_Layer = false;
   if (!l.f_setHeight__org_gwtproject_layout_client_Layout_Layer) {
    l.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer = (parentHeight - (topPx + bottomPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer, true);
   } else {
    l.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer = (parentHeight - (topPx + heightPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer, true);
   }
  } else if (l.f_setHeight__org_gwtproject_layout_client_Layout_Layer && !l.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer) {
   l.f_setHeight__org_gwtproject_layout_client_Layout_Layer = false;
   if (!l.f_setTop__org_gwtproject_layout_client_Layout_Layer) {
    l.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceTop__org_gwtproject_layout_client_Layout_Layer = (parentHeight - (bottomPx + heightPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer, true);
   } else {
    l.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceBottom__org_gwtproject_layout_client_Layout_Layer = (parentHeight - (topPx + heightPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer, true);
   }
  } else if (l.f_setBottom__org_gwtproject_layout_client_Layout_Layer && !l.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer) {
   l.f_setBottom__org_gwtproject_layout_client_Layout_Layer = false;
   if (!l.f_setHeight__org_gwtproject_layout_client_Layout_Layer) {
    l.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceHeight__org_gwtproject_layout_client_Layout_Layer = (parentHeight - (topPx + bottomPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer, true);
   } else {
    l.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer = true;
    l.f_sourceTop__org_gwtproject_layout_client_Layout_Layer = (parentHeight - (bottomPx + heightPx)) / this.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(l.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer, true);
   }
  }
  l.f_setTop__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetTop__org_gwtproject_layout_client_Layout_Layer;
  l.f_setBottom__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetBottom__org_gwtproject_layout_client_Layout_Layer;
  l.f_setHeight__org_gwtproject_layout_client_Layout_Layer = l.f_setTargetHeight__org_gwtproject_layout_client_Layout_Layer;
  l.f_topUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetTopUnit__org_gwtproject_layout_client_Layout_Layer;
  l.f_bottomUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetBottomUnit__org_gwtproject_layout_client_Layout_Layer;
  l.f_heightUnit__org_gwtproject_layout_client_Layout_Layer = l.f_targetHeightUnit__org_gwtproject_layout_client_Layout_Layer;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_layout_client_Layout() {
  this.f_impl__org_gwtproject_layout_client_Layout_ = LayoutImpl.$create__();
  this.f_layers__org_gwtproject_layout_client_Layout_ = /**@type {!ArrayList<Layer>} */ (ArrayList.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  Layout.$clinit = () =>{};
  Layout.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Layout;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $1 = goog.module.get('org.gwtproject.layout.client.Layout.$1$impl');
  Layer = goog.module.get('org.gwtproject.layout.client.Layout.Layer$impl');
  LayoutImpl = goog.module.get('org.gwtproject.layout.client.LayoutImpl$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Layout, 'org.gwtproject.layout.client.Layout');

exports = Layout; 
//# sourceMappingURL=Layout.js.map