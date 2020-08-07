import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

// import { Container } from './styles';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handlegoBack() {
    navigate('Landing');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handlegoBack}>
          <Image resizeMode="contain" source={backIcon} />
        </BorderlessButton>
        <Image resizeMode="contain" source={logoImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
