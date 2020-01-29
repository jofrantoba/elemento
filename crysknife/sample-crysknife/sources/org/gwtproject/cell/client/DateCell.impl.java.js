goog.module('org.gwtproject.cell.client.DateCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let DateTimeFormat = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat$impl');
let TimeZone = goog.forwardDeclare('org.gwtproject.i18n.shared.TimeZone$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {AbstractCell<Date>}
  */
class DateCell extends AbstractCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateTimeFormat} */
  this.f_format__org_gwtproject_cell_client_DateCell_;
  /** @public {SafeHtmlRenderer<?string>} */
  this.f_renderer__org_gwtproject_cell_client_DateCell_;
  /** @public {TimeZone} */
  this.f_timeZone__org_gwtproject_cell_client_DateCell_;
 }
 /**
  * Factory method corresponding to constructor 'DateCell()'.
  * @return {!DateCell}
  * @public
  */
 static $create__() {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DateCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_DateCell__() {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(DateTimeFormat.m_getFormat__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat), SimpleSafeHtmlRenderer.m_getInstance__(), null);
 }
 /**
  * Factory method corresponding to constructor 'DateCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!DateCell}
  * @public
  */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(DateTimeFormat.m_getFormat__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat), renderer, null);
 }
 /**
  * Factory method corresponding to constructor 'DateCell(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @return {!DateCell}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat(format) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateCell(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @public
  */
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat(format) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, SimpleSafeHtmlRenderer.m_getInstance__(), null);
 }
 /**
  * Factory method corresponding to constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer)'.
  * @param {DateTimeFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!DateCell}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer)'.
  * @param {DateTimeFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, renderer, null);
 }
 /**
  * Factory method corresponding to constructor 'DateCell(DateTimeFormat, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {TimeZone} timeZone
  * @return {!DateCell}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateCell(DateTimeFormat, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {TimeZone} timeZone
  * @public
  */
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, SimpleSafeHtmlRenderer.m_getInstance__(), timeZone);
 }
 /**
  * Factory method corresponding to constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @param {TimeZone} timeZone
  * @return {!DateCell}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, renderer, timeZone) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, renderer, timeZone);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @param {TimeZone} timeZone
  * @public
  */
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, renderer, timeZone) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([], j_l_String)));
  if ($Equality.$same(format, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("format == null"));
  }
  if ($Equality.$same(renderer, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("renderer == null"));
  }
  this.f_format__org_gwtproject_cell_client_DateCell_ = format;
  this.f_renderer__org_gwtproject_cell_client_DateCell_ = renderer;
  this.f_timeZone__org_gwtproject_cell_client_DateCell_ = timeZone;
 }
 /**
  * @param {Context} context
  * @param {Date} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_util_Date__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.f_renderer__org_gwtproject_cell_client_DateCell_.m_render__java_lang_Object(this.f_format__org_gwtproject_cell_client_DateCell_.m_format__java_util_Date__org_gwtproject_i18n_shared_TimeZone(value, this.f_timeZone__org_gwtproject_cell_client_DateCell_)));
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
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_util_Date__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {Date} */ ($Casts.$to(arg1, Date)), arg2);
 }
 /**
  * @public
  */
 static $clinit() {
  DateCell.$clinit = () =>{};
  DateCell.$loadModules();
  AbstractCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateTimeFormat = goog.module.get('org.gwtproject.i18n.shared.DateTimeFormat$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat$impl');
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DateCell, 'org.gwtproject.cell.client.DateCell');

exports = DateCell; 
//# sourceMappingURL=DateCell.js.map