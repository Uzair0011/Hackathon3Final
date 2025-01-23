//schema

import { defineType} from "sanity";

// structure of your content
export const Product = defineType({
  // backend
  name: "product",
  //   UI show
  title: "Product Shoes",
  //   document type
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      // options: {
      //   hotspot: true, // Enable image cropping
      // },
    },
    {
      name: "title",
      title: "Title Name",
      type: "string",
    },
    {
      name: "gender",
      title: "Gender Shoes",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "price",
      title: "Title Price",
      type: "number",
    },
    {
      name: "slug",
      title: "Product Slug",
      type: "slug",
      options: {
        source: "title", // Automatically generates the slug from a title field
        maxLength: 200, // Optional: limits the length of the slug
      },
    },
    // {
    //   name: "id",
    //   title: "ID",
    //   type: "string",
    // },

    // {
    //   name: "description",
    //   title: "Title Description",
    //   type: "text",
    // },
  ],
});
