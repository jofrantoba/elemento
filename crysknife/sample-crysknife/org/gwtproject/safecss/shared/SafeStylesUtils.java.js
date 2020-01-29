goog.module('org.gwtproject.safecss.shared.SafeStylesUtils');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.Double');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.style.shared.BorderStyle');
goog.require('org.gwtproject.dom.style.shared.Clear');
goog.require('org.gwtproject.dom.style.shared.Cursor');
goog.require('org.gwtproject.dom.style.shared.Display');
goog.require('org.gwtproject.dom.style.shared.Float');
goog.require('org.gwtproject.dom.style.shared.FontStyle');
goog.require('org.gwtproject.dom.style.shared.FontWeight');
goog.require('org.gwtproject.dom.style.shared.ListStyleType');
goog.require('org.gwtproject.dom.style.shared.OutlineStyle');
goog.require('org.gwtproject.dom.style.shared.Overflow');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.dom.style.shared.TableLayout');
goog.require('org.gwtproject.dom.style.shared.TextAlign');
goog.require('org.gwtproject.dom.style.shared.TextDecoration');
goog.require('org.gwtproject.dom.style.shared.TextJustify');
goog.require('org.gwtproject.dom.style.shared.TextOverflow');
goog.require('org.gwtproject.dom.style.shared.TextTransform');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.dom.style.shared.VerticalAlign');
goog.require('org.gwtproject.dom.style.shared.Visibility');
goog.require('org.gwtproject.dom.style.shared.WhiteSpace');
goog.require('org.gwtproject.safecss.shared.SafeStyles');
goog.require('org.gwtproject.safecss.shared.SafeStylesHostedModeUtils');
goog.require('org.gwtproject.safecss.shared.SafeStylesString');
goog.require('org.gwtproject.safehtml.shared.SafeUri');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Exceptions');

const SafeStylesUtils = goog.require('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
exports = SafeStylesUtils; 