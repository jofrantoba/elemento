goog.module('org.gwtproject.layout.client.LayoutImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let State = goog.forwardDeclare('org.gwtproject.aria.client.State$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Visibility = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility$impl');
let Alignment = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Alignment$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

class LayoutImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_relativeRuler__org_gwtproject_layout_client_LayoutImpl;
 }
 /** @return {!LayoutImpl} */
 static $create__() {
  LayoutImpl.$clinit();
  let $instance = new LayoutImpl();
  $instance.$ctor__org_gwtproject_layout_client_LayoutImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_layout_client_LayoutImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {Object} */
 static m_createRuler__org_gwtproject_dom_style_shared_Unit__org_gwtproject_dom_style_shared_Unit(/** Unit */ widthUnit, /** Unit */ heightUnit) {
  LayoutImpl.$clinit();
  let ruler = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(ruler, "&nbsp;");
  let style = ruler.style;
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int(style, -32767);
  Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, -20, heightUnit);
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 10, widthUnit);
  Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 10, heightUnit);
  Style_$Overlay.m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility(style, Visibility.f_HIDDEN__org_gwtproject_dom_style_shared_Visibility);
  State.f_HIDDEN__org_gwtproject_aria_client_State.m_set__org_gwtproject_dom_client_Element__arrayOf_java_lang_Object(ruler, /**@type {!Array<?boolean>}*/ ($Arrays.$init([true], Boolean)));
  return ruler;
 }
 /** @return {Object} */
 m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ child, /** Object */ before) {
  let container = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  container.appendChild(child);
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(container.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(container.style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  this.m_fillParent__org_gwtproject_dom_client_Element(child);
  let beforeContainer = null;
  if (!$Equality.$same(before, null)) {
   beforeContainer = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(before);
   $Asserts.$assertWithMessage($Equality.$same(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(beforeContainer), parent), "Element to insert before must be a sibling");
  }
  parent.insertBefore(container, beforeContainer);
  return container;
 }
 
 m_fillParent__org_gwtproject_dom_client_Element(/** Object */ elem) {
  let style = elem.style;
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  Style_$Overlay.m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 
 m_finalizeLayout__org_gwtproject_dom_client_Element(/** Object */ parent) {}
 /** @return {number} */
 m_getUnitSizeInPixels__org_gwtproject_dom_client_Element__org_gwtproject_dom_style_shared_Unit__boolean(/** Object */ parent, /** Unit */ unit, /** boolean */ vertical) {
  if ($Equality.$same(unit, null)) {
   return 1.0;
  }
  switch (unit.ordinal()) {
   case Unit.$ordinal$f_PCT__org_gwtproject_dom_style_shared_Unit: 
    return (vertical ? Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(parent) : Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(parent)) / 100.0;
   case Unit.$ordinal$f_EM__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(this.f_relativeRuler__org_gwtproject_layout_client_LayoutImpl) / 10.0;
   case Unit.$ordinal$f_EX__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_relativeRuler__org_gwtproject_layout_client_LayoutImpl) / 10.0;
   case Unit.$ordinal$f_CM__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_) * 0.1;
   case Unit.$ordinal$f_MM__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_) * 0.01;
   case Unit.$ordinal$f_IN__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_) * 0.254;
   case Unit.$ordinal$f_PT__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_) * 0.00353;
   case Unit.$ordinal$f_PC__org_gwtproject_dom_style_shared_Unit: 
    return Element_$Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_) * 0.0423;
   default: 
   case Unit.$ordinal$f_PX__org_gwtproject_dom_style_shared_Unit: 
    return 1.0;
  }
 }
 
 m_initParent__org_gwtproject_dom_client_Element(/** Object */ parent) {
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(parent.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  parent.appendChild(this.f_relativeRuler__org_gwtproject_layout_client_LayoutImpl = LayoutImpl.m_createRuler__org_gwtproject_dom_style_shared_Unit__org_gwtproject_dom_style_shared_Unit(Unit.f_EM__org_gwtproject_dom_style_shared_Unit, Unit.f_EX__org_gwtproject_dom_style_shared_Unit));
 }
 
 m_layout__org_gwtproject_layout_client_Layout_Layer(/** Layer */ layer) {
  let style = layer.f_container__org_gwtproject_layout_client_Layout_Layer.style;
  if (layer.f_visible__org_gwtproject_layout_client_Layout_Layer) {
   Style_$Overlay.m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(style);
  } else {
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  }
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(style, "left", layer.f_setLeft__org_gwtproject_layout_client_Layout_Layer ? (layer.f_left__org_gwtproject_layout_client_Layout_Layer + j_l_String.m_valueOf__java_lang_Object(layer.f_leftUnit__org_gwtproject_layout_client_Layout_Layer.m_getType__())) : "");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(style, "top", layer.f_setTop__org_gwtproject_layout_client_Layout_Layer ? (layer.f_top__org_gwtproject_layout_client_Layout_Layer + j_l_String.m_valueOf__java_lang_Object(layer.f_topUnit__org_gwtproject_layout_client_Layout_Layer.m_getType__())) : "");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(style, "right", layer.f_setRight__org_gwtproject_layout_client_Layout_Layer ? (layer.f_right__org_gwtproject_layout_client_Layout_Layer + j_l_String.m_valueOf__java_lang_Object(layer.f_rightUnit__org_gwtproject_layout_client_Layout_Layer.m_getType__())) : "");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(style, "bottom", layer.f_setBottom__org_gwtproject_layout_client_Layout_Layer ? (layer.f_bottom__org_gwtproject_layout_client_Layout_Layer + j_l_String.m_valueOf__java_lang_Object(layer.f_bottomUnit__org_gwtproject_layout_client_Layout_Layer.m_getType__())) : "");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(style, "width", layer.f_setWidth__org_gwtproject_layout_client_Layout_Layer ? (layer.f_width__org_gwtproject_layout_client_Layout_Layer + j_l_String.m_valueOf__java_lang_Object(layer.f_widthUnit__org_gwtproject_layout_client_Layout_Layer.m_getType__())) : "");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(style, "height", layer.f_setHeight__org_gwtproject_layout_client_Layout_Layer ? (layer.f_height__org_gwtproject_layout_client_Layout_Layer + j_l_String.m_valueOf__java_lang_Object(layer.f_heightUnit__org_gwtproject_layout_client_Layout_Layer.m_getType__())) : "");
  style = layer.f_child__org_gwtproject_layout_client_Layout_Layer.style;
  switch (layer.f_hPos__org_gwtproject_layout_client_Layout_Layer.ordinal()) {
   case Alignment.$ordinal$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment: 
    Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    Style_$Overlay.m_clearRight__$devirt__org_gwtproject_dom_client_Style(style);
    break;
   case Alignment.$ordinal$f_END__org_gwtproject_layout_client_Layout_Alignment: 
    Style_$Overlay.m_clearLeft__$devirt__org_gwtproject_dom_client_Style(style);
    Style_$Overlay.m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    break;
   case Alignment.$ordinal$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment: 
    Style_$Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    Style_$Overlay.m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    break;
  }
  switch (layer.f_vPos__org_gwtproject_layout_client_Layout_Layer.ordinal()) {
   case Alignment.$ordinal$f_BEGIN__org_gwtproject_layout_client_Layout_Alignment: 
    Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    Style_$Overlay.m_clearBottom__$devirt__org_gwtproject_dom_client_Style(style);
    break;
   case Alignment.$ordinal$f_END__org_gwtproject_layout_client_Layout_Alignment: 
    Style_$Overlay.m_clearTop__$devirt__org_gwtproject_dom_client_Style(style);
    Style_$Overlay.m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    break;
   case Alignment.$ordinal$f_STRETCH__org_gwtproject_layout_client_Layout_Alignment: 
    Style_$Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    Style_$Overlay.m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    break;
  }
 }
 
 m_onAttach__org_gwtproject_dom_client_Element(/** Object */ parent) {}
 
 m_onDetach__org_gwtproject_dom_client_Element(/** Object */ parent) {}
 
 m_removeChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ container, /** Object */ child) {
  Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(container);
  if ($Equality.$same(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(child), container)) {
   Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(child);
  }
  let style = child.style;
  Style_$Overlay.m_clearPosition__$devirt__org_gwtproject_dom_client_Style(style);
  Style_$Overlay.m_clearLeft__$devirt__org_gwtproject_dom_client_Style(style);
  Style_$Overlay.m_clearTop__$devirt__org_gwtproject_dom_client_Style(style);
  Style_$Overlay.m_clearWidth__$devirt__org_gwtproject_dom_client_Style(style);
  Style_$Overlay.m_clearHeight__$devirt__org_gwtproject_dom_client_Style(style);
 }
 
 static $clinit() {
  LayoutImpl.$clinit = () =>{};
  LayoutImpl.$loadModules();
  j_l_Object.$clinit();
  LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_ = LayoutImpl.m_createRuler__org_gwtproject_dom_style_shared_Unit__org_gwtproject_dom_style_shared_Unit(Unit.f_CM__org_gwtproject_dom_style_shared_Unit, Unit.f_CM__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_get__().body.appendChild(LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutImpl;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  State = goog.module.get('org.gwtproject.aria.client.State$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Visibility = goog.module.get('org.gwtproject.dom.style.shared.Visibility$impl');
  Alignment = goog.module.get('org.gwtproject.layout.client.Layout.Alignment$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(LayoutImpl, 'org.gwtproject.layout.client.LayoutImpl');

/**@type {Object}*/
LayoutImpl.f_fixedRuler__org_gwtproject_layout_client_LayoutImpl_;

exports = LayoutImpl; 
//# sourceMappingURL=LayoutImpl.js.map