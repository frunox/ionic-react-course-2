import React from 'react';
import dayjs from 'dayjs';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import './BiorhythmCard.css';

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
    <IonCard className="biorhythm-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle>Biorhythms on {formatDate(targetDate)}</IonCardTitle>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
          <p className="physical">Physical: {physical.toFixed(4)}</p>
          <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
          <p className="intellectual">
            Intellectual: {intellectual.toFixed(4)}
          </p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default BiorhythmCard;
