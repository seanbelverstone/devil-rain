const db = require("../models");
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  get: (request, response) => {
    db.Gig.findAll({}, 
		).then(res => {
      response.json(res);
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

			const time = $(element).find('.tabgi').find('.tabgi-time').text();
			const location = $(element).find("a").text();
			const description = $(element).find('.ipe').text();
			const type = $(element).find('.tabgi').find('.tabgi-fee').text();
			const img = $(element).find('.imgfit').find("img").attr("data-src")
			const backupImg = $(element).find('.imgfit').find("img").attr("src");
			const cancelled = $(element).find('.cancelled').text();

			reqBody = {
				position: i,
				date: fullDate,
				time,
				location: location?.split('Devil Rain')[1],
				description,
				type,
				img: img ? img : backupImg,
				cancelled: cancelled === 'CANCELLED'
			}
		db.Gig
		.create(reqBody)
		// .then(newGig => response.json(newGig))
		.catch();
		})
	})
  },
  delete: () => {
	db.Gig.truncate();
  }
};
