goog.module('org.gwtproject.user.client.ui.TreeItem.TreeItemImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let TreeItem = goog.forwardDeclare('org.gwtproject.user.client.ui.TreeItem$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');

class TreeItemImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!TreeItemImpl}
  * @public
  */
 static $create__() {
  TreeItemImpl.$clinit();
  let $instance = new TreeItemImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_TreeItem_TreeItemImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TreeItem_TreeItemImpl__() {
  this.$ctor__java_lang_Object__();
  this.m_initializeClonableElements___$pp_org_gwtproject_user_client_ui();
 }
 /**
  * @param {TreeItem} item
  * @public
  */
 m_convertToFullNode__org_gwtproject_user_client_ui_TreeItem_$pp_org_gwtproject_user_client_ui(item) {
  if ($Equality.$same(item.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_, null)) {
   let itemTable = DOM.m_clone__org_gwtproject_dom_client_Element__boolean(TreeItem.f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_, true);
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(item.m_getElement__(), itemTable);
   let tr = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(DOM.m_getFirstChild__org_gwtproject_dom_client_Element(itemTable));
   let tdImg = DOM.m_getFirstChild__org_gwtproject_dom_client_Element(tr);
   let tdContent = DOM.m_getNextSibling__org_gwtproject_dom_client_Element(tdImg);
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(item.m_getElement__().style, "padding", "0px");
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tdContent, item.f_contentElem__org_gwtproject_user_client_ui_TreeItem_);
   item.f_imageHolder__org_gwtproject_user_client_ui_TreeItem_ = tdImg;
  }
 }
 /**
  * @public
  */
 m_initializeClonableElements___$pp_org_gwtproject_user_client_ui() {
  TreeItem.f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_ = DOM.m_createTable__();
  let contentElem = DOM.m_createDiv__();
  let tbody = DOM.m_createTBody__(), tr = DOM.m_createTR__();
  let tdImg = DOM.m_createTD__(), tdContent = DOM.m_createTD__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(TreeItem.f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_, tbody);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tbody, tr);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, tdImg);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, tdContent);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(tdImg.style, "verticalAlign", "middle");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(tdContent.style, "verticalAlign", "middle");
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tdContent, contentElem);
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(contentElem.style, "display", "inline");
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(contentElem, "gwt-TreeItem");
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(TreeItem.f_BASE_INTERNAL_ELEM__org_gwtproject_user_client_ui_TreeItem_.style, "whiteSpace", "nowrap");
  TreeItem.f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_ = DOM.m_createDiv__();
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(TreeItem.f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_.style, "padding", "3px");
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(TreeItem.f_BASE_BARE_ELEM__org_gwtproject_user_client_ui_TreeItem_, contentElem);
  Roles.m_getTreeitemRole__().m_set__org_gwtproject_dom_client_Element(contentElem);
 }
 /**
  * @public
  */
 static $clinit() {
  TreeItemImpl.$clinit = () =>{};
  TreeItemImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TreeItemImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  TreeItem = goog.module.get('org.gwtproject.user.client.ui.TreeItem$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
 }
 
}
$Util.$setClassMetadata(TreeItemImpl, 'org.gwtproject.user.client.ui.TreeItem$TreeItemImpl');

exports = TreeItemImpl; 
//# sourceMappingURL=TreeItem$TreeItemImpl.js.map