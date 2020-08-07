import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';

// import { Container } from './styles';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys disponíveis" />
    </View>
  );
}
