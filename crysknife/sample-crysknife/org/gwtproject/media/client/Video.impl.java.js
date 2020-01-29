goog.module('org.gwtproject.media.client.Video$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBase = goog.require('org.gwtproject.media.client.MediaBase$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let VideoElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Video extends MediaBase {
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
 static m_isSupportedRunTime__org_gwtproject_dom_client_VideoElement(element) {
  return $Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (element), "canPlayType");
 }
 /**
  * @return {Video}
  * @public
  */
 static m_createIfSupported__() {
  Video.$clinit();
  let element = Document_$Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  if (!Video.m_isSupportedRunTime__org_gwtproject_dom_client_VideoElement(element)) {
   return null;
  }
  return Video.$create__org_gwtproject_dom_client_VideoElement(element);
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isSupported__() {
  Video.$clinit();
  let element = Document_$Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return Video.m_isSupportedRunTime__org_gwtproject_dom_client_VideoElement(element);
 }
 /**
  * Factory method corresponding to constructor 'Video(VideoElement)'.
  * @param {Object} element
  * @return {!Video}
  * @public
  */
 static $create__org_gwtproject_dom_client_VideoElement(element) {
  Video.$clinit();
  let $instance = new Video();
  $instance.$ctor__org_gwtproject_media_client_Video__org_gwtproject_dom_client_VideoElement(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'Video(VideoElement)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_media_client_Video__org_gwtproject_dom_client_VideoElement(element) {
  this.$ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(element);
 }
 /**
  * Factory method corresponding to constructor 'Video(String)'.
  * @param {?string} src
  * @return {!Video}
  * @public
  * @deprecated
  */
 static $create__java_lang_String(src) {
  Video.$clinit();
  let $instance = new Video();
  $instance.$ctor__org_gwtproject_media_client_Video__java_lang_String(src);
  return $instance;
 }
 /**
  * Initialization from constructor 'Video(String)'.
  * @param {?string} src
  * @public
  * @deprecated
  */
 $ctor__org_gwtproject_media_client_Video__java_lang_String(src) {
  this.$ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(Document_$Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__()));
  this.m_getMediaElement__().src = src;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getPoster__() {
  return this.m_getVideoElement__().poster;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getVideoElement__() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getMediaElement__()), VideoElement_$Overlay));
 }
 /**
  * @return {number}
  * @public
  */
 m_getVideoHeight__() {
  return this.m_getVideoElement__().videoHeight;
 }
 /**
  * @return {number}
  * @public
  */
 m_getVideoWidth__() {
  return this.m_getVideoElement__().videoWidth;
 }
 /**
  * @param {?string} url
  * @public
  */
 m_setPoster__java_lang_String(url) {
  this.m_getVideoElement__().poster = url;
 }
 /**
  * @public
  */
 static $clinit() {
  Video.$clinit = () =>{};
  Video.$loadModules();
  MediaBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Video;
 }
 /**
  * @public
  */
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