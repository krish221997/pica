import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from '../contexts/AuthContext';

export function CustomDrawerContent(props: any) {
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sign Out"
        onPress={signOut}
        // You can customize the style/icon if needed
        // icon={({ color, size }) => (
        //   <Icon name="logout" color={color} size={size} />
        // )}
      />
    </DrawerContentScrollView>
  );
} 