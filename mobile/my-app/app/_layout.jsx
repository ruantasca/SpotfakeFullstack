import { Stack } from 'expo-router'
import { LoginProvider } from '../scripts/LoginContext'

export default function Layout() {
    return (
        <LoginProvider>
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: '#1d0073'
                },
                headerTintColor: 'white'
            }}>
                <Stack.Screen name='index' options={{ headerTitle: 'Home' }} />
                <Stack.Screen name='Pagamento/index' options={{ headerTitle: 'Pagamento' }} />
                <Stack.Screen name='Registro/index' options={{ headerTitle: 'Registro' }} />
                <Stack.Screen name='Login/index' options={{ headerTitle: 'Login' }} />
                <Stack.Screen name='Perfil/index' options={{ headerTitle: 'Perfil' }} />
                <Stack.Screen name='Admin/index' options={{ headerTitle: 'AdmHome' }} />
                <Stack.Screen name='Home/index' options={{ headerTitle: 'Home' }} />
            </Stack>
        </LoginProvider>
    )
}