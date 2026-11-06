// Entity 설계 예시
interface BaseEntity {
  id: number;
  createdAt: string;
}
interface Product extends Omit<BaseEntity, "createdAt"> {
  name: string;
  price?: number;
}
type ProductType = Omit<BaseEntity, "createdAt"> & { name: string; price?: number };
let product1: Product = { id: 1, name: "Laptop" };
let product2: ProductType = { id: 2, name: "Phone" };
