module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.string,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.string,
      allowNull: true,
    },
    writer: {
      type: DataTypes.string,
      allowNull: false,
    },
    publishingHouse: {
      type: DataTypes.string,
      allowNull: false,
    },
    publicationDate: {
      type: DataTypes.Date,
      allowNull: false,
    },
    description: {
      type: DataTypes.string,
      allowNull: false,
    },
  });
  return Book;
};
