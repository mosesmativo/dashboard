import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";
import { aswUserPool } from "../util/awsUserPool";


export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {  
    const {email, password} = req.body;

    const attributes = [
      new CognitoUserAttribute({Name: "email", Value: email}),
    ];

    aswUserPool.signUp(email, password, attributes, null, async(err, awsResult) => {
        if(err) {
          console.log(err);
          return res.status(500).json({message: 'Unable to sign up User'});
        }

        const db = getDbConnection('react-auth-db');

        const startingInfo = {
          hairColor: '',
          favoriteFood: '',
          bio: '',
        }

        const result = await db.collection('users').insertOne({
          email,
          info: startingInfo,
        });

        const { insertedId } = result;

        jwt.sign({
          id: insertedId,
          isVerified: false,
          email: email,
          info: startingInfo,
        },
        process.env.JWT_SECRET,
        {expiresIn: '2d'},
        (err, token) => {
          if(err) return res.sendStatus(500);
          res.status(200).json({token});
        })
    });
  },
};
