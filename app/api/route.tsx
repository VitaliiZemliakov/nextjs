export function GET(request: Request): Response {
    console.log("GET request received:", request);

    return new Response("GET request received");
}

export function POST(request: Request) {
    console.log("POST request received:", request);
}

export function PUT(request: Request){
    console.log("PUT request received:", request);
}

export function DELETE(request: Request){
    console.log("DELETE request received:", request);
}