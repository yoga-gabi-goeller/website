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

export default () => (
  <TextSection id="covid" title="AKTUELLES ZU COVID-19">
    <VirusBig src="images/virus_big.svg" />
    <VirusDots src="images/virus_dots.svg" />
    <div>
      <strong>Wir sind weiterhin online für Euch da!</strong>
      <br />
      Da der Unterricht in unserem Yoga-Studio mindestens bis zum 02.05.2020 leider nicht möglich ist, sind wir aktuell
      mit einem Online-Kursangebot für Euch da. Wir folgen somit den Empfehlungen unserer Bundesregierung und möchten
      weiterhin diejenigen Schützen, die aktuell besonders gefährdet sind.
      <br />
      <br />
      Dennoch möchten wir euch dabei helfen auch zuhause eine strukturierte Übungspraxis zu etablieren und Euch
      Hilfestellung geben. Dafür sind wir live zu den entsprechenden Kurszeiten in unserem Stundenplan für Euch da.
      <br />
      <br />
      Für die Anmeldung könnt ihr unser Anmeldeformular weiter unten nutzen. Teilt uns einfach min. 3 Std. vor
      Kursbeginn, mit Datum und Uhrzeit des Kurses, Deine gewünschte Teilnahme mit.
      <br />
      <br />
      Wir berechnen derzeit für Schüler mit 5er, 10er oder 20er-Karte den halben Preis pro Online-Stunde. Für
      Einzelbuchungen 10 € pro Online-Stunde.
      <br />
      <br />
      Wir freuen uns auf Euch!
      <br />
      Gabi, Thomas, Christiane und Markus
    </div>
  </TextSection>
);
