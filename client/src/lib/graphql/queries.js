import { GraphQLClient, gql } from "graphql-request";
import { getAccessToken } from "../auth";

const client = new GraphQLClient("http://localhost:9000/graphql", {
  headers: () => {
    const accessToken = getAccessToken();
    if (accessToken) {
      return { Authorization: `Bearer ${accessToken}` };
    }
    return {};
  },
});

export async function updateJob({ id, title, description }) {
  const mutation = gql`
    mutation UpdateJob($input: UpdateJobInput!) {
      job: updateJob(input: $input) {
        id
        title
        description
      }
    }
  `;

  const { job } = await client.request(mutation, {
    input: { id, title, description },
  });

  return job;
}

export async function deleteJob(id) {
  const mutation = gql`
    mutation DeleteJob($id: ID!) {
      job: deleteJob(id: $id) {
        title
      }
    }
  `;

  const { job } = await client.request(mutation, {
    input: { id },
  });

  return job;
}

export async function createJob({ title, description }) {
  const mutation = gql`
    mutation CreateJob($input: CreateJobInput!) {
      job: createJob(input: $input) {
        id
      }
    }
  `;

  const { job } = await client.request(mutation, {
    input: { title, description },
  });

  return job;
}

export async function getCompany(id) {
  const query = gql`
    query GetCompanyById($companyId: ID!) {
      company(id: $companyId) {
        id
        name
        description
        jobs {
          id
          date
          title
        }
      }
    }
  `;

  try {
    const { company } = await client.request(query, { companyId: id });
    return company;
  } catch (error) {
    // graphql-request throws ClientError for GraphQL errors
    console.error("GraphQL Error:", error);
    throw error; // Re-throw to let React Query handle it
  }
}

export async function getJob(id) {
  const query = gql`
    query getJobById($id: ID!) {
      job(id: $id) {
        id
        date
        title
        description
        company {
          id
          name
        }
      }
    }
  `;

  const { job } = await client.request(query, { id });
  return job;
}

export async function getJobs() {
  const query = gql`
    query getJobs {
      jobs {
        id
        date
        title
        company {
          id
          name
        }
      }
    }
  `;

  const { jobs } = await client.request(query);
  return jobs;
}
