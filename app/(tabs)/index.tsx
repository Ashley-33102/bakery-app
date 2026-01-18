import { View, Text, FlatList, StatusBar } from "react-native";

// Bakery items
const bakeryItems = [
  { id: "1", name: "Chocolate Cake", price: 1800, available: true },
  { id: "2", name: "Strawberry Pastry", price: 250, available: true },
  { id: "3", name: "Garlic Bread", price: 350, available: false },
  { id: "4", name: "Vanilla Cupcake", price: 150, available: true },
  { id: "5", name: "Blueberry Muffin", price: 180, available: true },
  { id: "6", name: "Croissant", price: 220, available: true },
  { id: "7", name: "Cinnamon Roll", price: 200, available: false },
  { id: "8", name: "Cheese Danish", price: 190, available: true },
  { id: "9", name: "Brownie", price: 120, available: true },
  { id: "10", name: "Macarons", price: 300, available: true },
  { id: "11", name: "Banana Bread", price: 250, available: true },
  { id: "12", name: "Red Velvet Cake", price: 2000, available: true },
  { id: "13", name: "Lemon Tart", price: 280, available: true },
  { id: "14", name: "Chocolate Chip Cookie", price: 100, available: true },
  { id: "15", name: "Pecan Pie", price: 450, available: false },
];

export default function BakeryMenu() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF8F0", // cream white background
        paddingTop: StatusBar.currentHeight || 40,
      }}
    >
      {/* Custom Header */}
      <View
        style={{
          padding: 16,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#5D4037", // dark brown
          }}
        >
          Cakes & Bakes
        </Text>
        <Text style={{ fontSize: 16, color: "#8D6E63", marginTop: 4 }}>
          Warm, freshly baked treats made with love!
        </Text>
      </View>

      {/* Bakery Items */}
      <FlatList
        data={bakeryItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#D2B48C", // light brown card
              padding: 20,
              borderRadius: 16,
              marginBottom: 16,
              shadowColor: "#5D4037", // dark brown shadow
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 5,
              elevation: 5, // Android shadow
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                fontStyle: "italic",
                color: "#5D4037", // dark brown text
              }}
            >
              {item.name}
            </Text>
            <Text style={{ color: "#5D4037", marginTop: 4 }}>Rs. {item.price}</Text>
            <Text
              style={{
                color: item.available ? "#5D4037" : "#FFF",
                marginTop: 4,
                fontWeight: "bold",
              }}
            >
              {item.available ? "Available" : "Out of Stock"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
