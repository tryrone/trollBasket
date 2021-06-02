import React from 'react'
import { View, Text,Image,TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';
import { images } from '../../constants';

const style = require('./detailsStyle');

 function Ratings() {
      return (
        <View style={style.ratingsWrap}>
          <View style={style.ratingsHeaderWrap}>
            <Text style={style.ratingsTitle}>Review and Ratings</Text>
            <TouchableOpacity>
            <Text style={style.viewAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={style.ratingsFlex}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={3.0}
              starSize={12}
              containerStyle={{ width: 64.36, marginTop: 22 }}
              fullStarColor="#FFCA42"
              emptyStarColor="#EEEFF2"
            />
            <Text style={style.rating}>3.0</Text>
          </View>

          <Text style={style.ratingText} >
            This is the best product I have used in a long while and the size
            fits perfectly and I love the colors!!!!!
          </Text>

          <View style={style.userRatingWrap}>
            <Image source={images.segun} style={style.userAvater} />
            <Text style={style.userName}>Segun Arinze</Text>
          </View>
       

        </View>
      );
}

export default Ratings;
