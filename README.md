## What are some differences between interfaces and types in TypeScript?

# differences 1
Interface define the strucure of an object and type can describe object, uninon and others

```ts
interface User {
  id: number;
  name: string;
}

type User = {
  id: number;
  name: string;
};
```

# differences 2
Interface can extend other interface but not extend type on the other hand type can extend both interface and type.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

type User2 = {
  id: number;
  name: string;
};

type Admin = User2 & {
  role: string;
};

```

# differences 3
Interface not supported unions or intersections etc type on the other hand type support unions intersections etc.

```ts
type Status = "success" | "error" | "pending";
```

# differences 4

Interface does not support Tuples and priemitives but type suppost them.



interfaces are best for object  types are best for more complex type.


-----------------------------------------------------------------
-----------------------------------------------------------------


## What is the use of the keyof keyword in TypeScript? Provide an example.

To use object properties as a type we use keyof keywords. keyof bring the object type's key as a union type. So keyof allow us to use object properties as type.

```ts
interface IUser {
    id: number;
    name: string;
}
type PropertiesType = keyof IUser; 

```
the type will be like

PropertiesType = "id" | "name"

