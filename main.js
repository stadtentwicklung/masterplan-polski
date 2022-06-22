/* **** The fundamental basic-skeleton is generated by QGIS **** */
/* **** Leaflet **** */

//  .. OpenStreetMap
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', minZoom: 10, maxZoom: 15});

// Overlay layers (TMS)
var lyr = L.tileLayer('./{z}/{x}/{y}.png', {tms: true, opacity: 1, attribution: '&copy; <a href="https://www.cottbus.de/verwaltung/gb_iv/stadtentwicklung/">Stadtentwicklung Cottbus</a>, 12/2021, <a href="https://stadtentwicklung.github.io/masterplan/"><b>DEUTSCH</b></a>, <a href="https://stadtentwicklung.github.io/masterplan-english/"><b>ENGLISH</b></a>, <a href="https://stadtentwicklung.github.io/masterplan-dolnoserbski/"><b>DOLNOSERBSKI</b></a>', minZoom: 10, maxZoom: 15});

// Map
var map = L.map('map', {
    center: [51.78179619043856, 14.430890490667228],
    //zoom: 15,
    minZoom: 10,
    maxZoom: 15,
    layers: [osm, lyr],
	loadingControl: true
});

// Title
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl title');
    this.update();
    return this._div;
};

title.update = function(props) {
    this._div.innerHTML = "Plan generalny Cottbuser Ostsee 3.0";
};
title.addTo(map);

// Fit to overlay bounds (SW and NE points with (lat, lon))
map.fitBounds([[51.72837123461897, 14.552784241190125], [51.83522114625816, 14.30899674014433]]);
		
// Geolocating		
function onLocationFound(e) {
    var location = e.latlng
    L.marker(location).addTo(map).bindPopup("Du bist ungef&auml;hr hier.").openPopup();
};

function onLocationError(e) {
	alert(e.message);
};

function getLocationLeaflet() {
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 15});
};
		
