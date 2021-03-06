import { ObjectId } from 'bson';

/**
 * Ce fichier contient le type Product
 * qui est destiné à être réutilisé à travers les différents composants.
 */

type Product = {
  _id: ObjectId,
  name: string,
  price: number,
}

export default Product;
