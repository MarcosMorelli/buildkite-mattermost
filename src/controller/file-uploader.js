async function post(req, res, next) {
    const response = `O pipeline do projeto File Uploader terminou!\n
**Branch:** ${req.body.build.branch}\n
**Author:** ${req.body.build.author.name}\n
**Status:** ${req.body.build.state}\n
**URL:** ${req.body.build.web_url}`

    await axios.post('https://chat.involves.com/hooks/rzzpyfqsoinjixmtb3wn6og49a', {
        text: response
    })

    res.writeHead(200)
    res.end()
}

module.exports = {
    post
}