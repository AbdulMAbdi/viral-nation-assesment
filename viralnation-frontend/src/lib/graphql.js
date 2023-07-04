const graphqlQueries = {
  getAll: {
    operationName: "feed",
    query: `query 
          feed { feed {      avatarUrl
            description
            firstName, 
            lastName, 
            email, isVerified}
      
          }
        `,
    variables: {},
  },
  getEmails: {
    operationName: "feed",
    query: `query 
          feed { feed {
            email}
      
          }
        `,
    variables: {},
  },
  getProfilesSortEmail: {
    operationName: "feedSortEmail",
    query: `query 
          feedSortEmail($sort:String!) {   feedSortEmail(sort:$sort)  { avatarUrl
            description
            firstName, 
            lastName, 
            email, isVerified}
      
          }
        `,
    variables: {},
  },
  getProfiles: {
    operationName: "getProfiles",
    query: `query 
          getProfiles($name:String!) { getProfiles(name:$name) {      avatarUrl
            description
            firstName
            lastName
            email}
      
          }
        `,
    variables: {},
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
  deleteProfile: {
    operationName: "deleteProfile",
    query: `mutation
        deleteProfile($email: String!) { deleteProfile(email: $email) {      avatarUrl
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
  if (operationName === "getProfilesSortEmail") {
    callback(data.data.feedSortEmail);
  }
  if (operationName === "getAll") {
    callback(data.data.feed);
  }
  if (operationName === "getEmails") {
    callback(data.data.feed.map((profile) => profile.email));
  }
  if (operationName === "getProfiles") {
    callback(data.data);
  }
}
