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
 /** @protected */
 constructor() {
  super();
  /**@type {DateTimeFormat}*/
  this.f_format__org_gwtproject_cell_client_DateCell_;
  /**@type {SafeHtmlRenderer<?string>}*/
  this.f_renderer__org_gwtproject_cell_client_DateCell_;
  /**@type {TimeZone}*/
  this.f_timeZone__org_gwtproject_cell_client_DateCell_;
 }
 //Factory method corresponding to constructor 'DateCell()'.
 /** @return {!DateCell} */
 static $create__() {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__();
  return $instance;
 }
 //Initialization from constructor 'DateCell()'.
 
 $ctor__org_gwtproject_cell_client_DateCell__() {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(DateTimeFormat.m_getFormat__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat), SimpleSafeHtmlRenderer.m_getInstance__(), null);
 }
 //Factory method corresponding to constructor 'DateCell(SafeHtmlRenderer)'.
 /** @return {!DateCell} */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 //Initialization from constructor 'DateCell(SafeHtmlRenderer)'.
 
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_text_shared_SafeHtmlRenderer(/** SafeHtmlRenderer<?string> */ renderer) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(DateTimeFormat.m_getFormat__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_FULL__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat), renderer, null);
 }
 //Factory method corresponding to constructor 'DateCell(DateTimeFormat)'.
 /** @return {!DateCell} */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat(/** DateTimeFormat */ format) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat(format);
  return $instance;
 }
 //Initialization from constructor 'DateCell(DateTimeFormat)'.
 
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat(/** DateTimeFormat */ format) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, SimpleSafeHtmlRenderer.m_getInstance__(), null);
 }
 //Factory method corresponding to constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer)'.
 /** @return {!DateCell} */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(/** DateTimeFormat */ format, /** SafeHtmlRenderer<?string> */ renderer) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer);
  return $instance;
 }
 //Initialization from constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer)'.
 
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(/** DateTimeFormat */ format, /** SafeHtmlRenderer<?string> */ renderer) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, renderer, null);
 }
 //Factory method corresponding to constructor 'DateCell(DateTimeFormat, TimeZone)'.
 /** @return {!DateCell} */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(/** DateTimeFormat */ format, /** TimeZone */ timeZone) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone);
  return $instance;
 }
 //Initialization from constructor 'DateCell(DateTimeFormat, TimeZone)'.
 
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(/** DateTimeFormat */ format, /** TimeZone */ timeZone) {
  this.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, SimpleSafeHtmlRenderer.m_getInstance__(), timeZone);
 }
 //Factory method corresponding to constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer, TimeZone)'.
 /** @return {!DateCell} */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(/** DateTimeFormat */ format, /** SafeHtmlRenderer<?string> */ renderer, /** TimeZone */ timeZone) {
  DateCell.$clinit();
  let $instance = new DateCell();
  $instance.$ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(format, renderer, timeZone);
  return $instance;
 }
 //Initialization from constructor 'DateCell(DateTimeFormat, SafeHtmlRenderer, TimeZone)'.
 
 $ctor__org_gwtproject_cell_client_DateCell__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_i18n_shared_TimeZone(/** DateTimeFormat */ format, /** SafeHtmlRenderer<?string> */ renderer, /** TimeZone */ timeZone) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
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
 
 m_render__org_gwtproject_cell_client_Cell_Context__java_util_Date__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** Date */ value, /** SafeHtmlBuilder */ sb) {
  if (!$Equality.$same(value, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.f_renderer__org_gwtproject_cell_client_DateCell_.m_render__java_lang_Object(this.f_format__org_gwtproject_cell_client_DateCell_.m_format__java_util_Date__org_gwtproject_i18n_shared_TimeZone(value, this.f_timeZone__org_gwtproject_cell_client_DateCell_)));
  }
 }
 //Bridge method.
 /** @override */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ arg0, /** * */ arg1, /** SafeHtmlBuilder */ arg2) {
  this.m_render__org_gwtproject_cell_client_Cell_Context__java_util_Date__org_gwtproject_safehtml_shared_SafeHtmlBuilder(arg0, /**@type {Date}*/ ($Casts.$to(arg1, Date)), arg2);
 }
 
 static $clinit() {
  DateCell.$clinit = () =>{};
  DateCell.$loadModules();
  AbstractCell.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateCell;
 }
 
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