goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nds$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LocalizedNamesImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LocalizedNamesImpl__nds extends LocalizedNamesImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocalizedNamesImpl__nds} */
 static $create__() {
  LocalizedNamesImpl__nds.$clinit();
  let $instance = new LocalizedNamesImpl__nds();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nds__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl_nds__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNamesImpl__();
 }
 /** @override @return {Array<?string>} */
 m_loadLikelyRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["DE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_loadSortedRegionCodes__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AC", "AF", "EG", "AX", "AL", "DZ", "VI", "UM", "AS", "AD", "AO", "AI", "AQ", "AG", "GQ", "AR", "AM", "AW", "AZ", "ET", "AU", "BS", "BH", "BD", "BB", "BE", "BZ", "BJ", "BM", "BT", "MM", "BO", "BA", "BW", "BV", "BQ", "BR", "VG", "IO", "BN", "BG", "BF", "BI", "QO", "CL", "CN", "CK", "CR", "CP", "CW", "DK", "CD", "DG", "DM", "DO", "DJ", "DE", "EA", "EC", "EE", "CI", "SV", "ER", "EU", "EZ", "FK", "FO", "FJ", "FI", "FR", "TF", "GF", "PF", "GA", "GM", "GE", "GH", "GI", "GR", "GD", "GL", "GB", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "IC", "IS", "IN", "ID", "IM", "IQ", "IR", "IE", "IL", "IT", "JM", "JP", "YE", "JE", "JO", "KY", "KH", "CM", "CA", "CV", "KZ", "QA", "KE", "KG", "KI", "CC", "CO", "KM", "HR", "CU", "KW", "LA", "LS", "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MG", "MK", "MW", "MY", "MV", "ML", "MT", "MA", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MZ", "NA", "NR", "NL", "NC", "NZ", "NP", "NE", "NG", "NI", "NU", "KP", "MP", "NF", "NO", "OM", "AT", "TL", "PK", "PS", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "CG", "RE", "RW", "RO", "RU", "BL", "MF", "SB", "ZM", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "ZW", "SG", "SK", "SI", "SO", "ZA", "KR", "ES", "LK", "SS", "SH", "KN", "LC", "PM", "VC", "SD", "MO", "HK", "SR", "GS", "SJ", "SZ", "SE", "CH", "SX", "SY", "TA", "TJ", "TW", "TZ", "TH", "TG", "TK", "TO", "TR", "TT", "TD", "CZ", "TN", "TM", "TC", "TV", "UG", "UA", "UN", "HU", "UY", "US", "UZ", "VU", "VA", "VE", "AE", "VN", "WF", "EH", "CX", "BY", "XA", "XB", "XK", "CF", "CY"], j_l_String));
 }
 /** @override */
 m_loadNameMap__() {
  super.m_loadNameMap__();
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("001", "Welt");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("002", "Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("003", "Noordamerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("005", "S\u00FC\u00FCdamerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("009", "Ozeanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("011", "Westafrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("013", "Middelamerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("014", "Oostafrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("015", "Noordafrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("017", "Zentralafrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("018", "S\u00FC\u00FCdlich Afrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("019", "Amerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("029", "Karibik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("030", "Oostasien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("034", "S\u00FC\u00FCdasien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("035", "S\u00FC\u00FCdoostasien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("039", "S\u00FC\u00FCdeuropa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("053", "Australien un Neeseeland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("054", "Melanesien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("061", "Polynesien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("142", "Asien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("143", "Zentralasien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("145", "Westasien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("150", "Europa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("151", "Oosteuropa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("154", "Noordeuropa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("155", "Westeuropa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("419", "Latienamerika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AE", "Vereenigte Araabsche Emiraten");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AG", "Antigua un Barbuda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AL", "Albanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AM", "Armenien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AQ", "Antarktis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AR", "Argentinien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AS", "Amerikaansch-Samoa");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AT", "\u00D6\u00F6sterriek");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AU", "Australien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AX", "\u00C5landeilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("AZ", "Aserbaidschan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BA", "Bosnien un Herzegowina");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BD", "Bangladesch");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BE", "Belgien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BG", "Bulgarien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BL", "Saint Barth\u00E9lemy");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BN", "Brunei Darussalam");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BO", "Bolivien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BR", "Brasilien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BV", "Bouvet-Eiland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("BY", "Wittrussland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CA", "Kanada");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CC", "Kokos-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CD", "Demokraatsche Republik Kongo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CF", "Zentralafrikaansche Republik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CG", "Republik Kongo");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CH", "Swiez");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CI", "Elfenbeenk\u00FCst");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CK", "Cook-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CM", "Kamerun");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CO", "Kolumbien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CU", "Kuba");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CV", "Kap Verde");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CX", "Wiehnachtseiland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CY", "Zypern");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("CZ", "Tschechien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DE", "D\u00FC\u00FCtschland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DJ", "Dschibuti");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DK", "D\u00E4\u00E4nmark");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DO", "Dominikaansche Republik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("DZ", "Algerien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EE", "Eestland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EG", "\u00C4gypten");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EH", "Westsahara");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ES", "Spanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ET", "\u00C4thiopien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("EU", "Europ\u00E4\u00E4sche Union");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FI", "Finnland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FJ", "Fidschi");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FK", "Falkland-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FM", "Mikronesien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FO", "F\u00E4r\u00F6er");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("FR", "Frankriek");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GA", "Gabun");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GB", "Grootbritannien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GE", "Georgien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GF", "Franz\u00F6\u00F6sch-Guayana");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GL", "Gr\u00F6\u00F6nland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GQ", "\u00C4quatorialguinea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GR", "Grekenland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("GS", "S\u00FC\u00FCdgeorgien un de S\u00FCdlichen Sandwich-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HK", "S\u00FCnnerverwaltensrebeet Hongkong");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HM", "Heard- un McDonald-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HR", "Kroatien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("HU", "Ungarn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ID", "Indonesien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IE", "Irland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IM", "Insel Man");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IN", "Indien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IO", "Britisch Rebeed in\u2019n Indischen Ozean");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IQ", "Irak");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IS", "Iesland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("IT", "Italien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JM", "Jamaika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("JO", "Jordanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KE", "Kenia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KG", "Kirgisistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KH", "Kambodscha");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KM", "Komoren");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KN", "St. Kitts un Nevis");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KP", "Noordkorea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KR", "S\u00F6\u00F6dkorea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KY", "Kaiman-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("KZ", "Kasachstan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LB", "Libanon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LI", "Liechtensteen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LT", "Litauen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LU", "Luxemborg");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LV", "Lettland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("LY", "Libyen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MA", "Marokko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MD", "Moldawien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MF", "Saint Martin");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MG", "Madagaskar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MH", "Marshall-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MK", "Makedonien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MM", "Birma");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MN", "Mongolei");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MO", "S\u00FCnnerverwaltensrebeed Macao");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MP", "N\u00F6\u00F6rdliche Marianen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MR", "Mauretanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MV", "Malediven");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MX", "Mexiko");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("MZ", "Mosambik");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NC", "Neekaledonien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NF", "Norfolk");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NI", "Nikaragua");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NL", "Nedderlannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NO", "Norwegen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("NZ", "Neeseeland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PF", "Franz\u00F6\u00F6sch-Polynesien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PG", "Papua-Neeguinea");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PH", "Philippinen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PL", "Polen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PM", "St. Pierre un Miquelon");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PN", "Pitcairn");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("PS", "Pal\u00E4stinensische Rebeden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QA", "Katar");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("QO", "B\u00FCter Ozeanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RE", "Reunion");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RO", "Rum\u00E4nien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RS", "Serbien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RU", "Russland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("RW", "Ruanda");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SA", "Saudi-Arabien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SB", "Salomonen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SC", "Seychellen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SG", "Singapur");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SI", "Slowenien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SJ", "Svalbard un Jan Mayen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SK", "Slowakei");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SR", "Surinam");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ST", "S\u00E3o Tom\u00E9 un Pr\u00EDncipe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SY", "Syrien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("SZ", "Swasiland");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TC", "Turks- un Caicosinseln");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TD", "Tschad");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TF", "Franz\u00F6\u00F6sche S\u00FC\u00FCd- un Antarktisrebeden");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TJ", "Tadschikistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TL", "Oosttimor");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TN", "Tunesien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TR", "T\u00F6rkei");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TT", "Trinidad un Tobago");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("TZ", "Tansania");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UM", "Amerikaansch-Ozeanien");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("US", "USA");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("UZ", "Usbekistan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VA", "Vatikan");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VC", "St. Vincent un de Grenadinen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VG", "Brietsche Jumfern-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("VI", "Amerikaansche Jumfern-Eilannen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("WF", "Wallis un Futuna");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("YE", "Jemen");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZA", "S\u00F6\u00F6dafrika");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZM", "Sambia");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZW", "Simbabwe");
  this.f_namesMap__org_gwtproject_i18n_client_DefaultLocalizedNamesBase.put("ZZ", "Nich beg\u00E4ng Regioon");
 }
 
 static $clinit() {
  LocalizedNamesImpl__nds.$clinit = () =>{};
  LocalizedNamesImpl__nds.$loadModules();
  LocalizedNamesImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocalizedNamesImpl__nds;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNamesImpl__nds, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nds');

exports = LocalizedNamesImpl__nds; 
//# sourceMappingURL=LocalizedNamesImpl_nds.js.map