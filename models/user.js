var bcrypt = require("bcrypt");

module.exports = function (sequalize, DataTypes) {
    let User = sequalize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password:
        {
            type: DataTypes.STRING,
            allowNullL: false
        },
        firstName: DataTypes.TEXT,
        lastName: DataTypes.TEXT,
        phoneNumber: DataTypes.STRING,
        role: DataTypes.TEXT
    },
        {
            timestamp: false
        });

    User.association = function(models){
        User.hasMany(models.Order,{
            onDelete: "cascade"
        });
    };   

    User.association = function(models){
        User.hasMany(models.Reservation,{
            onDelete: "cascade"
        });
    }; 
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync
            (user.password, bcrypt.genSaltSync(10), null);
    });
    return User;

}
