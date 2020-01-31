goog.module('org.gwtproject.user.datepicker.client.MonthSelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DatePickerComponent = goog.require('org.gwtproject.user.datepicker.client.DatePickerComponent$impl');

/**
 * @abstract
  */
class MonthSelector extends DatePickerComponent {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_datepicker_client_MonthSelector__() {
  this.$ctor__org_gwtproject_user_datepicker_client_DatePickerComponent__();
 }
 
 static $clinit() {
  MonthSelector.$clinit = () =>{};
  MonthSelector.$loadModules();
  DatePickerComponent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MonthSelector;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MonthSelector, 'org.gwtproject.user.datepicker.client.MonthSelector');

exports = MonthSelector; 
//# sourceMappingURL=MonthSelector.js.map