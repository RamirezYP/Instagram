import React from "react";
import { AppLoading } from "expo";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem
} from "native-base";
import {
  StyleSheet,
  View,
  Image,
  Modal,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";
import Icon4 from "react-native-vector-icons/Feather";
import Icon5 from "react-native-vector-icons/Foundation";
import Icon6 from "react-native-vector-icons/AntDesign";
import Icon7 from "react-native-vector-icons/Ionicons";

import { Video } from "expo-av";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
      showMe2: false,
      showMe3: false,
      showMe4: false,
      showMe5: false,

      isReady: false,
      buttonColor: "#000",
      name: "heart-o",

      buttonColor2: "#000",
      name2: "heart-o",

      buttonColor3: "#000",
      name3: "heart-o",

      buttonColor4: "#000",
      name4: "heart-o",

      buttonColor5: "#000",
      name5: "heart-o",

      buttonColor6: "#000",
      name5: "heart-o"
    };
  }

  onButtonPress = () => {
    if (this.state.buttonColor == "#FB1914") {
      this.setState({ buttonColor: "#000", name: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor: "#FB1914", name: "heart" }); // red
    }
  };

  onButtonPress2 = () => {
    if (this.state.buttonColor2 == "#FB1914") {
      this.setState({ buttonColor2: "#000", name2: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor2: "#FB1914", name2: "heart" }); // red
    }
  };
  onButtonPress3 = () => {
    if (this.state.buttonColor3 == "#FB1914") {
      this.setState({ buttonColor3: "#000", name3: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor3: "#FB1914", name3: "heart" }); // red
    }
  };
  onButtonPress4 = () => {
    if (this.state.buttonColor4 == "#FB1914") {
      this.setState({ buttonColor4: "#000", name4: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor4: "#FB1914", name4: "heart" }); // red
    }
  };
  onButtonPress5 = () => {
    if (this.state.buttonColor5 == "#FB1914") {
      this.setState({ buttonColor5: "#000", name5: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor5: "#FB1914", name5: "heart" }); // red
    }
  };
  onButtonPress6 = () => {
    if (this.state.buttonColor6 == "#FB1914") {
      this.setState({ buttonColor6: "#000", name6: "heart-o" }); // grey
    } else {
      this.setState({ buttonColor6: "#FB1914", name6: "heart" }); // red
    }
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <View
          style={{ paddingTop: 25, color: "black", backgroundColor: "white" }}
        ></View>
        <Header style={{ backgroundColor: "#fafafa" }}>
          <Left style={styles.header}>
            <Button transparent>
              <Icon4 name="camera" size={26} color="#000" />
            </Button>
            <Image
              source={require("./assets/instagram.png")}
              style={{ marginTop: 6 }}
            />
          </Left>
          <Body></Body>
          <Right>
            <Button transparent>
              <Icon4 name="tv" size={23} color="#000" />
            </Button>
            <Button transparent>
              <Icon3 name="paper-plane" size={23} color="#000" />
            </Button>
          </Right>
        </Header>
        {/* Contenido */}
        <Content>
          <View style={{}}>
            <ScrollView horizontal={true} style={{ height: 100 }}>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Garen_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202112"
                  }}
                />
                <Text style={styles.letra}>Tu historia</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/shurima-2016/es_MX/c9086fcc7c767c891424c11682e31d1a7635f569/assets/img/champions/amumu/amumu-hero-mobile.jpg"
                  }}
                />
                <Text style={styles.letra}>Amumu</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/leagueoflegendsoficial/images/2/26/MissFortune_1.jpg/revision/latest/zoom-crop/width/613/height/460?cb=20180111195622&path-prefix=es"
                  }}
                />
                <Text style={styles.letra}>Miss</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg"
                  }}
                />
                <Text style={styles.letra}>Darius</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_16.jpg"
                  }}
                />
                <Text style={styles.letra}>Lux</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg"
                  }}
                />
                <Text style={styles.letra}>Veigar</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri: "https://i.blogs.es/dc670f/irelia/450_1000.jpg"
                  }}
                />
                <Text style={styles.letra}>Irelia</Text>
              </View>
              <View>
                <Image
                  style={styles.historias}
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/Tristana_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203651"
                  }}
                />
                <Text style={styles.letra}>Tristana</Text>
              </View>
            </ScrollView>
            <View
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 0.5,
                marginTop: 3
              }}
            />
            <Card style={{ height: 475 }} transparent>
              <View style={styles.contenido}>
                <View style={styles.conLeft}>
                  <Image
                    style={styles.perfilcon}
                    source={{
                      uri:
                        "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/shurima-2016/es_MX/c9086fcc7c767c891424c11682e31d1a7635f569/assets/img/champions/amumu/amumu-hero-mobile.jpg"
                    }}
                  />
                </View>
                <View style={styles.conCenter}>
                  <Text style={{ color: "black" }}>Amumu</Text>
                </View>
                <View style={styles.conRight}>
                  <Image source={require("./assets/punto.png")} />
                </View>
              </View>
              <View style={{ height: 320 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://statics.memondo.com/p/s1/ccs/2019/02/CC_2713883_686e78b0266c4059a468a6c5cd474ecc_meme_otros_los_padres_siempre_tienen_una_frase_preparada.jpg?cb=4862418"
                  }}
                ></Image>
              </View>
              <CardItem style={{ height: 45 }}>
                <Left style={styles.comentarios}>
                  <View style={{ flex: 0.7 }}>
                    <Icon2
                      name={this.state.name}
                      size={25}
                      color={this.state.buttonColor}
                      onPress={this.onButtonPress}
                    />
                  </View>

                  <Modal
                    visible={this.state.showMe}
                    onRequestClose={() =>
                      console.warn("this is a close reques")
                    }
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe: false });
                        }}
                      ></TouchableOpacity>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showMe: true });
                    }}
                  >
                    <View style={{}}>
                      <Icon2 name="comment-o" size={26} color="#000" />
                    </View>
                  </TouchableOpacity>

                  <View style={{ flex: 2, marginLeft: 15 }}>
                    <Icon3 name="paper-plane" size={23} color="#000" />
                  </View>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon2 name="bookmark-o" size={26} color="#000" />
                  </Button>
                </Right>
              </CardItem>
              <View>
                <Text style={{ marginLeft: 8 }}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Amumu{" "}
                  </Text>
                  Tipico de las mamas
                </Text>

                <Modal
                  visible={this.state.showMe}
                  onRequestClose={() => console.warn("this is a close reques")}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#fafafa"
                      }}
                    >
                      <Left style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ showMe: false });
                          }}
                        >
                          <Icon7
                            name="ios-arrow-round-back"
                            size={50}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Comentarios
                        </Text>
                      </Body>
                      <Right style={{ marginRight: 15 }}>
                        <Icon3 name="paper-plane" size={23} color="#000" />
                      </Right>
                    </View>
                    <View style={styles.contenido}>
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/shurima-2016/es_MX/c9086fcc7c767c891424c11682e31d1a7635f569/assets/img/champions/amumu/amumu-hero-mobile.jpg"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Amumu{" "}
                        </Text>
                        Tipico de las mamas
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: "grey",
                        borderBottomWidth: 0.5,
                        marginTop: 5
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        paddingLeft: 1,
                        marginTop: 20
                      }}
                    >
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/Tristana_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203651"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Tristana{" "}
                        </Text>
                        Jajaja igualitas{" "}
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showMe: true });
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 8,
                      marginTop: 3,
                      color: "grey",
                      fontSize: 13
                    }}
                  >
                    Ver comentarios
                  </Text>
                </TouchableOpacity>

                <Text style={{ marginLeft: 8, marginTop: 3, fontSize: 11 }}>
                  <Text style={{ color: "grey", fontSize: 11 }}>
                    Hace 1 dia.{" "}
                  </Text>
                  Ver traducción
                </Text>
              </View>
            </Card>
            <Card style={{ height: 475 }} transparent>
              <View style={styles.contenido}>
                <View style={styles.conLeft}>
                  <Image
                    style={styles.perfilcon}
                    source={{
                      uri:
                        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg"
                    }}
                  />
                </View>
                <View style={styles.conCenter}>
                  <Text>Veigar</Text>
                </View>
                <View style={styles.conRight}>
                  <Image source={require("./assets/punto.png")} />
                </View>
              </View>
              <View style={{ height: 320 }}>
                <Video
                  source={{
                    uri:
                      "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay={false}
                  useNativeControls={true}
                  isLooping={false}
                  style={{
                    flex: 1,
                    height: 100,
                    marginTop: 15,
                    marginBottom: 10
                  }}
                />
              </View>
              <CardItem style={{ height: 45 }}>
                <Left style={styles.comentarios}>
                  <Button transparent>
                    <Icon2
                      name={this.state.name2}
                      size={25}
                      color={this.state.buttonColor2}
                      onPress={this.onButtonPress2}
                    />
                  </Button>
                  <Modal
                    visible={this.state.showMe2}
                    onRequestClose={() =>
                      console.warn("this is a close reques")
                    }
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe2: false });
                        }}
                      ></TouchableOpacity>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showMe2: true });
                    }}
                  >
                    <View style={{}}>
                      <Icon2 name="comment-o" size={26} color="#000" />
                    </View>
                  </TouchableOpacity>

                  <View style={{ flex: 2, marginLeft: 15 }}>
                    <Icon3 name="paper-plane" size={23} color="#000" />
                  </View>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon2 name="bookmark-o" size={26} color="#000" />
                  </Button>
                </Right>
              </CardItem>
              <View>
                <Text style={{ marginLeft: 8 }}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Veigar{" "}
                  </Text>
                  Momento de relajacion
                </Text>
                <Modal
                  visible={this.state.showMe2}
                  onRequestClose={() => console.warn("this is a close reques")}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#fafafa"
                      }}
                    >
                      <Left style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ showMe2: false });
                          }}
                        >
                          <Icon7
                            name="ios-arrow-round-back"
                            size={50}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Comentarios
                        </Text>
                      </Body>
                      <Right style={{ marginRight: 15 }}>
                        <Icon3 name="paper-plane" size={23} color="#000" />
                      </Right>
                    </View>
                    <View style={styles.contenido}>
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Veigar{" "}
                        </Text>
                        Momento de relajacion
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: "grey",
                        borderBottomWidth: 0.5,
                        marginTop: 5
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        paddingLeft: 1,
                        marginTop: 20
                      }}
                    >
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Garen_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202112"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Garen{" "}
                        </Text>
                        Esto me aburre :C{" "}
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showMe2: true });
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 8,
                      marginTop: 3,
                      color: "grey",
                      fontSize: 13
                    }}
                  >
                    Ver comentarios
                  </Text>
                </TouchableOpacity>

                <Text style={{ marginLeft: 8, marginTop: 3, fontSize: 11 }}>
                  <Text style={{ color: "grey", fontSize: 11 }}>
                    Hace 2 dia.{" "}
                  </Text>
                  Ver traducción
                </Text>
              </View>
            </Card>
            <Card style={{ height: 475 }} transparent>
              <View style={styles.contenido}>
                <View style={styles.conLeft}>
                  <Image
                    style={styles.perfilcon}
                    source={{
                      uri:
                        "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/Tristana_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203651"
                    }}
                  />
                </View>
                <View style={styles.conCenter}>
                  <Text>Tristana</Text>
                </View>
                <View style={styles.conRight}>
                  <Image source={require("./assets/punto.png")} />
                </View>
              </View>
              <View style={{ height: 320 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://e.ad.amtv.pe/polideportivo-league-of-legends-videojuego-que-llena-estadios-nivel-mundial-n387909-808x454-614410.jpg"
                  }}
                ></Image>
              </View>
              <CardItem style={{ height: 45 }}>
                <Left style={styles.comentarios}>
                  <Button transparent>
                    <Icon2
                      name={this.state.name3}
                      size={25}
                      color={this.state.buttonColor3}
                      onPress={this.onButtonPress3}
                    />
                  </Button>
                  <Modal
                    visible={this.state.showMe3}
                    onRequestClose={() =>
                      console.warn("this is a close reques")
                    }
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe3: false });
                        }}
                      ></TouchableOpacity>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showMe3: true });
                    }}
                  >
                    <View style={{}}>
                      <Icon2 name="comment-o" size={26} color="#000" />
                    </View>
                  </TouchableOpacity>

                  <View style={{ flex: 2, marginLeft: 15 }}>
                    <Icon3 name="paper-plane" size={23} color="#000" />
                  </View>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon2 name="bookmark-o" size={26} color="#000" />
                  </Button>
                </Right>
              </CardItem>
              <View>
                <Text style={{ marginLeft: 8 }}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Tristana{" "}
                  </Text>
                  Nice evento
                </Text>
                <Modal
                  visible={this.state.showMe3}
                  onRequestClose={() => console.warn("this is a close reques")}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#fafafa"
                      }}
                    >
                      <Left style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ showMe3: false });
                          }}
                        >
                          <Icon7
                            name="ios-arrow-round-back"
                            size={50}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Comentarios
                        </Text>
                      </Body>
                      <Right style={{ marginRight: 15 }}>
                        <Icon3 name="paper-plane" size={23} color="#000" />
                      </Right>
                    </View>
                    <View style={styles.contenido}>
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/Tristana_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414203651"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Tristana{" "}
                        </Text>
                        Nice evento{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: "grey",
                        borderBottomWidth: 0.5,
                        marginTop: 5
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        paddingLeft: 1,
                        marginTop: 20
                      }}
                    >
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri: "https://i.blogs.es/dc670f/irelia/450_1000.jpg"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Irelia{" "}
                        </Text>
                        Me encanta asistir a todos lo eventos{" "}
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showMe3: true });
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 8,
                      marginTop: 3,
                      color: "grey",
                      fontSize: 13
                    }}
                  >
                    Ver comentarios
                  </Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 8, marginTop: 3, fontSize: 11 }}>
                  <Text style={{ color: "grey", fontSize: 11 }}>
                    Hace 5 dia.{" "}
                  </Text>
                  Ver traducción
                </Text>
              </View>
            </Card>
            <Card style={{ height: 477 }} transparent>
              <View style={styles.contenido}>
                <View style={styles.conLeft}>
                  <Image
                    style={styles.perfilcon}
                    source={{
                      uri:
                        "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Garen_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202112"
                    }}
                  />
                </View>
                <View style={styles.conCenter}>
                  <Text>Garen</Text>
                </View>
                <View style={styles.conRight}>
                  <Image source={require("./assets/punto.png")} />
                </View>
              </View>
              <View style={{ height: 320 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://i.ytimg.com/vi/4eU1ZFMyoqc/hqdefault.jpg"
                  }}
                ></Image>
              </View>
              <CardItem style={{ height: 45 }}>
                <Left style={styles.comentarios}>
                  <Button transparent>
                    <Icon2
                      name={this.state.name4}
                      size={25}
                      color={this.state.buttonColor4}
                      onPress={this.onButtonPress4}
                    />
                  </Button>
                  <Modal
                    visible={this.state.showMe4}
                    onRequestClose={() =>
                      console.warn("this is a close reques")
                    }
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe4: false });
                        }}
                      ></TouchableOpacity>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showMe4: true });
                    }}
                  >
                    <View style={{}}>
                      <Icon2 name="comment-o" size={26} color="#000" />
                    </View>
                  </TouchableOpacity>

                  <View style={{ flex: 2, marginLeft: 15 }}>
                    <Icon3 name="paper-plane" size={23} color="#000" />
                  </View>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon2 name="bookmark-o" size={26} color="#000" />
                  </Button>
                </Right>
              </CardItem>
              <View>
                <Text style={{ marginLeft: 8 }}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Garen{" "}
                  </Text>
                  Mi corazón y mi espada siempre por Demacia.
                </Text>
                <Modal
                  visible={this.state.showMe4}
                  onRequestClose={() => console.warn("this is a close reques")}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#fafafa"
                      }}
                    >
                      <Left style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ showMe4: false });
                          }}
                        >
                          <Icon7
                            name="ios-arrow-round-back"
                            size={50}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Comentarios
                        </Text>
                      </Body>
                      <Right style={{ marginRight: 15 }}>
                        <Icon3 name="paper-plane" size={23} color="#000" />
                      </Right>
                    </View>
                    <View style={styles.contenido}>
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Garen_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202112"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Garen{" "}
                        </Text>
                        Mi corazón y mi espada siempre por Demacia.{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: "grey",
                        borderBottomWidth: 0.5,
                        marginTop: 5
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        paddingLeft: 1,
                        marginTop: 20
                      }}
                    >
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Darius{" "}
                        </Text>
                        Cuando quiera lo atiendo{" "}
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showMe4: true });
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 8,
                      marginTop: 3,
                      color: "grey",
                      fontSize: 13
                    }}
                  >
                    Ver comentarios
                  </Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 8, marginTop: 3, fontSize: 11 }}>
                  <Text style={{ color: "grey", fontSize: 11 }}>
                    Hace 7 dia.{" "}
                  </Text>
                  Ver traducción
                </Text>
              </View>
            </Card>
            <Card style={{ height: 470, marginTop: 20 }} transparent>
              <View style={styles.contenido}>
                <View style={styles.conLeft}>
                  <Image
                    style={styles.perfilcon}
                    source={{
                      uri:
                        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg"
                    }}
                  />
                </View>
                <View style={styles.conCenter}>
                  <Text>Darius</Text>
                </View>
                <View style={styles.conRight}>
                  <Image source={require("./assets/punto.png")} />
                </View>
              </View>
              <View style={{ height: 320 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      "https://sm.ign.com/ign_es/screenshot/default/lol-worlds-2019-preview_hjw1.jpg"
                  }}
                ></Image>
              </View>
              <CardItem style={{ height: 45 }}>
                <Left style={styles.comentarios}>
                  <Button transparent>
                    <Icon2
                      name={this.state.name5}
                      size={25}
                      color={this.state.buttonColor5}
                      onPress={this.onButtonPress5}
                    />
                  </Button>
                  <Modal
                    visible={this.state.showMe5}
                    onRequestClose={() =>
                      console.warn("this is a close reques")
                    }
                  >
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showMe5: false });
                        }}
                      ></TouchableOpacity>
                    </View>
                  </Modal>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ showMe5: true });
                    }}
                  >
                    <View style={{}}>
                      <Icon2 name="comment-o" size={26} color="#000" />
                    </View>
                  </TouchableOpacity>

                  <View style={{ flex: 2, marginLeft: 15 }}>
                    <Icon3 name="paper-plane" size={23} color="#000" />
                  </View>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon2 name="bookmark-o" size={26} color="#000" />
                  </Button>
                </Right>
              </CardItem>
              <View>
                <Text style={{ marginLeft: 8 }}>
                  <Text style={{ color: "black", fontWeight: "bold" }}>
                    Darius{" "}
                  </Text>
                  El evento que estaba esperando{" "}
                </Text>
                <Modal
                  visible={this.state.showMe5}
                  onRequestClose={() => console.warn("this is a close reques")}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "#fafafa"
                      }}
                    >
                      <Left style={{ marginLeft: 15 }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ showMe5: false });
                          }}
                        >
                          <Icon7
                            name="ios-arrow-round-back"
                            size={50}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Comentarios
                        </Text>
                      </Body>
                      <Right style={{ marginRight: 15 }}>
                        <Icon3 name="paper-plane" size={23} color="#000" />
                      </Right>
                    </View>
                    <View style={styles.contenido}>
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Darius{" "}
                        </Text>
                        El evento que estaba esperando{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        borderBottomColor: "grey",
                        borderBottomWidth: 0.5,
                        marginTop: 5
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        paddingLeft: 1,
                        marginTop: 20
                      }}
                    >
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Garen_OriginalCentered.jpg/revision/latest/scale-to-width-down/1215?cb=20180414202112"
                        }}
                      />
                      <Text style={{ marginLeft: 8 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Garen{" "}
                        </Text>
                        Nunca me vencerás{" "}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 1,
                        paddingLeft: 1,
                        marginTop: 20
                      }}
                    >
                      <Image
                        style={styles.perfilcon}
                        source={{
                          uri:
                            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg"
                        }}
                      />
                      <Text style={{ marginLeft: 8, height: 100 }}>
                        <Text style={{ color: "black", fontWeight: "bold" }}>
                          Darius{" "}
                        </Text>
                        Caeras en tu propio ego{" "}
                      </Text>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showMe5: true });
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 8,
                      marginTop: 3,
                      color: "grey",
                      fontSize: 13
                    }}
                  >
                    Ver comentarios
                  </Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 8, marginTop: 3, fontSize: 11 }}>
                  <Text style={{ color: "grey", fontSize: 11 }}>
                    Hace 10 dia.{" "}
                  </Text>
                  Ver traducción
                </Text>
              </View>
            </Card>
          </View>
        </Content>
        {/* Contenido */}
        <Footer>
          <FooterTab style={{ backgroundColor: "#fafafa", elevation: 2 }}>
            <Button vertical>
              <Icon5 name="home" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon4 name="search" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon2 name="plus-square-o" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon6 name="hearto" size={28} color="#000" />
            </Button>
            <Button vertical>
              <Icon6 name="user" size={28} color="#000" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row"
  },
  headerLeft: {
    flex: 0.5,
    marginLeft: 10
  },
  headerLeftCenter: {
    flex: 3
  },
  headerRightCenter: {
    flex: 0.5
  },
  headerRight: {
    flex: 0.5
  },
  historias: {
    width: 65,
    height: 65,
    borderRadius: 64,
    margin: 6.8
  },
  letra: {
    fontSize: 13,
    textAlign: "center"
  },
  contenido: {
    marginTop: 12,
    flexDirection: "row"
  },
  conLeft: {
    flex: 0.5
  },
  conCenter: {
    flex: 3,
    marginTop: 5
  },
  perfilcon: {
    width: 35,
    height: 35,
    borderRadius: 64,
    marginLeft: 6.8
  },
  image: {
    marginTop: 10,
    flex: 2,
    height: 100
  },
  comentarios: {
    flexDirection: "row",
    marginLeft: 1,
    paddingLeft: 1
  },
  corazon: {
    flex: 0.3
  },
  comentario: {
    flex: 0.3
  },
  chat: {
    flex: 1.8
  }
});
