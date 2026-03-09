// This is your API endpoint
export default function handler(req, res) {
    // Set content type to JSON
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Return JSON data
    res.status(200).json({
        success: true,
        message: "API is working!",
        timestamp: new Date().toISOString(),
        data: {
            whatsapp: "+639307661916",
            status: "online"
        }
    });
}
