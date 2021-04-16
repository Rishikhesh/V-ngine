import axios from 'axios'

const KEY = 'AIzaSyDkCxujrNljbrby2BkkB_D_U-qLWMctmJk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: "snippet",
    maxResults: 5,
    key : KEY
  }
});
