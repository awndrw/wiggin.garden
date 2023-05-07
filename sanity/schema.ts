import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "note",
      type: "document",
      title: "Note",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "date",
          type: "date",
          title: "Date",
        },
        {
          name: "body",
          type: "text",
          title: "Body",
        },
      ],
    },
  ],
};
