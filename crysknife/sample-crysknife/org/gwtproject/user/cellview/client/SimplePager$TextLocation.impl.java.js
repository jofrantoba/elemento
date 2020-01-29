goog.module('org.gwtproject.user.cellview.client.SimplePager.TextLocation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextLocation>}
  */
class TextLocation extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @return {!TextLocation}
  * @public
  */
 static $create__java_lang_String__int($name, $ordinal) {
  let $instance = new TextLocation();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_TextLocation__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_TextLocation__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @param {string} name
  * @return {!TextLocation}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  TextLocation.$clinit();
  if ($Equality.$same(TextLocation.f_namesToValuesMap__org_gwtproject_user_cellview_client_SimplePager_TextLocation_, null)) {
   TextLocation.f_namesToValuesMap__org_gwtproject_user_cellview_client_SimplePager_TextLocation_ = $Enums.createMapFromValues(TextLocation.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextLocation.f_namesToValuesMap__org_gwtproject_user_cellview_client_SimplePager_TextLocation_);
 }
 /**
  * @return {!Array<!TextLocation>}
  * @public
  */
 static m_values__() {
  TextLocation.$clinit();
  return /**@type {!Array<TextLocation>} */ ($Arrays.$init([TextLocation.$f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation, TextLocation.$f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation, TextLocation.$f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation], TextLocation));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {TextLocation} */ ($Casts.$to(arg0, TextLocation)));
 }
 /**
  * @return {!TextLocation}
  * @public
  */
 static get f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation() {
  return (TextLocation.$clinit(), TextLocation.$f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
 }
 /**
  * @return {!TextLocation}
  * @public
  */
 static get f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation() {
  return (TextLocation.$clinit(), TextLocation.$f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
 }
 /**
  * @return {!TextLocation}
  * @public
  */
 static get f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation() {
  return (TextLocation.$clinit(), TextLocation.$f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
 }
 /**
  * @public
  */
 static $clinit() {
  TextLocation.$clinit = () =>{};
  TextLocation.$loadModules();
  Enum.$clinit();
  TextLocation.$f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation = TextLocation.$create__java_lang_String__int($Util.$makeEnumName("CENTER"), TextLocation.$ordinal$f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
  TextLocation.$f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation = TextLocation.$create__java_lang_String__int($Util.$makeEnumName("LEFT"), TextLocation.$ordinal$f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
  TextLocation.$f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation = TextLocation.$create__java_lang_String__int($Util.$makeEnumName("RIGHT"), TextLocation.$ordinal$f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
  TextLocation.f_namesToValuesMap__org_gwtproject_user_cellview_client_SimplePager_TextLocation_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextLocation;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextLocation, 'org.gwtproject.user.cellview.client.SimplePager$TextLocation');

/** @private {!TextLocation} */
TextLocation.$f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation;
/** @private {!TextLocation} */
TextLocation.$f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation;
/** @private {!TextLocation} */
TextLocation.$f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation;
/** @public {Map<?string, !TextLocation>} */
TextLocation.f_namesToValuesMap__org_gwtproject_user_cellview_client_SimplePager_TextLocation_;
/** @public {number} @const */
TextLocation.$ordinal$f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation = 0;
/** @public {number} @const */
TextLocation.$ordinal$f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation = 1;
/** @public {number} @const */
TextLocation.$ordinal$f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation = 2;

exports = TextLocation; 
//# sourceMappingURL=SimplePager$TextLocation.js.map