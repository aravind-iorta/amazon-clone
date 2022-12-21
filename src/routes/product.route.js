import { Router } from "express";
import {
  addProductByCustomer,
  getProducts,
  getProductDetails,
  getReviewsByProductId,
  addReviewForProduct,
  updateProductByCustomer,
} from "../controllers/product.controller";

const productRouter = Router();

productRouter.post("/add", addProductByCustomer);
productRouter.post("/update", updateProductByCustomer);
productRouter.get("/all", getProducts);
productRouter.get("/:id", getProductDetails);
productRouter.post("/add/review", addReviewForProduct);
productRouter.get("/review/:productId", getReviewsByProductId);

export default productRouter;
