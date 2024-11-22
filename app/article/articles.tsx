import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Articles() {
  const [query, setQuery] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Link href="/homepage/home"> 
          <Image source={require('@/assets/images/back.png')} style={styles.backButton}/>
        </Link>
        <Text style={styles.title}>Top Doctors</Text>
        <View style={{ width: 20 }} />
      </View>

     <View style={styles.searchBar}>
          <Image source={require('../../assets/images/search.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search doctors, drugs, articles..."
            placeholderTextColor="#A1A8B0"
            value={query}
            onChangeText={setQuery}
            keyboardType="default"
            autoCapitalize="none"
          />
      </View>

      <Text style={styles.categoryTitle}>Popular Articles</Text>
      <View style={styles.categoryArticle}>
        
        <TouchableOpacity style={styles.categoryLink}>
          <Text style={styles.categoryText}>Covid-19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryLink}>
          <Text style={styles.categoryText}>Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryLink}>
          <Text style={styles.categoryText}>Fitness</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.trendingArticle}>
        <View style={styles.trendingTitle}>
        <Text style={styles.trentingText}>Trending Articles</Text>
          <TouchableOpacity>
            <Text style={styles.subTitle}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryArticle}>
          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleImage}>
              <Image source={require('../../assets/images/article1.png')} />
            </View>
            <Text style={styles.tags}>Covid-19</Text>
            <Text style={styles.articleText}>Comparing the AstraZeneca and Sinovac COVID-19 Vaccines</Text>
            <Text style={styles.articleDate}>19/2/2020</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleImage}>
              <Image source={require('../../assets/images/article2.png')} />
            </View>
            <Text style={styles.tags}>Covid-19</Text>
            <Text style={styles.articleText}>The Horror Of The Second Wave Of Covid-19</Text>
            <Text style={styles.articleDate}>19/2/2020</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.articleCard}>
            <View style={styles.articleImage}>
              <Image source={require('../../assets/images/article3.png')} />
            </View>
            <Text style={styles.tags}>Covid-19</Text>
            <Text style={styles.articleText}>Comparing the AstraZeneca and Sinovac COVID-19 Vaccines</Text>
            <Text style={styles.articleDate}>19/2/2020</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trendingTitle}>
        <Text style={styles.trentingText}>Related Articles</Text>
          <TouchableOpacity>
            <Text style={styles.subTitle}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.relatedArticles}>
          <TouchableOpacity style={styles.relatedCard}>
            <Image source={require('../../assets/images/related1.png')} />
            <View style={styles.relatedInfor}>
              <Text style={styles.relatedTitle}>Comparing the AstraZeneca and Sinovac COVID-19 Vaccines</Text>
              <Text style={styles.relatedDate}>19/2/2020</Text>
            </View>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.bookmark} />  
          </TouchableOpacity>
          <TouchableOpacity style={styles.relatedCard}>
            <Image source={require('../../assets/images/related2.png')} />
            <View style={styles.relatedInfor}>
              <Text style={styles.relatedTitle}>Traditional Herbal Medicine Treatments for COVID-19</Text>
              <Text style={styles.relatedDate}>19/2/2020</Text>
            </View>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.bookmark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.relatedCard}>
            <Image source={require('../../assets/images/related3.png')} />
            <View style={styles.relatedInfor}>
              <Text style={styles.relatedTitle}>Beauty Tips For Face: 10 Do and Don't for Naturally Beautiful Skin</Text>
              <Text style={styles.relatedDate}>19/2/2020</Text>
            </View>
            <Image source={require('../../assets/images/bookmark.png')} style={styles.bookmark} />
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 9,
    height: 18,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  article: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleContent: {
    fontSize: 16,
    color: '#666',
  },
  categoryArticle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryLink: {
    width: 130,
    height: 50,
    backgroundColor: '#199A8E',
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: 'bold',
  },
  trendingArticle: {
    marginTop: 20,
    marginBottom: 20,
  },
  trendingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  trentingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    color: '#199A8E',
    marginLeft: -50,
  },
  articleCard: {
    width: 154,
    height: 245,
    borderRadius: 15,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    marginRight: 10,
    position: 'relative',
  },
  articleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tags: {
    fontSize: 9,
    width: 45,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#E8F3F1',
    textAlign: 'center',
    color: '#199A8E',
  },
  articleImage: {
    alignItems: 'center',
  },
  articleDate: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#A1A8B0',
    fontSize: 12,
  },
  relatedArticles: {
    marginBottom: 20,
  },
  relatedInfor: {
    marginLeft: 10,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 250,
  },
  relatedDate: {
    color: '#A1A8B0',
    fontSize: 12,
  },
  relatedCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  bookmark: {
    width: 20,
    height: 20,
    marginLeft: -5,
    marginTop: 5,
  },
});
