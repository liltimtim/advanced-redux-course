# Middleware

Actions send to `middleware`

**Middleware**: has opportunity to log, stop, modify, or not touch an action

> sit between action creators and reducers

## App To Build
Make ajax request to load list of users, show one badge/profile component.  Each profile will have username, company name, and email button to send an email to that particular person.

> middleware will help us fetch data. 

### Middleware
You can have as much middleware as you want / need in an app.  Each middleware may do various things.  

> we will build middleware to wait until a network request has finished before returning from an action creator

Middleware forwards things using the `next` keyword.  If a middleware doesn't repsond to / or need to modifying anything, it will use the `next` keyword to signal to send to the next middleware in the chain of middleware. 

Visualized:

action --> |-m1-do something-| --next--> |-m2 do something-| --next--> |-m3 do something-| --next-->

### Middleware signature
```
export default function({ dispatch }) {
  return next => action => {
    console.log(action);

    next(action);
  };
}
```
We pull off the `dispatch` property that we want. We have a function that returns a function that returns a function. 

> instructor didn't know why the signature was like this...

Top level function is always called with `dispatch`. 

Our middleware will look for an action with a `promise` on its payload object.  It will intercept that promise and wait until its resolved. We will create a new action once its resolve, send it through all the middleware again. On this cycle though, the payload wont have a promise

> we do not call `next` in this case once our promise has finished.  WE call `dispatch` instead. 

