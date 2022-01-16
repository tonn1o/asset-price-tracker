# Asset Price Tracker

Time spent: ~2h

## Versions

Node: `v12.11+`
Angular: `v11.2.13`
RxJS: `v6.6.0`

## Install

1. `npm install`
2. `npm start`
3. go to [http://localhost:4200/](http://localhost:4200/)

## Features

- Usage of RxJS
- Saving/Restoring state via query params
- Accessibility

## Q&A

**What happens in case the websocket disconnects?**

Normally, when websocket disconnects you will get `onclose` event with `code` which will indicate a reason of the disconnection.

**How would you go further to keep the live data available or inform the user?**
If it's some kind of BE error I would try to re-establish websocket connection and subscribe to its data again.
Since user of the application always expects to see an actual data, it makes sense to show him notification/alert massage about connection problems and prevent his use of API endpoints (so he won't buy a stock without knowing actual price of it).

**What happens if a user adds an instrument multiple times to their list? Please discuss possible challenges and mitigations.**
If user adds an instrument multiple times the problem would be to unsubscribe from the WS event. Since we have only one source of data (WS) and multiple consumers of the data, if we unsubscribe from one event, then all other consumers would lose data from the event tpp. The problem can be solved by implementing Publisher-Subscriber Pattern, so we will have a Pub-Sub manager which won't unsubscribe from an event if there's at least one subscriber for the event.
