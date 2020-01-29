goog.module('org.gwtproject.view.client.AbstractDataProvider');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.view.client.ProvidesKey');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IllegalStateException');
goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.HashSet');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.view.client.AbstractDataProvider.$1');
goog.require('org.gwtproject.view.client.HasData');
goog.require('org.gwtproject.view.client.Range');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const AbstractDataProvider = goog.require('org.gwtproject.view.client.AbstractDataProvider$impl');
exports = AbstractDataProvider; 