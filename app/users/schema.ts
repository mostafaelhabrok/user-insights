import { z } from 'zod';


const schema = z.object({
    name:z.string(),
    age: z.string(),
    activeStatus: z.literal('0').or(z.literal('1')).or(z.literal('2')),
    sort: z.string(),
    order:z.string()
});

export default schema;