import React from 'react';
import dayjs from 'dayjs';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

// import function to calculate biorhythms
import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM YYYY');
}

function BiorhythmCard({ birthDate, targetDate }) {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>Biorhythms on {formatDate(targetDate)}</IonCardTitle>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
          <p>Physical: {physical.toFixed(4)}</p>
          <p>Emotional: {emotional.toFixed(4)}</p>
          <p>Intellectual: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default BiorhythmCard;
