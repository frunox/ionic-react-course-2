// Section 3 code up to video 16 - Card Component
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  // const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput
            type="text"
            value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem> */}
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>Biorhythms on Date</IonCardTitle>
            <IonCardContent>
              <p>Physical:</p>
              <p>Emotional:</p>
              <p>Intellectual:</p>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default App;
