import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIncon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

// import { Container } from './styles';

const TeacherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://github.com/diego3g.png' }} />
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Diego Fernandes</Text>
        <Text style={styles.subject}>Química</Text>
      </View>

      <Text style={styles.bio}>AAAAAAAAAAAAAAAAAAAAAAAAa</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{'   '}
          <Text style={styles.priceValue}>40.00€</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contacto</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
