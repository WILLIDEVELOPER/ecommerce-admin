import * as z from "zod";

export const storeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
});

export const billboardSchema = z.object({
  label: z.string().min(1, { message: "Label is required" }),
  imageUrl: z.string().min(1, { message: "Image URL is required" }),
});

export const categorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  billboardId: z.string().min(1, { message: "Billboard is required" }),
});

export const sizeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  value: z.string().min(1, { message: "Value is required" }),
});

export const colorSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  value: z
    .string()
    .min(4)
    .regex(/^#/, { message: "String must be a valid hex color code" }),
});

export const productSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  images: z.object({url: z.string()}).array(),
  price: z.coerce.number().min(1),
  categoryId: z.string().min(1),
  colorId: z.string().min(1),
  sizeId: z.string().min(1),
  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional(),
});
