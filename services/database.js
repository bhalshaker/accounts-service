// Added import for ListTablesCommand to enable listing DynamoDB tables
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  region: 'us-east-1',
  // Modified: Use an environment variable for the endpoint, with a fallback to local DynamoDB
  endpoint: process.env.DYNAMODB_ENDPOINT || 'http://dynamodb:8000',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy',
  },
});

const database = DynamoDBDocumentClient.from(client);

// New function: Allows listing of all tables in the connected DynamoDB instance
export async function listDatabaseTables() {
  try {
    const command = new ListTablesCommand({}); // Creates a command to list tables
    const response = await database.send(command); // Executes the command and fetches the table names
    console.log('Tables:', response.TableNames); // Logs the table names
  } catch (error) {
    console.error('Error listing tables:', error); // Logs any errors encountered
  }
}

export default database;
