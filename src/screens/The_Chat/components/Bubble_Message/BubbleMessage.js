import React from 'react'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { color1, color2 } from '../../../../global/constant/constant'

export default BubbleMessage = (props) => {
    return (
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: color1,
                    borderRadius: 5
                },
                left: {
                    borderRadius: 5
                }
            }}
            textStyle={{
                right: {
                    color: color2
                },
                left: {
                    color: color1
                }
            }}
        />
    )
}