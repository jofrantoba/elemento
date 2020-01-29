goog.module('org.gwtproject.cell.client.DatePickerCell$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEditableCell = goog.require('org.gwtproject.cell.client.AbstractEditableCell$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let $1 = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.cell.client.DatePickerCell.$4$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let DateTimeFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat$impl');
let PredefinedFormat = goog.forwardDeclare('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let DatePicker = goog.forwardDeclare('org.gwtproject.user.datepicker.client.DatePicker$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractEditableCell<Date, Date>}
  */
class DatePickerCell extends AbstractEditableCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DatePicker} */
  this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {DateTimeFormat} */
  this.f_format__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {number} */
  this.f_offsetX__org_gwtproject_cell_client_DatePickerCell_ = 0;
  /** @public {number} */
  this.f_offsetY__org_gwtproject_cell_client_DatePickerCell_ = 0;
  /** @public {*} */
  this.f_lastKey__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {Object} */
  this.f_lastParent__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {number} */
  this.f_lastIndex__org_gwtproject_cell_client_DatePickerCell_ = 0;
  /** @public {number} */
  this.f_lastColumn__org_gwtproject_cell_client_DatePickerCell_ = 0;
  /** @public {Date} */
  this.f_lastValue__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {PopupPanel} */
  this.f_panel__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {SafeHtmlRenderer<?string>} */
  this.f_renderer__org_gwtproject_cell_client_DatePickerCell_;
  /** @public {ValueUpdater<Date>} */
  this.f_valueUpdater__org_gwtproject_cell_client_DatePickerCell_;
 }
 /**
  * Factory method corresponding to constructor 'DatePickerCell()'.
  * @return {!DatePickerCell}
  * @public
  */
 static $create__() {
  DatePickerCell.$clinit();
  let $instance = new DatePickerCell();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DatePickerCell()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_DatePickerCell__() {
  this.$ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(DateTimeFormat.m_getFullDateFormat__(), SimpleSafeHtmlRenderer.m_getInstance__());
 }
 /**
  * Factory method corresponding to constructor 'DatePickerCell(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @return {!DatePickerCell}
  * @public
  */
 static $create__org_gwtproject_i18n_client_DateTimeFormat(format) {
  DatePickerCell.$clinit();
  let $instance = new DatePickerCell();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat(format);
  return $instance;
 }
 /**
  * Initialization from constructor 'DatePickerCell(DateTimeFormat)'.
  * @param {DateTimeFormat} format
  * @public
  */
 $ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat(format) {
  this.$ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, SimpleSafeHtmlRenderer.m_getInstance__());
 }
 /**
  * Factory method corresponding to constructor 'DatePickerCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!DatePickerCell}
  * @public
  */
 static $create__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  DatePickerCell.$clinit();
  let $instance = new DatePickerCell();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'DatePickerCell(SafeHtmlRenderer)'.
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_text_shared_SafeHtmlRenderer(renderer) {
  this.$ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(DateTimeFormat.m_getFormat__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat(PredefinedFormat.f_DATE_FULL__org_gwtproject_i18n_client_DateTimeFormat_PredefinedFormat), renderer);
 }
 /**
  * Factory method corresponding to constructor 'DatePickerCell(DateTimeFormat, SafeHtmlRenderer)'.
  * @param {DateTimeFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @return {!DatePickerCell}
  * @public
  */
 static $create__org_gwtproject_i18n_client_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer) {
  DatePickerCell.$clinit();
  let $instance = new DatePickerCell();
  $instance.$ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'DatePickerCell(DateTimeFormat, SafeHtmlRenderer)'.
  * @param {DateTimeFormat} format
  * @param {SafeHtmlRenderer<?string>} renderer
  * @public
  */
 $ctor__org_gwtproject_cell_client_DatePickerCell__org_gwtproject_i18n_client_DateTimeFormat__org_gwtproject_text_shared_SafeHtmlRenderer(format, renderer) {
  this.$ctor__org_gwtproject_cell_client_AbstractEditableCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  this.$init___$p_org_gwtproject_cell_client_DatePickerCell();
  if ($Equality.$same(format, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("format == null"));
  }
  if ($Equality.$same(renderer, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("renderer == null"));
  }
  this.f_format__org_gwtproject_cell_client_DatePickerCell_ = format;
  this.f_renderer__org_gwtproject_cell_client_DatePickerCell_ = renderer;
  this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_ = DatePicker.$create__();
  this.f_panel__org_gwtproject_cell_client_DatePickerCell_ = $1.$create__org_gwtproject_cell_client_DatePickerCell__boolean__boolean(this, true, true);
  this.f_panel__org_gwtproject_cell_client_DatePickerCell_.m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler($2.$create__org_gwtproject_cell_client_DatePickerCell(this));
  this.f_panel__org_gwtproject_cell_client_DatePickerCell_.m_add__org_gwtproject_user_client_ui_Widget(this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_);
  this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler($3.$create__org_gwtproject_cell_client_DatePickerCell(this));
 }
 /**
  * @return {DatePicker}
  * @public
  */
 m_getDatePicker__() {
  return this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_;
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {Date} value
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date(context, parent, value) {
  return !$Equality.$same(this.f_lastKey__org_gwtproject_cell_client_DatePickerCell_, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_lastKey__org_gwtproject_cell_client_DatePickerCell_, context.m_getKey__());
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {Date} value
  * @param {Object} event
  * @param {ValueUpdater<Date>} valueUpdater
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  super.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event))) {
   this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  }
 }
 /**
  * @param {Context} context
  * @param {Date} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_util_Date__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  let key = context.m_getKey__();
  let viewData = /**@type {Date} */ ($Casts.$to(this.m_getViewData__java_lang_Object(key), Date));
  if (!$Equality.$same(viewData, null) && viewData.equals(value)) {
   this.m_clearViewData__java_lang_Object(key);
   viewData = null;
  }
  let s = null;
  if (!$Equality.$same(viewData, null)) {
   s = this.f_format__org_gwtproject_cell_client_DatePickerCell_.m_format__java_util_Date(viewData);
  } else if (!$Equality.$same(value, null)) {
   s = this.f_format__org_gwtproject_cell_client_DatePickerCell_.m_format__java_util_Date(value);
  }
  if (!$Equality.$same(s, null)) {
   sb.m_append__org_gwtproject_safehtml_shared_SafeHtml(this.f_renderer__org_gwtproject_cell_client_DatePickerCell_.m_render__java_lang_Object(s));
  }
 }
 /**
  * @param {Context} context
  * @param {Object} parent
  * @param {Date} value
  * @param {Object} event
  * @param {ValueUpdater<Date>} valueUpdater
  * @public
  */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  this.f_lastKey__org_gwtproject_cell_client_DatePickerCell_ = context.m_getKey__();
  this.f_lastParent__org_gwtproject_cell_client_DatePickerCell_ = parent;
  this.f_lastValue__org_gwtproject_cell_client_DatePickerCell_ = value;
  this.f_lastIndex__org_gwtproject_cell_client_DatePickerCell_ = context.m_getIndex__();
  this.f_lastColumn__org_gwtproject_cell_client_DatePickerCell_ = context.m_getColumn__();
  this.f_valueUpdater__org_gwtproject_cell_client_DatePickerCell_ = valueUpdater;
  let viewData = /**@type {Date} */ ($Casts.$to(this.m_getViewData__java_lang_Object(this.f_lastKey__org_gwtproject_cell_client_DatePickerCell_), Date));
  let date = $Equality.$same(viewData, null) ? this.f_lastValue__org_gwtproject_cell_client_DatePickerCell_ : viewData;
  this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_.m_setCurrentMonth__java_util_Date(date);
  this.f_datePicker__org_gwtproject_cell_client_DatePickerCell_.m_setValue__java_util_Date(date);
  this.f_panel__org_gwtproject_cell_client_DatePickerCell_.m_setPopupPositionAndShow__org_gwtproject_user_client_ui_PopupPanel_PositionCallback($4.$create__org_gwtproject_cell_client_DatePickerCell(this));
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {Object} arg1
  * @param {*} arg2
  * @return {boolean}
  * @public
  */
 m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object(arg0, arg1, arg2) {
  return this.m_isEditing__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date(arg0, arg1, /**@type {Date} */ ($Casts.$to(arg2, Date)));
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {Object} arg1
  * @param {*} arg2
  * @param {Object} arg3
  * @param {ValueUpdater} arg4
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, arg2, arg3, arg4) {
  this.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, /**@type {Date} */ ($Casts.$to(arg2, Date)), arg3, arg4);
 }
 /**
  * Bridge method.
  * @override
  * @param {Context} arg0
  * @param {Object} arg1
  * @param {*} arg2
  * @param {Object} arg3
  * @param {ValueUpdater} arg4
  * @public
  */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, arg2, arg3, arg4) {
  this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_util_Date__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(arg0, arg1, /**@type {Date} */ ($Casts.$to(arg2, Date)), arg3, arg4);
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
  * @private
  */
 $init___$p_org_gwtproject_cell_client_DatePickerCell() {
  this.f_offsetX__org_gwtproject_cell_client_DatePickerCell_ = 10;
  this.f_offsetY__org_gwtproject_cell_client_DatePickerCell_ = 10;
 }
 /**
  * @public
  */
 static $clinit() {
  DatePickerCell.$clinit = () =>{};
  DatePickerCell.$loadModules();
  AbstractEditableCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DatePickerCell;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.cell.client.DatePickerCell.$1$impl');
  $2 = goog.module.get('org.gwtproject.cell.client.DatePickerCell.$2$impl');
  $3 = goog.module.get('org.gwtproject.cell.client.DatePickerCell.$3$impl');
  $4 = goog.module.get('org.gwtproject.cell.client.DatePickerCell.$4$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  DateTimeFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat$impl');
  PredefinedFormat = goog.module.get('org.gwtproject.i18n.client.DateTimeFormat.PredefinedFormat$impl');
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
  DatePicker = goog.module.get('org.gwtproject.user.datepicker.client.DatePicker$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(DatePickerCell, 'org.gwtproject.cell.client.DatePickerCell');

/** @public {number} @const */
DatePickerCell.f_ESCAPE__org_gwtproject_cell_client_DatePickerCell_ = 27;

exports = DatePickerCell; 
//# sourceMappingURL=DatePickerCell.js.map