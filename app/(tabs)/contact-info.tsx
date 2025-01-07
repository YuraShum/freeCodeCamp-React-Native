import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import logo from "@/assets/images/coffee-icon.png";

export default function ContactInfo() {
  return (
    <ScrollView style={styles.container}>
      {/** store name section */}
      <View style={styles.header}>
        <View style={styles.titleTextsection}>
          <Image source={logo} resizeMode="cover" style={styles.image} />
          <Text style={styles.headeTitle}>Coffee Haven</Text>
        </View>
        <Text style={styles.sectionText}>
          Delicious coffee that warms the soul
        </Text>
      </View>

      {/** addres section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address:</Text>
        <View style={styles.sectionList}>
          <Text style={styles.sectionItem}>
            123 Coffee Street, Kyiv, Ukraine
          </Text>
          <Text style={styles.sectionItem}>54.2a Naberezna, Lviv, Ukraine</Text>
          <Text style={styles.sectionItem}>42 Street, Rivne, Ukraine</Text>
        </View>
      </View>

      {/** working hours section*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Working Hours:</Text>
        <View style={styles.sectionList}>
          <Text style={styles.sectionItem}>
            Monday - Friday: 8:00 AM - 8:00 PM
          </Text>
          <Text style={styles.sectionItem}>
            Saturday - Sunday: 9:00 AM - 6:00 PM
          </Text>
        </View>
      </View>

      {/** About us section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us:</Text>
        <ImageBackground source={logo} style={styles.backgroundImage}>
          <View style={styles.overlay} />
          <Text style={styles.backgroundText}>
            At "Coffee Haven," we take pride in serving freshly brewed coffee
            and delicious desserts. We use only the finest coffee beans and
            natural ingredients to provide you with an unforgettable experience.
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#6A4E4E",
    padding: 20,
    alignItems: "center",
  },
  headeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 10,
  },
  titleTextsection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 8,
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionText: {
    color: "white",
    opacity: 0.7,
    fontSize: 14,
  },
  sectionList: {
    gap: 15,
    marginLeft: 10,
  },
  sectionItem: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#6A4E4E",
    padding: 10,
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    position: "relative",
    borderRadius: 30,
    overflow: "hidden"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(106, 78, 78, 0.7)",
    zIndex: 1,
    borderRadius: 30
  },

  backgroundText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    padding: 10,
    zIndex: 2,
    fontWeight: 400,
  },
});
