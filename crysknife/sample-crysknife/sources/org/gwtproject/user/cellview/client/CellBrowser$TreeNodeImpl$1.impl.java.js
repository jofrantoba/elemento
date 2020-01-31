goog.module('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ValueChangeHandler = goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let BrowserCellList = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.BrowserCellList$impl');
let TreeNodeImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.TreeNodeImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template C
 * @implements {ValueChangeHandler<List<C>>}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TreeNodeImpl<C>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_1;
  /**@type {BrowserCellList<C>}*/
  this.$c_display;
 }
 /** @template C @return {!$1<C>} */
 static $create__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList(/** TreeNodeImpl<C> */ $outer_this, /** BrowserCellList<C> */ $c_display) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_1__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList($outer_this, $c_display);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_1__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList(/** TreeNodeImpl<C> */ $outer_this, /** BrowserCellList<C> */ $c_display) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_1 = $outer_this;
  this.$c_display = $c_display;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onValueChange__org_gwtproject_event_logical_shared_ValueChangeEvent(/** ValueChangeEvent<List<C>> */ event) {
  let focusedKey = this.$c_display.f_focusedKey__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_;
  if (!$Equality.$same(focusedKey, null)) {
   let stillExists = false;
   let displayValues = /**@type {List<C>}*/ ($Casts.$to(event.m_getValue__(), List));
   for (let $iterator = displayValues.m_iterator__(); $iterator.m_hasNext__(); ) {
    let displayValue = $iterator.m_next__();
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(focusedKey, this.$c_display.m_getValueKey__java_lang_Object(displayValue))) {
     stillExists = true;
     break;
    }
   }
   if (!stillExists) {
    this.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl_1.f_$outer_this__org_gwtproject_user_cellview_client_CellBrowser_TreeNodeImpl.m_trimToLevel__int_$p_org_gwtproject_user_cellview_client_CellBrowser(this.$c_display.f_level__org_gwtproject_user_cellview_client_CellBrowser_BrowserCellList_);
   }
  }
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.cellview.client.CellBrowser$TreeNodeImpl$1');

ValueChangeHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CellBrowser$TreeNodeImpl$1.js.map