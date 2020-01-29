goog.module('org.gwtproject.media.client.MediaBase');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.HasAllMediaHandlers');
goog.require('org.gwtproject.user.client.ui.FocusWidget');
goog.require('org.gwtproject.core.client.JavaScriptObject.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.MediaElement.$Overlay');
goog.require('org.gwtproject.dom.client.SourceElement.$Overlay');
goog.require('org.gwtproject.event.dom.client.CanPlayThroughEvent');
goog.require('org.gwtproject.event.dom.client.CanPlayThroughHandler');
goog.require('org.gwtproject.event.dom.client.EndedEvent');
goog.require('org.gwtproject.event.dom.client.EndedHandler');
goog.require('org.gwtproject.event.dom.client.LoadedMetadataEvent');
goog.require('org.gwtproject.event.dom.client.LoadedMetadataHandler');
goog.require('org.gwtproject.event.dom.client.ProgressEvent');
goog.require('org.gwtproject.event.dom.client.ProgressHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.media.dom.client.MediaError.$Overlay');
goog.require('org.gwtproject.media.dom.client.TimeRanges.$Overlay');
goog.require('vmbootstrap.Casts');

const MediaBase = goog.require('org.gwtproject.media.client.MediaBase$impl');
exports = MediaBase; 