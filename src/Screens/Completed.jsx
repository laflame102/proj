import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const Completed = () => {
  return (
    <View style={[styles.completed, styles.iconLayout1]}>
      <Text style={styles.text11}>Виконано</Text>
      <View style={[styles.singleTask, styles.singleLayout]}>
        <View style={styles.container3} />
        <View style={styles.habitTracker}>
          <View style={styles.boxParentLayout}>
            <View style={[styles.box3, styles.boxLayout]} />
            <Image
              style={styles.frameIcon2}
              resizeMode="cover"
              source="Frame.png"
            />
          </View>
          <Text style={[styles.text12, styles.textTypo2]}>Прочитати книгу</Text>
        </View>
        <Image
          style={styles.containerDateEdit3}
          resizeMode="cover"
          source="container (date + edit).png"
        />
      </View>
      <View style={[styles.singleTask1, styles.singleLayout]}>
        <View style={styles.container3} />
        <View style={styles.habitTracker}>
          <View style={styles.boxParentLayout}>
            <View style={[styles.box3, styles.boxLayout]} />
            <Image
              style={styles.frameIcon2}
              resizeMode="cover"
              source="Frame.png"
            />
          </View>
          <Text style={[styles.text12, styles.textTypo2]}>
            Виконати домашнє завдання
          </Text>
        </View>
        <Image
          style={styles.containerDateEdit3}
          resizeMode="cover"
          source="container (date + edit).png"
        />
      </View>
      <Image
        style={[styles.bars3BottomLeftIcon1, styles.boxParentLayout]}
        resizeMode="cover"
        source="bars-3-bottom-left.png"
      />
      <View style={[styles.glassmorphism1, styles.box3Position]} />
      <View style={[styles.today, styles.todayFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="calendar icon.png"
        />
        <Text style={[styles.text14, styles.textTypo1]}>Сьогодні</Text>
      </View>
      <Image
        style={[styles.homeIcon1, styles.iconLayout]}
        resizeMode="cover"
        source="home.png"
      />
      <Text style={[styles.text15, styles.textTypo]}>Домашня сторінка</Text>
      <View style={[styles.completed1, styles.todayFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="completed.png"
        />
        <Text style={[styles.text14, styles.textTypo1]}>Виконано</Text>
      </View>
      <Pressable style={styles.wrapper} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source="Group 2.png"
        />
      </Pressable>
      <Text style={[styles.text17, styles.textTypo]}>Категорії</Text>
      <View style={[styles.singleTask2, styles.singleLayout]}>
        <View style={styles.container3} />
        <View style={styles.habitTracker}>
          <View style={styles.boxLayout} />
          <Text style={styles.textTypo2}>Лягти раніше спати</Text>
        </View>
        <View style={styles.containerDateEdit5}>
          <View style={styles.date}>
            <Text style={[styles.text19, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon1}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.date1, styles.dateFlexBox]}>
        <Text style={[styles.text19, styles.textTypo1]}>Сьогодні</Text>
      </View>
      <View style={[styles.date2, styles.dateFlexBox]}>
        <Text style={[styles.text19, styles.textTypo1]}>Сьогодні</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  singleLayout: {
    height: 60,
    width: 396,
    left: 16,
    position: "absolute",
  },
  boxLayout: {
    backgroundColor: "#efddef",
    borderRadius: 10,
    height: 26,
    width: 26,
  },
  textTypo2: {
    marginLeft: 12,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
    color: "#29262e",
  },
  boxParentLayout: {
    height: 26,
    width: 26,
  },
  box3Position: {
    left: 0,
    position: "absolute",
  },
  todayFlexBox: {
    justifyContent: "center",
    top: 866,
    alignItems: "center",
    position: "absolute",
  },
  textTypo1: {
    fontSize: 10,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    textAlign: "center",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  textTypo: {
    top: 892,
    fontSize: 10,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    textAlign: "center",
    color: "#29262e",
    position: "absolute",
  },
  dateFlexBox: {
    left: 305,
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: "flex-end",
    backgroundColor: "#efddef",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text11: {
    top: 85,
    left: 165,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    textAlign: "center",
    color: "#29262e",
    position: "absolute",
  },
  container3: {
    backgroundColor: "#edecef",
    left: 0,
    top: 0,
    height: 60,
    width: 396,
    position: "absolute",
    borderRadius: 20,
  },
  box3: {
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: "#efddef",
  },
  frameIcon2: {
    top: 6,
    left: 7,
    width: 13,
    height: 13,
    borderRadius: 10,
    position: "absolute",
    overflow: "hidden",
  },
  text12: {
    textDecoration: "line-through",
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
  containerDateEdit3: {
    height: 24,
    right: 16,
    top: 18,
    width: 20,
    position: "absolute",
    borderRadius: 20,
  },
  singleTask: {
    top: 185,
  },
  singleTask1: {
    top: 262,
  },
  bars3BottomLeftIcon1: {
    top: 45,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  glassmorphism1: {
    top: 844,
    borderRadius: 12,
    backgroundColor: "rgba(239, 221, 239, 0.6)",
    width: 428,
    height: 82,
  },
  text14: {
    marginTop: 8,
    color: "#29262e",
    fontSize: 10,
  },
  today: {
    left: 144,
    width: 57,
  },
  homeIcon1: {
    left: 51,
    top: 866,
    width: 18,
    position: "absolute",
  },
  text15: {
    left: 16,
  },
  completed1: {
    left: 242,
    width: 64,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "82.48%",
    top: "93.63%",
    right: "13.32%",
    bottom: "4.43%",
    width: "4.21%",
    height: "1.94%",
    position: "absolute",
  },
  text17: {
    left: 342,
  },
  text19: {
    color: "#000",
  },
  date: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: "flex-end",
    backgroundColor: "#efddef",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  editIcon1: {
    height: 20,
    width: 20,
    marginLeft: 12,
    overflow: "hidden",
  },
  containerDateEdit5: {
    justifyContent: "flex-end",
    height: 24,
    right: 16,
    top: 18,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#edecef",
    position: "absolute",
    borderRadius: 20,
  },
  singleTask2: {
    top: 339,
  },
  date1: {
    top: 281,
  },
  date2: {
    top: 204,
  },
  completed: {
    backgroundColor: "#f5ecff",
    flex: 1,
    height: 926,
    overflow: "hidden",
    borderRadius: 20,
    width: "100%",
  },
});

export default Completed;
