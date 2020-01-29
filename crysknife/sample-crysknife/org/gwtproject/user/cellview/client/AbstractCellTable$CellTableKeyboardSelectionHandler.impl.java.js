goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.CellTableKeyboardSelectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultKeyboardSelectionHandler = goog.require('org.gwtproject.user.cellview.client.AbstractHasData.DefaultKeyboardSelectionHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
let CellBasedWidgetImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');

/**
 * @template T
 * @extends {DefaultKeyboardSelectionHandler<T>}
  */
class CellTableKeyboardSelectionHandler extends DefaultKeyboardSelectionHandler {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractCellTable<T>} */
  this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_;
 }
 /**
  * @template T
  * @param {AbstractCellTable<T>} table
  * @return {!CellTableKeyboardSelectionHandler<T>}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_AbstractCellTable(table) {
  CellTableKeyboardSelectionHandler.$clinit();
  let $instance = new CellTableKeyboardSelectionHandler();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler__org_gwtproject_user_cellview_client_AbstractCellTable(table);
  return $instance;
 }
 /**
  * @param {AbstractCellTable<T>} table
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler__org_gwtproject_user_cellview_client_AbstractCellTable(table) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractHasData_DefaultKeyboardSelectionHandler__org_gwtproject_user_cellview_client_AbstractHasData(table);
  this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_ = table;
 }
 /**
  * @override
  * @return {AbstractCellTable<T>}
  * @public
  */
 m_getDisplay__() {
  return this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_;
 }
 /**
  * @override
  * @param {CellPreviewEvent<T>} event
  * @public
  */
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(event) {
  let nativeEvent = event.m_getNativeEvent__();
  let eventType = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, eventType) && !event.m_isCellEditing__()) {
   let oldRow = this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedRow__();
   let oldColumn = this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedColumn__();
   let isRtl = LocaleInfo.m_getCurrentLocale__().m_isRTL__();
   let keyCodeLineEnd = isRtl ? KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes : KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes;
   let keyCodeLineStart = isRtl ? KeyCodes.f_KEY_RIGHT__org_gwtproject_event_dom_client_KeyCodes : KeyCodes.f_KEY_LEFT__org_gwtproject_event_dom_client_KeyCodes;
   let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
   if (keyCode == keyCodeLineEnd) {
    let nextColumn = this.m_findInteractiveColumn__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler(oldColumn, false);
    if (nextColumn <= oldColumn) {
     this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedRow__int(oldRow + 1);
     if (this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() != oldRow) {
      this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedColumn__int(nextColumn);
      this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
      return;
     }
    } else {
     this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedColumn__int(nextColumn);
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    }
   } else if (keyCode == keyCodeLineStart) {
    let prevColumn = this.m_findInteractiveColumn__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler(oldColumn, true);
    if (prevColumn >= oldColumn) {
     this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedRow__int(oldRow - 1);
     if (this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() != oldRow) {
      this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedColumn__int(prevColumn);
      this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
      return;
     }
    } else {
     this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedColumn__int(prevColumn);
     this.m_handledEvent__org_gwtproject_view_client_CellPreviewEvent_$pp_org_gwtproject_user_cellview_client(event);
     return;
    }
   }
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType) || j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   let col = event.m_getColumn__();
   let relRow = event.m_getIndex__() - this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getPageStart__();
   let subrow = event.m_getContext__().m_getSubIndex__();
   if ((this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedColumn__() != col) || (this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedRow__() != relRow) || (this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getKeyboardSelectedSubRow__() != subrow)) {
    let stealFocus = false;
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType)) {
     let target = Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject($Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()));
     stealFocus = !CellBasedWidgetImpl.m_get__().m_isFocusable__org_gwtproject_dom_client_Element(target);
    }
    this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedRow__int__int__boolean(relRow, subrow, stealFocus);
    this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_setKeyboardSelectedColumn__int__boolean(col, stealFocus);
   }
   return;
  }
  super.m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(event);
 }
 /**
  * @param {number} start
  * @param {boolean} reverse
  * @return {number}
  * @public
  */
 m_findInteractiveColumn__int__boolean_$p_org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler(start, reverse) {
  if (!this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.f_isInteractive__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   return 0;
  } else if (reverse) {
   for (let i = start - 1; i >= 0; i--) {
    if (AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getColumn__int(i))) {
     return i;
    }
   }
   for (let i_1 = this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getColumnCount__() - 1; i_1 >= start; i_1--) {
    if (AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getColumn__int(i_1))) {
     return i_1;
    }
   }
  } else {
   for (let i_2 = start + 1; i_2 < this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getColumnCount__(); i_2++) {
    if (AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getColumn__int(i_2))) {
     return i_2;
    }
   }
   for (let i_3 = 0; i_3 <= start; i_3++) {
    if (AbstractCellTable.m_isColumnInteractive__org_gwtproject_cell_client_HasCell(this.f_table__org_gwtproject_user_cellview_client_AbstractCellTable_CellTableKeyboardSelectionHandler_.m_getColumn__int(i_3))) {
     return i_3;
    }
   }
  }
  return 0;
 }
 /**
  * @public
  */
 static $clinit() {
  CellTableKeyboardSelectionHandler.$clinit = () =>{};
  CellTableKeyboardSelectionHandler.$loadModules();
  DefaultKeyboardSelectionHandler.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellTableKeyboardSelectionHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  AbstractCellTable = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
  CellBasedWidgetImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBasedWidgetImpl$impl');
 }
 
}
$Util.$setClassMetadata(CellTableKeyboardSelectionHandler, 'org.gwtproject.user.cellview.client.AbstractCellTable$CellTableKeyboardSelectionHandler');

exports = CellTableKeyboardSelectionHandler; 
//# sourceMappingURL=AbstractCellTable$CellTableKeyboardSelectionHandler.js.map