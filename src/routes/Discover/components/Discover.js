import React, {  useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import axios from 'axios';
export default function Discover() {

  const [newReleases, setNewReleases] = useState();
  const [playlists, setNewPlaylists] = useState();
  const [categories, setNewCategories] = useState();
  

  var token = 'BQCB6U6oO4H_iD5bKuihzj12U_O-wHq-AjBCqKGmVz-dML4VFlahwk0GTRGY0AevLzF3B1iHh7kJ9B7GHn28RGqy7yiIyD2Ztw-nN0EZKHL7u884r1JCsE9cF4F6QaVBcj0KNoyWLfa4PXdblsEmgaJDzLuq7KukFDH16vXVQZms1Iky2Zd8EZoWLC8WEL79PyhouYOmD6N90UHRiHA6Cn1M5t-A8No5ENF7zmQOG90556cUOHZzBPF1TPZYGyXSqIFHP0CsQR0foA';
  useEffect(() => {
    console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    display()
    display1()
    display2()
    
  //   const getAccessToken = async () => {
  //     const client_id = 'ac12976542294b3e86212cdc4d7d0a33'
  //     const client_secret = '320221bd064449fc85ebfbbbc1f253b4'
  //     const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
      
  //     // header paremeter
  //     const config = {
  //       headers: {
  //         Authorization: `Basic ${basic}`,
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       }
  //     }
      
  //     // request body parameter
  //     const data = new URLSearchParams([
  //       ['grant_type', 'refresh_token'],
  //       ['refresh_token',refresh_token]
  //     ]).toString()
  //     const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
  //     const response = await axios.post(TOKEN_ENDPOINT, data, config)
  //     console.log(response.data)
  // };
  // getAccessToken();
    
  },[])
 async function display() {
  
 
  var data = '';
  
  var config = {
    method: 'get',
    url: 'https://api.spotify.com/v1/browse/categories',
    headers: { 
      'Authorization': `Bearer ${token}`
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    setNewCategories((response.data.categories.items));
  })
  .catch(function (error) {
    console.log(error);
  });
   
  }

  async function display1() {
  
   
    var data = '';
    
    var config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/new-releases',
      headers: { 
        'Authorization': `Bearer ${token}`
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data.albums.items)
      setNewReleases(response.data.albums.items);
    })
    .catch(function (error) {
      console.log(error);
    });
     
    }

    async function display2() {
  
    
      var data = '';
      
      var config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/browse/featured-playlists',
        headers: { 
          'Authorization': `Bearer ${token}`
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data)
        setNewPlaylists((response.data.playlists.items));
      })
      .catch(function (error) {
        console.log(error);
      });
       
      }
   

    
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  
}

