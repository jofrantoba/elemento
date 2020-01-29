goog.module('org.gwtproject.uibinder.client.UiBinderUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.client.Style.Display$impl');
let TempAttachment = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinderUtil.TempAttachment$impl');

class UiBinderUtil extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {TempAttachment}
  * @public
  */
 static m_attachToDom__org_gwtproject_dom_client_Element(element) {
  UiBinderUtil.$clinit();
  UiBinderUtil.m_ensureHiddenDiv__();
  let origParent = $Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(element);
  let origSibling = Element_$Overlay.m_getNextSiblingElement__$devirt__org_gwtproject_dom_client_Element(element);
  UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_.appendChild(element);
  return TempAttachment.$create__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(origParent, origSibling, element);
 }
 /**
  * @param {?string} html
  * @return {Object}
  * @public
  */
 static m_fromHtml__java_lang_String(html) {
  UiBinderUtil.$clinit();
  UiBinderUtil.m_ensureHiddenDiv__();
  Element_$Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_, html);
  let newbie = Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_);
  UiBinderUtil.m_orphan__org_gwtproject_dom_client_Node(newbie);
  return newbie;
 }
 /**
  * @public
  */
 static m_ensureHiddenDiv__() {
  if ($Equality.$same(UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_, null)) {
   UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   Style_$Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_.style, Display.f_NONE__org_gwtproject_dom_client_Style_Display);
   Document_$Overlay.m_get__().body.appendChild(UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_);
  }
 }
 /**
  * @param {Object} node
  * @public
  */
 static m_orphan__org_gwtproject_dom_client_Node(node) {
  UiBinderUtil.$clinit();
  node.parentNode.removeChild(node);
 }
 /**
  * @return {!UiBinderUtil}
  * @public
  */
 static $create__() {
  let $instance = new UiBinderUtil();
  $instance.$ctor__org_gwtproject_uibinder_client_UiBinderUtil__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_uibinder_client_UiBinderUtil__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  UiBinderUtil.$clinit = () =>{};
  UiBinderUtil.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof UiBinderUtil;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.client.Style.Display$impl');
  TempAttachment = goog.module.get('org.gwtproject.uibinder.client.UiBinderUtil.TempAttachment$impl');
 }
 
}
$Util.$setClassMetadata(UiBinderUtil, 'org.gwtproject.uibinder.client.UiBinderUtil');

/** @public {Object} */
UiBinderUtil.f_hiddenDiv__org_gwtproject_uibinder_client_UiBinderUtil_;

exports = UiBinderUtil; 
//# sourceMappingURL=UiBinderUtil.js.map