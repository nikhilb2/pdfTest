import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { refractorWidth, refractorHeight, titleCase } from '../../src/utility'
import { useTranslation } from 'react-i18next'

const Interval = (props) => {
  const { t } = useTranslation('freqsetting')
  const { data, type, updateTeamDetail, text, setShowToaster, tl } = props
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    if (data) {
      setSelected(data[type] ? data[type] : 2)
    }
  }, [data])
  return(
    <View>
      <Text maxFontSizeMultiplier={1} style={styles.topText}>
        {/*t('feedbackinterval')*/}
        {text}
      </Text>

      <View style={styles.frequencyHolder}>
        <View style={styles.checkHolder}>
          <TouchableOpacity
            touchSoundDisabled={true}
            onPress={() => {
              setSelected(1)
              data.frequency = 1
              updateTeamDetail({
                teamId: data._id,
                data: {
                  frequency: 1,
                },
              })
            }}
          >
            {selected === 1 ? (
              <Ionicons
                style={styles.check}
                name="ios-checkmark-circle"
                size={24}
                color="#007aff"
              />
            ) : (
              <View style={styles.emptyCheck} />
            )}
          </TouchableOpacity>
          <View style={styles.checkDivider} />
          <TouchableOpacity
            touchSoundDisabled={true}
            onPress={() => {
              setSelected(2)
              data.frequency = 2
              updateTeamDetail({
                teamId: data._id,
                data: {
                  [type]: 2,
                },
              })
              setShowToaster(true)
            }}
          >
            {selected === 2 ? (
              <Ionicons
                style={styles.check}
                name="ios-checkmark-circle"
                size={24}
                color="#007aff"
              />
            ) : (
              <View style={styles.emptyCheck} />
            )}
          </TouchableOpacity>
          <View style={styles.checkDivider} />
          <TouchableOpacity
            touchSoundDisabled={true}
            onPress={() => {
              setSelected(3)
              data.frequency = 3
              setShowToaster(true)
              updateTeamDetail({
                teamId: data._id,
                data: {
                  [type]: 3,
                },
              })
            }}
          >
            {selected === 3 ? (
              <Ionicons
                style={styles.check}
                name="ios-checkmark-circle"
                size={24}
                color="#007aff"
              />
            ) : (
              <View style={styles.emptyCheck} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.detailHolder}>
          <TouchableOpacity
            touchSoundDisabled={true}
            onPress={() => {
              setSelected(1)
              setShowToaster(true)
              updateTeamDetail({
                teamId: data._id,
                data: {
                  [type]: 1,
                },
              })
            }}
            style={styles.detailStyle}
          >
            <Text
              maxFontSizeMultiplier={1}
              style={styles.detailStyleTitleText}
            >
              {t('weekly')}
            </Text>
            <Text
              maxFontSizeMultiplier={1}
              style={styles.detailStyleTitleCaption}
            >
              {tl ? t('weeklycaptionTL') : t('weeklycaption')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            touchSoundDisabled={true}
            onPress={() => {
              setSelected(2)
              setShowToaster(true)
              updateTeamDetail({
                teamId: data._id,
                data: {
                  [type]: 2,
                },
              })
            }}
            style={styles.detailStyle}
          >
            <Text
              maxFontSizeMultiplier={1}
              style={styles.detailStyleTitleText}
            >
              {t('twice')}
            </Text>
            <Text
              maxFontSizeMultiplier={1}
              style={styles.detailStyleTitleCaption}
            >
              { tl ? t('twiceCaptionTL') : t('twiceCaption')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            touchSoundDisabled={true}
            onPress={() => {
              setSelected(3)
              setShowToaster(true)
              updateTeamDetail({
                teamId: data._id,
                data: {
                  [type]: 3,
                },
              })
            }}
            style={[styles.detailStyle, { borderBottomWidth: 0 }]}
          >
            <Text
              maxFontSizeMultiplier={1}
              style={styles.detailStyleTitleText}
            >
              {t('monthly')}
            </Text>
            <Text
              maxFontSizeMultiplier={1}
              style={styles.detailStyleTitleCaption}
            >
              {tl ?  t('monthlyCaptionTL') : t('monthlyCaption')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'column',
  },
  topText: {
    width: refractorWidth(234),
    fontFamily: 'roboto-regular',
    fontSize: refractorWidth(14),
    lineHeight: refractorWidth(16),
    color: '#1b2733',
    marginTop: refractorWidth(56.7),
    marginLeft: refractorWidth(26),
  },
  optionsHolder: {
    backgroundColor: '#f2f2f7',
    flexGrow: 1,
    //marginTop: refractorHeight(-7),
  },
  topText: {
    fontFamily: 'sf-Pro-regular',
    fontSize: refractorWidth(13.5),
    lineHeight: refractorWidth(16),
    color: '#8d959e',
    marginTop: refractorHeight(48),
    marginLeft: refractorWidth(17),
  },
  frequencyHolder: {
    height: refractorHeight(144),
    backgroundColor: '#ffffff',
    borderColor: '#ebebeb',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    marginTop: refractorHeight(14),
    display: 'flex',
    flexDirection: 'row',
  },
  checkHolder: {
    width: refractorWidth(51),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: refractorHeight(144),
  },
  detailHolder: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailStyle: {
    borderColor: '#d6dbdf',
    borderBottomWidth: 0.5,
    height: refractorHeight(47.5),
  },
  detailStyleTitleText: {
    marginTop: refractorHeight(6.5),
    fontFamily: 'sf-pro-dis-regular',
    letterSpacing: refractorWidth(0.05),
    fontSize: refractorWidth(17),
    lineHeight: refractorWidth(20),
  },
  detailStyleTitleCaption: {
    fontFamily: 'sf-Pro-regular',
    fontSize: refractorWidth(12),
    lineHeight: refractorWidth(14),
    color: '#8d959e',
  },
  emptyCheck: {
    width: refractorWidth(20),
    height: refractorWidth(20),
    borderRadius: refractorWidth(10),
    borderColor: '#e8e8e8',
    borderWidth: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: refractorWidth(5),
  },
  checkDivider: {
    borderColor: '#e8e8e8',
    borderLeftWidth: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    height: refractorHeight(18),
    marginBottom: refractorWidth(5),
  },
  check: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  textHolder: {
    backgroundColor: '#ffffff',
    marginTop: refractorHeight(14),
    height: refractorHeight(52),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: refractorWidth(22.4),
  },
  linkText: {
    marginLeft: refractorWidth(20),
    fontFamily: 'sf-Pro-regular',
    fontSize: refractorWidth(17),
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#333333',
  },
  createLinkText: {
    marginLeft: refractorWidth(20),
    fontFamily: 'sf-Pro-regular',
    fontSize: refractorWidth(17),
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#707070',
    marginRight: refractorWidth(8.8),
  },
})
export default Interval
