goog.module('org.gwtproject.uibinder.client.impl.AbstractUiRenderer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiRenderer = goog.require('org.gwtproject.uibinder.client.UiRenderer$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {UiRenderer}
  */
class AbstractUiRenderer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_uiId__org_gwtproject_uibinder_client_impl_AbstractUiRenderer;
 }
 
 $ctor__org_gwtproject_uibinder_client_impl_AbstractUiRenderer__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 static m_buildInnerId__java_lang_String__java_lang_String(/** ?string */ fieldName, /** ?string */ uiId) {
  AbstractUiRenderer.$clinit();
  return j_l_String.m_valueOf__java_lang_Object(uiId) + j_l_String.m_valueOf__java_lang_Object(AbstractUiRenderer.f_UI_ID_SEPARATOR__org_gwtproject_uibinder_client_impl_AbstractUiRenderer) + j_l_String.m_valueOf__java_lang_Object(fieldName);
 }
 /** @return {Object} */
 static m_findInnerField__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(/** Object */ parent, /** ?string */ fieldName, /** ?string */ attribute) {
  AbstractUiRenderer.$clinit();
  let root = AbstractUiRenderer.m_findRootElement__org_gwtproject_dom_client_Element__java_lang_String(parent, attribute);
  if (!$Equality.$same(parent, root) && !AbstractUiRenderer.m_isRenderedElementSingleChild__org_gwtproject_dom_client_Element(root)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Parent Element of previously rendered element contains more than one child" + " while getting \"" + j_l_String.m_valueOf__java_lang_Object(fieldName) + "\""));
  }
  let uiId = $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(root, attribute);
  let renderedId = AbstractUiRenderer.m_buildInnerId__java_lang_String__java_lang_String(fieldName, uiId);
  let elementById = Document_$Overlay.m_get__().getElementById(renderedId);
  if ($Equality.$same(elementById, null)) {
   if (!AbstractUiRenderer.m_isAttachedToDom__org_gwtproject_dom_client_Element(root)) {
    throw $Exceptions.toJs(RuntimeException.$create__java_lang_String("UiRendered element is not attached to DOM while getting \"" + j_l_String.m_valueOf__java_lang_Object(fieldName) + "\""));
   } else {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("UiRendered element is not attached to DOM, or \"" + j_l_String.m_valueOf__java_lang_Object(fieldName) + "\" not found within rendered element"));
   }
  }
  return elementById;
 }
 /** @return {Object} */
 static m_findRootElement__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ parent, /** ?string */ attribute) {
  AbstractUiRenderer.$clinit();
  let root = AbstractUiRenderer.m_findRootElementOrNull__org_gwtproject_dom_client_Element__java_lang_String(parent, attribute);
  if ($Equality.$same(root, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Parent element does not contain a previously rendered element"));
  }
  return root;
 }
 /** @return {SafeHtml} */
 static m_stampUiRendererAttribute__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__java_lang_String(/** SafeHtml */ safeHtml, /** ?string */ attributeName, /** ?string */ attributeValue) {
  AbstractUiRenderer.$clinit();
  let html = safeHtml.m_asString__();
  let endOfFirstTag = j_l_String.m_indexOf__java_lang_String__java_lang_String(html, ">");
  $Asserts.$assertWithMessage(endOfFirstTag > 1, "Safe html template does not start with an HTML open tag");
  if (j_l_String.m_charAt__java_lang_String__int(html, endOfFirstTag - 1) == 47 /* '/' */) {
   endOfFirstTag--;
  }
  html = j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int__int(html, 0, endOfFirstTag)) + " " + j_l_String.m_valueOf__java_lang_Object(attributeName) + "=\"" + j_l_String.m_valueOf__java_lang_Object(attributeValue) + "\"" + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_substring__java_lang_String__int(html, endOfFirstTag));
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(html);
 }
 /** @return {HashMap<?string, Integer>} */
 static m_buildDispatchMap__arrayOf_java_lang_String__arrayOf_java_lang_Integer(/** Array<?string> */ keys, /** Array<Integer> */ values) {
  AbstractUiRenderer.$clinit();
  let result = /**@type {!HashMap<?string, Integer>}*/ (HashMap.$create__int(keys.length));
  for (let i = 0; i < keys.length; i++) {
   result.put(keys[i], values[i]);
  }
  return result;
 }
 /** @return {number} */
 static m_computeDispatchEvent__java_util_HashMap__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(/** HashMap<?string, Integer> */ table, /** Object */ root, /** Object */ event) {
  AbstractUiRenderer.$clinit();
  let uiId = $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(root, AbstractUiRenderer.f_RENDERED_ATTRIBUTE__org_gwtproject_uibinder_client_impl_AbstractUiRenderer);
  let eventTarget = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (!$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(eventTarget)) {
   return AbstractUiRenderer.f_NO_HANDLER_FOUND__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_;
  }
  let cursor = $Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(eventTarget);
  while (!$Equality.$same(cursor, null) && !$Equality.$same(cursor, root) && cursor.nodeType != Node.DOCUMENT_NODE) {
   let fieldName = AbstractUiRenderer.m_getFieldName__java_lang_String__org_gwtproject_dom_client_Element(uiId, cursor);
   if ($Equality.$same(fieldName, null)) {
    cursor = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(cursor);
    continue;
   }
   let key = j_l_String.m_valueOf__java_lang_Object(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event)) + j_l_String.m_valueOf__java_lang_Object(AbstractUiRenderer.f_UI_ID_SEPARATOR__org_gwtproject_uibinder_client_impl_AbstractUiRenderer) + j_l_String.m_valueOf__java_lang_Object(fieldName);
   if (table.containsKey(key)) {
    return /**@type {Integer}*/ ($Casts.$to(table.get(key), Integer)).m_intValue__();
   }
   cursor = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(cursor);
  }
  if ($Equality.$same(cursor, root)) {
   let key_1 = j_l_String.m_valueOf__java_lang_Object(NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(event)) + j_l_String.m_valueOf__java_lang_Object(AbstractUiRenderer.f_UI_ID_SEPARATOR__org_gwtproject_uibinder_client_impl_AbstractUiRenderer) + j_l_String.m_valueOf__java_lang_Object(AbstractUiRenderer.f_ROOT_FAKE_NAME__org_gwtproject_uibinder_client_impl_AbstractUiRenderer);
   if (table.containsKey(key_1)) {
    return /**@type {Integer}*/ ($Casts.$to(table.get(key_1), Integer)).m_intValue__();
   }
  }
  return AbstractUiRenderer.f_NO_HANDLER_FOUND__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_;
 }
 /** @return {Object} */
 static m_findRootElementOrNull__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ parent, /** ?string */ attribute) {
  AbstractUiRenderer.$clinit();
  if ($Equality.$same(parent, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("parent argument is null"));
  }
  let /** Object */ rendered;
  if ($Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(parent, attribute)) {
   return parent;
  } else if (!$Equality.$same((rendered = $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(parent)), null) && $Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(rendered, attribute)) {
   return rendered;
  } else {
   return null;
  }
 }
 /** @return {?string} */
 static m_getFieldName__java_lang_String__org_gwtproject_dom_client_Element(/** ?string */ uiId, /** Object */ element) {
  let id = element.id;
  if ($Equality.$same(id, null)) {
   return null;
  }
  let split = j_l_String.m_indexOf__java_lang_String__java_lang_String(id, AbstractUiRenderer.f_UI_ID_SEPARATOR__org_gwtproject_uibinder_client_impl_AbstractUiRenderer);
  return split != -1 && j_l_String.m_length__java_lang_String(uiId) == split && j_l_String.m_startsWith__java_lang_String__java_lang_String(id, uiId) ? j_l_String.m_substring__java_lang_String__int(id, split + 1) : null;
 }
 /** @return {boolean} */
 static m_isAttachedToDom__org_gwtproject_dom_client_Element(/** Object */ rendered) {
  let body = Document_$Overlay.m_get__().body;
  while (!$Equality.$same(rendered, null) && Node_$Overlay.m_hasParentElement__$devirt__org_gwtproject_dom_client_Node(rendered) && !$Objects.m_equals__java_lang_Object__java_lang_Object(body, rendered)) {
   rendered = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(rendered);
  }
  return $Objects.m_equals__java_lang_Object__java_lang_Object(body, rendered);
 }
 /** @return {boolean} */
 static m_isParentOrRenderer__org_gwtproject_dom_client_Element__java_lang_String(/** Object */ parent, /** ?string */ attribute) {
  AbstractUiRenderer.$clinit();
  if ($Equality.$same(parent, null)) {
   return false;
  }
  let root = AbstractUiRenderer.m_findRootElementOrNull__org_gwtproject_dom_client_Element__java_lang_String(parent, attribute);
  return !$Equality.$same(root, null) && AbstractUiRenderer.m_isAttachedToDom__org_gwtproject_dom_client_Element(root) && AbstractUiRenderer.m_isRenderedElementSingleChild__org_gwtproject_dom_client_Element(root);
 }
 /** @return {boolean} */
 static m_isRenderedElementSingleChild__org_gwtproject_dom_client_Element(/** Object */ rendered) {
  return Node_$Overlay.m_getChildCount__$devirt__org_gwtproject_dom_client_Node(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(rendered)) == 1;
 }
 /** @override @return {boolean} */
 m_isParentOrRenderer__org_gwtproject_dom_client_Element(/** Object */ parent) {
  return AbstractUiRenderer.m_isParentOrRenderer__org_gwtproject_dom_client_Element__java_lang_String(parent, AbstractUiRenderer.f_RENDERED_ATTRIBUTE__org_gwtproject_uibinder_client_impl_AbstractUiRenderer);
 }
 
 static $clinit() {
  AbstractUiRenderer.$clinit = () =>{};
  AbstractUiRenderer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractUiRenderer;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(AbstractUiRenderer, 'org.gwtproject.uibinder.client.impl.AbstractUiRenderer');

UiRenderer.$markImplementor(AbstractUiRenderer);

/**@const {?string}*/
AbstractUiRenderer.f_RENDERED_ATTRIBUTE__org_gwtproject_uibinder_client_impl_AbstractUiRenderer = "gwtuirendered";
/**@const {?string}*/
AbstractUiRenderer.f_ROOT_FAKE_NAME__org_gwtproject_uibinder_client_impl_AbstractUiRenderer = "^";
/**@const {?string}*/
AbstractUiRenderer.f_UI_ID_SEPARATOR__org_gwtproject_uibinder_client_impl_AbstractUiRenderer = ":";
/**@const {number}*/
AbstractUiRenderer.f_NO_HANDLER_FOUND__org_gwtproject_uibinder_client_impl_AbstractUiRenderer_ = -1;

exports = AbstractUiRenderer; 
//# sourceMappingURL=AbstractUiRenderer.js.map