// Custom project-marker
var redIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//1
L.marker([51.77727, 14.39582], {icon: redIcon}).addTo(map).bindPopup("<p><strong>1. Dzielnica Portowa Cottbus | P&sacute;istawowy kwart&ecaron;r Ch&oacute;&sacute;ebuz</strong></p><img src='./img/1_hafen.jpg'/><p>Dzi&#281;kidzielnicy portowej Cottbus/Chó&#347;ebuz stanie si&#281; „miastem nad wod&#261;”. Na ko&#324;cu osi morskiej, pomi&#281;dzy brzegiem Cottbuser Ostsee a B168 powstaje nowa, innowacyjna i ró&#380;norodna dzielnica z promenad&#261;, portem miejskim i oko&#322;o 200 miejscami do cumowania &#322;odzi. Oprócz szerokiej oferty sportów wodnych, centrum sportowo-zdrowotnego, apartamentów, sklepów, restauracji oraz kompleksu hotelowo-imprezowego, budowane jest „Forum Lausitz/Carboneum” – centrum informacji o ró&#380;norodnych relacjach mi&#281;dzy histori&#261; kultury, &#347;rodowisku naturalnym i wydobyciu w&#281;gla w regionie. Dzielnica portowa to pierwszy kwarta&#322; w Cottbus/Chó&#347;ebuz, który zaspokaja zapotrzebowanie na rozwój obszarów miejskich neutralny pod wzgl&#281;dem emisji CO2. Pocz&#261;wszy od planowania, doboru materia&#322;ów i konstrukcji, poprzez innowacyjn&#261; koncepcj&#281; mobilno&#347;ci, a&#380; po neutralne pod wzgl&#281;dem emisji CO2 dostawy energii, dzielnica portowa powinna ustali&#263; krajowe standardy zrównowa&#380;onego i przyjaznego dla klimatu rozwoju obszarów miejskich.</p>");
//2
L.marker([51.77004, 14.37917], {icon: redIcon}).addTo(map).bindPopup("<p><strong>2. Przedmie&#347;cie morskie | Jazorowe p&sacute;edm&ecaron;sto</strong></p><img src='./img/2_vorstadt.jpg'/><p>Po&#322;&#261;czenie miejskie mi&#281;dzy centrum miasta a Cottbuser Ostsee jest jednym z najwa&#380;niejszych projektów w nadchodz&#261;cych dziesi&#281;cioleciach i pierwszym krokiem w neutralnym pod wzgl&#281;dem emisji CO2 i odpornym na klimat rozwoju Cottbus/Chó&#347;ebuz. Rdzeniem tego po&#322;&#261;czenia jest dawna linia kolejowa Cottbus-Guben, która w 2000 roku sta&#322;a si&#281; przestarza&#322;a z powodu górnictwa odkrywkowego. Tu ma powsta&#263; ziele&#324; miejska dla pieszych, rowerzystów i komunikacji miejskiej. Zorientowanie urbanistyczne na wod&#281; jest otoczone przez rozwój Seevorstadt wzd&#322;u&#380; tej osi &#322;&#261;cz&#261;cej. Tu powstaje przestrze&#324; przysz&#322;o&#347;ci w postaci nowoczesnej, miejskiej i zrównowa&#380;onej dzielnicy miasta oraz przestronnych terenów zielonych. Plany przewiduj&#261; nowe osiedla mieszkaniowe, atrakcyjne tereny komercyjne, innowacyjny kampus energetyczny jako fabryka my&#347;lenia oraz centrum edukacyjne i rz&#261;dowe z licznymi miejscami pracy. Nowe funkcje i walory projektowe w sensie fundamentalnego procesu rewitalizacji miasta, a tak&#380;e innowacyjny lokalny transport publiczny okre&#347;laj&#261; wymagania dotycz&#261;ce przysz&#322;ego rozwoju miast we wschodniej cz&#281;&#347;ci Cottbus.</p>");
//3
L.marker([51.78746, 14.38042], {icon: redIcon}).addTo(map).bindPopup("<p><strong>3. Merzdorf | &Zcaron;ylowk</strong></p><p>W kierunku pó&#322;nocno-zachodnim, w bezpo&#347;rednim s&#261;-siedztwie kwarta&#322;u portowego, powstaj&#261; zabudowania mieszkalne jako uzupe&#322;nienie obszaru osadniczego Merzdorf z zalet&#261; blisko&#347;ci miasta i wody. Maj&#261; tu powsta&#263; mieszkania z nowoczesnym j&#281;zykiem architektonicznym i zapotrzebowaniem na neutraln&#261; pod wzgl&#281;dem emisji CO2 zabudow&#281; urbanistyczn&#261;. Dzielnica jest otoczona przez pla&#380;e Merzdorf, do której mo&#380;na &#322;atwo dotrze&#263; rowerem i pieszo, szczególnie dla k&#261;pi&#261;cych si&#281; go&#347;ci w Cottbus.</p>");
//4
L.marker([51.7975, 14.38316], {icon: redIcon}).addTo(map).bindPopup("<p><strong>4. Lakoma &ndash; Willmersdorf | &Lstrok;akoma &ndash; Rogozno</strong></p><p>Dawne po&#322;o&#380;enie wsi Lakoma stanowi centralny w&#281;ze&#322; nad jeziorem dla rowerzystów mi&#281;dzy okr&#281;&#380;n&#261; tras&#261; jeziora a(ponad)regionalnymi &#347;cie&#380;kami rowerowymi i odwrotnie. Na zachodnim brzegu Jeziora Cottbus ma powsta&#263; p&#322;ywaj&#261;ca wyspa z restauracj&#261; i apartamentami wakacyjnymi. Naturalny odcinek brzegowy ze &#347;cie&#380;k&#261; brzegow&#261; zaprasza na spacer wzd&#322;u&#380; jeziora tu&#380; przy wodzie. Na pó&#322;noc od Lakomy znajduje si&#281; pla&#380;a Willmersdorf, która jest idealna dla p&#322;ywaków z okolicy, ale tak&#380;e dla rowerzystów na trasie okr&#281;&#380;nej.</p>");
//5
L.marker([51.80482, 14.42282], {icon: redIcon}).addTo(map).bindPopup("<p><strong>5. Port Teichland | P&sacute;istaw Gatojce</strong></p><img src='./img/5_teichland.jpg'/><p>Na po&#322;udniowym skraju dzielnicy Neuendorf gminy Teichland powstaje „port morski”. W planach przewidziano budow&#281; przystani dla &#322;odzi sportowych o powierzchni wody ok. 16.000 metry kwadratowe na 100 miejsc do cumowania &#322;odzi. Wokó&#322; przysz&#322;ego basenu portowego powstanie dzielnica portowa z promenad&#261; jeziorn&#261; z widokiem na port i Cottbuser Ostsee. Promenada &#322;&#261;czy si&#281; z „Seeachse” na wschodzie i prowadzi dalej do przystani dla &#380;eglugi pasa&#380;erskiej oraz „Parku Przygód”. Do promenady przylegaj&#261; tereny handlu morskiego, gastronomii i bazy noclegowej. Ponadto w dzielnicy portowej zaplanowano tereny pod dzia&#322;alno&#347;&#263; portow&#261;, warsztaty, hal&#281; do przechowywania &#322;odzi oraz mieszkania i domy wczasowe. Tereny zabudowy pod budynki mieszkalne przyczyniaj&#261; si&#281; do ca&#322;orocznej rewitalizacji kwarta&#322;u.</p>");
//6
L.marker([51.80745, 14.44994], {icon: redIcon}).addTo(map).bindPopup("<p><strong>6. Wysoko&#347;&#263; Bärenbrückera | Barbucka wu&scaron;yna<br /></strong></p><p>Wysoko&#347;&#263; Bärenbrückera to sztuczne wzniesienie, które znajduje si&#281; oko&#322;o 30 m nad naturalnym otoczeniem. Wraz z parkiem rozrywki „Teichland” i wie&#380;&#261; widokow&#261; tworzy centrum atrakcji turystycznych na pó&#322;nocnym brzegu jeziora. W parku przygód znajduje si&#281; letni tor saneczkowy, tor ZIP line, wspinaczka po ska&#322;ach, labirynt, „S&#322;owia&#324;ski Gaj Bogów” i „&#346;cie&#380;ka Ma&#322;ych Bogów”. Wie&#380;a widokowa umo&#380;liwia szeroki widok na przysz&#322;e jezioro.</p>");
//7
L.marker([51.79691, 14.44921], {icon: redIcon}).addTo(map).bindPopup("<p><strong>7. Zatoka Bärenbrücker | Barbucka wu&scaron;yna<br /></strong></p><p>Zakota Bärenbrücker jest miejscem na g&#322;o&#347;ne imprezy, od muzyki i dramatu a&#380; po du&#380;e i prywatne imprezy. Jest to równie&#380; punkt do surfowania na jeziorze. Powierzchnia wody i pla&#380;a w zatoce, z orientacj&#261; na po&#322;udnie, oferuj&#261; najlepsze warunki dla kitesurferów. Sezonowe oferty gastronomiczne, szko&#322;y surfingu i wypo&#380;yczalnie, a tak&#380;e pole namiotowe, miejsce parkingowe dla przyczep kempingowych i du&#380;e boisko sportowe powinny oferowa&#263; przestrze&#324; dla zrównowa&#380;onej aktywnej turystyki wodnej, zgodnie z twierdzeniem, &#380;e budownictwo jest neutralne pod wzgl&#281;dem emisji CO2 i ostro&#380;ne wykorzystanie zasobów jako za&#322;o&#380;enie planowania.</p>");
//8
L.marker([51.78252, 14.47835], {icon: redIcon}).addTo(map).bindPopup("<p><strong>8. Centrum energetyczne | Energijowy centrum<br /></strong></p><p>Na by&#322;ych kopalniach odkrywkowych w&#281;gla brunatnego powstaje lokalizacja biznesowa dla przemys&#322;u i produkcji z naciskiem na energi&#281; odnawialn&#261; i gospodark&#281; o obiegu zamkni&#281;tym. Dobrze skomunikowana powierzchnia handlowa dzisiejszych obiektów dziennych ma zosta&#263; rozbudowana w centrum technologii i start-up dla przysz&#322;ych energii (koncentracja na surowcach odnawialnych, alternatywna produkcja energii) na &#322;&#261;cznej powierzchni ok. 55 hektarów.</p>");
//9
L.marker([51.78239, 14.4593], {icon: redIcon}).addTo(map).bindPopup("<p><strong>9. Krajobraz energetyczny | Energijowa krajina<br /></strong></p><p>Na wschód od jeziora, pomi&#281;dzy okr&#281;&#380;n&#261; tras&#261; a centrum energetycznym, proponuje si&#281; zielony krajobraz energetyczny. W przysz&#322;o&#347;ci nale&#380;y skoncentrowa&#263; si&#281; na wytwarzaniu energii odnawialnej w harmonii z krajobrazem po górniczym, który jest g&#322;ównie le&#347;ny i bliski naturze. Systemy do przetwarzania energii wiatrowej i s&#322;onecznej na energi&#281; elektryczn&#261; uciele&#347;niaj&#261; tutaj zmian&#281; zaopatrzenia w energi&#281;. Zwiedzaj&#261;cy mog&#261; dowiedzie&#263; si&#281; o historii produkcji energii z tablic informacyjnych przy trasie okr&#281;&#380;nej.</p>");
//10
L.marker([51.75012, 14.48234], {icon: redIcon}).addTo(map).bindPopup("<p><strong>10. Jezioro Klinge | Klincanski jazor</strong></p><p>Jezioro Klinge ma szczególne znaczenie w tworzeniu i zachowaniu cennych obszarów przyrodniczo-krajobrazowych oraz rozwoju turystyki bliskiej naturze. Ze wzgl&#281;du na swój kszta&#322;t predestynowany jest do profesjonalnego toru regatowego o d&#322;ugo&#347;ci od 2.500 do 3.000 m. W przysz&#322;o&#347;ci „centrum sportów wio&#347;larskich” po&#322;&#261;czy w sposób bardzo centralny zakres sportów wodnych i b&#281;dzie mog&#322;o by&#263; wykorzystywane przez wiele klubów sportowych. Ze wzgl&#281;du na przewidywane zako&#324;czenie powodzi, uwolnienia jeziora mo&#380;na spodziewa&#263; si&#281; d&#322;ugo po zako&#324;czeniu prac nad Cottbuser Ostsee.</p>");
//11
L.marker([51.74994, 14.44685], {icon: redIcon}).addTo(map).bindPopup("<p><strong>11. Naturalna po&#322;udniowa ko&#324;cówka pla&#380;y | P&sacute;irodny p&oacute;dpo&lstrok;dnjowy p&sacute;ibrjog</strong></p><p>Ze wzgl&#281;du na swoje wzniesienie obszar ten jest wizualnym interfejsem mi&#281;dzy Jeziorem Klinge a Cottbuser Ostsee. Na d&#322;ugo&#347;ci ok. 250 m ma powsta&#263; tu naturalna pla&#380;a jeziora dla mi&#322;o&#347;ników nudyzmu i k&#261;pi&#261;cych si&#281; z du&#380;&#261; potrzeb&#261; przyrody. W zwi&#261;zku z tym nie planuje si&#281; intensywnego u&#380;ytkowania rekreacyjnego i turystycznego. Pla&#380;a jest dost&#281;pna na piechot&#281; i rowerem po okr&#281;&#380;nej trasie.</p>");
//12
L.marker([51.75482, 14.41677], {icon: redIcon}).addTo(map).bindPopup("<p><strong>12. Obszar zabudowy Schlichow-Po&#322;udnie | Wuwija&nacute;ski rum &Scaron;lichow&ndash;p&oacute;dpo&lstrok;dnjo</strong></p><p>Na po&#322;udnie od wsi Schlichow sztucznie stworzony, ruchomy krajobraz stanowi preludium do krajobrazu wydm &#347;ródl&#261;dowych wzd&#322;u&#380; po&#322;udniowo-zachodniego brzegu. Mo&#380;na tu sobie wyobrazi&#263; zastosowania rekreacyjne i sportowe na du&#380;&#261; skal&#281;, które koresponduj&#261; z wiejskim charakterem &#347;rodowiska, a jednocze&#347;nie inspiruj&#261; jednodniowych wycieczkowiczów i mieszka&#324;ców spragnionych wypoczynku, którzy maj&#261; zami&#322;owanie do przyrody.</p>");
//13
L.marker([51.76131, 14.41381], {icon: redIcon}).addTo(map).bindPopup("<p><strong>13. Schlichow | &Scaron;lichow<br /></strong></p><p>Schlichow znajduje si&#281; bezpo&#347;rednio nad przysz&#322;ym Cottbuser Ostsee. Powstaj&#261; tu dodatkowe obszary mieszkalne poprzez zaokr&#261;glenie i zag&#281;szczenie. Projektuj&#261;c plac nad nawisem jako &#322;&#261;cznik pomi&#281;dzy osad&#261; a pomostem nad jeziorem, powstaje nowe centrum miasta. Wzd&#322;u&#380; placu zaplanowano budynek wielofunkcyjny, punkt wypoczynkowo-us&#322;ugowy dla rowerzystóworaz stacj&#281; &#322;adowania e-rowerów. Zapora d&#378;wi&#281;koch&#322;onna, która z powodu zamkni&#281;cia budynku odkrywkowego sta&#322;a si&#281; przestarza&#322;a, ma zosta&#263; przeprojektowana w oparciu o odpowiednie koncepcje.</p>");
//14
L.marker([51.75772, 14.42844], {icon: redIcon}).addTo(map).bindPopup("<p><strong>14. Schlichow Po&#322;udnie | &Scaron;lichow P&oacute;dpo&lstrok;dnjowy<br /></strong></p><p>Ze wzgl&#281;du na jako&#347;&#263; lokalizacji na po&#322;udniowy wschód od Schlichow ma powsta&#263; niewielki, ale fajny o&#347;rodek wypoczynkowy dla sportu i wellness. Do pomy&#347;lenia jest równie&#380; hotelowa pla&#380;a i ma&#322;y pomost. Pla&#380;a jest dost&#281;pna dla pieszych i rowerzystów. Nie b&#281;dzie tu jednak &#322;odzi sportowych i pochylni, poniewa&#380; s&#261; one przeznaczone tylko dla dwóch portów na jeziorze.</p>");
//15
L.marker([51.76935, 14.40325], {icon: redIcon}).addTo(map).bindPopup("<p><strong>15. Pla&#380;a Cottbus | Ch&oacute;&sacute;ebuski p&sacute;ibrjog<br /></strong></p><p>Pomi&#281;dzy portem miejskim a Schlichow powstaje g&#322;ówna pla&#380;a jeziora o regionalnym charakterze i b&#281;dzie mia&#322;a oko&#322;o 18 hektarów. Oprócz k&#261;pieliska i obiektów sportowych wysok&#261; jako&#347;&#263; pobytu zapewniaj&#261; miejsca do siedzenia, zaplecze socjalne, szatnie, zaplecze sanitarne oraz wynajem le&#380;aków, parasoli i &#322;ódek. Na pla&#380;&#281; mo&#380;na &#322;atwo dotrze&#263; pieszo, rowerem, na &#322;y&#380;wach oraz drog&#261; B168 komunikacj&#261; miejsk&#261; i samochodem. Zapotrzebowanie na budow&#281; neutraln&#261; pod wzgl&#281;dem emisji CO2 i eksploatacj&#281; oszcz&#281;dzaj&#261;c&#261; zasoby istnieje zarówno dla planowanych zastosowa&#324;, jak i dla s&#261;siedniej dzielnicy portowej.</p>");
//16
L.marker([51.74297, 14.36965], {icon: redIcon}).addTo(map).bindPopup("<p><strong>16. Park zamkowy Branitz | Grodowy park Roge&nacute;c<br /></strong></p><p>Krajobraz wokó&#322; Schlichower Höhe ma by&#263; po&#322;&#261;czony z parkiem Branitz i krajobrazem kulturowym w zakresie projektowania krajobrazu. Sercem tego po&#322;&#261;czenia jest historyczna Kastanienallee, niegdy&#347; dworskie podej&#347;cie do zamku i parku Branitz, jako &#347;cie&#380;ka dla pieszych i rowerzystów. Temat projektowania krajobrazu ma by&#263; wykorzystany jako atrakcja dla Cottbuser Ostsee. Park Branitz to historyczny krajobraz kulturowy, a Cottbuser Ostsee jego nowoczesna interpretacja.</p>");
//17
L.marker([51.76085, 14.462], {icon: redIcon}).addTo(map).bindPopup("<p><strong>17. Okr&#281;&#380;ny szlak | Woko&lstrok;ny pu&sacute;<br /></strong></p><img src='./img/17_rundweg.jpg'/><p>Wokó&#322; Cottbuser Ostsee znajduje si&#281; 27-kilometrowa trasa okr&#281;&#380;na zarezerwowana dla turystów pieszych, rowerzystów, &#322;y&#380;wiarzy i biegaczy. „Okr&#281;&#380;na trasa Cottbuser Ostsee” zostanie zintegrowana z brandenbursk&#261; sieci&#261; rowerow&#261; i istniej&#261;cymi regionalnymi &#347;cie&#380;kami rowerowymi. &#346;cie&#380;ka &#322;&#261;czy poszczególne lokalizacje, projekty, pla&#380;e i hotele nad Cottbuser Ostsee. Znaczenie trasy okr&#281;&#380;nej nale&#380;y do&#347;wiadczy&#263; poprzez bardzo atrakcyjny projekt planowania krajobrazu, zarówno w meblach (np. &#322;awki, tablice informacyjne na postojach itp.), jak i w projekcie powierzchni.</p>");
//18
L.marker([51.7752, 14.44389], {icon: redIcon}).addTo(map).bindPopup("<p><strong>18. Zatoka Lieskow | Li&scaron;kojski zalew<br /></strong></p><p>Bogaty w zatoki wschodni brzeg Cottbuser Ostsee z przybrze&#380;nymi wyspami i pó&#322;wyspami jest zarezerwowany dla naturalnego, chronionego rozwoju flory i fauny. W tym miejscu ma by&#263; promowane stworzenie ptasiej wyspy z mostem widokowym.</p>");
//19
L.marker([51.74677, 14.45994], {icon: redIcon}).addTo(map).bindPopup("<p><strong>19. &#346;cie&#380;ka rowerowa jeziora | Jazorowy k&oacute;lasa&racute;ski pu&sacute;<br /></strong></p><p>Przeniesienie &#347;cie&#380;ki rowerowej Fürst-Pückler ma po&#322;&#261;czy&#263; Cottbuser Ostsee z Jeziorem Klinge i w ten sposób sprawi&#263;, &#380;e nowo powsta&#322;y krajobraz jeziorny b&#281;dzie dost&#281;pny dla aktywnej, naturalnej i neutralnej pod wzgl&#281;dem emisji CO2 turystyki rowerowej i pieszej. W tym celu planowane s&#261; samodzielne przejazdy B97 i trasa dawnej kolei kopalnianej.</p>");
//20
L.marker([51.78125, 14.42406], {icon: redIcon}).addTo(map).bindPopup("<p><strong>20. Znak nawigacyjny | Jazorowy znamje<br /></strong></p><p>P&#322;ywaj&#261;cy punkt orientacyjny powinien sta&#263; si&#281; zarówno elementem przyci&#261;gaj&#261;cym wzrok i no&#347;nikiem obrazu, jak i widocznym znakiem zmian strukturalnych. Lokalizacja wyznacza równie&#380; &#347;rodek Cottbuser Ostsee. W BTU Cottbus-Senftenberg odby&#322; si&#281; konkurs studencki na generowanie pomys&#322;ów. Najlepsze pomys&#322;y projektowe zostan&#261; uwzgl&#281;dnione w dalszym planowaniu Cottbuser Ostsee przez administracj&#281; miasta Cottbus/Chó&#347;ebuz i Ostsee-Management, a realizacja zostanie przeanalizowana.</p>");
//21
L.marker([51.76595, 14.40668], {icon: redIcon}).addTo(map).bindPopup("<p><strong>21. Sportowy-Trójk&#261;t Cottbuser Ostsee | Sportowy t&sacute;iro&zcaron;k Ch&oacute;&sacute;ebuski p&oacute;dzajt&scaron;ny jazor</strong></p><p>W ramach realizacji projektu rozwoju strukturalnego „Centrum imprez i szkole&#324; BMX w parku sportowo-rekreacyjnym Cottbuser Ostsee” w po&#322;udniowej cz&#281;&#347;ci Cottbuser Ostsee na wysoko&#347;ci Dzielnica Dissenchen i nowopowsta&#322;a umo&#380;liwiaj&#261; poznanie zagospodarowanej przestrzeni miejskiej nad wod&#261;. Do pomy&#347;lenia jest park zewn&#281;trzny z obiektami sportowymi na l&#261;dzie i mniejszymi obiektami (toaleta, administracja, kawiarnia) jako wtórne wykorzystanie. „Trójk&#261;t sportowy” sk&#322;adaj&#261;cy si&#281; z portu miejskiego, centrum BMX/parku sportowo-rekreacyjnego oraz parku sportowego na &#347;wie&#380;ym powietrzu oferuje szerok&#261; gam&#281; ofert dla sportów najwy&#380;szej klasy, rekreacji, masowych i klubowych.</p>");
//22
L.marker([51.75496, 14.39642], {icon: redIcon}).addTo(map).bindPopup("<p><strong>22. BUGA 2033 - Wizja | BUGA 2033 - wizija</strong></p><img src='./img/22_buga.jpg'/><p>Cztery i pó&#322; roku po zjednoczeniu Niemiec w Cottbus/Chó&#347;ebuz odby&#322;a si&#281; pierwsza federalna wystawa ogrodnicza w nowych krajach zwi&#261;zkowych. Prawie cztery dekady pó&#378;niej Cottbus/Chó&#347;ebuz ponownie chce by&#263; gospodarzem i prezentowa&#263; zrównowa&#380;ony rozwój centrum dawnego regionu górnictwa odkrywkowego odwiedzaj&#261;cym z Niemiec i Europy. Nigdy nie by&#322;o koncepcji BUGA, która opowiada&#322;aby bogat&#261; histori&#281; miasta i regionu: Pomi&#281;dzy centrum miasta, Branitzer Park i Cottbuser Ostsee, ró&#380;norodne tereny przygody i szlaki turystyczne maj&#261; na celu umo&#380;liwienie do&#347;wiadczenia historii kultury w sieci relacji mi&#281;dzy natur&#261;, technologi&#261;, gospodark&#261;, spo&#322;ecze&#324;stwem, wydobyciem w&#281;gla, produkcj&#261; energii, niszczenie krajobrazu i utrata naturalnych podstaw &#380;ycia, a tak&#380;e poszukiwanie to&#380;samo&#347;ci przez ludzi.</p>");
