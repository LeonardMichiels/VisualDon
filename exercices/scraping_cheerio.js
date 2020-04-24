const cheerio = require('cheerio')
const fs = require('fs')
const page = fs.readFileSync('page.html', 'utf-8')
const $ = cheerio.load(page)

let result = []
const row = $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div')
const element = $('div', row)
element.each((index, h4) => {
    if (index !== 0) {
        result.push({
            nom: $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div:nth-child(4) > div > div.caption > h4:nth-child(2) > a', h4).attr('title'),
            prix: $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div:nth-child(4) > div > div.caption > h4.pull-right.price', h4).text()
        })
    }
})
console.log(result)
console.log(
    JSON.stringify(
        result.map(d => ({
            ...d,
            titres: Number(d.titres)
        }))
    )
)