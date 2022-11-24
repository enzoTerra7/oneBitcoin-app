import { Text, View } from 'react-native'
import {styles} from './styles'

export default function CurrentPrice() {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>
                R$91324,00
            </Text>
            <Text>
                Última cotação
            </Text>
        </View>
    )
}