goog.module('org.gwtproject.user.datepicker.client.DateBox');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.editor.client.IsEditor');
goog.require('org.gwtproject.user.client.ui.Composite');
goog.require('org.gwtproject.user.client.ui.HasEnabled');
goog.require('org.gwtproject.user.client.ui.HasValue');
goog.require('java.lang.String');
goog.require('java.util.Date');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.core.client.Scheduler');
goog.require('org.gwtproject.editor.client.LeafValueEditor');
goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor');
goog.require('org.gwtproject.event.logical.shared.ValueChangeEvent');
goog.require('org.gwtproject.event.logical.shared.ValueChangeHandler');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.gwtproject.user.client.ui.PopupPanel');
goog.require('org.gwtproject.user.client.ui.TextBox');
goog.require('org.gwtproject.user.datepicker.client.DateBox.$1');
goog.require('org.gwtproject.user.datepicker.client.DateBox.DateBoxHandler');
goog.require('org.gwtproject.user.datepicker.client.DateBox.DefaultFormat');
goog.require('org.gwtproject.user.datepicker.client.DateBox.Format');
goog.require('org.gwtproject.user.datepicker.client.DateChangeEvent');
goog.require('org.gwtproject.user.datepicker.client.DatePicker');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');

const DateBox = goog.require('org.gwtproject.user.datepicker.client.DateBox$impl');
exports = DateBox; 