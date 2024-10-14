const PRODUCT_DB_FIELD = {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    available: 'available',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
}

interface Product {
    id: number,
    name: string,
    description: string | null,
    price: number,
    available: boolean,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    updatedBy: string,
    deletedAt: Date | null,
    deletedBy: string | null
}

interface CreateProduct {
    name: string;
    description: string | null;
    price: number;
    available: boolean;
    createdBy: string;
    updatedBy: string;
}

interface UpdateProduct {
    name: string;
    description: string | null;
    price: number;
    available: boolean;
    updatedBy: string;
}

interface MarkProductAsDeleted {
    deletedAt: Date | null;
    deletedBy: string | null;
}

export { PRODUCT_DB_FIELD, Product, CreateProduct, UpdateProduct, MarkProductAsDeleted };
