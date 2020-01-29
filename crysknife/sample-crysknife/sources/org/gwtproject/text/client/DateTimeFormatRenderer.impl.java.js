goog.module('org.gwtproject.text.client.DateTimeFormatRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractRenderer = goog.require('org.gwtproject.text.shared.AbstractRenderer$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateTimeFormat = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat$impl');
let TimeZone = goog.forwardDeclare('org.gwtproject.i18n.shared.TimeZone$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractRenderer<Date>}
  */
class DateTimeFormatRenderer extends AbstractRenderer {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DateTimeFormat} */
  this.f_format__org_gwtproject_text_client_DateTimeFormatRenderer_;
  /** @public {TimeZone} */
  this.f_timeZone__org_gwtproject_text_client_DateTimeFormatRenderer_;
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormatRenderer()'.
  * @return {!DateTimeFormatRenderer}
  * @public
  */
 static $create__() {
  DateTimeFormatRenderer.$clinit();
  let $instance = new DateTimeFormatRenderer();
  $instance.$ctor__org_gwtproject_text_client_DateTimeFormatRenderer__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormatRenderer()'.
  * @public
  */
 $ctor__org_gwtproject_text_client_DateTimeFormatRenderer__() {
  this.$ctor__org_gwtproject_text_client_DateTimeFormatRenderer__org_gwtproject_i18n_shared_DateTimeFormat(DateTimeFormat.m_getFormat__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_SHORT__org_gwtproject_i18n_shared_DateTimeFormat_PredefinedFormat));
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormatRenderer(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @return {!DateTimeFormatRenderer}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat(format) {
  DateTimeFormatRenderer.$clinit();
  let $instance = new DateTimeFormatRenderer();
  $instance.$ctor__org_gwtproject_text_client_DateTimeFormatRenderer__org_gwtproject_i18n_shared_DateTimeFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormatRenderer(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @public
  */
 $ctor__org_gwtproject_text_client_DateTimeFormatRenderer__org_gwtproject_i18n_shared_DateTimeFormat(format) {
  this.$ctor__org_gwtproject_text_client_DateTimeFormatRenderer__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, /**@type {TimeZone} */ (null));
 }
 /**
  * Factory method corresponding to constructor 'DateTimeFormatRenderer(DateTimeFormat, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {TimeZone} timeZone
  * @return {!DateTimeFormatRenderer}
  * @public
  */
 static $create__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone) {
  DateTimeFormatRenderer.$clinit();
  let $instance = new DateTimeFormatRenderer();
  $instance.$ctor__org_gwtproject_text_client_DateTimeFormatRenderer__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone);
  return $instance;
 }
 /**
  * Initialization from constructor 'DateTimeFormatRenderer(DateTimeFormat, TimeZone)'.
  * @param {DateTimeFormat} format
  * @param {TimeZone} timeZone
  * @public
  */
 $ctor__org_gwtproject_text_client_DateTimeFormatRenderer__org_gwtproject_i18n_shared_DateTimeFormat__org_gwtproject_i18n_shared_TimeZone(format, timeZone) {
  this.$ctor__org_gwtproject_text_shared_AbstractRenderer__();
  $Asserts.$assert(!$Equality.$same(format, null));
  this.f_format__org_gwtproject_text_client_DateTimeFormatRenderer_ = format;
  this.f_timeZone__org_gwtproject_text_client_DateTimeFormatRenderer_ = timeZone;
 }
 /**
  * @param {Date} object
  * @return {?string}
  * @public
  */
 m_render__java_util_Date(object) {
  return $Equality.$same(object, null) ? "" : this.f_format__org_gwtproject_text_client_DateTimeFormatRenderer_.m_format__java_util_Date__org_gwtproject_i18n_shared_TimeZone(object, this.f_timeZone__org_gwtproject_text_client_DateTimeFormatRenderer_);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {?string}
  * @public
  */
 m_render__java_lang_Object(arg0) {
  return this.m_render__java_util_Date(/**@type {Date} */ ($Casts.$to(arg0, Date)));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatRenderer.$clinit = () =>{};
  DateTimeFormatRenderer.$loadModules();
  AbstractRenderer.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateTimeFormat = goog.module.get('org.gwtproject.i18n.shared.DateTimeFormat$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.shared.DateTimeFormat.PredefinedFormat$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatRenderer, 'org.gwtproject.text.client.DateTimeFormatRenderer');

exports = DateTimeFormatRenderer; 
//# sourceMappingURL=DateTimeFormatRenderer.js.map