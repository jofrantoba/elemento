goog.module('org.gwtproject.user.client.ui.Image.State.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let State = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.State$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {State} */
  this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1;
  /** @public {Image} */
  this.$c_image;
 }
 /**
  * @param {State} $outer_this
  * @param {Image} $c_image
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image_State__org_gwtproject_user_client_ui_Image($outer_this, $c_image) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_Image_State_1__org_gwtproject_user_client_ui_Image_State__org_gwtproject_user_client_ui_Image($outer_this, $c_image);
  return $instance;
 }
 /**
  * @param {State} $outer_this
  * @param {Image} $c_image
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Image_State_1__org_gwtproject_user_client_ui_Image_State__org_gwtproject_user_client_ui_Image($outer_this, $c_image) {
  this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1 = $outer_this;
  this.$c_image = $c_image;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  if (!$Equality.$same(this.$c_image.f_state__org_gwtproject_user_client_ui_Image, this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1) || !$Equality.$same(this, this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1.f_syntheticEventCommand__org_gwtproject_user_client_ui_Image_State_)) {
   return;
  }
  this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1.f_syntheticEventCommand__org_gwtproject_user_client_ui_Image_State_ = null;
  if (!this.$c_image.m_isAttached__()) {
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1.m_getImageElement__org_gwtproject_user_client_ui_Image(this.$c_image), Image.f_UNHANDLED_EVENT_ATTR__org_gwtproject_user_client_ui_Image_, BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents);
   return;
  }
  let evt = Document_$Overlay.m_createLoadEvent__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  $Overlay.m_dispatchEvent__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(this.f_$outer_this__org_gwtproject_user_client_ui_Image_State_1.m_getImageElement__org_gwtproject_user_client_ui_Image(this.$c_image), evt);
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Image = goog.module.get('org.gwtproject.user.client.ui.Image$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.Image$State$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=Image$State$1.js.map