goog.module('org.jboss.elemento.sample.crysknife.Main$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EntryPoint = goog.require('org.gwtproject.core.client.EntryPoint$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLBodyElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLBodyElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HashChangeEvent.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HtmlContentBuilder = goog.forwardDeclare('org.jboss.elemento.HtmlContentBuilder$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let MainBootstrap = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.MainBootstrap$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {EntryPoint}
  */
class Main extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TodoRepository} */
  this.f_repository__org_jboss_elemento_sample_crysknife_Main;
  /** @public {ApplicationElement} */
  this.f_application__org_jboss_elemento_sample_crysknife_Main;
  /** @public {FooterElement} */
  this.f_footer__org_jboss_elemento_sample_crysknife_Main;
 }
 /**
  * @return {!Main}
  * @public
  */
 static $create__() {
  Main.$clinit();
  let $instance = new Main();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_Main__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_Main__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_onModuleLoad__() {
  MainBootstrap.$create__org_jboss_elemento_sample_crysknife_Main(this).m_initialize___$pp_org_jboss_elemento_sample_crysknife();
 }
 /**
  * @public
  */
 m_init___$pp_org_jboss_elemento_sample_crysknife() {
  /**@type {HtmlContentBuilder<HTMLBodyElement>} */ ($Casts.$to(Elements.m_body__().m_add__org_jboss_elemento_IsElement(this.f_application__org_jboss_elemento_sample_crysknife_Main), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(this.f_footer__org_jboss_elemento_sample_crysknife_Main);
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(window.window, EventType.f_hashchange__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {HashChangeEvent} */ ($Casts.$to(event, $Overlay));
   this.f_application__org_jboss_elemento_sample_crysknife_Main.m_filter__java_lang_String_$pp_org_jboss_elemento_sample_crysknife(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.hash);
  });
  this.f_application__org_jboss_elemento_sample_crysknife_Main.m_filter__java_lang_String_$pp_org_jboss_elemento_sample_crysknife(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.hash);
 }
 /**
  * @public
  */
 static $clinit() {
  Main.$clinit = () =>{};
  Main.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Main;
 }
 /**
  * @public
  */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HashChangeEvent.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HtmlContentBuilder = goog.module.get('org.jboss.elemento.HtmlContentBuilder$impl');
  MainBootstrap = goog.module.get('org.jboss.elemento.sample.crysknife.MainBootstrap$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Main, 'org.jboss.elemento.sample.crysknife.Main');

EntryPoint.$markImplementor(Main);

/* NATIVE.JS EPILOG */

const org_jboss_elemento_sample_crysknife_Main = Main;

setTimeout(function(){
    var ep = Main.$create__();
    ep.m_onModuleLoad__()
}, 0);


exports = Main; 
//# sourceMappingURL=Main.js.map