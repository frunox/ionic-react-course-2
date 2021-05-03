import React from 'react';
import dayjs from 'dayjs';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM YYYY');
}

function BiorhythmCard({ targetDate }) {
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>Biorhythms on {formatDate(targetDate)}</IonCardTitle>
        <IonCardContent>
          <p>Physical:</p>
          <p>Emotional:</p>
          <p>Intellectual:</p>
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  );
}

export default BiorhythmCard;
