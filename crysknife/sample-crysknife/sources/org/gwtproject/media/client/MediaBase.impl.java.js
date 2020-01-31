goog.module('org.gwtproject.media.client.MediaBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllMediaHandlers = goog.require('org.gwtproject.event.dom.client.HasAllMediaHandlers$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');

let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let MediaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MediaElement.$Overlay$impl');
let SourceElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
let CanPlayThroughEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');
let CanPlayThroughHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.CanPlayThroughHandler$impl');
let EndedEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedEvent$impl');
let EndedHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedHandler$impl');
let LoadedMetadataEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');
let LoadedMetadataHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');
let ProgressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressEvent$impl');
let ProgressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ProgressHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let MediaError_$Overlay = goog.forwardDeclare('org.gwtproject.media.dom.client.MediaError.$Overlay$impl');
let TimeRanges_$Overlay = goog.forwardDeclare('org.gwtproject.media.dom.client.TimeRanges.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {HasAllMediaHandlers}
  */
class MediaBase extends FocusWidget {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_media_client_MediaBase__org_gwtproject_dom_client_MediaElement(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /** @override @return {HandlerRegistration} */
 m_addCanPlayThroughHandler__org_gwtproject_event_dom_client_CanPlayThroughHandler(/** CanPlayThroughHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, CanPlayThroughEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addEndedHandler__org_gwtproject_event_dom_client_EndedHandler(/** EndedHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, EndedEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addProgressHandler__org_gwtproject_event_dom_client_ProgressHandler(/** ProgressHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ProgressEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addLoadedMetadataHandler__org_gwtproject_event_dom_client_LoadedMetadataHandler(/** LoadedMetadataHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, LoadedMetadataEvent.m_getType__());
 }
 /** @return {Object} */
 m_addSource__java_lang_String(/** ?string */ url) {
  let elem = $Overlay.m_createSourceElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  elem.src = url;
  this.m_getElement__().appendChild(elem);
  return elem;
 }
 /** @return {Object} */
 m_addSource__java_lang_String__java_lang_String(/** ?string */ url, /** ?string */ type) {
  let elem = this.m_addSource__java_lang_String(url);
  elem.type = type;
  return elem;
 }
 /** @return {?string} */
 m_canPlayType__java_lang_String(/** ?string */ type) {
  return MediaElement_$Overlay.m_canPlayType__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String(this.m_getMediaElement__(), type);
 }
 /** @return {TimeRanges} */
 m_getBuffered__() {
  return this.m_getMediaElement__().buffered;
 }
 /** @return {?string} */
 m_getCurrentSrc__() {
  return this.m_getMediaElement__().currentSrc;
 }
 /** @return {number} */
 m_getCurrentTime__() {
  return this.m_getMediaElement__().currentTime;
 }
 /** @return {number} */
 m_getDefaultPlaybackRate__() {
  return MediaElement_$Overlay.m_getDefaultPlaybackRate__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {number} */
 m_getDuration__() {
  return this.m_getMediaElement__().duration;
 }
 /** @return {MediaError} */
 m_getError__() {
  return MediaElement_$Overlay.m_getError__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {number} */
 m_getInitialTime__() {
  return MediaElement_$Overlay.m_getInitialTime__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {Object} */
 m_getMediaElement__() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), MediaElement_$Overlay));
 }
 /** @return {number} */
 m_getNetworkState__() {
  return this.m_getMediaElement__().networkState;
 }
 /** @return {number} */
 m_getPlaybackRate__() {
  return MediaElement_$Overlay.m_getPlaybackRate__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {TimeRanges} */
 m_getPlayed__() {
  return this.m_getMediaElement__().played;
 }
 /** @return {?string} */
 m_getPreload__() {
  return this.m_getMediaElement__().preload;
 }
 /** @return {number} */
 m_getReadyState__() {
  return this.m_getMediaElement__().readyState;
 }
 /** @return {?string} */
 m_getModuleName__() {
  return "org.gwtproject.media.MediaTest";
 }
 /** @return {TimeRanges} */
 m_getSeekable__() {
  return this.m_getMediaElement__().seekable;
 }
 /** @return {?string} */
 m_getSrc__() {
  return MediaElement_$Overlay.m_getSrc__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {number} */
 m_getStartOffsetTime__() {
  return MediaElement_$Overlay.m_getStartOffsetTime__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {number} */
 m_getVolume__() {
  return this.m_getMediaElement__().volume;
 }
 /** @return {boolean} */
 m_hasControls__() {
  return MediaElement_$Overlay.m_hasControls__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {boolean} */
 m_hasEnded__() {
  return this.m_getMediaElement__().ended;
 }
 /** @return {boolean} */
 m_isAutoplay__() {
  return MediaElement_$Overlay.m_isAutoplay__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {boolean} */
 m_isLoop__() {
  return MediaElement_$Overlay.m_isLoop__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {boolean} */
 m_isMuted__() {
  return MediaElement_$Overlay.m_isMuted__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {boolean} */
 m_isPaused__() {
  return MediaElement_$Overlay.m_isPaused__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 /** @return {boolean} */
 m_isSeeking__() {
  return MediaElement_$Overlay.m_isSeeking__$devirt__org_gwtproject_dom_client_MediaElement(this.m_getMediaElement__());
 }
 
 m_load__() {
  this.m_getMediaElement__().load();
 }
 
 m_pause__() {
  this.m_getMediaElement__().pause();
 }
 
 m_play__() {
  this.m_getMediaElement__().play();
 }
 
 m_removeSource__org_gwtproject_dom_client_SourceElement(/** Object */ source) {
  this.m_getElement__().removeChild(source);
 }
 
 m_setAutoplay__boolean(/** boolean */ autoplay) {
  MediaElement_$Overlay.m_setAutoplay__$devirt__org_gwtproject_dom_client_MediaElement__boolean(this.m_getMediaElement__(), autoplay);
 }
 
 m_setControls__boolean(/** boolean */ controls) {
  MediaElement_$Overlay.m_setControls__$devirt__org_gwtproject_dom_client_MediaElement__boolean(this.m_getMediaElement__(), controls);
 }
 
 m_setCurrentTime__double(/** number */ time) {
  this.m_getMediaElement__().currentTime = time;
 }
 
 m_setDefaultPlaybackRate__double(/** number */ rate) {
  this.m_getMediaElement__().defaultPlaybackRate = rate;
 }
 
 m_setLoop__boolean(/** boolean */ loop) {
  MediaElement_$Overlay.m_setLoop__$devirt__org_gwtproject_dom_client_MediaElement__boolean(this.m_getMediaElement__(), loop);
 }
 
 m_setMuted__boolean(/** boolean */ muted) {
  this.m_getMediaElement__().muted = muted;
 }
 
 m_setPlaybackRate__double(/** number */ rate) {
  this.m_getMediaElement__().playbackRate = rate;
 }
 
 m_setPreload__java_lang_String(/** ?string */ preload) {
  this.m_getMediaElement__().preload = preload;
 }
 
 m_setSrc__java_lang_String(/** ?string */ url) {
  this.m_getMediaElement__().src = url;
 }
 
 m_setVolume__double(/** number */ volume) {
  this.m_getMediaElement__().volume = volume;
 }
 
 static $clinit() {
  MediaBase.$clinit = () =>{};
  MediaBase.$loadModules();
  FocusWidget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MediaBase;
 }
 
 static $loadModules() {
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  MediaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MediaElement.$Overlay$impl');
  CanPlayThroughEvent = goog.module.get('org.gwtproject.event.dom.client.CanPlayThroughEvent$impl');
  EndedEvent = goog.module.get('org.gwtproject.event.dom.client.EndedEvent$impl');
  LoadedMetadataEvent = goog.module.get('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');
  ProgressEvent = goog.module.get('org.gwtproject.event.dom.client.ProgressEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MediaBase, 'org.gwtproject.media.client.MediaBase');

HasAllMediaHandlers.$markImplementor(MediaBase);

exports = MediaBase; 
//# sourceMappingURL=MediaBase.js.map