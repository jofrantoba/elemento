goog.module('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Factory = goog.require('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let reflect = goog.forwardDeclare('goog.reflect');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let org_jboss_elemento_sample_crysknife_ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let $LambdaAdaptor$1 = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$1$impl');
let $LambdaAdaptor$2 = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$2$impl');
let $LambdaAdaptor$3 = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$3$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.ApplicationElement$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let TemplateUtil = goog.forwardDeclare('org.jboss.gwt.elemento.template.TemplateUtil$impl');
let BeanManagerImpl = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
let Instance = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Instance$impl');
let Interceptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.Interceptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Factory<org_jboss_elemento_sample_crysknife_ApplicationElement>}
  */
class ApplicationElement__Factory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Interceptor}*/
  this.f_interceptor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
  /**@type {Instance<TodoRepository>}*/
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
  /**@type {ApplicationElement}*/
  this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
 }
 /** @override @return {ApplicationElement} */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
  }
  this.f_interceptor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ = Interceptor.$create__java_lang_Object(ApplicationElement.$create__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__org_jboss_elemento_sample_crysknife_TodoRepository(this, /**@type {TodoRepository}*/ ($Casts.$to(this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_get__(), TodoRepository))));
  this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ = /**@type {ApplicationElement}*/ ($Casts.$to(this.f_interceptor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getProxy__(), ApplicationElement));
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), /**@type {HTMLInputElement}*/ ($Casts.$to(TemplateUtil.m_resolveElementAs__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "newTodo"), HTMLInputElement_$Overlay)));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "newTodo", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_main__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_main__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "main"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "main", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_main__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), /**@type {HTMLInputElement}*/ ($Casts.$to(TemplateUtil.m_resolveElementAs__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "toggleAll"), HTMLInputElement_$Overlay)));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "toggleAll", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_list__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_list__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), /**@type {HTMLUListElement}*/ ($Casts.$to(TemplateUtil.m_resolveElementAs__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "list"), HTMLUListElement_$Overlay)));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "list", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_list__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "footer"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "footer", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_count__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_count__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "count"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "count", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_count__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "filterAll"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "filterAll", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "filterActive"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "filterActive", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "filterCompleted"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "filterCompleted", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), /**@type {HTMLButtonElement}*/ ($Casts.$to(TemplateUtil.m_resolveElementAs__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "clearCompleted"), HTMLButtonElement_$Overlay)));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_getElement__(), "clearCompleted", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)));
  }
  /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)).addEventListener("keydown", new $LambdaAdaptor$1((/** Event */ e) =>{
   this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_newTodo__elemental2_dom_KeyboardEvent_$pp_org_jboss_elemento_sample_crysknife(/**@type {KeyboardEvent}*/ (Js.m_uncheckedCast__java_lang_Object(e)));
  }));
  /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)).addEventListener("change", new $LambdaAdaptor$2((/** Event */ e_1) =>{
   this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_toggleAll__elemental2_dom_Event_$pp_org_jboss_elemento_sample_crysknife(/**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object(e_1)));
  }));
  /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_), reflect.objectProperty("f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement", this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_)), HTMLElement_$Overlay)).addEventListener("click", new $LambdaAdaptor$3((/** Event */ e_2) =>{
   this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_clearCompleted__elemental2_dom_Event_$pp_org_jboss_elemento_sample_crysknife(/**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object(e_2)));
  }));
  this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_.m_init___$pp_org_jboss_elemento_sample_crysknife();
  return this.f_instance__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_;
 }
 /** @return {!ApplicationElement__Factory} */
 static $create__() {
  let $instance = new ApplicationElement__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__() {
  this.$ctor__java_lang_Object__();
  this.f_org_jboss_elemento_sample_crysknife_todorepository__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ = /**@type {Instance<TodoRepository>}*/ (BeanManagerImpl.m_get__().m_lookupBean__java_lang_Class(Class.$get(TodoRepository)));
 }
 /** @return {ApplicationElement__Factory} */
 static m_create__() {
  ApplicationElement__Factory.$clinit();
  return ApplicationElement__Factory.$create__();
 }
 
 static $clinit() {
  ApplicationElement__Factory.$clinit = () =>{};
  ApplicationElement__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplicationElement__Factory;
 }
 
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  reflect = goog.module.get('goog.reflect');
  Class = goog.module.get('java.lang.Class$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor$1 = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$1$impl');
  $LambdaAdaptor$2 = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$2$impl');
  $LambdaAdaptor$3 = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.$LambdaAdaptor$3$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.ApplicationElement$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
  TemplateUtil = goog.module.get('org.jboss.gwt.elemento.template.TemplateUtil$impl');
  BeanManagerImpl = goog.module.get('org.treblereel.gwt.crysknife.client.BeanManagerImpl$impl');
  Interceptor = goog.module.get('org.treblereel.gwt.crysknife.client.Interceptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ApplicationElement__Factory, 'org.jboss.elemento.sample.crysknife.ApplicationElement_Factory');

Factory.$markImplementor(ApplicationElement__Factory);

exports = ApplicationElement__Factory; 
//# sourceMappingURL=ApplicationElement_Factory.js.map