goog.module('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.HasAnimation');
goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionDisplay');
goog.require('java.lang.String');
goog.require('java.util.Collection');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.client.ui.DecoratedPopupPanel');
goog.require('org.gwtproject.user.client.ui.MenuBar');
goog.require('org.gwtproject.user.client.ui.PopupPanel');
goog.require('org.gwtproject.user.client.ui.PopupPanel.AnimationType');
goog.require('org.gwtproject.user.client.ui.SuggestBox');
goog.require('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay.$1');
goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionCallback');
goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenu');
goog.require('org.gwtproject.user.client.ui.SuggestBox.SuggestionMenuItem');
goog.require('org.gwtproject.user.client.ui.SuggestOracle.Suggestion');
goog.require('org.gwtproject.user.client.ui.UIObject');
goog.require('org.gwtproject.user.client.ui.Widget');
goog.require('vmbootstrap.Casts');

const DefaultSuggestionDisplay = goog.require('org.gwtproject.user.client.ui.SuggestBox.DefaultSuggestionDisplay$impl');
exports = DefaultSuggestionDisplay; 