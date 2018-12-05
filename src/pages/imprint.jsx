import React, { Component } from 'react';
import Link from 'gatsby-link';
import { ContentContainer, Container } from '../components/styled/Layout';
import { Toolbar, SectionHeader, PrimaryButtonInvert, BackgroundTile } from '../components/styled/Base';

export default class Imprint extends Component {
  render() {
    return (
      <ContentContainer>
        <Toolbar>
          <Link to="/">
            <PrimaryButtonInvert>Zurück</PrimaryButtonInvert>
          </Link>
        </Toolbar>
        <SectionHeader>IMPRESSUM</SectionHeader>
        <Container className="container-fluid">
          <BackgroundTile>
            <p>
              Gabi Göller
              <br />
              Am Stadtholz 10
              <br />
              33378 Rheda-Wiedenbrück
              <br />
              <br />
              Telefon: 0 52 42 / 57 77 34
              <br />
              Mobil: 0 17 3 / 90 29 42 1<br />
              <br />
              Email: info@gabigoeller.de
              <br />
            </p>
            <p>
              <strong>Haftung für Inhalte</strong>
              <br />
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 6
              Abs.1 MDStV und § 8 Abs.1 TDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Diensteanbieter sind jedoch nicht verpflichtet, die von ihnen übermittelten oder
              gespeicherten fremden Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei bekannt werden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. <br />
              <br />
              <strong>Haftung für Links</strong>
              <br />
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen. <br />
              <br />
              <strong>Urheberrecht</strong>
              <br />
              Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst
              erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und
              Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.{' '}
              <br />
              <br />
              <strong>Werbung</strong>
              <br />
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung
              von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
              widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.{' '}
            </p>
          </BackgroundTile>
        </Container>
      </ContentContainer>
    );
  }
}
