module.exports = (sequelize, DataTypes) => {
	
	const Gig = sequelize.define("Gig", {
	  position: DataTypes.INTEGER,
	  date: DataTypes.STRING,
	  time: DataTypes.STRING,
	  location: DataTypes.STRING,
	  description: DataTypes.STRING,
	  type: DataTypes.STRING, // private/FREE
	  img: DataTypes.STRING,
		cancelled: DataTypes.BOOLEAN
	}, {});
  
	Gig.sync({ force: true });
	return Gig;
  };