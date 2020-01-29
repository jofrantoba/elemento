goog.module('org.gwtproject.user.client.ui.MultiWordSuggestOracle.WordBounds$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Comparable<WordBounds>}
  */
class WordBounds extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds = 0;
  /** @public {number} */
  this.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds = 0;
 }
 /**
  * @param {number} startIndex
  * @param {number} length
  * @return {!WordBounds}
  * @public
  */
 static $create__int__int(startIndex, length) {
  WordBounds.$clinit();
  let $instance = new WordBounds();
  $instance.$ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds__int__int(startIndex, length);
  return $instance;
 }
 /**
  * @param {number} startIndex
  * @param {number} length
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds__int__int(startIndex, length) {
  this.$ctor__java_lang_Object__();
  this.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds = startIndex;
  this.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds = startIndex + length;
 }
 /**
  * @param {WordBounds} that
  * @return {number}
  * @public
  */
 m_compareTo__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds(that) {
  let comparison = this.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds - that.f_startIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds;
  if (comparison == 0) {
   comparison = that.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds - this.f_endIndex__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds;
  }
  return comparison;
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return this.m_compareTo__org_gwtproject_user_client_ui_MultiWordSuggestOracle_WordBounds(/**@type {WordBounds} */ ($Casts.$to(arg0, WordBounds)));
 }
 /**
  * @public
  */
 static $clinit() {
  WordBounds.$clinit = () =>{};
  WordBounds.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WordBounds;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(WordBounds, 'org.gwtproject.user.client.ui.MultiWordSuggestOracle$WordBounds');

Comparable.$markImplementor(WordBounds);

exports = WordBounds; 
//# sourceMappingURL=MultiWordSuggestOracle$WordBounds.js.map