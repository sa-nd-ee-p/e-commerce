import { ProductService } from "src/app/services/product.service";
import { ProductService as DummyProductService } from "src/app/services/product.service copy";
export const environment = {
  production: true,
  providers: [
    { provide: ProductService, useClass: DummyProductService },
],
};
