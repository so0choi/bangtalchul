'use server'

import {z, ZodError} from 'zod'

const schema = z.object({
    email: z.email(),
    password: z.string(),
    phone: z.string().optional(),
    name: z.string(),
    preferenceTags: z.array(z.string()).optional()
})

export async function signUp(formData: FormData) {
    'use server'

    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phone: formData.get('phone'),
        preferenceTags: formData.get('preferenceTags'),
    }
    console.log(rawFormData)
    const validatedFields = schema.safeParse(rawFormData)

    if (!validatedFields.success){
        return {
            error: validatedFields.error.issues.flat()
        }
    }

    console.log(validatedFields.data)
    // fetch('http://localhost:8080')
}