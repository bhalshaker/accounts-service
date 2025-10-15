import database from '../services/database.js'; // Import the database connection from the newly created database service
import { ScanCommand } from '@aws-sdk/lib-dynamodb'; // Import ScanCommand for querying the DynamoDB table

async function getAllAccounts(req, res, next) {
  try {
    const params = {
      TableName: 'Accounts', // Specify the name of the table to scan
    };
    const command = new ScanCommand(params); // Create a new ScanCommand to get all items from the table
    const result = await database.send(command); // Send the command to DynamoDB and await the result
    res.status(200).json(result.Items); // Respond with the items found in the table
  } catch (err) {
    next(err); // Pass errors to the error-handling middleware
  }
}

function createAccount(req, res) {
  res.send(
    '🤖 Accounts Route with POST method - this endpoint will create a new account in the database'
  );
}

function getAccountById(req, res) {
  const accountId = req.params.id;
  res.send(
    '🤖 Accounts Route with GET method - this endpoint will get a single account by ID from the database. The account is: ' +
      accountId
  );
}

function updateAccountById(req, res) {
  const accountId = req.params.id;
  res.send(
    '🤖 Accounts Route with PUT method - this endpoint will update a single account by ID from the database. The account is: ' +
      accountId
  );
}

function deleteAccountById(req, res) {
  const accountId = req.params.id;
  res.send(
    '🤖 Accounts Route with DELETE method - this endpoint will delete a single account by ID from the database. The account is: ' +
      accountId
  );
}

export default {
  getAllAccounts,
  createAccount,
  getAccountById,
  updateAccountById,
  deleteAccountById,
};
