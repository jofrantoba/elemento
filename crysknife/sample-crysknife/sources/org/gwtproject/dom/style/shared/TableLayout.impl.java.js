goog.module('org.gwtproject.dom.style.shared.TableLayout$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TableLayout>}
 * @implements {HasCssName}
  */
class TableLayout extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_TableLayout__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {}
 /**
  * @param {string} name
  * @return {!TableLayout}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  TableLayout.$clinit();
  if ($Equality.$same(TableLayout.f_namesToValuesMap__org_gwtproject_dom_style_shared_TableLayout_, null)) {
   TableLayout.f_namesToValuesMap__org_gwtproject_dom_style_shared_TableLayout_ = $Enums.createMapFromValues(TableLayout.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TableLayout.f_namesToValuesMap__org_gwtproject_dom_style_shared_TableLayout_);
 }
 /**
  * @return {!Array<!TableLayout>}
  * @public
  */
 static m_values__() {
  TableLayout.$clinit();
  return /**@type {!Array<TableLayout>} */ ($Arrays.$init([TableLayout.$f_AUTO__org_gwtproject_dom_style_shared_TableLayout, TableLayout.$f_FIXED__org_gwtproject_dom_style_shared_TableLayout], TableLayout));
 }
 /**
  * @return {!TableLayout}
  * @public
  */
 static get f_AUTO__org_gwtproject_dom_style_shared_TableLayout() {
  return (TableLayout.$clinit(), TableLayout.$f_AUTO__org_gwtproject_dom_style_shared_TableLayout);
 }
 /**
  * @return {!TableLayout}
  * @public
  */
 static get f_FIXED__org_gwtproject_dom_style_shared_TableLayout() {
  return (TableLayout.$clinit(), TableLayout.$f_FIXED__org_gwtproject_dom_style_shared_TableLayout);
 }
 /**
  * @public
  */
 static $clinit() {
  TableLayout.$clinit = () =>{};
  TableLayout.$loadModules();
  Enum.$clinit();
  TableLayout.$f_AUTO__org_gwtproject_dom_style_shared_TableLayout = $1.$create__java_lang_String__int($Util.$makeEnumName("AUTO"), TableLayout.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_TableLayout);
  TableLayout.$f_FIXED__org_gwtproject_dom_style_shared_TableLayout = $2.$create__java_lang_String__int($Util.$makeEnumName("FIXED"), TableLayout.$ordinal$f_FIXED__org_gwtproject_dom_style_shared_TableLayout);
  TableLayout.f_namesToValuesMap__org_gwtproject_dom_style_shared_TableLayout_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TableLayout;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.TableLayout.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.TableLayout.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TableLayout, 'org.gwtproject.dom.style.shared.TableLayout');

HasCssName.$markImplementor(TableLayout);

/** @private {!TableLayout} */
TableLayout.$f_AUTO__org_gwtproject_dom_style_shared_TableLayout;
/** @private {!TableLayout} */
TableLayout.$f_FIXED__org_gwtproject_dom_style_shared_TableLayout;
/** @public {Map<?string, !TableLayout>} */
TableLayout.f_namesToValuesMap__org_gwtproject_dom_style_shared_TableLayout_;
/** @public {number} @const */
TableLayout.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_TableLayout = 0;
/** @public {number} @const */
TableLayout.$ordinal$f_FIXED__org_gwtproject_dom_style_shared_TableLayout = 1;

exports = TableLayout; 
//# sourceMappingURL=TableLayout.js.map