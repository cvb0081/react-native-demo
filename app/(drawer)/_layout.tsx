import { Drawer } from "expo-router/drawer";
import { Home, Notebook } from "lucide-react-native";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="../index"
        options={{
          title: "Home",
          drawerIcon: () => <Home size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="exercise-1"
        options={{
          title: "Exercise 1",
          drawerIcon: () => <Notebook size={20} color="black" />,
        }}
      />
      <Drawer.Screen
        name="exercise-2"
        options={{
          title: "Exercise 2",
          drawerIcon: () => <Notebook size={20} color="black" />,
        }}
      />
    </Drawer>
  );
}
