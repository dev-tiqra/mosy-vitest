import { describe, expect, test } from 'vitest';
import { xmlToJson } from '../src/xml-to-json';

describe('xml to json', () => {
  test('convert', async () => {
    var xml = `
    <env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">
   <env:Header/>
   <env:Body>
      <n0:ZCesdapWsUepIntResponse xmlns:n0="urn:sap-com:document:sap:soap:functions:mc-style">
         <Response>
            <Hlavicka>
               <PrekrocenyLimit/>
               <ChybaTyp>W</ChybaTyp>
               <ChybaKod>012</ChybaKod>
               <ChybaText>Priestupky z USEP sa nepodarilo načítať: Zadané údaje o osobe nie sú z test. vzorky, načítanie údajov nie je možné</ChybaText>
            </Hlavicka>
            <Priestupky>
               <item>
                  <Priestupca>
                     <TypSubjektu>F</TypSubjektu>
                     <Mladistvy>X</Mladistvy>
                     <Nepricetny/>
                     <BuPartnerId/>
                     <SubjektFo>
                        <PRfoId>42612301</PRfoId>
                        <PRodneCislo>7351310000</PRodneCislo>
                        <PTitulPred/>
                        <PTitulZa/>
                        <PMeno>Jana</PMeno>
                        <PPriezvisko>Tkáčiková</PPriezvisko>
                        <PDatumNarodenia>1973-01-31</PDatumNarodenia>
                        <PStatnaPrislusnost>SK</PStatnaPrislusnost>
                        <PStatnaPrislusnostT>Slovensko</PStatnaPrislusnostT>
                        <Doklad>
                           <PDokladTyp/>
                           <PDokladTypT>Neuvedené</PDokladTypT>
                           <PDokladCislo>SP 010854</PDokladCislo>
                           <PDokladMeno/>
                           <PDokladPriezvisko/>
                        </Doklad>
                     </SubjektFo>
                     <SubjektPo>
                        <PoRpoId/>
                        <PoIco/>
                        <PoPravnaForma/>
                        <PoPravnaFormaT/>
                        <PoPravnaFormaT2/>
                        <PoTypPo/>
                        <PoTypPoT/>
                        <PoObchodneMeno/>
                     </SubjektPo>
                     <Adresa>
                        <PUlica>Továrenská</PUlica>
                        <PCisloPopisne/>
                        <PCisloOrientacne>3</PCisloOrientacne>
                        <PObecKod/>
                        <PObecNazov>Malacky</PObecNazov>
                        <PPsc>90101</PPsc>
                        <PStatKod>SK</PStatKod>
                        <PStatNazov>Slovensko</PStatNazov>
                     </Adresa>
                  </Priestupca>
                  <Delikt>
                     <IdPriestupku>00000000825148</IdPriestupku>
                     <TypEvidencie/>
                     <TypEvidencieT/>
                     <TypDeliktu>P</TypDeliktu>
                     <TypDeliktuT>Priestupok</TypDeliktuT>
                     <Agenda>-</Agenda>
                     <AgendaT>Všeobecný priestupok (v gescii MVSR)</AgendaT>
                     <Stav>9PRAV</Stav>
                     <StavT/>
                     <VstupnyKanal>M</VstupnyKanal>
                     <VstupnyKanalT>Migrácia</VstupnyKanalT>
                     <UdalostOs>AAAAAAAAAAAAAAAAAAAAAA==</UdalostOs>
                     <UdalostOsT/>
                     <TypSluzCinnosti/>
                     <TypSluzCinnostiT/>
                     <PolicajnaAkcia/>
                     <PolicajnaAkciaT/>
                     <DatumOd>2013-06-10</DatumOd>
                     <DatumDo>0000-00-00</DatumDo>
                     <CasOd>05:58:00</CasOd>
                     <CasDo>00:00:00</CasDo>
                     <DatumCasNejasny/>
                     <ZavaznyPriestupok/>
                     <StrucnyPopis>V13 - Šikmé čiary</StrucnyPopis>
                     <PopisPriestupku>V13 - Šikmé čiary</PopisPriestupku>
                     <Umiestnenie>
                        <VCudzine/>
                        <ObecKod/>
                        <ObecNazov/>
                        <OkresKod/>
                        <OkresNazov/>
                        <KrajKod/>
                        <KrajNazov/>
                        <TypPopisuMiesta/>
                        <MiestoSpachania/>
                        <Ulica/>
                        <CisloPopisne/>
                        <CisloOrientacne/>
                        <Psc/>
                        <ZemepisnaSirka>0.0</ZemepisnaSirka>
                        <ZemepisnaDlzka>0.0</ZemepisnaDlzka>
                     </Umiestnenie>
                     <Konanie>
                        <VybavenieKod/>
                        <VybavenieText/>
                        <SankciaKod>000</SankciaKod>
                        <SankciaText/>
                        <VyskaPokuty>0.0</VyskaPokuty>
                        <Mena/>
                        <TrvanieSankcie>0</TrvanieSankcie>
                        <DatumZacatiaKonania>0000-00-00</DatumZacatiaKonania>
                        <DatumUkoncenia>2013-09-07</DatumUkoncenia>
                        <SpisoveCislo/>
                        <PokutoveBloky/>
                        <SpravnyOrganId>00000000</SpravnyOrganId>
                        <SpravnyOrganNazov>Mestská polícia Malacky</SpravnyOrganNazov>
                        <SpravnyOrganAdresa/>
                        <VybavujeOC>00000000</VybavujeOC>
                        <VybavujeMeno/>
                        <ReferentOC>00000000</ReferentOC>
                        <ReferentMeno>ws_malacky_cora</ReferentMeno>
                        <NadriadenyOC>00000000</NadriadenyOC>
                        <NadriadenyMeno/>
                     </Konanie>
                     <Porusenia>
                        <item>
                           <Zakon/>
                           <Paragraf/>
                           <Odstavec/>
                           <Pismeno/>
                           <Bod/>
                           <PorusenieZakona>Zákona SNR č. 372/90 Zb. o priestupkoch v znení neskorších noviel, proti bezpečnosti a plynulosti cestnej premávky, § 22</PorusenieZakona>
                        </item>
                     </Porusenia>
                     <Sankcie/>
                     <Pohladavky/>
                     <AgendovoSpecificke/>
                     <Sport>
                        <SportDruh/>
                        <SportDruhT/>
                        <SportKlub>0000000000</SportKlub>
                        <SportKlubT/>
                        <SportCharakteristiky/>
                        <SportPopisOsoby/>
                     </Sport>
                     <Zeleznica>
                        <ZelTypLokality/>
                        <ZelTypLokalityT/>
                     </Zeleznica>
                  </Delikt>
                  <SpecifickePolia/>
               </item>
            </Priestupky>
         </Response>
      </n0:ZCesdapWsUepIntResponse>
   </env:Body>
</env:Envelope>
    `;
    var result = await xmlToJson(xml);

    expect(result).toMatchSnapshot();
  });

  // it('bar', () => {
  //   expect(1 + 1).eq(2)
  // })

  // it('snapshot', () => {
  //   expect({ foo: 'bar' }).toMatchSnapshot()
  // })
});
