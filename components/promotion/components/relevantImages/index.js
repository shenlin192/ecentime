import React, { Fragment } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, CameraRoll,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Asset } from 'expo-asset';
import { Image } from 'react-native-elements';
import Modal from 'react-native-modal';
import { openLink } from '../../../../services';
import { boldText } from '../../../../consts';
import mockData from './mockData';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    ...boldText,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  content: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flexBasis: '33.3%',
  },
  relevantImage: {
    minWidth: 107,
    minHeight: 110,
    marginBottom: 12,
    flex: 1,
  },
  modalStyle: {
    margin: 0,
  },
  selectedImage: {
    width: '100%',
    height: 201,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -140,
    width: '100%',
  },
  clickBuyIcon: {
    margin: 'auto',
    width: 108,
    height: 36,
  },
  downloadIconContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 0,
    right: 45,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  downloadIcon: {
    width: 22,
    height: 22,
  },
});

const defaultErrorHandler = (e) => {
  console.log(e);
};

export class RelevantImages extends React.Component {
  state = {
    isModalVisible: false,
    selectedItem: null,
  };

  toggleModal = () => {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  };

  clickImage = (itemIndex) => {
    this.toggleModal();
    this.setState({ selectedItem: itemIndex });
  };

  downloadImage = async () => {
    const { status: cameraPermission } = await Permissions
      .askAsync(Permissions.CAMERA)
      .catch(defaultErrorHandler);
    const { status: cameraRollPermission } = await Permissions
      .askAsync(Permissions.CAMERA_ROLL)
      .catch(defaultErrorHandler);

    if (cameraPermission !== 'granted' || cameraRollPermission !== 'granted') {
      alert('请开放摄像头与相册权限');
      return;
    }
    const { selectedItem } = this.state;
    const { source } = mockData.relevantImages[selectedItem];
    const asset = Asset.fromModule(source);
    await asset.downloadAsync();
    const { localUri } = asset;
    if (localUri) {
      const result = await CameraRoll
        .saveToCameraRoll(localUri)
        .catch(defaultErrorHandler);

      if (result) {
        alert('已下载到相册');
        return;
      }
    }
    alert('下载失败');
  }


  modalContent = (selectedItem) => {
    if (selectedItem === null) {
      return null;
    }
    const { link, source } = mockData.relevantImages[selectedItem];
    return (
      <Fragment>
        <Image
          resizeMode="cover"
          style={styles.selectedImage}
          source={source}
        />
        <View style={styles.iconsContainer}>
          {link ? (
            <TouchableOpacity onPress={() => { openLink(link); }}>
              <Image
                style={styles.clickBuyIcon}
                source={require('./medias/clickBuy.png')}
              />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={styles.downloadIconContainer}
            onPress={this.downloadImage}
          >
            <Image
              style={styles.downloadIcon}
              source={require('./medias/download.png')}
            />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  };

  render() {
    const { isModalVisible, selectedItem } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>相关图片</Text>
        <View style={styles.content}>
          <View style={styles.imagesContainer}>
            {
              mockData.relevantImages.map((relevantImage, itemIndex) => (
                <TouchableOpacity
                  style={styles.imageContainer}
                  key={relevantImage.source}
                  onPress={() => this.clickImage(itemIndex)}
                >
                  <Image
                    style={styles.relevantImage}
                    source={relevantImage.source}
                  />
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
        <Modal
          isVisible={isModalVisible}
          backdropOpacity={1}
          onBackdropPress={this.toggleModal}
          style={styles.modalStyle}
        >
          <View>
            { this.modalContent(selectedItem)}
          </View>
        </Modal>
      </View>
    );
  }
}
