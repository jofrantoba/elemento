goog.module('org.gwtproject.user.client.ui.PopupPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.gwtproject.event.logical.shared.ResizeHandler$impl');

let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let PopupPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');

/**
 * @implements {ResizeHandler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {PopupPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_1;
 }
 /**
  * @param {PopupPanel} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_PopupPanel($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel_1__org_gwtproject_user_client_ui_PopupPanel($outer_this);
  return $instance;
 }
 /**
  * @param {PopupPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PopupPanel_1__org_gwtproject_user_client_ui_PopupPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ResizeEvent} event
  * @public
  */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(event) {
  let style = this.f_$outer_this__org_gwtproject_user_client_ui_PopupPanel_1.f_glass__org_gwtproject_user_client_ui_PopupPanel_.style;
  let winWidth = Window.m_getClientWidth__();
  let winHeight = Window.m_getClientHeight__();
  $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(style, Display.f_NONE__org_gwtproject_dom_style_shared_Display);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  let width = Document_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  let height = Document_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, Math.max(width, winWidth), Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(style, Math.max(height, winHeight), Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(style, Display.f_BLOCK__org_gwtproject_dom_style_shared_Display);
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Display = goog.module.get('org.gwtproject.dom.style.shared.Display$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.PopupPanel$1');

ResizeHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=PopupPanel$1.js.map