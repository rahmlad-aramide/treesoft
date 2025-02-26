import { blogs } from "./data";

export async function GET () {
 
    return Response.json(blogs, {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// export async function POST () {
//     return 
// }