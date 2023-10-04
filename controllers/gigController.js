const db = require("../models");

module.exports = {
  get: (request, response) => {
    db.Gig.findAll({}, 
		).then(orders => {
      response.json(orders);
    });
  },

  create: (request, response) => {
    console.log(request.body);
    db.Gig
      .create(request.body)
      .then(newGig => response.json(newGig))
      .catch(err => response.status(422).json(err));
  },

  update: (request, response) => {
    db.Gig
      .findOne({where: {id: request.body.id}})
      .then(
        db.Gig.update({
        completed: request.body.completed
      }, { where: {
        id: request.body.id
      }}))
      .then(updatedGig => {
        response.json(updatedGig);
      })
  },

  delete: (request, response) => {
    const id = request.params.id
    db.Gig
      .destroy({
        where: { id: id }
      })
      .then(deletedGig => {
          response.json(deletedGig)
      })
      .catch(err => response.status(422).json(err));
  }
};