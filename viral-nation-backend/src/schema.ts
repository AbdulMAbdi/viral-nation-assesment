import { makeExecutableSchema } from "@graphql-tools/schema";
import type { GraphQLContext } from "./context";
import type { Profile } from "@prisma/client";

const typeDefinitions = /* GraphQL */ `
  type Query {
    info: String!
    feed: [Profile!]!
    getProfile(email: String!): Profile
  }

  type Mutation {
    postProfile(
      avatarUrl: String!
      description: String!
      firstName: String
      lastName: String
      isVerified: Boolean
      email: String!
    ): Profile!
    updateProfile(
      avatarUrl: String
      description: String
      firstName: String
      lastName: String
      isVerified: Boolean
      email: String!
    ): Profile!
  }

  type Profile {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    description: String
    avatarUrl: String
    isVerified: Boolean
  }

  type UpdateProfileResponse {
    code: Int!
    success: Boolean!
    message: String!
    profile: Profile!
  }
`;

const resolvers = {
  Query: {
    feed: (parent: unknown, args: {}, context: GraphQLContext) =>
      context.prisma.profile.findMany(),
    async getProfile(
      parent: unknown,
      args: {
        email: string;
      },
      context: GraphQLContext
    ) {
      const foundProfile = await context.prisma.profile.findFirst({
        where: {
          email: args.email,
        },
      });
      return foundProfile;
    },
  },
  Mutation: {
    async postProfile(
      parent: unknown,
      args: {
        description: string;
        avatarUrl: string;
        firstName: string;
        lastName: string;
        email: string;
        isVerified: boolean;
      },
      context: GraphQLContext
    ) {
      const newProfile = await context.prisma.profile.create({
        data: {
          avatarUrl: args.avatarUrl,
          description: args.description,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          isVerified: args.isVerified,
        },
      });
      return newProfile;
    },
    async updateProfile(
      parent: unknown,
      args: {
        description: string;
        avatarUrl: string;
        firstName: string;
        lastName: string;
        email: string;
        isVerified: boolean;
      },
      context: GraphQLContext
    ) {
      const updatedProfile = await context.prisma.profile.update({
        where: {
          email: args.email,
        },
        data: {
          avatarUrl: args.avatarUrl,
          description: args.description,
          firstName: args.firstName,
          lastName: args.lastName,
          isVerified: args.isVerified,
        },
      });
      return updatedProfile;
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
