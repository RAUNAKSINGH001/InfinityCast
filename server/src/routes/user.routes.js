import { Router } from "express";
import { verifyJWT } from "../middlewaares/auth.middleware.js";
import { registerUser  , loginUser , logoutUser} from "../controllers/user.controller.js";
const router = Router();
import { upload } from "../middlewaares/multer.middleware.js";
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT  ,  logoutUser)
export default router;
