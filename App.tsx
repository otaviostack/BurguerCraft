import { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

export default function App(){
  return (
    <KeyboardAvoidingView style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={30}>

      <ScrollView>
        {/* Header */}



        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Bateu a fome?</Text>
            <Text style={styles.grettingSubtitle}>Escolha seu burger artesanal de hoje</Text>
          </View>

          <View style={styles.featured}>
            <Image style={styles.image} source={require('./assets/burguerprincipal.png')}></Image>
            <Text style={styles.featuredTitle}>Smash Duplo Cheddar</Text>
            <Text style={styles.featuredDescription}>Dois blends de 100g, queijo cheddar derretido e molho especial</Text>
            <Text style={styles.featuredPrice}>R$ 34,90</Text>
          </View>
          </View>


          <Text style={styles.sectiontitle}>Nossos Burguers</Text>

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
    marginTop: 10,
    marginBottom: 24
  },
  featured: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },

  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16
  },

  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },

  featuredDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  featuredPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#c67c4e",
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


