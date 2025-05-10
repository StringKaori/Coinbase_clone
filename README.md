# Coinbase Clone
This project was created for the subject of Mobile Development at IFSP-BRA, the objective is to implement some concepts learned at the classes, all groups got random designs to implement, ours was the Coinbase with major changes to the original one.
[link to the original design](https://www.uistore.design/items/coinbase-web-and-mobile-free-ui-kit/).

## Flutter Resources Score and it's equivalence on React Native:

### [RC1] Folder structure architecture
I know the way I did it is ugly, it is this way only to be more didactic when I'm presenting this in front of the class, and since the idea was only to organize the project and not implement a real architecture pattern on the project I've decided to do it this way.

### [RC2] Navigation routes
For this one I've used the popular [@react-navigation](https://reactnavigation.org/docs/getting-started) lib to handle all navigations type on the app like [stacks](/app/Routes/Stack/MainStack/MainStack.tsx#L8), [tabs](/app/Routes/Tab/BottomTab/BottomTab.tsx#L13) and [drawers](/app/Routes/Drawer/DrawerComponent.tsx#L14).

### [RC3] Pass data between screens using navigation
The [@react-navigation](https://reactnavigation.org/docs/getting-started) lib allows this by using route params, it was used to select the type of currency you want to exchange at the [HomeScreen](/app/modules/Home/View/HomeScreen.tsx#L45) passing the data to the [DefaultExchangeScreen](/app/modules/ExchangeCurrency/View/DefaultExchangeScreen.tsx#L16).

### [RC4] Define a form in the app
In flutter there's a form widget that contains all the inputs and handle the submit, there was a way to copy it using a react native lib, but talking to the professor he said inputs and submit is okay, it don't have to be the same, so i've created custom input components, such as [InputWithIcon](/app/common/components/InputWithIcon/InputWithIcon.tsx) and used it to create forms like the [LoginScreen](/app/modules/Login/View/LoginScreen.tsx) and [RegisterScreen](/app/modules/Register/View/RegisterScreen.tsx).

### [RC5] Make the app responsive to screen rotation.
This was tricky because our design isn't suited to landscape orientation (I don't usually see this kind of app letting users rotate), so I've decided to make only the [HomeScreen](/app/modules/Home/View/HomeScreen.tsx) rotate to landscape, for the responsiveness I've used React Native default hook [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions) that allow me to get the phone's width and height, an to rotate I've used the [expo-screen-orientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/) lib.

### [RC6] Define the app Theme using ThemeData
This one was tricky too, because React Native don't has a ThemeData or anything like it by default, so to work around this I've used [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction), it is a lib that allows us to create global states that can be used in any part of the code, and change it dynamically, with it i've created the [useThemeStore](/app/theme/useThemeStore.ts) hook that uses the [lightTheme](/app/theme/lightTheme.ts) file to define all of the app colors, font sizes and etc.

## Layout Fidelity Score and it's equivalence on React Native:

### 1. Welcome screen
The original design had one, I've implemented it removing the carousel and turning it into a singular screen.

### 2. Screen using a ListView
The direct React Native equivalent to the ListView is the FlatList, that works very similar to the ListView, receiving an array and mapping it to a custom component, it was used in the [HomeScreen](/app/modules/Home/View/HomeScreen.tsx#L35) to list all of the currencies the user can exchange and in the [RecentTransactionsView](/app/common/components/RecentTransactions/RecentTransactionsView.tsx#L29) component that is used to list all of the recent transactions at the Profile and Transactions History screens.

### 3. Screen using forms
It was already explained with screen examples previously, please refer to [[RC4] Define a form on the app](###[RC4]-Define-a-form-on-the-app).

### 4. Screen using a GridView
In React Native there is no component exclusive for grids, what devs do is using FlatList with the numColumns property to create the same effect, it was used at the [HomeScreen](/app/modules/Home/View/HomeScreen.tsx#L53), **but only when the screen rotation is in landscape mode**.

### 5. Screen presenting a selected item 
It was already explained with screen examples previously, please refer to [[RC3] Pass data between screens using navigation](###[RC3]-Pass-data-between-screens-using-navigation).

### 6. Use of Material Widgets (AppBar, Drawer, BottomNavigationBar, FloatActionButton)

#### AppBar

In React Native there are some ways to use the equivalent of an AppBar, the solution I've used here is using the navigation's headers to simulate and AppBar with two custom headers [CustomHeader](/app/common/components/CustomHeader/CustomHeader.tsx) and [CustomTabbarHeader](/app/common/components/CustomHeader/CustomTabbarHeader.tsx)

#### Drawer
It was created only so that the app would have one, when clicking at the drawer icon at the header the app will navigate to an isolated [component](/app/Routes/Drawer/DrawerComponent.tsx) that has a drawer navigation with the Home, Profile and Transaction History screens.

#### BottomNavigationBar
In React Native this is called a BottomTabNavigator, the main flow of the app is based on this with the [BottomTab](/app/Routes/Tab/BottomTab/BottomTab.tsx) component being the responsible for creating the bottom tab and making the redirects to the Home, Transaction History and EditProfile screens.

#### FloatActionButton
In React Native there isn't a default component for it, I've created a similar effect at the using the [EditProfileScreen](/app/modules/Profile/View/EditProfileScreen.tsx#L104) ScrollView onScroll property to capture the y value of the screen and update it on a position absolute button so it will always stay at the bottom left of the screen even when scrolling.