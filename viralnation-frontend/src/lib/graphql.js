const graphqlQueries = {
  getAll: {
    operationName: "feed",
    query: `query 
          feed { feed {      avatarUrl
            description
            firstName, 
            lastName, 
            email}
      
          }
        `,
    variables: {},
  },
  getProfile: {
    operationName: "getProfile",
    query: `query 
          getProfile($email:String!) { getProfile(email:$email) {      avatarUrl
            description
            username
            email}
      
          }
        `,
    variables: { username: "Scottie1" },
  },
  createProfile: {
    operationName: "postProfile",
    query: `mutation
        postProfile($avatarUrl: String!, $desc: String!, $firstName:String!, $lastName: String!, $email: String!, $verified: Boolean!) { postProfile(firstName:$firstName, lastName:$lastName,
            avatarUrl:$avatarUrl, description: $desc, email: $email, isVerified: $verified ) {      avatarUrl
          description
          firstName
          lastName
          email}
    
        }
      `,
    variables: {},
  },
  updateProfile: {
    operationName: "updateProfile",
    query: `mutation
        updateProfile($avatarUrl: String!, $desc: String!, $firstName:String!, $lastName: String!, $email: String!, $verified: Boolean!) { updateProfile(firstName:$firstName, lastName:$lastName, 
            avatarUrl:$avatarUrl, description: $desc, email: $email, isVerified: $verified ) {      avatarUrl
          description
          firstName
          lastName
          email}
    
        }
      `,
    variables: {},
  },
};
export async function graphqlRequest(operationName, variables, callback) {
  var query = graphqlQueries[operationName];
  query.variables = variables;
  const headers = {
    "content-type": "application/json",
    Authorization: "<token>",
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQueries[operationName]),
  };

  const endpoint =
    "https://viral-nation-backend-adaa968c791c.herokuapp.com/graphql";

  const response = await fetch(endpoint, options);

  const data = await response.json();
  console.log(data);
  callback(data.data.feed);
}
