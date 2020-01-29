goog.module('org.jboss.elemento.sample.j2cl.TodoElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let MutationRecord_$Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let HandlerRegistrations = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistrations$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HtmlContentBuilder = goog.forwardDeclare('org.jboss.elemento.HtmlContentBuilder$impl');
let InputBuilder = goog.forwardDeclare('org.jboss.elemento.InputBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.ApplicationElement$impl');
let Todo_$Overlay = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.Todo.$Overlay$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.TodoRepository$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
 * @implements {Attachable}
  */
class TodoElement extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_item__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {ApplicationElement} */
  this.f_application__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {TodoRepository} */
  this.f_repository__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {HTMLElement} */
  this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {HTMLInputElement} */
  this.f_toggle__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {HTMLElement} */
  this.f_label__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {HTMLButtonElement} */
  this.f_destroy__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {HTMLInputElement} */
  this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {HandlerRegistration} */
  this.f_handlerRegistration__org_jboss_elemento_sample_j2cl_TodoElement_;
  /** @public {boolean} */
  this.f_escape__org_jboss_elemento_sample_j2cl_TodoElement_ = false;
 }
 /**
  * @param {ApplicationElement} application
  * @param {TodoRepository} repository
  * @param {Object} item
  * @return {!TodoElement}
  * @public
  */
 static $create__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository__org_jboss_elemento_sample_j2cl_Todo(application, repository, item) {
  TodoElement.$clinit();
  let $instance = new TodoElement();
  $instance.$ctor__org_jboss_elemento_sample_j2cl_TodoElement__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository__org_jboss_elemento_sample_j2cl_Todo(application, repository, item);
  return $instance;
 }
 /**
  * @param {ApplicationElement} application
  * @param {TodoRepository} repository
  * @param {Object} item
  * @public
  */
 $ctor__org_jboss_elemento_sample_j2cl_TodoElement__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository__org_jboss_elemento_sample_j2cl_Todo(application, repository, item) {
  this.$ctor__java_lang_Object__();
  this.f_application__org_jboss_elemento_sample_j2cl_TodoElement_ = application;
  this.f_repository__org_jboss_elemento_sample_j2cl_TodoElement_ = repository;
  this.f_item__org_jboss_elemento_sample_j2cl_TodoElement_ = item;
  this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_ = /**@type {HTMLLIElement} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLLIElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLLIElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLLIElement>} */ ($Casts.$to(Elements.m_li__().m_data__java_lang_String__java_lang_String("item", item.id), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLDivElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLDivElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLDivElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLDivElement>} */ ($Casts.$to(Elements.m_div__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init(["view"], j_l_String))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_toggle__org_jboss_elemento_sample_j2cl_TodoElement_ = /**@type {HTMLInputElement} */ ($Casts.$to(/**@type {InputBuilder<HTMLInputElement>} */ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init(["toggle"], j_l_String))), InputBuilder)).m_element__(), $Overlay))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_label__org_jboss_elemento_sample_j2cl_TodoElement_ = /**@type {HTMLLabelElement} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLLabelElement>} */ ($Casts.$to(Elements.m_label__().m_textContent__java_lang_String(item.text), HtmlContentBuilder)).m_element__(), HTMLLabelElement_$Overlay))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_destroy__org_jboss_elemento_sample_j2cl_TodoElement_ = /**@type {HTMLButtonElement} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLButtonElement>} */ ($Casts.$to(Elements.m_button__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init(["destroy"], j_l_String))), HtmlContentBuilder)).m_element__(), HTMLButtonElement_$Overlay))), HtmlContentBuilder))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_ = /**@type {HTMLInputElement} */ ($Casts.$to(/**@type {InputBuilder<HTMLInputElement>} */ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init(["edit"], j_l_String))), InputBuilder)).m_element__(), $Overlay))), HtmlContentBuilder)).m_element__(), HTMLLIElement_$Overlay));
  this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_.classList.toggle("completed", item.completed);
  this.f_toggle__org_jboss_elemento_sample_j2cl_TodoElement_.checked = item.completed;
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable(this, this);
 }
 /**
  * @override
  * @return {HTMLElement}
  * @public
  */
 m_element__() {
  return this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_;
 }
 /**
  * @override
  * @param {MutationRecord} mutationRecord
  * @public
  */
 m_attach__elemental2_dom_MutationRecord(mutationRecord) {
  this.f_handlerRegistration__org_jboss_elemento_sample_j2cl_TodoElement_ = HandlerRegistrations.m_compose__arrayOf_org_gwtproject_event_shared_HandlerRegistration(/**@type {!Array<HandlerRegistration>} */ ($Arrays.$init([EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_toggle__org_jboss_elemento_sample_j2cl_TodoElement_, EventType.f_change__org_jboss_elemento_EventType, (/** Event */ ev) =>{
   this.m_toggle___$p_org_jboss_elemento_sample_j2cl_TodoElement();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_label__org_jboss_elemento_sample_j2cl_TodoElement_, EventType.f_dblclick__org_jboss_elemento_EventType, (ev_1) =>{
   let ev_2 = /**@type {MouseEvent} */ ($Casts.$to(ev_1, MouseEvent_$Overlay));
   this.m_edit___$p_org_jboss_elemento_sample_j2cl_TodoElement();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_destroy__org_jboss_elemento_sample_j2cl_TodoElement_, EventType.f_click__org_jboss_elemento_EventType, (ev_3) =>{
   let ev_4 = /**@type {MouseEvent} */ ($Casts.$to(ev_3, MouseEvent_$Overlay));
   this.m_destroy___$p_org_jboss_elemento_sample_j2cl_TodoElement();
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_, EventType.f_keydown__org_jboss_elemento_EventType, (arg0) =>{
   let arg0_1 = /**@type {KeyboardEvent} */ ($Casts.$to(arg0, KeyboardEvent_$Overlay));
   this.m_keyDown__elemental2_dom_KeyboardEvent_$p_org_jboss_elemento_sample_j2cl_TodoElement(arg0_1);
  }), EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_, EventType.f_blur__org_jboss_elemento_EventType, (ev_5) =>{
   let ev_6 = /**@type {FocusEvent} */ ($Casts.$to(ev_5, FocusEvent_$Overlay));
   this.m_blur___$p_org_jboss_elemento_sample_j2cl_TodoElement();
  })], HandlerRegistration)));
 }
 /**
  * @override
  * @param {MutationRecord} mutationRecord
  * @public
  */
 m_detach__elemental2_dom_MutationRecord(mutationRecord) {
  if (!$Equality.$same(this.f_handlerRegistration__org_jboss_elemento_sample_j2cl_TodoElement_, null)) {
   this.f_handlerRegistration__org_jboss_elemento_sample_j2cl_TodoElement_.m_removeHandler__();
  }
 }
 /**
  * @public
  */
 m_toggle___$p_org_jboss_elemento_sample_j2cl_TodoElement() {
  this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_.classList.toggle("completed", this.f_toggle__org_jboss_elemento_sample_j2cl_TodoElement_.checked);
  this.f_repository__org_jboss_elemento_sample_j2cl_TodoElement_.m_complete__org_jboss_elemento_sample_j2cl_Todo__boolean(this.f_item__org_jboss_elemento_sample_j2cl_TodoElement_, this.f_toggle__org_jboss_elemento_sample_j2cl_TodoElement_.checked);
  this.f_application__org_jboss_elemento_sample_j2cl_TodoElement_.m_update___$pp_org_jboss_elemento_sample_j2cl();
 }
 /**
  * @public
  */
 m_edit___$p_org_jboss_elemento_sample_j2cl_TodoElement() {
  this.f_escape__org_jboss_elemento_sample_j2cl_TodoElement_ = false;
  this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_.classList.add("editing");
  this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_.value = this.f_label__org_jboss_elemento_sample_j2cl_TodoElement_.textContent;
  this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_.focus();
 }
 /**
  * @public
  */
 m_destroy___$p_org_jboss_elemento_sample_j2cl_TodoElement() {
  this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_.parentNode.removeChild(this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_);
  this.f_handlerRegistration__org_jboss_elemento_sample_j2cl_TodoElement_.m_removeHandler__();
  this.f_repository__org_jboss_elemento_sample_j2cl_TodoElement_.m_remove__org_jboss_elemento_sample_j2cl_Todo(this.f_item__org_jboss_elemento_sample_j2cl_TodoElement_);
  this.f_application__org_jboss_elemento_sample_j2cl_TodoElement_.m_update___$pp_org_jboss_elemento_sample_j2cl();
 }
 /**
  * @param {KeyboardEvent} event
  * @public
  */
 m_keyDown__elemental2_dom_KeyboardEvent_$p_org_jboss_elemento_sample_j2cl_TodoElement(event) {
  if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent(event)) {
   this.f_escape__org_jboss_elemento_sample_j2cl_TodoElement_ = true;
   this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_.classList.remove("editing");
  } else if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent(event)) {
   this.m_blur___$p_org_jboss_elemento_sample_j2cl_TodoElement();
  }
 }
 /**
  * @public
  */
 m_blur___$p_org_jboss_elemento_sample_j2cl_TodoElement() {
  let value = j_l_String.m_trim__java_lang_String(this.f_summary__org_jboss_elemento_sample_j2cl_TodoElement_.value);
  if (j_l_String.m_length__java_lang_String(value) == 0) {
   this.m_destroy___$p_org_jboss_elemento_sample_j2cl_TodoElement();
  } else {
   this.f_root__org_jboss_elemento_sample_j2cl_TodoElement_.classList.remove("editing");
   if (!this.f_escape__org_jboss_elemento_sample_j2cl_TodoElement_) {
    this.f_label__org_jboss_elemento_sample_j2cl_TodoElement_.textContent = value;
    this.f_repository__org_jboss_elemento_sample_j2cl_TodoElement_.m_rename__org_jboss_elemento_sample_j2cl_Todo__java_lang_String(this.f_item__org_jboss_elemento_sample_j2cl_TodoElement_, value);
   }
  }
 }
 /**
  * @public
  */
 static $clinit() {
  TodoElement.$clinit = () =>{};
  TodoElement.$loadModules();
  j_l_Object.$clinit();
  Attachable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TodoElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  HandlerRegistrations = goog.module.get('org.gwtproject.event.shared.HandlerRegistrations$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HtmlContentBuilder = goog.module.get('org.jboss.elemento.HtmlContentBuilder$impl');
  InputBuilder = goog.module.get('org.jboss.elemento.InputBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TodoElement, 'org.jboss.elemento.sample.j2cl.TodoElement');

IsElement.$markImplementor(TodoElement);
Attachable.$markImplementor(TodoElement);

exports = TodoElement; 
//# sourceMappingURL=TodoElement.js.map