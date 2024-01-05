import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Categories = () => {
  return (
    <View style={styles.categories}>
      <Text style={styles.text17}>Категорії</Text>
      <View style={[styles.container5, styles.containerLayout2]} />
      <View style={[styles.habitTracker, styles.habitFlexBox]}>
        <View style={styles.wrapperLayout}>
          <Text style={styles.text18}>🥳</Text>
        </View>
        <Text style={[styles.text19, styles.textTypo2]}>Тижневі завдання</Text>
      </View>
      <View style={[styles.containerDateEdit4, styles.dateContainerFlexBox]}>
        <View style={[styles.date1, styles.dateContainerFlexBox]}>
          <Text style={[styles.text20, styles.textTypo1]}>2</Text>
        </View>
        <Image style={styles.editIcon4} resizeMode="cover" source="edit.png" />
      </View>
      <View style={[styles.singleTask, styles.containerLayout2]}>
        <View style={[styles.container6, styles.container6Position]} />
        <View style={[styles.habitTracker1, styles.habitFlexBox]}>
          <View style={[styles.dateWrapper, styles.wrapperLayout]}>
            <View style={[styles.date2, styles.dateContainerFlexBox]} />
          </View>
          <Text style={[styles.text19, styles.textTypo2]}>Саморозвиток</Text>
        </View>
        <View style={[styles.containerDateEdit5, styles.dateContainerFlexBox]}>
          <View style={[styles.date1, styles.dateContainerFlexBox]}>
            <Text style={[styles.text20, styles.textTypo1]}>1</Text>
          </View>
          <Image
            style={styles.editIcon4}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask1, styles.containerLayout2]}>
        <View style={[styles.container6, styles.container6Position]} />
        <View style={[styles.habitTracker1, styles.habitFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text18}>🚀</Text>
          </View>
          <Text style={[styles.text19, styles.textTypo2]}>
            Пізнавальні пригоди
          </Text>
        </View>
        <View style={[styles.containerDateEdit5, styles.dateContainerFlexBox]}>
          <View style={[styles.date1, styles.dateContainerFlexBox]}>
            <Text style={[styles.text20, styles.textTypo1]}>4</Text>
          </View>
          <Image
            style={styles.editIcon4}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask2, styles.containerLayout2]}>
        <View style={[styles.container6, styles.container6Position]} />
        <View style={[styles.habitTracker1, styles.habitFlexBox]}>
          <View style={styles.wrapperLayout}>
            <Text style={styles.text18}>🏖️</Text>
          </View>
          <Text style={[styles.text19, styles.textTypo2]}>
            Завдання на кожен день
          </Text>
        </View>
        <View style={[styles.containerDateEdit5, styles.dateContainerFlexBox]}>
          <View style={[styles.date1, styles.dateContainerFlexBox]}>
            <Text style={[styles.text20, styles.textTypo1]}>0</Text>
          </View>
          <Image
            style={styles.editIcon4}
            resizeMode="cover"
            source="edit.png"
          />
        </View>
      </View>
      <View style={[styles.singleTask3, styles.containerLayout2]}>
        <View style={[styles.container6, styles.container6Position]} />
        <View style={[styles.habitTracker1, styles.habitFlexBox]}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source="Frame.png"
          />
          <Text style={[styles.text29, styles.textTypo2]}>
            Додати нову категорію
          </Text>
        </View>
      </View>
      <Image
        style={[styles.bars3BottomLeftIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source="bars-3-bottom-left.png"
      />
      <View style={[styles.glassmorphism1, styles.container6Position]} />
      <View style={[styles.today, styles.todayPosition]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="calendar icon.png"
        />
        <Text style={[styles.text30, styles.textTypo1]}>Сьогодні</Text>
      </View>
      <Image
        style={[styles.homeIcon1, styles.iconLayout]}
        resizeMode="cover"
        source="home.png"
      />
      <Text style={[styles.text31, styles.textTypo]}>Домашня сторінка</Text>
      <View style={[styles.completed, styles.todayPosition]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source="completed.png"
        />
        <Text style={[styles.text30, styles.textTypo1]}>Виконано</Text>
      </View>
      <Image
        style={styles.categoriesChild}
        resizeMode="cover"
        source="Group 3.png"
      />
      <Text style={[styles.text33, styles.textTypo]}>Категорії</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout2: {
    height: 60,
    width: 396,
  },
  habitFlexBox: {
    alignItems: "center",
    height: 28,
    flexDirection: "row",
    backgroundColor: "#edecef",
    position: "absolute",
    borderRadius: 20,
  },
  textTypo2: {
    fontSize: 16,
    marginLeft: 12,
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
  },
  dateContainerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textTypo1: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
  },
  container6Position: {
    left: 0,
    position: "absolute",
  },
  wrapperLayout: {
    padding: 10,
    justifyContent: "center",
    height: 26,
    width: 26,
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 26,
    width: 26,
    overflow: "hidden",
  },
  todayPosition: {
    top: 866,
    position: "absolute",
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
  text17: {
    top: 85,
    left: 164,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Nunito-Bold",
    textAlign: "left",
    color: "#29262e",
    position: "absolute",
  },
  container5: {
    top: 177,
    backgroundColor: "#edecef",
    height: 60,
    width: 396,
    borderRadius: 20,
    left: 16,
    position: "absolute",
  },
  text18: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    fontWeight: "600",
    color: "#000",
  },
  text19: {
    marginLeft: 12,
    color: "#29262e",
  },
  habitTracker: {
    top: 191,
    left: 32,
  },
  text20: {
    color: "#000",
  },
  date1: {
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  editIcon4: {
    width: 20,
    height: 20,
    marginLeft: 12,
    overflow: "hidden",
  },
  containerDateEdit4: {
    top: 195,
    right: 32,
    height: 24,
    width: 80,
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "#edecef",
    position: "absolute",
    borderRadius: 20,
  },
  container6: {
    top: 0,
    height: 60,
    width: 396,
    backgroundColor: "#edecef",
    borderRadius: 20,
  },
  date2: {
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#29262e",
    borderWidth: 1.5,
    width: 10,
    height: 10,
  },
  dateWrapper: {
    flexDirection: "row",
    padding: 10,
  },
  habitTracker1: {
    top: 16,
    left: 16,
  },
  containerDateEdit5: {
    top: 18,
    right: 16,
    height: 24,
    width: 80,
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: "#edecef",
    position: "absolute",
    borderRadius: 20,
  },
  singleTask: {
    top: 256,
    left: 16,
    position: "absolute",
  },
  singleTask1: {
    top: 335,
    left: 16,
    position: "absolute",
  },
  singleTask2: {
    top: 414,
    left: 16,
    position: "absolute",
  },
  text29: {
    marginLeft: 12,
    color: "#000",
  },
  singleTask3: {
    top: 761,
    left: 16,
    position: "absolute",
  },
  bars3BottomLeftIcon1: {
    top: 45,
    left: 16,
    position: "absolute",
  },
  glassmorphism1: {
    top: 844,
    borderRadius: 12,
    backgroundColor: "#efddef",
    width: 428,
    height: 82,
  },
  text30: {
    marginTop: 8,
    color: "#29262e",
  },
  today: {
    left: 144,
    width: 57,
    justifyContent: "center",
    top: 866,
    alignItems: "center",
  },
  homeIcon1: {
    left: 51,
    top: 866,
    position: "absolute",
  },
  text31: {
    left: 16,
  },
  completed: {
    left: 242,
    width: 64,
    justifyContent: "center",
    top: 866,
    alignItems: "center",
  },
  categoriesChild: {
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
  text33: {
    left: 342,
  },
  categories: {
    backgroundColor: "#f5ecff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default Categories;
