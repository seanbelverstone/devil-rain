module.exports = (sequelize, DataTypes) => {
	
	const Gig = sequelize.define("Gig", {
	  date: DataTypes.STRING,
	  time: DataTypes.STRING,
	  location: DataTypes.STRING,
	  description: DataTypes.STRING,
	  type: DataTypes.STRING // private/FREE
	}, {});
  
	Gig.sync({ force: true });
	return Gig;
  };