import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFViewer from './PDFViewer';

const PDFViewerScreen = () => {
  return (
    <View style={styles.container}>
      <PDFViewer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PDFViewerScreen;
