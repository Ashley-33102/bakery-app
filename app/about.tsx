import { View, Text, ScrollView, StatusBar } from "react-native";

export default function AboutPage() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFF8F0", paddingTop: StatusBar.currentHeight || 40 }}
      contentContainerStyle={{ padding: 16 }}
    >
      {/* Header */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 28,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#5D4037", // dark brown
            textAlign: "center",
          }}
        >
          About Cakes & Bakes
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#8D6E63", // lighter brown
            marginTop: 4,
            textAlign: "center",
          }}
        >
          Warm, freshly baked treats made with love!
        </Text>
      </View>

      {/* Our Story */}
      <View
        style={{
          backgroundColor: "#D2B48C", // light brown card
          borderRadius: 16,
          padding: 20,
          marginBottom: 16,
          shadowColor: "#5D4037",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#5D4037", marginBottom: 8 }}>
          Our Story
        </Text>
        <Text style={{ color: "#5D4037", lineHeight: 22 }}>
          Cakes & Bakes has been serving delicious baked goods for over 7 years. Our mission is to bring the joy of fresh, handmade treats to every home. We focus on quality ingredients and traditional baking techniques to create the perfect dessert experience.
        </Text>
      </View>

      {/* Our Specialties */}
      <View
        style={{
          backgroundColor: "#D2B48C",
          borderRadius: 16,
          padding: 20,
          marginBottom: 16,
          shadowColor: "#5D4037",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#5D4037", marginBottom: 8 }}>
          Our Specialties
        </Text>
        <Text style={{ color: "#5D4037", lineHeight: 22 }}>
          We are famous for our:
        </Text>
        <Text style={{ color: "#5D4037", lineHeight: 22, marginTop: 4 }}>
          • Chocolate Cake  
          • Red Velvet Cake  
          • Blueberry Muffins  
          • Cinnamon Rolls  
          • Macarons
        </Text>
      </View>

      {/* Serving Since */}
      <View
        style={{
          backgroundColor: "#D2B48C",
          borderRadius: 16,
          padding: 20,
          marginBottom: 16,
          shadowColor: "#5D4037",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#5D4037", marginBottom: 8 }}>
          Serving Since
        </Text>
        <Text style={{ color: "#5D4037", lineHeight: 22 }}>
          We’ve been delighting customers since 2017 with handcrafted baked goods that taste as good as they look. Our dedication to quality and flavor keeps our customers coming back for more!
        </Text>
      </View>
    </ScrollView>
  );
}
