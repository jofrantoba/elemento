goog.module('org.gwtproject.canvas.dom.client.Context2d.LineCap$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LineCap>}
  */
class LineCap extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_LineCap_;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @return {!LineCap}
  * @public
  */
 static $create__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  let $instance = new LineCap();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_LineCap__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} value
  * @public
  */
 $ctor__org_gwtproject_canvas_dom_client_Context2d_LineCap__java_lang_String__int__java_lang_String($name, $ordinal, value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_LineCap_ = value;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_LineCap_;
 }
 /**
  * @param {string} name
  * @return {!LineCap}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  LineCap.$clinit();
  if ($Equality.$same(LineCap.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineCap_, null)) {
   LineCap.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineCap_ = $Enums.createMapFromValues(LineCap.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LineCap.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineCap_);
 }
 /**
  * @return {!Array<!LineCap>}
  * @public
  */
 static m_values__() {
  LineCap.$clinit();
  return /**@type {!Array<LineCap>} */ ($Arrays.$init([LineCap.$f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap, LineCap.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap, LineCap.$f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap], LineCap));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {LineCap} */ ($Casts.$to(arg0, LineCap)));
 }
 /**
  * @return {!LineCap}
  * @public
  */
 static get f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap() {
  return (LineCap.$clinit(), LineCap.$f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap);
 }
 /**
  * @return {!LineCap}
  * @public
  */
 static get f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap() {
  return (LineCap.$clinit(), LineCap.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap);
 }
 /**
  * @return {!LineCap}
  * @public
  */
 static get f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap() {
  return (LineCap.$clinit(), LineCap.$f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap);
 }
 /**
  * @public
  */
 static $clinit() {
  LineCap.$clinit = () =>{};
  LineCap.$loadModules();
  Enum.$clinit();
  LineCap.$f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap = LineCap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BUTT"), LineCap.$ordinal$f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap, "butt");
  LineCap.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap = LineCap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROUND"), LineCap.$ordinal$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap, "round");
  LineCap.$f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap = LineCap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SQUARE"), LineCap.$ordinal$f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap, "square");
  LineCap.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineCap_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LineCap;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(LineCap, 'org.gwtproject.canvas.dom.client.Context2d$LineCap');

/** @private {!LineCap} */
LineCap.$f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap;
/** @private {!LineCap} */
LineCap.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap;
/** @private {!LineCap} */
LineCap.$f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap;
/** @public {Map<?string, !LineCap>} */
LineCap.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineCap_;
/** @public {number} @const */
LineCap.$ordinal$f_BUTT__org_gwtproject_canvas_dom_client_Context2d_LineCap = 0;
/** @public {number} @const */
LineCap.$ordinal$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineCap = 1;
/** @public {number} @const */
LineCap.$ordinal$f_SQUARE__org_gwtproject_canvas_dom_client_Context2d_LineCap = 2;

exports = LineCap; 
//# sourceMappingURL=Context2d$LineCap.js.map