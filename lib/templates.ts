import path from "path"
import fs from 'fs'
import Mustache from 'mustache';

const basePath = 'templates'

export const template  = <T>(template: string, data: T) : string => {
    const base = path.join(basePath, template)
    const html = fs.readFileSync(base)
    return Mustache.render(html.toString('utf-8'), data)
}