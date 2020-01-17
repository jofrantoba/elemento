goog.module('org.elemento.By');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Equality');
goog.require('org.elemento.By.AttributeOperator');
goog.require('org.elemento.By.ByAttribute');
goog.require('org.elemento.By.ByClassname');
goog.require('org.elemento.By.ByCombination');
goog.require('org.elemento.By.ByData');
goog.require('org.elemento.By.ByElement');
goog.require('org.elemento.By.ByGroup');
goog.require('org.elemento.By.ById');
goog.require('org.elemento.By.BySelector');
goog.require('org.elemento.By.Combinator');
goog.require('org.elemento.IsElement');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const By = goog.require('org.elemento.By$impl');
exports = By; 