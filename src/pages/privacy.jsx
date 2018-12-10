import React, { Component } from 'react';
import Link from 'gatsby-link';
import { ContentContainer, Container } from '../components/styled/Layout';
import { Toolbar, SectionHeader, PrimaryButtonInvert, BackgroundTile } from '../components/styled/Base';

export default class Privacy extends Component {
  render() {
    return (
      <ContentContainer>
        <Toolbar>
          <Link to="/">
            <PrimaryButtonInvert>Zurück</PrimaryButtonInvert>
          </Link>
        </Toolbar>
        <SectionHeader>DATENSCHUTZ</SectionHeader>
        <Container className="container-fluid">
          <BackgroundTile>
            <h3>Sicherheit und Schutz Ihrer personenbezogenen Daten</h3>
            <p>
              Wir betrachten es als unsere vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten
              personenbezogenen Daten zu wahren und diese vor unbefugten Zugriffen zu schützen. Deshalb wenden wir
              äußerste Sorgfalt und modernste Sicherheitsstandards an, um einen maximalen Schutz Ihrer personenbezogenen
              Daten zu gewährleisten.
            </p>

            <p>
              Als privatrechtliches Unternehmen unterliegen wir den Bestimmungen der europäischen
              Datenschutzgrundverordnung (DSGVO) und den Regelungen des Bundesdatenschutzgesetzes (BDSG). Wir haben
              technische und organisatorische Maßnahmen getroffen, die sicherstellen, dass die Vorschriften über den
              Datenschutz sowohl von uns, als auch von unseren externen Dienstleistern beachtet werden.
            </p>
            <br />
            <h3>Begriffsbestimmungen</h3>
            <p>
              Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und in
              einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, Verarbeitung
              nach Treu und Glauben, Transparenz“). Um dies zu gewährleisten, informieren wir Sie über die einzelnen
              gesetzlichen Begriffsbestimmungen, die auch in dieser Datenschutzerklärung verwendet werden:
            </p>
            <ul>
              <li>
                <b>Personenbezogene Daten</b>
                <br />
                <p>
                  „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder
                  identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar
                  wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu
                  einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu
                  einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
                  physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
                  dieser natürlichen Person sind.
                </p>
              </li>
              <li>
                <b>Verarbeitung</b>
                <br />
                <p>
                  „Verarbeitung“ ist jeder, mit oder ohne Hilfe automatisierter Verfahren, ausgeführter Vorgang oder
                  jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen,
                  die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
                  Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der
                  Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die
                  Vernichtung.
                </p>
              </li>
              <li>
                <b>Einschränkung der Verarbeitung</b>
                <br />
                <p>
                  „Einschränkung der Verarbeitung“ ist die Markierung gespeicherter personenbezogener Daten mit dem
                  Ziel, ihre künftige Verarbeitung einzuschränken.
                </p>
              </li>
              <li>
                <b>Profiling</b>
                <br />
                <p>
                  „Profiling“ ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht,
                  dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf
                  eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung,
                  wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
                  Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.
                </p>
              </li>
              <li>
                <b>Pseudonymisierung</b>
                <br />
                <p>
                  „Pseudonymisierung“ ist die Verarbeitung personenbezogener Daten in einer Weise, dass die
                  personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen
                  betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert
                  aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass
                  die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person
                  zugewiesen werden können.
                </p>
              </li>
              <li>
                <b>Dateisystem</b>
                <br />
                <p>
                  „Dateisystem“ ist jede strukturierte Sammlung personenbezogener Daten, die nach bestimmten Kriterien
                  zugänglich sind, unabhängig davon, ob diese Sammlung zentral, dezentral oder nach funktionalen oder
                  geografischen Gesichtspunkten geordnet geführt wird.
                </p>
              </li>
              <li>
                <b>Verantwortlicher</b>
                <br />
                <p>
                  „Verantwortlicher“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere
                  Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das
                  Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so können der Verantwortliche
                  beziehungsweise die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der
                  Mitgliedstaaten vorgesehen werden.
                </p>
              </li>
              <li>
                <b>Auftragsverarbeiter</b>
                <br />
                <p>
                  „Auftragsverarbeiter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere
                  Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                </p>
              </li>
              <li>
                <b>Empfänger</b>
                <br />
                <p>
                  „Empfänger“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle,
                  denen personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten
                  handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem
                  Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten
                  jedoch nicht als Empfänger; die Verarbeitung dieser Daten durch die genannten Behörden erfolgt im
                  Einklang mit den geltenden Datenschutzvorschriften gemäß den Zwecken der Verarbeitung.
                </p>
              </li>
              <li>
                <b>Dritter</b>
                <br />
                <p>
                  „Dritter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, außer
                  der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der
                  unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die
                  personenbezogenen Daten zu verarbeiten.
                </p>
              </li>
              <li>
                <b>Einwilligung</b>
                <br />
                <p>
                  Eine „Einwilligung“ der betroffenen Person ist jede freiwillig für den bestimmten Fall, in
                  informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder
                  einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt,
                  dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
                </p>
              </li>
            </ul>
            <br />
            <h3>Rechtmäßigkeit der Verarbeitung</h3>
            <p>
              Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine
              Rechtsgrundlage besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a – f
              DSGVO insbesondere sein:
            </p>
            <ul>
              <li>
                Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen
                Daten für einen oder mehrere bestimmte Zwecke gegeben;
              </li>
              <li>
                die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
                oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person
                erfolgen;
              </li>
              <li>
                die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche
                unterliegt;
              </li>
              <li>
                die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer
                anderen natürlichen Person zu schützen;
              </li>
              <li>
                die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt
                oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;
              </li>
              <li>
                die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten
                erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person,
                die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der
                betroffenen Person um ein Kind handelt.
              </li>
            </ul>
            <br />
            <h3>Einsatz von Cookies</h3>
            <ul>
              <li>
                Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem Rechner
                gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen
                verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die den Cookie setzt,
                bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihren
                Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu
                machen.
              </li>
              <li>
                Diese Website nutzt folgende Arten von Cookies, deren Umfang und Funktionsweise im Folgenden erläutert
                werden:
                <ul>
                  <li>Transiente Cookies (dazu a.)</li>
                  <li>Persistente Cookies (dazu b.).</li>
                </ul>
                <ol type="a">
                  <li>
                    Transiente Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen. Dazu zählen
                    insbesondere die Session-Cookies. Diese speichern eine sogenannte Session-ID, mit welcher sich
                    verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Dadurch kann Ihr
                    Rechner wiedererkannt werden, wenn Sie auf unsere Website zurückkehren. Die Session-Cookies werden
                    gelöscht, wenn Sie sich ausloggen oder den Browser schließen.
                  </li>
                  <li>
                    Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach
                    Cookie unterscheiden kann. Sie können die Cookies in den Sicherheitseinstellungen Ihres Browsers
                    jederzeit löschen.
                  </li>
                  <li>
                    Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen konfigurieren und z.&thinsp;B. die
                    Annahme von Third-Party-Cookies oder allen Cookies ablehnen. Sog. „Third Party Cookies“ sind
                    Cookies, die durch einen Dritten gesetzt wurden, folglich nicht durch die eigentliche Website auf
                    der man sich gerade befindet. Wir weisen Sie darauf hin, dass Sie durch die Deaktivierung von
                    Cookies eventuell nicht alle Funktionen dieser Website nutzen können.
                  </li>
                  <li>
                    Wir setzen Cookies ein, um Sie für Folgebesuche identifizieren zu können, falls Sie über einen
                    Account bei uns verfügen. Andernfalls müssten Sie sich für jeden Besuch erneut einloggen.
                  </li>
                </ol>
              </li>
            </ul>
            <br />
            <h3>Kinder</h3>
            <p>
              Unser Angebot richtet sich grundsätzlich an Erwachsene. Personen unter 18 Jahren sollten ohne Zustimmung
              der Eltern oder Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.
            </p>
            <br />
            <h3>Rechte der betroffenen Person</h3>
            <ul>
              <li>
                <b>Widerruf der Einwilligung</b>
                <br />
                <p>
                  Sofern die Verarbeitung der personenbezogenen Daten auf einer erteilten Einwilligung beruht, haben Sie
                  jederzeit das Recht, die Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung wird die
                  Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </p>
                <p>Für die Ausübung des Widerrufsrechts können Sie sich jederzeit an uns wenden.</p>
              </li>
              <li>
                <b>Recht auf Bestätigung</b>
                <br />
                <p>
                  Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob wir sie
                  betreffende personenbezogene Daten verarbeiten. Die Bestätigung können Sie jederzeit unter den oben
                  genannten Kontaktdaten verlangen.
                </p>
              </li>
              <li>
                <b>Auskunftsrecht</b>
                <br />
                <p>
                  Sofern personenbezogene Daten verarbeitet werden, können Sie jederzeit Auskunft über diese
                  personenbezogenen Daten und über folgenden Informationen verlangen:
                </p>
                <ol type="a">
                  <li>die Verarbeitungszwecke;</li>
                  <li>den Kategorien personenbezogener Daten, die verarbeitet werden;</li>
                  <li>
                    die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten
                    offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern
                    oder bei internationalen Organisationen;
                  </li>
                  <li>
                    falls möglich, die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder,
                    falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;
                  </li>
                  <li>
                    das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen
                    Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines
                    Widerspruchsrechts gegen diese Verarbeitung;
                  </li>
                  <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                  <li>
                    wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren
                    Informationen über die Herkunft der Daten;
                  </li>
                  <li>
                    das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22
                    Absätze 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die
                    involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen
                    Verarbeitung für die betroffene Person.
                  </li>
                </ol>
                <p>
                  Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt,
                  so haben Sie das Recht, über die geeigneten Garantien gemäß Artikel 46 DSGVO im Zusammenhang mit der
                  Übermittlung unterrichtet zu werden. Wir stellen eine Kopie der personenbezogenen Daten, die
                  Gegenstand der Verarbeitung sind, zur Verfügung. Für alle weiteren Kopien, die Sie Person beantragen,
                  können wir ein angemessenes Entgelt auf der Grundlage der Verwaltungskosten verlangen. Stellen Sie den
                  Antrag elektronisch, so sind die Informationen in einem gängigen elektronischen Format zur Verfügung
                  zu stellen, sofern er nichts anderes angibt. Das Recht auf Erhalt einer Kopie gemäß Absatz 3 darf die
                  Rechte und Freiheiten anderer Personen nicht beeinträchtigen.
                </p>
              </li>
              <li>
                <b>Recht auf Berichtigung</b>
                <br />
                <p>
                  Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger
                  personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das
                  Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden
                  Erklärung – zu verlangen.
                </p>
              </li>
              <li>
                <b>Recht auf Löschung („Recht auf vergessen werden“)</b>
                <br />
                <p>
                  Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene
                  Daten unverzüglich gelöscht werden, und wir sind verpflichtet, personenbezogene Daten unverzüglich zu
                  löschen, sofern einer der folgenden Gründe zutrifft:
                </p>
                <ol type="a">
                  <li>
                    Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise
                    verarbeitet wurden, nicht mehr notwendig.
                  </li>
                  <li>
                    Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6
                    Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer
                    anderweitigen Rechtsgrundlage für die Verarbeitung.
                  </li>
                  <li>
                    Die betroffene Person legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein
                    und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene
                    Person legt gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.
                  </li>
                  <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                  <li>
                    Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem
                    Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
                  </li>
                  <li>
                    Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft
                    gemäß Artikel 8 Absatz 1 DSGVO erhoben.
                  </li>
                </ol>

                <p>
                  Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß Absatz 1 zu
                  deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der
                  Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung
                  Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine
                  betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien
                  oder Replikationen dieser personenbezogenen Daten verlangt hat.
                </p>
                <p>
                  Das Recht auf Löschung („Recht auf vergessen werden“) besteht nicht, soweit die Verarbeitung
                  erforderlich ist:
                </p>
                <ul>
                  <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                  <li>
                    zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder
                    der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer
                    Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem
                    Verantwortlichen übertragen wurde;
                  </li>
                  <li>
                    aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9
                    Absatz 2 Buchstaben h und i sowie Artikel 9 Absatz 3 DSGVO;
                  </li>
                  <li>
                    für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische
                    Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1 DSGVO, soweit das in Absatz
                    1 genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht
                    oder ernsthaft beeinträchtigt, oder
                  </li>
                  <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                </ul>
              </li>
              <li>
                <b>Recht auf Einschränkung der Verarbeitung</b>
                <br />
                <p>
                  Sie haben das Recht, von uns die Einschränkung der Verarbeitung ihrer personenbezogenen Daten zu
                  verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
                </p>
                <ol>
                  <li>
                    die Richtigkeit der personenbezogenen Daten von der betroffenen Person bestritten wird, und zwar für
                    eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu
                    überprüfen,
                  </li>
                  <li>
                    die Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung der personenbezogenen Daten
                    ablehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt;
                  </li>
                  <li>
                    der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger
                    benötigt, die betroffene Person sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen benötigt, oder
                  </li>
                  <li>
                    die betroffene Person Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt
                    hat, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen
                    der betroffenen Person überwiegen.
                  </li>
                </ol>
                <p>
                  Wurde die Verarbeitung gemäß den oben genannten Voraussetzungen eingeschränkt, so werden diese
                  personenbezogenen Daten – von ihrer Speicherung abgesehen – nur mit Einwilligung der betroffenen
                  Person oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
                  Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen
                  öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet.
                </p>
                <p>
                  Um das Recht auf Einschränkung der Verarbeitung geltend zu machen, kann sich die betroffene Person
                  jederzeit an uns unter den oben angegebenen Kontaktdaten wenden.
                </p>
              </li>
              <li>
                <b>Recht auf Datenübertragbarkeit</b>
                <br />
                <p>
                  Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben,
                  in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht,
                  diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die
                  personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern:
                </p>
                <ol>
                  <li>
                    die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2
                    Buchstabe a oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und
                  </li>
                  <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
                </ol>
                <p>
                  Bei der Ausübung des Rechts auf Datenübertragbarkeit gemäß Absatz 1 haben Sie das Recht, zu erwirken,
                  dass die personenbezogenen Daten direkt von einem Verantwortlichen zu einem anderen Verantwortlichen
                  übermittelt werden, soweit dies technisch machbar ist. Die Ausübung des Rechts auf
                  Datenübertragbarkeit lässt das Recht auf Löschung („Recht auf Vergessen werden“) unberührt. Dieses
                  Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im
                  öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen
                  übertragen wurde.
                </p>
              </li>
              <li>
                <b>Widerspruchsrecht</b>
                <br />
                <p>
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                  Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben
                  e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen
                  gestütztes Profiling. Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei
                  denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen,
                  Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der
                  Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                </p>

                <p>
                  Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben SIe das Recht,
                  jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
                  derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung
                  in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die
                  personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
                </p>
                <p>
                  Im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft könne Sie ungeachtet der
                  Richtlinie 2002/58/EG Ihr Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen
                  technische Spezifikationen verwendet werden.
                </p>
                <p>
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Sie
                  betreffende Verarbeitung Sie betreffender personenbezogener Daten, die zu wissenschaftlichen oder
                  historischen Forschungszwecken oder zu statistischen Zwecken gemäß Artikel 89 Absatz 1 erfolgt,
                  Widerspruch einzulegen, es sei denn, die Verarbeitung ist zur Erfüllung einer im öffentlichen
                  Interesse liegenden Aufgabe erforderlich.
                </p>
                <p>
                  Das Widerspruchsrecht können Sie jederzeit ausüben, indem Sie sich an den jeweiligen Verantwortlichen
                  wenden.
                </p>
              </li>
              <li>
                <b>Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</b>
                <br />
                <p>
                  Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung –
                  einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber
                  rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht,
                  wenn die Entscheidung:
                </p>
                <ol>
                  <li>
                    für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem
                    Verantwortlichen erforderlich ist,
                  </li>
                  <li>
                    aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche
                    unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte
                    und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder
                  </li>
                  <li>mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</li>
                </ol>
                <p>
                  Der Verantwortliche trifft angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten
                  Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens
                  einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung
                  der Entscheidung gehört.
                </p>
                <p>
                  Dieses Recht kann die betroffene Person jederzeit ausüben, indem sie sich an den jeweiligen
                  Verantwortlichen wendet.
                </p>
              </li>
              <li>
                <b>Recht auf Beschwerde bei einer Aufsichtsbehörde</b>
                <br />
                <p>
                  Sie haben zudem, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
                  Rechtsbehelfs, das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                  ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn die
                  betroffene Person der Ansicht ist, dass die Verarbeitung der sie betreffenden personenbezogenen Daten
                  gegen diese Verordnung verstößt.
                </p>
              </li>
              <li>
                <b>Recht auf wirksamen gerichtlichen Rechtsbehelf</b>
                <br />
                <p>
                  Sie haben unbeschadet eines verfügbaren verwaltungsrechtlichen oder außergerichtlichen Rechtsbehelfs
                  einschließlich des Rechts auf Beschwerde bei einer Aufsichtsbehörde gemäß Artikel 77 DSGVO das Recht
                  auf einen wirksamen gerichtlichen Rechtsbehelf, wenn sie der Ansicht ist, dass die ihr aufgrund dieser
                  Verordnung zustehenden Rechte infolge einer nicht im Einklang mit dieser Verordnung stehenden
                  Verarbeitung ihrer personenbezogenen Daten verletzt wurden.
                </p>
              </li>
            </ul>
            <br />
            <h3>Einbindung von Google Maps</h3>
            <ul>
              <li>
                Auf dieser Website nutzen wir das Angebot von Google Maps. Dadurch können wir Ihnen interaktive Karten
                direkt in der Website anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.
              </li>
              <li>
                Durch den Besuch auf der Website erhält Google die Information, dass Sie die entsprechende Unterseite
                unserer Website aufgerufen haben. Zudem werden die unter § 3 dieser Erklärung genannten Daten
                übermittelt. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie
                eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre
                Daten direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht wünschen,
                müssen Sie sich vor Aktivierung des Buttons ausloggen. Google speichert Ihre Daten als Nutzungsprofile
                und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechten Gestaltung seiner
                Website. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur
                Erbringung von bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre
                Aktivitäten auf unserer Website zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung
                dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google richten müssen.
              </li>
              <li>
                Weitere Informationen zu Zweck und Umfang der Datenerhebung und ihrer Verarbeitung durch den
                Plug-in-Anbieter erhalten Sie in den Datenschutzerklärungen des Anbieters. Dort erhalten Sie auch
                weitere Informationen zu Ihren diesbezüglichen Rechten und Einstellungsmöglichkeiten zum Schutze Ihrer{' '}
                <a href="http://www.google.de/intl/de/policies/privacy" target="_blank" rel="no-follow">
                  Privatsphäre
                </a>
                . Google verarbeitet Ihre personenbezogenen Daten auch in den USA und hat sich dem{' '}
                <a href="https://www.privacyshield.gov/EU-US-Framework" target="_blank" rel="no-follow">
                  EU-US Privacy Shield
                </a>{' '}
                unterworfen.
              </li>
            </ul>
          </BackgroundTile>
        </Container>
      </ContentContainer>
    );
  }
}
