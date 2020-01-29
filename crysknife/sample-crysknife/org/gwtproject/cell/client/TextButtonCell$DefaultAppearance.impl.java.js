goog.module('org.gwtproject.cell.client.TextButtonCell.DefaultAppearance$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAppearance = goog.require('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance$impl');
const Appearance = goog.require('org.gwtproject.cell.client.TextButtonCell.Appearance$impl');

let Resources = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Resources$impl');
let SimpleSafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');

/**
 * @extends {DefaultAppearance<?string>}
 * @implements {Appearance}
  */
class TextButtonCell_DefaultAppearance extends DefaultAppearance {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'DefaultAppearance()'.
  * @return {!TextButtonCell_DefaultAppearance}
  * @public
  */
 static $create__() {
  TextButtonCell_DefaultAppearance.$clinit();
  let $instance = new TextButtonCell_DefaultAppearance();
  $instance.$ctor__org_gwtproject_cell_client_TextButtonCell_DefaultAppearance__();
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultAppearance()'.
  * @public
  */
 $ctor__org_gwtproject_cell_client_TextButtonCell_DefaultAppearance__() {
  this.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer(SimpleSafeHtmlRenderer.m_getInstance__());
 }
 /**
  * Factory method corresponding to constructor 'DefaultAppearance(Resources)'.
  * @param {Resources} resources
  * @return {!TextButtonCell_DefaultAppearance}
  * @public
  */
 static $create__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(resources) {
  TextButtonCell_DefaultAppearance.$clinit();
  let $instance = new TextButtonCell_DefaultAppearance();
  $instance.$ctor__org_gwtproject_cell_client_TextButtonCell_DefaultAppearance__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(resources);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultAppearance(Resources)'.
  * @param {Resources} resources
  * @public
  */
 $ctor__org_gwtproject_cell_client_TextButtonCell_DefaultAppearance__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(resources) {
  this.$ctor__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance__org_gwtproject_text_shared_SafeHtmlRenderer__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Resources(SimpleSafeHtmlRenderer.m_getInstance__(), resources);
 }
 /**
  * @public
  */
 static $clinit() {
  TextButtonCell_DefaultAppearance.$clinit = () =>{};
  TextButtonCell_DefaultAppearance.$loadModules();
  DefaultAppearance.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextButtonCell_DefaultAppearance;
 }
 /**
  * @public
  */
 static $loadModules() {
  SimpleSafeHtmlRenderer = goog.module.get('org.gwtproject.text.shared.SimpleSafeHtmlRenderer$impl');
 }
 
}
$Util.$setClassMetadata(TextButtonCell_DefaultAppearance, 'org.gwtproject.cell.client.TextButtonCell$DefaultAppearance');

Appearance.$markImplementor(TextButtonCell_DefaultAppearance);

exports = TextButtonCell_DefaultAppearance; 
//# sourceMappingURL=TextButtonCell$DefaultAppearance.js.map