goog.module('org.gwtproject.user.client.ui.CustomButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ButtonBase = goog.require('org.gwtproject.user.client.ui.ButtonBase$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let PressedValue = goog.forwardDeclare('org.gwtproject.aria.client.PressedValue$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton.$2$impl');
let Face = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton.Face$impl');
let FocusPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FocusPanel$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
  */
class CustomButton extends ButtonBase {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_curFaceElement__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_curFace__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_up__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_down__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_downHovering__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_upHovering__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_upDisabled__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {Face} */
  this.f_downDisabled__org_gwtproject_user_client_ui_CustomButton_;
  /** @public {boolean} */
  this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_ = false;
  /** @public {boolean} */
  this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_ = false;
  /** @public {boolean} */
  this.f_allowClick__org_gwtproject_user_client_ui_CustomButton_ = false;
 }
 /**
  * Initialization from constructor 'CustomButton(Image)'.
  * @param {Image} upImage
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image(upImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__();
  this.m_getUpFace__().m_setImage__org_gwtproject_user_client_ui_Image(upImage);
 }
 /**
  * Initialization from constructor 'CustomButton(Image, ClickHandler)'.
  * @param {Image} upImage
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image(upImage);
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
 }
 /**
  * Initialization from constructor 'CustomButton(Image, Image)'.
  * @param {Image} upImage
  * @param {Image} downImage
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image(upImage);
  this.m_getDownFace__().m_setImage__org_gwtproject_user_client_ui_Image(downImage);
 }
 /**
  * Initialization from constructor 'CustomButton(Image, Image, ClickHandler)'.
  * @param {Image} upImage
  * @param {Image} downImage
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  this.m_getDownFace__().m_setImage__org_gwtproject_user_client_ui_Image(downImage);
 }
 /**
  * Initialization from constructor 'CustomButton(String)'.
  * @param {?string} upText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String(upText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__();
  this.m_getUpFace__().m_setText__java_lang_String(upText);
 }
 /**
  * Initialization from constructor 'CustomButton(String, ClickHandler)'.
  * @param {?string} upText
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String(upText);
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
 }
 /**
  * Initialization from constructor 'CustomButton(String, String)'.
  * @param {?string} upText
  * @param {?string} downText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String(upText, downText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String(upText);
  this.m_getDownFace__().m_setText__java_lang_String(downText);
 }
 /**
  * Initialization from constructor 'CustomButton(String, String, ClickHandler)'.
  * @param {?string} upText
  * @param {?string} downText
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String(upText, downText);
  this.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler);
 }
 /**
  * Initialization from constructor 'CustomButton()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton__() {
  this.$ctor__org_gwtproject_user_client_ui_ButtonBase__org_gwtproject_dom_client_Element(FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_createFocusable__());
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_MOUSEEVENTS__org_gwtproject_user_client_Event | Event.f_FOCUSEVENTS__org_gwtproject_user_client_Event | Event.f_KEYEVENTS__org_gwtproject_user_client_Event);
  this.m_setUpFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(null, "up", CustomButton.f_UP__org_gwtproject_user_client_ui_CustomButton_));
  this.m_setStyleName__java_lang_String(CustomButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_CustomButton_);
  Roles.m_getButtonRole__().m_set__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @return {Face}
  * @public
  */
 m_getDownDisabledFace__() {
  if ($Equality.$same(this.f_downDisabled__org_gwtproject_user_client_ui_CustomButton_, null)) {
   this.m_setDownDisabledFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(this.m_getDownFace__(), "down-disabled", CustomButton.f_DOWN_DISABLED__org_gwtproject_user_client_ui_CustomButton_));
  }
  return this.f_downDisabled__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @return {Face}
  * @public
  */
 m_getDownFace__() {
  if ($Equality.$same(this.f_down__org_gwtproject_user_client_ui_CustomButton_, null)) {
   this.m_setDownFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(this.m_getUpFace__(), "down", CustomButton.f_DOWN__org_gwtproject_user_client_ui_CustomButton_));
  }
  return this.f_down__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @return {Face}
  * @public
  */
 m_getDownHoveringFace__() {
  if ($Equality.$same(this.f_downHovering__org_gwtproject_user_client_ui_CustomButton_, null)) {
   this.m_setDownHoveringFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(this.m_getDownFace__(), "down-hovering", CustomButton.f_DOWN_HOVERING__org_gwtproject_user_client_ui_CustomButton_));
  }
  return this.f_downHovering__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getHTML__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTabIndex__() {
  return FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_getTabIndex__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getText__();
 }
 /**
  * @return {Face}
  * @public
  */
 m_getUpDisabledFace__() {
  if ($Equality.$same(this.f_upDisabled__org_gwtproject_user_client_ui_CustomButton_, null)) {
   this.m_setUpDisabledFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(this.m_getUpFace__(), "up-disabled", CustomButton.f_UP_DISABLED__org_gwtproject_user_client_ui_CustomButton_));
  }
  return this.f_upDisabled__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @return {Face}
  * @public
  */
 m_getUpFace__() {
  return this.f_up__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @return {Face}
  * @public
  */
 m_getUpHoveringFace__() {
  if ($Equality.$same(this.f_upHovering__org_gwtproject_user_client_ui_CustomButton_, null)) {
   this.m_setUpHoveringFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(this.m_getUpFace__(), "up-hovering", CustomButton.f_UP_HOVERING__org_gwtproject_user_client_ui_CustomButton_));
  }
  return this.f_upHovering__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  let /** Object */ to;
  if (this.m_isEnabled__() == false) {
   return;
  }
  let type = DOM.m_eventGetType__org_gwtproject_user_client_Event(event);
  switch (type) {
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    if (!this.f_allowClick__org_gwtproject_user_client_ui_CustomButton_) {
     $Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(event);
     return;
    }
    break;
   case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
    if ($Overlay.m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(event) == $Overlay.f_BUTTON_LEFT__org_gwtproject_dom_client_NativeEvent_$Overlay) {
     this.m_setFocus__boolean(true);
     this.m_onClickStart__();
     DOM.m_setCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
     this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_ = true;
     $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
    }
    break;
   case Event.f_ONMOUSEUP__org_gwtproject_user_client_Event: 
    if (this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_) {
     this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_ = false;
     DOM.m_releaseCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
     if (this.m_isHovering___$pp_org_gwtproject_user_client_ui() && $Overlay.m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(event) == $Overlay.f_BUTTON_LEFT__org_gwtproject_dom_client_NativeEvent_$Overlay) {
      this.m_onClick__();
     }
    }
    break;
   case Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event: 
    if (this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_) {
     $Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(event);
    }
    break;
   case Event.f_ONMOUSEOUT__org_gwtproject_user_client_Event: 
    to = DOM.m_eventGetToElement__org_gwtproject_user_client_Event(event);
    if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getElement__(), DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event)) && ($Equality.$same(to, null) || !Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getElement__(), to))) {
     if (this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_) {
      this.m_onClickCancel__();
     }
     this.m_setHovering__boolean_$pp_org_gwtproject_user_client_ui(false);
    }
    break;
   case Event.f_ONMOUSEOVER__org_gwtproject_user_client_Event: 
    if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getElement__(), DOM.m_eventGetTarget__org_gwtproject_user_client_Event(event))) {
     this.m_setHovering__boolean_$pp_org_gwtproject_user_client_ui(true);
     if (this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_) {
      this.m_onClickStart__();
     }
    }
    break;
   case Event.f_ONBLUR__org_gwtproject_user_client_Event: 
    if (this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_) {
     this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_ = false;
     this.m_onClickCancel__();
    }
    break;
   case Event.f_ONLOSECAPTURE__org_gwtproject_user_client_Event: 
    if (this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_) {
     this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_ = false;
     this.m_onClickCancel__();
    }
    break;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
  if ((DOM.m_eventGetType__org_gwtproject_user_client_Event(event) & Event.f_KEYEVENTS__org_gwtproject_user_client_Event) != 0) {
   let keyCode = $Primitives.$narrowIntToChar($Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event));
   switch (type) {
    case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
     if (keyCode == 32 /* ' ' */) {
      this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_ = true;
      this.m_onClickStart__();
     }
     break;
    case Event.f_ONKEYUP__org_gwtproject_user_client_Event: 
     if (this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_ && keyCode == 32 /* ' ' */) {
      this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_ = false;
      this.m_onClick__();
     }
     break;
    case Event.f_ONKEYPRESS__org_gwtproject_user_client_Event: 
     if (keyCode == 10 /* '\n' */ || keyCode == 13 /* '\r' */) {
      this.m_onClickStart__();
      this.m_onClick__();
     }
     break;
   }
  }
 }
 /**
  * @override
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {
  FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_setAccessKey__org_gwtproject_dom_client_Element__char(this.m_getElement__(), key);
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  if (this.m_isEnabled__() != enabled) {
   this.m_toggleDisabled___$p_org_gwtproject_user_client_ui_CustomButton();
   super.m_setEnabled__boolean(enabled);
   if (!enabled) {
    this.m_cleanupCaptureState___$p_org_gwtproject_user_client_ui_CustomButton();
    Roles.m_getButtonRole__().m_removeAriaPressedState__org_gwtproject_dom_client_Element(this.m_getElement__());
   } else {
    this.m_setAriaPressed__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui());
   }
  }
 }
 /**
  * @override
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  if (focused) {
   FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_focus__org_gwtproject_dom_client_Element(this.m_getElement__());
  } else {
   FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_blur__org_gwtproject_dom_client_Element(this.m_getElement__());
  }
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_setHTML__java_lang_String(html);
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setTabIndex__int(index) {
  FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_setTabIndex__org_gwtproject_dom_client_Element__int(this.m_getElement__(), index);
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_setText__java_lang_String(text);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDown__() {
  return (CustomButton.f_DOWN_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_ & this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getFaceID___$pp_org_gwtproject_user_client_ui()) > 0;
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  this.m_finishSetup___$pp_org_gwtproject_user_client_ui();
  super.m_onAttach__();
 }
 /**
  * @public
  */
 m_onClick__() {
  this.f_allowClick__org_gwtproject_user_client_ui_CustomButton_ = true;
  let evt = Document_$Overlay.m_createClickEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean(Document_$Overlay.m_get__(), 1, 0, 0, 0, 0, false, false, false, false);
  Element_$Overlay.m_dispatchEvent__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(this.m_getElement__(), evt);
  this.f_allowClick__org_gwtproject_user_client_ui_CustomButton_ = false;
 }
 /**
  * @public
  */
 m_onClickCancel__() {}
 /**
  * @public
  */
 m_onClickStart__() {}
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  super.m_onDetach__();
  this.m_cleanupCaptureState___$p_org_gwtproject_user_client_ui_CustomButton();
  this.m_setHovering__boolean_$pp_org_gwtproject_user_client_ui(false);
 }
 /**
  * @param {boolean} down
  * @public
  */
 m_setDown__boolean(down) {
  if (down != this.m_isDown__()) {
   this.m_toggleDown___$pp_org_gwtproject_user_client_ui();
  }
 }
 /**
  * @public
  */
 m_finishSetup___$pp_org_gwtproject_user_client_ui() {
  if ($Equality.$same(this.f_curFace__org_gwtproject_user_client_ui_CustomButton_, null)) {
   this.m_setCurrentFace__org_gwtproject_user_client_ui_CustomButton_Face_$pp_org_gwtproject_user_client_ui(this.m_getUpFace__());
  }
 }
 /**
  * @param {Event} nativeEvent
  * @public
  */
 m_fireClickListeners__org_gwtproject_user_client_Event_$pp_org_gwtproject_user_client_ui(nativeEvent) {
  this.m_fireEvent__org_gwtproject_event_shared_Event($1.$create__org_gwtproject_user_client_ui_CustomButton(this));
 }
 /**
  * @return {Face}
  * @public
  */
 m_getCurrentFace___$pp_org_gwtproject_user_client_ui() {
  this.m_finishSetup___$pp_org_gwtproject_user_client_ui();
  return this.f_curFace__org_gwtproject_user_client_ui_CustomButton_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isHovering___$pp_org_gwtproject_user_client_ui() {
  return (CustomButton.f_HOVERING_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_ & this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getFaceID___$pp_org_gwtproject_user_client_ui()) > 0;
 }
 /**
  * @param {Face} newFace
  * @public
  */
 m_setCurrentFace__org_gwtproject_user_client_ui_CustomButton_Face_$pp_org_gwtproject_user_client_ui(newFace) {
  if (!$Equality.$same(this.f_curFace__org_gwtproject_user_client_ui_CustomButton_, newFace)) {
   if (!$Equality.$same(this.f_curFace__org_gwtproject_user_client_ui_CustomButton_, null)) {
    this.m_removeStyleDependentName__java_lang_String(this.f_curFace__org_gwtproject_user_client_ui_CustomButton_.m_getName___$pp_org_gwtproject_user_client_ui());
   }
   this.f_curFace__org_gwtproject_user_client_ui_CustomButton_ = newFace;
   this.m_setCurrentFaceElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_CustomButton(newFace.m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face());
   this.m_addStyleDependentName__java_lang_String(this.f_curFace__org_gwtproject_user_client_ui_CustomButton_.m_getName___$pp_org_gwtproject_user_client_ui());
   if (this.m_isEnabled__()) {
    this.m_setAriaPressed__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(newFace);
   }
  }
 }
 /**
  * @param {boolean} hovering
  * @public
  */
 m_setHovering__boolean_$pp_org_gwtproject_user_client_ui(hovering) {
  if (hovering != this.m_isHovering___$pp_org_gwtproject_user_client_ui()) {
   this.m_toggleHover___$p_org_gwtproject_user_client_ui_CustomButton();
  }
 }
 /**
  * @public
  */
 m_toggleDown___$pp_org_gwtproject_user_client_ui() {
  let newFaceID = this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getFaceID___$pp_org_gwtproject_user_client_ui() ^ CustomButton.f_DOWN_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_;
  this.m_setCurrentFace__int_$p_org_gwtproject_user_client_ui_CustomButton(newFaceID);
 }
 /**
  * @public
  */
 m_cleanupCaptureState___$p_org_gwtproject_user_client_ui_CustomButton() {
  if (this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_ || this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_) {
   DOM.m_releaseCapture__org_gwtproject_dom_client_Element(this.m_getElement__());
   this.f_isCapturing__org_gwtproject_user_client_ui_CustomButton_ = false;
   this.f_isFocusing__org_gwtproject_user_client_ui_CustomButton_ = false;
   this.m_onClickCancel__();
  }
 }
 /**
  * @param {Face} delegateTo
  * @param {?string} name
  * @param {number} faceID
  * @return {Face}
  * @public
  */
 m_createFace__org_gwtproject_user_client_ui_CustomButton_Face__java_lang_String__int_$p_org_gwtproject_user_client_ui_CustomButton(delegateTo, name, faceID) {
  return $2.$create__org_gwtproject_user_client_ui_CustomButton__java_lang_String__int__org_gwtproject_user_client_ui_CustomButton_Face(this, name, faceID, delegateTo);
 }
 /**
  * @param {number} id
  * @return {Face}
  * @public
  */
 m_getFaceFromID__int_$p_org_gwtproject_user_client_ui_CustomButton(id) {
  switch (id) {
   case CustomButton.f_DOWN__org_gwtproject_user_client_ui_CustomButton_: 
    return this.m_getDownFace__();
   case CustomButton.f_UP__org_gwtproject_user_client_ui_CustomButton_: 
    return this.m_getUpFace__();
   case CustomButton.f_DOWN_HOVERING__org_gwtproject_user_client_ui_CustomButton_: 
    return this.m_getDownHoveringFace__();
   case CustomButton.f_UP_HOVERING__org_gwtproject_user_client_ui_CustomButton_: 
    return this.m_getUpHoveringFace__();
   case CustomButton.f_UP_DISABLED__org_gwtproject_user_client_ui_CustomButton_: 
    return this.m_getUpDisabledFace__();
   case CustomButton.f_DOWN_DISABLED__org_gwtproject_user_client_ui_CustomButton_: 
    return this.m_getDownDisabledFace__();
   default: 
    throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(id + " is not a known face id."));
  }
 }
 /**
  * @param {Face} newFace
  * @public
  */
 m_setAriaPressed__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(newFace) {
  let pressed = (newFace.m_getFaceID___$pp_org_gwtproject_user_client_ui() & CustomButton.f_DOWN_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_) == 1;
  Roles.m_getButtonRole__().m_setAriaPressedState__org_gwtproject_dom_client_Element__org_gwtproject_aria_client_PressedValue(this.m_getElement__(), PressedValue.m_of__boolean(pressed));
 }
 /**
  * @param {number} faceID
  * @public
  */
 m_setCurrentFace__int_$p_org_gwtproject_user_client_ui_CustomButton(faceID) {
  let newFace = this.m_getFaceFromID__int_$p_org_gwtproject_user_client_ui_CustomButton(faceID);
  this.m_setCurrentFace__org_gwtproject_user_client_ui_CustomButton_Face_$pp_org_gwtproject_user_client_ui(newFace);
 }
 /**
  * @param {Object} newFaceElement
  * @public
  */
 m_setCurrentFaceElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_CustomButton(newFaceElement) {
  if (!$Equality.$same(this.f_curFaceElement__org_gwtproject_user_client_ui_CustomButton_, newFaceElement)) {
   if (!$Equality.$same(this.f_curFaceElement__org_gwtproject_user_client_ui_CustomButton_, null)) {
    this.m_getElement__().removeChild(this.f_curFaceElement__org_gwtproject_user_client_ui_CustomButton_);
   }
   this.f_curFaceElement__org_gwtproject_user_client_ui_CustomButton_ = newFaceElement;
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getElement__(), this.f_curFaceElement__org_gwtproject_user_client_ui_CustomButton_);
  }
 }
 /**
  * @param {Face} downDisabled
  * @public
  */
 m_setDownDisabledFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(downDisabled) {
  this.f_downDisabled__org_gwtproject_user_client_ui_CustomButton_ = downDisabled;
 }
 /**
  * @param {Face} down
  * @public
  */
 m_setDownFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(down) {
  this.f_down__org_gwtproject_user_client_ui_CustomButton_ = down;
 }
 /**
  * @param {Face} downHovering
  * @public
  */
 m_setDownHoveringFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(downHovering) {
  this.f_downHovering__org_gwtproject_user_client_ui_CustomButton_ = downHovering;
 }
 /**
  * @param {Face} upDisabled
  * @public
  */
 m_setUpDisabledFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(upDisabled) {
  this.f_upDisabled__org_gwtproject_user_client_ui_CustomButton_ = upDisabled;
 }
 /**
  * @param {Face} up
  * @public
  */
 m_setUpFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(up) {
  this.f_up__org_gwtproject_user_client_ui_CustomButton_ = up;
 }
 /**
  * @param {Face} upHovering
  * @public
  */
 m_setUpHoveringFace__org_gwtproject_user_client_ui_CustomButton_Face_$p_org_gwtproject_user_client_ui_CustomButton(upHovering) {
  this.f_upHovering__org_gwtproject_user_client_ui_CustomButton_ = upHovering;
 }
 /**
  * @public
  */
 m_toggleDisabled___$p_org_gwtproject_user_client_ui_CustomButton() {
  let newFaceID = this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getFaceID___$pp_org_gwtproject_user_client_ui() ^ CustomButton.f_DISABLED_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_;
  newFaceID &= ~CustomButton.f_HOVERING_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_;
  this.m_setCurrentFace__int_$p_org_gwtproject_user_client_ui_CustomButton(newFaceID);
 }
 /**
  * @public
  */
 m_toggleHover___$p_org_gwtproject_user_client_ui_CustomButton() {
  let newFaceID = this.m_getCurrentFace___$pp_org_gwtproject_user_client_ui().m_getFaceID___$pp_org_gwtproject_user_client_ui() ^ CustomButton.f_HOVERING_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_;
  newFaceID &= ~CustomButton.f_DISABLED_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_;
  this.m_setCurrentFace__int_$p_org_gwtproject_user_client_ui_CustomButton(newFaceID);
 }
 /**
  * @public
  */
 static $clinit() {
  CustomButton.$clinit = () =>{};
  CustomButton.$loadModules();
  ButtonBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CustomButton;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PressedValue = goog.module.get('org.gwtproject.aria.client.PressedValue$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.CustomButton.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.CustomButton.$2$impl');
  FocusPanel = goog.module.get('org.gwtproject.user.client.ui.FocusPanel$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(CustomButton, 'org.gwtproject.user.client.ui.CustomButton');

/** @public {?string} @const */
CustomButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_CustomButton_ = "gwt-CustomButton";
/** @public {number} @const */
CustomButton.f_DOWN_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_ = 1;
/** @public {number} @const */
CustomButton.f_HOVERING_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_ = 2;
/** @public {number} @const */
CustomButton.f_DISABLED_ATTRIBUTE__org_gwtproject_user_client_ui_CustomButton_ = 4;
/** @public {number} @const */
CustomButton.f_UP__org_gwtproject_user_client_ui_CustomButton_ = 0;
/** @public {number} @const */
CustomButton.f_DOWN__org_gwtproject_user_client_ui_CustomButton_ = 1;
/** @public {number} @const */
CustomButton.f_UP_HOVERING__org_gwtproject_user_client_ui_CustomButton_ = 2;
/** @public {number} @const */
CustomButton.f_DOWN_HOVERING__org_gwtproject_user_client_ui_CustomButton_ = 3;
/** @public {number} @const */
CustomButton.f_UP_DISABLED__org_gwtproject_user_client_ui_CustomButton_ = 4;
/** @public {number} @const */
CustomButton.f_DOWN_DISABLED__org_gwtproject_user_client_ui_CustomButton_ = 5;

exports = CustomButton; 
//# sourceMappingURL=CustomButton.js.map