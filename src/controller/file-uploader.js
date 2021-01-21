const axios = require('axios')

async function post(req, res, next) {
    const info = req.body.build
    let responseText = 'O pipeline do projeto File Uploader terminou!\n'
    if (info.branch)  {
        responseText += `**Branch:** ${info.branch}\n`
    }
    if (info.author && info.author.name)  {
        responseText += `**Author:** ${info.author.name}\n`
    }
    if (info.state)  {
        responseText += `**Status:** ${info.state}\n`
    }
    if (info.web_url)  {
        responseText += `**URL:** ${info.web_url}`
    }

    await axios.post('https://chat.involves.com/hooks/rzzpyfqsoinjixmtb3wn6og49a', {
        text: responseText
    })

    res.writeHead(200)
    res.end()
}

module.exports = {
    post
}