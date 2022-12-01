module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishingHouse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Book;
};
