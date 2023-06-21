import { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  container,
  bgContainer,
  contentWrapper,
  keyboardView,
  title,
  input,
  inputLast,
  passWrapper,
  btnPassShow,
  btnPassShowText,
  btn,
  btnText,
  link,
  linkText,
  linkTextUnderline,
} from "../AuthPagesStyles";
import backgroundImg from "../../../assets/img/background.jpg";

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleFocus = () => {
    setIsShowKeyboard(true);
  };
  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={container}>
        <ImageBackground source={backgroundImg} style={bgContainer}>
          <View style={[contentWrapper, {paddingBottom: isShowKeyboard ? 32 : 144}]}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={keyboardView}
            >
              <Text style={{ ...title, fontFamily: 'Roboto_500Medium'}}>Увійти</Text>
              <TextInput
                style={{ ...input }}
                placeholder="Адреса електронної пошти"
                onFocus={handleFocus}
              />
              <View
                style={{
                  ...passWrapper,
                  marginBottom: isShowKeyboard ? 323 : 43,
                }}
              >
                <TextInput
                  style={{ ...input, ...inputLast }}
                  secureTextEntry={!isShowPassword}
                  placeholder="Пароль"
                  onFocus={() => handleFocus("password")}
                />
                <TouchableOpacity
                  style={btnPassShow}
                  onPress={() => setIsShowPassword((p) => !p)}
                >
                  <Text style={btnPassShowText}>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            {!isShowKeyboard && (
              <View>
                <TouchableOpacity style={btn}>
                  <Text style={btnText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={link}>
                  <Text style={linkText}>
                    Немає акаунту?{" "}
                    <Text style={linkTextUnderline}>Зареєструватися</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
