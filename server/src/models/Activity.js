const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM("No difficulty", "1", "2", "3", "4", "5"),
        allowNull: false,
      },
      duration: {
        type: DataTypes.ENUM(
          "No fixed duration",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24"
        ),
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM(
          "No season",
          "Spring",
          "Summer",
          "Autumn",
          "Winter"
        ),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
