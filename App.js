import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';


const headerImage = require('./assets/images/header.jpg');
const notification = require('./assets/images/Notification.png');
const banner = require('./assets/images/BG.png');
const model = require('./assets/images/model.png');
const fire = require('./assets/images/fire.png');
const cycle = require('./assets/images/cycle.png');
const yoga = require('./assets/images/yoga.png');
const walk = require('./assets/images/walk.png');
const next = require('./assets/images/next.png');
const couple = require('./assets/images/couple.jpg');
const star = require('./assets/images/star.png');
const book = require('./assets/images/book.png');
const play = require('./assets/images/play.png');
const home = require('./assets/images/home.png');
const heart = require('./assets/images/H.png');
const calendar = require('./assets/images/Calender.png');
const profile = require('./assets/images/User.png');
const plus = require('./assets/images/Plus.png');

const data = [
  {name: 'Cycling', status: 85, lightColor: '#f8e4d9', image: cycle, color: '#fcf1ea', darkColor: '#fac5a4'},
  {name: 'Walking', status: 25, lightColor: '#d7f0f7', image: walk, color: '#e8f7fc', darkColor: '#acaafc'},
  {name: 'Yoga', status: 85, lightColor: '#dad5fe', image: yoga, color: '#e7e3ff', darkColor: '#8860a2'}
]

const BottomTab = () => (
  <>
  <View style={{margin: 10, marginHorizontal: 25, alignSelf: 'center', borderRadius: 20, padding: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#EDEDED'}}>
    <BottomButton image={home}/>
    <BottomButton image={heart}/>
    <BottomButton 
      image={plus} 
      style={{top: -25, left: '43%', backgroundColor: 'white', padding: 8, borderRadius: 20, position: 'absolute'}}
    />
    <BottomButton image={calendar}/>
    <BottomButton image={profile}/>
  </View>
  </>
)

const BottomButton = ({image, style, imageStyle}) => (
  <>
  <View style={[{flex: 1, alignSelf: 'center', alignItems: 'center'}, style]}>
    <Image 
      source={image} 
      style={[{height: image == plus ? 40 : 20, width: image == plus ? 40 : 20}, imageStyle]}
    />
  </View>
  {
    image == home && (
      <View style={{backgroundColor: '#8860a2', width: '10%', position: 'absolute', height: 2, bottom: 0, left: 30}}/>
    )
  }
  </>
)


const VideoPlayer = () => (
  <View style={{borderRadius: 15, overflow: 'hidden', margin: 12, flex: 1, backgroundColor: 'white'}}>
    <View style={{borderRadius: 15, overflow: 'hidden'}}>
        <ImageBackground
          source={couple} 
          style={{height: 150, width: 300}}
        >
          <LinearGradient 
            locations={[0, 1.0]} 
            colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
            style={{position: 'absolute', height: '100%', width: '100%'}}
          ></LinearGradient>
        </ImageBackground>
      
    
    <Text style={{position: 'absolute', bottom: 0, left: 10, fontFamily: 'Poppins-Regular', color: 'white'}}>Transformation</Text>
    <View style={{position: 'absolute', backgroundColor: 'white', borderRadius: 5, padding: 5, top: 10, right: 10}}>
      <Image source={star} style={{height: 10, width: 10}}/>
    </View>
    </View>
    <View style={{backgroundColor: 'white', padding: 5}}>
    <View style={{position: 'absolute', backgroundColor: '#8860a2', borderRadius: 15, padding: 10, top: -10, right: 25, zIndex: 3}}>
      <Image source={play} style={{height: 10, width: 10}}/>
    </View>
      <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>
        2 hour Bulking Trainer
      </Text>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: 'black'}}>
          <Image source={book} style={{height: 15, width: 15}}/>
          {'  Beginner'}
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: '#8860a2'}}>
          45 Min
        </Text>
      </View>
    </View>
  </View>
)

