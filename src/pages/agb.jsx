import React, { Component } from 'react';
import { Link } from 'gatsby';

import PageLayout from '../components/PageLayout';
import { ContentContainer, Container } from '../components/styled/Layout';
import { Toolbar, SectionHeader, PrimaryButtonInvert, BackgroundTile } from '../components/styled/Base';

export default class Privacy extends Component {
  render() {
    return (
      <PageLayout>
        <ContentContainer>
          <Toolbar>
            <Link to="/">
              <PrimaryButtonInvert>Zurück</PrimaryButtonInvert>
            </Link>
          </Toolbar>
          <SectionHeader>Allgemeine Geschäftsbedingungen</SectionHeader>
          <Container className="container-fluid">
            <BackgroundTile>
              <p>
                Diese AGB gelten für sämtliche Angebote der Yogaschule Iyengar-Yoga Gabi Göller. Jeder Kunde der Schule
                wurde vor der erstmaligen Teilnahme an einem Kurs auf die in den Räumen aushängenden und auf der
                Webseite einzusehenden AGB hingewiesen. Diese sind somit Bestandteil aller mündlichen und schriftlichen
                Verträge.
              </p>
              <h3>Voraussetzung zur Teilnahme</h3>
              <p>
                Vor der Teilnahme an Angeboten der Yogaschule Iyengar-Yoga Gabi Göller erklärt der Teilnehmer, dass er
                gesundheitlich hierzu in der Lage ist. Im Zweifelsfall ist eine ärztliche Abklärung notwendig. Der
                Teilnehmer hat vor Anmeldung bzw. Kursbeginn die Lehrperson über gesundheitliche Beeinträchtigungen zu
                informieren. Jeder Teilnehmer nimmt auf eigene Gefahr und Verantwortung am Unterricht teil.
              </p>
              <h3>Haftung</h3>
              <p>
                Die Teilnahme an den Kursen und die Benutzung der Räumlichkeiten erfolgt für die Teilnehmer auf eigene
                Verantwortung. Für mitgebrachte Garderobe und Gegenstände, insbesondere Geld oder Wertegenstände kann
                keine Haftung übernommen werden.
              </p>
              <h3>Vertragsbedingungen</h3>
              <ol>
                <li>
                  <p>Die 10er Karte ist 6 Monate gültig und im Voraus zu bezahlen.</p>
                </li>
                <li>
                  <p>
                    Die 10er Karte ist für die eingetragene Person gültig, sie ist nicht auf weitere Personen
                    übertragbar.
                  </p>
                </li>
                <li>
                  <p>Die Termine werden mit Beginn der 10er Karte vergeben.</p>
                </li>
                <li>
                  <p>Für versäumte Stunden kann keine Rückzahlung erfolgen.</p>
                </li>
                <li>
                  <p>Probestunden sind zurzeit nicht möglich.</p>
                </li>
                <li>
                  <p>
                    Die Yogaschule ist ca. 6 Wochen über das Jahr verteilt im Jahr geschlossen. Die Urlaubswochen geben
                    wir rechtzeitig bekannt. Siehe Internetseite oder Aushang in der Schule.
                  </p>
                </li>
              </ol>
              <h3>Kündigung</h3>
              <p>
                Die 10er Karte endet mit dem letzten eingetragenen Datum. Bitte gebt uns für eine Kündigung oder eine
                weiter Teilnahme rechtzeitig Bescheid.
              </p>
              <h3>Bezahlung</h3>
              <p>
                10er Karte 159 €<br />
                Gabi Göller
                <br />
                Kreissparkasse Wiedenbrück
                <br />
                IBAN DE40 4785 3520 0000 0537 02
              </p>
            </BackgroundTile>
          </Container>
        </ContentContainer>
      </PageLayout>
    );
  }
}
