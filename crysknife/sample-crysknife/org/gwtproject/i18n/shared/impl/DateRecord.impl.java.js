goog.module('org.gwtproject.i18n.shared.impl.DateRecord$impl');

const Date = goog.require('java.util.Date$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class DateRecord extends Date {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_era__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_ampm__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {boolean} */
  this.f_midnightIs24__org_gwtproject_i18n_shared_impl_DateRecord_ = false;
  /** @public {number} */
  this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_minutes__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_seconds__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_milliseconds__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_tzOffset__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {number} */
  this.f_dayOfWeek__org_gwtproject_i18n_shared_impl_DateRecord_ = 0;
  /** @public {boolean} */
  this.f_ambiguousYear__org_gwtproject_i18n_shared_impl_DateRecord_ = false;
 }
 /**
  * @return {!DateRecord}
  * @public
  */
 static $create__() {
  DateRecord.$clinit();
  let $instance = new DateRecord();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_DateRecord__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_DateRecord__() {
  this.$ctor__java_util_Date__();
  this.f_era__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_ambiguousYear__org_gwtproject_i18n_shared_impl_DateRecord_ = false;
  this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ = Integer.f_MIN_VALUE__java_lang_Integer;
  this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_ampm__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_midnightIs24__org_gwtproject_i18n_shared_impl_DateRecord_ = false;
  this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_minutes__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_seconds__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_milliseconds__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_dayOfWeek__org_gwtproject_i18n_shared_impl_DateRecord_ = -1;
  this.f_tzOffset__org_gwtproject_i18n_shared_impl_DateRecord_ = Integer.f_MIN_VALUE__java_lang_Integer;
 }
 /**
  * @param {Date} date
  * @param {boolean} strict
  * @return {boolean}
  * @public
  */
 m_calcDate__java_util_Date__boolean(date, strict) {
  if (this.f_era__org_gwtproject_i18n_shared_impl_DateRecord_ == 0 && this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ > 0) {
   this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ = -(this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ - 1);
  }
  if (this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ > Integer.f_MIN_VALUE__java_lang_Integer) {
   date.m_setYear__int(this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ - DateRecord.f_JS_START_YEAR__org_gwtproject_i18n_shared_impl_DateRecord_);
  }
  let orgDayOfMonth = date.m_getDate__();
  date.m_setDate__int(1);
  if (this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   date.m_setMonth__int(this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_);
  }
  if (this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   date.m_setDate__int(this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_);
  } else if (this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   let tmp = Date.$create__int__int__int(date.m_getYear__(), date.m_getMonth__(), 35);
   let daysInCurrentMonth = 35 - tmp.m_getDate__();
   date.m_setDate__int(Math.min(daysInCurrentMonth, orgDayOfMonth));
  } else {
   date.m_setDate__int(orgDayOfMonth);
  }
  if (this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ < 0) {
   this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ = date.m_getHours__();
  }
  if (this.f_ampm__org_gwtproject_i18n_shared_impl_DateRecord_ > 0) {
   if (this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ < 12) {
    this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ += 12;
   }
  }
  date.m_setHours__int(this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ == 24 && this.f_midnightIs24__org_gwtproject_i18n_shared_impl_DateRecord_ ? 0 : this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_);
  if (this.f_minutes__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   date.m_setMinutes__int(this.f_minutes__org_gwtproject_i18n_shared_impl_DateRecord_);
  }
  if (this.f_seconds__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   date.m_setSeconds__int(this.f_seconds__org_gwtproject_i18n_shared_impl_DateRecord_);
  }
  if (this.f_milliseconds__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   date.m_setTime__long($LongUtils.$plus($LongUtils.$times($LongUtils.$divide(date.m_getTime__(), $Long.fromInt(1000)), $Long.fromInt(1000)), $Primitives.$widenIntToLong(this.f_milliseconds__org_gwtproject_i18n_shared_impl_DateRecord_)));
  }
  if (strict) {
   if ((this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ > Integer.f_MIN_VALUE__java_lang_Integer) && ((this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ - DateRecord.f_JS_START_YEAR__org_gwtproject_i18n_shared_impl_DateRecord_) != date.m_getYear__())) {
    return false;
   }
   if ((this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) && (this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ != date.m_getMonth__())) {
    return false;
   }
   if ((this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) && (this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ != date.m_getDate__())) {
    return false;
   }
   if (this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ == 24 && this.f_midnightIs24__org_gwtproject_i18n_shared_impl_DateRecord_) {
    if (this.f_ampm__org_gwtproject_i18n_shared_impl_DateRecord_ > 0) {
     return false;
    }
   } else if (this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ >= 24) {
    return false;
   } else if (this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ == 0 && this.f_midnightIs24__org_gwtproject_i18n_shared_impl_DateRecord_) {
    return false;
   }
   if (this.f_minutes__org_gwtproject_i18n_shared_impl_DateRecord_ >= 60) {
    return false;
   }
   if (this.f_seconds__org_gwtproject_i18n_shared_impl_DateRecord_ >= 60) {
    return false;
   }
   if (this.f_milliseconds__org_gwtproject_i18n_shared_impl_DateRecord_ >= 1000) {
    return false;
   }
  }
  if (this.f_ambiguousYear__org_gwtproject_i18n_shared_impl_DateRecord_) {
   let defaultCenturyStart = Date.$create__();
   defaultCenturyStart.m_setYear__int(defaultCenturyStart.m_getYear__() - 80);
   if (date.m_before__java_util_Date(defaultCenturyStart)) {
    date.m_setYear__int(defaultCenturyStart.m_getYear__() + 100);
   }
  }
  if (this.f_dayOfWeek__org_gwtproject_i18n_shared_impl_DateRecord_ >= 0) {
   if (this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ == -1) {
    let adjustment = $Primitives.$coerceDivision((7 + this.f_dayOfWeek__org_gwtproject_i18n_shared_impl_DateRecord_ - date.m_getDay__()) % 7);
    if (adjustment > 3) {
     adjustment -= 7;
    }
    let orgMonth = date.m_getMonth__();
    date.m_setDate__int(date.m_getDate__() + adjustment);
    if (date.m_getMonth__() != orgMonth) {
     date.m_setDate__int(date.m_getDate__() + (adjustment > 0 ? -7 : 7));
    }
   } else {
    if (date.m_getDay__() != this.f_dayOfWeek__org_gwtproject_i18n_shared_impl_DateRecord_) {
     return false;
    }
   }
  }
  if (this.f_tzOffset__org_gwtproject_i18n_shared_impl_DateRecord_ > Integer.f_MIN_VALUE__java_lang_Integer) {
   let offset = date.m_getTimezoneOffset__();
   date.m_setTime__long($LongUtils.$plus(date.m_getTime__(), $Primitives.$widenIntToLong((this.f_tzOffset__org_gwtproject_i18n_shared_impl_DateRecord_ - offset) * 60 * 1000)));
  }
  return true;
 }
 /**
  * @param {boolean} ambiguousYear
  * @public
  */
 m_setAmbiguousYear__boolean(ambiguousYear) {
  this.f_ambiguousYear__org_gwtproject_i18n_shared_impl_DateRecord_ = ambiguousYear;
 }
 /**
  * @param {number} ampm
  * @public
  */
 m_setAmpm__int(ampm) {
  this.f_ampm__org_gwtproject_i18n_shared_impl_DateRecord_ = ampm;
 }
 /**
  * @param {number} day
  * @public
  */
 m_setDayOfMonth__int(day) {
  this.f_dayOfMonth__org_gwtproject_i18n_shared_impl_DateRecord_ = day;
 }
 /**
  * @param {number} dayOfWeek
  * @public
  */
 m_setDayOfWeek__int(dayOfWeek) {
  this.f_dayOfWeek__org_gwtproject_i18n_shared_impl_DateRecord_ = dayOfWeek;
 }
 /**
  * @param {number} era
  * @public
  */
 m_setEra__int(era) {
  this.f_era__org_gwtproject_i18n_shared_impl_DateRecord_ = era;
 }
 /**
  * @override
  * @param {number} hours
  * @public
  */
 m_setHours__int(hours) {
  this.f_hours__org_gwtproject_i18n_shared_impl_DateRecord_ = hours;
 }
 /**
  * @param {boolean} midnightIs24
  * @public
  */
 m_setMidnightIs24__boolean(midnightIs24) {
  this.f_midnightIs24__org_gwtproject_i18n_shared_impl_DateRecord_ = midnightIs24;
 }
 /**
  * @param {number} milliseconds
  * @public
  */
 m_setMilliseconds__int(milliseconds) {
  this.f_milliseconds__org_gwtproject_i18n_shared_impl_DateRecord_ = milliseconds;
 }
 /**
  * @override
  * @param {number} minutes
  * @public
  */
 m_setMinutes__int(minutes) {
  this.f_minutes__org_gwtproject_i18n_shared_impl_DateRecord_ = minutes;
 }
 /**
  * @override
  * @param {number} month
  * @public
  */
 m_setMonth__int(month) {
  this.f_month__org_gwtproject_i18n_shared_impl_DateRecord_ = month;
 }
 /**
  * @override
  * @param {number} seconds
  * @public
  */
 m_setSeconds__int(seconds) {
  this.f_seconds__org_gwtproject_i18n_shared_impl_DateRecord_ = seconds;
 }
 /**
  * @param {number} tzOffset
  * @public
  */
 m_setTzOffset__int(tzOffset) {
  this.f_tzOffset__org_gwtproject_i18n_shared_impl_DateRecord_ = tzOffset;
 }
 /**
  * @override
  * @param {number} value
  * @public
  */
 m_setYear__int(value) {
  this.f_year__org_gwtproject_i18n_shared_impl_DateRecord_ = value;
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.m_compareTo__java_util_Date(/**@type {Date} */ ($Casts.$to(arg0, Date)));
 }
 /**
  * @public
  */
 static $clinit() {
  DateRecord.$clinit = () =>{};
  DateRecord.$loadModules();
  Date.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateRecord;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(DateRecord, 'org.gwtproject.i18n.shared.impl.DateRecord');

/** @public {!$Long} @const */
DateRecord.f_serialVersionUID__org_gwtproject_i18n_shared_impl_DateRecord_ = $Long.fromBits(2132106846, -297747598) /* -1278816193740448162 */;
/** @public {number} @const */
DateRecord.f_AM__org_gwtproject_i18n_shared_impl_DateRecord = 0;
/** @public {number} @const */
DateRecord.f_PM__org_gwtproject_i18n_shared_impl_DateRecord = 1;
/** @public {number} @const */
DateRecord.f_JS_START_YEAR__org_gwtproject_i18n_shared_impl_DateRecord_ = 1900;

exports = DateRecord; 
//# sourceMappingURL=DateRecord.js.map