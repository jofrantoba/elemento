goog.module('org.gwtproject.user.client.ui.RadioButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CheckBox = goog.require('org.gwtproject.user.client.ui.CheckBox$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.EventTarget.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let DirectionalTextHelper = goog.forwardDeclare('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RadioButton extends CheckBox {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?boolean} */
  this.f_oldValue__org_gwtproject_user_client_ui_RadioButton_;
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String)'.
  * @param {?string} name
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String(name) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String)'.
  * @param {?string} name
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name) {
  this.$ctor__org_gwtproject_user_client_ui_CheckBox__org_gwtproject_dom_client_Element(DOM.m_createInputRadio__java_lang_String(name));
  this.m_setStyleName__java_lang_String("gwt-RadioButton");
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event);
  this.m_sinkEvents__int(Event.f_ONMOUSEUP__org_gwtproject_user_client_Event);
  this.m_sinkEvents__int(Event.f_ONBLUR__org_gwtproject_user_client_Event);
  this.m_sinkEvents__int(Event.f_ONKEYDOWN__org_gwtproject_user_client_Event);
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, SafeHtml)'.
  * @param {?string} name
  * @param {SafeHtml} label
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(name, label) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(name, label);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, SafeHtml)'.
  * @param {?string} name
  * @param {SafeHtml} label
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(name, label) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__boolean(name, label.m_asString__(), true);
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, SafeHtml, Direction)'.
  * @param {?string} name
  * @param {SafeHtml} label
  * @param {Direction} dir
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(name, label, dir) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(name, label, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, SafeHtml, Direction)'.
  * @param {?string} name
  * @param {SafeHtml} label
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(name, label, dir) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  this.m_setHTML__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(label, dir);
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, SafeHtml, DirectionEstimator)'.
  * @param {?string} name
  * @param {SafeHtml} label
  * @param {DirectionEstimator} directionEstimator
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(name, label, directionEstimator) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(name, label, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, SafeHtml, DirectionEstimator)'.
  * @param {?string} name
  * @param {SafeHtml} label
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_shared_DirectionEstimator(name, label, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setHTML__java_lang_String(label.m_asString__());
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, String)'.
  * @param {?string} name
  * @param {?string} label
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__java_lang_String(name, label) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String(name, label);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, String)'.
  * @param {?string} name
  * @param {?string} label
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String(name, label) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  this.m_setText__java_lang_String(label);
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, String, Direction)'.
  * @param {?string} name
  * @param {?string} label
  * @param {Direction} dir
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(name, label, dir) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(name, label, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, String, Direction)'.
  * @param {?string} name
  * @param {?string} label
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(name, label, dir) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  this.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(label, dir);
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, String, DirectionEstimator)'.
  * @param {?string} name
  * @param {?string} label
  * @param {DirectionEstimator} directionEstimator
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(name, label, directionEstimator) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(name, label, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, String, DirectionEstimator)'.
  * @param {?string} name
  * @param {?string} label
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(name, label, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setText__java_lang_String(label);
 }
 /**
  * Factory method corresponding to constructor 'RadioButton(String, String, boolean)'.
  * @param {?string} name
  * @param {?string} label
  * @param {boolean} asHTML
  * @return {!RadioButton}
  * @public
  */
 static $create__java_lang_String__java_lang_String__boolean(name, label, asHTML) {
  RadioButton.$clinit();
  let $instance = new RadioButton();
  $instance.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__boolean(name, label, asHTML);
  return $instance;
 }
 /**
  * Initialization from constructor 'RadioButton(String, String, boolean)'.
  * @param {?string} name
  * @param {?string} label
  * @param {boolean} asHTML
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String__java_lang_String__boolean(name, label, asHTML) {
  this.$ctor__org_gwtproject_user_client_ui_RadioButton__java_lang_String(name);
  if (asHTML) {
   this.m_setHTML__java_lang_String(label);
  } else {
   this.m_setText__java_lang_String(label);
  }
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  let /** Object */ target;
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONMOUSEUP__org_gwtproject_user_client_Event: 
   case Event.f_ONBLUR__org_gwtproject_user_client_Event: 
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
    this.f_oldValue__org_gwtproject_user_client_ui_RadioButton_ = this.m_getValue__();
    break;
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    target = $Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
    if (Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(target) && Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.f_labelElem__org_gwtproject_user_client_ui_CheckBox, Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(target))) {
     this.f_oldValue__org_gwtproject_user_client_ui_RadioButton_ = this.m_getValue__();
     return;
    }
    super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
    ValueChangeEvent.m_fireIfNotEqual__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(this, this.f_oldValue__org_gwtproject_user_client_ui_RadioButton_, this.m_getValue__());
    return;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /**
  * @override
  * @param {?string} name
  * @public
  */
 m_setName__java_lang_String(name) {
  this.m_replaceInputElement__org_gwtproject_dom_client_Element(DOM.m_createInputRadio__java_lang_String(name));
 }
 /**
  * @override
  * @param {number} eventBitsToAdd
  * @public
  */
 m_sinkEvents__int(eventBitsToAdd) {
  if (this.m_isOrWasAttached__()) {
   Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox, eventBitsToAdd | Event.m_getEventsSunk__org_gwtproject_dom_client_Element(this.f_inputElem__org_gwtproject_user_client_ui_CheckBox));
   Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.f_labelElem__org_gwtproject_user_client_ui_CheckBox, eventBitsToAdd | Event.m_getEventsSunk__org_gwtproject_dom_client_Element(this.f_labelElem__org_gwtproject_user_client_ui_CheckBox));
  } else {
   super.m_sinkEvents__int(eventBitsToAdd);
  }
 }
 /**
  * @override
  * @public
  */
 m_ensureDomEventHandlers__() {}
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  super.m_setValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(arg0, Boolean)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {boolean} arg1
  * @public
  */
 m_setValue__java_lang_Object__boolean(arg0, arg1) {
  super.m_setValue__java_lang_Boolean__boolean(/**@type {?boolean} */ ($Casts.$to(arg0, Boolean)), arg1);
 }
 /**
  * @return {DirectionEstimator}
  * @public
  */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_RadioButton() {
  return (RadioButton.$clinit(), RadioButton.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_RadioButton);
 }
 /**
  * @public
  */
 static $clinit() {
  RadioButton.$clinit = () =>{};
  RadioButton.$loadModules();
  CheckBox.$clinit();
  RadioButton.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_RadioButton = DirectionalTextHelper.f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RadioButton;
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  DirectionalTextHelper = goog.module.get('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RadioButton, 'org.gwtproject.user.client.ui.RadioButton');

/** @private {DirectionEstimator} */
RadioButton.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_RadioButton;

exports = RadioButton; 
//# sourceMappingURL=RadioButton.js.map