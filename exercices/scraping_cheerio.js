const cheerio = require('cheerio')
const fs = require('fs')
const page = fs.readFileSync('page.html', 'utf-8')
const $ = cheerio.load(page)

let result = []
const row = $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div')
const element = $('div', row)


element.each((index, div) => {
    if (index !== 0) {
        result.push({
            Article: $('div.caption > h4:nth-child(2) > a', div).text(),
            Prix: $('div.caption > h4.pull-right.price', div).text(),
        })
    }
})

console.log(result)
console.log(
    JSON.stringify(
        result.map(d => ({
            ...d,
        }))
    )
)