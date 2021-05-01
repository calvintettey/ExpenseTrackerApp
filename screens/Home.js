import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";

export default function Home() {
  function renderNavBar() {
    return (
      <View
      style={{
          flexDirection: "row",
          height: 80,
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
      }}>
        <TouchableOpacity
            style={{justifyContent:"center",width: 50 }}
            onPress={() => console.log("Back")}
        >
          <Image
            source={icons.back_arrow}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
        style={{justifyContent:"center", alignItems: 'flex-end', width: 50 }}
            onPress={() => console.log("More")}>
          <Image
            source={icons.more}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {/* Navbar section */}
      {renderNavBar()}
      
    </View>
  );
}
