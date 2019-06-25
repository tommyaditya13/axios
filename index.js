const axios = require('axios')


const postBreeds = () => {
    try {
      return axios.post('http://103.29.149.233/resource_center/api/api_content/getContent',
      {
          headers:{
          "Authorization" : "Basic YWRtaW46PTQ1NDY4NjQwOA==",
          "Content-Type" : "application/x-www-form-urlencoded"}
      });
    } catch (error) {
      console.error(error)
    }
  }
  const countBreeds1 = async () => {
    const breeds = postBreeds()
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



const getBreeds = () => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(response => {
      if (response.data.message) {
        console.log(
          `Got ${Object.entries(response.data.message).length} breeds`
        )
      }
    })
    .catch(error => {
      console.log(error)
    })
}


countBreeds1()
