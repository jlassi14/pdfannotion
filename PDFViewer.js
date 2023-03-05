import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Dimensions, // import the Dimensions module
} from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import * as DocumentPicker from 'expo-document-picker';

const PDFViewer = () => {
  const [pdfURI, setPdfURI] = useState(null);
  const [cropRect, setCropRect] = useState(null);
  const [cropMode, setCropMode] = useState(false);
  const [cropButtonDisabled, setCropButtonDisabled] = useState(true);
  const scrollViewRef = useRef(null);
  const canvasRef = useRef(null);
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
      if (result.type === 'success') {
        setPdfURI(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPinchGestureEvent = (event) => {
    const { scale } = event.nativeEvent;
    scrollViewRef.current.zoomTo(scale);
  };

  const closePDF = () => {
    setPdfURI(null);
  };

  return (
    <View style={styles.container}>
      {pdfURI ? (
        <ScrollView
          maximumZoomScale={3}
          minimumZoomScale={0.5}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          centerContent
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <PDFReader
            source={{ uri: pdfURI }}
            style={styles.pdfReader}
            onPinchGestureEvent={onPinchGestureEvent}
          />
          <View style={styles.buttonContainer}>
            <Button title="Close PDF" onPress={closePDF} />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.buttonContainer}>
          <Button title="Select PDF" onPress={pickDocument} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  pdfReader: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  sketchCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default PDFViewer;
