import User from '../models/user.js'; // Correct path
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

export function postUsers(req, res) {
    const user = req.body;
    const password = req.body.password;

    const saltRound = 10;
    const passwordHash = bcrypt.hashSync(password, saltRound);

    console.log(passwordHash);

    user.password = passwordHash;

    const newUser = new User(user);

    newUser.save()
        .then(() => {
            res.json({
                message: "User created successfully"
            });
        })
        .catch(() => {
            res.json({
                message: "User creation failed"
            });
        });
}

export function loginUser(req, res) {
    const credentials = req.body;

    User.findOne({ email: credentials.email })
        .then((user) => { // Changed to find by email only, as password comparison is done with bcrypt
            if (user == null) {
                res.status(404).json({
                    message: "User not found"
                });
            } else {
                const isPasswordValid = bcrypt.compareSync(credentials.password, user.password);

                if (!isPasswordValid) {
                    res.status(403).json({
                        message: "Incorrect Password"
                    });
                } else {
                    const userDetail = {
                        _id: user._id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        type: user.type
                    };

                    const token = jwt.sign(userDetail, process.env.JWT_TOKEN_KEY, { expiresIn: "48h" });

                    res.json({
                        message: "User found",
                        user: user,
                        token: token
                    });
                }
            }
        })
        .catch((error) => {
            console.error("Error during user login:", error);
            res.status(500).json({
                message: "Login failed"
            });
        });
}

export function isAdminValid(req){
    if(req.user == null){
      return false//not a user
    }
    if (req.user.type != "admin") {
      return false//not a admin
    }
    return true//now he is a admin
  }

export function isCustomerValide(req){
    if(req.User == null){
        return false;
    }
    if(req.user.type != "customer"){
        return false;
    }
    return true;
}