import { getAllUsers, createUser, loginUser, getSingleUser, updateUser, logoutUser, deleteUser, resetPassword } from "./../controllers/user.js"
import { Router } from "express"


const router: Router = Router()

router.get("/", getAllUsers)
router.post("/", createUser)
router.post("/login", loginUser)
router.get("/:id", getSingleUser)
router.put("/:id", updateUser)
router.get("/logout", logoutUser)
router.delete("/:id", deleteUser)
router.post("/reset", resetPassword)

export default router