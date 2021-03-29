import { NextApiRequest, NextApiResponse } from 'next'
import getScreenshot from '../../infra/getScreenshot'

const getHTML = ({title}) => 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">

    </head>
    <body>
        <div style="
        background-color: lightslategray;
        color: white;
        width: 500px;
        height: 500px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        font-size: 60px;
        ">
            ${title}  
    </div>
        
    </body>
    </html>
    
    `
    


export default async (req,res) => {
    const debugMode = false;
    const html = getHTML({
        title: req.query.title || 'DIGITE UM TEXTO VIA URL',        
    })
    if (debugMode) {
        res.setHeader('content-Type', 'text/html');
        return res.end(html)
    }

    const file = await getScreenshot(html);
    res.setHeader('content-Type', 'text/html');
    res.end(file)

}

