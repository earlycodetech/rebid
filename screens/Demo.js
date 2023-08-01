import { View,SafeAreaView } from "react-native"

export const Demo = ({children}) => {
    return (
        <SafeAreaView>
            {children}
        </SafeAreaView>
    )
}