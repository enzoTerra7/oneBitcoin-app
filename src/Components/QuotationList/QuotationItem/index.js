import { Text, View, Image } from 'react-native'
import { styles } from './styles'

export default function QuotationItem() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContent}>
                <View style={styles.logoBox}>
                    <Image
                        style={styles.currencyImg}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnyGZMh092ZPJD-EJNg2z13pxC8AaMI-pHA&usqp=CAU' }}
                    />
                    <Text
                        style={styles.date}
                    >
                        21/11/202
                    </Text>
                </View>
            </View>
            <View style={styles.rightContent}>
                <Text
                    style={styles.price}
                >
                    R$ 85930,28
                </Text>
            </View>
        </View>
    )
}