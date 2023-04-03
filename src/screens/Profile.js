import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Profile = () => { 
   const { t } = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 28 }}>{t('common:hello')}</Text>
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({})