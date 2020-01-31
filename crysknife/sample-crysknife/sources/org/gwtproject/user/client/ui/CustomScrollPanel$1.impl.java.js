goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollHandler = goog.require('org.gwtproject.event.dom.client.ScrollHandler$impl');

let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let CustomScrollPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel$impl');
let HorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.HorizontalScrollbar$impl');

/**
 * @implements {ScrollHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CustomScrollPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_1;
  /**@type {HorizontalScrollbar}*/
  this.$c_scrollbar;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_HorizontalScrollbar(/** CustomScrollPanel */ $outer_this, /** HorizontalScrollbar */ $c_scrollbar) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_1__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_HorizontalScrollbar($outer_this, $c_scrollbar);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_1__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_HorizontalScrollbar(/** CustomScrollPanel */ $outer_this, /** HorizontalScrollbar */ $c_scrollbar) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_1 = $outer_this;
  this.$c_scrollbar = $c_scrollbar;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(/** ScrollEvent */ event) {
  let curTime = Duration.m_currentTimeMillis__();
  if (curTime > this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_1.f_ignoreScrollbarsUntil__org_gwtproject_user_client_ui_CustomScrollPanel_) {
   this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_1.f_ignoreContentUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = curTime + CustomScrollPanel.f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_;
   let hPos = this.$c_scrollbar.m_getHorizontalScrollPosition__();
   if (this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_1.m_getHorizontalScrollPosition__() != hPos) {
    this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_1.m_setHorizontalScrollPosition__int(hPos);
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
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  CustomScrollPanel = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.CustomScrollPanel$1');

ScrollHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CustomScrollPanel$1.js.map