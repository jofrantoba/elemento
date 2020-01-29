goog.module('org.gwtproject.user.client.ui.ValueListBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const Focusable = goog.require('org.gwtproject.user.client.ui.Focusable$impl');
const HasConstrainedValue = goog.require('org.gwtproject.user.client.ui.HasConstrainedValue$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Renderer = goog.forwardDeclare('org.gwtproject.text.shared.Renderer$impl');
let ToStringRenderer = goog.forwardDeclare('org.gwtproject.text.shared.ToStringRenderer$impl');
let ListBox = goog.forwardDeclare('org.gwtproject.user.client.ui.ListBox$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueListBox.$1$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SimpleKeyProvider = goog.forwardDeclare('org.gwtproject.view.client.SimpleKeyProvider$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {Focusable}
 * @implements {HasConstrainedValue<T>}
 * @implements {HasEnabled}
 * @implements {IsEditor<TakesValueEditor<T>>}
  */
class ValueListBox extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {List<T>} */
  this.f_values__org_gwtproject_user_client_ui_ValueListBox_;
  /** @public {Map<*, Integer>} */
  this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_;
  /** @public {Renderer<?>} */
  this.f_renderer__org_gwtproject_user_client_ui_ValueListBox_;
  /** @public {ProvidesKey<T>} */
  this.f_keyProvider__org_gwtproject_user_client_ui_ValueListBox_;
  /** @public {TakesValueEditor<T>} */
  this.f_editor__org_gwtproject_user_client_ui_ValueListBox_;
  /** @public {T} */
  this.f_value__org_gwtproject_user_client_ui_ValueListBox_;
 }
 /**
  * Factory method corresponding to constructor 'ValueListBox()'.
  * @template T
  * @return {!ValueListBox<T>}
  * @public
  */
 static $create__() {
  ValueListBox.$clinit();
  let $instance = new ValueListBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueListBox__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ValueListBox()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValueListBox__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueListBox__org_gwtproject_text_shared_Renderer(ToStringRenderer.m_instance__());
 }
 /**
  * Factory method corresponding to constructor 'ValueListBox(Renderer)'.
  * @template T
  * @param {Renderer<?>} renderer
  * @return {!ValueListBox<T>}
  * @public
  */
 static $create__org_gwtproject_text_shared_Renderer(renderer) {
  ValueListBox.$clinit();
  let $instance = new ValueListBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueListBox__org_gwtproject_text_shared_Renderer(renderer);
  return $instance;
 }
 /**
  * Initialization from constructor 'ValueListBox(Renderer)'.
  * @param {Renderer<?>} renderer
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValueListBox__org_gwtproject_text_shared_Renderer(renderer) {
  this.$ctor__org_gwtproject_user_client_ui_ValueListBox__org_gwtproject_text_shared_Renderer__org_gwtproject_view_client_ProvidesKey(renderer, /**@type {!SimpleKeyProvider<T>} */ (SimpleKeyProvider.$create__()));
 }
 /**
  * Factory method corresponding to constructor 'ValueListBox(Renderer, ProvidesKey)'.
  * @template T
  * @param {Renderer<?>} renderer
  * @param {ProvidesKey<T>} keyProvider
  * @return {!ValueListBox<T>}
  * @public
  */
 static $create__org_gwtproject_text_shared_Renderer__org_gwtproject_view_client_ProvidesKey(renderer, keyProvider) {
  ValueListBox.$clinit();
  let $instance = new ValueListBox();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueListBox__org_gwtproject_text_shared_Renderer__org_gwtproject_view_client_ProvidesKey(renderer, keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'ValueListBox(Renderer, ProvidesKey)'.
  * @param {Renderer<?>} renderer
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ValueListBox__org_gwtproject_text_shared_Renderer__org_gwtproject_view_client_ProvidesKey(renderer, keyProvider) {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_ValueListBox();
  this.f_keyProvider__org_gwtproject_user_client_ui_ValueListBox_ = keyProvider;
  this.f_renderer__org_gwtproject_user_client_ui_ValueListBox_ = renderer;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(ListBox.$create__());
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_addChangeHandler__org_gwtproject_event_dom_client_ChangeHandler(/**@type {!$1<T>} */ ($1.$create__org_gwtproject_user_client_ui_ValueListBox(this)));
 }
 /**
  * @override
  * @param {ValueChangeHandler<T>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /**
  * @override
  * @return {TakesValueEditor<T>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_ValueListBox_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_ValueListBox_ = /**@type {TakesValueEditor<T>} */ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_ValueListBox_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTabIndex__() {
  return this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_getTabIndex__();
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_user_client_ui_ValueListBox_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_isEnabled__();
 }
 /**
  * @override
  * @param {Collection<T>} newValues
  * @public
  */
 m_setAcceptableValues__java_util_Collection(newValues) {
  this.f_values__org_gwtproject_user_client_ui_ValueListBox_.clear();
  this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_.clear();
  let listBox = this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox();
  listBox.m_clear__();
  for (let $iterator = newValues.m_iterator__(); $iterator.m_hasNext__(); ) {
   let nextNewValue = $iterator.m_next__();
   this.m_addValue__java_lang_Object_$p_org_gwtproject_user_client_ui_ValueListBox(nextNewValue);
  }
  this.m_updateListBox___$p_org_gwtproject_user_client_ui_ValueListBox();
 }
 /**
  * @override
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_setAccessKey__char(key);
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_setEnabled__boolean(enabled);
 }
 /**
  * @override
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_setFocus__boolean(focused);
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setTabIndex__int(index) {
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_setTabIndex__int(index);
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  this.m_setValue__java_lang_Object__boolean(value, false);
 }
 /**
  * @override
  * @param {T} value
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_lang_Object__boolean(value, fireEvents) {
  if ($Equality.$same(value, this.f_value__org_gwtproject_user_client_ui_ValueListBox_) || (!$Equality.$same(this.f_value__org_gwtproject_user_client_ui_ValueListBox_, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_value__org_gwtproject_user_client_ui_ValueListBox_, value))) {
   return;
  }
  let before = this.f_value__org_gwtproject_user_client_ui_ValueListBox_;
  this.f_value__org_gwtproject_user_client_ui_ValueListBox_ = value;
  this.m_updateListBox___$p_org_gwtproject_user_client_ui_ValueListBox();
  if (fireEvents) {
   ValueChangeEvent.m_fireIfNotEqual__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(this, before, value);
  }
 }
 /**
  * @param {T} value
  * @public
  */
 m_addValue__java_lang_Object_$p_org_gwtproject_user_client_ui_ValueListBox(value) {
  let key = this.f_keyProvider__org_gwtproject_user_client_ui_ValueListBox_.m_getKey__java_lang_Object(value);
  if (this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_.containsKey(key)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Duplicate value: " + j_l_String.m_valueOf__java_lang_Object(value)));
  }
  this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_.put(key, Integer.m_valueOf__int(this.f_values__org_gwtproject_user_client_ui_ValueListBox_.size()));
  this.f_values__org_gwtproject_user_client_ui_ValueListBox_.add(value);
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_addItem__java_lang_String(this.f_renderer__org_gwtproject_user_client_ui_ValueListBox_.m_render__java_lang_Object(value));
  $Asserts.$assert(this.f_values__org_gwtproject_user_client_ui_ValueListBox_.size() == this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_getItemCount__());
 }
 /**
  * @return {ListBox}
  * @public
  */
 m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox() {
  return /**@type {ListBox} */ ($Casts.$to(this.m_getWidget__(), ListBox));
 }
 /**
  * @public
  */
 m_updateListBox___$p_org_gwtproject_user_client_ui_ValueListBox() {
  let key = this.f_keyProvider__org_gwtproject_user_client_ui_ValueListBox_.m_getKey__java_lang_Object(this.f_value__org_gwtproject_user_client_ui_ValueListBox_);
  let index = /**@type {Integer} */ ($Casts.$to(this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_.get(key), Integer));
  if ($Equality.$same(index, null)) {
   this.m_addValue__java_lang_Object_$p_org_gwtproject_user_client_ui_ValueListBox(this.f_value__org_gwtproject_user_client_ui_ValueListBox_);
  }
  index = /**@type {Integer} */ ($Casts.$to(this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_.get(key), Integer));
  this.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_setSelectedIndex__int(index.m_intValue__());
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_ValueListBox() {
  this.f_values__org_gwtproject_user_client_ui_ValueListBox_ = /**@type {!ArrayList<T>} */ (ArrayList.$create__());
  this.f_valueKeyToIndex__org_gwtproject_user_client_ui_ValueListBox_ = /**@type {!HashMap<*, Integer>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  ValueListBox.$clinit = () =>{};
  ValueListBox.$loadModules();
  Composite.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValueListBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  ToStringRenderer = goog.module.get('org.gwtproject.text.shared.ToStringRenderer$impl');
  ListBox = goog.module.get('org.gwtproject.user.client.ui.ListBox$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.ValueListBox.$1$impl');
  SimpleKeyProvider = goog.module.get('org.gwtproject.view.client.SimpleKeyProvider$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ValueListBox, 'org.gwtproject.user.client.ui.ValueListBox');

Focusable.$markImplementor(ValueListBox);
HasConstrainedValue.$markImplementor(ValueListBox);
HasEnabled.$markImplementor(ValueListBox);
IsEditor.$markImplementor(ValueListBox);

exports = ValueListBox; 
//# sourceMappingURL=ValueListBox.js.map