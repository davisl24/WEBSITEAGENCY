# Imantas — Coastal Editorial demo

**Statuss:** GitHub izolētais zars `feature/imantas-demo`. Nav mainīta Kestrel produkcijas lapa. Maršruts: `/demo/imantas`.

## Mērķis
Klienta jau apstiprinātai 10 minūšu demo sarunai parādīt: nakšņošanas veida izvēli → piedāvājuma izpratni → pieprasījuma sagatavošanu.

## Sadaļas
1. Hero ar skaidru vērtību un autentisku Imantas foto
2. Trīs svarīgi fakti, ne dekoratīvi reklāmas skaitļi
3. Vasaras dzīvokļi (5 dzīvokļi divās ēkās) un pirtsmāja (līdz 6 viesiem)
4. Bišu pieredze (bez medicīniskiem solījumiem)
5. Trīs autentiskas publisko sludinājumu fotogrāfijas
6. Pieprasījuma forma: tikai atver aizpildītu `mailto:`; **nekas netiek nosūtīts automātiski**
7. Atrašanās vieta un reāli kontaktu ceļi

## Faktiskie avoti
- https://viesunamiem.lv/lv/imantas-brivdienu-maja/atsauksmes/jaunakas
- https://www.visitlimbazi.lv/lv/naktsmitnes
- https://www.booking.com/hotel/lv/pernavas-street-apartment-salacgriva.lv.html
- https://www.booking.com/hotel/lv/imantas-gulbalku-namins-ar-pirti.lv.html

Publiski norādītie kontakti: `+371 29435752`, `avei6@inbox.lv`.
Avota apraksti var mainīties. Cenas nav rādītas, kamēr saimnieki tās neapstiprina.

## Foto un atļaujas
Izmantotas tikai no `Imantas` konkrētajiem publiskajiem Booking.com profiliem identificētas fotogrāfijas ar ārēju URL (ne kopijas repozitorijā). **Nav apstiprinātas fotogrāfiju izmantošanas tiesības**, tāpēc priekšskatījumu nedrīkst pasniegt kā publicētu oficiālo īpašuma lapu vai izmantot komerciālai publicēšanai bez īpašnieka saskaņojuma. Pirms oficiālas palaišanas jāaizvieto ar klienta oriģinālfoto. Ja avota hotlink bloķē attēlu, jāiegūst atļauts lokālais foto.

## Neietilpst demo
- Tiešsaistes pieejamības kalendārs vai rezervāciju datubāze
- Reāla automātiska e-pastu nosūtīšana
- Apstiprināta galerijas pilnā komplektācija
- Cena, maksājumi, klientu atsauksmes
- Publicēšanas tiesības un pilns production QA

## QA kontrolsaraksts
- [ ] `npm run build` pārbaudīts ārpus GitHub connector (pašreiz nav apstiprināts)
- [ ] Pārbaudīts desktop renderējums, 1440 px
- [ ] Pārbaudīts mobile renderējums, 390 px
- [ ] Pārbaudītas saites, formā datumu validācija, ievades lauki un `mailto:`
- [ ] Saimnieks apstiprinājis foto, cenas/piedāvājuma saturu
