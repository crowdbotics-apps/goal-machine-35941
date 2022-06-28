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
      <View style={styles.View_9_32}>
        <View style={styles.View_9_33} />
        <View style={styles.View_9_47}>
          <View style={styles.View_9_48} />
          <View style={styles.View_9_49}>
            <Text style={styles.Text_9_49}>Email Id</Text>
          </View>
        </View>
        <View style={styles.View_9_60}>
          <View style={styles.View_9_61} />
          <View style={styles.View_9_62}>
            <Text style={styles.Text_9_62}>Reset</Text>
          </View>
        </View>
        <View style={styles.View_9_58}>
          <Text style={styles.Text_9_58}>Reset Password</Text>
        </View>
        <View style={styles.View_9_59}>
          <Text style={styles.Text_9_59}>
            You will recieve a new password to your email id
          </Text>
        </View>
        <View style={styles.View_9_63}>
          <View style={styles.View_9_64}>
            <Text style={styles.Text_9_64}>Already have account?</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_65}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_85"))
            }
          >
            <Text style={styles.Text_9_65}>Login</Text>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2018506f-4a19-459c-9339-432e21a28d58"
            }}
            style={styles.ImageBackground_9_66}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("104%") },
  View_9_32: {
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
  View_9_33: {
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
  View_9_47: {
    width: wp("72%"),
    height: hp("6%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_9_48: {
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
  View_9_49: {
    width: wp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_9_49: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_60: {
    width: wp("49%"),
    height: hp("5%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_9_61: {
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
  View_9_62: {
    width: wp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_9_62: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_58: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_9_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_59: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_9_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_63: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("93%")
  },
  View_9_64: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_9_64: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_65: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_9_65: {
    color: "rgba(255, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_66: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
