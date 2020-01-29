goog.module('org.gwtproject.user.client.ui.RichTextArea');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.logical.shared.HasInitializeHandlers');
goog.require('org.gwtproject.safehtml.client.HasSafeHtml');
goog.require('org.gwtproject.user.client.ui.FocusWidget');
goog.require('org.gwtproject.user.client.ui.HasHTML');
goog.require('org.gwtproject.event.logical.shared.InitializeEvent');
goog.require('org.gwtproject.event.logical.shared.InitializeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.gwtproject.user.client.ui.RichTextArea.BasicFormatter');
goog.require('org.gwtproject.user.client.ui.RichTextArea.ExtendedFormatter');
goog.require('org.gwtproject.user.client.ui.RichTextArea.Formatter');
goog.require('org.gwtproject.user.client.ui.impl.RichTextAreaImpl');
goog.require('org.gwtproject.user.client.ui.impl.RichTextAreaImplMozilla');
goog.require('vmbootstrap.Casts');

const RichTextArea = goog.require('org.gwtproject.user.client.ui.RichTextArea$impl');
exports = RichTextArea; 