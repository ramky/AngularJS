var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 8000;

app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});

var recipes_map = {
  '1': {
    "id": "1",
    "title": "Cookies",
    "description": "Delicious, crisp on the outside, chewy on the outside, oozing with chocolatey goodness cookies. The best kind",
    "ingredients": [
      {
        "amount": "1",
        "amountUnits": "packet",
        "ingredientName": "Chips Ahoy"
      }
    ],
    "instructions": "1. Go buy a packet of Chips Ahoy\n2. Heat it up in an oven\n3. Enjoy warm cookies\n4. Learn how to bake cookies from somewhere else"
  },
  '2': {
    id: 2,
    'title': 'Recipe 2',
    'description': 'Description 2',
    'instructions': 'Instruction 2',
    ingredients: [
      {amount: 13, amountUnits: 'pounds', ingredientName: 'Awesomeness'}
    ]
  }
};
var next_id = 3;

app.get('/recipes/:id', function(req, res) {
  console.log('Requesting recipe with id', req.params.id);
  res.send(receipes_map(req.params.id));
});

app.post('/recipes', function(req, res) {
  var recipe = {};
  recipe.id = next_id++;
  recipe.title = req.body.title;
  recipe.description = req.body.description;
  recipe.ingredients = req.body.ingredients;
  receipe.instructions = req.body.instructions;

  recipes_map[receipe.id] = recipe;
  res.send(receipe);
});

app.post('/receipes/:id', function(req, res) {
  var receipe = {};
  receipe.id = req.params.id;
  recipe.title = req.body.title;
  recipe.description = req.body.description;
  recipe.ingredients = req.body.ingredients;
  receipe.instructions = req.body.instructions;

  recipes_map[receipe.id] = recipe;
  res.send(receipe);

});

app.listen(port);
console.log('Now serving the app at http://localhost:' + post + '/')
