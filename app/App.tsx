import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header  from '../components/Header';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={30}>

      <ScrollView>
        {/* Header */}
        <Header />



        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Bateu a fome?</Text>
            <Text style={styles.grettingSubtitle}>Escolha seu burger artesanal de hoje</Text>
          </View>

          <View style={styles.featured}>
            <Image style={styles.image} source={require('../assets/images/burguerprincipal.png')}></Image>
            <Text style={styles.featuredTitle}>Smash Duplo Cheddar</Text>
            <Text style={styles.featuredDestaque}>Destaque</Text>
            <Text style={styles.featuredDescription}>Dois blends de 100g, queijo cheddar derretido e molho especial</Text>
            <Text style={styles.featuredPrice}>R$ 34,90</Text>
          </View>
        </View>


        <Text style={styles.sectionTitle}>Nossos Burguers</Text>
          <View style={styles.menu}>
          <Image style={styles.image} source={require('../assets/images/burguerprincipal.png')}></Image>
          <Image style={styles.image} source={require('../assets/images/burguerprincipal.png')}></Image>
          <Image style={styles.image} source={require('../assets/images/burguerprincipal.png')}></Image>
          <Image style={styles.image} source={require('../assets/images/burguerprincipal.png')}></Image>
          </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },

  content: {
    paddingHorizontal: 24
  },

  grettingSection: {
    paddingHorizontal:10,
    marginTop: 10,
    marginBottom: 24,
    elevation: 6
  },
  grettingTitle: {
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "800",
    color: "#2f2d2c",
    textDecorationStyle: "solid"
  },
  grettingSubtitle: {
    fontSize: 15,
    fontFamily: "inter",
    fontWeight: "400",
    color: "#6C757D"
  },
  featured: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32,
    paddingBottom: 32,
    
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 24

    
  },

  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  featuredDestaque:{
    fontSize: 20,
    fontWeight: "800",
    color: "#E65100",
  },

  featuredDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 6
  },

  featuredPrice: {
    fontSize: 24,
    fontWeight: "800",
    color:"#E65100",
    marginTop: 12
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },


  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32
  },
  burguerimages:{

  },

  orderSection: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },


  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4e",
    textAlign: "center",
    marginTop: 20,
  },
});


