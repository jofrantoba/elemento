goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.Impl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NodeList.$Overlay$impl');
let TableElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let AbstractCellTable = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable$impl');
let Template = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable.Template$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Impl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_;
 }
 /** @return {!Impl} */
 static $create__() {
  Impl.$clinit();
  let $instance = new Impl();
  $instance.$ctor__org_gwtproject_user_cellview_client_AbstractCellTable_Impl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_AbstractCellTable_Impl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_AbstractCellTable_Impl();
 }
 /** @return {Object} */
 m_convertToSectionElement__org_gwtproject_user_cellview_client_AbstractCellTable__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** AbstractCellTable<?> */ table, /** ?string */ sectionTag, /** SafeHtml */ rowHtml) {
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_, table);
  sectionTag = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(sectionTag, Locale.f_ROOT__java_util_Locale);
  if ($Equality.$same("tbody", sectionTag)) {
   $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_, Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_tbody__org_gwtproject_safehtml_shared_SafeHtml(rowHtml));
  } else if ($Equality.$same("thead", sectionTag)) {
   $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_, Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_thead__org_gwtproject_safehtml_shared_SafeHtml(rowHtml));
  } else if ($Equality.$same("tfoot", sectionTag)) {
   $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_, Template.f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template.m_tfoot__org_gwtproject_safehtml_shared_SafeHtml(rowHtml));
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Invalid table section tag: " + j_l_String.m_valueOf__java_lang_Object(sectionTag)));
  }
  let tableElem = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_)), TableElement_$Overlay));
  DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_, null);
  if ($Equality.$same("tbody", sectionTag)) {
   return /**@type {Object}*/ ($Casts.$to(NodeList_$Overlay.m_getItem__$devirt__org_gwtproject_dom_client_NodeList__int(tableElem.tBodies, 0), TableSectionElement_$Overlay));
  } else if ($Equality.$same("thead", sectionTag)) {
   return tableElem.tHead;
  } else if ($Equality.$same("tfoot", sectionTag)) {
   return tableElem.tFoot;
  } else {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Invalid table section tag: " + j_l_String.m_valueOf__java_lang_Object(sectionTag)));
  }
 }
 
 m_replaceAllRows__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml(/** AbstractCellTable<?> */ table, /** Object */ section, /** SafeHtml */ html) {
  if (!table.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(table.m_getElement__(), table);
  }
  let parent = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(section);
  let nextSection = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(section);
  this.m_detachSectionElement__org_gwtproject_dom_client_TableSectionElement(section);
  this.m_replaceAllRowsImpl__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml(table, section, html);
  this.m_reattachSectionElement__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_dom_client_Element(parent, section, nextSection);
  if (!table.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(table.m_getElement__(), null);
  }
 }
 
 m_replaceChildren__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml__int__int(/** AbstractCellTable<?> */ table, /** Object */ section, /** SafeHtml */ html, /** number */ startIndex, /** number */ childCount) {
  if (!table.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(table.m_getElement__(), table);
  }
  let parent = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(section);
  let nextSection = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(section);
  this.m_detachSectionElement__org_gwtproject_dom_client_TableSectionElement(section);
  let absEndIndex = table.m_getPageStart__() + startIndex + childCount;
  let insertBefore = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(table.m_getChildElement__int(startIndex)), TableRowElement_$Overlay));
  if (table.f_legacyRenderRowValues__org_gwtproject_user_cellview_client_AbstractCellTable_) {
   let count = 0;
   while (!$Equality.$same(insertBefore, null) && count < childCount) {
    let next = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(insertBefore);
    section.removeChild(insertBefore);
    insertBefore = $Equality.$same(next, null) ? null : /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(next), TableRowElement_$Overlay));
    count++;
   }
  } else {
   while (!$Equality.$same(insertBefore, null) && table.f_tableBuilder__org_gwtproject_user_cellview_client_AbstractCellTable_.m_getRowValueIndex__org_gwtproject_dom_client_TableRowElement(insertBefore) < absEndIndex) {
    let next_1 = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(insertBefore);
    section.removeChild(insertBefore);
    insertBefore = $Equality.$same(next_1, null) ? null : /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(next_1), TableRowElement_$Overlay));
   }
  }
  let newSection = this.m_convertToSectionElement__org_gwtproject_user_cellview_client_AbstractCellTable__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(table, $Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(section), html);
  let newChild = $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(newSection);
  while (!$Equality.$same(newChild, null)) {
   let next_2 = $Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(newChild);
   section.insertBefore(newChild, insertBefore);
   newChild = next_2;
  }
  this.m_reattachSectionElement__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_dom_client_Element(parent, section, nextSection);
  if (!table.m_isAttached__()) {
   DOM.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(table.m_getElement__(), null);
  }
 }
 
 m_detachSectionElement__org_gwtproject_dom_client_TableSectionElement(/** Object */ section) {
  Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(section);
 }
 
 m_reattachSectionElement__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_dom_client_Element(/** Object */ parent, /** Object */ section, /** Object */ nextSection) {
  parent.insertBefore(section, nextSection);
 }
 
 m_replaceAllRowsImpl__org_gwtproject_user_cellview_client_AbstractCellTable__org_gwtproject_dom_client_TableSectionElement__org_gwtproject_safehtml_shared_SafeHtml(/** AbstractCellTable<?> */ table, /** Object */ section, /** SafeHtml */ html) {
  $Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(section, html);
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_AbstractCellTable_Impl() {
  this.f_tmpElem__org_gwtproject_user_cellview_client_AbstractCellTable_Impl_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
 }
 
 static $clinit() {
  Impl.$clinit = () =>{};
  Impl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Impl;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('org.gwtproject.dom.client.NodeList.$Overlay$impl');
  TableElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableElement.$Overlay$impl');
  TableRowElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
  TableSectionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  Template = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable.Template$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Impl, 'org.gwtproject.user.cellview.client.AbstractCellTable$Impl');

exports = Impl; 
//# sourceMappingURL=AbstractCellTable$Impl.js.map