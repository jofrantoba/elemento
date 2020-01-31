goog.module('org.gwtproject.touch.client.TouchScroller.$6$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativePreviewHandler = goog.require('org.gwtproject.user.client.Event.NativePreviewHandler$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');

/**
 * @implements {NativePreviewHandler}
  */
class $6 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TouchScroller}*/
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_6;
 }
 /** @return {!$6} */
 static $create__org_gwtproject_touch_client_TouchScroller(/** TouchScroller */ $outer_this) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_6__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_touch_client_TouchScroller_6__org_gwtproject_touch_client_TouchScroller(/** TouchScroller */ $outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_6 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ event) {
  if (Event.f_ONCLICK__org_gwtproject_user_client_Event == event.m_getTypeInt__()) {
   let clickPoint = Point.$create__double__double($Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()), $Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()));
   if (this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_6.m_isClickScrollTriggeringTouch__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(clickPoint) || this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_6.m_isClickTouchPositionDuringMomentum__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(clickPoint)) {
    event.m_cancel__();
    $Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
    $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
   }
  }
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Point = goog.module.get('org.gwtproject.touch.client.Point$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
 }
 
}
$Util.$setClassMetadata($6, 'org.gwtproject.touch.client.TouchScroller$6');

NativePreviewHandler.$markImplementor($6);

exports = $6; 
//# sourceMappingURL=TouchScroller$6.js.map