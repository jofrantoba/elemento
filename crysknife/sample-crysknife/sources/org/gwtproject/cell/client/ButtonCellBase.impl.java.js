goog.module('org.gwtproject.cell.client.ButtonCellBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCell = goog.require('org.gwtproject.cell.client.AbstractCell$impl');
const IsCollapsible = goog.require('org.gwtproject.cell.client.IsCollapsible$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Appearance = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.Appearance$impl');
let Decoration = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.Decoration$impl');
let UnpushHandler = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.UnpushHandler$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C
 * @extends {AbstractCell<C>}
 * @implements {IsCollapsible}
 * @implements {HasEnabled}
  */
class ButtonCellBase extends AbstractCell {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_accessKey__org_gwtproject_cell_client_ButtonCellBase_ = 0 /* '\u0000' */;
  /** @public {Appearance<C>} */
  this.f_appearance__org_gwtproject_cell_client_ButtonCellBase_;
  /** @public {Decoration} */
  this.f_decoration__org_gwtproject_cell_client_ButtonCellBase_;
  /** @public {ImageResource} */
  this.f_icon__org_gwtproject_cell_client_ButtonCellBase_;
  /** @public {boolean} */
  this.f_isCollapsedLeft__org_gwtproject_cell_client_ButtonCellBase_ = false;
  /** @public {boolean} */
  this.f_isCollapsedRight__org_gwtproject_cell_client_ButtonCellBase_ = false;
  /** @public {boolean} */
  this.f_isEnabled__org_gwtproject_cell_client_ButtonCellBase_ = false;
  /** @public {number} */
  this.f_tabIndex__org_gwtproject_cell_client_ButtonCellBase_ = 0;
 }
 /**
  * @template C
  * @param {Appearance<C>} appearance
  * @return {!ButtonCellBase<C>}
  * @public
  */
 static $create__org_gwtproject_cell_client_ButtonCellBase_Appearance(appearance) {
  ButtonCellBase.$clinit();
  let $instance = new ButtonCellBase();
  $instance.$ctor__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_ButtonCellBase_Appearance(appearance);
  return $instance;
 }
 /**
  * @param {Appearance<C>} appearance
  * @public
  */
 $ctor__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_ButtonCellBase_Appearance(appearance) {
  this.$ctor__org_gwtproject_cell_client_AbstractCell__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents], j_l_String)));
  this.$init___$p_org_gwtproject_cell_client_ButtonCellBase();
  this.f_appearance__org_gwtproject_cell_client_ButtonCellBase_ = appearance;
 }
 /**
  * @return {number}
  * @public
  */
 m_getAccessKey__() {
  return this.f_accessKey__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @return {Decoration}
  * @public
  */
 m_getDecoration__() {
  return this.f_decoration__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @return {ImageResource}
  * @public
  */
 m_getIcon__() {
  return this.f_icon__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getTabIndex__() {
  return this.f_tabIndex__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isCollapseLeft__() {
  return this.f_isCollapsedLeft__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isCollapseRight__() {
  return this.f_isCollapsedRight__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return this.f_isEnabled__org_gwtproject_cell_client_ButtonCellBase_;
 }
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @param {Object} event
  * @param {ValueUpdater<C>} valueUpdater
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  if (!this.m_isEnabled__()) {
   return;
  }
  super.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  let target = /**@type {Object} */ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event)), Element_$Overlay));
  if (!Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent), target)) {
   return;
  }
  let eventType = NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater);
  } else if (j_l_String.m_equals__java_lang_String__java_lang_Object(BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents, eventType)) {
   this.f_appearance__org_gwtproject_cell_client_ButtonCellBase_.m_onPush__org_gwtproject_dom_client_Element(parent);
   UnpushHandler.$create__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_dom_client_Element(this, parent);
   NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  }
 }
 /**
  * @override
  * @param {Context} context
  * @param {C} value
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, value, sb) {
  this.f_appearance__org_gwtproject_cell_client_ButtonCellBase_.m_render__org_gwtproject_cell_client_ButtonCellBase__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(this, context, value, sb);
 }
 /**
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {
  this.f_accessKey__org_gwtproject_cell_client_ButtonCellBase_ = key;
 }
 /**
  * @override
  * @param {boolean} isCollapsed
  * @public
  */
 m_setCollapseLeft__boolean(isCollapsed) {
  this.f_isCollapsedLeft__org_gwtproject_cell_client_ButtonCellBase_ = isCollapsed;
 }
 /**
  * @override
  * @param {boolean} isCollapsed
  * @public
  */
 m_setCollapseRight__boolean(isCollapsed) {
  this.f_isCollapsedRight__org_gwtproject_cell_client_ButtonCellBase_ = isCollapsed;
 }
 /**
  * @param {Decoration} decoration
  * @public
  */
 m_setDecoration__org_gwtproject_cell_client_ButtonCellBase_Decoration(decoration) {
  this.f_decoration__org_gwtproject_cell_client_ButtonCellBase_ = decoration;
 }
 /**
  * @override
  * @param {boolean} isEnabled
  * @public
  */
 m_setEnabled__boolean(isEnabled) {
  this.f_isEnabled__org_gwtproject_cell_client_ButtonCellBase_ = isEnabled;
 }
 /**
  * @param {Object} parent
  * @param {boolean} focused
  * @public
  */
 m_setFocus__org_gwtproject_dom_client_Element__boolean(parent, focused) {
  this.f_appearance__org_gwtproject_cell_client_ButtonCellBase_.m_setFocus__org_gwtproject_dom_client_Element__boolean(parent, focused);
 }
 /**
  * @param {ImageResource} icon
  * @public
  */
 m_setIcon__org_gwtproject_resources_client_ImageResource(icon) {
  this.f_icon__org_gwtproject_cell_client_ButtonCellBase_ = icon;
 }
 /**
  * @param {number} tabIndex
  * @public
  */
 m_setTabIndex__int(tabIndex) {
  this.f_tabIndex__org_gwtproject_cell_client_ButtonCellBase_ = tabIndex;
 }
 /**
  * @override
  * @param {Context} context
  * @param {Object} parent
  * @param {C} value
  * @param {Object} event
  * @param {ValueUpdater<C>} valueUpdater
  * @public
  */
 m_onEnterKeyDown__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, parent, value, event, valueUpdater) {
  if (!$Equality.$same(valueUpdater, null)) {
   valueUpdater.m_update__java_lang_Object(value);
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_cell_client_ButtonCellBase() {
  this.f_decoration__org_gwtproject_cell_client_ButtonCellBase_ = Decoration.f_DEFAULT__org_gwtproject_cell_client_ButtonCellBase_Decoration;
  this.f_isEnabled__org_gwtproject_cell_client_ButtonCellBase_ = true;
  this.f_tabIndex__org_gwtproject_cell_client_ButtonCellBase_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  ButtonCellBase.$clinit = () =>{};
  ButtonCellBase.$loadModules();
  AbstractCell.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ButtonCellBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Decoration = goog.module.get('org.gwtproject.cell.client.ButtonCellBase.Decoration$impl');
  UnpushHandler = goog.module.get('org.gwtproject.cell.client.ButtonCellBase.UnpushHandler$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ButtonCellBase, 'org.gwtproject.cell.client.ButtonCellBase');

IsCollapsible.$markImplementor(ButtonCellBase);
HasEnabled.$markImplementor(ButtonCellBase);

exports = ButtonCellBase; 
//# sourceMappingURL=ButtonCellBase.js.map