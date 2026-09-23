import {StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function Header() {
    return (
        <View style={styles.Header}>
            <View>
                <Text style={styles.HeaderTitle}>Burguer Craft</Text>
                <Text style={styles.HeaderSubtitle}>Sabor artesanal de verdade</Text>
            </View>


            <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={20} color="#2f2d2c"></Ionicons>
            </View>
        </View>


    );

}
const styles = StyleSheet.create({
    Header: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    HeaderTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  HeaderSubtitle: {
    fontSize: 14,
    color: "#6C757D",
    marginTop: 4
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },
})


