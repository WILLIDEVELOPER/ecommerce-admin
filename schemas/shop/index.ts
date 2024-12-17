import * as z from "zod";

export const storeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export const billboardSchema = z.object({
  label: z.string().min(1, { message: "Label is required" }),
  imageUrl: z.string().min(1, { message: "Image URL is required" }),
});
