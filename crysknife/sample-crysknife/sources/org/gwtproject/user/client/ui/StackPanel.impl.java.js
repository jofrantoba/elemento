goog.module('org.gwtproject.user.client.ui.StackPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {ForIsWidget}
  */
class StackPanel extends ComplexPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_body__org_gwtproject_user_client_ui_StackPanel_;
  /** @public {number} */
  this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ = 0;
 }
 /**
  * @return {!StackPanel}
  * @public
  */
 static $create__() {
  StackPanel.$clinit();
  let $instance = new StackPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_StackPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_StackPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_StackPanel();
  let table = DOM.m_createTable__();
  this.m_setElement__org_gwtproject_dom_client_Element(table);
  this.f_body__org_gwtproject_user_client_ui_StackPanel_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(table, this.f_body__org_gwtproject_user_client_ui_StackPanel_);
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(table, "cellSpacing", 0);
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(table, "cellPadding", 0);
  DOM.m_sinkEvents__org_gwtproject_dom_client_Element__int(table, Event.f_ONCLICK__org_gwtproject_user_client_Event);
  this.m_setStyleName__java_lang_String(StackPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_StackPanel_);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} w
  * @param {?string} stackText
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(w, stackText) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(w, stackText, false);
 }
 /**
  * @param {Widget} w
  * @param {SafeHtml} stackHtml
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml(w, stackHtml) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(w, stackHtml.m_asString__(), true);
 }
 /**
  * @param {Widget} w
  * @param {?string} stackText
  * @param {boolean} asHTML
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(w, stackText, asHTML) {
  this.m_add__org_gwtproject_user_client_ui_Widget(w);
  this.m_setStackText__int__java_lang_String__boolean(this.m_getWidgetCount__() - 1, stackText, asHTML);
 }
 /**
  * @return {number}
  * @public
  */
 m_getSelectedIndex__() {
  return this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_;
 }
 /**
  * @override
  * @param {IsWidget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(w, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), beforeIndex);
 }
 /**
  * @override
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  let trh = DOM.m_createTR__();
  let tdh = DOM.m_createTD__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trh, tdh);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tdh, this.m_createHeaderElem___$pp_org_gwtproject_user_client_ui());
  let trb = DOM.m_createTR__();
  let tdb = DOM.m_createTD__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(trb, tdb);
  beforeIndex = this.m_adjustIndex__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex);
  let effectiveIndex = beforeIndex * 2;
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, trb, effectiveIndex);
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, trh, effectiveIndex);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(tdh, StackPanel.f_DEFAULT_ITEM_STYLENAME__org_gwtproject_user_client_ui_StackPanel_, true);
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(tdh, "__owner", this.hashCode());
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(tdh, "height", "1px");
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(tdb, j_l_String.m_valueOf__java_lang_Object(StackPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_StackPanel_) + "Content", true);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(tdb, "height", "100%");
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(tdb, "vAlign", "top");
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(w, tdb, beforeIndex, false);
  this.m_updateIndicesFrom__int_$p_org_gwtproject_user_client_ui_StackPanel(beforeIndex);
  if (this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ == -1) {
   this.m_showStack__int(0);
  } else {
   this.m_setStackVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(beforeIndex, false);
   if (this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ >= beforeIndex) {
    ++this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_;
   }
   this.m_setStackVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_, true);
  }
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  if (DOM.m_eventGetType__org_gwtproject_user_client_Event(event) == Event.f_ONCLICK__org_gwtproject_user_client_Event) {
   let target = DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event);
   let index = this.m_findDividerIndex__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_StackPanel(target);
   if (index != -1) {
    this.m_showStack__int(index);
   }
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__int(index) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget__int_$p_org_gwtproject_user_client_ui_StackPanel(this.m_getWidget__int(index), index);
 }
 /**
  * @override
  * @param {Widget} child
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(child) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget__int_$p_org_gwtproject_user_client_ui_StackPanel(child, this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 /**
  * @param {number} index
  * @param {?string} text
  * @public
  */
 m_setStackText__int__java_lang_String(index, text) {
  this.m_setStackText__int__java_lang_String__boolean(index, text, false);
 }
 /**
  * @param {number} index
  * @param {SafeHtml} html
  * @public
  */
 m_setStackText__int__org_gwtproject_safehtml_shared_SafeHtml(index, html) {
  this.m_setStackText__int__java_lang_String__boolean(index, html.m_asString__(), true);
 }
 /**
  * @param {number} index
  * @param {?string} text
  * @param {boolean} asHTML
  * @public
  */
 m_setStackText__int__java_lang_String__boolean(index, text, asHTML) {
  if (index >= this.m_getWidgetCount__()) {
   return;
  }
  let tdWrapper = DOM.m_getChild__org_gwtproject_dom_client_Element__int(DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, index * 2), 0);
  let headerElem = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(tdWrapper);
  if (asHTML) {
   $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getHeaderTextElem__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(headerElem), text);
  } else {
   $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getHeaderTextElem__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(headerElem), text);
  }
 }
 /**
  * @param {number} index
  * @public
  */
 m_showStack__int(index) {
  if ((index >= this.m_getWidgetCount__()) || (index < 0) || (index == this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_)) {
   return;
  }
  if (this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ >= 0) {
   this.m_setStackVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_, false);
  }
  this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ = index;
  this.m_setStackVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_, true);
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let numHeaders = DOM.m_getChildCount__org_gwtproject_dom_client_Element(this.f_body__org_gwtproject_user_client_ui_StackPanel_) >> 1;
  for (let i = 0; i < numHeaders; i++) {
   let tdWrapper = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, 2 * i));
   let headerElem = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(tdWrapper);
   let bodyElem = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, 2 * i + 1));
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(tdWrapper, baseID, "text-wrapper" + i);
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(bodyElem, baseID, "content" + i);
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getHeaderTextElem__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(headerElem), baseID, "text" + i);
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_createHeaderElem___$pp_org_gwtproject_user_client_ui() {
  return DOM.m_createDiv__();
 }
 /**
  * @param {Object} headerElem
  * @return {Object}
  * @public
  */
 m_getHeaderTextElem__org_gwtproject_dom_client_Element_$pp_org_gwtproject_user_client_ui(headerElem) {
  return headerElem;
 }
 /**
  * @param {number} index
  * @param {?string} styleName
  * @public
  */
 m_addHeaderStyleName__int__java_lang_String(index, styleName) {
  if (index >= this.m_getWidgetCount__()) {
   return;
  }
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, index * 2);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(tr, styleName, true);
 }
 /**
  * @param {number} index
  * @param {?string} styleName
  * @public
  */
 m_removeHeaderStyleName__int__java_lang_String(index, styleName) {
  if (index >= this.m_getWidgetCount__()) {
   return;
  }
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, index * 2);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(tr, styleName, false);
 }
 /**
  * @param {Object} elem
  * @return {number}
  * @public
  */
 m_findDividerIndex__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_StackPanel(elem) {
  while (!$Equality.$same(elem, null) && !$Equality.$same(elem, this.m_getElement__())) {
   let expando = $Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "__index");
   if (!$Equality.$same(expando, null)) {
    let ownerHash = $Overlay.m_getPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String(elem, "__owner");
    if (ownerHash == this.hashCode()) {
     return Integer.m_parseInt__java_lang_String(expando);
    } else {
     return -1;
    }
   }
   elem = DOM.m_getParent__org_gwtproject_dom_client_Element(elem);
  }
  return -1;
 }
 /**
  * @param {Widget} child
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget__int_$p_org_gwtproject_user_client_ui_StackPanel(child, index) {
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(child);
  if (removed) {
   let rowIndex = 2 * index;
   let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, rowIndex);
   this.f_body__org_gwtproject_user_client_ui_StackPanel_.removeChild(tr);
   tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, rowIndex);
   this.f_body__org_gwtproject_user_client_ui_StackPanel_.removeChild(tr);
   if (this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ == index) {
    this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ = -1;
   } else if (this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ > index) {
    --this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_;
   }
   this.m_updateIndicesFrom__int_$p_org_gwtproject_user_client_ui_StackPanel(index);
  }
  return removed;
 }
 /**
  * @param {number} index
  * @param {boolean} visible
  * @public
  */
 m_setStackContentVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(index, visible) {
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, (index * 2) + 1);
  UIObject.m_setVisible__org_gwtproject_dom_client_Element__boolean(tr, visible);
  this.m_getWidget__int(index).m_setVisible__boolean(visible);
 }
 /**
  * @param {number} index
  * @param {boolean} visible
  * @public
  */
 m_setStackVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(index, visible) {
  let tr = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, (index * 2));
  if ($Equality.$same(tr, null)) {
   return;
  }
  let td = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(tr);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(td, j_l_String.m_valueOf__java_lang_Object(StackPanel.f_DEFAULT_ITEM_STYLENAME__org_gwtproject_user_client_ui_StackPanel_) + "-selected", visible);
  this.m_setStackContentVisible__int__boolean_$p_org_gwtproject_user_client_ui_StackPanel(index, visible);
  let trNext = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, ((index + 1) * 2));
  if (!$Equality.$same(trNext, null)) {
   let tdNext = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(trNext);
   UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(tdNext, j_l_String.m_valueOf__java_lang_Object(StackPanel.f_DEFAULT_ITEM_STYLENAME__org_gwtproject_user_client_ui_StackPanel_) + "-below-selected", visible);
  }
 }
 /**
  * @param {number} beforeIndex
  * @public
  */
 m_updateIndicesFrom__int_$p_org_gwtproject_user_client_ui_StackPanel(beforeIndex) {
  for (let i = beforeIndex, c = this.m_getWidgetCount__(); i < c; ++i) {
   let childTR = DOM.m_getChild__org_gwtproject_dom_client_Element__int(this.f_body__org_gwtproject_user_client_ui_StackPanel_, i * 2);
   let childTD = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(childTR);
   $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(childTD, "__index", i);
   if (beforeIndex == 0) {
    UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(childTD, j_l_String.m_valueOf__java_lang_Object(StackPanel.f_DEFAULT_ITEM_STYLENAME__org_gwtproject_user_client_ui_StackPanel_) + "-first", true);
   } else {
    UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(childTD, j_l_String.m_valueOf__java_lang_Object(StackPanel.f_DEFAULT_ITEM_STYLENAME__org_gwtproject_user_client_ui_StackPanel_) + "-first", false);
   }
  }
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_StackPanel() {
  this.f_visibleStack__org_gwtproject_user_client_ui_StackPanel_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  StackPanel.$clinit = () =>{};
  StackPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StackPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
 }
 
}
$Util.$setClassMetadata(StackPanel, 'org.gwtproject.user.client.ui.StackPanel');

ForIsWidget.$markImplementor(StackPanel);

/** @public {?string} @const */
StackPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_StackPanel_ = "gwt-StackPanel";
/** @public {?string} @const */
StackPanel.f_DEFAULT_ITEM_STYLENAME__org_gwtproject_user_client_ui_StackPanel_ = "gwt-StackPanelItem";

exports = StackPanel; 
//# sourceMappingURL=StackPanel.js.map