import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

class TakePhotoQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUri: '',
            base64encoded: '',
            loading: false,
            result: []
        };
    }

    render() {
        const { imageUri } = this.state;
        // console.warn(this.state.result)
        if (imageUri) {
            return (
                <View style={styles.backgroundContainer}>
                    <ImageBackground
                        style={styles.previewImg}
                        source={{ uri: imageUri }}
                    />
                    <View style={styles.result}>
                        <ActivityIndicator animating={this.state.loading} size="large" color="#0000ff" />
                        {this.state.result.map((item, key) => (
                            <View style={{
                                paddingVertical: 15,
                                paddingHorizontal: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <Image style={{width: 50, height: 50,}} source={{ uri: item.image }}/>
                                <Text style={{ fontSize: 20, backgroundColor: 'white' }} key={key}>{item.label}</Text>
                                <View style={{ flexDirection: "row", }}>
                                    <Button style={{ fontSize: 20 }} title='listen' />
                                    <Button style={{ fontSize: 20 }} title='save' />
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.analyzeBtn}>
                        <Button
                            title='Analyze'
                            onPress={() => this.analyze()}
                        />
                    </View>
                </View>

            )
        }
        return (
            <View>
                <RNCamera
                    ref={ref => {this.camera = ref;}}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                // androidRecordAudioPermissionOptions={{
                //     title: 'Permission to use audio recording',
                //     message: 'We need your permission to use your audio',
                //     buttonPositive: 'Ok',
                //     buttonNegative: 'Cancel',
                // }}
                // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                //     console.log(barcodes);
                // }}
                >
                    <View>
                        <TouchableOpacity onPress={this.takePicture.bind(this)}>
                            <Image style={{ resizeMode: "contain" }} source={require('./../assets/camera.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </RNCamera>

            </View>
        );
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            // console.warn(data.uri);
            this.setState({ imageUri: data.uri, base64encoded: data.base64 });
        }
    };

    analyze() {
        this.setState({ loading: true })
        axios.post('https://asia-northeast1-rmit-sepm.cloudfunctions.net/getImageLabels', {
            image: this.state.base64encoded,
            rawResult: 'false',
            maxResults: 3
        }).then(response => {
            for (let i = 0; i < response.data.length; i++) {
                axios.post('https://asia-northeast1-rmit-sepm.cloudfunctions.net/searchImageByKeyword', {
                    keyword: response.data[i].label
                }).then(response1 => {
                    const obj ={label: response.data[i].label, image: response1.data[i].small}
                    // console.warn(obj)
                    this.setState({
                        result: [...this.state.result, obj]
                    })
                })  
            }
        }).then(response => {
            this.setState({loading: false})
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backgroundContainer: {
        flex: 1,
        // position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewImg: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    analyzeBtn: {
        position: 'absolute',
        bottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
    }
});

export default TakePhotoQuiz;
