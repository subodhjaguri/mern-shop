import jwt from "jsonwebtoken";
import asyncHandler from "express";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("token found");
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorised, no token");
  }

  next();
});

export { protect };
