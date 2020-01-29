goog.module('org.gwtproject.cell.client.NumberCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {AbstractCell<(Number|number)>}
  */
class NumberCell extends AbstractCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NumberFormat} */
  this.f_format__org_gwtproject_cell_client_NumberCell_;
  /** @public {SafeHtmlRenderer<?string>} */
  this.f_renderer__org_gwtproject_cell_client_NumberCell_;
 }
 /**
  * Factory method corresponding to constructor 'NumberCell()'.
  * @return {!NumberCell}
  * @public
  */
 static $create__() {
  NumberCell.$clinit();
  let $instance = new NumberCell();
  $instance.$ctor__org_gwtproject_cell_client_NumberCell__();
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_NumberCell__() {
  this.$ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_text_shared_SafeHtmlRenderer(NumberFormat.m_getDecimalFormat__(), SimpleSafeHtmlRenderer.m_getInstance__());
 }
 /**
  * Factory method corresponding to constructor 'NumberCell(NumberFormat)'.
  * @param {NumberFormat} format
  * @return {!NumberCell}
  * @public
  */
 static $create__org_gwtproject_i18n_client_NumberFormat(format) {
  NumberCell.$clinit();
  let $instance = new NumberCell();
  $instance.$ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberCell(NumberFormat)'.
  * @param {NumberFormat} format
  * @public
  */
 $ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat(format) {
  this.$ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, SimpleSafeHtmlRenderer.m_getInstance__());
 }
 /**
  * Factory method corresponding to constructor 'NumberCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!NumberCell}
  * @public
  */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  NumberCell.$clinit();
  let $instance = new NumberCell();
  $instance.$ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  this.$ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_text_shared_SafeHtmlRenderer(NumberFormat.m_getDecimalFormat__(), renderer);
 }
 /**
  * Factory method corresponding to constructor 'NumberCell(NumberFormat, SafeHtmlRenderer)'.
  * @param {NumberFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!NumberCell}
  * @public
  */
 static $create__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer) {
  NumberCell.$clinit();
  let $instance = new NumberCell();
  $instance.$ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'NumberCell(NumberFormat, SafeHtmlRenderer)'.
  * @param {NumberFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_NumberCell__org_gwtproject_i18n_client_NumberFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([], j_l_String)));
  if ($Equality.$same(format, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("format == null"));
  }
  if ($Equality.$same(renderer, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("renderer == null"));
  }
  this.f_format__org_gwtproject_cell_client_NumberCell_ = format;
  this.f_renderer__org_gwtproject_cell_client_NumberCell_ = renderer;
 }
 /**
  * @param {Context} context
  * @param {(Number|number)} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Number__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.f_renderer__org_gwtproject_cell_client_NumberCell_.m_render__java_lang_Object(this.f_format__org_gwtproject_cell_client_NumberCell_.m_format__java_lang_Number(value)));
  }
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {*} arg1
  * @param {SafeHtmlBuilder} arg2
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, arg1, arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Number__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {(Number|number)} */ ($Casts.$to(arg1, Number)), arg2);
 }
 /**
  * @public
  */
 static $clinit() {
  NumberCell.$clinit = () =>{};
  NumberCell.$loadModules();
  AbstractCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NumberCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(NumberCell, 'org.gwtproject.cell.client.NumberCell');

exports = NumberCell; 
//# sourceMappingURL=NumberCell.js.map