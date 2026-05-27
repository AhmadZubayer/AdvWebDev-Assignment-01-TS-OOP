# Pick & Omit are Much More then Just Utilities.

## How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

Pick and Omit are two of the important utility types in TypeScript. These two types play a crucial role in ensuring there is no need to write duplicate code snippet.

In traditional JavaScript, if there was needed to create an object with simialar properties to another existing object, a completely new object had to be written from scratch. This resulted in messy unnecessery repeated code.

```typescript
const Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
```

// new object
```typescript
const Product = {
  id: number;
  name: string;
};
```
here a entirely new object has been created.

Both Pick and Omit creates a part or slice from the main interface and reuse it.
but using typescript Pick and Omit utiliy types:

`Pick<T, K>` creates a new type just by picking specific properties from the main interface.
```typescript
type ProductSummary = Pick<Product, "id" | "name" | "price">;
```

`Omit<T, K>` creates a new type by removing specific keys from the main interface.
```typescript
type ProductWithoutStock = Omit<Product, "stock" | "color">;
```

These approaches significantly reduces LOC (Lines of code) by skipping repeated code snippets and reuses the already created main interface.
