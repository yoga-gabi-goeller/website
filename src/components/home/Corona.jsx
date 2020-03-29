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
      Mit Schließung der Schulen in NRW bleibt auch unsere Yoga-Schule ab Montag, den 16.03.2020 geschlossen. Je nach
      Lage, öffnet die Yoga-Schule voraussichtlich wieder am 20.04.2020 Mit dem Entschluss die Yoga-Schule zu schließen,
      folgen wir den Empfehlungen der Landesregierung NRW vom 13.03.2020. Wir alle tragen eine soziale Verantwortung
      füreinander, besonders gegenüber denjenigen, die besonders gefährdet sind.
      <br />
      <br />
      Herzliche Grüße
      <br />
      Gabi, Thomas, Christiane und Markus
    </div>
  </TextSection>
);
