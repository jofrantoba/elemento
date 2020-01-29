goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollHandler = goog.require('org.gwtproject.event.dom.client.ScrollHandler$impl');

let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let CustomScrollPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel$impl');
let VerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.VerticalScrollbar$impl');

/**
 * @implements {ScrollHandler}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CustomScrollPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2;
  /** @public {VerticalScrollbar} */
  this.$c_scrollbar;
 }
 /**
  * @param {CustomScrollPanel} $outer_this
  * @param {VerticalScrollbar} $c_scrollbar
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_VerticalScrollbar($outer_this, $c_scrollbar) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_2__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_VerticalScrollbar($outer_this, $c_scrollbar);
  return $instance;
 }
 /**
  * @param {CustomScrollPanel} $outer_this
  * @param {VerticalScrollbar} $c_scrollbar
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_2__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_VerticalScrollbar($outer_this, $c_scrollbar) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2 = $outer_this;
  this.$c_scrollbar = $c_scrollbar;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ScrollEvent} event
  * @public
  */
 m_onScroll__org_gwtproject_event_dom_client_ScrollEvent(event) {
  let curTime = Duration.m_currentTimeMillis__();
  if (curTime > this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2.f_ignoreScrollbarsUntil__org_gwtproject_user_client_ui_CustomScrollPanel_) {
   this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2.f_ignoreContentUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = curTime + CustomScrollPanel.f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_;
   let vPos = this.$c_scrollbar.m_getVerticalScrollPosition__();
   let v = this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2.m_getVerticalScrollPosition__();
   if (this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2.m_getVerticalScrollPosition__() != vPos) {
    this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_2.m_setVerticalScrollPosition__int(vPos);
   }
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  CustomScrollPanel = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.CustomScrollPanel$2');

ScrollHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=CustomScrollPanel$2.js.map