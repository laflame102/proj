import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const Home = () => {
  return (
    <View style={styles.homepage}>
      <Text style={[styles.text16, styles.textFlexBox]}>{`Добрий ранок друже!
        				4 січня - 5 завдань`}</Text>
      <View style={[styles.singleTask, styles.singleLayout]}>
        <View style={[styles.container5, styles.containerBg1]} />
        <View style={[styles.habitTracker, styles.habitFlexBox]}>
          <View style={[styles.box4, styles.boxIconLayout]} />
          <Text style={[styles.text17, styles.textTypo3]}>Медитація</Text>
        </View>
        <View style={[styles.containerDateEdit5, styles.containerFlexBox]}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text18, styles.textTypo2]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon5}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask1, styles.singleLayout]}>
        <View style={[styles.container6, styles.containerBg]} />
        <View style={[styles.habitTracker1, styles.containerBg]}>
          <Image
            style={[styles.boxIcon1, styles.boxIconLayout]}
            resizeMode="cover"
            source="box.png"
          />
          <Text style={[styles.text17, styles.textTypo3]}>Прогулянка</Text>
        </View>
        <View style={[styles.containerDateEdit6, styles.containerBg]}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text20, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon5}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask2, styles.singleLayout]}>
        <View style={[styles.container6, styles.containerBg]} />
        <View style={[styles.habitTracker1, styles.containerBg]}>
          <View style={[styles.box4, styles.boxIconLayout]} />
          <Text style={[styles.text17, styles.textTypo3]}>Читання книги</Text>
        </View>
        <View style={[styles.containerDateEdit6, styles.containerBg]}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text20, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon5}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask3, styles.singleLayout]}>
        <View style={[styles.container6, styles.containerBg]} />
        <View style={[styles.habitTracker1, styles.containerBg]}>
          <View style={[styles.box4, styles.boxIconLayout]} />
          <Text style={[styles.text17, styles.textTypo3]}>
            Випити 8 склянок води
          </Text>
        </View>
        <View style={[styles.containerDateEdit6, styles.containerBg]}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text20, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon5}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask4, styles.singleLayout]}>
        <View style={[styles.container6, styles.containerBg]} />
        <View style={[styles.habitTracker1, styles.containerBg]}>
          <View style={[styles.box4, styles.boxIconLayout]} />
          <Text style={[styles.text17, styles.textTypo3]}>
            Лягти вчасно спати
          </Text>
        </View>
        <View style={[styles.containerDateEdit6, styles.containerBg]}>
          <View style={styles.dateFlexBox}>
            <Text style={[styles.text20, styles.textTypo1]}>Сьогодні</Text>
          </View>
          <Image
            style={styles.editIcon5}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <Image
        style={[styles.bars3BottomLeftIcon1, styles.boxIconLayout]}
        resizeMode="cover"
        source="bars-3-bottom-left.png"
      />
      <View style={[styles.date5, styles.dateFlexBox]}>
        <Text style={[styles.text27, styles.textTypo1]}>Додати завдання</Text>
      </View>
      <View style={styles.glassmorphism1} />
      <Image
        style={[styles.homeIcon1, styles.iconLayout]}
        resizeMode="cover"
        source="home.png"
      />
      <Text style={[styles.text28, styles.textTypo]}>Домашня сторінка</Text>
      <Pressable style={[styles.today, styles.todayFlexBox]} onPress={() => {}}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="calendar icon.png"
        />
        <Text style={[styles.text29, styles.textTypo2]}>Сьогодні</Text>
      </Pressable>
      <Pressable
        style={[styles.completed, styles.todayFlexBox]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="completed.png"
        />
        <Text style={[styles.text29, styles.textTypo2]}>Виконано</Text>
      </Pressable>
      <Image
        style={styles.homepageChild}
        resizeMode="cover"
        source="Group 1.png"
      />
      <Text style={[styles.text31, styles.textTypo]}>Категорії</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: "#29262e",
  },
  singleLayout: {
    height: 60,
    width: 396,
    left: 16,
    position: "absolute",
  },
  containerBg1: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 20,
  },
  habitFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 28,
    top: 16,
    left: 16,
  },
  boxIconLayout: {
    height: 26,
    width: 26,
  },
  textTypo3: {
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    height: 24,
    right: 16,
    top: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo2: {
    fontSize: 10,
    textAlign: "center",
  },
  containerBg: {
    backgroundColor: "#edecef",
    position: "absolute",
    borderRadius: 20,
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
  todayFlexBox: {
    justifyContent: "center",
    top: 866,
    alignItems: "center",
    position: "absolute",
  },
  text16: {
    top: 83,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    width: 326,
    height: 55,
    left: 51,
    textAlign: "center",
    position: "absolute",
  },
  container5: {
    left: 0,
    top: 0,
    height: 60,
    width: 396,
  },
  box4: {
    backgroundColor: "#efddef",
    height: 26,
    width: 26,
    borderRadius: 10,
  },
  text17: {
    fontSize: 12,
    marginLeft: 12,
    textAlign: "center",
    color: "#29262e",
  },
  habitTracker: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 20,
  },
  text18: {
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
  },
  editIcon5: {
    width: 20,
    height: 20,
    marginLeft: 12,
    overflow: "hidden",
  },
  containerDateEdit5: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 20,
  },
  singleTask: {
    top: 236,
  },
  container6: {
    left: 0,
    top: 0,
    height: 60,
    width: 396,
  },
  boxIcon1: {
    borderRadius: 10,
    height: 26,
    width: 26,
  },
  habitTracker1: {
    alignItems: "center",
    flexDirection: "row",
    height: 28,
    top: 16,
    left: 16,
  },
  text20: {
    fontSize: 10,
    textAlign: "center",
  },
  containerDateEdit6: {
    justifyContent: "flex-end",
    height: 24,
    right: 16,
    top: 18,
    alignItems: "center",
    flexDirection: "row",
  },
  singleTask1: {
    top: 310,
  },
  singleTask2: {
    top: 384,
  },
  singleTask3: {
    top: 458,
  },
  singleTask4: {
    top: 532,
  },
  bars3BottomLeftIcon1: {
    top: 47,
    left: 9,
    position: "absolute",
    overflow: "hidden",
  },
  text27: {
    fontSize: 15,
    textAlign: "left",
  },
  date5: {
    top: 177,
    left: 32,
    width: 144,
    position: "absolute",
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
  homeIcon1: {
    top: 866,
    height: 18,
    width: 18,
    left: 51,
    position: "absolute",
  },
  text28: {
    left: 16,
    top: 892,
  },
  text29: {
    marginTop: 8,
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    color: "#29262e",
    fontSize: 10,
  },
  today: {
    left: 137,
    width: 57,
  },
  completed: {
    left: 226,
    width: 64,
  },
  homepageChild: {
    height: "1.94%",
    width: "4.21%",
    top: "93.52%",
    right: "14.95%",
    bottom: "4.54%",
    left: "80.84%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text31: {
    left: 334,
  },
  homepage: {
    backgroundColor: "#f5ecff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default Home;
