import { z } from 'zod'

export const MessageSchema = z.object({
    content: z
    .string()
    .min(10,{message: 'Content must be at least of 5 characters'})
    .max(200, {message: 'Content must not be longer than 200 words'})
})