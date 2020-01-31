goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sk$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__sk extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__sk} */
 static $create__() {
  LocalizedNamesImpl__sk.$clinit();
  let $instance = new LocalizedNamesImpl__sk();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_sk__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_sk__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["SK"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AF", "AX", "AL", "DZ", "AS", "VI", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AZ", "BS", "BH", "BD", "BB", "BE", "BZ", "BJ", "BM", "BT", "BY", "BO", "BA", "BW", "BV", "BR", "IO", "VG", "BN", "BG", "BF", "BI", "EA", "CP", "CK", "CW", "CY", "TD", "CZ", "ME", "CL", "CN", "DK", "DG", "DM", "DO", "DJ", "EG", "EC", "ER", "EE", "ET", "EU", "EZ", "FO", "FK", "FJ", "PH", "FI", "GF", "PF", "TF", "FR", "GA", "GM", "GH", "GI", "GR", "GD", "GL", "GE", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "NL", "HN", "HK", "HR", "IN", "ID", "IQ", "IR", "IE", "IS", "IL", "JM", "JP", "YE", "JE", "JO", "ZA", "GS", "KR", "SS", "KY", "KH", "CM", "CA", "IC", "CV", "BQ", "QA", "KZ", "KE", "KG", "KI", "CC", "CO", "KM", "CD", "CG", "XK", "CR", "CU", "KW", "LA", "LS", "LB", "LR", "LY", "LI", "LT", "LV", "LU", "MO", "MK", "MG", "HU", "MY", "MW", "MV", "ML", "MT", "MA", "MH", "MQ", "MU", "MR", "YT", "UM", "MX", "FM", "MM", "MD", "MC", "MN", "MS", "MZ", "NA", "NR", "DE", "NP", "NE", "NG", "NI", "NU", "NF", "NO", "NC", "NZ", "OM", "UN", "QO", "IM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PN", "CI", "PL", "PR", "PT", "AT", "RE", "GQ", "RO", "RU", "RW", "PM", "SV", "WS", "SM", "SA", "SN", "KP", "MP", "SC", "SL", "SG", "SK", "SI", "SO", "AE", "GB", "US", "RS", "LK", "CF", "SD", "SR", "SJ", "SZ", "SH", "LC", "BL", "KN", "MF", "SX", "ST", "VC", "SY", "SB", "ES", "CH", "SE", "TJ", "TW", "IT", "TZ", "TH", "TG", "TK", "TO", "TT", "TA", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "UY", "UZ", "VU", "VA", "VE", "CX", "VN", "TL", "WF", "XA", "XB", "ZM", "EH", "ZW"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "svet");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "Severn\u00E1 Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "Ju\u017En\u00E1 Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "Oce\u00E1nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "z\u00E1padn\u00E1 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Stredn\u00E1 Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "v\u00FDchodn\u00E1 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "severn\u00E1 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "stredn\u00E1 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "ju\u017En\u00E9 \u00FAzemia Afriky");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("021", "severn\u00E9 \u00FAzemia Ameriky");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "Karibik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "v\u00FDchodn\u00E1 \u00C1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "ju\u017En\u00E1 \u00C1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "juhov\u00FDchodn\u00E1 \u00C1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "ju\u017En\u00E1 Eur\u00F3pa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "Austral\u00E1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "Melan\u00E9zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("057", "oblas\u0165 Mikron\u00E9zie");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "Polyn\u00E9zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "\u00C1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "stredn\u00E1 \u00C1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "z\u00E1padn\u00E1 \u00C1zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "Eur\u00F3pa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "v\u00FDchodn\u00E1 Eur\u00F3pa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "severn\u00E1 Eur\u00F3pa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "z\u00E1padn\u00E1 Eur\u00F3pa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("202", "subsaharsk\u00E1 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "Latinsk\u00E1 Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AC", "Ascension");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "Spojen\u00E9 arabsk\u00E9 emir\u00E1ty");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AF", "Afganistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "Antigua a Barbuda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "Alb\u00E1nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "Arm\u00E9nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "Antarkt\u00EDda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "Argent\u00EDna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "Americk\u00E1 Samoa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "Rak\u00FAsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "Austr\u00E1lia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "Alandy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "Azerbajd\u017Ean");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "Bosna a Hercegovina");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "Banglad\u00E9\u0161");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "Belgicko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "Bulharsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BH", "Bahrajn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "Sv\u00E4t\u00FD Bartolomej");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BM", "Bermudy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "Brunej");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "Bol\u00EDvia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BQ", "Karibsk\u00E9 Holandsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "Braz\u00EDlia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BS", "Bahamy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BT", "Bhut\u00E1n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "Bouvetov ostrov");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "Bielorusko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "Kanada");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "Kokosov\u00E9 ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "Kon\u017Esk\u00E1 demokratick\u00E1 republika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "Stredoafrick\u00E1 republika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Kon\u017Esk\u00E1 republika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "\u0160vaj\u010Diarsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "Pobre\u017Eie Slonoviny");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "Cookove ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CL", "\u010Cile");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "Kamerun");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CN", "\u010C\u00EDna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "Kolumbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CP", "Clipperton");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CR", "Kostarika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "Kuba");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Kapverdy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "Viano\u010Dn\u00FD ostrov");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "\u010Cesko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "Nemecko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "D\u017Eibutsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "D\u00E1nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DM", "Dominika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "Dominik\u00E1nska republika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "Al\u017E\u00EDrsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EA", "Ceuta a Melilla");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EC", "Ekv\u00E1dor");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "Est\u00F3nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "Z\u00E1padn\u00E1 Sahara");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "\u0160panielsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "Eti\u00F3pia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "Eur\u00F3pska \u00FAnia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EZ", "euroz\u00F3na");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "F\u00EDnsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "Fid\u017Ei");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "Falklandy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "Mikron\u00E9zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "Faersk\u00E9 ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "Franc\u00FAzsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "Spojen\u00E9 kr\u00E1\u013Eovstvo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "Gruz\u00EDnsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "Franc\u00FAzska Guyana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GI", "Gibralt\u00E1r");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "Gr\u00F3nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "Rovn\u00EDkov\u00E1 Guinea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "Gr\u00E9cko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "Ju\u017En\u00E1 Georgia a Ju\u017En\u00E9 Sandwichove ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "Hongkong \u2013 OAO \u010C\u00EDny");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "Heardov ostrov a Macdonaldove ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "Chorv\u00E1tsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "Ma\u010Farsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IC", "Kan\u00E1rske ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "Indon\u00E9zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "\u00CDrsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IL", "Izrael");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "Ostrov Man");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "Britsk\u00E9 indickooce\u00E1nske \u00FAzemie");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "Irak");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IR", "Ir\u00E1n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "Island");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "Taliansko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "Jamajka");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "Jord\u00E1nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JP", "Japonsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "Ke\u0148a");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "Kirgizsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "Kambod\u017Ea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "Komory");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "Sv\u00E4t\u00FD Kri\u0161tof a Nevis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "Severn\u00E1 K\u00F3rea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "Ju\u017En\u00E1 K\u00F3rea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KW", "Kuvajt");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "Kajmanie ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "Kazachstan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "Libanon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LC", "Sv\u00E4t\u00E1 Lucia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "Lichten\u0161tajnsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LK", "Sr\u00ED Lanka");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LR", "Lib\u00E9ria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "Litva");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "Luxembursko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "Loty\u0161sko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "L\u00EDbya");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "Maroko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MC", "Monako");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "Moldavsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ME", "\u010Cierna Hora");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "Sv\u00E4t\u00FD Martin (fr.)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "Madagaskar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "Marshallove ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "Maced\u00F3nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "Mjanmarsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "Mongolsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "Macao \u2013 OAO \u010C\u00EDny");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "Severn\u00E9 Mari\u00E1ny");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MQ", "Martinik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "Maurit\u00E1nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MU", "Maur\u00EDcius");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "Maldivy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "Mexiko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MY", "Malajzia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "Mozambik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NA", "Nam\u00EDbia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "Nov\u00E1 Kaled\u00F3nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "Norfolk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NG", "Nig\u00E9ria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "Nikaragua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "Holandsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "N\u00F3rsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NP", "Nep\u00E1l");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "Nov\u00FD Z\u00E9land");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("OM", "Om\u00E1n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "Franc\u00FAzska Polyn\u00E9zia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "Papua-Nov\u00E1 Guinea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "Filip\u00EDny");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "Po\u013Esko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "Saint Pierre a Miquelon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "Pitcairnove ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PR", "Portoriko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "Palest\u00EDnske \u00FAzemia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PT", "Portugalsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PY", "Paraguaj");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "Katar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "ostatn\u00E9 Tichomorie");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "Rumunsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "Srbsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "Rusko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "Saudsk\u00E1 Ar\u00E1bia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "\u0160alam\u00FAnove ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "Seychely");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SD", "Sud\u00E1n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SE", "\u0160v\u00E9dsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "Singapur");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SH", "Sv\u00E4t\u00E1 Helena");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "Slovinsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Svalbard a Jan Mayen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "Slovensko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SM", "San Mar\u00EDno");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SO", "Som\u00E1lsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "Surinam");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SS", "Ju\u017En\u00FD Sud\u00E1n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "Sv\u00E4t\u00FD Tom\u00E1\u0161 a Princov ostrov");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SV", "Salv\u00E1dor");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SX", "Sv\u00E4t\u00FD Martin (hol.)");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "S\u00FDria");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "Svazijsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "Turks a Caicos");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "\u010Cad");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "Franc\u00FAzske ju\u017En\u00E9 a antarktick\u00E9 \u00FAzemia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TH", "Thajsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "Tad\u017Eikistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "V\u00FDchodn\u00FD Timor");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TM", "Turkm\u00E9nsko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "Tunisko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "Turecko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "Trinidad a Tobago");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "Tanz\u00E1nia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UA", "Ukrajina");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Men\u0161ie od\u013Eahl\u00E9 ostrovy USA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UN", "Organiz\u00E1cia Spojen\u00FDch n\u00E1rodov");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "Spojen\u00E9 \u0161t\u00E1ty");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UY", "Uruguaj");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "Vatik\u00E1n");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "Sv\u00E4t\u00FD Vincent a Grenad\u00EDny");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "Britsk\u00E9 Panensk\u00E9 ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "Americk\u00E9 Panensk\u00E9 ostrovy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "Wallis a Futuna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "Jemen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "Ju\u017En\u00E1 Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "nezn\u00E1my regi\u00F3n");
 }
 
 static $clinit() {
  LocalizedNamesImpl__sk.$clinit = () =>{};
  LocalizedNamesImpl__sk.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__sk;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__sk, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sk');

exports = LocalizedNamesImpl__sk; 
//# sourceMappingURL=LocalizedNamesImpl_sk.js.map