import React, { Fragment } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function HistoryGraphic() {
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.timeBtn}
                    onPress={() => ''}
                >
                    <Text
                        style={styles.textTimeBtn}
                    >
                        7D
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.timeBtn}
                    onPress={() => ''}
                >
                    <Text
                        style={styles.textTimeBtn}
                    >
                        15D
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.timeBtn}
                    onPress={() => ''}
                >
                    <Text
                        style={styles.textTimeBtn}
                    >
                        1M
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.timeBtn}
                    onPress={() => ''}
                >
                    <Text
                        style={styles.textTimeBtn}
                    >
                        3M
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.timeBtn}
                    onPress={() => ''}
                >
                    <Text
                        style={styles.textTimeBtn}
                    >
                        6M
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>

            </ScrollView>
        </Fragment>
    )
}