const Card = ({data, index}) => {
  return(
    <View style={{flex: 1, height: index == 1 ? 180 : 150, alignItems: 'center', justifyContent: 'space-between', padding: 10, backgroundColor: data.color, borderRadius: 10, margin: 8, elevation: 5, shadowColor: 'lightgrey', shadowOpacity: 0.5, shadowRadius: 2, shadowOffset: {width: -5, height: 5}}}>
      <Image source={data.image} style={{height: 25, width: 25}}/>
      <View style={{ alignItems: 'center', margin: 5}}>
        <Progress.Circle  
          size={50}
          progress={data.status / 100} 
          showsText
          unfilledColor='#ededed'
          borderColor='#ededed'
          color={data.darkColor}
          direction='counter-clockwise'
          fill='white'
          strokeCap='round'
          thickness={5}
          style={{elevation: 10, shadowColor: 'grey'}}
          textStyle={{fontSize: 16, fontFamily: 'Poppins-Bold', fontWeight: 'bold'}}
        />
      </View>
      <View>
      <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>{'Day   1'}</Text>
      <Text style={{fontSize: 10, fontFamily: 'Poppins-Light'}}>{'Time   20 min'}</Text>
      </View>
      {/* <Text>{data.status}</Text> */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        
        <Text style={{fontFamily: 'Poppins-Regular', color: 'black'}}>{data.name}</Text>
        
        <View style={{backgroundColor: data.lightColor, padding: 2, borderRadius: 10}}>
          <Image source={next} style={{height: 10, width: 10}} resizeMode='contain' />
        </View>
        
      </View>
      
    </View>
  )
}

const OfferText = ({children}) => (
  <Text style={styles.offerText}>{children}</Text>
)

const Label = ({children}) => (
  <Text style={styles.label}>{children}</Text>
)

const Banner = () => (
  <>
    <ImageBackground source={banner} style={styles.banner}>
      <View style={styles.bannerContainer}>
        <View style={styles.rowLabel}>
          <View style={styles.fireContainer}>
            <Image 
              source={fire} 
              style={styles.fireImage} 
              resizeMode='contain' 
            />
          </View>
          <Text style={styles.offer}>Limited Offer</Text>
        
        </View>
        <OfferText>30% Discount</OfferText>
        <OfferText>Flash Sales</OfferText>
      </View>
    </ImageBackground>
    <Image
      source={model}
      resizeMode='contain'
      style={styles.model}
    />
  </>
)

const HeaderTitle = () => (
  <View style={styles.title}>
    <Text style={styles.bigTitle}>Hi, Jane</Text>
    <Text style={styles.smallTitle}>Aug 12, 2021</Text>
  </View>
)



const ImageContainer = ({ image, height = '100%', width = '100%' }) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={[{ height, width }]} />
  </View>
)


const Header = () => (
  <View style={styles.header}>
    <ImageContainer image={headerImage} />
    <HeaderTitle />
    <ImageContainer image={notification} height={'50%'} width={'50%'} />
  </View>
)


const App = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.screen}>
      <Header />
        <Banner />
      </View>
      <View style={{marginHorizontal: '3%'}}>
        <Label>Your Activities</Label>

        <View style={{flexDirection: 'row'}}>
          {
            data.map((item, index) => (
              <Card index={index} data={item}/>
            ))
          }
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Label>Fitness Video</Label>
          <Text style={{fontFamily: 'Poppins-Regular', opacity: 0.5, fontSize: 12}}>View All</Text>
        </View>
        
        <ScrollView horizontal>
          {
            data.map((item, index) => (
              <VideoPlayer index={index} />
            ))
          }
        </ScrollView>
      </View>
    </SafeAreaView>
    <BottomTab />
    </ScrollView >
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  title: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    flex: 1
  },
  bigTitle: {
    fontSize: 16,
    color: 'black',
    fontFamily: "Poppins-Medium"
  },
  smallTitle: {
    fontSize: 10,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    opacity: 0.6
  },
  banner: {
    padding: 30,
    marginTop: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
    borderRadius: 20,
    flexDirection: 'row',
    //flex: 1
  },
  screen: {
    margin: '3%',
    //flex: 1,
   // borderWidth: 1
  },
  model: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: '75%',
    width: '50%',
    transform: [{ rotateY: '180deg' }]
  },
  bannerContainer:{
    flex: 1, 
  },
  rowLabel:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  fireContainer:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  fireImage:{
    height: 15, 
    width: 15, 
    margin: 5, 
    alignSelf: 'center'
  },
  offer:{
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 8
  },
  offerText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular'
  },
  label:{
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginVertical: 10,
    color: 'black'
  }
});


export default App;