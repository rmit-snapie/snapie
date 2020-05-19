import React, {useState} from 'react';
import {object} from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProfileStyle';
import Badges from './badges/Badges';
import Progress from './progress/Progress';
import {goToFirstScreenInStack} from '../../helpers/NavigateHelper';
import SnapieModal from '../../shared/components/SnapieModal';
import LoginModal from './login-modal/LoginModal';
const BackToHome = require('../../shared/assets/BackToHomeIconSecondary.png');
const SettingsIcon = require('../../shared/assets/SettingsIcon.png');
const DefaultAvatar = require('../../shared/assets/DefaultAvatar.png');

const tabs = {PROGRESS: 'PROGRESS', BADGES: 'BADGES'};

const Profile = ({navigation}) => {
  const [tab, setTab] = useState(tabs.PROGRESS);
  const [openModal, setOpenModal] = useState({
    display: false,
    type: null,
    message: null,
  });
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const renderTab = () => {
    if (tab === tabs.PROGRESS) {
      return <Progress />;
    }
    return <Badges />;
  };

  const handlePressSettings = () => {
    setOpenModal({
      display: true,
      type: 'info',
      message: 'Work in progress',
    });
    setTimeout(() => {
      setOpenModal({display: false, type: null, message: null});
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileActionsWrapper}>
          <TouchableOpacity onPress={() => goToFirstScreenInStack(navigation)}>
            <Image style={styles.profileAction} source={BackToHome} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressSettings()}>
            <Image style={styles.profileAction} source={SettingsIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfoWrapper}>
          <Image style={styles.avatar} source={DefaultAvatar} />
          <TouchableOpacity onPress={() => setOpenLoginModal(true)}>
            <Text style={styles.name}>Jake the Dog</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabsWrapper}>
          <TouchableOpacity
            onPress={() => setTab(tabs.PROGRESS)}
            style={
              tab === tabs.PROGRESS
                ? [styles.tab, styles.activeTab]
                : styles.tab
            }>
            <Text style={styles.tabTitle}>PROGRESS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab(tabs.BADGES)}
            style={
              tab === tabs.BADGES ? [styles.tab, styles.activeTab] : styles.tab
            }>
            <Text style={styles.tabTitle}>BADGES</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileBody}>{renderTab()}</View>
      {openModal.display && (
        <SnapieModal
          display={openModal.display}
          animationType="fade"
          message={openModal.message}
          setDisplay={setOpenModal}
          type={openModal.type}
        />
      )}
      {openLoginModal && (
        <LoginModal
          display={openLoginModal}
          closeModal={() => setOpenLoginModal(false)}
        />
      )}
    </View>
  );
};

Profile.propTypes = {
  navigation: object.isRequired,
};

export default Profile;
