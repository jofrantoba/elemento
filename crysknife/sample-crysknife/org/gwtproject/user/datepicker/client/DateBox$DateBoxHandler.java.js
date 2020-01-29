goog.module('org.gwtproject.user.datepicker.client.DateBox.DateBoxHandler');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.dom.client.BlurHandler');
goog.require('org.gwtproject.event.dom.client.ClickHandler');
goog.require('org.gwtproject.event.dom.client.FocusHandler');
goog.require('org.gwtproject.event.dom.client.KeyDownHandler');
goog.require('org.gwtproject.event.logical.shared.CloseHandler');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('java.util.Date');
goog.require('org.gwtproject.event.dom.client.BlurEvent');
goog.require('org.gwtproject.event.dom.client.ClickEvent');
goog.require('org.gwtproject.event.dom.client.FocusEvent');
goog.require('org.gwtproject.event.dom.client.KeyCodes');
goog.require('org.gwtproject.event.dom.client.KeyDownEvent');
goog.require('org.gwtproject.event.logical.shared.CloseEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.user.client.ui.PopupPanel');
goog.require('org.gwtproject.user.datepicker.client.DateBox');
goog.require('vmbootstrap.Casts');

const DateBoxHandler = goog.require('org.gwtproject.user.datepicker.client.DateBox.DateBoxHandler$impl');
exports = DateBoxHandler; 