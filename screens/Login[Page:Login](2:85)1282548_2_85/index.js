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
      <View style={styles.View_4_2}>
        <View style={styles.View_2_168} />
        <View style={styles.View_2_240}>
          <View style={styles.View_2_169}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68f388ab-7003-4ae0-bc7d-48fef52b26f9"
              }}
              style={styles.ImageBackground_2_170}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dd34f1a-7efe-4c86-a59a-45d69712b34e"
              }}
              style={styles.ImageBackground_2_171}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27c5d6ae-0033-44c5-888a-ae54da55cd97"
              }}
              style={styles.ImageBackground_2_174}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fc70134-a588-41f2-90ed-946b07018a32"
              }}
              style={styles.ImageBackground_2_175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3eddba51-da11-4aa7-b0b3-44ffa80705c3"
              }}
              style={styles.ImageBackground_2_176}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0310323c-454e-4762-88b8-b29bb9944e79"
              }}
              style={styles.ImageBackground_2_177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75dd99a4-fbac-41a2-9e7f-a5fb6d8bb8f6"
              }}
              style={styles.ImageBackground_2_178}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be343ecf-dc2f-4ce2-8d5f-8e8041cf924c"
              }}
              style={styles.ImageBackground_2_179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1242c5dc-3dfa-4c67-ab07-fbd92abedffc"
              }}
              style={styles.ImageBackground_2_180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8819754a-5512-45cb-970d-5f6338595ad0"
              }}
              style={styles.ImageBackground_2_181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb7173db-124c-49bf-b441-73132d484ccc"
              }}
              style={styles.ImageBackground_2_182}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4c064c5-9615-47e9-b52e-42b59a392488"
              }}
              style={styles.ImageBackground_2_183}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a1cdd80-baf3-4d81-8d33-872e8c1f8eb7"
              }}
              style={styles.ImageBackground_2_184}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d417a4c2-b57e-4588-91ef-d5fe4d83c73a"
              }}
              style={styles.ImageBackground_2_185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6534c26-fe62-455d-a953-65b708c71de6"
              }}
              style={styles.ImageBackground_2_186}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe436582-d46c-4329-9ae1-90fbc22fe119"
              }}
              style={styles.ImageBackground_2_187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc4cd43f-1ce2-48e5-9476-ca2ffd9f8783"
              }}
              style={styles.ImageBackground_2_188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cafd004a-eedf-4a63-8bc1-e567c9a87a8f"
              }}
              style={styles.ImageBackground_2_189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76cc665f-9daf-4ffc-9b67-d2d50b029ade"
              }}
              style={styles.ImageBackground_2_190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d3f765b-d59f-486e-97f4-5f5fdfa6d381"
              }}
              style={styles.ImageBackground_2_191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/581360e5-d359-4164-8c44-93fefca61894"
              }}
              style={styles.ImageBackground_2_192}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e41f1d4-8e2d-443b-8da4-eb41435e9bd7"
              }}
              style={styles.ImageBackground_2_193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6e0b546-a793-4b79-b7bf-dc30512ea57e"
              }}
              style={styles.ImageBackground_2_194}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/843ff012-fb2d-4eb7-bee8-88000c23f38d"
              }}
              style={styles.ImageBackground_2_195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd157b3b-389a-461f-b382-cfee46053e4e"
              }}
              style={styles.ImageBackground_2_196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/052a976b-9e22-4214-86df-f6f624781daf"
              }}
              style={styles.ImageBackground_2_197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc73494c-8849-4e43-ba02-9674bf4cdbb8"
              }}
              style={styles.ImageBackground_2_198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/172f105d-45dc-44d5-b4a8-02180872de93"
              }}
              style={styles.ImageBackground_2_199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5017547e-fece-4907-bdc0-0f146796f98d"
              }}
              style={styles.ImageBackground_2_200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2912e915-58ae-4e98-81bf-96f1fd3d897f"
              }}
              style={styles.ImageBackground_2_201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61b6e030-4148-4462-b8cc-fb54c9c861f1"
              }}
              style={styles.ImageBackground_2_202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40434146-928b-474e-8270-fe3e047390aa"
              }}
              style={styles.ImageBackground_2_203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8aa16526-485d-405c-9e97-cc4d5c08cefe"
              }}
              style={styles.ImageBackground_2_204}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3ad9079-7b1d-49b4-9fbb-f89d9b8d2d19"
              }}
              style={styles.ImageBackground_2_205}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/364d82c0-1587-4a50-adb0-260a19986fb3"
              }}
              style={styles.ImageBackground_2_206}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ba091ad-02f0-48d1-84bf-7ea04caffdb4"
              }}
              style={styles.ImageBackground_2_207}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5766080e-b088-4129-9785-6a18b8611baf"
              }}
              style={styles.ImageBackground_2_208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a08a4143-0cd5-4fc0-bf96-ad8249d7fb30"
              }}
              style={styles.ImageBackground_2_209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38b4b550-6540-4173-aaf3-9dc2f746e6a4"
              }}
              style={styles.ImageBackground_2_210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efb0d767-cb38-452f-b1e6-296c1a082957"
              }}
              style={styles.ImageBackground_2_211}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f431ad1f-deb8-4229-81b2-c448c62ef68c"
              }}
              style={styles.ImageBackground_2_212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76462e56-cc91-4743-87ff-c61392cbbbd2"
              }}
              style={styles.ImageBackground_2_213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a19387f3-2dff-44e1-b4bc-46a53881cc43"
              }}
              style={styles.ImageBackground_2_214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ca5dc3d-8036-4753-b3c6-fb0ac1fac07c"
              }}
              style={styles.ImageBackground_2_215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1956c629-0858-4a41-8f64-9a0ec4e29949"
              }}
              style={styles.ImageBackground_2_216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a506c956-267a-4115-b499-6265f660c348"
              }}
              style={styles.ImageBackground_2_217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fe847d2-da90-4464-861a-469404b05f7f"
              }}
              style={styles.ImageBackground_2_218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bd94f77-b51e-47b7-af19-db6071cf4d8d"
              }}
              style={styles.ImageBackground_2_219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97ea0251-7084-4c35-9097-8e456db593b1"
              }}
              style={styles.ImageBackground_2_220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d21f636c-61ea-4157-a31d-a74390e90961"
              }}
              style={styles.ImageBackground_2_221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df86e750-0541-4926-996e-07bd77bc6c49"
              }}
              style={styles.ImageBackground_2_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3527182c-a8df-4bae-bcff-74019c5c3792"
              }}
              style={styles.ImageBackground_2_223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad97caff-440e-4609-bb6d-253e0722bb57"
              }}
              style={styles.ImageBackground_2_224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81922c0a-d5e1-4c2a-aa58-d1ef2a5f89e8"
              }}
              style={styles.ImageBackground_2_225}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e93a95b5-238e-40fa-a429-1fc53a12e33f"
              }}
              style={styles.ImageBackground_2_226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8641fec-8a5b-42d6-b065-1d338e933a07"
              }}
              style={styles.ImageBackground_2_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/440d19b1-5290-48e6-9690-8c268d625099"
              }}
              style={styles.ImageBackground_2_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43568dac-ea55-499e-934b-156142162744"
              }}
              style={styles.ImageBackground_2_231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f1f1824-3cb2-4a68-8ac6-d7dd6f71444f"
              }}
              style={styles.ImageBackground_2_232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b96f96a-6ad0-4315-9881-a636504e161c"
              }}
              style={styles.ImageBackground_2_233}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a289165-8c3f-4524-9c3c-f3d1075580d2"
              }}
              style={styles.ImageBackground_2_234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbfdb261-b79c-405a-b01a-cbc532ca6f96"
              }}
              style={styles.ImageBackground_2_235}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4be92af-f10e-4e2f-91f1-a589dbaf940d"
              }}
              style={styles.ImageBackground_2_236}
            />
          </View>
          <View style={styles.View_2_239}>
            <View style={styles.View_2_237}>
              <Text style={styles.Text_2_237}>The Goal Machine</Text>
            </View>
            <View style={styles.View_2_238}>
              <Text style={styles.Text_2_238}>Plan &amp; achieve</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_241}>
          <View style={styles.View_2_242} />
          <View style={styles.View_2_243}>
            <Text style={styles.Text_2_243}>Login</Text>
          </View>
        </View>
        <View style={styles.View_2_244}>
          <View style={styles.View_2_245} />
          <View style={styles.View_2_246}>
            <Text style={styles.Text_2_246}>Email Id</Text>
          </View>
        </View>
        <View style={styles.View_2_247}>
          <View style={styles.View_2_248} />
          <View style={styles.View_2_249}>
            <Text style={styles.Text_2_249}>Password</Text>
          </View>
        </View>
        <View style={styles.View_2_250}>
          <View style={styles.View_2_251} />
          <TouchableOpacity
            style={styles.TouchableOpacity_2_252}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("8_7"))
            }
          >
            <Text style={styles.Text_2_252}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.View_8_6}>
          <View style={styles.View_8_2}>
            <Text style={styles.Text_8_2}>Forgot Password?</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_8_3}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_31"))
            }
          >
            <Text style={styles.Text_8_3}>Reset</Text>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a4e1122-5046-4438-99d6-081e0a0cf8e1"
            }}
            style={styles.ImageBackground_8_4}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("104%") },
  View_4_2: {
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
  View_2_168: {
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
  View_2_240: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_2_169: {
    width: wp("99%"),
    height: hp("26%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_170: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_171: {
    width: wp("99%"),
    height: hp("22%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_174: {
    width: wp("58%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_2_175: {
    width: wp("68%"),
    height: hp("8%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_176: {
    width: wp("58%"),
    height: hp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_2_177: {
    width: wp("36%"),
    height: hp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_2_178: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_179: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_180: {
    width: wp("30%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_2_181: {
    width: wp("28%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_2_182: {
    width: wp("30%"),
    height: hp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_2_183: {
    width: wp("68%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_184: {
    width: wp("68%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_185: {
    width: wp("29%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_186: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_187: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_2_188: {
    width: wp("23%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_2_189: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_2_190: {
    width: wp("69%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_191: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_2_192: {
    width: wp("23%"),
    height: hp("8%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_2_193: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_2_194: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_2_195: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_2_196: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_2_197: {
    width: wp("15%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_2_198: {
    width: wp("16%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_2_199: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_200: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_2_201: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_2_202: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_2_203: {
    width: wp("31%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_2_204: {
    width: wp("32%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_2_205: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_2_206: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_2_207: {
    width: wp("35%"),
    height: hp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_208: {
    width: wp("35%"),
    height: hp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_2_210: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_2_211: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_2_212: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_2_213: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_2_214: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_2_215: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_216: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_2_217: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_2_218: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_2_219: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_2_220: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_2_221: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_222: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_2_223: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_224: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_2_225: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_2_226: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_2_227: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_2_230: {
    width: wp("37%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_231: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_232: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_2_233: {
    width: wp("69%"),
    height: hp("8%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_2_234: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_2_235: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_2_236: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_2_239: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_2_237: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_237: {
    color: "rgba(234, 23, 23, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_238: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_238: {
    color: "rgba(48, 36, 96, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_241: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("85%")
  },
  View_2_242: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 108, 108, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_2_243: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_243: {
    color: "rgba(30, 28, 28, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_244: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("63%")
  },
  View_2_245: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_2_246: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_246: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_247: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("71%")
  },
  View_2_248: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    borderColor: "rgba(246, 218, 218, 1)",
    borderWidth: 1
  },
  View_2_249: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_250: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("91%")
  },
  View_2_251: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(116, 86, 235, 1)",
    opacity: 0.6700000166893005,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_2_252: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_252: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_6: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("79%")
  },
  View_8_2: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_3: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_8_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_4: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
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
