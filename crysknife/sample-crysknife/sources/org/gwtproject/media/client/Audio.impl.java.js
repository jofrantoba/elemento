goog.module('org.gwtproject.media.client.Audio$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBase = goog.require('org.gwtproject.media.client.MediaBase$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let AudioElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Audio extends MediaBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {Object} element
  * @return {boolean}
  * @public
  */
 static m_isSupportedRunTime__org_gwtproject_dom_client_AudioElement(element) {
  return $Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (element), "canPlayType");
 }
 /**
  * @return {Audio}
  * @public
  */
 static m_createIfSupported__() {
  Audio.$clinit();
  let element = Document_$Overlay.m_createAudioElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  if (!Audio.m_isSupportedRunTime__org_gwtproject_dom_client_AudioElement(element)) {
   return null;
  }
  return Audio.$create__org_gwtproject_dom_client_AudioElement(element);
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isSupported__() {
  Audio.$clinit();
  let element = Document_$Overlay.m_createAudioElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return Audio.m_isSupportedRunTime__org_gwtproject_dom_client_AudioElement(element);
 }
 /**
  * @param {Object} element
  * @return {!Audio}
  * @public
  */
 static $create__org_gwtproject_dom_client_AudioElement(element) {
  Audio.$clinit();
  let $instance = new Audio();
  $instance.$ctor__org_gwtproject_media_client_Audio__org_gwtproject_dom_client_AudioElement(element);
  return $instance;
 }
 /**
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_media_client_Audio__org_gwtproject_dom_client_AudioElement(element) {
  this.$ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(element);
 }
 /**
  * @return {Object}
  * @public
  */
 m_getAudioElement__() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getMediaElement__()), AudioElement_$Overlay));
 }
 /**
  * @public
  */
 static $clinit() {
  Audio.$clinit = () =>{};
  Audio.$loadModules();
  MediaBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Audio;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  AudioElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Audio, 'org.gwtproject.media.client.Audio');

exports = Audio; 
//# sourceMappingURL=Audio.js.map