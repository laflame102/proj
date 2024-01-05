import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";

const Today = () => {
  return (
    <View style={styles.today}>
      <Text style={styles.text12}>Сьогодні</Text>
      <Image
        style={styles.bars3BottomLeftIcon1}
        resizeMode="cover"
        source="bars-3-bottom-left.png"
      />
      <View style={[styles.singleTask, styles.singleLayout]}>
        <View style={styles.container3} />
        <View style={styles.habitTracker}>
          <View style={styles.box3} />
          <Text style={styles.text13}>Виконати домашнє завдання</Text>
        </View>
        <View style={styles.containerDateEdit3}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text14, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon3}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask1, styles.singleLayout]}>
        <View style={styles.container3} />
        <View style={styles.habitTracker}>
          <View style={styles.box3} />
          <Text style={styles.text13}>Прочитати книгу</Text>
        </View>
        <View style={styles.containerDateEdit3}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text14, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon3}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.addnewtask, styles.dateFlexBox]}>
        <Text style={[styles.text17, styles.textTypo1]}>Додати завдання</Text>
      </View>
      <View style={[styles.singleTask2, styles.singleLayout]}>
        <View style={styles.container3} />
        <View style={styles.habitTracker}>
          <View style={styles.box3} />
          <Text style={styles.text13}>Лягти раніше спати</Text>
        </View>
        <View style={styles.containerDateEdit3}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text14, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon3}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={styles.glassmorphism1} />
      <View style={[styles.today1, styles.today1FlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="calendar icon.png"
        />
        <Text style={[styles.text20, styles.textTypo2]}>Сьогодні</Text>
      </View>
      <Image
        style={[styles.homeIcon1, styles.iconLayout]}
        resizeMode="cover"
        source="home.png"
      />
      <Text style={[styles.text21, styles.textTypo]}>Домашня сторінка</Text>
      <Pressable
        style={[styles.completed, styles.today1FlexBox]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="completed.png"
        />
        <Text style={[styles.text20, styles.textTypo2]}>Виконано</Text>
      </Pressable>
      <Image
        style={styles.todayChild}
        resizeMode="cover"
        source="Group 1.png"
      />
      <Text style={[styles.text23, styles.textTypo]}>Категорії</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singleLayout: {
    height: 60,
    width: 396,
    left: 16,
    position: "absolute",
  },
  textTypo1: {
    color: "#000",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
  },
  dateFlexBox: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: "flex-end",
    backgroundColor: "#efddef",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  today1FlexBox: {
    justifyContent: "center",
    top: 866,
    alignItems: "center",
    position: "absolute",
  },
  textTypo2: {
    fontSize: 10,
    textAlign: "center",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  textTypo: {
    top: 892,
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    color: "#29262e",
    position: "absolute",
  },
  text12: {
    top: 82,
    left: 179,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    textAlign: "left",
    color: "#29262e",
    position: "absolute",
  },
  bars3BottomLeftIcon1: {
    top: 49,
    height: 26,
    width: 26,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  container3: {
    top: 0,
    backgroundColor: "#edecef",
    left: 0,
    height: 60,
    width: 396,
    position: "absolute",
    borderRadius: 20,
  },
  box3: {
    backgroundColor: "#efddef",
    borderRadius: 10,
    height: 26,
    width: 26,
  },
  text13: {
    fontSize: 12,
    marginLeft: 12,
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    color: "#29262e",
  },
  habitTracker: {
    top: 16,
    height: 28,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#edecef",
    left: 16,
    position: "absolute",
    borderRadius: 20,
  },
  text14: {
    fontSize: 10,
    textAlign: "center",
  },
  editIcon3: {
    width: 20,
    height: 20,
    marginLeft: 12,
    overflow: "hidden",
  },
  containerDateEdit3: {
    top: 18,
    right: 16,
    height: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#edecef",
    position: "absolute",
    borderRadius: 20,
  },
  singleTask: {
    top: 269,
  },
  singleTask1: {
    top: 194,
  },
  text17: {
    fontSize: 15,
    textAlign: "left",
  },
  addnewtask: {
    top: 143,
    left: 27,
    width: 144,
    position: "absolute",
  },
  singleTask2: {
    top: 344,
  },
  glassmorphism1: {
    top: 844,
    borderRadius: 12,
    backgroundColor: "rgba(239, 221, 239, 0.6)",
    width: 428,
    height: 82,
    left: 0,
    position: "absolute",
  },
  text20: {
    marginTop: 8,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    fontSize: 10,
    color: "#29262e",
  },
  today1: {
    left: 144,
    width: 57,
  },
  homeIcon1: {
    left: 51,
    top: 866,
    width: 18,
    position: "absolute",
  },
  text21: {
    left: 16,
    top: 892,
  },
  completed: {
    left: 242,
    width: 64,
  },
  todayChild: {
    height: "1.94%",
    width: "4.21%",
    top: "93.63%",
    right: "13.32%",
    bottom: "4.43%",
    left: "82.48%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text23: {
    left: 342,
  },
  today: {
    backgroundColor: "#f5ecff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default Today;
