# Rails React Webpack App

This is a react on rails app base on [react-webpack-rails-tutorial](https://github.com/shakacode/react-webpack-rails-tutorial) using [react_on_rails](https://github.com/shakacode/react_on_rails/) gem.

I created this app as a playground to compare three different approaches for the same UI.
- Default Rails
- Rails with Ajax
- React

## Getting Started

Install dependencies (bundle and npm)

```
bundle && npm install
```

Run your rails server

```
foreman start -f Procfile.dev
```

## Thoughts

At first, I thought that I had to implement with JavaScript framework such as
React and Angular in order to have a fast UI. But as a result of the comparison
that I performed here with this app, I realized that for this type simple UI,
I can simply use Rails with Ajax. React can add unnecessary complexity to the app.

As a next step, I will explore implementing fast UI simply with Rails and Ajax.
I could utilize Turbolinks 5 for further optimization.
