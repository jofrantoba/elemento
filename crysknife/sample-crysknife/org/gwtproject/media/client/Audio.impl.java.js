goog.module('org.gwtproject.media.client.Audio$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBase = goog.require('org.gwtproject.media.client.MediaBase$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let AudioElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Audio extends MediaBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {boolean} */
 static m_isSupportedRunTime__org_gwtproject_dom_client_AudioElement(/** Object */ element) {
  return $Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (element), "canPlayType");
 }
 /** @return {Audio} */
 static m_createIfSupported__() {
  Audio.$clinit();
  let element = Document_$Overlay.m_createAudioElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  if (!Audio.m_isSupportedRunTime__org_gwtproject_dom_client_AudioElement(element)) {
   return null;
  }
  return Audio.$create__org_gwtproject_dom_client_AudioElement(element);
 }
 /** @return {boolean} */
 static m_isSupported__() {
  Audio.$clinit();
  let element = Document_$Overlay.m_createAudioElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return Audio.m_isSupportedRunTime__org_gwtproject_dom_client_AudioElement(element);
 }
 /** @return {!Audio} */
 static $create__org_gwtproject_dom_client_AudioElement(/** Object */ element) {
  Audio.$clinit();
  let $instance = new Audio();
  $instance.$ctor__org_gwtproject_media_client_Audio__org_gwtproject_dom_client_AudioElement(element);
  return $instance;
 }
 
 $ctor__org_gwtproject_media_client_Audio__org_gwtproject_dom_client_AudioElement(/** Object */ element) {
  this.$ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(element);
 }
 /** @return {Object} */
 m_getAudioElement__() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getMediaElement__()), AudioElement_$Overlay));
 }
 
 static $clinit() {
  Audio.$clinit = () =>{};
  Audio.$loadModules();
  MediaBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Audio;
 }
 
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