# Upserts with EdgeDB

### Setup
- `yarn install`
- `edgedb project init`
- `yarn edgedb:migrate`
- `yarn start`


### Usage
Modify the email in the upserUser.ts file to see upserts work

To see the query results:

- Run `yarn edgedb`
- Run this query: `select User { id, email };`