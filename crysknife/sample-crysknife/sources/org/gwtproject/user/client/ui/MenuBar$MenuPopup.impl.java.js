goog.module('org.gwtproject.user.client.ui.MenuBar.MenuPopup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DecoratedPopupPanel = goog.require('org.gwtproject.user.client.ui.DecoratedPopupPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.EventTarget.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let MenuBar = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuBar$impl');
let MenuItem = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItem$impl');
let AnimationType = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');

class MenuPopup extends DecoratedPopupPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {MenuBar} */
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup;
  /** @public {boolean} */
  this.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_ = false;
 }
 /**
  * @param {MenuBar} $outer_this
  * @return {!MenuPopup}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_MenuBar($outer_this) {
  MenuPopup.$clinit();
  let $instance = new MenuPopup();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuBar_MenuPopup__org_gwtproject_user_client_ui_MenuBar($outer_this);
  return $instance;
 }
 /**
  * @param {MenuBar} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MenuBar_MenuPopup__org_gwtproject_user_client_ui_MenuBar($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_DecoratedPopupPanel__boolean__boolean__java_lang_String(true, false, "menuPopup");
  this.$init___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup();
  this.m_setAnimationType__org_gwtproject_user_client_ui_PopupPanel_AnimationType(AnimationType.f_ONE_WAY_CORNER__org_gwtproject_user_client_ui_PopupPanel_AnimationType);
  this.m_setAnimationEnabled__boolean($outer_this.f_isAnimationEnabled__org_gwtproject_user_client_ui_MenuBar_);
  this.m_setStyleName__java_lang_String(j_l_String.m_valueOf__java_lang_Object(MenuBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_MenuBar_) + "Popup");
  let primaryStyleName = $outer_this.m_getStylePrimaryName__();
  if (!j_l_String.m_equals__java_lang_String__java_lang_Object(MenuBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_MenuBar_, primaryStyleName)) {
   this.m_addStyleName__java_lang_String(j_l_String.m_valueOf__java_lang_Object(primaryStyleName) + "Popup");
  }
  this.m_setPreviewingAllNativeEvents__boolean(true);
 }
 /**
  * @override
  * @param {NativePreviewEvent} event
  * @public
  */
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event) {
  if (!event.m_isCanceled__()) {
   let /** Object */ target, /** Object */ parentMenuElement;
   switch (event.m_getTypeInt__()) {
    case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
     target = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
     parentMenuElement = this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.m_getElement__();
     if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(parentMenuElement, Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(target))) {
      event.m_cancel__();
      return;
     }
     super.m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event);
     if (event.m_isCanceled__()) {
      this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.m_selectItem__org_gwtproject_user_client_ui_MenuItem(null);
     }
     return;
   }
  }
  super.m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event);
 }
 /**
  * @param {MenuItem} target
  * @public
  */
 m_positionBelow__org_gwtproject_user_client_ui_MenuItem(target) {
  let top = this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.m_getAbsoluteTop__() + this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.m_getOffsetHeight__();
  let left = this.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_ ? this.m_leftOf__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(target) : this.m_rightOf__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(target) - this.m_getOffsetWidth__();
  this.m_setPositionInClient__int__int_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(left, top);
 }
 /**
  * @param {MenuItem} target
  * @public
  */
 m_positionNextTo__org_gwtproject_user_client_ui_MenuItem(target) {
  let offsetTop = target.m_getSubMenu__().m_getAbsoluteTop__() - this.m_getAbsoluteTop__();
  let top = target.m_getAbsoluteTop__() - offsetTop;
  let leftIfTowardEast = this.m_rightOf__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup);
  let leftIfTowardWest = this.m_leftOf__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup) - this.m_getOffsetWidth__();
  let overflowIfTowardsEast = leftIfTowardEast + this.m_getOffsetWidth__() - this.m_getClientRight___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup();
  let overflowIfTowardsWest = this.m_getClientLeft___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup() - leftIfTowardWest;
  this.m_selectDirection__int__int_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(overflowIfTowardsEast, overflowIfTowardsWest);
  let left = this.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_ ? leftIfTowardEast : leftIfTowardWest;
  this.m_setPositionInClient__int__int_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(left, top);
 }
 /**
  * @param {number} left
  * @param {number} top
  * @public
  */
 m_setPositionInClient__int__int_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(left, top) {
  if (this.m_getOffsetWidth__() < Window.m_getClientWidth__()) {
   left = Math.min(left, this.m_getClientRight___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup() - this.m_getOffsetWidth__());
   left = Math.max(this.m_getClientLeft___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(), left);
  }
  this.m_setPopupPosition__int__int(left, top);
 }
 /**
  * @param {number} overflowIfTowardsEast
  * @param {number} overflowIfTowardsWest
  * @public
  */
 m_selectDirection__int__int_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(overflowIfTowardsEast, overflowIfTowardsWest) {
  if (overflowIfTowardsEast <= 0 && overflowIfTowardsWest <= 0) {
   if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_, null) && !$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_, null)) {
    this.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_ = this.f_$outer_this__org_gwtproject_user_client_ui_MenuBar_MenuPopup.f_parentMenu__org_gwtproject_user_client_ui_MenuBar_.f_popup__org_gwtproject_user_client_ui_MenuBar_.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_;
   }
  } else {
   this.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_ = (overflowIfTowardsEast < overflowIfTowardsWest);
  }
 }
 /**
  * @param {UIObject} object
  * @return {number}
  * @public
  */
 m_leftOf__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(object) {
  return object.m_getAbsoluteLeft__();
 }
 /**
  * @param {UIObject} object
  * @return {number}
  * @public
  */
 m_rightOf__org_gwtproject_user_client_ui_UIObject_$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup(object) {
  return object.m_getAbsoluteLeft__() + object.m_getOffsetWidth__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getClientLeft___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup() {
  return Window.m_getScrollLeft__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getClientRight___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup() {
  return this.m_getClientLeft___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup() + Window.m_getClientWidth__();
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
 $init___$p_org_gwtproject_user_client_ui_MenuBar_MenuPopup() {
  this.f_towardsEast__org_gwtproject_user_client_ui_MenuBar_MenuPopup_ = !LocaleInfo.m_getCurrentLocale__().m_isRTL__();
 }
 /**
  * @public
  */
 static $clinit() {
  MenuPopup.$clinit = () =>{};
  MenuPopup.$loadModules();
  DecoratedPopupPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MenuPopup;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  MenuBar = goog.module.get('org.gwtproject.user.client.ui.MenuBar$impl');
  AnimationType = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
 }
 
}
$Util.$setClassMetadata(MenuPopup, 'org.gwtproject.user.client.ui.MenuBar$MenuPopup');

exports = MenuPopup; 
//# sourceMappingURL=MenuBar$MenuPopup.js.map