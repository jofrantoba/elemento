goog.module('org.gwtproject.view.client.DefaultSelectionEventManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let BlacklistEventTranslator = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.BlacklistEventTranslator$impl');
let CheckboxEventTranslator = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.CheckboxEventTranslator$impl');
let EventTranslator = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator$impl');
let SelectAction = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');
let WhitelistEventTranslator = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.WhitelistEventTranslator$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let MultiSelectionModel = goog.forwardDeclare('org.gwtproject.view.client.MultiSelectionModel$impl');
let Range = goog.forwardDeclare('org.gwtproject.view.client.Range$impl');
let SelectionModel = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {Handler<T>}
  */
class DefaultSelectionEventManager extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HasData<T>} */
  this.f_lastDisplay__org_gwtproject_view_client_DefaultSelectionEventManager_;
  /** @public {number} */
  this.f_lastPageStart__org_gwtproject_view_client_DefaultSelectionEventManager_ = 0;
  /** @public {number} */
  this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ = 0;
  /** @public {boolean} */
  this.f_shiftAdditive__org_gwtproject_view_client_DefaultSelectionEventManager_ = false;
  /** @public {number} */
  this.f_shiftAnchor__org_gwtproject_view_client_DefaultSelectionEventManager_ = 0;
  /** @public {EventTranslator<T>} */
  this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_;
 }
 /**
  * @template T_1
  * @param {Array<number>} blacklistedColumns
  * @return {DefaultSelectionEventManager<T_1>}
  * @public
  */
 static m_createBlacklistManager__arrayOf_int(blacklistedColumns) {
  DefaultSelectionEventManager.$clinit();
  return /**@type {!DefaultSelectionEventManager<T_1>} */ (DefaultSelectionEventManager.$create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(/**@type {!BlacklistEventTranslator<T_1>} */ (BlacklistEventTranslator.$create__arrayOf_int(blacklistedColumns))));
 }
 /**
  * @template T_1
  * @return {DefaultSelectionEventManager<T_1>}
  * @public
  */
 static m_createCheckboxManager__() {
  DefaultSelectionEventManager.$clinit();
  return /**@type {!DefaultSelectionEventManager<T_1>} */ (DefaultSelectionEventManager.$create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(/**@type {!CheckboxEventTranslator<T_1>} */ (CheckboxEventTranslator.$create__())));
 }
 /**
  * @template T_1
  * @param {number} column
  * @return {DefaultSelectionEventManager<T_1>}
  * @public
  */
 static m_createCheckboxManager__int(column) {
  DefaultSelectionEventManager.$clinit();
  return /**@type {!DefaultSelectionEventManager<T_1>} */ (DefaultSelectionEventManager.$create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(/**@type {!CheckboxEventTranslator<T_1>} */ (CheckboxEventTranslator.$create__int(column))));
 }
 /**
  * @template T_1
  * @param {EventTranslator<T_1>} translator
  * @return {DefaultSelectionEventManager<T_1>}
  * @public
  */
 static m_createCustomManager__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(translator) {
  DefaultSelectionEventManager.$clinit();
  return /**@type {!DefaultSelectionEventManager<T_1>} */ (DefaultSelectionEventManager.$create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(translator));
 }
 /**
  * @template T_1
  * @return {DefaultSelectionEventManager<T_1>}
  * @public
  */
 static m_createDefaultManager__() {
  DefaultSelectionEventManager.$clinit();
  return /**@type {!DefaultSelectionEventManager<T_1>} */ (DefaultSelectionEventManager.$create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(null));
 }
 /**
  * @template T_1
  * @param {Array<number>} whitelistedColumns
  * @return {DefaultSelectionEventManager<T_1>}
  * @public
  */
 static m_createWhitelistManager__arrayOf_int(whitelistedColumns) {
  DefaultSelectionEventManager.$clinit();
  return /**@type {!DefaultSelectionEventManager<T_1>} */ (DefaultSelectionEventManager.$create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(/**@type {!WhitelistEventTranslator<T_1>} */ (WhitelistEventTranslator.$create__arrayOf_int(whitelistedColumns))));
 }
 /**
  * @template T
  * @param {EventTranslator<T>} translator
  * @return {!DefaultSelectionEventManager<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(translator) {
  DefaultSelectionEventManager.$clinit();
  let $instance = new DefaultSelectionEventManager();
  $instance.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(translator);
  return $instance;
 }
 /**
  * @param {EventTranslator<T>} translator
  * @public
  */
 $ctor__org_gwtproject_view_client_DefaultSelectionEventManager__org_gwtproject_view_client_DefaultSelectionEventManager_EventTranslator(translator) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_DefaultSelectionEventManager();
  this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_ = translator;
 }
 /**
  * @param {MultiSelectionModel<?>} selectionModel
  * @param {HasData<T>} display
  * @param {number} row
  * @param {T} rowValue
  * @param {SelectAction} action
  * @param {boolean} selectRange
  * @param {boolean} clearOthers
  * @public
  */
 m_doMultiSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__int__java_lang_Object__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__boolean__boolean(selectionModel, display, row, rowValue, action, selectRange, clearOthers) {
  let addToSelection = true;
  if (!$Equality.$same(action, null)) {
   switch (action.ordinal()) {
    case SelectAction.$ordinal$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     return;
    case SelectAction.$ordinal$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     addToSelection = true;
     break;
    case SelectAction.$ordinal$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     addToSelection = false;
     break;
    case SelectAction.$ordinal$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     addToSelection = !selectionModel.m_isSelected__java_lang_Object(rowValue);
     break;
   }
  }
  let pageStart = display.m_getVisibleRange__().m_getStart__();
  if (selectRange && pageStart == this.f_lastPageStart__org_gwtproject_view_client_DefaultSelectionEventManager_ && this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ > -1 && this.f_shiftAnchor__org_gwtproject_view_client_DefaultSelectionEventManager_ > -1 && $Equality.$same(display, this.f_lastDisplay__org_gwtproject_view_client_DefaultSelectionEventManager_)) {
   let start = Math.min(this.f_shiftAnchor__org_gwtproject_view_client_DefaultSelectionEventManager_, row);
   let end = Math.max(this.f_shiftAnchor__org_gwtproject_view_client_DefaultSelectionEventManager_, row);
   if (this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ < start) {
    this.m_setRangeSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__org_gwtproject_view_client_Range__boolean__boolean(selectionModel, display, Range.$create__int__int(this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_, start - this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_), !this.f_shiftAdditive__org_gwtproject_view_client_DefaultSelectionEventManager_, false);
   } else if (this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ > end) {
    this.m_setRangeSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__org_gwtproject_view_client_Range__boolean__boolean(selectionModel, display, Range.$create__int__int(end + 1, this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ - end), !this.f_shiftAdditive__org_gwtproject_view_client_DefaultSelectionEventManager_, false);
   } else {
    this.f_shiftAdditive__org_gwtproject_view_client_DefaultSelectionEventManager_ = addToSelection;
   }
   this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ = row;
   this.m_setRangeSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__org_gwtproject_view_client_Range__boolean__boolean(selectionModel, display, Range.$create__int__int(start, end - start + 1), this.f_shiftAdditive__org_gwtproject_view_client_DefaultSelectionEventManager_, clearOthers);
  } else {
   this.f_lastDisplay__org_gwtproject_view_client_DefaultSelectionEventManager_ = display;
   this.f_lastPageStart__org_gwtproject_view_client_DefaultSelectionEventManager_ = pageStart;
   this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ = row;
   this.f_shiftAnchor__org_gwtproject_view_client_DefaultSelectionEventManager_ = row;
   this.m_selectOne__org_gwtproject_view_client_MultiSelectionModel__java_lang_Object__boolean__boolean(selectionModel, rowValue, addToSelection, clearOthers);
  }
 }
 /**
  * @override
  * @param {CellPreviewEvent<T>} event
  * @public
  */
 m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(event) {
  if (event.m_isCellEditing__() || event.m_isSelectionHandled__()) {
   return;
  }
  let display = event.m_getDisplay__();
  let selectionModel = display.m_getSelectionModel__();
  if ($Equality.$same(selectionModel, null)) {
   return;
  }
  let action = $Equality.$same(this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_, null) ? SelectAction.f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction : this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_.m_translateSelectionEvent__org_gwtproject_view_client_CellPreviewEvent(event);
  if (MultiSelectionModel.$isInstance(selectionModel)) {
   this.m_handleMultiSelectionEvent__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__org_gwtproject_view_client_MultiSelectionModel(event, action, /**@type {MultiSelectionModel<*>} */ ($Casts.$to(selectionModel, MultiSelectionModel)));
  } else {
   this.m_handleSelectionEvent__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__org_gwtproject_view_client_SelectionModel(event, action, selectionModel);
  }
 }
 /**
  * @param {MultiSelectionModel<?>} selectionModel
  * @public
  */
 m_clearSelection__org_gwtproject_view_client_MultiSelectionModel(selectionModel) {
  selectionModel.m_clear__();
 }
 /**
  * @param {CellPreviewEvent<T>} event
  * @param {SelectAction} action
  * @param {MultiSelectionModel<?>} selectionModel
  * @public
  */
 m_handleMultiSelectionEvent__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__org_gwtproject_view_client_MultiSelectionModel(event, action, selectionModel) {
  let nativeEvent = event.m_getNativeEvent__();
  let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, type)) {
   let shift = $Overlay.m_getShiftKey__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
   let ctrlOrMeta = $Overlay.m_getCtrlKey__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent) || $Overlay.m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
   let clearOthers = $Equality.$same(this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_, null) ? !ctrlOrMeta : this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_.m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(event);
   if ($Equality.$same(action, null) || $Equality.$same(action, SelectAction.f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction)) {
    action = ctrlOrMeta ? SelectAction.f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction : SelectAction.f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
   }
   this.m_doMultiSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__int__java_lang_Object__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__boolean__boolean(selectionModel, event.m_getDisplay__(), event.m_getIndex__(), event.m_getValue__(), action, shift, clearOthers);
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, type)) {
   let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
   if (keyCode == 32) {
    let shift_1 = $Overlay.m_getShiftKey__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
    let clearOthers_1 = $Equality.$same(this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_, null) ? false : this.f_translator__org_gwtproject_view_client_DefaultSelectionEventManager_.m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(event);
    if ($Equality.$same(action, null) || $Equality.$same(action, SelectAction.f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction)) {
     action = SelectAction.f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
    }
    this.m_doMultiSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__int__java_lang_Object__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__boolean__boolean(selectionModel, event.m_getDisplay__(), event.m_getIndex__(), event.m_getValue__(), action, shift_1, clearOthers_1);
   }
  }
 }
 /**
  * @param {CellPreviewEvent<T>} event
  * @param {SelectAction} action
  * @param {SelectionModel<?>} selectionModel
  * @public
  */
 m_handleSelectionEvent__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction__org_gwtproject_view_client_SelectionModel(event, action, selectionModel) {
  let value = event.m_getValue__();
  if (!$Equality.$same(action, null)) {
   switch (action.ordinal()) {
    case SelectAction.$ordinal$f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     return;
    case SelectAction.$ordinal$f_SELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     selectionModel.m_setSelected__java_lang_Object__boolean(value, true);
     return;
    case SelectAction.$ordinal$f_DESELECT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     selectionModel.m_setSelected__java_lang_Object__boolean(value, false);
     return;
    case SelectAction.$ordinal$f_TOGGLE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction: 
     selectionModel.m_setSelected__java_lang_Object__boolean(value, !selectionModel.m_isSelected__java_lang_Object(value));
     return;
   }
  }
  let nativeEvent = event.m_getNativeEvent__();
  let type = $Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, type)) {
   if ($Overlay.m_getCtrlKey__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent) || $Overlay.m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent)) {
    selectionModel.m_setSelected__java_lang_Object__boolean(value, !selectionModel.m_isSelected__java_lang_Object(value));
   } else {
    selectionModel.m_setSelected__java_lang_Object__boolean(value, true);
   }
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, type)) {
   let keyCode = $Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent);
   if (keyCode == 32) {
    selectionModel.m_setSelected__java_lang_Object__boolean(value, !selectionModel.m_isSelected__java_lang_Object(value));
   }
  }
 }
 /**
  * @param {MultiSelectionModel<?>} selectionModel
  * @param {T} target
  * @param {boolean} selected
  * @param {boolean} clearOthers
  * @public
  */
 m_selectOne__org_gwtproject_view_client_MultiSelectionModel__java_lang_Object__boolean__boolean(selectionModel, target, selected, clearOthers) {
  if (clearOthers) {
   this.m_clearSelection__org_gwtproject_view_client_MultiSelectionModel(selectionModel);
  }
  selectionModel.m_setSelected__java_lang_Object__boolean(target, selected);
 }
 /**
  * @param {MultiSelectionModel<?>} selectionModel
  * @param {HasData<T>} display
  * @param {Range} range
  * @param {boolean} addToSelection
  * @param {boolean} clearOthers
  * @public
  */
 m_setRangeSelection__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_HasData__org_gwtproject_view_client_Range__boolean__boolean(selectionModel, display, range, addToSelection, clearOthers) {
  let toUpdate = /**@type {!ArrayList<T>} */ (ArrayList.$create__());
  let itemCount = display.m_getVisibleItemCount__();
  let relativeStart = range.m_getStart__() - display.m_getVisibleRange__().m_getStart__();
  let relativeEnd = relativeStart + range.m_getLength__();
  for (let i = relativeStart; i < relativeEnd && i < itemCount; i++) {
   toUpdate.add(display.m_getVisibleItem__int(i));
  }
  if (clearOthers) {
   this.m_clearSelection__org_gwtproject_view_client_MultiSelectionModel(selectionModel);
  }
  for (let $iterator = toUpdate.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = $iterator.m_next__();
   selectionModel.m_setSelected__java_lang_Object__boolean(value, addToSelection);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_view_client_DefaultSelectionEventManager() {
  this.f_lastSelectedIndex__org_gwtproject_view_client_DefaultSelectionEventManager_ = -1;
  this.f_shiftAnchor__org_gwtproject_view_client_DefaultSelectionEventManager_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultSelectionEventManager.$clinit = () =>{};
  DefaultSelectionEventManager.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultSelectionEventManager;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  BlacklistEventTranslator = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.BlacklistEventTranslator$impl');
  CheckboxEventTranslator = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.CheckboxEventTranslator$impl');
  SelectAction = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');
  WhitelistEventTranslator = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.WhitelistEventTranslator$impl');
  MultiSelectionModel = goog.module.get('org.gwtproject.view.client.MultiSelectionModel$impl');
  Range = goog.module.get('org.gwtproject.view.client.Range$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DefaultSelectionEventManager, 'org.gwtproject.view.client.DefaultSelectionEventManager');

Handler.$markImplementor(DefaultSelectionEventManager);

exports = DefaultSelectionEventManager; 
//# sourceMappingURL=DefaultSelectionEventManager.js.map