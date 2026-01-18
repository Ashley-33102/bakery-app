import { View, Text, FlatList, StatusBar, Dimensions } from "react-native";

// Screen width for grid layout
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2; // 16 padding * 2 + 16 spacing

const categories = [
  { id: "1", name: "Cakes" },
  { id: "2", name: "Pastries" },
  { id: "3", name: "Breads" },
  { id: "4", name: "Cookies" },
  { id: "5", name: "Muffins" },
  { id: "6", name: "Macarons" },
  { id: "7", name: "Croissants" },
  { id: "8", name: "Tarts" },
];

export default function CategoriesPage() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF8F0",
        paddingTop: StatusBar.currentHeight || 40,
        paddingHorizontal: 16,
      }}
    >
      {/* Header */}
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Text
          style={{
            fontSize: 28,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#5D4037",
          }}
        >
          Categories
        </Text>
        <Text style={{ fontSize: 16, color: "#8D6E63", marginTop: 4 }}>
          Browse our bakery delights
        </Text>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
        renderItem={({ item }) => (
          <View
            style={{
              width: CARD_WIDTH,
              backgroundColor: "#D2B48C",
              padding: 20,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#5D4037",
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                fontStyle: "italic",
                color: "#5D4037",
                textAlign: "center",
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
