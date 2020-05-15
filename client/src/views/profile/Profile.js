import React, {useState} from 'react';
import {object} from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProfileStyle';
import Badges from './badges/Badges';
import Progress from './progress/Progress';

const tabs = {PROGRESS: 'PROGRESS', BADGES: 'BADGES'};

const Profile = ({progress: {stage, level, test}}) => {
  const [tab, setTab] = useState(tabs.PROGRESS);

  const renderTab = () => {
    if (tab === tabs.PROGRESS) {
      return <Progress />;
    }
    return <Badges />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileActionsWrapper}>
          {/*<TouchableOpacity>*/}

          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity>*/}

          {/*</TouchableOpacity>*/}
        </View>
        <View style={styles.profileInfoWrapper}>
          <Image
            style={styles.avatar}
            source={require('../../shared/assets/DefaultAvatar.png')}
          />
          <Text style={styles.name}>Jake the Dog</Text>
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
    </View>
  );
};

Profile.propTypes = {
  progress: object.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  null,
)(Profile);
