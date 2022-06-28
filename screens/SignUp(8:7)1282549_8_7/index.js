import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_8_30}>
        <View style={styles.View_8_29} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e72e829-cbbd-46bb-b777-788631bf0f01"
          }}
          style={styles.ImageBackground_8_8}
        />
        <View style={styles.View_8_18}>
          <View style={styles.View_8_19} />
          <View style={styles.View_8_20}>
            <Text style={styles.Text_8_20}>Password</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_24}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_69"))
          }
        >
          <View style={styles.View_8_25} />
          <View style={styles.View_8_26}>
            <Text style={styles.Text_8_26}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_8_21}>
          <View style={styles.View_8_22} />
          <View style={styles.View_8_23}>
            <Text style={styles.Text_8_23}>Email Id</Text>
          </View>
        </View>
        <View style={styles.View_8_12}>
          <View style={styles.View_8_13} />
          <View style={styles.View_8_14}>
            <Text style={styles.Text_8_14}>Last Name</Text>
          </View>
        </View>
        <View style={styles.View_8_9}>
          <View style={styles.View_8_10} />
          <View style={styles.View_8_11}>
            <Text style={styles.Text_8_11}>First Name</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("104%") },
  View_8_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_29: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_8: {
    width: wp("51%"),
    height: hp("25%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_8_18: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_8_19: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_8_20: {
    width: wp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_8_20: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_24: {
    width: wp("49%"),
    height: hp("5%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_8_25: {
    width: wp("49%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(116, 86, 235, 1)",
    opacity: 0.6700000166893005,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_8_26: {
    width: wp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_8_26: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_21: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_8_22: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_8_23: {
    width: wp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_8_23: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_12: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_8_13: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_8_14: {
    width: wp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_8_14: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_9: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_8_10: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_8_11: {
    width: wp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_8_11: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
