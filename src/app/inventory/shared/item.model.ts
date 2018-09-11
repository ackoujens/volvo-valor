export interface Item {
    /* Automatically generated entry key
       - Automatically generated
       - Read only
       - Optional since not required in document */
    id?: string;

    // Original or self generated barcode
    barcode: number;

    // Name of item
    title: string;

    // What kind of item is it?
    // TODO: Figure out Firestore Reference data type in model
    // itemCategory: Reference;

    // Is the item in stock or being shipped?
    // TODO: Figure out Firestore Reference data type in model
    // state: Reference;

    // What have you paid for this item?
    // Not including shipping or import fees )
    price: number;

    // How much did you pay to ship it over?
    // Not including import fees
    shippingCost: number;

    // How much import fees did you need to pay to customs?
    importDuties: number;

    // Where did this item come from?
    // TODO: Figure out Firestore Reference data type in model
    // source: Reference;

    // Image / Images of the product
    // TODO: Figure out how write array of image references
    // images: ???;

    // Desciption / specs / details of item
    body: string;
}
