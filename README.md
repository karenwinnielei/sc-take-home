# sc-take-home

## Tweet Requirements:

- message
- author
- timestamp

Here is a table with the `endpoint` descriptions:

| Action                | URL                               | Method | Response                     |
| :-------------------- | :-------------------------------- | :----- | :--------------------------- |
| Create a tweet        | /api/tweets                       | POST   | the tweet                    |
| Create a reply        | /api/replies                      | POST   | the reply                    |
| View individual tweet | /api/tweets/{id}                  | GET    | individual tweet             |
| View all tweets       | /api/tweets                       | GET    | all tweets                   |
| View individual reply | /api/replies/{id}                 | GET    | individual reply             |
| View all replies      | /api/replies                      | GET    | all replies                  |
| View thread           | /api/tweets/{id}/tweetsandreplies | GET    | thread of tweets and replies |
