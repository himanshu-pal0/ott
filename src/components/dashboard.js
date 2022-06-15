import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Dimensions, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = (props) => {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
    const CarouselCardItem = ({ item, index }) => {
        return (
            <View>
                <Image
                    source={item}
                    style={{
                        width: '100%',
                        height: 250,
                        borderRadius: 10,
                        resizeMode: 'contain',
                        overflow: 'hidden',
                    }}></Image>

            </View>
        )
    }
    const isCarousel = React.useRef(null)
    const [images, setimages] = useState([
        require('../assets/movie3.webp'),
        require('../assets/movie4.webp'),
        require('../assets/movie5.webp'),
        require('../assets/movie6.webp')
    ]);
    const [banners, setBanners] = useState([
        require('../assets/banner1.webp'),
        require('../assets/banner2.webp'),
        require('../assets/banner3.webp'),
        require('../assets/banner4.webp')
    ]);

    return (
        <SafeAreaView style={{ flex: 1, paddingVertical: 10, backgroundColor: '#0c111b' }}>
            <ScrollView>
                <View style={{ marginVertical: 10 }}>
                    <Carousel
                        layout="default"
                        layoutCardOffset={9}
                        ref={isCarousel}
                        data={banners}
                        renderItem={CarouselCardItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        inactiveSlideShift={0}
                        useScrollView={true}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <View style={{ marginHorizontal: 8 }}>
                        <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Latest & Tending</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={images}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginHorizontal: 5 }}>
                                        <Image
                                            source={item}
                                            style={{
                                                width: 180,
                                                height: 250,
                                                borderRadius: 10,
                                                resizeMode: 'contain',
                                                overflow: 'hidden',
                                            }}></Image>

                                    </View>
                                );
                            }}

                        />
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                <View style={{ marginHorizontal: 8 }}>
                        <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Popular Shows</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                          <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={banners}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginHorizontal: 5 }}>
                                        <Image
                                            source={item}
                                            style={{
                                               width: 300,
                                               height:170,
                                                borderRadius: 10,
                                                resizeMode: 'contain',
                                                overflow: 'hidden',
                                            }}></Image>

                                    </View>
                                );
                            }}

                        />
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <View style={{ marginHorizontal: 8 }}>
                        <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Movies Recommended For You</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={images}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ marginHorizontal: 5 }}>
                                        <Image
                                            source={item}
                                            style={{
                                                width: 180,
                                                height: 250,
                                                borderRadius: 10,
                                                resizeMode: 'contain',
                                                overflow: 'hidden',
                                            }}></Image>

                                    </View>
                                );
                            }}

                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard;


