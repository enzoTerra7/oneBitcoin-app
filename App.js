import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import CurrentPrice from './src/Components/CurrentPrice';
import HistoryGraphic from './src/Components/HistoryGraphic';
import QuotationList from './src/Components/QuotationList';
import QuotationItem from './src/Components/QuotationList/QuotationItem';

function addZero(number){
  if(number < 10){
    return `0${number}`
  } else {
    return number
  }
}

function url(daysQtd){
  const todayDate = new Date()
  const finallyDate = new Date()
  finallyDate = finallyDate.setDate(finallyDate.getDate() - daysQtd)
  const endDate = `${todayDate.getFullYear()}-${addZero(todayDate.getMonth() + 1)}-${addZero(todayDate.getDate())}`
  const startDate = `${finallyDate.getFullYear()}-${addZero(finallyDate.getMonth() + 1)}-${addZero(finallyDate.getDate())}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

async function getPriceCoins(url){
  let response = await fetch(url)
  let returnApi = await response.json()
  let listQuotes = returnApi.bpi
  const coinsList = Object.keys(listQuotes).map((key) => {
    return {
      date: key.split('-').reverse().join(),
      valor: listQuotes[key]
    }
  })
  let data = coinsList.reverse()
  return data
}

async function getGraphic(url){
  let response = await fetch(url)
  let returnApi = await response.json()
  let listQuotes = returnApi.bpi
  const coinsList = Object.keys(listQuotes).map((key) => {
    listQuotes[key]
  })
  return coinsList
}

export default function App() {

  const [coinList, setCoinList] = useState([])
  const [coinGraphicList, setCoinGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)

  const updateDay = (number) => {
    setDays(number)
    setUpdateData(true)
  }

  useEffect(() => {
    const isMounted = true
    if(isMounted && updateData){
      getPriceCoins(url(days)).then(res => setCoinList(res))
      getGraphic(url(days)).then(res => setCoinGraphicList(res))
    }
    if(updateData) setUpdateData(false)
    if(!isMounted){
      return {}
    }
  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="ligth-content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationList />
      <QuotationItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Plataform.OS === 'android' ? 40 : 0
  },
});
