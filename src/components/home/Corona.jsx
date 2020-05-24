import React from 'react';
import TextSection from './TextSection';
import styled from 'styled-components';

const VirusBig = styled.img`
  user-select: none;
  position: absolute;
  top: 60px;
  right: 60px;
  width: 260px;
`;

const VirusDots = styled.img`
  user-select: none;
  position: absolute;
  bottom: 50px;
  left: 80px;
  width: 50px;
`;

const SubHeadline = styled.strong`
  margin-bottom: 4px;
`;

export default () => (
  <TextSection id="covid" title="AKTUELLES ZU COVID-19">
    <VirusBig src="images/virus_big.svg" />
    <VirusDots src="images/virus_dots.svg" />
    <div>
      <strong>Re-Opening ab dem 2. Juni 2020</strong>
      <br />
      Mit einigen Vorsichts- und Hygienemaßnahmen öffnen wir nun endlich unsere Yoga-Schule wieder für Euch. Welche
      Kurse stattfinden, findest Du wie gehabt in unserem Stundenplan. Die Anmeldung findet weiterhin über unser
      Anmeldeformular weiter unten statt. Nun zu unseren neuen Leitlinien für die Yoga-Schule und unsere Kurse:
      <br />
      <br />
      <SubHeadline>Anmeldung zu den Kursen:</SubHeadline>
      <ul>
        <li>
          Wir üben in der Yoga-Schule in festen Kleingruppen von max. 10 Teilnehmer*Innen für 10 Wochen am Stück. Daher
          ist eine feste Reservierung für Deinen Kurs von 10 Einheiten erforderlich.
        </li>
        <li>
          Um Dich für Kurse in der Yoga-Schule anzumelden, teile uns bitte Kurs und Uhrzeit Deiner gewünschten Teilnahme
          mit (z.B. 10 mal, Montags um 9:00 Uhr). Dafür kannst Du unser Anmeldeformular weiter unten nutzen oder Dich
          per Mail unter gabi@goeller.yoga anmelden.
        </li>
        <li>
          Wir bieten weiterhin Online-Yoga an, auch hier findet die Anmeldung per Mail statt. Hierfür musst Du Dich für
          jede einzelne Stunde mind. 3 Stunden vor Beginn anmelden.
        </li>
        <li>Die Abrechnung für Online-Yoga und Kurse in der Yoga-Schule erfolgt über Deine Yoga-Karte.</li>
      </ul>
      <SubHeadline>Um das Ansteckungsrisiko für jeden zu senken:</SubHeadline>
      <ul>
        <li>Bitte komme bereits umgezogen, in Yoga-Kleidung in die Yoga-Schule.</li>
        <li>
          Bring bitte Deine eigene Matte, Gurt und wenn möglich Klötze mit. (Solltest du noch kein eigenes Material
          besitzen, haben wir neue Materialien in der Yoga-Schule, die Du bei uns erwerben kannst.)
        </li>
        <li>Hilfsmittel der Yoga-Schule, wie Taue, Bolster oder Decken werden nicht benutzt.</li>
        <li>Benutzte Yoga-Stühle werden nach jedem Kurs desinfiziert.</li>
        <li>Wir üben ausschließlich kontaktfrei.</li>
        <li>Die Yoga-Asanas sind so ausgewählt, dass die Aerosolbelastung möglichst gering ist.</li>
        <li>
          <strong>Wenn Du Symptome hast, Dich krank oder fiebrig fühlst, komme bitte nicht in den Unterricht!</strong>
        </li>
      </ul>
      Wir freuen uns auf Euch!
    </div>
  </TextSection>
);
