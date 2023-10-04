const db = require("../models");
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  get: (request, response) => {
    db.Gig.findAll({}, 
		).then(orders => {
      response.json(orders);
    });
  },

  create: async (request, response) => {
	let reqBody;
	await axios.get("https://www.lemonrock.com/devilrain?page=gigs").then(function(res) {
		// Load the html body from axios into cheerio
		const $ = cheerio.load(res.data);
		$("article").each(function(i, element) {
		  // Save the text and href of each link enclosed in the current element
		  const dateObj = $(element).find(".new-cal");
		  const day = dateObj.find(".new-dow").text()
		  const month = dateObj.find(".new-mon").text()
		  const date = dateObj.find(".new-day").text()
		  const fullDate = `${day} ${date} ${month}`;
		  const time = $(element).find(".subit").find('.tabgi').find('.tabgi-time').text();

		  reqBody = {
			date: fullDate,
			time
		}
		db.Gig
		.create(reqBody)
	})

		// .then(newGig => response.json(newGig))
		// .catch(err => response.status(422).json(err));
		//   const img = $(element).find("a").find("img").attr("src");
		//   const caption = $(element).find("p").text();
		//   const link = $(element).find("a").attr("href");
	})


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