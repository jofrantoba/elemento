goog.module('org.gwtproject.media.client.Video$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBase = goog.require('org.gwtproject.media.client.MediaBase$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let VideoElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Video extends MediaBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {boolean} */
 static m_isSupportedRunTime__org_gwtproject_dom_client_VideoElement(/** Object */ element) {
  return $Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (element), "canPlayType");
 }
 /** @return {Video} */
 static m_createIfSupported__() {
  Video.$clinit();
  let element = Document_$Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  if (!Video.m_isSupportedRunTime__org_gwtproject_dom_client_VideoElement(element)) {
   return null;
  }
  return Video.$create__org_gwtproject_dom_client_VideoElement(element);
 }
 /** @return {boolean} */
 static m_isSupported__() {
  Video.$clinit();
  let element = Document_$Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return Video.m_isSupportedRunTime__org_gwtproject_dom_client_VideoElement(element);
 }
 //Factory method corresponding to constructor 'Video(VideoElement)'.
 /** @return {!Video} */
 static $create__org_gwtproject_dom_client_VideoElement(/** Object */ element) {
  Video.$clinit();
  let $instance = new Video();
  $instance.$ctor__org_gwtproject_media_client_Video__org_gwtproject_dom_client_VideoElement(element);
  return $instance;
 }
 //Initialization from constructor 'Video(VideoElement)'.
 
 $ctor__org_gwtproject_media_client_Video__org_gwtproject_dom_client_VideoElement(/** Object */ element) {
  this.$ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(element);
 }
 //Factory method corresponding to constructor 'Video(String)'.
 /** @return {!Video} @deprecated */
 static $create__java_lang_String(/** ?string */ src) {
  Video.$clinit();
  let $instance = new Video();
  $instance.$ctor__org_gwtproject_media_client_Video__java_lang_String(src);
  return $instance;
 }
 //Initialization from constructor 'Video(String)'.
 /** @deprecated */
 $ctor__org_gwtproject_media_client_Video__java_lang_String(/** ?string */ src) {
  this.$ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(Document_$Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_getMediaElement__().src = src;
 }
 /** @return {?string} */
 m_getPoster__() {
  return this.m_getVideoElement__().poster;
 }
 /** @return {Object} */
 m_getVideoElement__() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getMediaElement__()), VideoElement_$Overlay));
 }
 /** @return {number} */
 m_getVideoHeight__() {
  return this.m_getVideoElement__().videoHeight;
 }
 /** @return {number} */
 m_getVideoWidth__() {
  return this.m_getVideoElement__().videoWidth;
 }
 
 m_setPoster__java_lang_String(/** ?string */ url) {
  this.m_getVideoElement__().poster = url;
 }
 
 static $clinit() {
  Video.$clinit = () =>{};
  Video.$loadModules();
  MediaBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Video;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  VideoElement_$Overlay = goog.module.get('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Video, 'org.gwtproject.media.client.Video');

exports = Video; 
//# sourceMappingURL=Video.js.map