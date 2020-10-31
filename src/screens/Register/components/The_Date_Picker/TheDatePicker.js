import React, { Component, useState } from 'react'
import DatePicker from 'react-native-datepicker'
import { color1 } from '../../../../global/constant/constant'
import style, { customStyles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View } from 'react-native'

export default TheDatePicker = ({ birth, setBirth }) => {
    return (
        <DatePicker
            style={style.container}
            date={birth}
            placeholder='Data de Nascimento'
            mode="date"
            format="DD-MM-YYYY"
            // minDate="01-05-2016"
            // maxDate="01-05-2016"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={customStyles}
            onDateChange={(value) => setBirth(value)}
            iconComponent={ <Icon name={'cake-variant'} size={26} color={color1} style={ style.dateIcon}/> }
        />
    )  
}